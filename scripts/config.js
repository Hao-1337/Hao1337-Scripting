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
const config = {
  /*
   * Note: The config data will be replaced by the config stored in world
   * Set this value to true for disabled it.
   */
  "use-config-file-only": false,

  //Debug, error handle. You don't need to know:
  "enabled-debug": true,
  "output-error-handle": "chat",
  "under-development-mode": true,

  //Admin & Stuff tag
  admin_tag: "§a§d",
  stuff_tag: "§s",

  //default sound: mojang-minecraft.soundType or sound id
  successful: "note.bell",
  failed: "mob.blaze.hit",

  ChatHandle: {
    //chat cooldown in game tick: Number
    cooldownTime: 40,
    //tag prefix for rank: String
    rankPrefix: "rank:",
    //tag prefix for privated chat: String
    regionPrefix: "region:",
    //delimiter of multi-rank : String
    multfirstRank: "§r§8][§r",
    //player rank if no one another rank are show: String[]
    firstRank: ["§bMember"],
    //show chat time: Boolean
    showTime: true,
    //show rank in chat: Boolean
    showRank: true,
    //enabled privated chat (true): Boolean
    regionEnable: true,
    //command prefix: String
    commandPrefix: "!",
    //privated chat prefix: String
    CRegionPrefix: "$",
    //Eval prefix, use "/scriptevent choigame:eval <script: String>" instead.
    evalPrefix: "!!",
  },

  /*
   * Please adjust the parameters of world edit correctly or it will crash,
   * error or not work
   */
  WorldEdit: {
    //World edit wand, must be a item id: String
    item: "choigame:world_edit_axe",
    //World edit paste wand:
    pasteItem: "choigame:world_edit_structure",
    //World edit picker block:
    pickItem: "choigame:world_edit_picker",
    //World edit history length: int: 2 -> 16
    romLength: 10,
    //Biggest structure can save in one structure block (max is 64 - 319 - 64)
    structure_size: {
      x: 16,
      y: 319,
      z: 16
    },
    //Biggest area can fill in one time (max is 32^3 - 1 (32 per 2 axis and 31 for remaining axis))
    fill_size: {
      x: 31,
      y: 31,
      z: 31
    },
    //Automatic slow down fill action if it too lag (beta)
    "avoid-low-tps": false
  },

  Leaderboard: {
    //Waiting time between each leaderboard update: int(mili seconds)
    LBUpdateDelay: 100,
    //Rank limit from 1 -> x (int: recommended 3 -> 20)
    LBTopLimit: 10,
    //Info text for lb: string
    LBInfoText: "§aTop     Name     Score",
    //default objective for money scoreboard: string
    money_objectives: "money"
  },

  symbol: [
    {
      value: 1e12,
      short: "T",
      long: "trillion"
    },
    {
      value: 1e9,
      short: "B",
      long: "billion"
    },
    {
      value: 1e6,
      short: "M",
      long: "million"
    },
    {
      value: 1e3,
      short: "K",
      long: "thousand"
    },
    {
      value: 1,
      short: "",
      long: ""
    },
    {
      value: 1e-3,
      short: "m",
      long: "milli"
    },
    {
      value: 1e-6,
      short: "μ",
      long: "micro"
    },
    {
      value: 1e-9,
      short: "n",
      long: "nano"
    },
    {
      value: 1e-12,
      short: "p",
      long: "pico"
    }
  ],

  sound: {
    successful: "note.bell",
    failed: "mob.blaze.hit",
    arrow_hit: "note.bell",
    melee_hit: ""
  }
},
soundTrack = [
  {
    id: "record.aatw",
    pitch: 1,
    volume: 0.6
  },
  {
    id: "record.beachhouse",
    pitch: 1,
    volume: 0.7
  },
  {
    id: "record.5050",
    pitch: 1,
    volume: 0.6
  },
  {
    id: "record.c418",
    pitch: 0.985,
    volume: 0.7
  },
  {
    id: "record.gravityfall",
    pitch: 1,
    volume: 0.6,
    loop: 2
  },
  {
    id: "record.pastlives",
    pitch: 1,
    volume: 0.7
  },
  {
    id: "record.pastlives",
    pitch: 0.9,
    volume: 0.6
  },
  {
    id: "record.pastlives",
    pitch: 1.08,
    volume: 0.7
  },
  {
    id: "record.m83",
    pitch: 1,
    volume: 0.6
  },
  {
    id: "record.afterdark",
    pitch: 1,
    volume: 0.7
  },
  {
    id: "record.afterdark",
    pitch: 0.9,
    volume: 0.6
  },
  {
    id: "record.afterdark",
    pitch: 1.1,
    volume: 0.6
  },
  {
    id: "record.gangstasparadise",
    pitch: 1,
    volume: 0.6
  },
  {
    id: "record.gangstasparadise",
    pitch: 0.9,
    volume: 0.6
  },
  {
    id: "record.goodbyeworld",
    pitch: 1,
    volume: 0.6
  },
  {
    id: "record.houseofmemories",
    pitch: 1,
    volume: 0.6
  },
  {
    id: "record.houseofmemories",
    pitch: 0.9,
    volume: 0.6
  },
  {
    id: "record.houseofmemories",
    pitch: 1.1,
    volume: 0.6
  }
];

