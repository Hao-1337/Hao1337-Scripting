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
import { system, ItemStack, world } from "@minecraft/server";
import { errorHandle } from "../main.js";

let $overworld = world.getDimension("overworld");

/**
 * Represents a Scoreboard Database.
 * @typedef {Object} ScoreboardDB
 * @property {string} name - The name of the database.
 * @property {Function} getJSON - Retrieves the JSON data from the scoreboard.
 * @property {Function} set - Sets a key-value pair in the database.
 * @property {Function} get - Retrieves the value associated with the given key.
 * @property {Function} transfer - Transfers a key-value pair to a new table with a new key.
 * @property {Function} update - Updates the value associated with the given key.
 * @property {Function} remove - Removes the key-value pair associated with the given key.
 * @property {Function} asyncremove - Asynchronously removes the key-value pair associated with the given key.
 * @property {Function} toString - Converts the database to a string representation.
 * @property {Function} hasKey - Checks if the database has the given key.
 * @property {Function} hasTable - Checks if the database has the given table.
 * @property {Function} allKey - Retrieves all the key-value pairs in the database.
 */

/**
 * Define a scoreboard as database
 * @athour Choigame123
 */
export class ScoreboardDB {
  /**
   * Define database
   * @constructor
   * @param String name table name
   * @return {ClientTagDB}
   */
  constructor(name) {
    if (objinit) this.obj = obj;
    else try {
      world.scoreboard.addObjective('database', "§4§lDatabase");
    } catch {} finally {
      obj = world.scoreboard.getObjective('database');
      objinit = true;
      this.obj = obj;
    }
    this.name = name;
    this.counter = counter;
    counter++;
    TABLE[this.counter] = name;
  }
}

/**
 * Database class for handling data storage and retrieval.
 */
export default class Database {
    /**
     * Array to store IDs.
     * @type {string[]}
     */
    static ID = [];

    /**
     * Array to store cloned data.
     * @type {string[]}
     */
    static clone = [];

    /**
     * Object to store raw data.
     * @type {Object}
     */
    static raw = {};

    /**
     * Object to store processed string.
     * @type {Object}
     */
    static cache = {};
    
    /**
     * Object to store processed data.
     * @type {Object}
     */
    static data = {};

    /**
     * Chunk size for splitting strings.
     * @type {number}
     */
    static splitChunk = 2 ** 15 - 1;

    /**
     * Prefix for dynamic properties.
     * @type {string}
     */
    static prefix = "database:";

    /**
     * Regular expression for matching prefix.
     * @type {RegExp}
     */
    static prefixReg = new RegExp(`^database:`, "m");

    /**
     * Initializes the Database class.
     */
    static init() {
        Database.clone = world.getDynamicPropertyIds().filter(key => key.match(Database.prefixReg) && key.includes(" "));
        Database.ID = Database.clone.map(n => n.split(" "));
        Database.raw = {};
        Database.data = {};
        
        for (let i = 0; i < Database.ID.length; i++) {
            let [a, b] = Database.ID[i];
            if (!Database.raw[a]) Database.raw[a] = {
                index: [b],
                fixedIndex: [b],
                strIndex: [world.getDynamicProperty(Database.clone[i])],
                string: ""
            }
            else {
                Database.raw[a].index.push(b),
                Database.raw[a].fixedIndex.push(b),
                Database.raw[a].strIndex.push(world.getDynamicProperty(Database.clone[i]))
            }
        }

        for (let key in Database.raw) {
            let out = [],
                data = Database.raw[key],
                sorter = data.index.sort((a, b) => a - b).map(v => data.fixedIndex.indexOf(v));
            for (let k of sorter) out.push(data.strIndex[k]);

            Database.cache[key.replace(Database.prefixReg, "")] = out.join("");
        }
        
        for (let key in Database.cache) try {
            Database.data[key] = JSON.parse(Database.cache[key]);
        } catch {
            Database.data[key] = Number.isNaN(+Database.cache[key]) ? Database.cache[key] : +Database.cache[key];
        }
    }

