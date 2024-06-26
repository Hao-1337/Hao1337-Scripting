"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2Builder = exports.Vector3Builder = void 0;
const coreHelpers_1 = require("./coreHelpers");
/**
 * Vector3 wrapper class which can be used as a Vector3 for APIs on \@minecraft/server which require a Vector,
 * but also contain additional helper methods. This is an alternative to using the core Vector 3 utility
 * methods directly, for those who prefer a more object-oriented approach. This version of the class is mutable
 * and changes state inline.
 *
 * For an immutable version of the build, use ImmutableVector3Builder.
 *
 * @public
 */
class Vector3Builder {
    constructor(first, y, z) {
        if (typeof first === 'object') {
            this.x = first.x;
            this.y = first.y;
            this.z = first.z;
        }
        else {
            this.x = first;
            this.y = y ?? 0;
            this.z = z ?? 0;
        }
    }
    /**
     * Assigns the values of the passed in vector to this vector. Returns itself.
     */
    assign(vec) {
        this.x = vec.x;
        this.y = vec.y;
        this.z = vec.z;
        return this;
    }
    /**
     * equals
     *
     * Check the equality of two vectors
     */
    equals(v) {
        return coreHelpers_1.Vector3Utils.equals(this, v);
    }
    /**
     * add
     *
     * Adds the vector v to this, returning itself.
     */
    add(v) {
        return this.assign(coreHelpers_1.Vector3Utils.add(this, v));
    }
    /**
     * subtract
     *
     * Subtracts the vector v from this, returning itself.
     */
    subtract(v) {
        return this.assign(coreHelpers_1.Vector3Utils.subtract(this, v));
    }
    /** scale
     *
     * Scales this by the passed in value, returning itself.
     */
    scale(val) {
        return this.assign(coreHelpers_1.Vector3Utils.scale(this, val));
    }
    /**
     * dot
     *
     * Computes the dot product of this and the passed in vector.
     */
    dot(vec) {
        return coreHelpers_1.Vector3Utils.dot(this, vec);
    }
    /**
     * cross
     *
     * Computes the cross product of this and the passed in vector, returning itself.
     */
    cross(vec) {
        return this.assign(coreHelpers_1.Vector3Utils.cross(this, vec));
    }
    /**
     * magnitude
     *
     * The magnitude of the vector
     */
    magnitude() {
        return coreHelpers_1.Vector3Utils.magnitude(this);
    }
    /**
     * distance
     *
     * Calculate the distance between two vectors
     */
    distance(vec) {
        return coreHelpers_1.Vector3Utils.distance(this, vec);
    }
    /**
     * normalize
     *
     * Normalizes this vector, returning itself.
     */
    normalize() {
        return this.assign(coreHelpers_1.Vector3Utils.normalize(this));
    }
    /**
     * floor
     *
     * Floor the components of a vector to produce a new vector
     */
    floor() {
        return this.assign(coreHelpers_1.Vector3Utils.floor(this));
    }
    /**
     * toString
     *
     * Create a string representation of a vector
     */
    toString(options) {
        return coreHelpers_1.Vector3Utils.toString(this, options);
    }
    /**
     * clamp
     *
     * Clamps the components of a vector to limits to produce a new vector
     */
    clamp(limits) {
        return this.assign(coreHelpers_1.Vector3Utils.clamp(this, limits));
    }
    /**
     * lerp
     *
     * Constructs a new vector using linear interpolation on each component from two vectors.
     */
    lerp(vec, t) {
        return this.assign(coreHelpers_1.Vector3Utils.lerp(this, vec, t));
    }
    /**
     * slerp
     *
     * Constructs a new vector using spherical linear interpolation on each component from two vectors.
     */
    slerp(vec, t) {
        return this.assign(coreHelpers_1.Vector3Utils.slerp(this, vec, t));
    }
}
exports.Vector3Builder = Vector3Builder;
/**
 * Vector2 wrapper class which can be used as a Vector2 for APIs on \@minecraft/server which require a Vector2.
 * @public
 */
class Vector2Builder {
    constructor(first, y) {
        if (typeof first === 'object') {
            this.x = first.x;
            this.y = first.y;
        }
        else {
            this.x = first;
            this.y = y ?? 0;
        }
    }
    toString(options) {
        return coreHelpers_1.Vector2Utils.toString(this, options);
    }
}
exports.Vector2Builder = Vector2Builder;
//# sourceMappingURL=vectorWrapper.js.map