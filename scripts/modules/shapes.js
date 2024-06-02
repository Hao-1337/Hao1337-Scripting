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
 
/**
 * <xMin / yMin / zMin> smallest value of each axis
 * <xMax / yMax / zMax> biggest value of each axis
 * <rx, ry, rz> biggest radius of each axis
 * <cx, cy, cz> center position
 * 
 * <x / y / z> current position of each axis
 * <r> optional x,z radius (input by player) or base radius
 * <h> optional y radius (input by player) or height
 *
 * <t / t1 / t2> temporary variable
 * <ts> variable: square root of two
 * <hts> variable: half of square root of two
 */
export default class Shapes {
//=====================================================================================
//                            WHEN MATH IS NOT PERFECT
//=====================================================================================
    /**
     * Generator for hollow pryamid
     * No further explanation needed
     * 
     * @param {Vector3} pos1
     * @param {Vector3} pos2
     */
    static pyamid_hollow(pos1, pos2, { height }) {
        let xMin = Math.min(pos1.x, pos2.x),
            xMax = Math.max(pos1.x, pos2.x),
            yMin = Math.min(pos1.y, pos2.y),
            yMax = Math.max(pos1.y, pos2.y),
            zMin = Math.min(pos1.z, pos2.z),
            zMax = Math.max(pos1.z, pos2.z),
            //Before shift center pos
            ox = (xMax + xMin) / 2,
            oy = (yMax + yMin) / 2,
            oz = (zMax + zMin) / 2,
            //Side length
            rx = Math.abs(ox - xMin),
            ry = Math.abs(oy - yMin),
            rz = Math.abs(oz - zMin);
        return (function*() {
            let xMin = -rx,
                xMax = rx,
                yMin = -ry,
                yMax = ry,
                zMin = -rz,
                zMax = rz,
                smallBase = rz >= rx ? rx : rz;
            for (let y = yMin; y <= yMax && xMax >= 0 && zMax >= 0; y++, xMax--, xMin++, zMax--, zMin++) {
                for (let x = xMin; x <= xMax; x++)
                for (let z = zMin; z <= zMax; z++) {
                    if (y == yMin || y == yMax || z == zMin || z == zMax || x == xMin || x == xMax) yield {
                        x: x + ox,
                        y: y + oy,
                        z: z + oz
                    };
                }
                if (y === smallBase || y === height || y >= yMax) break;
            }
        })();
    }
    /**
     * Generator for solid pryamid
     * No further explanation needed
     * 
     * @param {Vector3} pos1
     * @param {Vector3} pos2
     */
    static pyamid_solid(pos1, pos2, { height }) {
        let xMin = Math.min(pos1.x, pos2.x),
            xMax = Math.max(pos1.x, pos2.x),
            yMin = Math.min(pos1.y, pos2.y),
            yMax = Math.max(pos1.y, pos2.y),
            zMin = Math.min(pos1.z, pos2.z),
            zMax = Math.max(pos1.z, pos2.z),
            //Before shift center pos
            ox = (xMax + xMin) / 2,
            oy = (yMax + yMin) / 2,
            oz = (zMax + zMin) / 2,
            //Side length
            rx = Math.abs(ox - xMin),
            ry = Math.abs(oy - yMin),
            rz = Math.abs(oz - zMin);
        return (function*() {
            let xMin = -rx,
                xMax = rx,
                yMin = -ry,
                yMax = ry,
                zMin = -rz,
                zMax = rz,
                smallBase = rz >= rx ? rx : rz;
            for (let y = yMin; y <= yMax && xMax >= 0 && zMax >= 0; y++, xMax--, xMin++, zMax--, zMin++) {
                for (let x = xMin; x <= xMax; x++)
                for (let z = zMin; z <= zMax; z++) yield {
                    x: x + ox,
                    y: y + oy,
                    z: z + oz
                };
                if (y === smallBase || y === height || y >= yMax) break;
            }
        })();
    }
//=====================================================================================
//                          ONE POSITION SHAPE GENERATOR
//=====================================================================================
    /**
     * Expression for hollow sphere
     */
    static sphere_hollow = "(t = x*x + y*y + z*z, t1 = r*r, t1 - r <= t && t1 >= t - r + 1)";
    /**
     * Expression for splid sphere
     */
    static sphere_solid = "x*x + y*y + z*z, t1 < r*r";

    /**
     * Expression for generate solid cone:
     * 
     * arctan(<rotary axis>, <birth path vector length>) <= theta
     * 
     * Theta is automatic caculate by height and radius
     */
    static cone_solid_x = "Math.atan2(Math.sqrt(z*z + y*y), -x) <= Math.atan(r / h)";
    static cone_solid_y = "Math.atan2(Math.sqrt(z*z + x*x), -y) <= Math.atan(r / h)";
    static cone_solid_z = "Math.atan2(Math.sqrt(x*x + y*y), -z) <= Math.atan(r / h)";

