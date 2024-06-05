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
    world, system, Player,
    BlockPermutation, Method, AsyncMethod,
    errorHandle, EvalThread 
} from "../main.js";
import Timer from "./timer.js"

const config = {
  cooldownTime: 40,
  rankPrefix: "rank:",
  regionPrefix: "region:",
  multfirstRank: "§r§8][§r",
  firstRank: ["§bMember"],
  showTime: true,
  showRank: true,
  regionEnable: true,
  commandPrefix: "!",
  CRegionPrefix: "$",
  evalPrefix: "!!"
};

const $CDLog = {},
      buffer = new Map(),
      bufferS = new Map();

/**
 * create custom command
 */
export default class CommandBuilder {
  static prefix() {
    return config.commandPrefix;
  }
  static updateConfig(data) {
    try {
      Object.assign(config, data);
    } catch (e) {
      errorHandle(e);
      return false;
    }
    return true;
  }
  static index = 0;
  static commands = [];
  static names = [];
  static alias = [];
  /**
   * Make a command. Quilite complicated. Take a look at the code I wrote
   */
  constructor({
    command,
    alias = [],
    category = "empty",
    usage = ["No usage"],
    permission = player => true,
    show_help = true,
    error_show = "error",
    callBack,
    openForm,
    request,
    args = {}
  }) {
    let $;
    if (
      Object.keys(CommandBuilder.names).includes(command) ||
      (($ = Object.values(CommandBuilder.alias)), alias.some(v => $.includes(v)))
    ) throw new TypeError(`Same command or alias detect!`);
    if (typeof alias === "string") alias = [alias];
    if (typeof category === "string") category = [category];
    if (typeof usage === "string") usage = [usage];
    if (typeof command !== "string") throw new SyntaxError(`Command must be a string!`);
    if (!Array.isArray(alias)) throw new SyntaxError(`Alias must be a array or string!`);
    if (!Array.isArray(category)) throw new SyntaxError(`Category must be a array or string!`);
    if (!Array.isArray(usage)) throw new SyntaxError(`Usage must be a array or string!`);
    if (!(permission instanceof Function)) throw new SyntaxError(`Permissions must be a function(player: Player): Boolean!`);
    if (
      !["error", "usage", "both"].some(v => v === error_show)
    ) throw new SyntaxError(`Error show mode must be 'error' | 'both' | 'usage'`);
    if (typeof show_help !== "boolean") throw new SyntaxError(`show_help must be a boolean!`);
    if (Object.keys(args).some(v => isNaN(+v))) throw new SyntaxError(`Arg key must be a number!`);
    if (!callBack) throw new SyntaxError(`You need a callBack!`);
    if (!(callBack instanceof Function)) throw new SyntaxError(`CallBack must be an function(args: callBackData): void`);
    if (
      openForm &&
      !(openForm instanceof Function)
    ) throw new SyntaxError(`Args[${i}]-openForm must be an function(args: callBackData): { to: Player, form: ModalFormData|ActionFormData|MessageFormData, callBack: function(args: formRespon): void, ignored: function(args: Player): Boolean}`);
    if (
      request &&
      !(request instanceof Function)
    ) throw new SyntaxError(`Args[${i}]-request must be an function(args: callBackData): { to: Player, message: String, callBack: function(args: {player: Player, recipient: Player}): void, ignored: function(args: Player): Boolean, id: String}`);
    for (let [i, {
        type/*Acpect type for arg*/,
        can_empty = false/*That mean this arg can be blank*/,
        default_value/*Value will be used if arg is blank*/,
        number_range/*Add range of values if arg is numeric*/,
        valid_value/*Possible values for arg*/,
        break_condition = (callBackData) => false/*Call a callback if the condition is true (any subsequent renders will be ignored)*/,
        break_callBack = () => {}/*CallBack for break cond*/
      }] of Object.entries(args)
    ) {
      if (!type)
        throw new SyntaxError(`Args[${i}]-type you need it for create command!`);
      if (typeof type === "string") type = [type];
      if (!Array.isArray(type)) throw new SyntaxError(`Args[${i}]-type must be a array or string!`);
      if (can_empty) {
        if (typeof can_empty !== "boolean") throw new SyntaxError(`Args[${i}]-can_empty must be a boolean`);
        if (can_empty && default_value === undefined) throw new SyntaxError(`Args[${i}] you need default_value for use can_empty`);
      }
      if (number_range) {
        if (!(!Array.isArray(number_range) && typeof number_range === "object")) throw new SyntaxError(`Args[${i}]-number_range must be an object`);
        if (
          !number_range.max ||
          !number_range.min ||
          typeof number_range.min !== "number" ||
          typeof number_range.max !== "number"
        ) throw new SyntaxError(`Args[${i}]-number_range must be format like {max: Number, min: Number}`);
      }
      if (valid_value && !Array.isArray(valid_value)) throw new SyntaxError(`Args[${i}]-valid_value must be an array`);
      if (break_condition) {
        if (!(callBack instanceof Function)) throw new SyntaxError(`Args[${i}]-break_condition must be an function(args: callBackData): Boolean`);
        if (!(break_callBack instanceof Function)) throw new SyntaxError(`Args[${i}]-break_callBack must be an function(args: callBackData): Void`);
      }
    }
    this.index = CommandBuilder.index;
    CommandBuilder.index++;
    CommandBuilder.commands[this.index] = arguments[0];
    CommandBuilder.names[this.index] = command;
    CommandBuilder.alias[this.index] = alias;
  }
}

