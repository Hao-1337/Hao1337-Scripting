import { Player, world, system, ChatSendBeforeEventSignal, Direction } from "@minecraft/server";
import config from "../config";
import { Method } from "../main";
import Timer from "../modules/timer";


class Vector3Utils {
    /**
     * equals
     *
     * Check the equality of two vectors
     */
    static equals(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
    }
    /**
     * add
     *
     * Add two vectors to produce a new vector
     */
    static add(v1, v2) {
        return { x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z };
    }
    /**
     * subtract
     *
     * Subtract two vectors to produce a new vector (v1-v2)
     */
    static subtract(v1, v2) {
        return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
    }
    /** scale
     *
     * Multiple all entries in a vector by a single scalar value producing a new vector
     */
    static scale(v1, scale) {
        return { x: v1.x * scale, y: v1.y * scale, z: v1.z * scale };
    }
    /**
     * dot
     *
     * Calculate the dot product of two vectors
     */
    static dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }
    /**
     * cross
     *
     * Calculate the cross product of two vectors. Returns a new vector.
     */
    static cross(a, b) {
        return {
            x: a.y * b.z - a.z * b.y,
            y: a.z * b.x - a.x * b.z,
            z: a.x * b.y - a.y * b.x
        };
    }
    /**
     * magnitude
     *
     * The magnitude of a vector
     */
    static magnitude(v) {
        return Math.sqrt(v.x ** 2 + v.y ** 2 + v.z ** 2);
    }
    /**
     * distance
     *
     * Calculate the distance between two vectors
     */
    static distance(a, b) {
        return Vector3Utils.magnitude(Vector3Utils.subtract(a, b));
    }
    /**
     * normalize
     *
     * Takes a vector 3 and normalizes it to a unit vector
     */
    static normalize(v) {
        const mag = Vector3Utils.magnitude(v);
        return { x: v.x / mag, y: v.y / mag, z: v.z / mag };
    }
    /**
     * floor
     *
     * Floor the components of a vector to produce a new vector
     */
    static floor(v) {
        return { x: Math.floor(v.x), y: Math.floor(v.y), z: Math.floor(v.z) };
    }
    /**
     * toString
     *
     * Create a string representation of a vector3
     */
    static toString(v, options) {
        const decimals = options?.decimals ?? 2;
        const str = [v.x.toFixed(decimals), v.y.toFixed(decimals), v.z.toFixed(decimals)];
        return str.join(options?.delimiter ?? ", ");
    }
    /**
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    static clamp(v, limits) {
        return {
            x: Vector3Utils.clampNumber(v.x, limits?.min?.x ?? Number.MIN_SAFE_INTEGER, limits?.max?.x ?? Number.MAX_SAFE_INTEGER),
            y: Vector3Utils.clampNumber(v.y, limits?.min?.y ?? Number.MIN_SAFE_INTEGER, limits?.max?.y ?? Number.MAX_SAFE_INTEGER),
            z: Vector3Utils.clampNumber(v.z, limits?.min?.z ?? Number.MIN_SAFE_INTEGER, limits?.max?.z ?? Number.MAX_SAFE_INTEGER)
        };
    }
    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    static lerp(a, b, t) {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t,
            z: a.z + (b.z - a.z) * t
        };
    }
    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    static slerp(a, b, t) {
        const theta = Math.acos(Vector3Utils.dot(a, b));
        const sinTheta = Math.sin(theta);
        const ta = Math.sin((1 - t) * theta) / sinTheta;
        const tb = Math.sin(t * theta) / sinTheta;
        return Vector3Utils.add(Vector3Utils.scale(a, ta), Vector3Utils.scale(b, tb));
    }
    static clampNumber(val, min, max) {
        return Math.min(Math.max(val, min), max);
    }
};

var $CONFIG = config.ChatHandle;

/**
 * Try to parse the js object from the string
 * @param {String} data 
 * @return {Object|Array}
 * @private
 */
