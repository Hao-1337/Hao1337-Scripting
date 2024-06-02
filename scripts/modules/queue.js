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
import { errorHandle, world, Player} from "../main.js";
import Timer from "./timer.js";

const hudTileMap = new Map();

Timer.setInterval(() => {
    for (let [player, data] of hudTileMap) if (data.length) {
        (async (player) => {
            for (let title of data) await player.runCommandAsync(title);
        })(player);
        hudTileMap.set(player, []);
    }
}, () => {}, 10, Infinity);

/**
 * Represents a queue system
 */
export default class Queue {
    static hudTile(player, data) {
        //if (!(player instanceof Player)) throw new SyntaxError("First param must be instanceof Player");
        if (!hudTileMap.has(player)) hudTileMap.set(player, data);
        else hudTileMap.set(player, [hudTileMap.get(player), data].flat());
    }
}