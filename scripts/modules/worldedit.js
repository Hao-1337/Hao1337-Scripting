/*
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 *         _    _  __            ____                          
 *        | |  | | \_\          / __ \                         
 *        | |__| | __ _  ___   | |  | |_   _  __ _ _ __   __ _ 
 *        |  __  |/ _` |/ _ \  | |  | | | | |/ _` | '_ \ / _` |
 *        | |  | | (_| | (_) | | |__| | |_| | (_| | | | | (_| |
 *        |_|  |_|\__,_|\___/   \___\_\\__,_|\__,_|_| |_|\__, |
 *                                                        __/ |
 *                                                        |___/ 
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 *
 * Minecraft Scripting API
 * @author Choigame123 (Choigame123#5666)
 * @helper no one
 *
 * @supporter NTTRedstone (NTTRedstone#2349)
 * @supporter NovaStak1245
 * @supporter DucDuck
 *
 * Do not steal without my permission
 */
import {
  ItemStack,
  BlockPermutation,
  Player,
  world,
  ItemTypes,
  Vector,
  system,
  errorHandle,
  VECTOR3 as vec3
} from "../main.js";

import { Particle, generator, centerGenerator } from "./utilities.js";
import Shapes from "./shapes.js";
import Timer from "./timer.js";



const config = {
  item: "choigame:world_edit_axe",
  pasteItem: "choigame:world_edit_structure",
  pickItem: "choigame:world_edit_picker",
  romLength: 10,
  structure_size: {
    x: 16,
    y: 319,
    z: 16
  },
  fill_size: {
    x: 31,
    y: 31,
    z: 31
  },
  "avoid-low-tps": false,
  log: false
};


export default class WorldEdit {

//=====================================================================
//                          STATIC FUNCTION
//=====================================================================
  static ROM = {};

  static updateConfig(data) {
    try {
      Object.assign(config, data);
    } catch (e) {
      errorHandle(e);
      return false;
    }
    return true;
  }

  static[Symbol.hasInstance](player) {
    return WorldEdit.ROM[player.id] !== undefined;
  }

  static wand(player) {
    const inv = player.getComponent("minecraft:inventory").container,
    item = new ItemStack(ItemTypes.get(config.item), 1);
    inv.setItem(player.selectedSlot, item);
  }

  static wand1(player) {
    const inv = player.getComponent("minecraft:inventory").container,
    item = new ItemStack(ItemTypes.get(config.pasteItem), 1);
    inv.setItem(player.selectedSlot, item);
  }

  static wand2(player) {
    const inv = player.getComponent("minecraft:inventory").container,
    item = new ItemStack(ItemTypes.get(config.pickItem), 1);
    inv.setItem(player.selectedSlot, item);
  }


//=====================================================================
//                         INITIALIZATION
//=====================================================================

  constructor(player) {
    if (!player instanceof Player) throw new SyntaxError("Input must be a player.");
    this.player = player;
    WorldEdit.ROM[player.id] = this;
    return this;
  }

  pos1;
  pos2;
  undo_log = [];
  redo_log = [];
  clone_log = [];
  in_progress = false;
  clone_data;
  blockTypes = [];

//=====================================================================
//                         USER INTERFACE
//=====================================================================

  tell(message) {
    return this.player.sendMessage(`§4[World Edit]${message.trim()}`);
  }
  frame_render_remove() {
    if (this.pn) return system.clearRun(this.pn);
    return false;
  }
  paste_render() {
    try {
      if (!this.clone_data) return this.tell("§cClipboard is empty!");
      if (!this.pastePos) return this.tell("§cPlease choose paste position");
      this.tell(`§aShow the preview of the clone data (§e${this.clone_data.dimension.x}§f×§e${this.clone_data.dimension.y}§f×§e${this.clone_data.dimension.z}§a)`)
      if (this.pp) system.clearRun(this.pp);
      this.pp = system.runInterval(() => Particle.frame(this.pastePos, {
        x: this.pastePos.x + this.clone_data.dimension.x,
        y: this.pastePos.y + this.clone_data.dimension.y,
        z: this.pastePos.z + this.clone_data.dimension.z
      }), 20);
    } catch (e) {
      world.debug(e);
    }
  }
  particle(name) {
    if (this.pn) system.clearRun(this.pn);
    return;
    this.pn = system.runInterval(() => Particle.frame(this.pos1, this.pos2, name), 20);
  }
  paste_render_remove() {
    if (this.pp) return system.clearRun(this.pp);
    return false;
  }
  coppy_render_remove() {
    if (this.pc) return system.clearRun(this.pc);
    return false;
  }
  pick_effect() {
      if (this.pe) system.clearRun(this.pe);
      this.pe = system.runInterval(() => Particle.frame(this.pickPos1, this.pickPos2, "choigame:line_pick"), 20);
  }
  pick_render_remove() {
    if (this.pe) return system.clearRun(this.pe);
    return false;
  }
//=====================================================================
//                           DIMENSION IO
//=====================================================================
  get pos1() {
    return this.pos1;
  }
  set pos1(loc) {
    if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
    this.pos1 = {
      x: loc.x,
      y: loc.y,
      z: loc.z
    };
  }
  