    /**
     * Expression for generate hollow cone:
     * 
     * arctan(<rotary axis>, <birth path vector length>) <= theta
     * arctan(<rotary axis>, <birth path vector length>) >= theta / 2
     * <axis> - <axisMax> >= h
     * 
     * Theta is automatic caculate by height and radius
     */
    static cone_hollow_x = "(t1 = Math.atan(r / h) ,t = Math.atan2(Math.sqrt(z*z + y*y), -x), t <= t1 && (y >= yMax - h || t >= t1 / 1.404))";
    static cone_hollow_y = "(t1 = Math.atan(r / h) ,t = Math.atan2(Math.sqrt(z*z + x*x), -y), t <= t1 && (y >= yMax - h || t >= t1 / 1.404))";
    static cone_hollow_z = "(t1 = Math.atan(r / h) ,t = Math.atan2(Math.sqrt(x*x + y*y), -z), t <= t1 && (y >= yMax - h || t >= t1 / 1.404))";


    /**
     * Expression for generate solid cylinder:
     * 
     * baseX ** 2 + baseZ ** 2 <= r ** 2
     * 
     * Theta is automatic caculate by height and radius
     */
    static cylinder_soild_x = "y*y + z*z <= r*r";
    static cylinder_soild_x = "y*y + z*z <= r*r";
    static cylinder_soild_x = "y*y + z*z <= r*r";

    /**
     * Expression for generate hollow cylinder:
     * 
     * baseX ** 2 + baseZ ** 2 = r ** 2
     * 
     * Theta is automatic caculate by height and radius
     */
    static cylinder_hollow_x = "y*y + z*z == r*r";
    static cylinder_hollow_y = "y*y + z*z == r*r";
    static cylinder_hollow_z = "y*y + z*z == r*r";

//=====================================================================================
//                          TWO POSITION SHAPE GENERATOR
//=====================================================================================

    /**
     * Expression for solid cube
     */
    static cube_solid = "true";
    /**
     * Expression for hollow cube
     */
    static cube_hollow = "Math.abs(x) === xMax || Math.abs(y) === yMax || Math.abs(z) === zMax";

    /**
     * Expression for solid ellipse
     * @warn DON'T USE WITH centerGenerator() IT WON'T WORK
     */
    static ellipse_solid = "(x/Math.floor(rx)) ** 2 + (y/Math.floor(ry)) ** 2 + (z/Math.floor(rz)) ** 2 <= 1";
    /**
     * Expression for hollow ellipse
     * @warn DON'T USE WITH centerGenerator() IT WON'T WORK
     */
    static ellipse_hollow = "(t = (x/Math.floor(rx)) ** 2 + (y/Math.floor(ry)) ** 2 + (z/Math.floor(rz)) ** 2, t <= 1 && t >= 0.9)";
    /**
     * Expression for solid ellipse cylinder
     * @warn DON'T USE WITH centerGenerator() IT WON'T WORK
     */
    static ellipse_cylinder_solid_x = "(y/Math.floor(ry)) ** 2 + (z/Math.floor(rz)) ** 2 <= 1";
    static ellipse_cylinder_solid_y = "(x/Math.floor(rx)) ** 2 + (z/Math.floor(rz)) ** 2 <= 1";
    static ellipse_cylinder_solid_z = "(y/Math.floor(ry)) ** 2 + (x/Math.floor(rx)) ** 2 <= 1";
    /**
     * Expression for hollow ellipse cylinder
     * @warn DON'T USE WITH centerGenerator() IT WON'T WORK
     */
    static ellipse_cylinder_hollow_x = "(y/Math.floor(ry)) ** 2 + (z/Math.floor(rz)) ** 2 == 1";
    static ellipse_cylinder_hollow_y = "(x/Math.floor(rx)) ** 2 + (z/Math.floor(rz)) ** 2 == 1";
    static ellipse_cylinder_hollow_z = "(y/Math.floor(ry)) ** 2 + (x/Math.floor(rx)) ** 2 == 1";
    /**
     * Expression for solid ellipse cylinder
     * @warn DON'T USE WITH centerGenerator() IT WON'T WORK
     */
    static ellipse_cylinder_hollow_x = "(y/Math.floor(ry)) ** 2 + (z/Math.floor(rz)) ** 2 <= 1";
    static ellipse_cylinder_hollow_y = "(x/Math.floor(rx)) ** 2 + (z/Math.floor(rz)) ** 2 <= 1";
    static ellipse_cylinder_hollow_z = "(y/Math.floor(ry)) ** 2 + (x/Math.floor(rx)) ** 2 <= 1";

    /**
     * Create frame only
     */
    static border = "(x+cx==xMin||x+cx==xMax)&&(y+cy==yMin||y+cy==yMax)||(y+cy==yMin||y+cy==yMax)&&(z+cz==zMin||z+cz==zMax)||(z+cz==zMin||z+cz==zMax)&&(x+cx==xMin||x+cx==xMax)";
    /**
     * No idea
     */
    static inclined_cone(directionVec, theta) {
        return `((${directionVec.x}*x + ${directionVec.y}*y + ${directionVec.z}*z) / Math.sqrt(${directionVec.x}*${directionVec.x} + ${directionVec.y}*${directionVec.y} + ${directionVec.z}*${directionVec.z})) <= Math.cos(customTheta)`;
    }

}