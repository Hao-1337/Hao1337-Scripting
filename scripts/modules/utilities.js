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
import { MolangVariableMap, world } from "@minecraft/server";

const $overworld = world.getDimension("overworld");

export class Matrix{static equal(A,B,tolerance=1e-10){const rows=A.length,cols=A[0].length;if(rows!==B.length||cols!==B[0].length)return false;for(let i=0;i<rows;i++){for(let j=0;j<cols;j++){if(Math.abs(A[i][j]-B[i][j])>tolerance)return false;}}return true;}static add(A,B){const rows=A.length,cols=A[0].length,result=[];if(rows!==B.length||cols!==B[0].length)throw new SyntaxError("Invalid matrix dimensions");for(let i=0;i<rows;i++){result[i]=[];for(let j=0;j<cols;j++){result[i][j]=A[i][j]+B[i][j];}}return result;}static subtract(A,B){const rows=A.length,cols=A[0].length,result=[];if(rows!==B.length||cols!==B[0].length)throw new SyntaxError("Invalid matrix dimensions");for(let i=0;i<rows;i++){result[i]=[];for(let j=0;j<cols;j++){result[i][j]=A[i][j]-B[i][j];}}return result;}static multiply(A,B){const rowsA=A.length,colsA=A[0].length,rowsB=B.length,colsB=B[0].length,result=[];if(colsA!==rowsB)throw new SyntaxError("Invalid matrix dimensions");for(let i=0;i<rowsA;i++){result[i]=[];for(let j=0;j<colsB;j++){let sum=0;for(let k=0;k<colsA;k++){sum+=A[i][k]*B[k][j];}result[i][j]=sum;}}return result;}static pow(A,B){const eps=1e-10;const n=A.length;const identity=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>i===j?1:0));let result=identity;let k=1;let C=A;while(!Matrix.equal(B,identity,eps)){if(Matrix.equal(B,C,eps)){result=Matrix.multiply(result,Matrix.powN(A,k));break;}C=Matrix.multiply(C,C);k*=2;if(Matrix.equal(B,C,eps)){result=Matrix.multiply(result,Matrix.powN(A,k));break;}if(matrixGreater(B,C,eps)){result=Matrix.multiply(result,Matrix.powN(A,k));B=Matrix.subtract(B,C);C=A;k=1;}}return result;}static greater(A,B,eps=0){const n=A.length,m=A[0].length;return Array.from({length:n},(_,i)=>Array.from({length:m},(_,j)=>+(A[i][j]-B[i][j]>eps)));}static powN(A,n){const rows=A.length,cols=A[0].length;if(rows!==cols)throw new SyntaxError("Input matrix is not square");let result=Matrix.identity(rows),base=A;while(n>0){if(n%2===1)result=Matrix.multiply(result,base);base=Matrix.multiply(base,base);n=Math.floor(n/2);}return result;}static inverse(A){const rows=A.length,cols=A[0].length;if(rows!==cols)throw new SyntaxError("Input matrix is not square");const I=Matrix.dentity(rows),AB=Matrix.concat(A,I),N=AB.length,M=AB[0].length;for(let i=0;i<N;i++){let max=i;for(let j=i+1;j<N;j++){if(Math.abs(AB[j][i])>Math.abs(AB[max][i])){max=j;}}[AB[i],AB[max]]=[AB[max],AB[i]];const pivot=AB[i][i];if(pivot===0)throw new SyntaxError("Invertible matrix");for(let j=i;j<M;j++){AB[i][j]/=pivot;}for(let j=0;j<N;j++){if(j===i)continue;const factor=AB[j][i];for(let k=i;k<M;k++){AB[j][k]-=factor*AB[i][k];}}}return AB.map(row=>row.slice(cols));;}static concat(A,B){const rowsA=A.length,colsA=A[0].length,rowsB=B.length,colsB=B[0].length;if(rowsA!==rowsB)throw new SyntaxError("Input matrices have different number of rows");const C=[];for(let i=0;i<rowsA;i++){C.push([...A[i],...B[i]]);}return C;}static determinant(A){const rows=A.length,cols=A[0].length;if(rows!==cols)throw new SyntaxError("Input matrix is not square");if(rows===1){return A[0][0];}let det=0;for(let i=0;i<cols;i++){const cofactor=(-1)**i*A[0][i],minor=Matrix.minor(A,0,i);det+=cofactor*Matrix.determinant(minor);}return det;}static minor(A,row,col){const submatrix=A.filter((_,i)=>i!==row).map(row=>row.filter((_,j)=>j!==col));return Matrix.determinant(submatrix);}}