  get pos2() {
    return this.pos2;
  }
  set pos2(loc) {
    if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
    this.pos2 = {
      x: loc.x,
      y: loc.y,
      z: loc.z
    };
  }
  
  get pPos1() {
    return this.pickPos1;
  }
  set pPos1(loc) {
    if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
    this.pickPos1 = {
      x: loc.x,
      y: loc.y,
      z: loc.z
    };
  }
  
  get pPos2() {
    return this.pickPos2;
  }
  set pPos2(loc) {
    if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
    this.pickPos2 = {
      x: loc.x,
      y: loc.y,
      z: loc.z
    };
  }

  get pastePosition() {
    return this.pastePos;
  }
  set pastePosition(loc) {
    this.pastePos = {
      x: loc.x,
      y: loc.y,
      z: loc.z
    };
  }

  get volume() {
    let size = this.size;
    return (size.x + 1) * (size.y + 1) * (size.z + 1);
  }
  set volume(e) {
    throw new SyntaxError("Volume is read-only");
  }

  get size() {
    const x = [this.pos1.x, this.pos2.x].sort((a, b) => b - a),
      y = [this.pos1.y, this.pos2.y].sort((a, b) => b - a),
      z = [this.pos1.z, this.pos2.z].sort((a, b) => b - a),
      dx = (x[0] - x[1]) > 0 ? (x[0] - x[1]) : 1,
      dy = (y[0] - y[1]) > 0 ? (y[0] - y[1]) : 1,
      dz = (z[0] - z[1]) > 0 ? (z[0] - z[1]) : 1;
    return {
      x: x[0] - x[1],
      dx: dx,
      y: y[0] - y[1],
      dy: dy,
      z: z[0] - z[1],
      dz: dz
    };
  }
  set size(e) {
    throw new SyntaxError("size is read-only");
  }