function evalParse(data) {
    try {
        return (new Function(`return ${data}`)());
    } catch (e) {
        if (e instanceof ReferenceError) return fasle;
        return new Error("Eval doesn't enable yet. Please check the manifest.json");
    }
}
/**
 * Get/check Array<unknow> for object input string
 * @private
 * 
 * @param {String} string Input string
 * @param {boolean} [check=true] Return boolean (true) if parse is complete without error
 * @return {boolean|Array}
 */
function parseArray(string, check = true) {
    try {
        if (check) return Array.isArray(evalParse(string));
        return evalParse(string);
    } catch (e) {
        return false;
    }
}
/**
 * Get/check Object<unknow> for object input string
 * @private
 * 
 * @param {String} string Input string
 * @param {boolean} [check=true] Return boolean (true) if parse is complete without error
 * @return {boolean|Object}
 */
function parseObject(string, check = true) {
    try {
        if (check) return evalParse(string) instanceof Object;
        return evalParse(string);
    } catch (e) {
        return false;
    }
}
/**
 * Returns a location of the inputed aguments
 * @private
 * 
 * @param {Array<String>} param0 input string for each xyz
 * @param {Player} param1 Player that execute this parser
 * @returns {import("@minecraft/server").Vector3}
 */
function parseLocation([x, y, z], { location }) {
    if (!x || !y || !x) return new Error("Undefined Input");

    const a = [x, y, z].map((arg) => {
        const r = arg.match(/(?:-|)\d+/);
        return r ? +r[0] : 0;
    });

    if (x.includes('~')) return {
        x: a[0] + location.x,
        y: a[1] + location.y,
        z: a[2] + location.z
    }

    return relativeCoor(location, a, arguments[1].getRotation(), arguments[1].getFacingDirection2D());
}
/**
 * [Parser for '^^^' location]
 * Trọng lại thủ dâm một lần nữa, tại sao Trọng không dùng app saygex69
 * 
 * @param {import("@minecraft/server").Vector3} param0 Player location
 * @param {Array<number, number, number>} param1 Input relative <[x, y, z]>
 * @param {import("@minecraft/server").Vector2} viewRotation
 * @param {Direction} direction Player facing dỉaction
 * @return {import("@minecraft/server").Vector3} New position
 */
function relativeCoor({ x, y, z }, [mx, my, mz], viewRotation, direction) {
    let yaw = viewRotation.x * (Math.PI / 180),
        pitch = (viewRotation.y - 90) * (Math.PI / 180),
        out = {};

    let rx = Math.sin(yaw),
        ry = Math.sin(pitch),
        rz = Math.cos(yaw);

    switch (direction) {
        case "south":
            out.x = x - mx * rz;
            out.z = z - mz * rz;
            out.y = y - my * ry;
            break;
        case "north":
            out.x = x + mx * rz;
            out.z = z + mz * rz;
            out.y = y - my * ry;
            break;
        case "east":
            out.x = x - mz * rz ;
            out.z = z + mx * rz;
            out.y = y + my * ry;
            break;
        case "west":
            out.x = x + mz * rz;
            out.z = z - mx * rz;
            out.y = y + my * ry;
            break;
    }

    // world.debug({ matrix: { rx, ry, rz }, in: arguments[1], out });
    return out;
}
/**
 * Get Array<Player|Entity> for selector input string
 * @private
 * 
 * @param {String} selector input minecraft target selector
 * @param {Player} player Player that execute this parser
 * @param {boolean} bool If input string is player name
 * @return {Array<Entity|Player>}
 */
function testfor(selector, player, bool) {
    const id = "t1id:" + String((Date.now() * Math.random() % 1).toFixed(7)).slice(2);
    if (!bool) selector = `@a[name="${selector}"]`;
    player.runCommand(`tag ${selector} add "${id}"`);
    return Array.from(player.dimension.getEntities({ tags: [id] }), e => (e?.removeTag(id), e));
}
/**
 * Get <Vector3> for position input string
 * @private
 * 
 * @param {String} selector input minecraft location selector
 * @param {Player} player Player that execute this parser
 * @return {import("@minecraft/server").Vector3}
 */