function chatCoolDown({name}) {
  !$CDLog[name] && ($CDLog[name] = 0);
  if ($CDLog[name] > 0) return true;
  $CDLog[name] = config.cooldownTime;

  Timer.setInterval(() => ($CDLog[name] -= 2), () => ($CDLog[name] = 0), 2, config.cooldownTime);
  return false;
}

function argTypeCheck(string) {
  string = `${string ?? ""}`.trim();
  let num_parse = string.match(/(\-\d+\.\d+)|(\d+\.\d+)|(\-\d+)|(\d+)/gm),
      loc_parse = string.match(/([\^\~](?:[+-]?(?:\d+(?:\.\d+)?)?)?){3}/gm);
  return (num_parse && num_parse[0] && `${num_parse[0]}`.length === string.length) ? ["number", "location"] : (loc_parse && loc_parse[0] && `${loc_parse[0]}`.length === string.length) ? "location" : (string === 'true' || string === "false") ? "boolean" : (string.match(/(@[asre]\[[\w\W]*?\])|(@[asre])/g) || Array.from(world.getPlayers(), v => v.name).some(pln => pln === string)) ? ["selector", "string"] : (Array.isArray(string)) ? ["array"] : (string instanceof Object) ? ["object"] : ["string"];
}

export async function ChatHandle({message: chat, sender: player}) {
  //world.debug(arguments);
  try{
    if (chat.startsWith(config.evalPrefix)) {
      if (!player.hasTag("admin")) return player.sendMessage("§cMust be admin can use it");
      return EvalThread(chat, player, config);
    }
    let name = player.name,
      region = player.tagByPrefix(config.regionPrefix),
      rank = `§8[§r${player.tagByPrefixs(config.rankPrefix)?.join(config.multirankSign)}§r§8]`,
      times = Method.timeFormat(),
      colorName = player.name.includes("§");

    rank.length <= 0 && (rank = `§8[${config.firstRank.join(config.multirankSign)}§r§8]`);
    !config.showTime && (times = undefined);
    !config.showRank && (rank = undefined);
    !colorName && (name = `§b${name}`);

   if (chat.startsWith(config.CRegionPrefix)) {
    if (!config.regionEnable) return player.sendMessage(`§4[Private Chat] §cPrivate chat is being turned off, ask admin for reson`);
    if (chatCoolDown(player)) return player.sendMessage(`§cYou chat so fast! Please wait more ${($CDLog[player.name] / 20).toFixed(2)}s`);
    if (!region) return player.sendMessage(`§4[Private chat] §cYou don't have a private chat! Join or create one!`);

    return [...world.getPlayers({tags:[`${config.regionPrefix}${region}`]})].forEach(p => p.sendMessage(`§a${region}§r§l§e > §r${rank ? `${rank} ` : ""}${name}${times ? ` ${times}` : ""}§r§e >§r§a ${chat.slice(config.regionPrefix.length)}`));
    }

    if (chat.startsWith(config.commandPrefix)) {
      let check_args, checkM = chat.slice(config.commandPrefix.length), command, ct = 0;

      if (!checkM) return player.sendMessage(`§cUnknown command, did you mean:§a ${CommandBuilder.commands.random().command}`);

      check_args = checkM.splitArgument(player);
      //world.debug(check_args)
      if (check_args.error) return player.sendMessage(`§4Error:§c ${check_args.data} - Native conversion failed`);

      let args = check_args.data,
          args_type = check_args.data_type,
          parse_datas = [],
          reg = "";
  
      command = CommandBuilder.commands.find(v => (v.command === args[0] || v.alias?.includes(args[0])));

      if (!command) {
        for (let x of args[0]) (!(ct % 2) && ct && (reg+=" ")), (ct++, reg+= x);
        reg = new RegExp(reg.split(" ").filter(v => v.length >= 2).join("|"), "gm");
        
        return player.sendMessage(`§cUnknown command, did you mean:§a ${CommandBuilder.commands.filter(v => v && v.command.match(reg)).random()?.command ?? "help"}`);
      }

      if (command.permission && !command.permission(player)) return player.sendMessage(`§4Error:§c You need permisssion for use this command!`);

      for (const pb of check_args.parse_data) parse_datas.push(await pb);
 
      //console.warn(JSON.stringify(args), "\n", args_type);
      const _ = [],
      $1 = command.error_show === "error" || command.error_show === "both",
      $2 = command.error_show === "help" || command.error_show === "both";

      for (let i = 0; i < args.length; i++) _[i] = {
        raw: args[i],
        type: args_type[i],
        data: parse_datas[i]
      }

      const _1 = {
        player,
        data: _,
        raw: check_args.data,
        type: check_args.data_type,
        pData: parse_datas
      };
      for (let [i, {
        type/*Acpect type for arg*/,
        can_empty = false/*That mean this arg can be blank*/,
        default_value/*Value will be used if arg is blank*/,
        number_range/*Add range of values if arg is numeric*/,
        valid_value/*Possible values for arg*/,
        break_condition = () => 0/*Call a callback if the condition is true (any subsequent renders will be ignored)*/,
        break_callBack = () => {}/*CallBack for break cond*/
      }] of Object.entries(command.args)) {
        typeof type === "string" && (type = [type]);
        const { raw, type: type1, data } = _[i] ?? {},
        check = () => {
          /*arg is missing*/
          if (!raw) {
            $1 && player.sendMessage(`§4Error:§c ${args.slice(0, +i+1).join(" ")}§6  >>> <<<§f ${args.slice(i).join(" ")}§r§c - Missing arguments[${i}], must be a: §e${type.join(", ")}`);
            $2 && player.sendMessage(`§4Usage:§r ${command.usage}`);
            return false;
          }
          /*invalid type of arg*/
          if (!type.some(v => type1.includes(v))) {
            $1 && player.sendMessage(`§4Error:§c ${args.slice(0, +i).join(" ")}§6  >>> ${args[i]} §6<<<§f ${args.slice(+i+1).join(" ")}§r§c - Invalid typeof arguments[${i}] (§e${type1.join(", ")}§r§c), must be a: §e${type.join(", ")}`);
            $2 && player.sendMessage(`§4Usage:§r ${command.usage}`);
            return false;
          }
          /*Invalid value*/
          if (valid_value && !valid_value.some(v => `${v}` === `${raw}`)) {
            $1 && player.sendMessage(`§4Error:§c ${args.slice(0, +i).join(" ")}§6  >>> ${args[i]} §6<<<§f ${args.slice(+i+1).join(" ")}§r§c - Invalid value at arguments[${i}], must be:§e ${valid_value.join(", ")}`);
            $2 && player.sendMessage(`§4Usage:§r ${command.usage}`);
            return false;
          }
          /*Out of number range*/
          if (type1.includes("number") && number_range && (data[i] > number_range.max || data[i] < number_range.min)) {
            $1 && player.sendMessage(`§4Error:§c ${args.slice(0, +i).join(" ")}§6  >>> ${args[i]} §6<<<§f ${args.slice(+i+1).join(" ")}§r§c - The value must be in the range:§e [${number_range.min}, ${number_range.max}]`);
            $2 && player.sendMessage(`§4Usage:§r ${command.usage}`);
            return false;
          }
          return true;
        }
        try {
          if (break_condition && break_condition(_1)) return break_callBack(_1);
        } catch (e) {
           player.sendMessage(`§4[Errors occurred while executing CMD]§c ${e}\n${e.stack}`);
        }
        /*If it can be a blank*/
        if (can_empty) {
          if (raw) {
            if (!check()) return;
            continue;
          }
          if (default_value === undefined) throw new SyntaxError("default_value is undefined!");
          !_[i] && (_[i] = {});
          _[i].raw = JSON.stringify(default_value);
          _[i].type = argTypeCheck(default_value);
          _[i].data = default_value;
          _1.pData[i] = default_value;
          _1.data = _;
          _1.raw = _.map(v => v.raw);
          _1.type = _.map(v => v.type);
          _1.data = _.map(v => v.data);
        }
        else if (!check()) return;
      }
      (async ({openForm, callBack, request}) => {
        let disable_callBack;
        if (openForm) !async function () {
          let { to, ignored, form, callBack } = openForm(_1);
          if (ignored && ignored(_1)) return;
          if (!to) to = player;
          if (!(to instanceof Player)) throw new SyntaxError("Form must be send to player!");
          if (!form) throw new SyntaxError("form is undefined!");
          if (!callBack) callBack = () => {};
          const data = await AsyncMethod.damgeToForm(to, form, () => {}, false);
          try {
            if (data?.formValues || !~data?.selection) {}
            callBack(data, player, to);
          } catch (e) {
            player.sendMessage(`§4[Errors occurred while executing CMD]§c ${e}\n${e.stack}`);
          }
        }();
        if (request) {
          let { to, wait_time, ignored, message, callBack, id } = request(_1),
          _;
          if (ignored && ignored(_1)) return;
          if (!id) throw new SyntaxError("Request return need a unique id for anti spam");
          if (!to) to = player;
          if (!(to instanceof Player)) throw new SyntaxError("Request must be send to player!");
          if (!message) message = `§4[Commands]§7 Someone send you a request (by: ${command.command}), do you accpect it? (${G.command_prefix}accept <player name>) or refuse (${G.command_prefix}denied <player name>)`;
          if (!callBack) callBack = () => {};
          /*Use Promises.any to skip await immediately (promise will still be fulfilled)*/
          await Promise.any([
            (async (to,wait_time,message,callBack,id1) => {
              if ([...bufferS.values()].some(({sendID, targetID, requestID}) => sendID === player.id && targetID === to.id && requestID === id1)) return player.sendMessage(`§4[Request]§c You have submitted this request before, please wait for the session to expire or be rejected to continue!`), (disable_callBack = true);
              to.sendMessage(message);
              const id = "xxyxxxx4yxyxyxyx8xyxyxy".toId();
              [player, to].forEach(v => v.addTag(id));
              buffer.set(id, player);
              bufferS.set(id, {
                sendID: player.id,
                targetID: to.id,
                requestID: id1
              });
              await Promise.any([
                Timer.promiseTimeout(wait_time, false),
                new Promise((r, j) => {
                  try {
                    let c = 0;
                    _ = Timer.runInterval(() => {
                    c = 0;
                    if (player.hasTag(`accp:${id}`)) {
                      player.removeTag(`accp:${id}`);
                      r("accept");
                    }
                    if (player.hasTag(`deni:${id}`)) {
                      player.removeTag(`deni:${id}`);
                      r("denied");
                    }
                    }, () => 0, 1, wait_time + 10);
                  } catch (e) {j(e)}
                })
              ])
              .catch(e => errorHandle(e))
              .then(v => {
                [player, to].forEach(v => v.removeTag(id));
                buffer.delete(id);
                bufferS.delete(id);
                if (_) Timer.clearInterval(_);
                if (!v) return player.sendMessage(`§4[Commands]§c Your request to ${to.name} has expired`);
                if (v === "accept") player.sendMessage(`§4[Commands]§a Your request to ${to.name} has accept`);
                else player.sendMessage(`§4[Commands]§c Your request to ${to.name} has denied`);
                return callBack({
                  status: v,
                  player,
                  rPlayer: to
                });
              });
            })(to, wait_time, message, callBack, id),
            Timer.promiseTimeout(200)
          ]);
        }
        if (!disable_callBack) callBack(_1);
      })(command)
      .catch(e => {
        player.sendMessage(`§4[Errors occurred while executing CMD]§c ${e}\n${e.stack}`);
      });
      return;
    }

    if (chatCoolDown(player)) return player.sendMessage(`§cYou chat so fast! Please wait more ${($CDLog[player.name] / 20).toFixed(2)}s`);
    /*.replace(":skull:", String.fromCodePoint(parseInt("0xE110"), 16)*/
    world.sendMessage(`§r${rank ? `${rank} ` : ""}${name}${times ? ` ${times}` : ""}§r§e >§r§a ${chat}`);
  } catch (e) {errorHandle(e)}
}