  dim(pos1, pos2) {
    const x = [pos1.x, pos2.x].sort((a, b) => b - a),
      y = [pos1.y, pos2.y].sort((a, b) => b - a),
      z = [pos1.z, pos2.z].sort((a, b) => b - a),
      dx = (x[0] - x[1]) > 0 ? (x[0] - x[1]) : 1,
      dy = (y[0] - y[1]) > 0 ? (y[0] - y[1]) : 1,
      dz = (z[0] - z[1]) > 0 ? (z[0] - z[1]) : 1;
    return {
      x: x[0] - x[1],
      dx: dx,
      y: y[0] - y[1],
      dy: dy,
      z: z[0] - z[1],
      dz: dz
    };
  }
  posfrom(p1 = this.pos1, p2 = this.pos2) {
    const x = [p1.x, p2.x].sort((a, b) => b - a),
      y = [p1.y, p2.y].sort((a, b) => b - a),
      z = [p1.z, p2.z].sort((a, b) => b - a);
    return {
      pos1: {
        x1: x[1],
        y1: y[1],
        z1: z[1]
      },
      pos2: {
        x2: x[0],
        y2: y[0],
        z2: z[0]
      }
    }
  }
//=====================================================================
//                           BLOCK IO 
//=====================================================================
  getBlockFrom() {try{
      if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
      if (!this.pickPos1 || !this.pickPos2) return this.tell(`§c Please choose a location!`);

      let {pos1, pos2} = this.posfrom(this.pickPos1, this.pickPos2),
          cache =  [],
          last = 0;

      if (Math.sqrt((pos2.x2 - pos1.x1) ** 2 + (pos2.y2 - pos1.y1) ** 2 + (pos1.z1 - pos2.z2) ** 2) > 81) return this.tell(`§c The area to get blocks is too large (maximum 81 or 9×9 area)`);

      this.blockPerms = [];
      this.iblocks = [];

      for (let x = pos1.x1; x <= pos2.x2; x++)
      for (let y = pos1.y1; y <= pos2.y2; y++)
      for (let z = pos1.z1; z <= pos2.z2; z++) {
          let block = this.player.dimension.getBlock({x, y, z});
          if (block?.isValid()) {
              cache.push(block.permutation);
              this.blockPerms.push(block.permutation);
          }
      }
      
      let nco = Math.floor(100 / cache.length),
          lco = 100 - nco * cache.length,
          count = 0;

      for (let k = 0; k < cache.length; k++) this.iblocks[k] = {
        prb1: count + 1,
        prb2: (count += nco + (lco > 0 ? (lco--, 1) : 0))
      }
      this.pick_effect();
  }catch(e){world.debug(e)}}
  validBlocks(array) {
    for (let block of array) {
      try {
        BlockPermutation.resolve(block.id, block.states)
      } catch (e) {
        return {
          error: true,
          invalid: block
        }
      }
    }
    return {
      error: false
    };
  }
  replaceRender({
    replaceList = [],
    replaceOnly = false,
    inverseReplace = false
  }) {
   this.replacer = [];
   for (let b of replaceList) {
    try {
      if (typeof b === "string") {
        this.replacer.push({
          from: BlockPermutation.resolve(b).type.id,
          to: "*"
        });
        continue;
      }
      this.replacer.push({
        from: b.from,
        to: BlockPermutation.resolve(b.to)
      });
     } catch (e) {
       return {
         error: true,
         id: b
       }
     }
   }
   return {
     error: false
   };
  }
  getBlockPermutations(array) {
    this.blockPerms = [];
    for (let block of array) this.blockPerms.push(BlockPermutation.resolve(block.id, block.states))
  }
  randomBlock() {
    try {
      function randomPercent(n) {
        n = system.currentTick + Math.random() * parseInt(`0x${"xyyxxy".toId()}`);
        return Number(String(n.toFixed(5)).slice(2)) % 10001;
      }
      const inRange = (x, mi, mx) => x >= mi && x <= mx,
            randomNum = randomPercent();
      let o, index = this.iblocks.findIndex(v => inRange(randomNum, v.prb1 * 100, v.prb2 * 100));
      return this.blockPerms[index === -1 ? 0 : index];
    } catch (e) {
      errorHandle(e);
    }
  }

//=====================================================================
//                       SAVE - LOAD STRUCTURE 
//=====================================================================
  /**
   * Save the region into structure block
   * @param {Vector3} pos1
   * @param {Vector3} pos2
   * @param {Nunber} index mapping index
   * @param {String} h mapping name
   */
  async save(pos1, pos2, index, h = 'undo') {
    try {
      //Data retriever
      if (h === "undo" && this.undo_log.length > config.romLength) index = this.undo_log.shift().index;
      if (h === "redo" && this.redo_log.length > config.romLength) index = this.redo_log.shift().index;
      //Start progress
      this.in_progress = true;
      let pushData = [],
        cuboids = this.CuboidSplit(pos1, pos2, config.structure_size);
      for (let [index1, cuboid] of Object.entries(cuboids)) {
        await this.player.runCommandAsync(`structure save "${this.player.name}:${index}_${index1}_${h}" ${cuboid.pos1.x} ${cuboid.pos1.y} ${cuboid.pos1.z} ${cuboid.pos2.x} ${cuboid.pos2.y} ${cuboid.pos2.z} memory`);
        pushData.push({
          name: `${this.player.name}:${index}_${index1}_${h}`,
          pos1: cuboid.pos1,
          pos2: cuboid.pos2
        });
      }
      //Finish
      this.in_progress = false;
      return {
        index: index,
        from: pos1,
        to: pos2,
        dimension: this.dim(pos1, pos2),
        data: pushData
      };
    } catch (e) {
      errorHandle(e);
    }
  }

  async load(data) {
    try {
      //error handle
      this.in_progress = true;
      data = data.data;
      if (!data) return {
        error: true
      };
      //Start progress
      for (let i = 0; i < data.length; i++) {
        const cube = data[i],
          ot = await this.player.runCommandAsync(`structure load "${cube.name}" ${cube.pos1.x} ${cube.pos1.y} ${cube.pos1.z} 0_degrees none block_by_block ${(data.length / 4).toFixed(2)}`);
        if (config.log) world.sendMessage(`[${cube.pos1.x} ${cube.pos1.y} ${cube.pos1.z}]-${ot.statusMessage}`);
      }
      this.in_progress = false;
      return 0;
    } catch (e) {
      errorHandle(e);
    }
  }

