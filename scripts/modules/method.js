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
import { system, ItemStack, world } from "@minecraft/server";
import { errorHandle, G } from "../main.js";

const $overworld = world.getDimension("overworld");

/**
 * includes medthod for vector3 
 */
export class VECTOR3 {
  static split(pos1, pos2, size = { x: 32, y: 32, z: 32}) {
    const min = {
      x: Math.min(pos1.x, pos2.x),
      y: Math.min(pos1.y, pos2.y),
      z: Math.min(pos1.z, pos2.z)
    },
    max = {
      x: Math.max(pos1.x, pos2.x),
      y: Math.max(pos1.y, pos2.y),
      z: Math.max(pos1.z, pos2.z)
    };
    const breakpoints = {
       x: [],
      y: [],
      z: [],
    };
    const cubes = [];
    for (const [axis, value] of Object.entries(size)) {
      for (let coordinate = min[axis];; coordinate = coordinate + value) {
        if (coordinate < max[axis]) breakpoints[axis].push(coordinate);
        else {
          breakpoints[axis].push(max[axis]);
          break;
        }
      }
    }
    breakpoints.x.forEach((x, x_index) => {
      breakpoints.y.forEach((y, y_index) => {
        breakpoints.z.forEach((z, z_index) => {
          let CurCord = {
            x: x,
            y: y,
            z: z,
          };
          let indexOf = {
            x: x_index,
            y: y_index,
            z: z_index,
          };
          let NextCord = {};
          for (let axis in breakpoints) {
            let nextValue = breakpoints[axis][indexOf[axis] + 1];
            if (!nextValue && breakpoints[axis].length > 1) return;
            NextCord[axis] = nextValue ?? CurCord[axis];
            if (NextCord[axis] !== max[axis]) NextCord[axis]--;
          }
          cubes.push({
            pos1: CurCord,
            pos2: NextCord
          });
        });
      });
    });
    return cubes;
  }
  /*
   * return vector length
   * @param {Vector3} arguments[0] vector
   * @return {number}
   */
  static length({ x, y, z }) {
    return Math.sqrt(x * x + y * y + z * z);
  }
  /*
   * return vector length between two cor
   * @param {Vector3} p1
   * @param {Vector3} p2
   * @return {number}
   */
  static distance(p1, p2) {
    return Math.sqrt(
      (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2
    );
  }
  /*
   * return current chunk and chunk cor
   * @param {Vector3} pos
   * @return {number}
   */
  static conner(pos) {
    let x = Math.floor(pos.x / 16),
      y = 0,
      z = Math.floor(pos.z / 16),
      x1 = x * 16,
      y1 = 0,
      z1 = z * 16,
      x2 = x1 + (x1 > 0 ? 15 : 15),
      y2 = 318,
      z2 = z1 + (z1 > 0 ? 15 : 15);
    return {
      chunk: [x, z],
      from: {
        x: x1,
        y: y1,
        z: z1,
      },
      to: {
        x: x2,
        y: y2,
        z: z2,
      },
    };
  }
  /*
   * just offset (hell no why native doesn't have)
   * @param {Vector3} pos
   * @param {number} a x
   * @param {number} b y
   * @param {number} c z
   * @param {boolean} returnVector return Vector (true) Vector3 (false)
   * @return {Vector | Vector3}
   */
  static offset(pos, a, b, c, returnVector = false) {
    let { x, y, z } = pos;
    x = x + a;
    y = y + b;
    z = z + c;
    return returnVector ? new Vector(x, y, z) : { x, y, z };
  }
}

/**new Vector
 * includes Method using for entiy, player, scoreboard, etc
 */
export class Method {
  /**
   * return time
   * @return {Obiect}
   */
  static time() {
    const d = new Date(),
      addGMT = data => (data / 60) * -1;
    let [gmts, time, gmt] = [addGMT(d.getTimezoneOffset()), [d.getHours(), d.getMinutes(), d.getSeconds()].map(v => (v < 10) ? `0${v}` : v), ''];
    gmt = (gmts > 0) ? `+${gmts}` : gmts;
    return {
      hours: time[0],
      minutes: time[1],
      seconds: time[2],
      time_zone: gmt
    }
  }
  /**
   * return time but format
   * @return {string}
   */
  static timeFormat() {
    let o;
    return `§8[§6${(o=Method.time()).hours}§e:§6${o.minutes}§8]`;
  }
  /**
   * return compact number
   * @param {number} num number need to format
   * @param {nunber} digits how many digits after the decimal point
   * @return {string}
   */
  static numFormatter(num = 0, digits = 1, longNotation = false) {
    if (num === 0) return 0;
    const absNum = Math.abs(num);
    let i = 0;
    while (i < G.symbol.length - 1 && absNum <= G.symbol[i].value) i++;
    return `${(num / G.symbol[i].value).toFixed(digits)}${longNotation ? " " + G.symbol[i].long : G.symbol[i].short}`;
  }
  /**
   * run function on each player
   * @param {function(player: Player): any} func
   * @return {void}
   */
  static forEachPlayers(func) {
    try {
      for (let player of world.getPlayers()) func(player);
    } catch (e) {
      errorHandle(e);
    }
  }
  /**
   * return container of entity
   * @param {Entity | Player} entity
   * @throw {SyntaxError} if entity doesn't have inventory
   * @return {Container}
   */
  static getInventory(entity) {
    try {
      return entity.getComponent("minecraft:inventory").container;
    } catch (e) {
      errorHandle(e);
    }
  }
  /**
   * return all item for container of entity
   * @param {Container} iv
   * @return {ItemStack[]}
   */
  static getINVItems(iv) {
    return Array.from({
      length: iv.size
    }, (e, i) => iv.getItem(i));
  }
  /**
   * return player has a request name
   * @param {String} name
   * @return {Player | undefined}
   */
  static getPlayerFromName(name) {
    for (let p of world.getPlayers())
      if (p.name === name) return p;
    return void 0;
  }
  static sameItemStackNoNBT(item) {
    return new ItemStack(Items.get(item.typeId), item.amount)
  }
  /**
   * return all item for request scoreboard;
   * @param {String} iv
   * @return {ScoreboardIndenty[]}
   */
  static getAllScore(objective) {
    return world.scoreboard.getObjective(objectives)?.getParticipants()?.filter((v) => v.type === "player" || v.type === "entity")?.map(e => ({
      entity: e.getEntity(),
      score: e.typeId,
      name: e.displayName
    }));
  }
  /**
   * return score of entity for request scoreboard
   * @param {Container} iv
   * @return {Number}
   */
  static getScore(entity, objectives) {
    try {
      return world.scoreboard.getObjective(objectives)?.getScore(entity.scoreboardIdentity) ?? 0;
    } catch (e) {
      return 0;
    }
  }
  /**
   * yeah just run command 
   * note: return is async
   * @param {string} command command need to run
   * @param {Entity | Player | Null} selector that run command (for @s)
   * @return {CommandResult}
   */
  static runCommand(command, selector, dim = $overworld) {
    try {
      if (selector) dim = selector;
      return {
        data: dim.runCommandAsync(command),
        error: false
      }
    } catch (e) {
      if (G.cmd_error) world.debug(e);
      return {
        error: true,
        statusMessage: `[runCommand]-§cError: ${e}`
      };
    }
  }
  /**
   * run more command 
   * note: return is async
   * @param {string[]} commands array of command need to run
   * @param {Entity | Player | Null} selector that run command (for @s)
   * @return {CommandResult[]}
   */
  static runCommands(commands, selector, dim) {
    return commands.map(v => Method.runCommand(v, selector, dim));
  }
  /**
   * Create low randomness UUID v4
   * @return {string}
   */
  static UUIDGen() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = (new Date().getTime() + Math.random() * 16) % 16 | 0;
      return (c == 'x' ? r : (r & 3 | 8)).toString(16);
    });
  }
  /**
   * clear chat (just push it out)
   * @param {number} times number of repetitions of an empty chat
   * @param {player | String} player player or name it will be show (who clear chat)
   * @return {void}
   */
  static clearChat(times = 60, player = {
    name: "Admin"
  }) {
    for (let clc = 0; clc < times; clc++) Method.runCommand(`tellraw @a {"rawtext":[{"text":"§a"}]}`);
    Method.runCommand(`tellraw @a {"rawtext":[{"text":"§aChat has been clear by§f:§e ${player.name || player}"}]}`);
  }
  /**
   * return the first tag has the request prefix
   * @param {Entity | Player} entity entity for check tag
   * @param {string} prefix prefix must includes ":"
   * @return {String} tag without prefix
   */
  static getEntityTagByPrefix(entity, prefix) {
    return entity?.getTags().find(v => v.startsWith(prefix))?.replace(prefix, "");
  }
  /**
   * return all tag has the request prefix
   * @param {Entity | Player} entity entity for check tag
   * @param {string} prefix prefix must includes ":"
   * @return {String} tag without prefix
   */
  static getEntityTagByPrefixs(entity, prefix) {
    return entity?.getTags().filter(v => v.startsWith(prefix))?.map(v => v.replace(prefix, "")) ?? []
  }
  /**
   * For native application. Return all entity that is leaderboard.
   * @return {entity[]}
   */
  static getAllLB() {
    return world.getEntities({
      tag: ["is_leaderboard"],
      type: "choigame:floating_text"
    });
  }
  /**
   * return all objective name
   * @return {String[]}
   */
  static getAllObjectiveName() {
    try {
      return world.scoreboard.getObjectives().map(v => v.id) ?? [];
    } catch (e) {
      return [];
    }
  }
}
/**
 * set of asynchronous Methods
 */
