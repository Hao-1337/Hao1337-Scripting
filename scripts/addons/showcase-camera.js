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
import { world } from "@minecraft/server";


function findIntersection(P1, P2, P3, P4) {
  // Calculate the direction vectors of Line 1 and Line 2
  const dir1 = { x: P2.x - P1.x, y: P2.y - P1.y, z: P2.z - P1.z };
  const dir2 = { x: P4.x - P3.x, y: P4.y - P3.y, z: P4.z - P3.z };

  // Calculate the cross product of the direction vectors
  const crossProduct = {
    x: dir1.y * dir2.z - dir1.z * dir2.y,
    y: dir1.z * dir2.x - dir1.x * dir2.z,
    z: dir1.x * dir2.y - dir1.y * dir2.x
  };

  // Calculate the magnitude of the cross product
  const crossProductMagnitude = Math.sqrt(
    crossProduct.x ** 2 + crossProduct.y ** 2 + crossProduct.z ** 2
  );

  // Check if the lines are parallel (crossProductMagnitude is close to 0)
  if (Math.abs(crossProductMagnitude) < 1e-6) {
    return null; // Lines are parallel and do not intersect
  } else {
    // Calculate the parameters t1 and t2
    const t1 =
      ((P3.x - P1.x) * crossProduct.x +
        (P3.y - P1.y) * crossProduct.y +
        (P3.z - P1.z) * crossProduct.z) /
      crossProductMagnitude;

    const t2 =
      ((P3.x - P1.x) * dir1.x +
        (P3.y - P1.y) * dir1.y +
        (P3.z - P1.z) * dir1.z) /
      crossProductMagnitude;

    // Calculate the intersection point
    const intersectionPoint = {
      x: P1.x + t1 * dir1.x,
      y: P1.y + t1 * dir1.y,
      z: P1.z + t1 * dir1.z
    };

    return intersectionPoint;
  }
}

export async function camera(player, area, height = 190, radius = 25) {
    let rad = 0,
        rad_per_step = Math.PI / 1080,
        x = area * 100 + 10,
        y = height,
        z = (area > 6) * 100 - 10;

    //setInterval not fast enough so
    while (true) {
        rad += rad_per_step;
        await player.runCommandAsync(`tp @s ${x + radius * Math.cos(rad)} ${y} ${z + radius * Math.sin(rad)} facing ${x} ${y} ${z}`);
        if (rad > 2*Math.PI) break;
    }
};