  async loadNewPos(pos1, data) {
    try {
      this.in_progress = true;
      //split it to chunk
      let cuboids = this.CuboidSplit(new Vector(pos1.x, pos1.y, pos1.z), new Vector(pos1.x + data.dimension.x, pos1.y + data.dimension.y, pos1.z + data.dimension.z), config.structure_size);
      for (let [index, cube] of Object.entries(cuboids)) {
        let output = await this.player.runCommandAsync(`structure load "${data.data[index].name}" ${cube.pos1.x} ${cube.pos1.y} ${cube.pos1.z} 0_degrees none block_by_block ${(data.data.length / 2).toFixed(2)}`);
        if (config.log) world.sendMessage(`[${cube.pos1.x} ${cube.pos1.y} ${cube.pos1.z}]-${output.statusMessage}`);
      }
      this.in_progress = false;
      return 0;
    } catch (e) {
      errorHandle(e);
    }
  }

//=====================================================================
//                          CUBOID SPLITER
//=====================================================================
  CuboidSplit(e,t,o={x:20,y:20,z:20},r=!1){try{let l={x:Math.min(e.x,t.x),y:Math.min(e.y,t.y),z:Math.min(e.z,t.z)},f={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y),z:Math.max(e.z,t.z)},x={x:[],y:[],z:[]},y=[];for(let[i,n]of Object.entries(o))for(let s=l[i];;s+=n)if(s<f[i])x[i].push(s);else{x[i].push(f[i]);break}return r?function* e(){for(let[t,o]of Object.entries(x.x))for(let[r,l]of Object.entries(x.y))for(let[y,i]of Object.entries(x.z)){let n={x:o,y:l,z:i},s={x:Number(t),y:Number(r),z:Number(y)},z={},h=!0;for(let p in x){let u=x[p][s[p]+1];!u&&x[p].length>1&&(h=!1),h&&(z[p]=u||n[p],z[p]!==f[p]&&z[p]--)}h&&(yield{pos1:n,pos2:z})}}():(x.x.forEach((e,t)=>{x.y.forEach((o,r)=>{x.z.forEach((l,i)=>{let n={x:e,y:o,z:l},s={x:t,y:r,z:i},z={};for(let h in x){let p=x[h][s[h]+1];if(!p&&x[h].length>1)return;z[h]=p??n[h],z[h]!==f[h]&&z[h]--}y.push({pos1:n,pos2:z})})})}),y)}catch(z){world.debug(z)}}

