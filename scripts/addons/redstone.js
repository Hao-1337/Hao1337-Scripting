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
import { world, ActionFormData, system, BlockPermutation } from "../main.js";
import Timer from "../modules/timer.js";

const line = {
  "0": { pos: {x: 81, y: 111, z: 99 } },
  "1": { pos: {x: 81, y: 110, z: 101} },
  "2": { pos: {x: 81, y: 109, z: 99 } },
  "3": { pos: {x: 81, y: 108, z: 101} },
  "4": { pos: {x: 81, y: 107, z: 99 } },
  "5": { pos: {x: 81, y: 106, z: 101} },
  "6": { pos: {x: 81, y: 105, z: 99 } },
  "7": { pos: {x: 81, y: 104, z: 101} },
  "8": { pos: {x: 81, y: 103, z: 99 } },
  "9": { pos: {x: 81, y: 102, z: 101} },
  
  storage: { pos: {x: 82, y: 112, z: 105} },
  $: { pos: {x: 79, y: 111, z: 103} },

  obStorage: { pos: {x: 81, y: 110, z: 93} },
  tape: { pos: {x: 82, y: 114, z: 102} }
}

export default class redstoneBuild {
  constructor(dimension, redstoneLine) { this.dimension = dimension, this.line = redstoneLine };
  wait(time) { return new Promise(r => system.runTimeout(() => r(), time)); }
  _(pos, block = "air", s = {}) { 
    this.dimension
    .getBlock(pos)
    .setPermutation(
      BlockPermutation.resolve(block, s)
    );
  };
  async fuse(pos, time) {
    this._(pos, "redstone_block");
    await this.wait(time);
    this._(pos);
  }

  // CẢNH BÁO: thời gian tính = tick

  /* bottom double extender (storage side) */
  async extB() {
    await this.fuse(this.line["1"].pos, 20);
    await this.fuse(this.line["0"].pos, 5);
    await this.wait(3);
  }
  /* bottom double extender (storage side) no callback */
  async extB1() {
    await this.fuse(this.line["1"].pos, 20);
    await this.wait(3);
  }
  /* top double extender (ob side) */
  async extT() {
    await this.fuse(this.line["0"].pos, 15);
    await this.wait(3);
  }
  /* storage double extender */
  async extS() {
    this.fuse(this.line.storage.pos, 30);
    await this.wait(3);
    await this.fuse(this.line.$.pos, 1);
    await this.wait(25);
    await this.fuse(this.line.$.pos, 1);
    await this.wait(35);
  }  /* storage double extender nhưng trả block về trên observer*/
  async extS1() {
    this.fuse(this.line.storage.pos, 30);
    await this.wait(3);
    await this.fuse(this.line.$.pos, 1);
    await this.wait(35);
  }
  /* lôi block trên observer xuống storage */
  async sGet1() {
    await this.fuse(this.line.$.pos, 1);
    await this.wait(20);
    await this.fuse(this.line.tape.pos, 5);
  }
  /* lôi block về storage (trống block trên observer ) */
  async sGet() {
    await this.extS();
    await this.fuse(this.line.tape.pos, 5);
  }
  /* đẩy block từ storage ra */
  async sPush() {
    await this.fuse(this.line.storage.pos, 1);
  }
  /* lấy 2 block, 1 về storage, trả 1 về block trên observer */
  async s2Storage() {
    await this.sGet1();
    await this.extS1();
  }
  /* lấy ob */
  async obPush() {
    await this.fuse(this.line.obStorage.pos, 3);
    await this.wait(45);
  }
  /* như tên =v */
  async main() {
    await this.block1();
    /* tg chờ tape reset */
    await this.wait(20);
    await this.block2();
    await this.wait(20);
    await this.block3();
    await this.wait(20);
    await this.block4();
    await this.wait(20);
    await this.block5();
  }
  async block1() {
    await this.extB();
    await this.s2Storage();
  }
  async block2() {
    await this.trippleExt();
    await this.s2Storage();
  }
  async block3() {
    await this.quadExt();
    await this.s2Storage();
  }
  async block4() {
    await this.quinExt();
    await this.s2Storage();
  }
  async block5() {
    await this.hexExt();
    await this.s2Storage();
  }