function testforloc(string, player) {
    if (string.includes('~') && string.includes('^')) return new Error("Cannot expand coordinates with different types of arguments");

    let param = string.split("~")?.map(_ => "~" + _);
    if (param.length < 3) {
        param = string.split("^")?.map(_ => "^" + _);
        param.shift();
        if (param.length < 3) return new Error("Unknow location");
    }
    return parseLocation(param, player);
}

/**
 * need to make a debug
 * @private
 * 
 * @param {String} string Input string
 * @param {Player} player player using for parse
 * 
 * @return {Obiect}
 */
function split(string, player) {
    let registers = [],
        returnARG = [],
        hasQuote = {},
        quotes = false,
        parseError,
        error,
        rIndex = 0;

    if (!(player instanceof Player)) return {
        error: true,
        data: `InternalError: Input param must be a Player. Please report this error to admin to fix it soon.`
    };

    string.split("").reduce((pv, v, i, arr) => {
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
    }, string[0]);

    returnARG = returnARG.map(v => v.join("").trim());
    if (registers.length >= 1) return {
        error: true,
        data: `Invalid object - Missing '${registers[registers.length - 1]}`
    }

    if (parseError) return {
        error: true,
        data: parseError
    }

    const parse_data = returnARG.map((string, index) => {
        let num_parse = `${string.trim()}`.match(/(\-\d+\.\d+)|(\d+\.\d+)|(\-\d+)|(\d+)/gm),
            pos_parse = `${string.trim()}`.match(/([\^\~](?:[+-]?(?:\d+(?:\.\d+)?)?)?){3}/gm);

        // world.debug({ string, index, pos_parse });

        const bool = string.includes("@"),
            type = bool ? [] : ["string"];

        if (hasQuote[index]) return {
            type: ["string"],
            data: string
        }

        if (num_parse && `${num_parse[0]}`.length === string.length) return {
            type: ["number", "location"],
            data: +string
        }

        let cache;
        if (pos_parse && `${pos_parse[0]}`.length === string.length) {
            cache = {
                type: ["location"],
                data: testforloc(string, player)
            }

            if (cache.data instanceof Error) return cache.data;
            return cache;
        }

        if (
            string.match(/(@[asre]\[[\w\W]*?\])|(@[asre])/g) ||
            Array.from(world.getPlayers(), v => v.name.toLowerCase()).some(pln => pln === string.toLowerCase())
        ) {
            cache = {
                type: ["selector", ...type],
                data: testfor(string, player, bool)
            }

            if (cache.data instanceof Error) return cache.data;
            return cache;
        }

        if ((string === 'true' || string === "false")) return {
            type: ["boolean"],
            data: (string === "true")
        }

        if (parseArray(string)) {
            cache = {
                type: ["array"],
                data: parseArray(string, false)
            }

            if (cache.data instanceof Error) return cache.data;
            return cache;
        }

        if (parseObject(string)) {
            cache = {
                type: ["object"],
                data: parseObject(string, false)
            }

            if (cache.data instanceof Error) return cache.data;
            return cache;
        }


        return {
            type: ["string"],
            data: string
        };
    });

    if (error) return {
        error: true,
        data: error + error.stack
    }
    return {
        error: false,
        data: returnARG,
        data_type: parse_data.map(v => v.type),
        parse_data: parse_data.map(v => v.data)
    }
}
/**
 * Double check the arg type without parse it
 * 
 * @param {String} string 
 * @return {Array<String>}
 */
