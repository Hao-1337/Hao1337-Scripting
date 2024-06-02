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
    world, MinecraftEffectTypes,
    Database, system, AsyncMethod,
    Timer, errorHandle, Queue, Player
} from "../main.js";

let thirsty = {},
    dirtyWater = {},
    c = 0;

if (!Database.has("thirst-data")) Database.add("thirsty-data", {});
else thirsty = Database.get("thirsty-data");
if (!Database.has("thirst-dirty")) Database.add("thirsty-dirty", {});
else dirtyWater = Database.get("thirsty-dirty");

function updateDB() {
    Database.assign("thirsty-data", thirsty);
    Database.assign("thirsty-dirty", dirtyWater);
}

Timer.setInterval(() => (world.getPlayers().forEach((player) => {
  thirsty[player.id] === void 0 && (thirsty[player.id] = 100);
  dirtyWater[player.id] === void 0 && (dirtyWater[player.id] = 0);

  try {
    if (thirsty[player.id] <= 0) player.applyDamage(1, {cause: "none"});
    if (dirtyWater[player.id] > 0) {
      player.applyDamage(1, {cause: "none"});
      dirtyWater[player.id]--;
      thirsty[player.id] -= 3
    }
    c > 3 && (thirsty[player.id] -= player.isSprinting ? 4 : 1);
    tileUpdate(player);
  } catch (e) { world.debug(e); }
}), c++ > 3 && (c = 0, updateDB())), () => {}, 30, Infinity);

world.afterEvents.playerLeave.subscribe(({ playerName }) => {
    updateDB();
    delete dirtyWater[playerName];
    delete thirsty[playerName];
});
world.afterEvents.playerSpawn.subscribe(({ player }) => (thirsty[player.id] = 100, dirtyWater[player.id] = 0));
world.afterEvents.entityDie.subscribe(({deadEntity}) => deadEntity?.typeId === "minecraft:player" && (thirsty[deadEntity.id] = 100, dirtyWater[deadEntity.id] = 0));

world.afterEvents.playerInteractWithBlock.subscribe(({player, block}) => {
    if (block.above()?.typeId.includes("water") && thirsty[player.id] < 90) {
        thirsty[player.id] += thirsty[player.id] < 100 ? 3 : 0;
        dirtyWater[player.id] = 6;
    }
});

//splash_spell_emitter

const thirstIcon = {
    full: "",
    half: "",
    out: "",

    pfull: "",
    phalf: "",
    pout: ""
}
function tileUpdate(player) {
  try {
  let float = thirsty[player.id] % 10,
      int = (thirsty[player.id] - float) / 10 + (float > 5) * 1,
      mit = 10 - int - (float <= 5 && int > 0) * 1,
      $1 = thirstIcon.full,
      $2 = thirstIcon.half,
      $3 = thirstIcon.out;
  if (dirtyWater[player.id] > 0) {
      $1 = thirstIcon.pfull,
      $2 = thirstIcon.phalf,
      $3 = thirstIcon.pout; 
  }
  
  let str = (float <= 5 && mit !== -1 ? $2 : "") + "".padEnd(int, $1);

  Queue.hudTile(player, [`title @s title thirsty:${str.padStart(10, $3)}`]);
  } catch (e) {
    world.debug(e)
  }
}