/**
 * Things related to 3d rendering
 */
export class Geometry {
  /*
   * Rotates Vector3 by the given angles (rotate point based on 3 major axes).
   * @param {Vector3} position - The 3D position to rotate.
   * @param {Number} angles - The rotation angles in radians.
   * @return {Vector3} The rotated 3D position.
   */
  static rotate(position, angles = 2 * Math.PI) {
    let {
      x,
      y,
      z
    } = position;// ?? {};
    let ax, ay, az;
    if (!~x || !~y || !~z) throw new SyntaxError(`Invalid Vector3`);
    if (typeof angles === "number") /*Warning: It is forbidden to assign in this way, but this is ok(no using it until you know exactly)*/ ax = ay = az = angles;
    else {
      try {
        ax = angles.x;
        ay = angles.y;
        az = angles.z;
      } catch {
        throw new SyntaxError(`Invalid angles`);
      }
    }
    let rotated = Matrix.multiply(
      [
        [Math.cos(az), -Math.sin(az), 0],
        [Math.sin(az), Math.cos(az), 0],
        [0, 0, 1]
      ], Matrix.multiply(
      [
        [Math.cos(ay), 0, Math.sin(ay)],
        [0, 1, 0],
        [-Math.sin(ay), 0, Math.cos(ay)]
      ], Matrix.multiply(
      [
        [1, 0, 0],
        [0, Math.cos(ax), -Math.sin(ax)],
        [0, Math.sin(ax), Math.cos(ax)]
      ],
      [[x], [y], [z]])));
    return {
      x: rotated[0][0],
      y: rotated[1][0],
      z: rotated[2][0]
    };
  }
  /**
   * Rotates Vector3 by the given angles around the given custom axes.
   * @param {Vector3} position - The 3D position to rotate.
   * @param {Vector3|Number} angles - The rotation angles in radians.
   * @param {Vector3} axisX - The custom x-axis to rotate around.
   * @param {Vector3} axisY - The custom y-axis to rotate around.
   * @param {Vector3} axisZ - The custom z-axis to rotate around.
   * @return {Vector3} The rotated 3D position.
   */
  static rotateFromAxis(position, angles = 2 * Math.PI, {x: axisX, y: axisY, z: axisZ}) {
    let { x, y, z } = position;// ?? {};
    let ax, ay, az;
    if (!x || !y || !z) throw new SyntaxError(`Invalid Vector3`);
    if (typeof angles === "number") /*It is forbidden to assign in this way, but this is ok*/ ax = ay = az = angles;
    else {
      try {
        ax = angles.x;
        ay = angles.y;
        az = angles.z;
      } catch {
        throw new SyntaxError(`Invalid angles`);
      }
    }
    const cosAx = Math.cos(ax),
      cosAxI = 1 - Math.cos(ax),
      sinAx = Math.sin(ax),
      cosAy = Math.cos(ay),
      cosAyI = 1 - Math.cos(ay),
      sinAy = Math.sin(ay),
      cosAz = Math.cos(az),
      cosAzI = 1 - Math.cos(az),
      sinAz = Math.sin(az),
      rotated = Matrix.multiply(
    [
      [
        axisX.x * axisX.x * cosAxI + cosAx,
        axisX.x * axisX.y * cosAxI - axisX.z * sinAx,
        axisX.x * axisX.z * cosAxI + axisX.y * sinAx
      ],
      [
        axisX.y * axisX.x * cosAxI + axisX.z * sinAx,
        axisX.y * axisX.y * cosAxI + cosAx,
        axisX.y * axisX.z * cosAxI - axisX.x * sinAx
      ],
      [
        axisX.z * axisX.x * cosAxI - axisX.y * sinAx,
        axisX.z * axisX.y * cosAxI + axisX.x * sinAx,
        axisX.z * axisX.z * cosAxI + cosAx
      ]
    ], Matrix.multiply(
    [
      [
        axisY.x * axisY.x * cosAyI + cosAy,
        axisY.x * axisY.y * cosAyI - axisY.z * sinAy,
        axisY.x * axisY.z * cosAyI + axisY.y * sinAy
      ],
      [
        axisY.y * axisY.x * cosAyI + axisY.z * sinAy,
        axisY.y * axisY.y * cosAyI + cosAy,
        axisY.y * axisY.z * cosAyI - axisY.x * sinAy
      ],
      [
        axisY.z * axisY.x * cosAyI - axisY.y * sinAy,
        axisY.z * axisY.y * cosAyI + axisY.x * sinAy,
        axisY.z * axisY.z * cosAyI + cosAy
      ]
    ], Matrix.multiply(
    [
      [
        axisZ.x * axisZ.x * cosAzI + cosAz,
        axisZ.x * axisZ.y * cosAzI - axisZ.z * sinAz,
        axisZ.x * axisZ.z * cosAzI + axisZ.y * sinAz
      ],
      [
        axisZ.y * axisZ.x * cosAzI + axisZ.z * sinAz,
        axisZ.y * axisZ.y * cosAzI + cosAz,
        axisZ.y * axisZ.z * cosAzI - axisZ.x * sinAz
      ],
      [
        axisZ.z * axisZ.x * cosAzI - axisZ.y * sinAz,
        axisZ.z * axisZ.y * cosAzI + axisZ.x * sinAz,
        axisZ.z * axisZ.z * cosAzI + cosAz
      ]
    ],
    [[x], [y], [z]])));
    return {
      x: rotated[0][0],
      y: rotated[1][0],
      z: rotated[2][0]
    };
  }
  static _s(cx, cy, cz, r, x1 = cx + r, x2 = cx - r, y1 = cy + r, y2 = cy - r, z1 = cz + r, z2 = cz - r) {
    [x1, x2] = [x1, x2].sort((a, b) => a - b);
    [y1, y2] = [y1, y2].sort((a, b) => a - b);
    [z1, z2] = [z1, z2].sort((a, b) => a - b);
    let string = "m===r1";
    for (let i = 1; i < r + 1; i++) string += `||m===r1-${i}||m===r1+${i}`;
    return {
      pos1: {
        x: x1,
        y: y1,
        z: z1
      },
      pos2: {
        x: x2,
        y: y2,
        z: z2
      },
      center: {
        cx: cx,
        cy: cy,
        cz: cz
      },
      check_string: new Function("m", "r1", string)
    }
  }
  static _c(pos1, pos2, i = false) {
    let [x1, y1, z1] = [pos1.x, pos1.y, pos1.z],
      [x2, y2, z2] = [pos2.x, pos2.y, pos2.z];
    [x1, x2] = [x1, x2].sort((a, b) => a - b);
    [y1, y2] = [y1, y2].sort((a, b) => a - b);
    [z1, z2] = [z1, z2].sort((a, b) => a - b);
    if (i) x2++, y2++, z2++;
    return {
      pos1: {x: x1, y: y1, z: z1},
      pos2: {x: x2, y: y2, z: z2},
      pos3: {x: x1, y: y2, z: z1},
      pos4: {x: x2, y: y1, z: z2},
      pos5: {x: x1, y: y1, z: z2},
      pos6: {x: x2, y: y1, z: z1},
      pos7: {x: x1, y: y2, z: z2},
      pos8: {x: x2, y: y2, z: z1}
    }
  };
  static _(pos1, pos2) {
    let [x1, y1, z1] = [pos1.x, pos1.y, pos1.z],
      [x2, y2, z2] = [pos2.x, pos2.y, pos2.z];
    [x1, x2] = [x1, x2].sort((a, b) => a - b);
    [y1, y2] = [y1, y2].sort((a, b) => a - b);
    [z1, z2] = [z1, z2].sort((a, b) => a - b);
    return (function*(pos1, pos2) {
      for (let x = x1; x <= x2; x++)
      for (let y = y1; y <= y2; y++)
      for (let z = z1; z <= z2; z++)
      yield {x, y, z};
    })
  }
  /*
   * (x - a)² + (y - b)² + (z - c)² = r²
   */
  static circle(center, r) {
    //tolerance = R
  }
}
/**
 * Represents a particle.
 */