function argTypeCheck(string) {
    string = `${string ?? ""}`.trim();
    let num_parse = string.match(/(\-\d+\.\d+)|(\d+\.\d+)|(\-\d+)|(\d+)/gm),
        loc_parse = string.match(/([\^\~](?:[+-]?(?:\d+(?:\.\d+)?)?)?){3}/gm);
    return (num_parse && num_parse[0] && `${num_parse[0]}`.length === string.length) ? ["number", "location"] : (loc_parse && loc_parse[0] && `${loc_parse[0]}`.length === string.length) ? "location" : (string === 'true' || string === "false") ? "boolean" : (string.match(/(@[asre]\[[\w\W]*?\])|(@[asre])/g) || Array.from(world.getPlayers(), v => v.name).some(pln => pln === string)) ? ["selector", "string"] : (Array.isArray(string)) ? ["array"] : (string instanceof Object) ? ["object"] : ["string"];
}

function EvalHandle(string, player) {
    let data;
    try {
        data = new Function(`return (${data});`)();
    } catch {
        eval(data);
    }

    player.sendMessage(`${string}`);
    if (data) player.sendMessage(JSON.colorStringify(data));
}

const $CDLog = {};

/**
 * Chat cooldown
 *
 * @param {Player} param0 Player need for cooldown register
 * @return {boolean} 
 */
function chatCoolDown({ name }) {
    !$CDLog[name] && ($CDLog[name] = 0);
    if ($CDLog[name] > 0) return true;
    $CDLog[name] = $CONFIG.cooldownTime;

    Timer.setInterval(() => ($CDLog[name] -= 2), () => ($CDLog[name] = 0), 2, $CONFIG.cooldownTime);
    return false;
}
/**
 * Chat rank and team chat
 *
 * @param {Player} player
 * @param {String} message
 */
function Chat(player, chat) {
    let name = player.name,
        region = player.tagByPrefix($CONFIG.regionPrefix),
        rank = `§8[§r${player.tagByPrefixs($CONFIG.rankPrefix)?.join($CONFIG.multirankSign)}§r§8]`,
        times = Method.timeFormat(),
        colorName = player.name.includes("§");

    rank.length <= 0 && (rank = `§8[${$CONFIG.firstRank.join($CONFIG.multirankSign)}§r§8]`);
    !$CONFIG.showTime && (times = undefined);
    !$CONFIG.showRank && (rank = undefined);
    !colorName && (name = `§b${name}`);

    if (chat.startsWith($CONFIG.CRegionPrefix)) {
        if (!$CONFIG.regionEnable) return player.sendMessage(`§4[Private Chat] §cPrivate chat is being turned off, ask admin for reson`);
        if (chatCoolDown(player)) return player.sendMessage(`§cYou chat so fast! Please wait more ${($CDLog[player.name] / 20).toFixed(2)}s`);
        if (!region) return player.sendMessage(`§4[Private chat] §cYou don't have a private chat! Join or create one!`);

        return [...world.getPlayers({ tags: [`${$CONFIG.regionPrefix}${region}`] })].forEach(p => p.sendMessage(`§a${region}§r§l§e > §r${rank ? `${rank} ` : ""}${name}${times ? ` ${times}` : ""}§r§e >§r§a ${chat.slice($CONFIG.regionPrefix.length)}`));
    }

    if (chatCoolDown(player)) return player.sendMessage(`§cYou chat so fast! Please wait more ${($CDLog[player.name] / 20).toFixed(2)}s`);
    /*.replace(":skull:", String.fromCodePoint(parseInt("0xE110"), 16)*/
    world.sendMessage(`§r${rank ? `${rank} ` : ""}${name}${times ? ` ${times}` : ""}§r§e >§r§a ${chat}`);
}
/**
 * IDK
 *
 * @param {ChatSendBeforeEventSignal} param0
 */
function commandHandle({ sender: player, message: chat }) {
    let str = chat.slice($CONFIG.commandPrefix.length);
    // Player.prototype.teleport
    player.teleport(split(str, player).parse_data[1]);

}
/**
 * Main thread of chat handle
 *
 * @param {ChatSendBeforeEventSignal} param0
 */
export function ChatHandle({ sender: player, message: chat }) {
    if (chat.startsWith($CONFIG.commandPrefix)) {
        commandHandle(arguments[0]);
        return;
    }
    Chat(player, chat);
}

class Command {
    static update(_) {
        Object.assign($CONFIG, _);
    }
}