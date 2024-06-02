import {
  Player,
  Block,
  BlockPermutation,
  Container,
  world,
  ItemStack
} from "@minecraft/server";

import Spinnet from "./modules/spinnet.js";

const SPINNET = Object.fromEntries(Object.entries(Spinnet).slice(1).map(cl => Object.entries(cl[1])).flat());

const cloneProxy = {
    get(target, property, receiver) {
        if (property in target) return target[property];
        const value = Reflect.get(...arguments);
        if (typeof value === 'function') return value.bind(target);
        return value;
    },
    set(target, property, value, receiver) {
        if (property in target) {
            target[property] = value;
            return true;
        }
        return Reflect.set(...arguments);
    }
}

ItemStack.prototype.toJson = function() {
    const lore = this.getLore() || [],
          enchantment = [],
          enchC = this.getComponent('enchantment')?.enchantments;
    if (enchC) enchantment = [...enchC].map(e => ({
        level: e.level,
        type: e.type.id
    }));
    return {
        ...new Proxy(this, cloneProxy),
        lore,
        enchantment
    };
},
/**
 * Convert item stack into string (ignored enchantment)
 */
ItemStack.prototype.toString = function() {
    if (this.typeId === "minecraft:air") return "minecraft:air";
    return [this.typeId, this.nameTag , ...this.getLore()].join(" ");
};

world.getEntities = (option = {}) => world.getDimension("overworld").getEntities(option);
/**
 * return the first tag has the request prefix
 *
 * @param {string} prefix prefix must includes ":"
 * @return {String} tag without prefix
 */
Player.prototype.tagByPrefix = function(prefix) {
    return this.getTags().find(v => v.startsWith(prefix))?.replace(prefix, "");
}
/**
 * return all tag has the request prefix
 *
 * @param {string} prefix prefix must includes ":"
 * @return {String} tag without prefix
 */
Player.prototype.tagByPrefixs = function(prefix) {
    return this.getTags().filter(v => v.startsWith(prefix)).map(v => v.replace(prefix, "")) || [];
}
function prototypeParser(item) {
  try {
    return item?.constructor?.name ?? (typeof item === "object" ? Object.getPrototypeOf(item)?.constructor?.name : void 0);
  } catch {
    return 'error';
  }
}
/**
 * Convert json to jsonstring color highlight
 * @private
 * @return {Object<String|Object>}
 */
export function JsonString(d) {
    try {
        let b = Array.isArray(d),
            out = b ? []: {},
            keyC = b ? "" : "§4∆ ",
            pIs = "Pending",
            cache;
        for (let k in d) switch (prototypeParser(d[k])) {
            case 'error':
                out[keyC + k] = `§go [Unable to load]`
                break;
            case undefined:
            case null:
                out[keyC + k] = `§6o ${d[k]}`
                break;
            case "String":
                out[keyC + k] = `§a$ ${d[k]}`
                break;
            case "Number":
                out[keyC + k] = `§s ${d[k]}`
                break;
            case "Boolean":
                out[keyC + k] = `§${d[k] ? "a" : "c"}o ${d[k]}`
                break;
            case "Array":
            case "Object":
                out[keyC + k] = JsonString(d[k]);
                break;
            case "Map":
                out[keyC + k] = JsonString(Array.from(d[k].entries()));
                break;
            case "WeakMap":
                out[keyC + k] = "§4o [Cannot Read WeakMap]";
                break;
            case "Set":
                out[keyC + k] = JsonString(Array.from(d[k]));
                break;
            case "WeakSet":
                out[keyC + k] = "§4o [Cannot Read WeakSet]";
                break;
            case "Date":
                out[keyC + k] = `§e ${d[k].toString()}`;
                break;
            case "Promise":
                d[k].then(() => (pIs = "Resolve"), () => (pIs = "Reject"));
                out[keyC + k] = `§d [Promise ${pIs}]`;
                break;
            case "Function":
                cache = SPINNET[d.constructor?.name]?.[k];
                out[keyC + k] = /function \(\) \{\n    \[native code\]\n\}/gm.exec(d[k].toString()) ? (cache ? `§e (${cache.param}) => ${cache.return}` : "§u [Native Function]") : ("§t$ " + d[k].toString().replace(/\s{4,}/g, ""));
                break;
            case "GeneratorFunction":
                out[keyC + k] = "§d Iterator<Unknow>"
                break;
            default:
               out[keyC + (b ? "" : `§0${d[k].constructor.name}0§ `) + k] = JsonString(d[k]);
        }
        return out;
    } catch (e) {
        console.error(e, e.stack)
    }
}

/**
 * Add minecraft color for you object
 * @param {any} data data for format
 * @param {number} space space
 * @return {String}
 */
