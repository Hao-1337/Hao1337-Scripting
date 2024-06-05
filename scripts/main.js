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
import config, { soundTrack, Colors } from "./config.js";

const TimeMapper = new Map(),
    modules = {
        command: true,
        worldEdit: true,
        veinmine: false,
        leaderboard: false,
        dash: false,
        thirstBar: false,
        veinmine: false,
        healthIndicator: false,
        redstoneInterface: true,
        chestPicker: false,
        console: true
    },
    initTime = Date.now();
let tps = 20;
const G = {...config, modules, time: 0};

import { Player, system, world } from "@minecraft/server";
import "./prototype.js";
import * as mc from "@minecraft/server";
import * as mcui from "@minecraft/server-ui";
import { Method, VECTOR3 as vector } from "./modules/method.js";
import Timer from "./modules/timer.js";
import lodash from "./lodash.min.js";

import Queue from "./modules/queue.js";
import Database from "./modules/database.js";
import WorldEdit from "./modules/worldedit.js";
import Spinnet from "./modules/spinnet.js";
import { ScriptDocument, ScriptConsole } from "./modules/console.js";
import Shapes from "./modules/shapes.js";
import "./modules/command.js";
import RedWorldEdit from "./addons/redstone-world-edit.js";

export { G, tps };
export * from "./prototype.js";
export * from "./vanilla-data/lib/index.js";
export * from "@minecraft/server";
export * from "@minecraft/server-ui";
export * from "./modules/method.js";
export * from "./config.js";

MainThread(modules, G, false);

//import _ from "./video-praser/index.js";
    
/**
 * make a debug
 * @param {any} t data need debug
 * @param {EntityQuerryOption} e
 * @return {void}
 */
world.debug= (t,e={},r=false) => {
    if (!G["enabled-debug"]) return;
    const tell = m => {
      for (let d of world.getPlayers(e)) d.sendMessage(m);
    },
    o = t?.constructor?.name;
    let line;
    try {
        let u = void 0;
        u.clear();
    } catch (e) {
        line = `${e.stack}`.match(/\d+/g)[1];
    }
    
    let data = o?.includes("Error") ? `§4[Debugger Error]§c ${t}\n${t.stack}` : `§4[Debugger<§eLine: §f${line}§c> - Class: ${o ?? "None"}]§r ${JSON.colorStringify(t)}`;
    return r ? data : tell(data);
}

// world.afterEvents.playerInteractWithBlock.subscribe(_ => world.sendMessage("sex"));

export function errorHandle(error, task = config["output-error-handle"]) {
  switch (task) {
    case "warn":
      console.warn(error, error.stack);
      break;
    case "log":
      console.log(error, error.stack);
      break;
    case "throw":
      throw error;
    case "chat":
      world.debug(error);
      break;
  }
}
export function EvalThread(chat, player, config) {
  try {
    var save, err, o = chat.slice(config.evalPrefix.length);
    eval(`
        try {
            save = ${o};
        } catch (e) {
            err = e;
        }
    `);
    player.sendMessage(`§l<§r§7 ${o.replace(/\"([\w\W]+)\"/g, '§a"$1"§r§7')}\n§r§l>§r ${err ? world.debug(err) : JSON.colorStringify(save)}`);
  } catch (e) {
      eval(o);
      player.sendMessage(`§l<§r§7 ${o.replace(/\"([\w\W]+)\"/g, '§a"$1"§r§7')}\n§r§l>§6Undefined`); 
  }
}

async function timeCounter({source: player, itemStack: item}) {
    if (player.typeId !== "minecraft:player" || item?.typeId !== "minecraft:brush" || item.nameTag !== "§uTime Counter") return;
    try {
        await Timer.awaitTimeout(2);
    } catch (e) { world.debug(e) }
    if (TimeMapper.has(player)) {
      let time = TimeMapper.get(player);
      TimeMapper.delete(player);
      player.sendMessage(`§q[Time Counter]§a The measured time is: §e${time}s§s (or §e ${Math.floor(time * 2.5 / 64)}stacks & ${time * 2.5 % 64}items §s)`);
      return;
    }
    TimeMapper.set(player, 0);
}
world.beforeEvents.itemUse.subscribe(timeCounter);
world.beforeEvents.itemUseOn.subscribe(timeCounter);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const soundIds = [
  "music.adventure",
  "music.anxiety",
  "music.battlecry",
  "music.calmanxiety",
  "music.castle",
  "music.fire",
  "music.heavenandhell",
  "music.memories",
  "music.minecraft",
  "music.outerspace",
  "music.polozhenie",
  "music.scared",
  "music.shadows",
  "music.strangers",
  "music.tiesto",
  "music.vertigo",
  "music.waterfall",
  "music.withyou",
  "music.wotr",
  "music.youandme"
];