//=====================================================================
//                       STRUCTURE CONTROLS
//=====================================================================
  async cut() {
    try {
      //check bad condition
      if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
      if (!this.pos1 || !this.pos2) return this.tell(`§c Please choose a location!`);
      //Start progress
      this.in_progress = true;
      const time = Date.now();
      this.clone_data = await this.save(this.pos1, this.pos2, 0, "cut");
      await this.set({
        saveUndo: true,
        outputMessage: true
      });
      this.in_progress = false;
      this.tell(`§a Successful cut§e ${this.volume} blocks§a in§e ${Date.now() - time}ms`);
      this.pos1 = void 0;
      this.pos2 = void 0;
    } catch (e) {
      errorHandle(e);
    }
  }
  async coppy() {
    try {
      if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
      if (!this.pos1 || !this.pos2) return this.tell(`§c Please choose a location!`);
      this.in_progress = true;
      const time = Date.now();
      this.clone_data = await this.save(this.pos1, this.pos2, "clone");
      this.in_progress = false;
      this.tell(`§a Successful coppy§e ${this.volume} blocks§a in §e${Date.now() - time}ms`);
      let bp1 = this.pos1,
        bp2 = this.pos2;
      if (this.pc) system.clearRun(this.pc);
      this.pc = system.runInterval(() => Particle.frame(bp1, bp2, "choigame:line_light_blue"), 10);
      if (this.pn) system.clearRun(this.pn);
      this.pos1 = void 0;
      this.pos2 = void 0;
    } catch (e) {
      errorHandle(e);
    }
  }
  async paste(save_undo = true) {
    try {
      if (!this.clone_data) return this.tell(`§a The clipboard is empty!`);
      if (!this.pastePos) return this.tell(`§c Please choose a location!`);
      if (this.clone_data.from.x === this.pastePos.x && this.clone_data.from.y === this.pastePos.y && this.clone_data.from.z === this.pastePos.z) return this.tell(`§c You are pasting the old position!`);
      if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
      const time = Date.now();
      this.in_progress = true;
      let save_data;
      if (save_undo) {
        save_data = await this.save(this.pastePos, {
          x: this.pastePos.x + this.clone_data.dimension.x,
          y: this.pastePos.y + this.clone_data.dimension.y,
          z: this.pastePos.z + this.clone_data.dimension.z
        }, this.undo_log.length, "undo");
        this.undo_log.push(save_data);
      }
      await this.loadNewPos(this.pastePosition, this.clone_data);
      this.tell(`§a Successful paste clipboard in ${Date.now() - time}ms`);
      this.in_progress = false;
    } catch (e) {
      errorHandle(e);
    }
  }
  async undo() {
    try {
      if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
      if (this.undo_log.length === 0) return this.tell(`§c Undo history not found!`);
      this.in_progress = true;
      const time = Date.now(),
        data = this.undo_log.pop(),
        l = await this.save(data.from, data.to, data.index, "redo");
      this.redo_log.push(l);
      await this.load(data);
      this.in_progress = false;
      this.tell(`§a Successful undid in §e${Date.now() - time}ms`);
    } catch (e) {
      errorHandle(e);
    }
  }
  async redo() {
    try {
      if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
      if (this.redo_log.length === 0) return this.tell(`§c Redo history not found!`);
      this.in_progress = true;
      const time = Date.now(),
        data = this.redo_log.pop(),
        l = await this.save(data.from, data.to, data.index, "undo");
      this.undo_log.push(l);
      await this.load(data);
      this.in_progress = false;
      this.tell(`§a Successful redid in §e${Date.now() - time}ms`);
    } catch (e) {
      errorHandle(e);
    }
  }