JSON.colorStringify = function(data, space = 4) {
  if (!(typeof data === "object")) return `§6${data}`;
  return JSON.stringify(JsonString(data), void 0, space).replace(/\"§(\w+?|\w+?(∆|\$))\s(§0[\s\S]+?0§(\s*)|)([\s\S]*?)\"(:\s|,|$)/gm, (_, color, type, className, isKey, name, kind) => (_ = (isKey = type === "∆") || type === "$", `§${color.replace(/[∆$]/g, "").split("").join("§")}${type ? '"' : ""}${name}${type ? '"' : ""}§r${isKey ? `: ${className?.length ? `§8[§e${className.slice(2, -3)}§8]§l >§r ` : ""}` : kind?.length ? "," : ""}`));
};


/**
 * need to make a debug
 * @param {Player} player player using for parse
 * @return {Obiect}
 */
String.prototype.splitArgument = function(player) {
  let registers = [],
      returnARG = [],
      hasQuote = {},
      quotes = false,
      parseError,
      loc_error,
      rIndex = 0;
  if (!(player instanceof Player)) return {
    error: true,
    data: `InternalError: Input param must be a Player. Please report this error to admin to fix it soon.`
  };
  /**
   * Get/check Array<unknow> for object input string
   * @private
   */
  const parseArray = (string, check = true) => {
    try {
      if (check) return Array.isArray(JSON.parse(string.replace(/['`]/g, "\"")));
      else return JSON.parse(string.replace(/['`]/g, "\""));
    } catch (e) {
      return false;
    }
  },
  /**
   * Get/check Object<unknow> for object input string
   * @private
   */
  parseObject = (string, check = true) => {
    try {
      if (check) return (JSON.parse(string.replace(/['`]/g, "\""))) instanceof Object;
      else return JSON.parse(string.replace(/['`]/g, "\""));
    } catch (e) {
      return false;
    }
  },
  /**
   * Get Array<Player|Entity> for selector input string
   * @async
   * @private
   */
  testfor = async (selector, bool) => {
    const id = "t1id:" + String((Date.now() * Math.random() % 1).toFixed(7)).slice(2);
    if (!bool) selector = `@a[name="${selector}"]`;
    await player.runCommandAsync(`tag ${selector} add "${id}"`);
    return Array.from(player.dimension.getEntities({tags:[id]}), e => (e?.removeTag(id), e));
  },
  /**
   * Get <Vector3> for position input string
   * @async
   * @private
   */
  testforloc = async (string) => {
    const {location} = player;
    if (string.includes('~') && string.includes('^')) {
      loc_error = "Cannot expand coordinates with different types of arguments";
      return;
    }
    const id = "tid:" + String((Date.now() * Math.random() % 1).toFixed(7)).slice(2),
    entity = player.dimension.spawnEntity("choigame:floating_text", player.location);
    entity.addTag(id)
    try {
      await player.runCommandAsync(`execute at @s run tp @e[type=choigame:floating_text,tag=${id}] ${string}`);
    } catch (e) {
      loc_error = `InternalError: ${e}.\n Please report this error to admin to fix it soon.`;
      return;
    }
    const final_loc = entity.location;
    entity.kill();
    return final_loc;
  }
  /**
   * Check arg type and get js data that can be handle with.
   * @private
   */
  function argTypeCheck(string, index) {
    let num_parse = `${string.trim()}`.match(/(\-\d+\.\d+)|(\d+\.\d+)|(\-\d+)|(\d+)/gm),
        pos_parse = `${string.trim()}`.match(/([\^\~](?:[+-]?(?:\d+(?:\.\d+)?)?)?){3}/gm);
    const bool = string.includes("@"),
          type = bool ? [] : ["string"];
    return hasQuote[index] ? 
    {
      type: ["string"],
      data: string
    } : (num_parse && `${num_parse[0]}`.length === string.length) ? {
      type: ["number", "location"],
      data: +string
    } : (pos_parse && `${pos_parse[0]}`.length === string.length) ? {
      type: ["location"],
      data: testforloc(string)
    } : (string.match(/(@[asre]\[[\w\W]*?\])|(@[asre])/g) || Array.from(world.getPlayers(), v => v.name.toLowerCase()).some(pln => pln === string.toLowerCase())) ? {
      type: ["selector", ...type],
      data: testfor(string, bool)
    } : ((string === 'true' || string === "false")) ? {
      type: ["boolean"],
      data: (string === "true")
    } : parseArray(string) ? {
      type: ["array"],
      data: parseArray(string, false)
    } : parseObject(string) ? {
      type: ["object"],
      data: parseObject(string, false)
    } : {
      type: ["string"],
      data: string
    };
  }
  this.split("").reduce((pv, v, i, arr) => {
    let early = false;
    if (pv === "\\") return (returnARG[rIndex].push(arr[i]), v);
    (!returnARG[rIndex]) && (returnARG[rIndex] = new Array());
    (registers.length === 0 && (v === "]" || v === "}")) && (parseError = `Invalid object - Redundant '${v}'`);
    if (!quotes) {
      if (v === " " && arr[i + 1] === " ") return v;
      if (registers.length === 0 && v === " ") return rIndex++, v;
      switch (v) {
        case '"':
          quotes = true;
          early = true;
          registers.push('"');
          break;
        case "{":
          registers.push('}');
          break;
        case "[":
          registers.push(']');
          break;
        case "}":
        case "]":
          registers.pop();
          break;
        case " ":
          return v;
        case "\\":
          return (returnARG[rIndex].push(arr[i]), v);
      }
    }
    if (quotes && v === "\"" && !early) {
      quotes = false;
      early = true;
      hasQuote[rIndex] = true;
      registers.pop();
    }
    if (!early || registers.find(v => v !== '"')) returnARG[rIndex].push(arr[i]), hasQuote[rIndex] = false;
    return v;
  }, this[0]);
  returnARG = returnARG.map(v => v.join("").trim());
  if (registers.length >= 1) return {
    error: true,
    data: `Invalid object - Missing '${registers[registers.length-1]}`
  }
  if (parseError) return {
    error: true,
    data: parseError
  }
  const parse_data = returnARG.map(argTypeCheck);
  if (loc_error) return {
    error: true,
    data: `Invalid location format - ${loc_error}`
  }
  return {
    error: false,
    data: returnARG,
    data_type: parse_data.map(v => v.type),
    parse_data: parse_data.map(v => v.data)
  }
}

/**
 * Compare two permutation
 * @this {BlockPermutation}
 * @param {BlockPermutation} perm
 * @return {boolean}
 */
BlockPermutation.prototype.equal = function (perm) {
    return `${this.type.id} ${JSON.stringify(this.getAllProperties())}` === `${perm.type.id} ${JSON.stringify(perm.getAllProperties())}`;
},
/**
 * set air using native js
 * @this {Block}
 * @return {void}
 */
Block.prototype.setAir=function(){this.setType(MinecraftBlockTypes.air)},
/**
 * set air using command
 * @this {Block}
 * @return {Promise<CommandResult>}
 */
Block.prototype.commandSetAir=function(){return this.dimension.runCommandAsync(`setblock ${this.x} ${this.y} ${this.z} air`)},
/**
 * beak(drop item) using command
 * @this {Block}
 * @return {Promise<CommandResult>}
 */
Block.prototype.break=function() {return this.dimension.runCommandAsync(`fill ${this.x} ${this.y} ${this.z} ${this.x} ${this.y} ${this.z} air 0 destroy`)};

/**
 * Makes the first letter of a string uppercase.
 * @this {String}
 * @return {string} The string with the first letter in uppercase.
 */
String.prototype.firstUpperCase=function(){return this[0].toUpperCase()+this.slice(1)},

/**
 * Removes the namespace from a Minecraft resource location.
 * @this {String}
 * @return {string} The string without the namespace.
 */
String.prototype.removeNameSpace=function(){return this.split(":")?.[1] ?? this},

/**
 * Replaces underscores in a string with spaces.
 * @this {String}
 * @return {string} The string with underscores replaced with spaces.
 */
String.prototype.removeUnderScope=function(){return this.split("_").join(" ")},

/**
 * Converts a Minecraft resource location string to a more readable format with proper casing.
 * @this {String}
 * @return {string} The formatted string.
 */
String.prototype.idToString=function(){return (this.split(":")[1] || this).split("_").map(str => str[0].toUpperCase() + str.slice(1)).join(" ") },

/**
 * Converts a string to a pseudo-random hexadecimal identifier.
 * @this {String}
 * @return {string} The identifier.
 */
String.prototype.toId=function(){
    let t = e =>{
        let r=e.replace(/[xyz]/g,t=>{
            let e=(new Date().getTime()+16*Math.random())%16|0;
            return("x"==t?e:"z"==t?(e>8?"-":"_"):3&e|8).toString(16)
        });
        return Number.isNaN(+r)?r:t(e);
    };
    return t(this);
},

/**
 * Left aligns a string with spaces until it reaches a specified length.
 * @this {String}
 * @param {number} length - The desired length of the string.
 * @return {string} The aligned string.
 */
String.prototype.alignLeft=function(length = 16) {
    let out = this,
        length1 = this.replace(/§[0-9a-forlkg]/g, "");
    if (length1.length < length) for (let i = 0; i < length - this.length; i++) out = " " + out;
    return out;
},

/**
 * Converts a string to its binary representation.
 * @this {String}
 * @return {string} The binary representation of the string.
 */
String.prototype.textToBinary=function(){return this.split('').map(char => char.charCodeAt(0).toString(2)).join(' ')},
/**
 * Converts a binary string to its corresponding text.
 * @return {string} The text corresponding to the binary string.
 */
String.prototype.binaryToText=function(){return this.split(' ').map(char => String.fromCharCode(parseInt(char, 2))).join('')},

String.prototype.hasNamespace=function(){return this.split(":")[1] !== void 0},

/**
 * Overwrites the built-in Array.splice() Method to add error handling and an additional parameter to remove more than one item.
 * @throws {Error} an error if the delete count is too large.
 * @this {Array} The array to perform the splice operation on.
 * @return {Array} The resulting array.
 */
Array.prototype.spliceClone = function() {
  if ("number" != typeof arguments[0] || "number" != typeof arguments[1] || "number" != typeof arguments[2]) {
    throw SyntaxError("Undefined value at .splice");
  }
  if (arguments[1] - 1 > arguments[0]) {
    throw SyntaxError("The delete number values is too big with this array");
  }
  let [t, e, r] = [
    this.slice(0, arguments[0] + 1 - arguments[1]),
    function t(e) {
      let r = [];
      for (let n = 3; n < 1 / 0 && e[n]; n++) {
        r.push(e[n]);
      }
      return r || [];
    }(arguments),
    this.slice(arguments[0] + 1, this.length)
  ];
  return [t, e, r].flat(0 === arguments[2] ? 1 : arguments[2] + 1);
};

/**
 * Returns a random element from the array.
 * @this {Array} The array to choose a random element from.
 * @return {*} A random element from the array.
 */
Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * Removes duplicates from the array.
 * @this {Array} The array to remove duplicates from.
 * @return {Array} The resulting array.
 */
Array.prototype.megresplice = function() {
  let t = [];
  for (let e of this) {
    if (t.includes(e)) {
      continue;
    } else {
      t.push(e);
    }
  }
  return t;
};

/**
 * Returns the player's facing direction.
 * @this {Player} The player to get the facing direction for.
 * @return {Direction} The player's facing direction.
 */
Player.prototype.getDirection = function(d = false) {
  let {
      x: t,
      y: e,
      z: r
  } = this.getViewDirection();
  let n = {
    x: Math.abs(t),
    y: Math.abs(e),
    z: Math.abs(r)
  };
  let o = {
    x: t < 0,
    y: e < 0,
    z: r < 0
  };
  o.x = o.x !== d,
  o.y = o.y !== d,
  o.z = o.z !== d;
  let i = [n.x, n.y, n.z];
  let a = Math.max(n.x, n.y, n.z);
  let s = i.indexOf(a);
  switch (["x", "y", "z"][s]) {
    case "x":
      return o.x ? "west" : "east";
    case "y":
      return o.y ? "down" : "up";
    case "z":
      return o.z ? "north" : "south";
  }
};

/**
 * Returns the 2D direction of the player's view vector as a string.
 * @this {Player} The player to get the facing direction for.
 * @returns {Direction} The 2D direction of the player's view vector as a string. Possible values are "north", "south", "east", or "west".
 */
Player.prototype.getDirection2D = function() {
  let { x: t, z: e } = this.getViewDirection(),
      r = { x: Math.abs(t), z: Math.abs(e) },
      n = { x: t < 0, z: e < 0 },
      o = [r.x, r.z],
      i = Math.max(r.x, r.z),
      a = o.indexOf(i);
  switch (["x", "z"][a]) {
    case "x":
      return n.x ? "west" : "east";
    case "z":
      return n.z ? "north" : "south";
  }
};

/**
 * Returns the 2D facing direction of the player as a string.
 * @this {Player} The player to get the facing direction for.
 * @returns {Direction} The 2D facing direction of the player as a string. Possible values are "north", "south", "east", or "west".
 */
Player.prototype.getFacingDirection2D = function() {
  let { x: t, z: e } = this.getViewDirection(),
      r = { x: Math.abs(t), z: Math.abs(e) },
      n = { x: t < 0, z: e < 0 },
      o = [r.x, r.z],
      i = Math.max(r.x, r.z),
      a = o.indexOf(i);
  switch (["x", "z"][a]) {
    case "x":
      return n.x ? "east" : "west";
    case "z":
      return n.z ? "south" : "north";
  }
};

/**
 * Clone inventory item (not contain equipment)
 * @this {Container}
 * @returns {Array<ItemStack>}
 */
Container.prototype.cloneAll = function() {
    return Array.from({length: this.size}, (e, i) => this.getItem(i));
}

/**
 * set Array<ItemStack> to inventory item (not contain equipment)
 * @this {Container}
 * @returns {Container}
 */
Container.prototype.setWith = function(items) {
    items.forEach((v, i) => this.setItem(i, v));
    return this;
}