const BanItem = [
    "minecraft:allow",
    //"minecraft:bamboo_sapling",
    "minecraft:bubble_column",
    "minecraft:bedrock",
    //"minecraft:beehive",
    //"minecraft:bee_nest",
    "minecraft:border_block",
    "minecraft:barrier",
    "minecraft:balloon",
    "minecraft:bleach",
    "minecraft:client_request_placeholder_block",
    //"minecraft:camera",
    "minecraft:chemical_heat",
    "minecraft:command_block",
    "minecraft:chain_command_block",
    "minecraft:command_block_minecart",
    "minecraft:chemistry_table",
    "minecraft:daylight_detector_inverted",
    "minecraft:deny",
    "minecraft:end_gateway",
    "minecraft:flowing_lava",
    "minecraft:flowing_water",
    "minecraft:fire",
    "minecraft:glowingobsidian",
    "minecraft:glowingObsidian",
    "minecraft:glow_stick",
    "minecraft:hard_glass",
    "minecraft:hard_glass_pane",
    "minecraft:hard_stained_glass",
    "minecraft:hard_stained_glass_pane",
    "minecraft:info_update",
    "minecraft:info_update2",
    "minecraft:invisibleBedrock",
    "minecraft:invisiblebedrock",
    "minecraft:ice_bomb",
    "minecraft:netherreactor",
    "minecraft:netherReactor",
    "minecratf:movingBlock",
    "minecraft:movingblock",
    "minecraft:melon_stem",
    "minecraft:monster_egg",
    "minecraft:medicine",
    "minecraft:lava",
    "minecraft:lit_furnace",
    "minecraft:lit_blast_furnace",
    "minecraft:lit_smoker",
    "minecraft:lit_redstone_lamp",
    "minecraft:lit_redstone_ore",
    "minecraft:lava_cauldron",
    "minecraft:light_block",
    "minecraft:powered_comparator",
    "minecraft:powered_repeater",
    "minecraft:pistonArmCollision",
    "minecraft:pistomarmcollision",
    "minecraft:portal",
    "minecraft:reserved3",
    "minecraft:reserved4",
    "minecraft:reserved6",
    "minecraft:repeating_command_block",
    "minecraft:redstone_wire",
    "minecraft:rapid_fertilizer",
    "minecraft:standing_sign",
    "minecraft:standing_banner",
    "minecraft:stonecutter",
    "minecraft:stickyPistonArmCollision",
    "minecraft:stickypistonarmcollision",
    "minecraft:soul_fire",
    "minecraft:sparkler",
    "minecraft:spawn_egg",
    "minecraft:structure_void",
    "minecraft:structure_block",
    "minecraft:unknown",
    "minecraft:unpowered_repeater",
    "minecraft:unpowered_comparator",
    "minecraft:unlit_redstone_torch",
    "minecraft:underwater_torch",
    "minecraft:water",
    "minecraft:wall_sign",
    "minecraft:wall_banner"
];

const Colors = `
Code       Name
 §00   black
 §11   dark_blue
 §22   dark_green	
 §33   dark_aqua
 §44   dark_red
 §55   dark_purple	
 §66   gold
 §77   gray
 §88   dark_gray
 §99   blue	
 §aa   green
 §bb   aqua
 §cc   red
 §dd   light_purple
 §ee   yellow
 §ff   white
 §gg   minecoin_gold
 §hh   material_quartz
 §ii   material_iron
 §jj   material_netherite
 §mm   material_redstone
 §nn   material_copper
 §pp   material_gold
 §qq   material_emerald
 §ss   material_diamond
 §tt   material_lapis
 §uu   material_amethyst
`

export default config;
export { soundTrack, BanItem, Colors };