export class Particle {
  /**
   * Initializes the particle.
   * @private
   * @param {object} pos1 - The first position.
   * @param {object} pos2 - The second position.
   * @returns {object} The initialized particle.
   */
  static init(pos1, pos2) {
    let [x1, y1, z1] = [pos1.x, pos1.y, pos1.z],
      [x2, y2, z2] = [pos2.x, pos2.y, pos2.z];
    [x1, x2] = [x1, x2].sort((a, b) => a - b);
    [y1, y2] = [y1, y2].sort((a, b) => a - b);
    [z1, z2] = [z1, z2].sort((a, b) => a - b);
    let x = Math.abs(x1 - x2),
      y = Math.abs(y1 - y2),
      z = Math.abs(z1 - z2),
      /* Depend on your particle length */
      _bc = 1,
      d = [x, y, z].filter((v) => v !== 0).length;
    return { x1, x2, y1, y2, z1, z2, x, y, z, _bc, l: d };
  }

  /**
   * Creates a line of particles between two positions.
   * @param {object} pos1 - The first position.
   * @param {object} pos2 - The second position.
   * @param {string} [p="minecraft:endrod"] - The particle type.
   * @param {object} [d=$overworld] - The dimension.
   */
  static line(pos1, pos2, p = "minecraft:endrod", d = $overworld) {
    let { x1, y1, z1, x, y, z, _bc } = Particle.init(pos1, pos2),
      stepX = x / _bc,
      stepY = y / _bc,
      stepZ = z / _bc;
    for (let l = 0, m = 0, k = 0; l <= x; ) {
      d.spawnParticle(p, {
        x: x1 + l,
        y: y1 + m,
        z: z1 + k,
      }, new MolangVariableMap());
      l += stepX;
      m += stepY;
      k += stepZ;
      if (m > y || k > z) break;
    }
  }