//=====================================================================
//                       SPHAPES GENERATOR
//=====================================================================

  /**
   * interface BlockData {
   *     id: String, //block id
   *     prb: Number, //probability
   *     state: Record<String, Number | String | Boolean> //BlockPermutation state
   * }
   * interface ShapeDef {
   *     radius: Number,
   *     height: Nunber
   * }
   * interface WorldEditInput {
   *     setBlocks: Array<BlockData>,
   *     shape: Shapes, //Shape expression (true is solid cube)
   *     shapeKind: Number, //1 is using center for generator, 2 is using two pos for generator
   *     shapeDef: shapeDef,
   *     saveUndo: Boolean, //Save undo if true
   *     outputMessage: Boolean, //Send message if needed
   *     splitChunkSize: Object, //Chunk spliter defined
   *     railLength: Number //Fill speed (2x blocks/sec/20tps)
   * }
   */
  /**
   * Generator shape for world edit
   * @param {WorldEditInput} arguments[0]
   */
  async set({
    setBlocks = [{id: "minecraft:air", prb: 100}],

    shape = Shapes.cube_solid,
    shapeKind = 1,
    shapeDef,
 
    saveUndo = true,
    outputMessage = true,
    splitChunkSize = config.fill_size,
    railLength = 60,
    
    replaceList = [],
    replaceOnly = false,
    inverseReplace = false
  }) {try{
    //check if bad condition
    if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
    if (!this.pos1 || (!this.pos2 && shapeKind === 2)) return this.tell(`§c Please choose a location!`);

    if (setBlocks !== "*") {
      //check input
      const err = this.validBlocks([...setBlocks]);
      if (err.error) return this.tell(`§c Parse error - block§e[id: '${err.invalid.id}', states: ${err.invalid.states}}]§c is invalid block!`);

      //input handle
      let k = 0;
      this.iblocks = setBlocks.sort((a, b) => a.prb - b.prb).map(v => ({
        ...v,
        prb1: k,
        prb2: (k += v.prb)
      }));
      if (k !== 100) return this.tell(`§c Total probability must be 100%`);

      //complete, make random block data
      this.getBlockPermutations(setBlocks);
    }
    else {
        this.getBlockFrom();
        if (!this.blockPerms || !this.blockPerms.length || !this.iblocks || !this.iblocks.length) return this.tell(`§c There is no block data!`);
    }

    //replace perm
    let isR = false;
    if (replaceList?.length) {
      if (this.replaceRender(arguments[0]).error) return this.tell("errorr");
      isR = true;
    }
    
    //get shape dimension
    let shapeData, gene;
    if (shapeKind === 1) {
      if (!shapeDef) return this.tell(`§c You need to provide you shape configuration!`);
      gene = centerGenerator(this.pos1, shape, shapeDef.radius, shapeDef.height, true);
      let cur = gene.next();
      shapeData = {
        pos1: vec3.offset(this.pos1, cur.xMin, cur.yMin, cur.zMin),
        pos2: vec3.offset(this.pos1, cur.xMax, cur.yMax, cur.zMax)
      }
    }
    else {
        gene = shape instanceof Function ? shape(this.pos1, this.pos2, shapeDef || {}) : generator(this.pos1, this.pos2, shape);
        shapeData = {
            pos1: this.pos1,
            pos2: this.pos2
        };
    }

    //save undo (if true)
    let saveData;
    if (saveUndo) saveData = await this.save(shapeData.pos1, shapeData.pos2, this.undo_log.length, "undo");
    if (saveData) this.undo_log.push(saveData);

    //start progress
    this.in_progress = true;
    this.redo_log = [];
    let error,
        time = Date.now();
    
    await new Promise(r => {
      var interval = system.runInterval(() => {
        let done = false;

        for (let _ = 0; _ < railLength; _++) {
          let data = gene.next();
          if (data.done) {
            done = true;
            break;
          }
          let block = this.player.dimension.getBlock(data.value);
          if (isR) {
            let match = this.replacer.find(({from}) => block.typeId === from);
            if (inverseReplace && match || !match) continue;
            block.setPermutation(match.to === "*" ? this.randomBlock() : typeof match.to === "object" ? match.to.random() : match.to);
            continue;
          }
          block.setPermutation(this.randomBlock());
        }
        if (done || error) system.clearRun(interval), r();
      }, 5);
    });

    this.in_progress = false;
    if (outputMessage && !error) this.tell(`§a Successfully set with size§e ${this.volume}blocks§a in §e${Date.now() - time}ms.`);
  }catch(e){world.debug(e)}}
}

 
/**
 *   CuboidSplit(pos1, pos2, size = {
    x: 20,
    y: 20,
    z: 20
  }, isGen = false) {
    try {
      const min = {
          x: Math.min(pos1.x, pos2.x),
          y: Math.min(pos1.y, pos2.y),
          z: Math.min(pos1.z, pos2.z)
        },
        max = {
          x: Math.max(pos1.x, pos2.x),
          y: Math.max(pos1.y, pos2.y),
          z: Math.max(pos1.z, pos2.z)
        },
        breakpoints = {
          x: [],
          y: [],
          z: []
        },
        cubes = [];
      for (const [axis, value] of Object.entries(size)) {
        for (let coordinate = min[axis];; coordinate += value) {
          if (coordinate < max[axis]) {
            breakpoints[axis].push(coordinate);
          } else {
            breakpoints[axis].push(max[axis]);
            break;
          }
        }
      }

      function* SplitsGenerator() {
        for (let [e, t] of Object.entries(breakpoints.x))
          for (let [o, r] of Object.entries(breakpoints.y))
            for (let [f, l] of Object.entries(breakpoints.z)) {
              let n = {
                  x: t,
                  y: r,
                  z: l
                },
                i = {
                  x: Number(e),
                  y: Number(o),
                  z: Number(f)
                },
                s = {},
                p = !0;
              for (let y in breakpoints) {
                let _ = breakpoints[y][i[y] + 1];
                !_ && breakpoints[y].length > 1 && (p = !1), p && (s[y] = _ || n[y], s[y] !== max[y] && s[y]--)
              }
              p && (yield {
                pos1: n,
                pos2: s
              })
            }
      }

      function Splits() {
        return breakpoints.x.forEach((e, t) => {
          breakpoints.y.forEach((o, r) => {
            breakpoints.z.forEach((f, l) => {
              let n = {
                  x: e,
                  y: o,
                  z: f
                },
                i = {
                  x: t,
                  y: r,
                  z: l
                },
                s = {};
              for (let p in breakpoints) {
                let y = breakpoints[p][i[p] + 1];
                if (!y && breakpoints[p].length > 1) return;
                s[p] = y ?? n[p], s[p] !== max[p] && s[p]--
              }
              cubes.push({
                pos1: n,
                pos2: s
              })
            })
          })
        }), cubes
      };
      return isGen ? SplitsGenerator() : Splits();
    } catch (e) {
      world.debug(e);
    }
  }
  */