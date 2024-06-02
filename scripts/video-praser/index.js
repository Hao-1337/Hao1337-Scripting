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
    BlockPermutation,
    Block,
    system
} from "@minecraft/server";
import { VECTOR3 as vec3 } from "../modules/method.js";
import Timer from "../modules/timer.js";
//import lodash from "./lodash.min.js";

class VideoBuilderErrror extends Error {}
class FrameRenderError extends Error {}
class FrameRender {
    init(n, blocks, l, c) {
        this.colors = n.colorIndex;
        this.frames = n.data;
        this.width = n.width;
        this.height = n.height;
        this.fps = n.fps || 20;
        this.fps = this.fps > c.maxFPS ? c.maxFPS : this.fps;
        this.blocks = blocks;
        this.loc = l;
        if (c.tickingarea) {
            let i = 0;
            for (let {pos1, pos2} of vec3.split({x: l.x, y: 0, z: l.z}, {x: l.x + this.width, y: 0, z: l.z + this.height}, {x: 100, y: 8, z: 100})) {
                i++;
                world.getDimension("overworld").runCommandAsync(`tickingarea add ${pos1.x} 0 ${pos1.z} ${pos2.x} 0 ${pos2.z} video${i}`).catch(e => world.debug(e)) ;
            }
        }
    }
    start(at = 0) {
        try {
            if (this.i) this.stop();
            this.c = at;
            let l = this.frames.length;
            this.i = system.runInterval(() => {
                this.load(this.c);
                world.debug(`Frame ${this.c}`);
                if (this.c >= l - 1) system.clearRun(this.i);
                this.c++;
            }, 20 / this.fps);
        } catch (e) {
            world.debug(e);
        }
    }
    stop() {
        this.i && system.clearRun(this.i);
        this.i = void 0;
    }
    continue() {
        this.start(this.c);
    }
    XYPlane(index) {
        let $ = Math.floor(index / this.width);
        if ($ < 1) return {
            x: index,
            y: 0
        }
        return {
            x: index % this.width,
            y: $
        }
    }
    load(frame, dim = world.getDimension("overworld")) {
        try {
            if (typeof frame !== "number" || frame > this.frames.length) throw new FrameRenderError("Frame index is number and small than frame length");
            let perm, data = this.frames[frame].data;
            for (let i = 0; i < data.length; i++) {
                let $ = 0;
                for (let color of data[i]) {
                    perm = this.blocks[i];
                    switch (color.length) {
                        case 4:
                            let _1 = this.XYPlane(color[0]),
                                _2 = this.XYPlane(color[3]);
                            dim.fillBlocks({
                                x: this.loc.x + _1.x,
                                y: this.loc.y,
                                z: this.loc.z + _1.y
                            }, {
                                x: this.loc.x + _2.x,
                                y: this.loc.y,
                                z: this.loc.z + _2.y
                            }, perm);
                            break;
                        case 2:
                            for (let c = color[0]; c < color[1] + 1; c++) {
                                let { x, y } = this.XYPlane(c);
                                dim.getBlock({
                                    x: this.loc.x + x,
                                    y: this.loc.y,
                                    z: this.loc.z + y
                                }).setPermutation(perm);
                            }
                            break;
                        default:
                            let { x, y } = this.XYPlane(color);
                            dim.getBlock({
                                x: this.loc.x + x,
                                y: this.loc.y,
                                z: this.loc.z + y
                            }).setPermutation(perm);
                    }
                    $++;
                }
            }
        } catch (e) {
            world.debug(e)
        }
    }
}

let _ = new FrameRender();
(async () => {
    let time = Date.now();
    const {
        config
    } = await import("./config.js");
    const {
        default: data
    } = await import(config.entry);
    console.warn(`§aSusscesfully import video data file in: ${Date.now() - time}ms`);

    let blocks = (data.blocks || []).map(c => {
        c = c.split("=");
        if (c.length >= 2) {
            if (c[0].includes("planks")) return BlockPermutation.resolve(c[0], {wood_type: c[1]});
            if (c[0].includes("hardened_clay")) return BlockPermutation.resolve(c[0], {color: c[1]});
            if (c[0].includes("red_sandstone")) return BlockPermutation.resolve(c[0], {sand_stone_type: c[1]});
            if (c[0].includes("stone")) return BlockPermutation.resolve(c[0], {stone_type: c[1]});
            throw new VideoBuilderErrror(`Invalid input!`, {
                cause: `Cannot find a handle for '${c[0]}'`
            });
        }
        return BlockPermutation.resolve(c[0]);
    });
    _.init(data, blocks, {x: 1000, y: 1, z: 1000}, config);
})().catch(e => {
    console.warn(`§cVideo Praser Error: ${e} ${e.stack}`);
});

export default _;