  /**
   * Creates a line of particles between two positions with a direction.
   * @param {Vector3} pos1 - The first position.
   * @param {Vector3} pos2 - The second position.
   * @param {string} [p="choigame:line"] - The particle type.
   * @param {Dimension} [d=$overworld] - The dimension.
   */
  static direction_line(pos1, pos2, p = "choigame:line", d = $overworld) {
    let { x1, y1, z1, x, y, z, _bc: direction, l } = Particle.init(pos1, pos2),
      $,
      __ = { x, y, z };
    if (l >= 2) throw new Error("No diagonal support yet");
    let _bc = (x + y + z) / direction,
      stepX = x / _bc,
      stepY = y / _bc,
      stepZ = z / _bc;
    if (x > 0) $ = "x";
    if (y > 0) $ = "y";
    if (z > 0) $ = "z";
    if (__[$] === 1)
      return d.spawnParticle(`${p}_half${$.toUpperCase()}`, {
        x: x1 + (x ? 0.5 : 0),
        y: y1 + (y ? 0.5 : 0),
        z: z1 + (z ? 0.5 : 0),
      }, new MolangVariableMap());
    for (let l = 0, m = 0, k = 0; l <= x; ) {
      let _ = { x: l, y: m, z: k };
      if (_[$] !== 0 && _[$] !== __[$])
        d.spawnParticle(`${p}${$.toUpperCase()}`, {
          x: x1 + l,
          y: y1 + m,
          z: z1 + k,
        }, new MolangVariableMap());
      l += stepX;
      m += stepY;
      k += stepZ;
      if (m > y || k > z) break;
    }
  }

  /**
   * Creates a cube of particles between two positions.
   * @param {object} pos1 - The first position.
   * @param {object} pos2 - The second position.
   * @param {string} [p="minecraft:endrod"] - The particle type.
   */
  static cube(pos1, pos2, p = "minecraft:endrod") {
    let $ = Geometry._c(pos1, pos2, true);
    Particle.line($.pos1, $.pos3, p);
    Particle.line($.pos3, $.pos7, p);
    Particle.line($.pos7, $.pos5, p);
    Particle.line($.pos5, $.pos1, p);
    Particle.line($.pos1, $.pos6, p);
    Particle.line($.pos6, $.pos4, p);
    Particle.line($.pos4, $.pos5, p);
    Particle.line($.pos4, $.pos2, p);
    Particle.line($.pos2, $.pos7, p);
    Particle.line($.pos3, $.pos8, p);
    Particle.line($.pos6, $.pos8, p);
    Particle.line($.pos8, $.pos2, p);
  }

