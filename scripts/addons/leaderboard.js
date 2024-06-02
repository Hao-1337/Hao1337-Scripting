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
import Database from "../modules/database.js";
import { ActionFormData, ModalFormData, MessageFormData } from "@minecraft/server-ui";
import { Vector, world } from "@minecraft/server";
import { Method as mt } from "../modules/method.js";

const leaderboardUI = new ActionFormData()
  .title('§aLeaderBoard')
  .body('§bWhat do you want to do?')
  .button('§aCreate leaderboard', "textures/ui/color_plus.png")
  .button('§cRemove leaderboard', "textures/ui/icon_trash.png")
  .button(`§aEdit leaderboard`, "textures/ui/automation_glyph_color.png");

let PlayerData;

export async function LeaderboardUI(player) {
  try {
    const r = await leaderboardUI.show(player);
    if (r.canceled) {
      player.playSound(G.sound.failed);
      return player.sendMessage("§a[Leaderboard] §cOperation canceled by user.");
    }
    //very lazy one
    if (r.selection === 0) addLB(player, true);
    if (r.selection === 1) removeLB(player, true);
    if (r.selection === 2) changeLB(player, true);
  } catch (e) {
    errorHandle(e);
  }
}

export async function removeLB(player, $) {
  try {
    let allLB = mt.getAllLB(),
    ALBNO = allLB.map(v => `${mt.getEntityTagByPrefix(v, 'nameLB:')}§r §8§l[§r§a${v.dimension.id.idToString()}§6 ${Math.trunc(v.location.x)} ${Math.trunc(v.location.y)} ${Math.trunc(v.location.z)}§r§8§l]§r`);
    ALBNO.length >= 1 ? null : ALBNO = ["No leaderboard found"];

    const r = await new ModalFormData().title('§cLeaderBoard Remove').dropdown("Choose a leaderboard:", ALBNO, 0).show(player)

    if (r.canceled) return $ && LeaderboardUI(player);
    const lb = allLB[r.formValues[0]];
    if (lb === "No leaderboard found" || !lb) return;

    let r1 = await new MessageFormData()
    .title("§cRemove Leaderboard Comfirm")
    .body("Are you sure to remove this leaderboard? This action cannot be reversed!")
    .button1("Yes")
    .button2("No")
    .show(player)

    if (r1.canceled) {
      player.playSound(G.sound.failed);
      return player.sendMessage("§a[Leaderboard] §cOperation canceled by user.");
    }
    if (r1.selection === 0) {
      lb.kill();
      player.playSound(G.sound.successful);
      return player.sendMessage(`§a[Leaderboard]§c Remove leaderboard with name§f:§e ${ALBNO[r.formValues[0]]}§r§a successful`);
    }
    else {
      player.playSound(G.sound.failed);
      player.sendMessage(`§a[Leaderboard]§c You have canceled the remove operation`);
    }
  } catch (e) {
    errorHandle(e);
  }
}

export async function changeLB(player, $) {
  try {
    let allLB = mt.getAllLB(),
    AOBN = mt.getAllObjectiveName(),
    ALBNO = allLB.map(v => `${mt.getEntityTagByPrefix(v, 'nameLB:')}§r §8§l[§r§a${v.dimension.id.idToString()}§6 ${Math.trunc(v.location.x)} ${Math.trunc(v.location.y)} ${Math.trunc(v.location.z)}§r§8§l]§r`);
    !(ALBNO.length >= 1) && (ALBNO = ["No leaderboard found"]);
    !(AOBN.length >= 1) && (AOBN = ["No objective found"]);

    let r = await new ModalFormData()
    .title('§2Leaderboard Setting')
    .dropdown("Choose a leaderboard:", ALBNO, 0)
    .show(player)
  
    if (r.canceled) return $ && LeaderboardUI(player);
    const lb = allLB[r.formValues[0]];
    if (lb === "No leaderboard found" || !lb) return;

    let lbn = mt.getEntityTagByPrefix(lb, "nameLB:"),
        objn = mt.getEntityTagByPrefix(lb, "objective:"),
        satn = (mt.getEntityTagByPrefix(lb, "show_all_time:") === "true");
 
    let r1 = await new ModalFormData()
    .title(`§2Setting`)
    .textField("Name", lbn, lbn)
    .dropdown("Objective", AOBN, 0)
    .toggle("Show player offline", satn)
    .show(player)

    if (r1.canceled) {
      player.playSound(G.sound.failed);
      return player.sendMessage(`§a[Leaderboard]§c Operation canceled by user!`);
    }

    let [n2, obi1, bool2] = r1.formValues,
        ob2 = AOBN[obi1];
    if (ob2 === "No objective found") {
      player.playSound(G.sound.failed);
      return player.sendMessage("§a[Leaderboard]§c Objective not found.");
    }

    [`nameLB:${lbn}`, `objective:${objn}`, `show_all_time:${satn}`].forEach(tag => lb.removeTag(tag));
    [`nameLB:${n2}`, `objective:${ob2}`, `show_all_time:${bool2}`].forEach(tag => lb.addTag(tag));

    player.playSound(G.sound.successful);
    player.sendMessage(`§a[Leaderboard]§a Leaderboard setting change successful!`);
  } catch (e) {
    errorHandle(e);
  }
}

