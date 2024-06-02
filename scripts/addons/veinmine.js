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
import { errorHandle, G } from "../main.js";
import { Vector, world, Block, BlockPermutation, Enchantment, EnchantmentTypes } from "@minecraft/server";
import { VECTOR3 as vector } from "../modules/method.js";
import Timer from "../modules/timer.js";
import { MinecraftEnchantmentTypes } from "../vanilla-data/lib/index.js";

const config = {
  /* Maximum number of blocks that can veinmine in one go */
  maxium: 2 ** 8,
  /* Leave your tools 1 durability (true) or break it (false) */
  keepTool: true,
  /* List of block id that can be effect by fortune */
  canUseFortune: {
    "minecraft:coal_ore": 1,
    "minecraft:copper_ore": {
      min: 1,
      max: 4
    },
    "minecraft:iron_ore": 1,
    "minecraft:gold_ore": 1,
    "minecraft:lapis_ore": {
      min: 4,
      max: 9
    },
    "minecraft:redstone_ore": {
      min: 1,
      max: 5
    },
    "minecraft:lit_redstone_ore": {
      min: 1,
      max: 5
    },
    "minecraft:diamond_ore": 1,
    "minecraft:emerald_ore": 1,

    "minecraft:nether_gold_ore": {
      min: 3,
      max: 5
    },
    "minecraft:nether_quartz": 1,
    
    "minecraft:deepslate_coal_ore": 1,
    "minecraft:deepslate_copper_ore": 2,
    "minecraft:deepslate_iron_ore": 1,
    "mineecraft:deepslate_lapis_ore": {
      min: 4,
      max: 9
    },
    "minecraft:deepslate_redstone_ore": {
      min: 1,
      max: 5
    },
    "minecraft:lit_deepslate_redstone_ore": {
      min: 1,
      max: 5
    },
    "minecraft:deepslate_gold_ore": 1,
    "minecraft:deepslate_diamond_ore": 1,
    "minecraft:deepslate_emerald_ore": 1,
    
    "minecraft:amethyst_cluster": 4
  }
}
for (let key in config.canUseFortune) if (typeof config.canUseFortune[key] === "number") {
  let $ = config.canUseFortune[key];
  config.canUseFortune[key] = {
    min: $,
    max: $
  }
}


export default async function veinmine({player, block, brokenBlockPermutation, dimension}) {
  const inv = player.getComponent("inventory").container,
        item = inv.getItem(player.selectedSlot),
        bindSlot = inv.getSlot(player.selectedSlot);
  
  if (!item || !["choigame:vein_pickaxe", "choigame:vein_axe", "choigame:vein_shovel", "choigame:vein_hoe"].includes(item.typeId)) return;

  bindSlot.lockMode = "slot";

  const getDamageChance = change => {
    const number = Math.floor(Math.random() * 100) + 1;
    return number >= (number - number * (change.min / 100)) && number <= (number + number * (change.max / 100));
  },
  getRandomAmount = ({min, max}) => Math.floor(Math.random() * (max - min + 1)) + min;

  var env;
  let dropItem = await Promise.any([
    new Promise((r, j) => {
      env = world.afterEvents.entitySpawn.subscribe(({entity}) => {
        if (
          entity.typeId === "minecraft:item" &&
          Math.trunc(entity.location.x) === block.x &&
          Math.trunc(entity.location.y) === block.y + 1 &&
          Math.trunc(entity.location.z) === block.z
        ) {
          world.afterEvents.entitySpawn.unsubscribe(env);
          r(entity.getComponent("item").itemStack);
        }
      })
    }),
    Timer.promiseTimeout(5, () => env && world.afterEvents.entitySpawn.unsubscribe(env))
  ]);

  const durability = item.getComponent("durability"),
  enchantment = item.getComponent("enchantments").enchantments,
  unbreaking = enchantment.getEnchantment(EnchantmentTypes.get("unbreaking")),
  fortune = enchantment.getEnchantment(EnchantmentTypes.get("fortune")),
  mending = enchantment.getEnchantment(EnchantmentTypes.get("mending")),
  silkTouch = enchantment.getEnchantment(EnchantmentTypes.get("silk_touch")),
  damageChange = {
    min: durability.getDamageRange().min,
    max: durability.getDamageChance(unbreaking?.level)
  },
  maxCount = durability.maxDurability - durability.damage;

  let count = 0,
      log = [];
  log.push(block.location)
  while (log.length && count < config.maxium && count < (maxCount - 1)) {
    const loc = log.shift();
    try {
      var _ = dimension.fillBlocks(
        vector.offset(loc, 1, 1, 1),
        vector.offset(loc, -1, -1, -1),
        BlockPermutation.resolve("air"),
        { matchingBlock: brokenBlockPermutation }
      )/*
      //If you want it to divide equally in all directions, not perpendicular, use this:
      dimension.fillBlocks(
        vector.offset(loc, 1, 0, 0),
        vector.offset(loc, -1, 0, 0),
        BlockPermutation.resolve("air"),
        { matchingBlock: brokenBlockPermutation }
      )
      + dimension.fillBlocks(
        vector.offset(loc, 0, 0, 1),
        vector.offset(loc, 0, 0, -1),
        BlockPermutation.resolve("air"),
        { matchingBlock: brokenBlockPermutation }
      ) + dimension.fillBlocks(
        vector.offset(loc, 0, 1, 0),
        vector.offset(loc, 0, -1, 0),
        BlockPermutation.resolve("air"),
        { matchingBlock: brokenBlockPermutation }
      )*/;
    } catch { }
    if (_) count += _, log = log.concat([
        vector.offset(loc, 0, 1, 0),
        vector.offset(loc, 0, -1, 0),
        vector.offset(loc, 0, 0, 1),
        vector.offset(loc, 0, 0, -1),
        vector.offset(loc, 1, 0, 0),
        vector.offset(loc, -1, 0, 0)
    ]);
  }
  
  /* caculate damage */
  for (let i = 0; i < count; i++) {
    if (durability.damage + 1 >= durability.maxDurability) break;
    durability.damage += getDamageChance(damageChange) ? 1 : 0;
  }
  /* set item to inv */
  item.setLore([
    "",
    `§aDurability:§f ${durability.maxDurability - durability.damage}/${durability.maxDurability}`
  ]);
  bindSlot.lockMode = "none";
  bindSlot.setItem(item);
  /* caculate fortune or silk touch */
  if (silkTouch) dropItem = brokenBlockPermutation.getItemStack(1);

  const $ = config.canUseFortune[brokenBlockPermutation.type.id];
  let newCount = 0, bindCount = count;
 
  if (!silkTouch && $) {
    if (fortune) do {
      if (Math.floor(Math.random() * 10) + 1 < (2 / (fortune.level + 2))) newCount += getRandomAmount($);
      else {
        let multipler = (1 / (fortune.level + 2) + (fortune.level + 1) / 2),
            genAmount = Math.round(getRandomAmount($) * multipler);
        if (genAmount < 2) genAmount = 2;
        if (genAmount > $.max * multipler) _ = fortune.level + 1;
        newCount += genAmount;
      }
    } while (count-- > 0);
    else do {
      newCount += getRandomAmount($);
    } while (count-- > 0);
  }
  else (newCount = count)

  player.sendMessage(`§aVein: §e${bindCount + 1}blocks§a, get:§e ${newCount}§r`);

  if (newCount && dropItem) do {
    const item = dropItem.clone();
    item.amount = newCount >= 64 ? 64 : newCount; 
    dimension.spawnItem(item, block.location);
  } while ((newCount -= 64) > 0);
}