system.afterEvents.scriptEventReceive.subscribe(async function({id, message, sourceBlock: block, sourceEntity}) {
  if (id === "hao:playsound") {
    shuffleArray(soundIds);
    world.getPlayers().forEach(player => {
      player.stopMusic();
      player.playSound(soundIds[0]);
    });
  }
  if (id === "choigame:eval") {
    let $ = block || sourceEntity;
    try {
      eval(`try {${message}} catch (e) {errorHandle(e)}`);
    } catch (e) { errorHandle(e) }
  }
  if (sourceEntity && id === "choigame:stop" && TimeMapper.has(sourceEntity)) {
    let time = TimeMapper.get(sourceEntity);
    TimeMapper.delete(sourceEntity);
    sourceEntity.sendMessage(`§q[Time Counter]§a The measured time is: §e${time}s§s (or §e ${Math.floor(time * 2.5 / 64)} stacks & ${time * 2.5 % 64} items§s)`);
    return;
  }
});

async function MainThread(modules, config, freeze = false) {
  var Locations = {},
      saveConfig = {},
      counter = 0,
      lastTick = Date.now();

  console.warn("§eDatabase init...");
  await Timer.awaitTimeout(10);

  Object.assign(config, saveConfig);
  Object.assign(G, config);
  
  Database.init();
  if (!Database.has("time")) Database.add("time", G.time);
  else G.time = Database.get("time");
  
  /* Config won't be change in runtime */
  if (freeze) (function freeze(obj) {
    Object.freeze(obj);
    for (let key in obj) if (typeof obj[key] === "object") freeze(obj[key]);
  })(config);
  
  
  Timer.setInterval(() => {
    for (let [player, time] of TimeMapper) {
      time++
      TimeMapper.set(player, time);
      player.onScreenDisplay.setActionBar(`§qTime counter: §e${time}s`);
    }
    var o = Method.time(),
    mct = world.getTimeOfDay(),
    h = 6 + Math.floor(mct / 1e3),
    gtd = `§b${h <= 23 ? h : h - 24}§f:§b${Math.floor(mct % 1e3 / 1e3 * 60)} ${h >= 0 && h < 12 ? "§eAM" : "§7PM"} §f(§aD§f:§e ${Math.floor(world.getAbsoluteTime() / 24e3)}§f)§r`,
    p = world.getPlayers(),
    l = p.length;

    G.time++;
    if (counter++ > 16) Database.update("time", G.time), counter = 0;

    let smth = counter >= 8 ? `§6${o.hours}§e:§6${o.minutes}§r ${o.hours < 12 ? "§eAM" : "§7PM"}` : `§6${Math.floor(G.time / 3600)}§e:§6${Math.floor(G.time % 3600 / 60)}§e:§6${G.time % 3600 % 60}`;
    
    let nTick = Date.now(), t = nTick - lastTick;
    lastTick = nTick;
    tps = (1 / (t / 2e4)).toFixed(1);

    for (let player of p) Queue.hudTile(player, [
        `title @s title time: ${smth}`,
        `title @s title pc:§bC: §e${l}/30`,
        `title @s title tps:§bTPS:§e ${tps}`,
        `title @s title time_real: ${gtd}`,
        `title @s title meter:§aS:§e ${(vector.length(player.getVelocity()) * 20).toFixed(2)}m/s`
    ]);
  }, void 0, 20, Infinity);

  await core(modules, modules).catch(e => world.debug(e));
  
  console.warn("§aConfig and interface load complete!")
}

let time = Date.now(),
    bootTime = time;

