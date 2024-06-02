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

import { world, Player } from "../main.js";
import WorldEdit from "../modules/worldedit.js";
import Timer from "../modules/timer.js";


export default class RedWorldEdit extends WorldEdit {
  static ignored = ["minecraft:piston_arm", "mimecraft:moving_block"];
    static translatorKey = {
      "minecraft:comparator": [
        "minecraft:unpowered_comparator",
        "minecraft:powered_comparator"
      ],
      "minecraft:redstone_torch": [
        "minecraft:redstone_torch_unlit"
      ],
      "minecraft:repeater": [
        "minecraft:unpowered_repeater",
        "minecraft:powered_repeater"
      ]
    }
    structure = {};
    materials = {};
    
    async getStructure() {
        if (this.in_progress) return this.tell(`§c Another action in progress, please wait...`);
        if (!this.pos1 || !this.pos2) return this.tell(`§c Please choose a location!`);

        this.tell('§a Starting the block process, please wait...');
        this.in_progress = true;
        this.structure = {};
        this.materials = {};

        let {pos1: {x1, y1, z1} , pos2: { x2, y2, z2}} = this.posfrom(this.pos1, this.pos2), count = 0, time = Date.now();

        for (let x = x1; x <= x2; x++)
        for (let y = y1; y <= y2; y++)
        for (let z = z1; z <= z2; z++) {
            let block = this.player.dimension.getBlock({x, y, z});
            if (!block.isValid() || block.typeId === "minecraft:air") continue;

            if (count++ > 120) count = 0, await Timer.awaitTimeout(3);

            let inv = block.getComponent("inventory")?.container;

            this.structure[`${x}${y}${z}`] = {
                typeId: block.typeId,
                items: inv ? Array.from({length: inv.size}, (_, i) => inv.getItem(i)).filter(a => a && a.typeId !== "minecraft:air") : []
            };
            
            this.materials[block.typeId] === void 0 ? (this.materials[block.typeId] = 1) : this.materials[block.typeId]++;
        }

        this.in_progress = false;
        this.tell(`§a Complete collect block data in ${Date.now() - time}`);
    }
    
    structureHandle() {
      this.materialI = {}
      let translator = Object.values(RedWorldEdit);
      for (let nn of RedWorldEdit.ignored) if (this.materials[nn]) delete this.materials[nn];
      for (let [k, v] of Object.entries(this.materials)) {
        for (let match in RedWorldEdit.translator) if (RedWorldEdit.translator[match].includes(k)) {
          //(this.materialI[match] || (this.materials[match] = 0)) += this.materials[k];
        }
        
      }
    }
    
    

}