  async trippleExt() {
    const $1 = this.fuse(this.line["2"].pos, 45);
    await this.wait(3);
    await this.extT();
    await this.fuse(this.line["1"].pos, 2);
    await $1;
    await this.extB();
  }

  async quadExt() {
    const $1 = this.fuse(this.line["3"].pos, 160);
    await this.wait(2);
    await this.extB1();
    await this.obPush();
    await this.fuse(this.line["0"].pos, 4);
    await this.wait(2);
    await this.fuse(this.line["0"].pos, 4);
    await this.extS1();
    await this.extB1();
    await $1;
    await this.wait(2);
    await this.trippleExt();
  }

  async quinExt() {
    const $1 = this.fuse(this.line["4"].pos, 255);
    await this.wait(2);
    await this.extB1();
    await this.obPush();
    await this.fuse(this.line["2"].pos, 20);
    await this.wait(2);
    await this.fuse(this.line["2"].pos, 20);
    await this.extB();
    await this.extS1();
    await this.trippleExt();
    await $1;
    await this.quadExt();
  }

  async hexExt() {
    const $1 = this.fuse(this.line["5"].pos, 485);
    await this.wait(2);
    await this.extB1();
    await this.obPush();
    const $2 = this.fuse(this.line["3"].pos, 85);
    await this.wait(2);
    await this.extB1();
    await this.extT();
    await $2;
    await this.fuse(this.line["2"].pos, 5);
    await this.extB();
    await this.extS1();
    await this.quadExt();
    await this.quinExt();
  }

  async sepExt() {
    const $1 = this.fuse(this.line["6"].pos, 900);
    await this.wait(2);
    await this.extB1();
    await this.obPush();
    const $2 = this.fuse(this.line["4"].pos, 200);
    await this.wait(2);
    await this.extB1();
    await this.wait(2);
    await this.obPush();
    await this.fuse(this.line["0"].pos, 4);
    await this.wait(5);
    await this.fuse(this.line["0"].pos, 4);
    await this.wait(5);
    await this.extS1();
    await this.extB1();
    await this.extT();
    await $2;
    await this.wait(3);
    await this.fuse(this.line["3"].pos, 4);
    await this.wait(3);
    await this.fuse(this.line["2"].pos, 4);
    await this.extB();
    await this.extS1();
    await this.quinExt();
    await $1;
    await this.hexExt();
  }
}


world.beforeEvents.itemUse.subscribe(async ({source: player, itemStack: item}) => {
    if (player.typeId !== "minecraft:player") return;
    try {
        await Timer.awaitTimeout(2);
    } catch (e) { world.debug(e) }
    if (item.typeId === "minecraft:diamond") {
        let {x: vx, y: vy, z: vz} = player.getVelocity(),
            {x: wx, y: wy, z: wz} = player.getViewDirection();
        vy < 0 && (vy = 0);
        wy < 0 && (wy = 0);
        
        let sH = 9.5 + Math.sqrt(vx * vx + vz * vz),
            sV = (wy + vy) * 1.24;
        
        sH > 15.25 && (sH = 15);
        sV > 1.32 && (sV = 0.98);
        
        player.applyKnockback((wx + vx) * 24, (wz + vz) * 24, (1 - wy) * sH, sV);
    }
    if (item.typeId !== "minecraft:compass") return;
    const form = new ActionFormData();
    form.body(`§bArea List:§r
 §a Area§6 0§f: §eThe Door
 §a Area§6 1§f: §nStorage
 §a Area§6 2§f: §iControl
 §a Area§6 3§f: §5Block 9's
 §a Area§6 4§f: §mBlock 4's
 §a Area§6 5§f: §0Block 11's
 §a Area§6 6§f: §eBlock 8's
 
§8... more 6 areas
`);
    for (let i = 0; i < 14; i++) form.button("§qArea §6" + String(i) , "textures/items/compass_item.png");
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    let {x, y, z} = player.location;
    x = x % 30,
    y = y % y,
    z = z % 30;
    player.teleport({
        x: (selection % 7) * 100 + x,
        y: 200 + y,
        z: ((selection > 6) * 118) + z
    }, {
        dimension: player.dimension,
        rotation: player.getRotation()
    });
});

const $ = new redstoneBuild(world.getDimension("overworld"), line);

export { $ };