function timeMarker(str) {
    let _ = Date.now(),
        c = _ - time;
   time = _;
   console.warn(`§a[Boot Loader]§r ${str} §f(§e${c}ms§f)`);
}
import { ChatHandle as lmao } from "./New/command.js";
async function core(modules = {}, addons = {}) {try{
  console.warn("Modules starting up....");
//=====================================================÷===============
//                          CORE MODULES
//=====================================================÷===============
  if (modules.command) {
    var {
        default: CommandBuilder,
        ChatHandle
    } = await import("./modules/command.js");
    /*update config*/
    CommandBuilder.updateConfig(config.ChatHandle);
    /*event sub*/
    world.beforeEvents.chatSend.subscribe(_ => {
      var {message, sender} = _;
      _.cancel = true;
      system.run(() => {
        lmao(_);
        // ChatHandle({message, sender});
    });
    });
    /* You command must be on here */
    try {
      new CommandBuilder({
        command: "gamemode",
        alias: ["gm"],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}gamemode <gamemode>`,
        permission: player => player.hasTag("admin"),
        args: {
          1: {
            type: "string",
            valid_value: ["a", "s", "c", "sp"]
          }
        },
        callBack: ({player, pData}) => {
          let gm = pData[1];
          if (gm === "sp") gm = "spectator";
          player.runCommandAsync(`gamemode ${gm}`);
        }
      });
      new CommandBuilder({
        command: "database",
        alias: ["dbs"],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}database`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          }
        },
        callBack: () => 0,
        openForm: () => ({
          form: (new ActionFormData().title("Database").body(JSON.colorStringify(database.getAll())).button("OK")),
          callBack: () => 0
        })
      });
      
      new CommandBuilder({
        command: "sound",
        permission: player => player.hasTag(G.admin_tag),
        help_permission: player => player.hasTag(G.admin_tag),
        usage: `${CommandBuilder.prefix()}sound <player: selector>: Play some random sound`,
        args: {
          0: { type: "string" },
          1: {
            type: "selector",
            can_empty: true,
            default_value: "@s"
          }
        },
        callBack: ({player, pData}) => {
          const song = soundTrack.random();
          for (let entity of pData[1]) {
            if (!entity instanceof Player) return player.sendMessage("§cSelector must be a player");
            player.onScreenDisplay.setActionBar(`§aNow play:§e ${song.id}§r (${song.pitch === 1 ? "§bnormal version" : song.pitch < 1 ? "§eslow down" : "§cspeed up"}§r)`);
            player.playSound(song.id, {
              pitch: song.pitch,
              volume: song.volume
            });
          }
        }
      });
      new CommandBuilder({
        command: "import",
        alias: ["i"],
        permission: player => player.hasTag(G.admin_tag),
        usage: `${CommandBuilder.prefix}import <file_path_from_root: String>: Import js file`,
        args: {
          1: {
            type: "string"
          }
        },
        callBack: async ({pData, player}) => {
          let time = Date.now();
          try {
            await import(pData[1]).catch(e => world.debug(e));
          } catch (e) {
            world.debug(e);
            return;
          }
          player.sendMessage(`§aSuccessfully imported file with path:§e ${pData[1]}§a in§e ${Date.now() - time}ms`)
        }
      });
    } catch (e) {
      console.warn(`§c[Commands]- Error: ${e} ${e.stack}`);
    }
    timeMarker("§nModule command loadded");
  }
  var lb;
  function LBBuffer() {
    if (lb) Timer.clearRun(lb);
    lb = Timer.setInterval(() => world.getEntities({type: "choigame:floating_text", tags: ["is_leaderboard"]}).forEach(e => LeaderboardThread(e)), () => 0, 60, Infinity);
  }
  if (modules.leaderboard) {
    var {
      default: LeaderboardThread,
      LeaderboardUI,
      addLB,
      removeLB,
      changeLB
    } = await import("./modules/leaderboard.js");
    LBBuffer();
 
    new CommandBuilder({
      command: "leaderboard",
      alias: ["lb"],
      error_show: "both",
      usage: `${CommandBuilder.prefix()}leaderboard <add|remove|change|>`,
      permission: player => player.hasTag("admin"),
      args: {
        1: {
          type: "string",
          valid_value: ["add", "remove", "change"],
          can_empty: true,
          default_value: ""
        }
      },
      callBack: async ({player, pData}) => {
        player.sendMessage("§a[Leaderboard]§f I don't think force form is good idea. So just out you chat.");
        await AsyncMethod.waitPlayerRotation(player);
        switch (pData[1]) {
          case "add": {
            addLB(player);
            break;
          }
          case "remove": {
            removeLB(player);
            break;
          }
          case "change": {
            changeLB(player);
            break;
          }
          default: {
            LeaderboardUI(player);
          }
        }
      }
    });
    timeMarker("§nLeader loadded");
  }
  if (modules.worldEdit) {
    var PR = {};
    var { default: WorldEdit } = await import("./modules/worldedit.js");
    if (modules.redstoneInterface) WorldEdit = RedWorldEdit;
    new CommandBuilder({
        command: "wand",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}wand <kind: number>`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          },
          1: {
            type: "number",
            can_empty: false
          }
        },
        callBack: ({player, pData}) => {
            new Function("player", `WorldEdit.wand${pData[1]}(player)`)(player);
        }
    });
    new CommandBuilder({
        command: "undo",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}undo`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          }
        },
        callBack: ({player}) => {
            WorldEdit.ROM[player.id].undo();
        }
    });
    new CommandBuilder({
        command: "redo",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}redo`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          }
        },
        callBack: ({player}) => {
            WorldEdit.ROM[player.id].redo();
        }
    });
    new CommandBuilder({
        command: "cut",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}cut`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          }
        },
        callBack: ({player}) => {
            WorldEdit.ROM[player.id].cut();
        }
    });
    new CommandBuilder({
        command: "coppy",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}coppy`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          }
        },
        callBack: ({player}) => {
            WorldEdit.ROM[player.id].coppy();
        }
    });
    new CommandBuilder({
        command: "paste",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}paste`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          }
        },
        callBack: ({player}) => {
            WorldEdit.ROM[player.id].paste();
        }
    });
    new CommandBuilder({
        command: "wdEx",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}wdEx <expression: String>: Testing new expression`,
        permission: player => player.hasTag("admin"),
        args: {
          1: {
            type: "string"
          },
          2: {
              type: "number",
              can_empty: true,
              default_value: 2
          }
        },
        callBack: ({player, pData}) => {
            player instanceof WorldEdit || new WorldEdit(player);
            WorldEdit.ROM[player.id].set({
                setBlocks: [{id: "stone", prb: 100}],
                shape: pData[1],
                shapeKind: pData[2],
                shapeDef: {
                    radius: 9,
                    height: 18
                },
                railLength: 200
            });
        }
    });
    new CommandBuilder({
        command: "wdSh",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}wdSh <shape: String>: Testing shape that includes in 'Shapes'`,
        permission: player => player.hasTag("admin"),
        args: {
          1: {
            type: "string"
          },
          2: {
              type: "number",
              number_range: {
                min: -1,
                max: 32767
              },
              can_empty: true,
              default_value: 2
          }
        },
        callBack: ({player, pData}) => {
            player instanceof WorldEdit || new WorldEdit(player);
            if (!Shapes[pData[1]]) return WorldEdit.ROM[player.id].tell(`§c There is no shape with name §e"${pData[1]}"§c in shape register!`);
            WorldEdit.ROM[player.id].set({
                setBlocks: [{id: "stone", prb: 100}],
                shape: Shapes[pData[1]],
                shapeKind: pData[2],
                railLength: true,
                railLength: 200
            });
        }
    });
    new CommandBuilder({
        command: "set",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}set <block: ID | blocks: Array<block: id, state: string>> <state: string | data: number>`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          },
          1: {
            type: ["string", "array"]
          },
          2: {
            type: ["string", "array"],
            valid_value: ["solid", "hollow", "replace", "ireplace"],
            can_empty: true,
            default_value: "solid",
            break_condition: ({raw}) => raw[2] === "replace" || raw[2] === "ireplace",
            break_callBack: ({player, pData, type}) => {
              player instanceof WorldEdit || new WorldEdit(player);
              let data = [];
              if (type[1].includes("array")) {
                for (let {id, state, prb} of pData[1]) {
                  if (!id) return WorldEdit.ROM[player.id].tell("§c Please enter block id");
                  if (!prb) return WorldEdit.ROM[player.id].tell("§c Please enter probability");

                  !state || (state = {});
                  data.push({id, state});
                }
              }
            WorldEdit.ROM[player.id].set({
                shapeKind: 2,
                shape: Shapes[`cube_${pData[2]}`],
                setBlocks: (type[1].includes("array") ? pData[1] : pData[1] === "*" ? "*" : [{prb: 100, id: pData[1]}]),
                saveUndo: true,
                railLength: 20,
                replaceList: type[3].includes("string") ? [pData[3]] : pData[3],
                replaceOnly: false,
                inverseReplace: (pData[2] === "ireplace")
              });
            }
          },
          3: {
            type: ["string"],
            valid_value: ["solid", "hollow"],
            can_empty: true,
            default_value: "solid"
          }
        },
        callBack: ({player, pData, type}) => {
            player instanceof WorldEdit || new WorldEdit(player);
            let data = [];
            if (type[1].includes("array")) {
              for (let {id, state, prb} of pData[1]) {
                if (!id) return WorldEdit.ROM[player.id].tell("§c Please enter block id");
                if (!prb) return WorldEdit.ROM[player.id].tell("§c Please enter probability");

                !state || (state = {});
                data.push({id, state});
              }
            }
            WorldEdit.ROM[player.id].set({
                shapeKind: 2,
                shape: Shapes[`cube_${pData[2]}`],
                setBlocks: (type[1].includes("array") ? data : pData[1] === "*" ? "*" : [{prb: 100, id: pData[1]}]),
                saveUndo: true,
                railLength: 120
            });
        }
    });
    
    new CommandBuilder({
        command: "ellipse",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}ellipse <block: ID | blocks: Array<block: id, state: string>> <state: string | data: number>`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          },
          1: {
            type: ["string", "array"],
          },
          2: {
            type: ["string"],
            valid_value: ["solid", "hollow"],
            can_empty: true,
            default_value: "solid"
          }
        },
        callBack: ({player, pData, type}) => {
            if (type[1].includes("array")) {
              let data = [];
              for (let {id, state, prb} of pData[1]) {
                if (!id) return WorldEdit.ROM[player.id].tell("§c Please enter block id");
                if (!prb) return WorldEdit.ROM[player.id].tell("§c Please enter probability");

                !state || (state = {});
                data.push({id, state});
              }
              return WorldEdit.ROM[player.id].set({
                  shapeKind: 2,
                  shape: Shapes[`ellipse_${pData[2]}`]
              });
            }
            WorldEdit.ROM[player.id].set({
                shapeKind: 2,
                shape: Shapes[`ellipse_${pData[2]}`],
                setBlocks: (pData[1] === "*" ? "*" : [{
                    prb: 100,
                    id: pData[1]
                }])
            });
        }
    });
    new CommandBuilder({
        command: "sphere",
        alias: [],
        error_show: "both",
        usage: `${CommandBuilder.prefix()}sphere <block: ID | blocks: Array<block: id, state: string>> <state: string | data: number>`,
        permission: player => player.hasTag("admin"),
        args: {
          0: {
            type: "string"
          },
          1: {
            type: ["string", "array"],
          },
          2: {
            type: ["string"],
            valid_value: ["solid", "hollow"],
            can_empty: true,
            default_value: "solid"
          }
        },
        callBack: async ({player, pData, type}) => {
            if (type[1].includes("array")) {
              let data = [];
              for (let {id, state, prb} of pData[1]) {
                if (!id) return WorldEdit.ROM[player.id].tell("§c Please enter block id");
                if (!prb) return WorldEdit.ROM[player.id].tell("§c Please enter probability");

                !state || (state = {});
                data.push({id, state});
              }
              return WorldEdit.ROM[player.id].set({
                  shapeKind: 1,
                  shape: Shapes[`sphere_${pData[2]}`],
                  shapeDef: {
                    height: 10,
                    radius: 5
                  }
              });
            }
            WorldEdit.ROM[player.id].set({
                shapeKind: 1,
                shape: Shapes[`sphere_${pData[2]}`],
                setBlocks: (pData[1] === "*" ? "*" : [{
                    prb: 100,
                    id: pData[1]
                }]),
                  shapeDef: {
                    height: 10,
                    radius: 5
                  }
            });
        }
    });
 
    world.afterEvents.playerBreakBlock.subscribe(({block, brokenBlockPermutation, player, itemStackBeforeBreak: item}) => {
      player instanceof WorldEdit || new WorldEdit(player);
      if (item && item.typeId === G.WorldEdit.pickItem) {
        block.setPermutation(brokenBlockPermutation);
        player.sendMessage(`§4[WorldEdit]§a You set block picker position 1 at: §e${block.location.x}, ${block.location.y}, ${block.location.z}`);
        WorldEdit.ROM[player.id].pPos1 = block.location;
        WorldEdit.ROM[player.id].pPos1 && WorldEdit.ROM[player.id].pPos2 && WorldEdit.ROM[player.id].pick_effect();
          
      }
      if (item && item.typeId === G.WorldEdit.item) {
        block.setPermutation(brokenBlockPermutation);
        player.sendMessage(`§4[WorldEdit]§a You set position 1 at: §e${block.location.x}, ${block.location.y}, ${block.location.z}`);
        WorldEdit.ROM[player.id].pos1 = block.location;
        WorldEdit.ROM[player.id].pos1 && WorldEdit.ROM[player.id].pos2 && WorldEdit.ROM[player.id].particle();
      }
    });
    world.afterEvents.playerInteractWithBlock.subscribe(({itemStack: item, player, block}) => {
      player instanceof WorldEdit || new WorldEdit(player);
      if (item && item.typeId === G.WorldEdit.pickItem) {
        player.sendMessage(`§4[WorldEdit]§a You set block picker position 2 at: §e${block.location.x}, ${block.location.y}, ${block.location.z}`);
        WorldEdit.ROM[player.id].pPos2 = block.location;
        WorldEdit.ROM[player.id].pPos2 && WorldEdit.ROM[player.id].pPos2 && WorldEdit.ROM[player.id].pick_effect();
          
      }
      if (item && item.typeId === G.WorldEdit.pasteItem) {
          WorldEdit.ROM[player.id].paste_render();
      }
      if (item && item.typeId === G.WorldEdit.item) {
        player.sendMessage(`§4[WorldEdit]§a You set position 2 at: §e${block.location.x}, ${block.location.y}, ${block.location.z}`);
        WorldEdit.ROM[player.id].pos2 = block.location;
        WorldEdit.ROM[player.id].pos1 && WorldEdit.ROM[player.id].pos2 && WorldEdit.ROM[player.id].particle();
      }
    });
    timeMarker("§nWorldEdit loadded");
  }
  if (modules.console) {
      var { ScriptDocument, ScriptConsole } = await import("./modules/console.js");
      
      world.beforeEvents.itemUse.subscribe(async ({source: player, itemStack: item}) => {
         try{
           if (player.typeId !== "minecraft:player" || !item) return;
         await Timer.awaitTimeout(1);
         if (item.typeId === "choigame:script_document_book") new ScriptDocument(player);
         if (item.typeId === "choigame:script_console_book") new ScriptConsole(player);
         } catch (e) { world.debug(e) }
      });
      timeMarker("§n[Modules] Script console loaded!");
  }

