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
 
//import { center } from "./align-text.js";
//String.prototype.upperCount = function() { return this.split("").filter(l => l >= 'A' && l <= 'Z' ).length }
import * as mcui from "@minecraft/server-ui";
import { Player, world } from "@minecraft/server";
import Spinnet from "./spinnet.js";

export class ScriptDocument {
  /**
   * Version of documents
   * @type {Object}
   */
  static version = {};

  /**
   * Id for json ui
   * @type {string}
   */
  static uiID = "§s§c§r§i§p§t";
  /**
   * Checks if Spinnet exists and initializes version information.
   * @returns {boolean} Returns true if Spinnet exists and version is initialized, otherwise false.
   */
  hasSpinnet() {
    try {
      if (Object.keys(Spinnet)[0] !== "version") return false;
      ScriptDocument.version = Spinnet.version;
    } catch { return false }
    return true;
  }
  /**
   * Initializes the ScriptDocument instance.
   * @param {Player} player - The player for whom the document is initialized.
   * @throws {InternalError} Throws if Spinnet is not found.
   */
  constructor(player) {
    if (!this.hasSpinnet()) throw new InternalError("Spinnet not found");

    this.body = `\n§aWelcome to script document. Here are all the modules for the specified script version. Choose any class to view.\n\n§6Version§f:§f ${JSON.colorStringify(ScriptDocument.version, void 0, 4)}\n\n§6Made by§f:§e Hao1337`;
    this.rootForm = new mcui.ActionFormData().title(ScriptDocument.uiID).body(this.body);

    this.modules = Object.keys(Spinnet.version);

    this.forms = [];

    for (let c of this.modules) this.rootForm.button(`§4${c}`);
    
    this.player = player;
    this.ret = false;
    this.render({ render: "root" });
  }
  /**
   * Renders the UI data based on the render type.
   * @param {Object} data - Data to render.
   */
  render(data) {
    //world.debug(data)
    if (data.render === "root") this.rootForm.show(this.player).then(r => this.outputHandle(r, data, false)), this.ret = false, this.lastPop = void 0, this.class = void 0;
    if (data.render === "module") {
      let f = this.moduleReader(data);
      f.form.show(this.player).then(r => this.outputHandle(r, f));
    }
    if (data.render === "class") {
      let f = this.classReader(data);
      f.form.show(this.player).then(r => this.outputHandle(r, f));
    }
    if (data.render === "prop") {
      let f = this.classProp(data);
      f.form.show(this.player).then(r => this.outputHandle(r, f));
    }
  }
  /**
   * Handles the output based on UI and renders the appropriate form.
   * @param {ActionFormDataRespone} output - Output data from UI.
   * @param {Object} data - Data to handle.
   * @param {boolean} [hasReturn=true] - Indicates if there's a return action.
   */
  outputHandle({canceled, selection}, data, hasReturn = true) {
    try {
    if (canceled) return;
     if (hasReturn && selection === 0) {
      !this.ret && this.forms.pop();
      this.ret = true;
      return this.render(this.forms.length ? (this.lastPop = this.forms.pop()) : { render: "root" });
    }
    this.ret && this.lastPop && this.forms.push(this.lastPop);
    this.ret = false;
    
    let save;
    if (data.render === "root") save = {
      render: "module",
      name: this.modules[selection]
    }
    else selection--;
    if (data.render === "module") save = {
      render: "class",
      name: data.nextFormData.classKeys[selection],
      classData: data.nextFormData.classData
    }
    if (data.render === "class") save = {
      render: "prop",
      ...data.nextFormData,
      propName: data.nextFormData.allKey[selection]
    }
    if (data.render === "prop") save = {
      render: "class",
      name: data.nextFormData.alsoC[selection]
    }

    this.forms.push(save);
    this.render(save);
    } catch (e) { world.debug(e) }
  }
  moduleReader({name: moduleName}) {
    if (!this.modules.includes(moduleName)) throw new InternalError(`Invalid module name: ${moduleName}`);
   
    let classData = Spinnet[moduleName],
        form = new mcui.ActionFormData().title(ScriptDocument.uiID).body(this.body);

    form.button("§tPrevious Page", "textures/ui/feedIcon.png");

    let classKeys = [];
    for (let c in classData) form.button(`§4${c}`), classKeys.push(c);

    return {
      nextFormData: {
        classData,
        classKeys
      },
      form,
      render: "module"
    }
  }
  /**
   * Reads and displays details of a specific class.
   * @param {Object} param - Parameters for reading the class.
   * @returns {Object} Returns form data and render type for the class.
   */
  classReader({name: className, classData}) {
    let cS = classData[className];
    if (!cS) throw new InternalError(`Class name does not match anything: ${className}`);
  
    let kind = {
          public: [],
          readonly: [],
          static: [],
          "static readonly": []
        },
        bar = "§f" + "=".repeat(58) + "\n",
        air = " ".repeat(30),
        allKey = Object.keys(cS),
        body, curKey = [],
        form = new mcui.ActionFormData().title(ScriptDocument.uiID);
    
    body = `${bar}          §aClass§f: §e${className}\n§b          Click on property for more information\n          §dPress close for return the previous form\n${bar}`;
    
    form.button("§tPrevious Page", "textures/ui/feedIcon.png");

    for (let k of allKey) if (cS[k].kind !== "private") kind[cS[k].kind].push(k), form.button("§m"+k), curKey.push(k);

    if (kind.public.length) {
      body += `§b§l${air}All Public Properties§r\n`;
      kind.public.forEach(v => body += `     §a${v}§f(§e${cS[v].param.replace(/\|/g, "§f|§e")}§r§f):§6 ${cS[v].return.replace(/\|/g, "§f|§6")}\n`);
      body += bar;
    }
    if (kind.readonly.length) {
      body += `§b§p${air}All Read-only Properties§r\n`;
      kind.readonly.forEach(v => body += `     §a${cS[v].match.replace("readonly ", "")}\n`);
      body += bar;
    }
    if (kind.static.length) {
      body += `§b§p${air}All Static Properties§r\n`;
      kind.static.forEach(v => body += `     §a${cS[v].match.replace("static ", "")}\n`);
      kind["static readonly"].forEach(v => body += `     §a${cS[v].match.replace("static ", "").replace("readonly ", "§ureadonly §a")}\n`);
      body += bar;
    }

    form.body(body);
    
    return {
      nextFormData: {
        spinnet: cS,
        name: className,
        allKey: curKey
      },
      form,
      render: "class"
    }
  }
  /**
   * Displays details of a specific property within a class.
   * @param {Object} param - Parameters for reading the property.
   * @returns {Object} Returns form data and render type for the property.
   */
  classProp({propName, spinnet, allKey, name}) {
    if (!allKey.includes(propName)) throw new InternalError(`Property '${propName}' name does not contain in ${name}`);

    let { comment, match, kind, param, "return": ret } = spinnet[propName],
        form = new mcui.ActionFormData().title(ScriptDocument.uiID),
        body, aC = [],
        bar = "§f" + "=".repeat(58) + "\n",
        air = " ".repeat(35),
        sA = Array.from(new Set([param, ret].map(v => v.split(" ").map(d => d.replace(/[\(\ ,]/g, ""))).flat()));

    form.button("§tPrevious Page", "textures/ui/feedIcon.png");

    for (let key of sA) if (Spinnet[key]) form.button(`§l§4See Also§r:§m ${key}`), aC.push(key);

    let o, n = kind === "readonly" ? (o = match.split(" "), `§ureadonly §a${o[1].slice(0, -1)}§f: §e${o.slice(2).join(" ")}`) : `§a${propName}§f(§e${param}§r§f):§g ${ret}`;

    body = `${bar}          §aClass§f: §e${name}\n          §aProperty§f: §e${propName}\n          §aType§f: §e${kind}${comment.beta ? "\n          §9This is beta version of this property, it may be changed in the other version." : ""}\n${bar}  §q${(comment.description?.length ? comment.description : (comment.remarks || "§cNo description found for this property!")).replace(/\{@link\s+?([\s\S]+?)\}/g, "§p[$1]§q")}\n\n    §b${n}§r`;

    if (Object.keys(comment.params).length) {
      body += "\n\n   §s§lArgument(s) Explain:§r";
      for (let [k, v] of Object.entries(comment.params)) body += `\n       §g${k}§r§f: §a${v.replace(/\{@link\s+?([\s\S])+?\}/g, "§e$1§a")}`;
    }
    
    if (comment.throws) body += `\n\n    §m§lPossible Error:§r\n       §c${comment.throws[0].toUpperCase() + comment.throws.slice(1, comment.throws.length).replace(/\{@link\s+?([\s\S]+?)\}/g, "\n         §p[$1]§c")}`;

    body += `\n\n    §l§tReturn Value:§r§g ${ret}`;
    
    if (comment.returns) body += `\n       §s${comment.returns.replace(/\{@link\s+?([\s\S]+?)\}/g, "§p[$1]§s")}`;

    form.body(body + `\n${bar}`);

    return {
      data: arguments[0],
      nextFormData: {
        alsoC: aC
      },
      form,
      render: "prop"
    }
  }
}
/**
 * ScriptConsole class provides a JavaScript console for executing code.
 * @author Hao1337
 */
export class ScriptConsole {
  /**
   * @type {string}
   * Id for json ui
   */
  static uiID = "§s§c§r§i§p§t";
  /** @type {string} */
  static intro = '\n§a      Welcome to javascript console.\n\n§b      Enter the code you want to test -> "Execute code" to execute\n§e      "Reboot this console"§f:§a The console will automatically reopen when finish the execute\n\n      §a All data from the previous session will be saved\n\n      §eMade by§f:§6 Hao1337\n\n';
  /**
   * Checks if eval is enabled.
   * @returns {boolean} Returns true if eval is enabled, otherwise false.
   */
  static evalEnable() {
    try {
      let a;
      eval("a = 1");
    } catch { return false }
    return true;
  }
  static staticImport(str) {
    let regex = /(\n|)import\s*(((?:\*\s*as\s*(\w+)\s*)?((\w+)(?:\s*as\s+?(\w+)|))?\s*(?:(,|)\s*{([\s\S]+?)})?)\s*from\s*"(.+?)")?(;|)/gm,
        match,
        out = "";
    while ((match = regex.exec(str)) !== null) {
      regex.lastIndex = match.index + match[0].length;
      out += match[1] || "";
      /**
       * import everything (*)
       */
      if (match[4]) {
        out += `var ${match[4]} = await import("${match[10]}");`;
        continue;
      }
      /**
       * Default import
       */
      if (match[6]) out += `var { "default": ${match[7] || match[6]}`;
      /**
       * Normal import
       */
      if (match[9]) {
        out += `${match[5] ? "," : "var {"} ${match[9].replace(/as/g, ":")}`;
      }
      out += ` } = await import("${match[10]}");`;
    }
    return out;
  }
  /**
   * Splits a given string into chunks.
   * @param {string} str - The string to split.
   * @returns {string[]} An array of split string chunks.
   */
  static splitString(str) {
    let out = [],
        length = str.length,
        lastSlice = 0,
        splitChunk = 2 ** 15 - 1;
 
    while (length > 0) {
      if (length < splitChunk) {
         out.push(str.slice(lastSlice));
         break;
      }
      out.push(str.slice(lastSlice, lastSlice + splitChunk));
      lastSlice += splitChunk;
      length -= splitChunk;
    }
    return out;
  }
  /**
   * Saves the current code and console state.
   */
  saveCode() {
    let saveData = ScriptConsole.splitString(this.code),
        saveConsole = ScriptConsole.splitString(this.body),
        saveTime = Date.now();
    
    for (let i = 0; i < saveData.length; i++) world.setDynamicProperty(`${this.player.id} s ${saveTime} ${i}` , saveData[i]);
    for (let i = 0; i < saveConsole.length; i++) world.setDynamicProperty(`${this.player.id} c ${saveTime} ${i}`, saveConsole[i]);
  }
  /**
   * Loads the previously saved code and console state.
   */
  loadCode() {
    let saveReg = new RegExp(`${this.player.id} s \\d+ \\d+`),
        cReg = new RegExp(`${this.player.id} c \\d+ \\d+`),
        ids = world.getDynamicPropertyIds().map(id => id.split(" ")),
        curTime = Date.now();

    let s = ids.filter(id => id[1] === "s").map(id => [id[0], id[1], +id[2], +id[3]]).sort((a, b) => b[2] - a[2]),
        c = ids.filter(id => id[1] === "c").map(id => [id[0], id[1], +id[2], +id[3]]),
        lastSaveTime = s?.[0]?.[2];

    if (!(c.length && lastSaveTime)) return;
    
    this.code = s.filter(id => id[2] === lastSaveTime).map(id => world.getDynamicProperty(id.join(" "))).join("");
    this.body = c.length ? c.filter(id => id[2] === lastSaveTime).map(id => world.getDynamicProperty(id.join(" "))).join("") : this.body;
    
  }
  /**
   * Builds the form for the script console.
   */
  formBuilder() {
    delete this.form;

    this.form = new mcui.ModalFormData().title(ScriptConsole.uiID).textField(this.body, "Enter you code here...", this.code || "").toggle("Reboot this console", true);
    this.form.show(this.player).then(this.onExecute.bind(this));
  }
  /**
   * Initializes the ScriptConsole instance.
   * @param {Player} player - The player for whom the console is initialized.
   * @throws {SyntaxError} Throws if player is not an instance of Player.
   * @throws {InternalError} Throws if 'Script eval' is not enabled.
   */
  constructor(player) {
    if (!(player instanceof Player)) throw new SyntaxError("Input must be a 'Player'");
    if (!ScriptConsole.evalEnable()) throw new InternalError("'Script eval' option is not enabled, please check manifest");

    this.player = player;

    let bar = "§f" + "=".repeat(56) + "\n",
        air = " ".repeat(35);

    this.body = `${bar}${ScriptConsole.intro}${bar}`;
    
    this.loadCode();
    this.formBuilder();
  }
  /**
   * Executes the code entered by the user.
   * @param {ModalFormDataRespone} param - Form values and cancellation status.
   */
  async onExecute({formValues, canceled}) {
    if (canceled) return;
    if (!formValues[0].trim().length) {
      this.body = "§cYou even didn't enter a thing!";
      return formValues[1] && this.formBuilder();
    }
    
    
    let input = formValues[0],
        match, rf, output = "",
        error, result, Time = {},
        regex = /^\s*import\s*[\s\S]+?\s*from\s.+(;|)$/gm;

    while ((match = regex.exec(input)) !== null) {
      regex.lastIndex = match.index + match[0].length;
      input = input.replace(match[0], ScriptConsole.staticImport(match[0]));
    }
    
    world.debug(input);
    function timeStamp() {
      let date = new Date(),
          mili = date.getMilliseconds();
      return date.toString().split(" ")[4] + `:${mili}`;
    }

    async function evalScope() {
        let console = {
          log: function (value) { output += `\n[${timeStamp()} LOG] ${value}` },
          warn: function (value) { output += `\n[${timeStamp()} WARN] ${value}` },
          error: function (value) { output += `\n[${timeStamp()} ERROR] ${value}` },
          time: function (label) { 
            Time[label] = Date.now(); 
            output += `\n[${timeStamp()} TIME STARTED] Timer '${label}' started.`;
          },
          timeEnd: function (label) { 
            if (Time[label]) {
              const elapsedTime = Date.now() - startTime[label];
              output += `\n[${timeStamp()} TIME ENDED] Timer '${label}' took ${elapsedTime} milliseconds.`;
              delete Time[label];
              return;
            }
            output += `\n[${timeStamp()} ERROR] Timer '${label}' not found.`;
          },
          info: function (value) { output += `\n[${timeStamp()} INFO] ${value}` }
        };
        try { eval(`result = (${formValues[0]})`) } catch {
        try { eval(`rf = (async function() {try { ${input} } catch (e) { console.error(e + e.stack) }})()`) } catch (e) { error = e };
        await rf;
      }
    }
    await evalScope();
    this.code = formValues[0];
    
    if (output.startsWith("\n")) output = output.slice(1, output.length);

    let bar = "§f" + "=".repeat(56) + "\n";
    this.body = error ? this.onError(error) : `${bar}§r${output}§r\n${bar}§l§aReturn Value§f:§r ${JSON.colorStringify(result)}\n§r${bar}`;
    
    this.saveCode();
    formValues[1] && this.formBuilder();
  }
  /**
   * Handles errors and formats the error message.
   * @param {Error} er - The error object.
   * @returns {string} Formatted error message.
   */
  onError(er) {
    let errType = er.constructor?.name || Object.getPrototypeOf(er).constructor.name,
        line = er.stack.match(/\d+/g)?.[0],
        bar = "§f" + "=".repeat(56) + "\n",
        air = " ".repeat(6);
    
    return `${bar}${air}§a§lError Type§f:§r§e ${errType}\n${air}§a§lAt Line§f:§r§6 ${line}\n${air}§a§lCause By§f:§r§c ${er.toString().replace(new RegExp(errType + ": "), "")}\n${bar}`;
  }
}