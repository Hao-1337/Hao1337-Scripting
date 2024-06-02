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
import { errorHandle, system } from "../main.js";

/**
 * Represents a Timer utility class.
 */
export default class Timer {
  /**
   * A Map to store interval IDs.
   */
  static map = new Map();

  /**
   * Sets a timeout for a function.
   *
   * @param {Function} fun - The function to be executed.
   * @param {number} time - The time delay in milliseconds.
   * @returns {number} - The timeout ID.
   */
  static setTimeout(fun, time) {
    return system.runTimeout(fun, time);
  }

  /**
   * Clears a timeout with the specified ID.
   *
   * @param {number} id - The timeout ID to clear.
   */
  static clearTimeout(id) {
    return system.clearRun(id);
  }

  /**
   *
   * @param {number} time - The time delay in milliseconds.
   * @returns {Promise} - A Promise that resolves after the timeout.
   */
  static awaitTimeout(time) {
    return new Promise(r => system.runTimeout(r(), time));
  }

  /**
   * Sets an interval for a function.
   *
   * @param {Function} func - The function to be executed repeatedly.
   * @param {Function} endFunc - The function to be executed in the end of loop, clear run will cancel it.
   * @param {number} delayTime - The delay between each execution in ticks.
   * @param {number} runTime - The maximum number of times the function should run.
   * @returns {string} - The interval ID.
   */
  static setInterval(func, endFunc, delayTime, runTime) {
    const id = "xyxxz-zyxx".toId();
    let time = 0;
    Timer.map.set(id, system.runInterval(v => {
      try {
        func(time);
        time += delayTime;
        if (time > runTime) Timer.clearInterval(id), endFunc();
      } catch (e) {
        errorHandle(e, "chat");
      }
    }, delayTime));
    return id;
  }

  /**
   * Clears an interval with the specified ID.
   *
   * @param {string} id - The interval ID to clear.
   */
  static clearInterval(id) {
    system.clearRun(Timer.map.get(id));
    Timer.map.delete(id);
  }

  /**
   * Waits for a timeout using a Promise.
   *
   * @param {number} time - The time delay in milliseconds.
   * @returns {Promise} - A Promise that resolves after the timeout.
   */
  static promiseTimeout(time, data) {
    return new Promise(r => system.runTimeout(() => r(data()), time));
  }
}
