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
import { world } from "../main.js";
import Timer from "../modules/timer.js";

/**
 * Dash by Choigame133
 * 
 * You can change dash strength by change multiplayer
 */
world.beforeEvents.itemUse.subscribe(async ({source: player, itemStack: item}) => {
    if (player.typeId !== "minecraft:player") return;
    await Timer.awaitTimeout(2);
    if (item.typeId === "choigame:dash_item") {
        let cooldown = item.getComponent("cooldown");
        world.debug(cooldown);
        if (cooldown.cooldownTicks) return;
        let {x: vx, y: vy, z: vz} = player.getVelocity(),
            {x: wx, y: wy, z: wz} = player.getViewDirection();
        vy < 0 && (vy = 0);
        wy < 0 && (wy = 0);
        
        let sH = 9.5 + Math.sqrt(vx * vx + vz * vz),
            sV = (wy + vy) * 1.24;
        
        sH > 15.25 && (sH = 15);
        sV > 1.32 && (sV = 0.98);
        try {
        player.dimension.createExplosion(player.location, 5, { source: player, causeFire: false, breaksBlocks: false });
        } catch (e) { world.debug(e) }
        player.applyKnockback((wx + vx) * 24, (wz + vz) * 24, (1 - wy) * sH, sV);
    }
});