//=====================================================÷===============
//                          CORE MODULES
//=====================================================÷===============
  if (modules.thirstBar) {
      await import("./addons/thrist-bar.js");
      timeMarker("§n[Addons] Thirst bar loadded");
  }
  if (modules.veinmine) {
     var { default: veinmine } = await import("./modules/veinmine.js");
     world.afterEvents.blockBreak.subscribe(veinmine);
     timeMarker("§n[Addons] Veinmine loadded");
  }
  if (modules.dash) {
      await import("./addons/dash.js");
      timeMarker("§n[Addons] Dash loadded");
  }
  if (modules.healthIndicator) {
      await import("./addons/health-indicator.js");
      timeMarker("§n[Addons] Health indicator loadded");
  }
  if (modules.redstoneInterface) {
     var { $: redstoneBuild } = await import("./addons/redstone.js");
     timeMarker("§n[External Addons] Redstone interface loadded");
  }
  if (modules.chestPicker) {
      await import("./addons/chest-picker.js");
      timeMarker("§n[Addons] Chest picker loadded");
  }

   console.warn(`§aAll modules and addons load in§e ${Date.now() - bootTime}ms§r`);
} catch (e) {
    console.warn(`§a[Boot Loader]§4 ERROR§c ${e}\n${e.stack}`);
}};