export class AsyncMethod {
  /**
   * yeah just run command
   * @param {string} command command need to run
   * @param {Entity | Player | Null} selector that run command (for @s)
   * @return {CommandResult}
   */
  static async runCommand(command, selector, dim = $overworld) {
    try {
      if (selector) dim = selector;
      const r = await dim.runCommandAsync(command);
      return {
        data: r,
        error: false
      }
    } catch (e) {
      if (G.cmd_error) errorHandle(e)
      return {
        error: true,
        statusMessage: `[runCommand]-§cError: ${e}`
      };
    }
  }
  static async runCommands(commands, selector) {
    /**in dev*/
    try {
      if (selector) commands.forEach(cmd => runCommand(cmd, selector));
      else commands.forEach(cmd => runCommand(cmd));
    } catch (e) {
      errorHandle(e)
    }
  }
  /**
   * return current gamemode for player
   * @param {Player} player player need to check gamemode
   * @return {Gamemode}
   */
  static async getGamemode(player) {
    const data = await Promise.all([
            player.runCommandAsync(`testfor @s[m=survival]`),
            player.runCommandAsync(`testfor @s[m=creative]`),
            player.runCommandAsync(`testfor @s[m=adventure]`),
            player.runCommandAsync(`testfor @s[m=spectator]`)
        ]),
      r = ["survival", "creative", "adventure", "spectator"];
    return r[data.findIndex(v => !~v.successCount)] ?? void 0;
  }
  /**
   * set gamemode for player
   * @param {Player} player player need to set gamemode
   * @param {Gamemode} gamemode
   * @return {Boolean} Is setting gamemode successful?
   */
  static async setGamemode(player, gamemode) {
    const o = await AsyncMethod.getGamemode(player);
    if (gamemode === o) return false;
    await AsyncMethod.runCommand(`gamemode s @s`, player);
    return true;
  }
  /**
   * Force form
   * @param {Player} player player need to open form
   * @param {ModalFormData|MessageFormData|ActionFormData} form
   * @param {String} failed_mess message show for request cooperation
   * @return {Promise<ModalFormResponse|MessageFormResponse|ActionFormResponse>}
   */
  static async damgeToForm(player, form, callBack, enabled = true, failed_mess = "§o§l§c Out you chat for sure") {
    try {
      if ((await AsyncMethod.getGamemode(player)) === 'creative') {
        await AsyncMethod.setGamemode(player, 'survival');
        await AsyncMethod.runCommand(`damage @s 0 entity_attack`, player);
        AsyncMethod.setGamemode(player, 'creative');
      } else(await AsyncMethod.runCommand(`damage @s 0 entity_attack`, player));
      await new Promise(r => system.runTimeout(() => r(), 5));
      let _, $ = await form.show(player);
      if ($.canceled && $?.cancelationReason === "userBusy") player.sendMessage(failed_mess),
        _ = await AsyncMethod.waitPlayerRotation(player).catch().then(v => {
          if (v) return form.show(player);
          return;
        });
      else {
        if (enabled) callBack($);
        return $;
      }
      let __ = await _;
      if (enabled) callBack(__);
      return __;
    } catch (e) {
      errorHandle(e)
    }
  }
  /**
   * Wait player until they really are in the world
   * @param {String} playerName player name need to wait
   * @return {Promise<Player | Never>}
   */
  static async waitPlayerJoin(playerName) {
    console.warn(`§a[Connection]§f- ${playerName} §r§econnecting to the server`);
    return new Promise((resolve, reject) => {
      let wait_time = 100,
        d = Date.now();
      const wait = system.runInterval(async () => {
        if ((wait_time--) <= 0) {
          system.clearRun(wait);
          reject(`${playerName} - Timeout Connection`);
        }
        try {
          const _ = await $overworld.runCommandAsync(`testfor "${playerName}"`);
          if (_.successCount <= 0) return;
          let o = Date.now() - d;
          console.warn(`§a[Connection]§f- ${playerName} §r§econnected to the server(${o / 1000} seconds)`);
          system.clearRun(wait);
          resolve(Method.getPlayerFromName(playerName));
        } catch (e) {}
      }, 3);
    });
  }
  /**
   * Wait player until they XYRotation change
   * @param {Player} player player need to wait
   * @return {Player | String}
   */
  static async waitPlayerRotation(player, wait_time = 20e4) {
    const _ = player.getViewDirection(),
      vv = {x: _.x, y: _.y, z: _.z};
    return await new Promise((reslove, reject) => {
      let wait_time = 500,
          wait = system.runInterval(() => {
          if ((wait_time--) <= 0) {
            system.clearRun(wait);
            reject(`${playerName} - Timeout`);
          }
          const {
            x,
            y,
            z
          } = player.getViewDirection();
          if (!player.id) reject(`Player Not Found`);
          if (!vv.equals(new Vector(x, y, z))) {
            system.clearRun(wait);
            reslove(player);
          }
        }, 3);
    });
  }
}