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
    world,
    Player,
    ItemStack,
    system,
    BlockPermutation,
    VECTOR3 as vec3
} from "../main.js";


var $ = {
    /* Block id can use chest picker. Must have container component */
    container: [
        "minecraft:chest",
        "minecraft:trapped_chest",
        "minecraft:barrel"
    ],
    direction: {
        0: "down",
        1: "up",
        2: "north",
        3: "south",
        4: "west",
        5: "east"
    },
    signDirection: {
        0: "south",
        1: "south-south-west",
        2: "south-west",
        3: "west-south-west",
        4: "west",
        5: "west-north-west",
        6: "north-west",
        7: "north-north-west",
        8: "north",
        9: "north-north-east",
        10: "north-east",
        11: "north-east-north",
        12: "east",
        13: "east-south-east",
        14: "south-east",
        15: "south-south-east"
    },
    redstoneDirection: {
        0: "north",
        1: "east",
        2: "south",
        3: "west"
    }
};

const history = {};
world.beforeEvents.itemUseOn.subscribe(o => system.runTimeout(() => chestPicker(o), 8));
world.afterEvents.itemStartUseOn.subscribe(chestPlacer);

async function chestPicker({source: player, itemStack: item = void 0, block = void 0}) {
    let time = Date.now();
    if (!(player instanceof Player) || !item || !block || item.typeId !== "choigame:chest_transporter" || time - history[player.id] < 4e2) return;

    const location = {x: block.location.x, y: lock.location.y, z: block.location.z},
          dim = player.dimension,
          _pc = player.getComponent("inventory").container,
          isChest = block => ["minecraft:chest", "minecraft:trapped_chest"].includes(block.typeId),
          save = async (name, {x, y, z}, {x: x1, y: y1, z: z1}) => {
              dim.runCommand(`structure save scripts:${name} ${x} ${y} ${z} ${x1} ${y1} ${z1} disk`);
              dim.runCommand(`fill ${x} ${y} ${z} ${x1} ${y1} ${z1} air`);
              player.playSound("dig.wood", { volume: 1.2 });
          };
    
    if ($.container.includes(block.typeId)) try {
        if (!player.isSneaking) return player.sendMessage("§cYou need sneaking to pick a block!");
        history[player.id] = time;
        let id = `§${"xyxxyxyyxxyxyyxy".toId().split("").join("§")}`,
            _c = block.getComponent('inventory').container,
            _f = $.direction[block.permutation.getState("facing_direction")],
            _nt = "§r§aChest Picker:§b ",
            _lo = [`§6Chest picker`, " "],
            old_id = block.typeId.split(":")[1],
            _item = new ItemStack(old_id, 1),
            saveItem = (_lo, _nt) => {
                _item.nameTag = _nt;
                _item.setLore(_lo);
                _pc.setItem(player.selectedSlot, _item);
            };
        /* Can't pick infinte time */
        if (_c.cloneAll().some(item => item?.getLore()?.[0] === _lo[0])) return player.sendMessage("§cYou cannot pick chest/barrel containing another picker");
        //east, west ( z ± 1 )  south, north ( x ± 1 )
        /* Double Chest */
        if (block.typeId !== "minecraft:barrel" && _c.size >= 54) {
            let _o1 = location,
                _o2 = location,
                _c1,_c2,_i0,_t,_o,
                _e = player.dimension.spawnEntity("choigame:nothing", location),
                _inv = _e.getComponent("inventory").container,
                _i = new ItemStack("choigame:nothing", 1),
                _ar = new ItemStack("minecraft:air", 1);
            /* Find double chest direction */
            ["east", "west"].includes(_f) ? (_o1 = vec3.offset(_o1, 0, 0, 1), _o2 = vec3.offset(_o2, 0, 0, -1)) : (_o1 = vec3.offset(_o1, 1, 0, 0), _o2 = vec3.offset(_o2, -1, 0, 0));
            /* Get block for test */
            const _b1 = dim.getBlock(_o1),
                  _b2 = dim.getBlock(_o2),
                  _c = block.getComponent('inventory').container;
            /* Create specific item (unique) */
            _i.setLore([id]);
            _inv.setItem(0, _i);
            /* Get inv component */
            if (!_c.getItem(0)) _c.setItem(0, _i), (_t = true);
            if (isChest(_b1)) _c1 = _b1.getComponent('inventory').container;
            if (isChest(_b2)) _c2 = _b2.getComponent('inventory').container;
            /* Swap item into cache (avoid item lost) */
            _inv.swapItems(0, 0, _c);
            /* Check if some block have a unique item */
            const have = co => co && (_i0 = co.getItem(0))?.typeId === "choigame:nothing" && _i0.getLore()[0] === id;
            if (have(_c1)) _o = _o1;
            if (have(_c2)) _o = _o2;
            /* Check complete, swap item into old place */
            _c.swapItems(0, 0, _inv);
            //world.debug({_b1, _b2, _o1, _o2, _o});
            /* clear cache */
            _inv.setItem(0, _ar);
            _e.triggerEvent("die");
            if (_t) _c.setItem(0, _ar);
            /* Save into structure */
            await save(`${id}_${_f}_true`, location, _o);
            /* Save into item */   
            _lo[1] = `§6NBT:§k scripts:${id}_${_f}_true`;
            _nt += `Double ${old_id.ID2Name()}`;
            return saveItem(_lo, _nt);
        }
        await save(`${id}_${_f}_false`, location, location);
        _lo[1] = `§6NBT:§k scripts:${id}_${_f}_false`;
        _nt += old_id.ID2Name();
        return saveItem(_lo, _nt);
    } catch (e) {
        player.sendMessage("§c" + e + e.stack + "\n§4Send it to admin to get fix soon as possible");
        player.onScreenDisplay.setActionBar("§cA serious error has occurred");
    }
    return player.onScreenDisplay.setActionBar("§cYou can take chest or barrel only");
};