  /**
   * Creates a frame of particles between two positions.
   * @param {object} pos1 - The first position.
   * @param {object} pos2 - The second position.
   * @param {string} [p="choigame:line"] - The particle type.
   */
  static frame(pos1, pos2, p = "choigame:line") {
    let $ = Geometry._c(pos1, pos2, true);
    Particle.direction_line($.pos1, $.pos3, p);
    Particle.direction_line($.pos3, $.pos7, p);
    Particle.direction_line($.pos7, $.pos5, p);
    Particle.direction_line($.pos5, $.pos1, p);
    Particle.direction_line($.pos1, $.pos6, p);
    Particle.direction_line($.pos6, $.pos4, p);
    Particle.direction_line($.pos4, $.pos5, p);
    Particle.direction_line($.pos4, $.pos2, p);
    Particle.direction_line($.pos2, $.pos7, p);
    Particle.direction_line($.pos3, $.pos8, p);
    Particle.direction_line($.pos6, $.pos8, p);
    Particle.direction_line($.pos8, $.pos2, p);
  }

  /**
   * Creates a structure frame
   * @param {object} pos1 - The first position.
   * @param {object} pos2 - The second position.
   */
  static structure_block_frame(pos1, pos2) {
    let $ = Geometry._c(pos1, pos2, true),
      x = "choigame:line_red",
      y = "choigame:line_green",
      z = "choigame:line_blue",
      none = "choigame:line";
    Particle.direction_line($.pos1, $.pos3, y);
    Particle.direction_line($.pos3, $.pos7, none);
    Particle.direction_line($.pos7, $.pos5, none);
    Particle.direction_line($.pos5, $.pos1, z);
    Particle.direction_line($.pos1, $.pos6, x);
    Particle.direction_line($.pos6, $.pos4, none);
    Particle.direction_line($.pos4, $.pos5, none);
    Particle.direction_line($.pos4, $.pos2, none);
    Particle.direction_line($.pos2, $.pos7, none);
    Particle.direction_line($.pos3, $.pos8, none);
    Particle.direction_line($.pos6, $.pos8, none);
    Particle.direction_line($.pos8, $.pos2, none);
  }
}
export function* generator(pos1, pos2, expr, yieldConfig = false) {
    let 
        xMin = Math.min(pos1.x, pos2.x),
        xMax = Math.max(pos1.x, pos2.x),
        yMin = Math.min(pos1.y, pos2.y),
        yMax = Math.max(pos1.y, pos2.y),
        zMin = Math.min(pos1.z, pos2.z),
        zMax = Math.max(pos1.z, pos2.z),
        //Before shift center pos (cộng voi về pos cũ)
        ox = (xMax + xMin) / 2,
        oy = (yMax + yMin) / 2,
        oz = (zMax + zMin) / 2,
        //Side length
        rx = Math.abs(ox - xMin),
        ry = Math.abs(oy - yMin),
        rz = Math.abs(oz - zMin),
        //Expression data
        data = {
            xMin: -rx,
            xMax: rx,
            yMin: -ry,
            yMax: ry,
            zMin: -rz,
            zMax: rz,
            cx: 0,
            cy: 0,
            cz: 0,
            rx: rx + 1,
            ry: ry + 1,
            rz: rz + 1,
            ts: Math.sqrt(2),
            hts: Math.sqrt(2) / 2
        },
        isValid = new Function("x, y, z, {xMin, xMax, yMin, yMax, zMin, zMax, cx, cy, cz, rx, ry, rz, ts, hts}, t, t1", `return ${expr}`);

    if (yieldConfig) yield data;

    for (let x = data.xMin; x <= data.xMax; x++)
    for (let y = data.yMin; y <= data.yMax; y++)
    for (let z = data.zMin; z <= data.zMax; z++)
    if (isValid(x, y, z, data)) yield {
        x: x + ox,
        y: y + oy,
        z: z + oz
    }
}
export function* centerGenerator(pos, expr, r/*adius*/, h/*eight*/, yieldConfig = false) {
    if (h === void 0) h = r;

    let data = {
            xMin: -r,
            yMin: -r,
            zMin: -r,
            xMax: r,
            yMax: r,
            zMax: r,
            cx: 0,
            cy: 0,
            cz: 0,
            rx: r + 1,
            ry: r + 1,
            rz: r + 1
        },
        isValid = new Function("x, y, z, r, h, {xMin, xMax, yMin, yMax, zMin, zMax, cx, cy, cz, rx, ry, rz}, t, t1", `return ${expr}`);

    if (yieldConfig) yield data;

    //K cần tịnh tiến, lấy tâm [0, 0, 0]
    for (let x = -r; x <= r; x++)
    for (let y = -h; y <= h; y++)
    for (let z = -r; z <= r; z++)
    if (isValid(x, y, z, r, h, data)) yield { x: pos.x + x, y: pos.y + y + h, z: pos.z + z };
}