/**
import * as gt from "@minecraft/server-gametest"

mc.Block.prototype.belowE = function (gap = 0) {
  try {
    return this.below(gap);
  } catch {return}
}
export class SimulatedPlayerAI  {
  static spawnPos = {x: 0, y: 0, z: 3};
  
  constructor({name, gamemode}) {
    gt.register("hao1337", "test", this.setUp.bind(this)).maxTicks(2e9).structureName("hao1337:simPlayer");
    this.name = name,
    this.gamemode = gamemode;
    this.overworld = world.getDimension("overworld");
    this.overworld.runCommand("gametest run hao1337:test false 1 0");
  }

  setUp(_) {
    this.player = _.spawnSimulatedPlayer({x: 0, y: 0, z: 0}, this.name);
    this.player.setGameMode(this.gamemode)
  }

  lerpLocation({x, y, z}) {
    return {
      x: x - SimulatedPlayerAI.spawnPos.x,
      y: y - SimulatedPlayerAI.spawnPos.y,
      z: z - SimulatedPlayerAI.spawnPos.z
    }
  }
  inLocation({x, y, z}) {
    return Math.floor(this.player.location.x) === x &&
           Math.floor(this.player.location.y) === y &&
           Math.floor(this.player.location.z) === z
  }
  
  set autoJump(bool) {
    this.aJump = bool;
  }
  get autoJump() {
    return this.aJump;
  }

  checkBlocks() {
    let d = this.player.getViewDirection(),
        b = this.player.dimension.getBlock({
          x: this.player.location.x + (d.x >= 0.5 * 1),
          y: this.player.location.y,
          z: this.player.location.z + (d.z >= 0.5 * 1)
        }),
        b2 = b.belowE();
    return [b2.belowE(), b2, b, b.above()]
  }

  async moveTo(loc, speed = 0.5) {
    this.targetLoc = this.lerpLocation(loc);
    this.moveSpeed = speed;
    let i, s;
    this.player.moveToLocation(this.targetLoc, speed);
    
    await new Promise((r, j) => {
      i = system.runInterval(() => {
        let o = this.checkBlocks();
        this.overworld.runCommand(`title @a actionbar Bottom: ${o[0]?.typeId}, ${o[1]?.typeId}\nSide: ${o[2]?.typeId}\nTop: ${o[3]?.typeId}`);
        // 1 high block gap
        if (o[2]?.isSolid && !o[3]?.isSolid) this.player.jump();
        // Gặp nước
        if (o[1]?.isLiquid && o[1].typeId.includes("water")) s = this.waterPath();
        // Gặp hố
        if (o[0]?.isAir && o[1]?.isAir && o[0].belowE()?.isAir) s = this.airGap();
        // Gặp lava hoặc 2 high block gap
        if (o[3]?.isSolid || o[1]?.isLiquid && o[1].typeId.includes("lava")) s = this.onPreventMove();
        // Tới nơi r hoặc đc yêu cầu hủy
        if (this.inLocation(this.targetLoc) || s) r(), this.player.stopMoving();
      }, 5);
    });
    
    system.clearRun(i);
  }
  
  onPreventMove() {
    world.debug("§cImpassible path, stop at:§f " + JSON.colorStringify(this.player.location));
    this.player.stopMoving();
    return true;
  }
  
  airGap() {
    
  }
  
  waterPath() {
    this.player.swim();
    this.player.moveToLocation({x: this.player.location.x, y: this.player.location.y + 1.2, z: this.player.location.z}, 1);
  }
  
  
  async swim() {
    this.player
  }
  
  async run(loc) {
    return this.moveTo(loc, 1);
  }
}

import {
  Entity,
  EntityItemComponent as ItemEntity,
  EntityInventoryComponent as InvEntity,
  ItemEnchantableComponent as ItemEnchantment,
  ItemStack
} from "@minecraft/server";

class ItemPhysics {
  static blockIsItem = /(?:.+?|)(?:cake|campfire|lanter|rail|torch|chain|egg|sign|candle|web|kelp|waterlily|sapling|amethyst_bud)|(tall|sea)grass|(glow_|)frame|double_plant|coral$|mangrove_propagule|deadbush|(crimson|hanging|warped)_roots|sea_pickle|ladder|bamboo|bell|surgar|(yellow_|red_|torch)flower|flower_pot|frog_spawn|pitcher_plant|wither_rose|spore_blossom|pointed_dripstone|amethyst_cluster|iron_bars/m;
  static _ = 3;
  static async init({entity}) {try{
    ItemPhysics._ = 5;
    if (entity.typeId !== "minecraft:item") return;
    let loc = entity.location,
      item = entity.getComponent(ItemEntity.componentId).itemStack,
      velocity = entity.getVelocity(),
      enchant = item.getComponent(ItemEnchantment.componentId)?.getEnchantments() ?? [],
      dimension = entity.dimension;

    entity.kill();

    let entityItem = dimension.spawnEntity("hao1337:item_physics", loc),
      container = entityItem.getComponent(InvEntity.componentId).container;
    entityItem.applyImpulse({
      x: velocity.x * 3,
      y: velocity.y * 2,
      z: velocity.z * 3
    });
 
    try { BlockPermutation.resolve(item.typeId) && !ItemPhysics.blockIsItem.test(item.typeId) && entityItem.triggerEvent("is_block"); } catch {}

    entityItem._item_physics_ = item;
    container.setItem(0, item);

    if (/netherite/.test(item.typeId)) entityItem.triggerEvent("cant_burn");
    await entityItem.runCommandAsync(`replaceitem entity @s slot.weapon.mainhand 0 ${item.typeId}`);
    enchant.length && entityItem.runCommand(`enchant @s unbreaking`);
  }catch(e){world.debug(e)}}
  static eventHandle({id, sourceEntity: e}) {try{
    if (id === "hao1337:loot") return !e.isPicking && ItemPhysics.onSneaking(arguments[0]);
    if (id === "hao1337:hopper_minecart") return ItemPhysics.handleHopperMinecart(arguments[0]);
    if (id === "hao1337:hopper") return ItemPhysics.handleHopper(arguments[0]);
  }catch(e){world.debug(e)}}
  static handleHopperMinecart({sourceEntity: entity, message}) {try{
    let entity1 = entity.dimension.getEntities({type: "minecraft:hopper_minecart", maxDistance: 0.8, location: {
      x: entity.location.x,
      y: entity.location.y + +message,
      z: entity.location.z
    }, closest: 1})[0];

    if (entity1) return ItemPhysics.handle(entity, entity1);
  }catch(e){world.debug(e)}}
  static async handleHopper({sourceEntity: entity, message}) {try{
    ItemPhysics.handle(entity, entity.dimension.getBlock({
      x: Math.floor(entity.location.x),
      y: entity.location.y + +message,
      z: Math.floor(entity.location.z)
    }));
  }catch(e){world.debug(e)}}
  static handle(entity, player) {try{
    let playercon = player.getComponent(InvEntity.componentId).container,
      pickItem = entity._item_physics_,
      emptycount = playercon.emptySlotsCount * pickItem.maxAmount;

    emptycount += Array.from({length: playercon.size}, (v, i) => playercon.getItem(i)).map(item => item ? (item.isStackable && item.isStackableWith(pickItem)) * (item.maxAmount - item.amount) : 0).reduce((a, b) => a + b);

    if (!emptycount) return;
    if (emptycount >= pickItem.amount) {
      entity.triggerEvent("kill");
      player.typeId === "minecraft:player" && player.playSound("random.pop", {volume: 0.5});
      playercon.addItem(pickItem);
      return;
    }
    let container = entity.getComponent(InvEntity.componentId).container,
        newItem = pickItem.clone();

    entity._item_physics_.amount -= emptycount;
    container.setItem(0, entity._item_physics_);

    newItem.amount = emptycount;
    player.typeId === "minecraft:player" && player.playSound("random.pop", {volume: 0.5});
    playercon.addItem(newItem);
  }catch(e){world.debug(e)}}
  static async onSneaking({id, sourceEntity: player}) {try{
    player.isPicking = true;
    for (let entity of player.dimension.getEntities({
        type: "hao1337:item_physics",
        maxDistance: 2,
        location: player.location
      })) {
      ItemPhysics.handle(entity, player);
    }
    player.isPicking = false;
  }catch(e){world.debug(e)}}
  static interval() {try{
    if (ItemPhysics._ < 0) return;
    ItemPhysics._--;
    for (let entity of world.getEntities({ type: "hao1337:item_physics" })) {
      if (!entity.isValid()) continue;
      if (!entity._item_physics_) {
        let item = entity.getComponent(InvEntity.componentId).container.getItem(0);
        if (!item) return entity.triggerEvent("kill");
        entity._item_physics_ = item;
        continue;
      }
      entity.nameTag = `${entity._item_physics_.typeId.idToString()}§r ×§e${entity._item_physics_.amount}`;

      entity._iphysics_invalid_ ? entity.triggerEvent("kill") : ItemPhysics.merge(entity);
    }
  }catch(e){world.debug(e)}}
  static merge(entity) {try{
    try {
      var group = entity.dimension.getEntities({
        type: "hao1337:item_physics",
        maxDistance: 2,
        closest: 20,
        location: entity.location
      }).filter(({ _item_physics_: item, _iphysics_invalid_: iv }) => !iv && item && item.maxAmount - item.amount > 0);
    } catch (e) {return console.error(e, e.stack)}

    if (group.length < 2) return;

    while (group.length) {
      let cur = group.shift(),
      g = [cur];

      group.forEach(({ _item_physics_: item }, i) => {
        if (!cur._item_physics_.isStackableWith(item)) return;
        g.push(...group.splice(i, 1));
      });    


      if (g.length < 2) continue;

      let amount = g.reduce((v, { _item_physics_: item }) => v + item.amount, 0),
        kill = false;
 
      while (g.length) {
        let c = g.shift(),
            left = c._item_physics_.maxAmount - c._item_physics_.amount;

        amount -= c._item_physics_.amount;

        if (amount === 0 || kill) {
          c._iphysics_invalid_ = true;
          continue;
        }
        if (left >= amount) {
          c._item_physics_.amount += amount;
          c.getComponent(InvEntity.componentId).container.setItem(0, c._item_physics_);
          kill = true;
          continue;
        }
        c._item_physics_.amount = c._item_physics_.maxAmount;
        c.getComponent(InvEntity.componentId).container.setItem(0, c._item_physics_);
        amount -= left;
      }
    }
  }catch(e){world.debug(e)}}
}

Object.defineProperty(Player.prototype, 'isPicking', {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(Entity.prototype, '_item_physics_', {
  value: null,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(Entity.prototype, '_iphysics_invalid_', {
  value: false,
  enumerable: true,
  configurable: true,
  writable: true
});

world.afterEvents.playerInteractWithEntity.subscribe(({player, target: entity}) => {
  if (entity.typeId !== "hao1337:item_physics") return;
  ItemPhysics.handle(entity, player);
});

system.runInterval(ItemPhysics.interval, 10);
system.afterEvents.scriptEventReceive.subscribe(ItemPhysics.eventHandle);
world.afterEvents.entitySpawn.subscribe(ItemPhysics.init);
*/