async function chestPlacer({itemStack: item = void 0, blockFace: face = void 0, source: player, block = void 0}) {
    try {
        let lore;
        if (!(player instanceof Player) || !face || !item || !block || !item || !$.container.includes(item.typeId) || !(lore = item.getLore()) || !lore.length || lore.length < 2 || !lore[1].startsWith(`§6NBT:§k`)) return;

        const location = vec3.faceOffset(block.location, face, true),
              _inv = player.getComponent("inventory").container,
              _pb = player.dimension.getBlock(location);

        if (`${_inv.getItem(player.selectedSlot)}` === `${item}`) return;
        _pb.setPermutation(BlockPermutation.resolve("air"));

        if (player.isSneaking) {
            player.onScreenDisplay.setActionBar(`§cYou must not shift when you need to place`);
            return system.runTimeout(() => player.addItem(item), 4);
        }
        player.runCommandAsync("testfor @s[m=c]").catch().then(d => d && d.successCount && _inv.setItem(player.selectedSlot, new ItemStack("minecraft:air")));
        /* get direction data */
        const _cd = player.getFacingDirection2D(),
              _cd3 = player.getDirection(true),
              data = lore[1].split(" ")[1];
        if (!data && !data.startsWith("script:")) return;
        /* Get block data */
        let _d = ["east", "south", "west", "north", "east", "south", "west", "north"],
            //west east z + 1 north, south x + 1
            _dc = (data.split("_")[2] === "true"),
            _loc, _b,
            _p = data.split("_")[1],
            _i = _d.findIndex(v => v === _p) + 1,
            _o_i = 0;
            _dc && (_b = ["south", "north"].includes(_cd), _loc = vec3.offset(location, _b ? 1 : 0, 0, _b ? 0 : 1));
        //world.debug({"2d": _cd, "3df": _cd3, "old": _p, "barrel": Object.entries($.direction).find(([,d]) => d === _cd3)[1]})
        /* If it is double chest, make sure there is enough space to place */
        if (_loc && player.dimension.getBlock(_loc).typeId !== "minecraft:air") {
            player.onScreenDisplay.setActionBar(`§cNot enough space`);
            return system.runTimeout(() => player.addItem(item), 4);
        };
        /* All condition passed, clear item first */
        system.runTimeout(() => player.addItem(new ItemStack("choigame:chest_transporter"), 4));
        /* Rotate algorithm */
        for (_i; _d[_i] !== _cd; _i++) _o_i++;
        /* Load chest */
        await player.runCommandAsync(`structure load ${data} ${location.x} ${location.y} ${location.z} ${[90, 180, 270, 0][_o_i]}_degrees none false true false`);
        player.runCommandAsync(`structure delete ${data}`);
        player.playSound("item.book.put", { volume: 1.2 });
        /* Barrel have 6 direction so we need handle up and down */
        if (item.typeId === "minecraft:barrel") {
            let _gb = player.dimension.getBlock(location),
                _it = _gb.getComponent("inventory").container.cloneAll(),
                _pr = _gb.permutation.withState("facing_direction", +Object.entries($.direction).find(([,d]) => d === _cd3)[0]);
            _gb.setPermutation(_pr);
            _gb.getComponent("inventory").container.setWith(_it);
        }
    } catch (e) {
        player.onScreenDisplay.setActionBar(`§cSomething gone wrong`);
        player.sendMessage(`\n§c${e} ${e.stack}\n §4§lSend this to admin to get fix soon`);
    }
}