export async function addLB(player, $) {
  try {
    let AONB = mt.getAllObjectiveName();
    AONB.length >= 1 ? null : AONB = ["No objective found"];
  
    let r = await new ModalFormData()
    .title('§aCreate LeaderBoard')
    .textField('Name', 'Enter name')
    .dropdown('Objective', AONB, 0)
    .textField('X position', 'Enter X', '~')
    .textField('Y position', 'Enter Y', '~')
    .textField('Z position', 'Enter Z', '~')
    .toggle('Show in all time', false)
    .show(player)

    if (r.canceled) return $ && LeaderboardUI(player);
    let [n1, obi, X, Y, Z, bool1] = r.formValues,
        ob1 = AONB[obi];

    if (ob1 === "No objective found") {
      player.playSound(G.sound.failed);
      return player.sendMessage(`§a[Leaderboard]§cCan't find a obiective for create leatherboard`);
    }

    if (X === "~") X = Math.trunc(player.location.x);
    if (Y === "~") Y = Math.trunc(player.location.y);
    if (Z === "~") Z = Math.trunc(player.location.z);
 
    let check = [...player.dimension.getEntities({location: new Vector(X, Y, Z), maxDistance: 5, type: "choigame:floating_text", tags: ["is_leaderboard"]})];

    if (!check.length) {
      let entity = player.dimension.spawnEntity("choigame:floating_text", new Vector(X, Y, Z));
  
      [`is_leaderboard`, `nameLB:${n1}`, `show_all_time:${bool1}`, `objective:${ob1}`].forEach(v => entity.addTag(v));
      player.playSound(G.sound.successful);
      return player.sendMessage(`§bLeaderboard§f:§r §aComplete create leaderboard with name§f:§e ${n1}§r§a, objective§f:§e ${ob1}§a at§f: §e${X} ${Y} ${Z}`);
    }
    player.playSound(G.sound.failed);
    player.sendMessage(`§cYou cannot place the leaderboard too close to another leaderboard`);
  } catch (e) {
    errorHandle(e);
  }
}
export default function LeaderboardThread(entity) {
  if (!PlayerData) return;
  try {
    let objective = mt.getEntityTagByPrefix(entity, "objective:"),
        show = mt.getEntityTagByPrefix(entity, "show_all_time:"),
        outNT = [],
        LBNT = [];

    PlayerData.add(objective, []);

    mt.forEachPlayers(player => outNT.push({
        name: player.name,
        score: mt.getScore(player, objective)
    }));
    let inNT = [...outNT, ...(PlayerData.get(objective)?.filter(v => !outNT.some(v1 => v.name === v1.name)) ?? [])];

    PlayerData.update(objective, inNT);

    LBNT = show === "true" ? inNT : outNT;
    LBNT = LBNT.sort((a, b) => b.score - a.score).map((v, i) => v = {
        name: v.name,
        score: mt.numFormatter(v.score),
        top: i + 1
    });
    entity.nameTag = `${mt.getEntityTagByPrefix(entity, "nameLB:") ?? '§cNo Name'}\n${G.LBInfoText ?? '§aTop     Name     Score'}\n${LBNT.slice(0, G.LBTopLimit - 1).map(v => `#${v.top} ${v.name} ${v.score}`)?.join("\n")}`;
  } catch (e) {
    errorHandle(e);
  }
}