    /**
     * Splits a string into chunks.
     * @param {string} str - The input string to be split.
     * @returns {string[]} An array of string chunks.
     */
    static splitString(str) {
        let out = [],
            length = str.length,
            lastSlice = 0;
 
        while (length > 0) {
            if (length < Database.splitChunk) {
                out.push(str.slice(lastSlice));
                break;
            }
            out.push(str.slice(lastSlice, lastSlice + Database.splitChunk));
            lastSlice += Database.splitChunk;
            length -= Database.splitChunk;
        }

        return out;
    }

    /**
     * Adds data to the database.
     * @param {string} name - The name of the data entry.
     * @param {Object} value - The value to be stored (default is an empty object).
     * @returns {boolean} True if successfully added, false if the entry already exists.
     */
    static add(name, value = {}, t = false) {
        if (Database.has(name) && !t) return false;
        
        const data = Database.splitString(JSON.stringify(value));
        for (let i = 0; i < data.length; i++) world.setDynamicProperty(`${Database.prefix}${name} ${i}` , data[i]);

        Database.init();
        return true;
    }

    /**
     * Retrieves data from the database.
     * @param {string} name - The name of the data entry.
     * @returns {*} The retrieved data, parsed from JSON if possible.
     */
    static get(name) {
        if (!Database.has(name)) return;
        return Database.data[name];
    }

    /**
     * Checks if a data entry exists in the database.
     * @param {string} name - The name of the data entry.
     * @returns {boolean} True if the entry exists, false otherwise.
     */
    static has(name) {
        return Database.cache[name] != null;
    }

    /**
     * Removes a data entry from the database.
     * @param {string} name - The name of the data entry.
     * @param {boolean} [u=true] - Whether to update the database after removal (default is true).
     * @returns {boolean} True if successfully removed, false if the entry does not exist.
     */
    static remove(name, u = true) {
        if (!Database.has(name)) return false;

        for (let key of Database.raw[`${Database.prefix}${name}`].index) world.setDynamicProperty(`${Database.prefix}${name} ${key}`);

        if (u) Database.init();
        return true;
    }

    /**
     * Updates a data entry in the database.
     * @param {string} name - The name of the data entry.
     * @param {Object} value - The new value to be assigned.
     * @returns {boolean} True if successfully updated, false if the entry does not exist.
     */
    static update(name, value) {
        if (!Database.has(name)) return false;
        
        //Database.remove(name, false);
        Database.add(name, value, true);
        
        return true;
    }

    /**
     * Updates a data entry by assign the database.
     * Only Object can use this method.
     * @param {string} name - The name of the data entry.
     * @param {Object} value - The new value to be assigned.
     * @returns {boolean} True if successfully updated, false if the entry does not exist.
     */
    static assign(name, assignValue) {
        if (!Database.has(name)) return false;
        
        Object.assign(Database.data[name], assignValue);
 
        Database.add(name, Database.data[name], true);

        return true;
    }
}

/**
 * Retrieves the JSON data from the scoreboard.
 * @private
 * @returns {Array} The JSON data.
 */
ScoreboardDB.prototype.getJSON = function () {
  try {
    return this.obj
      ?.getParticipants()
      ?.filter(v => v.type === 'fakePlayer' && v.displayName.startsWith('CG10DB[') && v.displayName.endsWith(']'))
      ?.map(_ => {
        let v = _.displayName;
        return (
          (v = v.slice(7, v.length - 1)),
          (v = v.split(' ')),
          {
            name: v[0],
            key: v[1],
            parse_data: JSON.parse(
              v[2]
                .replace(/\[\:\]/gm, ' ')
                .replace(/\[\'\]/gm, '"')
            ),
            raw_data: v[2],
            participant: _
          }
        );
      })
      .filter((v) => v.name === this.name) ?? [];
  } catch (e) {
    errorHandle(new Error(`Database:getJSON():${e} ${e.stack}`));
  }
};

/**
 * Sets a key-value pair in the database.
 * @param {string} key - The key.
 * @param {*} value - The value.
 * @param {string} [table=this.name] - The table to set the key-value pair in.
 * @returns {boolean} Returns true if the key-value pair was successfully set, false otherwise.
 */
ScoreboardDB.prototype.set = function (key, value, table = this.name) {
  let data = this.getJSON();
  if (data.some((v) => v.key === key)) return false;
  $overworld.runCommandAsync(`scoreboard players add "CG10DB[${table} ${key} ${JSON.stringify(value)
      .replace(/\"/gm, '[\'\]')
      .replace(/\ /gm, '[\:]')
    }]" database 0`);
  return true;
};

/**
 * Retrieves the value associated with the given key.
 * @param {string} key - The key.
 * @returns {*} The value associated with the key.
 */
ScoreboardDB.prototype.get = function (key) {
  let data = this.getJSON();
  if (!data) {
    errorHandle(`Table '${this.name}' doesn\'t have key:  '${key}'`);
    return;
  }
  return data.find((v) => v.key === key)?.parse_data;
};

/**
 * Transfers a key-value pair to a new table with a new key.
 * @param {string} key - The key to transfer.
 * @param {string} new_table - The new table to transfer the key-value pair to.
 * @param {string} new_key - The new key to assign.
 */
ScoreboardDB.prototype.transfer = function (key, new_table, new_key) {
  let data = this.getJSON();
  if (!data.some((v) => v.key === key)) {
    errorHandle(`Table '${this.name}' doesn\'t have key:  '${key}'`);
    return;
  }
  if (!this.hasTable(new_table)) {
    errorHandle('Table ', new_table, ' not found');
    return;
  }
  this.remove(key);
  return this.set(new_key, data.find((v) => v.key === key), new_table);
};

/**
 * Updates the value associated with the given key.
 * @param {string} key - The key to update.
 * @param {*} value - The new value.
 * @returns {boolean} Returns true if the key was successfully updated, false otherwise.
 */
ScoreboardDB.prototype.update = function (key, value) {
  let data = this.getJSON();
  if (!data.some((v) => v.key === key)) {
    errorHandle(`Table '${this.name}' doesn\'t have key:  '${key}'`);
    return false;
  }
  this.remove(key);
  return this.set(key, value);
};

/**
 * Removes the key-value pair associated with the given key.
 * @param {string} key - The key to remove.
 * @returns {boolean} Returns true if the key-value pair was successfully removed, false otherwise.
 */
ScoreboardDB.prototype.remove = function (key) {
  let raw = this.getJSON().find((v) => v.key === key)?.participant;
  if (!raw) {
    errorHandle(`Table '${this.name}' doesn\'t have key:  '${key}'`);
    return false;
  }
  return this.obj.removeParticipant(raw);
};

/**
 * Converts the database to a string representation.
 */
ScoreboardDB.prototype.toString = function () {
  errorHandle.warn(
    this.getJSON()?.map((v) => JSON.colorStringify(v.parse_data)).join('\n')
  );
};

/**
 * Checks if the database has the given key.
 * @param {string} key - The key to check.
 * @returns {boolean} Returns true if the database has the key, false otherwise.
 */
ScoreboardDB.prototype.hasKey = function (key) {
  return this.getJSON().find((v) => v.key === key) !== undefined;
};

/**
 * Checks if the database has the given table.
 * @param {string} [table=this.name] - The table to check.
 * @returns {boolean} Returns true if the database has the table, false otherwise.
 */
ScoreboardDB.prototype.hasTable = function (table = this.name) {
  return TABLE.includes(table);
};

/**
 * Retrieves all the key-value pairs in the database.
 * @returns {Array} An array of key-value pairs.
 */
ScoreboardDB.prototype.allKey = function () {
  return this.getJSON();
};
