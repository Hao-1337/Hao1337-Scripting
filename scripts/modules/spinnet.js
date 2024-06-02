let Spinnet = {
  "version": {
    "@minecraft/server": "1.8.0-beta.1.20.50-stable",
    "@minecraft/server-ui": "1.2.0-beta.1.20.50-stable",
    "@minecraft/server-gametest": "1.0.0-beta.1.20.50-stable",
    "@minecraft/common": "1.1.0"
  },
  "@minecraft/server": {
    "Block": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Returns the dimension that the block is within."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "isAir": {
        "comment": {
          "params": {},
          "remarks": "Returns true if this block is an air block (i.e., empty space).",
          "throws": "property can throw when used. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "readonly isAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isLiquid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if this block is a liquid block - (e.g., a water block and a lava block are liquid, while an air block and a stone block are not. Water logged blocks are not liquid blocks).",
          "throws": "property can throw when used. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "readonly isLiquid: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSolid": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns true if this block is solid and impassible - (e.g., a cobblestone block and a diamond block are solid, while a ladder block and a fence block are not).",
          "throws": "property can throw when used. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "readonly isSolid: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isWaterlogged": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns or sets whether this block has a liquid on it. This property can't be edited in read-only mode."
        },
        "match": "isWaterlogged: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "location": {
        "comment": {
          "params": {},
          "remarks": "Coordinates of the specified block.",
          "throws": "property can throw when used."
        },
        "match": "readonly location: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "permutation": {
        "comment": {
          "params": {},
          "remarks": "Additional block configuration data that describes the block.",
          "throws": "property can throw when used. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "readonly permutation: BlockPermutation",
        "kind": "readonly",
        "param": "",
        "return": "BlockPermutation"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Gets the type of block.",
          "throws": "property can throw when used. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "x": {
        "comment": {
          "params": {},
          "remarks": "X coordinate of the block."
        },
        "match": "readonly x: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "y": {
        "comment": {
          "params": {},
          "remarks": "Y coordinate of the block."
        },
        "match": "readonly y: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "z": {
        "comment": {
          "params": {},
          "remarks": "Z coordinate of the block."
        },
        "match": "readonly z: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "above": {
        "comment": {
          "params": {
            "steps": "Number of steps above to step before returning."
          },
          "remarks": "Returns the {@link Block} above this block (positive in the Y direction).",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "above(steps?: number): Block | undefined",
        "kind": "public",
        "param": "steps?: number",
        "return": "Block | undefined"
      },
      "below": {
        "comment": {
          "params": {
            "steps": "Number of steps below to step before returning."
          },
          "remarks": "Returns the {@link Block} below this block (negative in the Y direction).",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "below(steps?: number): Block | undefined",
        "kind": "public",
        "param": "steps?: number",
        "return": "Block | undefined"
      },
      "bottomCenter": {
        "comment": {
          "params": {},
          "remarks": "Returns the {@link @minecraft/server.Location} of the center of this block on the X and Z axis."
        },
        "match": "bottomCenter(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "canPlace": {
        "comment": {
          "params": {
            "blockToPlace": "Block type or block permutation to check placement for.",
            "faceToPlaceOn": "Optional specific face of this block to check placement against."
          },
          "beta": "",
          "remarks": "Checks to see whether it is valid to place the specified block type or block permutation, on a specified face on this block",
          "returns": "Returns `true` if the block type or permutation can be placed on this block, else `false`.",
          "throws": "function can throw errors. {@link Error} {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "canPlace(blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction): boolean",
        "kind": "public",
        "param": "blockToPlace: BlockPermutation | BlockType | string, faceToPlaceOn?: Direction",
        "return": "boolean"
      },
      "center": {
        "comment": {
          "params": {},
          "remarks": "Returns the {@link @minecraft/server.Location} of the center of this block on the X, Y, and Z axis."
        },
        "match": "center(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "east": {
        "comment": {
          "params": {
            "steps": "Number of steps to the east to step before returning."
          },
          "remarks": "Returns the {@link Block} to the east of this block (positive in the X direction).",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "east(steps?: number): Block | undefined",
        "kind": "public",
        "param": "steps?: number",
        "return": "Block | undefined"
      },
      "getItemStack": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:inventory'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs can be found as part of the {@link BlockComponentTypes} enum."
          },
          "remarks": "Gets a component (that represents additional capabilities) for a block - for example, an inventory component of a chest block.",
          "returns": "Returns the component if it exists on the block, otherwise undefined.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "getItemStack(amount?: number, withData?: boolean): ItemStack | undefined",
        "kind": "public",
        "param": "amount?: number, withData?: boolean",
        "return": "ItemStack | undefined"
      },
      "getRedstonePower": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns the net redstone power of this block.",
          "returns": "Returns undefined if redstone power is not applicable to this block.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "getRedstonePower(): number | undefined",
        "kind": "public",
        "param": "",
        "return": "number | undefined"
      },
      "getTags": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns a set of tags for a block.",
          "returns": "The list of tags that the block has.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "getTags(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "hasTag": {
        "comment": {
          "params": {
            "tag": "Tag to check for."
          },
          "beta": "",
          "remarks": "Checks to see if the permutation of this block has a specific tag.",
          "returns": "Returns `true` if the permutation of this block has the tag, else `false`.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}",
          "example": "```typescript import { world } from \"@minecraft/server\"; // Fetch the block const block = world.getDimension(\"overworld\").getBlock({ x: 1, y: 2, z: 3 }); console.log(`Block is dirt: ${block.hasTag(\"dirt\")}`); console.log(`Block is wood: ${block.hasTag(\"wood\")}`); console.log(`Block is stone: ${block.hasTag(\"stone\")}`); ```"
        },
        "match": "hasTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if this reference to a block is still valid (for example, if the block is unloaded, references to that block will no longer be valid.)",
          "returns": "True if this block object is still working and valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "north": {
        "comment": {
          "params": {
            "steps": "Number of steps to the north to step before returning."
          },
          "remarks": "Returns the {@link Block} to the north of this block (negative in the Z direction).",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "north(steps?: number): Block | undefined",
        "kind": "public",
        "param": "steps?: number",
        "return": "Block | undefined"
      },
      "offset": {
        "comment": {
          "params": {
            "offset": "The offset vector. For example, an offset of 0, 1, 0 will return the block above the current block."
          },
          "remarks": "Returns a block at an offset relative vector to this block.",
          "returns": "Block at the specified offset, or undefined if that block could not be retrieved (for example, the block and its relative chunk is not loaded yet.)",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "offset(offset: Vector3): Block | undefined",
        "kind": "public",
        "param": "offset: Vector3",
        "return": "Block | undefined"
      },
      "setPermutation": {
        "comment": {
          "params": {
            "permutation": "Permutation that contains a set of property states for the Block."
          },
          "remarks": "Sets the block in the dimension to the state of the permutation. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "setPermutation(permutation: BlockPermutation): void",
        "kind": "public",
        "param": "permutation: BlockPermutation",
        "return": "void"
      },
      "setType": {
        "comment": {
          "params": {
            "blockType": "Identifier of the type of block to apply - for example, minecraft:powered_repeater."
          },
          "beta": "",
          "remarks": "Sets the type of block. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link Error} {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "setType(blockType: BlockType | string): void",
        "kind": "public",
        "param": "blockType: BlockType | string",
        "return": "void"
      },
      "south": {
        "comment": {
          "params": {
            "steps": "Number of steps to the south to step before returning."
          },
          "remarks": "Returns the {@link Block} to the south of this block (positive in the Z direction).",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "south(steps?: number): Block | undefined",
        "kind": "public",
        "param": "steps?: number",
        "return": "Block | undefined"
      },
      "trySetPermutation": {
        "comment": {
          "params": {
            "permutation": "Permutation that contains a set of property states for the Block."
          },
          "beta": "",
          "remarks": "Tries to set the block in the dimension to the state of the permutation by first checking if the placement is valid. This function can't be called in read-only mode.",
          "returns": "Returns `true` if the block permutation data was successfully set, else `false`.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "trySetPermutation(permutation: BlockPermutation): boolean",
        "kind": "public",
        "param": "permutation: BlockPermutation",
        "return": "boolean"
      },
      "west": {
        "comment": {
          "params": {
            "steps": "Number of steps to the west to step before returning."
          },
          "remarks": "Returns the {@link Block} to the west of this block (negative in the X direction).",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "west(steps?: number): Block | undefined",
        "kind": "public",
        "param": "steps?: number",
        "return": "Block | undefined"
      }
    },
    "BlockAreaSize": {
      "x": {
        "comment": {
          "params": {},
          "remarks": "X size (west to east) component of this block area."
        },
        "match": "x: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "y": {
        "comment": {
          "params": {},
          "remarks": "Y size (down to up) of this block area size."
        },
        "match": "y: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "z": {
        "comment": {
          "params": {},
          "remarks": "Z size (south to north) of this block area size."
        },
        "match": "z: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "constructor": {
        "comment": {
          "params": {},
          "remarks": "Creates a new BlockAreaSize object."
        },
        "match": "constructor(x: number, y: number, z: number)",
        "kind": "public",
        "param": "x: number, y: number, z: number",
        "return": "BlockAreaSize"
      },
      "equals": {
        "comment": {
          "params": {},
          "remarks": "Tests whether this block area size is equal to another BlockAreaSize object."
        },
        "match": "equals(other: BlockAreaSize): boolean",
        "kind": "public",
        "param": "other: BlockAreaSize",
        "return": "boolean"
      }
    },
    "BlockComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockComponent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockEvent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "BlockExplodeAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockExplodeAfterEvent"
      },
      "explodedBlockPermutation": {
        "comment": {
          "params": {},
          "remarks": "Description of the block that has exploded."
        },
        "match": "readonly explodedBlockPermutation: BlockPermutation",
        "kind": "readonly",
        "param": "",
        "return": "BlockPermutation"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Optional source of the explosion."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "BlockExplodeAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockExplodeAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an explosion occurs, as it impacts individual blocks. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: BlockExplodeAfterEvent) => void",
        "return": "(arg: BlockExplodeAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an explosion occurs, as it impacts individual blocks. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: BlockExplodeAfterEvent) => void",
        "return": "void"
      }
    },
    "BlockInventoryComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockInventoryComponent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "The container which holds an {@link ItemStack}.",
          "throws": "property can throw when used."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockLavaContainerComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockLavaContainerComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:lavaContainer'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:lavaContainer'"
      },
      "fillLevel": {
        "comment": {
          "params": {},
          "remarks": "Relative fill level of the liquid container. This property can't be edited in read-only mode."
        },
        "match": "fillLevel: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isValidLiquid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if this reference to a liquid container is still valid and contains the liquid of the type you have a reference for (for example, if the block is unloaded, no longer a liquid container or contains lava when you have a potion container component, isValidLiquid will not be true.)",
          "returns": "True if this liquid container still exists, is valid and contains the expected liquid type."
        },
        "match": "isValidLiquid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockLiquidContainerComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockLiquidContainerComponent"
      },
      "fillLevel": {
        "comment": {
          "params": {},
          "remarks": "Relative fill level of the liquid container. This property can't be edited in read-only mode."
        },
        "match": "fillLevel: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isValidLiquid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if this reference to a liquid container is still valid and contains the liquid of the type you have a reference for (for example, if the block is unloaded, no longer a liquid container or contains lava when you have a potion container component, isValidLiquid will not be true.)",
          "returns": "True if this liquid container still exists, is valid and contains the expected liquid type."
        },
        "match": "isValidLiquid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockLocationIterator": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockLocationIterator"
      },
      "next": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode."
        },
        "match": "next(): IteratorResult<Vector3>",
        "kind": "public",
        "param": "",
        "return": "IteratorResult<Vector3>"
      }
    },
    "BlockPermutation": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockPermutation"
      },
      "clone": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The {@link BlockType} that the permutation has."
        },
        "match": "clone(): BlockPermutation",
        "kind": "public",
        "param": "",
        "return": "BlockPermutation"
      },
      "getAllStates": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns all available block states associated with this block.",
          "returns": "Returns the list of all of the block states that the permutation has."
        },
        "match": "getAllStates(): Record<string, boolean | number | string>",
        "kind": "public",
        "param": "",
        "return": "Record<string, boolean | number | string>"
      },
      "getItemStack": {
        "comment": {
          "params": {
            "amount": "Number of instances of this block to place in the prototype item stack."
          },
          "beta": "",
          "remarks": "Retrieves a prototype item stack based on this block permutation that can be used with item Container/ContainerSlot APIs."
        },
        "match": "getItemStack(amount?: number): ItemStack | undefined",
        "kind": "public",
        "param": "amount?: number",
        "return": "ItemStack | undefined"
      },
      "getState": {
        "comment": {
          "params": {
            "stateName": "Name of the block state who's value is to be returned."
          },
          "beta": "",
          "remarks": "Gets a state for the permutation.",
          "returns": "Returns the state if the permutation has it, else `undefined`."
        },
        "match": "getState(stateName: string): boolean | number | string | undefined",
        "kind": "public",
        "param": "stateName: string",
        "return": "boolean | number | string | undefined"
      },
      "getTags": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Creates a copy of the permutation."
        },
        "match": "getTags(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "hasTag": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Checks to see if the permutation has a specific tag.",
          "returns": "Returns `true` if the permutation has the tag, else `false`.",
          "example": "```typescript import { world } from \"@minecraft/server\"; // Fetch the block const block = world.getDimension(\"overworld\").getBlock({ x: 1, y: 2, z: 3 }); const blockPerm = block.getPermutation(); console.log(`Block is dirt: ${blockPerm.hasTag(\"dirt\")}`); console.log(`Block is wood: ${blockPerm.hasTag(\"wood\")}`); console.log(`Block is stone: ${blockPerm.hasTag(\"stone\")}`); ```"
        },
        "match": "hasTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "matches": {
        "comment": {
          "params": {
            "blockName": "An optional set of states to compare against."
          },
          "remarks": "Returns a boolean whether a specified permutation matches this permutation. If states is not specified, matches checks against the set of types more broadly."
        },
        "match": "matches(blockName: string, states?: Record<string, boolean | number | string>): boolean",
        "kind": "public",
        "param": "blockName: string, states?: Record<string, boolean | number | string>",
        "return": "boolean"
      },
      "withState": {
        "comment": {
          "params": {
            "name": "Identifier of the block property.",
            "value": "Value of the block property."
          },
          "beta": "",
          "remarks": "Returns a derived BlockPermutation with a specific property set.",
          "throws": "function can throw errors."
        },
        "match": "withState(name: string, value: boolean | number | string): BlockPermutation",
        "kind": "public",
        "param": "name: string, value: boolean | number | string",
        "return": "BlockPermutation"
      },
      "resolve": {
        "comment": {
          "params": {
            "blockName": "Identifier of the block to check."
          },
          "remarks": "Given a type identifier and an optional set of properties, will return a BlockPermutation object that is usable in other block APIs (e.g., block.setPermutation)",
          "throws": "function can throw errors.",
          "example": "```typescript const allColorNames: string[] = [ \"white\", \"orange\", \"magenta\", \"light_blue\", \"yellow\", \"lime\", \"pink\", \"gray\", \"silver\", \"cyan\", \"purple\", \"blue\", \"brown\", \"green\", \"red\", \"black\", ]; const cubeDim = 7; let colorIndex = 0; for (let x = 0; x <= cubeDim; x++) { for (let y = 0; y <= cubeDim; y++) { for (let z = 0; z <= cubeDim; z++) { colorIndex++; overworld .getBlock({ x: targetLocation.x + x, y: targetLocation.y + y, z: targetLocation.z + z }) ?.setPermutation( mc.BlockPermutation.resolve(\"minecraft:wool\", { color: allColorNames[colorIndex % allColorNames.length], }) ); } } } ```"
        },
        "match": "static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation",
        "kind": "static",
        "param": "blockName: string, states?: Record<string, boolean | number | string>",
        "return": "BlockPermutation"
      }
    },
    "BlockPistonComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockPistonComponent"
      },
      "isExpanded": {
        "comment": {
          "params": {},
          "remarks": "Whether the piston is fully expanded.",
          "throws": "property can throw when used."
        },
        "match": "readonly isExpanded: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isExpanding": {
        "comment": {
          "params": {},
          "remarks": "Whether the piston is in the process of expanding.",
          "throws": "property can throw when used."
        },
        "match": "readonly isExpanding: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isMoving": {
        "comment": {
          "params": {},
          "remarks": "Whether the piston is in the process of expanding or retracting.",
          "throws": "property can throw when used."
        },
        "match": "readonly isMoving: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isRetracted": {
        "comment": {
          "params": {},
          "remarks": "Whether the piston is fully retracted.",
          "throws": "property can throw when used."
        },
        "match": "readonly isRetracted: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isRetracting": {
        "comment": {
          "params": {},
          "remarks": "Whether the piston is in the process of retracting.",
          "throws": "property can throw when used."
        },
        "match": "readonly isRetracting: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:piston'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:piston'"
      },
      "getAttachedBlocks": {
        "comment": {
          "params": {},
          "remarks": "Retrieves a set of blocks that this piston is connected with.",
          "throws": "function can throw errors."
        },
        "match": "getAttachedBlocks(): Vector3[]",
        "kind": "public",
        "param": "",
        "return": "Vector3[]"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockPotionContainerComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockPotionContainerComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:potionContainer'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:potionContainer'"
      },
      "setPotionType": {
        "comment": {
          "params": {},
          "remarks": "Sets the potion type based on an item stack. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setPotionType(itemStack: ItemStack): void",
        "kind": "public",
        "param": "itemStack: ItemStack",
        "return": "void"
      },
      "fillLevel": {
        "comment": {
          "params": {},
          "remarks": "Relative fill level of the liquid container. This property can't be edited in read-only mode."
        },
        "match": "fillLevel: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isValidLiquid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if this reference to a liquid container is still valid and contains the liquid of the type you have a reference for (for example, if the block is unloaded, no longer a liquid container or contains lava when you have a potion container component, isValidLiquid will not be true.)",
          "returns": "True if this liquid container still exists, is valid and contains the expected liquid type."
        },
        "match": "isValidLiquid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockRecordPlayerComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockRecordPlayerComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:recordPlayer'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:recordPlayer'"
      },
      "clearRecord": {
        "comment": {
          "params": {},
          "remarks": "Clears the currently playing record of this record-playing block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "clearRecord(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "isPlaying": {
        "comment": {
          "params": {},
          "remarks": "Returns true if the record-playing block is currently playing a record.",
          "throws": "function can throw errors."
        },
        "match": "isPlaying(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "setRecord": {
        "comment": {
          "params": {},
          "remarks": "Sets and plays a record based on an item type. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setRecord(recordItemType: ItemType | string): void",
        "kind": "public",
        "param": "recordItemType: ItemType | string",
        "return": "void"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockSignComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockSignComponent"
      },
      "isWaxed": {
        "comment": {
          "params": {},
          "remarks": "Whether or not players can edit the sign. This happens if a sign has had a honeycomb used on it or `setWaxed` was called on the sign.",
          "throws": "property can throw when used."
        },
        "match": "readonly isWaxed: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:sign'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:sign'"
      },
      "getRawText": {
        "comment": {
          "params": {
            "side": "The side of the sign to read the message from. If not provided, this will return the message from the front side of the sign."
          },
          "remarks": "Returns the RawText of the sign if `setText` was called with a RawMessage or a RawText object, otherwise returns undefined.",
          "throws": "function can throw errors."
        },
        "match": "getRawText(side?: SignSide): RawText | undefined",
        "kind": "public",
        "param": "side?: SignSide",
        "return": "RawText | undefined"
      },
      "getText": {
        "comment": {
          "params": {
            "side": "The side of the sign to read the message from. If not provided, this will return the message from the front side of the sign."
          },
          "remarks": "Returns the text of the sign if `setText` was called with a string, otherwise returns undefined.",
          "throws": "function can throw errors."
        },
        "match": "getText(side?: SignSide): string | undefined",
        "kind": "public",
        "param": "side?: SignSide",
        "return": "string | undefined"
      },
      "getTextDyeColor": {
        "comment": {
          "params": {
            "side": "The side of the sign to read the dye from. If not provided, this will return the dye on the front side of the sign."
          },
          "remarks": "Gets the dye that is on the text or undefined if the sign has not been dyed.",
          "throws": "function can throw errors."
        },
        "match": "getTextDyeColor(side?: SignSide): DyeColor | undefined",
        "kind": "public",
        "param": "side?: SignSide",
        "return": "DyeColor | undefined"
      },
      "setText": {
        "comment": {
          "params": {
            "message": "The message to set on the sign. If set to a string, then call `getText` to read that string. If set to a RawMessage, then calling `getRawText` will return a RawText. If set to a RawText, then calling `getRawText` will return the same object that was passed in.",
            "side": "The side of the sign the message will be set on. If not provided, the message will be set on the front side of the sign."
          },
          "remarks": "Sets the text of the sign component. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript // Set sign to say 'Hello' sign.setText('Hello'); sign.getText(); // 'Hello' ```"
        },
        "match": "setText(message: RawMessage | RawText | string, side?: SignSide): void",
        "kind": "public",
        "param": "message: RawMessage | RawText | string, side?: SignSide",
        "return": "void"
      },
      "setTextDyeColor": {
        "comment": {
          "params": {
            "color": "The dye color to apply to the sign or undefined to clear the dye on the sign.",
            "side": "The side of the sign the color will be set on. If not provided, the color will be set on the front side of the sign."
          },
          "remarks": "Sets the dye color of the text. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setTextDyeColor(color?: DyeColor, side?: SignSide): void",
        "kind": "public",
        "param": "color?: DyeColor, side?: SignSide",
        "return": "void"
      },
      "setWaxed": {
        "comment": {
          "params": {},
          "remarks": "Makes it so players cannot edit this sign. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setWaxed(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockSnowContainerComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockSnowContainerComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:snowContainer'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:snowContainer'"
      },
      "fillLevel": {
        "comment": {
          "params": {},
          "remarks": "Relative fill level of the liquid container. This property can't be edited in read-only mode."
        },
        "match": "fillLevel: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isValidLiquid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if this reference to a liquid container is still valid and contains the liquid of the type you have a reference for (for example, if the block is unloaded, no longer a liquid container or contains lava when you have a potion container component, isValidLiquid will not be true.)",
          "returns": "True if this liquid container still exists, is valid and contains the expected liquid type."
        },
        "match": "isValidLiquid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BlockStates": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockStates"
      },
      "get": {
        "comment": {
          "params": {},
          "remarks": "Retrieves a specific block state instance.",
          "returns": "Returns the {@link Block} state instance if it is found. If the block state instance is not found returns undefined."
        },
        "match": "static get(stateName: string): BlockStateType | undefined",
        "kind": "static",
        "param": "stateName: string",
        "return": "BlockStateType | undefined"
      },
      "getAll": {
        "comment": {
          "params": {},
          "remarks": "Retrieves a set of all available block states."
        },
        "match": "static getAll(): BlockStateType[]",
        "kind": "static",
        "param": "",
        "return": "BlockStateType[]"
      }
    },
    "BlockStateType": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockStateType"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the block property."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "validValues": {
        "comment": {
          "params": {},
          "remarks": "A set of valid values for the block property."
        },
        "match": "readonly validValues: (boolean | number | string)[]",
        "kind": "readonly",
        "param": "",
        "return": "(boolean | number | string)[]"
      }
    },
    "BlockType": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockType"
      },
      "canBeWaterlogged": {
        "comment": {
          "params": {},
          "remarks": "Represents whether this type of block can be waterlogged."
        },
        "match": "readonly canBeWaterlogged: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Block type name - for example, `minecraft:acacia_stairs`."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "BlockTypes": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockTypes"
      },
      "get": {
        "comment": {
          "params": {
            "typeName": "Identifier of the block type. Should follow a namespace:id pattern, such as minecraft:dirt."
          },
          "remarks": "Returns a BlockType object for the specified identifier.",
          "returns": "BlockType object, or undefined if the block type is not available within this world."
        },
        "match": "static get(typeName: string): BlockType | undefined",
        "kind": "static",
        "param": "typeName: string",
        "return": "BlockType | undefined"
      },
      "getAll": {
        "comment": {
          "params": {},
          "remarks": "Returns a collection of all available block types."
        },
        "match": "static getAll(): BlockType[]",
        "kind": "static",
        "param": "",
        "return": "BlockType[]"
      }
    },
    "BlockVolumeUtils": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockVolumeUtils"
      },
      "doesLocationTouchFaces": {
        "comment": {
          "params": {
            "volume": "The volume to test against",
            "pos": "The world block location to test"
          },
          "remarks": "Check to see if the given location is directly adjacent to the outer surface of a BlockVolume. This function can't be called in read-only mode.",
          "returns": "If the location is either inside or more than 0 blocks away, the function will return false. If the location is directly contacting the outer surface of the BlockVolume, the function will return true."
        },
        "match": "static doesLocationTouchFaces(volume: BlockVolume, pos: Vector3): boolean",
        "kind": "static",
        "param": "volume: BlockVolume, pos: Vector3",
        "return": "boolean"
      },
      "doesVolumeTouchFaces": {
        "comment": {
          "params": {
            "volume": "The volume to test against",
            "other": "The volume to test"
          },
          "remarks": "Check to see if a two block volumes are directly adjacent and two faces touch. This function can't be called in read-only mode.",
          "returns": "If the outer faces of both block volumes touch and are directly adjacent at any point, return true."
        },
        "match": "static doesVolumeTouchFaces(volume: BlockVolume, other: BlockVolume): boolean",
        "kind": "static",
        "param": "volume: BlockVolume, other: BlockVolume",
        "return": "boolean"
      },
      "equals": {
        "comment": {
          "params": {},
          "remarks": "Test the equality of two block volumes This function can't be called in read-only mode.",
          "returns": "Return true if two block volumes are identical"
        },
        "match": "static equals(volume: BlockVolume, other: BlockVolume): boolean",
        "kind": "static",
        "param": "volume: BlockVolume, other: BlockVolume",
        "return": "boolean"
      },
      "getBlockLocationIterator": {
        "comment": {
          "params": {},
          "remarks": "Fetch a {@link BlockLocationIterator} that represents all of the block world locations within the specified volume This function can't be called in read-only mode."
        },
        "match": "static getBlockLocationIterator(volume: BlockVolume): BlockLocationIterator",
        "kind": "static",
        "param": "volume: BlockVolume",
        "return": "BlockLocationIterator"
      },
      "getBoundingBox": {
        "comment": {
          "params": {},
          "remarks": "Return a {@link BoundingBox} object which represents the validated min and max coordinates of the volume This function can't be called in read-only mode."
        },
        "match": "static getBoundingBox(volume: BlockVolume): BoundingBox",
        "kind": "static",
        "param": "volume: BlockVolume",
        "return": "BoundingBox"
      },
      "getCapacity": {
        "comment": {
          "params": {},
          "remarks": "Return the capacity (volume) of the BlockVolume (W*D*H) This function can't be called in read-only mode."
        },
        "match": "static getCapacity(volume: BlockVolume): number",
        "kind": "static",
        "param": "volume: BlockVolume",
        "return": "number"
      },
      "getMax": {
        "comment": {
          "params": {},
          "remarks": "Get the largest corner position of the volume (guaranteed to be >= min) This function can't be called in read-only mode."
        },
        "match": "static getMax(volume: BlockVolume): Vector3",
        "kind": "static",
        "param": "volume: BlockVolume",
        "return": "Vector3"
      },
      "getMin": {
        "comment": {
          "params": {},
          "remarks": "Get the smallest corner position of the volume (guaranteed to be <= max) This function can't be called in read-only mode."
        },
        "match": "static getMin(volume: BlockVolume): Vector3",
        "kind": "static",
        "param": "volume: BlockVolume",
        "return": "Vector3"
      },
      "getSpan": {
        "comment": {
          "params": {},
          "remarks": "Get a {@link Vector3} object where each component represents the number of blocks along that axis This function can't be called in read-only mode."
        },
        "match": "static getSpan(volume: BlockVolume): Vector3",
        "kind": "static",
        "param": "volume: BlockVolume",
        "return": "Vector3"
      },
      "intersects": {
        "comment": {
          "params": {},
          "remarks": "Return an enumeration which represents the intersection between two BlockVolume objects This function can't be called in read-only mode."
        },
        "match": "static intersects(volume: BlockVolume, other: BlockVolume): BlockVolumeIntersection",
        "kind": "static",
        "param": "volume: BlockVolume, other: BlockVolume",
        "return": "BlockVolumeIntersection"
      },
      "isInside": {
        "comment": {
          "params": {},
          "remarks": "Check to see if a given world block location is inside a BlockVolume This function can't be called in read-only mode."
        },
        "match": "static isInside(volume: BlockVolume, pos: Vector3): boolean",
        "kind": "static",
        "param": "volume: BlockVolume, pos: Vector3",
        "return": "boolean"
      },
      "translate": {
        "comment": {
          "params": {
            "delta": "Amount of blocks to move by"
          },
          "remarks": "Move a BlockVolume by a specified amount This function can't be called in read-only mode.",
          "returns": "Returns a new BlockVolume object which represents the new volume"
        },
        "match": "static translate(volume: BlockVolume, delta: Vector3): BlockVolume",
        "kind": "static",
        "param": "volume: BlockVolume, delta: Vector3",
        "return": "BlockVolume"
      }
    },
    "BlockWaterContainerComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BlockWaterContainerComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:waterContainer'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:waterContainer'"
      },
      "addDye": {
        "comment": {
          "params": {},
          "remarks": "Adds an item and colors the water based on a dye item type. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "addDye(itemType: ItemType): void",
        "kind": "public",
        "param": "itemType: ItemType",
        "return": "void"
      },
      "getCustomColor": {
        "comment": {
          "params": {},
          "remarks": "Retrieves a custom base color used for the sign text.",
          "returns": "Color that is used as the base color for sign text.",
          "throws": "function can throw errors."
        },
        "match": "getCustomColor(): RGBA",
        "kind": "public",
        "param": "",
        "return": "RGBA"
      },
      "setCustomColor": {
        "comment": {
          "params": {},
          "remarks": "Sets a custom base color used for the sign text. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setCustomColor(color: RGBA): void",
        "kind": "public",
        "param": "color: RGBA",
        "return": "void"
      },
      "fillLevel": {
        "comment": {
          "params": {},
          "remarks": "Relative fill level of the liquid container. This property can't be edited in read-only mode."
        },
        "match": "fillLevel: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isValidLiquid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if this reference to a liquid container is still valid and contains the liquid of the type you have a reference for (for example, if the block is unloaded, no longer a liquid container or contains lava when you have a potion container component, isValidLiquid will not be true.)",
          "returns": "True if this liquid container still exists, is valid and contains the expected liquid type."
        },
        "match": "isValidLiquid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block instance that this component pertains to."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "BoundingBoxUtils": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "BoundingBoxUtils"
      },
      "createValid": {
        "comment": {
          "params": {
            "min": "A corner world location",
            "max": "A corner world location diametrically opposite"
          },
          "remarks": "Create a validated instance of a {@link",
          "minecraft-server.BoundingBox}": "the min and max components are guaranteed to be (min <= max) This function can't be called in read-only mode."
        },
        "match": "static createValid(min: Vector3, max: Vector3): BoundingBox",
        "kind": "static",
        "param": "min: Vector3, max: Vector3",
        "return": "BoundingBox"
      },
      "dilate": {
        "comment": {
          "params": {},
          "remarks": "Expand a {@link @minecraft-server.BoundingBox} by a given amount along each axis. Sizes can be negative to perform contraction. Note: corners can be inverted if the contraction size is greater than the span, but the min/max relationship will remain correct This function can't be called in read-only mode.",
          "returns": "Return a new {@link @minecraft-server.BoundingBox} object representing the changes"
        },
        "match": "static dilate(box: BoundingBox, size: Vector3): BoundingBox",
        "kind": "static",
        "param": "box: BoundingBox, size: Vector3",
        "return": "BoundingBox"
      },
      "equals": {
        "comment": {
          "params": {},
          "remarks": "Check if two {@link @minecraft-server.BoundingBox} objects are identical This function can't be called in read-only mode."
        },
        "match": "static equals(box: BoundingBox, other: BoundingBox): boolean",
        "kind": "static",
        "param": "box: BoundingBox, other: BoundingBox",
        "return": "boolean"
      },
      "expand": {
        "comment": {
          "params": {},
          "remarks": "Expand the initial box object bounds to include the 2nd box argument.  The resultant {@link",
          "minecraft-server.BoundingBox}": "will be a BoundingBox which exactly encompasses the two boxes. This function can't be called in read-only mode.",
          "returns": "A new {@link @minecraft-server.BoundingBox} instance representing the smallest possible bounding box which can encompass both"
        },
        "match": "static expand(box: BoundingBox, other: BoundingBox): BoundingBox",
        "kind": "static",
        "param": "box: BoundingBox, other: BoundingBox",
        "return": "BoundingBox"
      },
      "getCenter": {
        "comment": {
          "params": {},
          "remarks": "Calculate the center block of a given {@link",
          "minecraft-server.BoundingBox}": "This function can't be called in read-only mode.",
          "returns": "Note that {@link @minecraft-server.BoundingBox} objects represent whole blocks, so the center of boxes which have odd numbered bounds are not mathematically centered... i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of (1,1,1)  (not (1.5, 1.5, 1.5) as expected)"
        },
        "match": "static getCenter(box: BoundingBox): Vector3",
        "kind": "static",
        "param": "box: BoundingBox",
        "return": "Vector3"
      },
      "getIntersection": {
        "comment": {
          "params": {},
          "remarks": "Calculate the BoundingBox which represents the union area of two intersecting BoundingBoxes This function can't be called in read-only mode."
        },
        "match": "static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined",
        "kind": "static",
        "param": "box: BoundingBox, other: BoundingBox",
        "return": "BoundingBox | undefined"
      },
      "getSpan": {
        "comment": {
          "params": {},
          "remarks": "Get the Span of each of the BoundingBox Axis components This function can't be called in read-only mode."
        },
        "match": "static getSpan(box: BoundingBox): Vector3",
        "kind": "static",
        "param": "box: BoundingBox",
        "return": "Vector3"
      },
      "intersects": {
        "comment": {
          "params": {},
          "remarks": "Check to see if two BoundingBox objects intersect This function can't be called in read-only mode."
        },
        "match": "static intersects(box: BoundingBox, other: BoundingBox): boolean",
        "kind": "static",
        "param": "box: BoundingBox, other: BoundingBox",
        "return": "boolean"
      },
      "isInside": {
        "comment": {
          "params": {},
          "remarks": "Check to see if a given coordinate is inside a BoundingBox This function can't be called in read-only mode."
        },
        "match": "static isInside(box: BoundingBox, pos: Vector3): boolean",
        "kind": "static",
        "param": "box: BoundingBox, pos: Vector3",
        "return": "boolean"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Check to see if a BoundingBox is valid (i.e. (min <= max)) This function can't be called in read-only mode."
        },
        "match": "static isValid(box: BoundingBox): boolean",
        "kind": "static",
        "param": "box: BoundingBox",
        "return": "boolean"
      },
      "translate": {
        "comment": {
          "params": {},
          "remarks": "Move a BoundingBox by a given amount This function can't be called in read-only mode.",
          "returns": "Return a new BoundingBox object which represents the change"
        },
        "match": "static translate(box: BoundingBox, delta: Vector3): BoundingBox",
        "kind": "static",
        "param": "box: BoundingBox, delta: Vector3",
        "return": "BoundingBox"
      }
    },
    "ButtonPushAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ButtonPushAfterEvent"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Optional source that triggered the button push."
        },
        "match": "readonly source: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "ButtonPushAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ButtonPushAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ButtonPushAfterEvent) => void",
        "return": "(arg: ButtonPushAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ButtonPushAfterEvent) => void",
        "return": "void"
      }
    },
    "Camera": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Camera"
      },
      "clear": {
        "comment": {
          "params": {},
          "remarks": "Clears the active camera for the specified player. Causes the specified players to end any in-progress camera perspectives, including any eased camera motions, and return to their normal perspective. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "clear(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "fade": {
        "comment": {
          "params": {
            "fadeCameraOptions": "Additional options around camera fade operations."
          },
          "remarks": "Begins a camera fade transition. A fade transition is a full-screen color that fades-in, holds, and then fades-out. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "fade(fadeCameraOptions?: CameraFadeOptions): void",
        "kind": "public",
        "param": "fadeCameraOptions?: CameraFadeOptions",
        "return": "void"
      },
      "setCamera": {
        "comment": {
          "params": {
            "cameraPreset": "Identifier of a camera preset file defined within JSON.",
            "setOptions": "Additional options for the camera."
          },
          "remarks": "Sets the current active camera for the specified player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setCamera(cameraPreset: string,setOptions?:| CameraDefaultOptions| CameraSetFacingOptions| CameraSetLocationOptions| CameraSetPosOptions| CameraSetRotOptions,): void",
        "kind": "public",
        "param": "cameraPreset: string,setOptions?:| CameraDefaultOptions| CameraSetFacingOptions| CameraSetLocationOptions| CameraSetPosOptions| CameraSetRotOptions,",
        "return": "void"
      }
    },
    "ChatSendAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ChatSendAfterEvent"
      },
      "message": {
        "comment": {
          "params": {},
          "remarks": "Message that is being broadcast."
        },
        "match": "message: string",
        "kind": "public",
        "param": "",
        "return": "string"
      },
      "sender": {
        "comment": {
          "params": {},
          "remarks": "Player that sent the chat message."
        },
        "match": "sender: Player",
        "kind": "public",
        "param": "",
        "return": "Player"
      },
      "sendToTargets": {
        "comment": {
          "params": {}
        },
        "match": "sendToTargets: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "getTargets": {
        "comment": {
          "params": {}
        },
        "match": "getTargets(): Player[]",
        "kind": "public",
        "param": "",
        "return": "Player[]"
      }
    },
    "ChatSendAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ChatSendAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when new chat messages are sent. This function can't be called in read-only mode.",
          "example": "```typescript const chatCallback = World.beforeEvents.chatSend.subscribe((eventData) => { if (eventData.message.includes(\"cancel\")) { // Cancel event if the message contains \"cancel\" eventData.canceled = true; } else { // Modify chat message being sent eventData.message = `Modified '${eventData.message}'`; } }); ```"
        },
        "match": "subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ChatSendAfterEvent) => void",
        "return": "(arg: ChatSendAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when new chat messages are sent. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ChatSendAfterEvent) => void",
        "return": "void"
      }
    },
    "ChatSendBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ChatSendBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true in a beforeChat event handler, this message is not broadcast out."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "setTargets": {
        "comment": {
          "params": {}
        },
        "match": "setTargets(players: Player[]): void",
        "kind": "public",
        "param": "players: Player[]",
        "return": "void"
      },
      "message": {
        "comment": {
          "params": {},
          "remarks": "Message that is being broadcast."
        },
        "match": "message: string",
        "kind": "public",
        "param": "",
        "return": "string"
      },
      "sender": {
        "comment": {
          "params": {},
          "remarks": "Player that sent the chat message."
        },
        "match": "sender: Player",
        "kind": "public",
        "param": "",
        "return": "Player"
      },
      "sendToTargets": {
        "comment": {
          "params": {}
        },
        "match": "sendToTargets: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "getTargets": {
        "comment": {
          "params": {}
        },
        "match": "getTargets(): Player[]",
        "kind": "public",
        "param": "",
        "return": "Player[]"
      }
    },
    "ChatSendBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ChatSendBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before new chat messages are sent. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ChatSendBeforeEvent) => void",
        "return": "(arg: ChatSendBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called before new chat messages are sent. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ChatSendBeforeEvent) => void",
        "return": "void"
      }
    },
    "CommandResult": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "CommandResult"
      },
      "successCount": {
        "comment": {
          "params": {},
          "remarks": "If the command operates against a number of entities, blocks, or items, this returns the number of successful applications of this command."
        },
        "match": "readonly successCount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      }
    },
    "Component": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Component"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "CompoundBlockVolume": {
      "capacity": {
        "comment": {
          "params": {},
          "remarks": "Return the 'capacity' of the bounding rectangle which represents the collection of volumes in the stack"
        },
        "match": "readonly capacity: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "volumeCount": {
        "comment": {
          "params": {},
          "remarks": "Return the number of volumes (positive and negative) in the volume stack"
        },
        "match": "readonly volumeCount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "constructor": {
        "comment": {
          "params": {
            "origin": "An optional world space origin on which to center the compound volume. If not specified, the origin is set to (0,0,0)"
          },
          "remarks": "Create a CompoundBlockVolume object"
        },
        "match": "constructor(origin?: Vector3)",
        "kind": "public",
        "param": "origin?: Vector3",
        "return": "CompoundBlockVolume"
      },
      "clear": {
        "comment": {
          "params": {},
          "remarks": "Clear the contents of the volume stack This function can't be called in read-only mode."
        },
        "match": "clear(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "getBlockLocationIterator": {
        "comment": {
          "params": {},
          "remarks": "Fetch a Block Location Iterator for the Compound Block Volume.  This iterator will allow a creator to iterate across all of the selected volumes within the larger bounding area. Areas of a volume which have been overridden by a subtractive volume will not be included in the iterator step. (i.e. if you push a cube to the stack, and then push a subtractive volume to the same location, then the iterator will step over the initial volume because it is considered negative space) Note that the Block Locations returned by this iterator are in absolute world space (irrespective of whether the compound volume items pushed are absolute or relative) This function can't be called in read-only mode."
        },
        "match": "getBlockLocationIterator(): BlockLocationIterator",
        "kind": "public",
        "param": "",
        "return": "BlockLocationIterator"
      },
      "getBoundingBox": {
        "comment": {
          "params": {},
          "remarks": "Get the largest bounding box that represents a container for all of the volumes on the stack Note that the bounding box returned is represented in absolute world space  (irrespective of whether the compound volume items pushed are absolute or relative) This function can't be called in read-only mode."
        },
        "match": "getBoundingBox(): BoundingBox",
        "kind": "public",
        "param": "",
        "return": "BoundingBox"
      },
      "getMax": {
        "comment": {
          "params": {},
          "remarks": "Get the max block location of the outermost bounding rectangle which represents the volumes on the stack. Note that the max location returned is in absolute world space (irrespective of whether the compound volume items pushed are absolute or relative) This function can't be called in read-only mode."
        },
        "match": "getMax(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getMin": {
        "comment": {
          "params": {},
          "remarks": "Get the min block location of the outermost bounding rectangle which represents the volumes on the stack. Note that the min location returned is in absolute world space (irrespective of whether the compound volume items pushed are absolute or relative) This function can't be called in read-only mode."
        },
        "match": "getMin(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getOrigin": {
        "comment": {
          "params": {},
          "remarks": "Fetch the origin in world space of the compound volume This function can't be called in read-only mode."
        },
        "match": "getOrigin(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "isEmpty": {
        "comment": {
          "params": {},
          "remarks": "Return a boolean which signals if there are any volume items pushed to the volume This function can't be called in read-only mode."
        },
        "match": "isEmpty(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "isInside": {
        "comment": {
          "params": {},
          "remarks": "Return a boolean representing whether or not a given absolute world space block location is inside a positive block volume. E.g. if the stack contains a large cube followed by a slightly smaller negative cube, and the test location is within the negative cube - the function will return false because it's not 'inside' a volume (it IS inside the bounding rectangle, but it is not inside a positively defined location) This function can't be called in read-only mode."
        },
        "match": "isInside(worldLocation: Vector3): boolean",
        "kind": "public",
        "param": "worldLocation: Vector3",
        "return": "boolean"
      },
      "peekLastVolume": {
        "comment": {
          "params": {
            "forceRelativity": "Determine whether the function returns a CompoundBlockVolumeItem which is forced into either relative or absolute coordinate system. `true` = force returned item to be relative to volume origin `false` = force returned item to be absolute world space location If no flag is specified, the item returned retains whatever relativity it had when it was pushed"
          },
          "remarks": "Inspect the last entry pushed to the volume stack without affecting the stack contents. This function can't be called in read-only mode.",
          "returns": "Returns undefined if the stack is empty"
        },
        "match": "peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined",
        "kind": "public",
        "param": "forceRelativity?: CompoundBlockVolumePositionRelativity",
        "return": "CompoundBlockVolumeItem | undefined"
      },
      "popVolume": {
        "comment": {
          "params": {},
          "remarks": "Remove the last entry from the volume stack.  This will reduce the stack size by one This function can't be called in read-only mode."
        },
        "match": "popVolume(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "pushVolume": {
        "comment": {
          "params": {
            "item": "Item to push to the end of the stack"
          },
          "remarks": "Push a volume item to the stack.  The volume item contains an 'action' parameter which determines whether this volume is a positive or negative space. The item also contains a `locationRelativity` which determines whether it is relative or absolute to the compound volume origin This function can't be called in read-only mode."
        },
        "match": "pushVolume(item: CompoundBlockVolumeItem): void",
        "kind": "public",
        "param": "item: CompoundBlockVolumeItem",
        "return": "void"
      },
      "replaceOrAddLastVolume": {
        "comment": {
          "params": {
            "item": "Item to add or replace"
          },
          "remarks": "If the volume stack is empty, this function will push the specified item to the stack. If the volume stack is NOT empty, this function will replace the last item on the stack with the new item. This function can't be called in read-only mode."
        },
        "match": "replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean",
        "kind": "public",
        "param": "item: CompoundBlockVolumeItem",
        "return": "boolean"
      },
      "setOrigin": {
        "comment": {
          "params": {
            "preserveExistingVolumes": "This optional boolean flag determines whether the relative `CompoundBlockVolumeItem`'s are frozen in place, or are affected by the new origin. Imagine a scenario where you have a series of relative locations around an origin which make up a sphere; all of these locations are in the range of -2 to 2. Push each of these locations to the compound volume as relative items. Now, move the origin and all of the locations representing the sphere move accordingly. However, let's say you want to add a 2nd sphere next to the 1st. In this case, set the new origin a few locations over, but 'preserveExistingVolumes' = true. This will set a new origin, but the existing sphere locations will remain relative to the original origin. Now, you can push the relative sphere locations again (this time they will be relative to the new origin) - resulting in 2 spheres next to each other."
          },
          "remarks": "Set the origin of the compound volume to an absolute world space location This function can't be called in read-only mode."
        },
        "match": "setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void",
        "kind": "public",
        "param": "position: Vector3, preserveExistingVolumes?: boolean",
        "return": "void"
      },
      "translateOrigin": {
        "comment": {
          "params": {
            "preserveExistingVolumes": "See the description for the arguments to {@link"
          },
          "remarks": "Similar to {@link",
          "minecraft-server/CompoundBlockVolume.setOrigin}": ""
        },
        "match": "translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void",
        "kind": "public",
        "param": "delta: Vector3, preserveExistingVolumes?: boolean",
        "return": "void"
      }
    },
    "Container": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Container"
      },
      "emptySlotsCount": {
        "comment": {
          "params": {},
          "remarks": "Count of the slots in the container that are empty.",
          "throws": "Throws if the container is invalid."
        },
        "match": "readonly emptySlotsCount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "size": {
        "comment": {
          "params": {},
          "remarks": "The number of slots in this container. For example, a standard single-block chest has a size of 27. Note, a player's inventory container contains a total of 36 slots, 9 hotbar slots plus 27 inventory slots.",
          "throws": "Throws if the container is invalid."
        },
        "match": "readonly size: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "addItem": {
        "comment": {
          "params": {
            "itemStack": "The stack of items to add."
          },
          "remarks": "Adds an item to the container. The item is placed in the first available slot(s) and can be stacked with existing items of the same type. Note, use {@link Container.setItem} if you wish to set the item in a particular slot. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "addItem(itemStack: ItemStack): ItemStack | undefined",
        "kind": "public",
        "param": "itemStack: ItemStack",
        "return": "ItemStack | undefined"
      },
      "clearAll": {
        "comment": {
          "params": {},
          "remarks": "Clears all inventory items in the container. This function can't be called in read-only mode.",
          "throws": "Throws if the container is invalid."
        },
        "match": "clearAll(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "getItem": {
        "comment": {
          "params": {
            "slot": "Zero-based index of the slot to retrieve items from."
          },
          "remarks": "Gets an {@link ItemStack} of the item at the specified slot. If the slot is empty, returns `undefined`. This method does not change or clear the contents of the specified slot. To get a reference to a particular slot, see {@link Container.getSlot}.",
          "throws": "Throws if the container is invalid or if the `slot` index is out of bounds.",
          "example": "```typescript // Get a copy of the first item in the player's hotbar const inventory = player.getComponent(\"inventory\") as EntityInventoryComponent; const itemStack = inventory.container.getItem(0); ```"
        },
        "match": "getItem(slot: number): ItemStack | undefined",
        "kind": "public",
        "param": "slot: number",
        "return": "ItemStack | undefined"
      },
      "getSlot": {
        "comment": {
          "params": {
            "slot": "The index of the slot to return. This index must be within the bounds of the container."
          },
          "beta": "",
          "remarks": "Returns a container slot. This acts as a reference to a slot at the given index for this container.",
          "throws": "Throws if the container is invalid or if the `slot` index is out of bounds."
        },
        "match": "getSlot(slot: number): ContainerSlot",
        "kind": "public",
        "param": "slot: number",
        "return": "ContainerSlot"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether a container object (or the entity or block that this container is associated with) is still available for use in this context."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "moveItem": {
        "comment": {
          "params": {
            "fromSlot": "Zero-based index of the slot to transfer an item from, on this container.",
            "toSlot": "Zero-based index of the slot to transfer an item to, on `toContainer`.",
            "toContainer": "Target container to transfer to. Note this can be the same container as the source."
          },
          "remarks": "Moves an item from one slot to another, potentially across containers. This function can't be called in read-only mode.",
          "throws": "Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.",
          "example": "```typescript // Move an item from the first slot of fromPlayer's inventory to the fifth slot of toPlayer's inventory const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent; const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent; fromInventory.container.moveItem(0, 4, toInventory.container); ```"
        },
        "match": "moveItem(fromSlot: number, toSlot: number, toContainer: Container): void",
        "kind": "public",
        "param": "fromSlot: number, toSlot: number, toContainer: Container",
        "return": "void"
      },
      "setItem": {
        "comment": {
          "params": {
            "slot": "Zero-based index of the slot to set an item at.",
            "itemStack": "Stack of items to place within the specified slot. Setting `itemStack` to undefined will clear the slot."
          },
          "remarks": "Sets an item stack within a particular slot. This function can't be called in read-only mode.",
          "throws": "Throws if the container is invalid or if the `slot` index is out of bounds."
        },
        "match": "setItem(slot: number, itemStack?: ItemStack): void",
        "kind": "public",
        "param": "slot: number, itemStack?: ItemStack",
        "return": "void"
      },
      "swapItems": {
        "comment": {
          "params": {
            "slot": "Zero-based index of the slot to swap from this container.",
            "otherSlot": "Zero-based index of the slot to swap with.",
            "otherContainer": "Target container to swap with. Note this can be the same container as this source."
          },
          "remarks": "Swaps items between two different slots within containers. This function can't be called in read-only mode.",
          "throws": "Throws if either this container or `otherContainer` are invalid or if the `slot` or `otherSlot` are out of bounds.",
          "example": "```typescript // Swaps an item between slots 0 and 4 in the player's inventory const inventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent; inventory.container.swapItems(0, 4, inventory); ```"
        },
        "match": "swapItems(slot: number, otherSlot: number, otherContainer: Container): void",
        "kind": "public",
        "param": "slot: number, otherSlot: number, otherContainer: Container",
        "return": "void"
      },
      "transferItem": {
        "comment": {
          "params": {
            "fromSlot": "Zero-based index of the slot to transfer an item from, on this container.",
            "toContainer": "Target container to transfer to. Note this can be the same container as the source."
          },
          "remarks": "Moves an item from one slot to another container, or to the first available slot in the same container. This function can't be called in read-only mode.",
          "returns": "An itemStack with the items that couldn't be transferred. Returns undefined if all items were transferred.",
          "throws": "Throws if either this container or `toContainer` are invalid or if the `fromSlot` or `toSlot` indices out of bounds.",
          "example": "```typescript // Transfer an item from the first slot of fromPlayer's inventory to toPlayer's inventory const fromInventory = fromPlayer.getComponent('inventory') as EntityInventoryComponent; const toInventory = toPlayer.getComponent('inventory') as EntityInventoryComponent; fromInventory.container.transferItem(0, toInventory.container); ```"
        },
        "match": "transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined",
        "kind": "public",
        "param": "fromSlot: number, toContainer: Container",
        "return": "ItemStack | undefined"
      }
    },
    "ContainerSlot": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ContainerSlot"
      },
      "amount": {
        "comment": {
          "params": {},
          "remarks": "Number of the items in the stack. Valid values range between 1-255. The provided value will be clamped to the item's maximum stack size. This property can't be edited in read-only mode.",
          "throws": "Throws if the value is outside the range of 1-255."
        },
        "match": "amount: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isStackable": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the item is stackable. An item is considered stackable if the item's maximum stack size is greater than 1 and the item does not contain any custom data or properties.",
          "throws": "Throws if the slot's container is invalid."
        },
        "match": "readonly isStackable: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "keepOnDeath": {
        "comment": {
          "params": {},
          "remarks": "Gets or sets whether the item is kept on death. This property can't be edited in read-only mode.",
          "throws": "Throws if the slot's container is invalid."
        },
        "match": "keepOnDeath: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "lockMode": {
        "comment": {
          "params": {},
          "remarks": "Gets or sets the item's lock mode. The default value is `ItemLockMode.none`. This property can't be edited in read-only mode.",
          "throws": "Throws if the slot's container is invalid."
        },
        "match": "lockMode: ItemLockMode",
        "kind": "public",
        "param": "",
        "return": "ItemLockMode"
      },
      "maxAmount": {
        "comment": {
          "params": {},
          "remarks": "The maximum stack size. This value varies depending on the type of item. For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16.",
          "throws": "Throws if the slot's container is invalid."
        },
        "match": "readonly maxAmount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "getItem": {
        "comment": {
          "params": {},
          "remarks": "Given name of this stack of items. The name tag is displayed when hovering over the item. Setting the name tag to an empty string or `undefined` will remove the name tag. This property can't be edited in read-only mode.",
          "throws": "Throws if the slot's container is invalid. Also throws if the length exceeds 255 characters."
        },
        "match": "getItem(): ItemStack | undefined",
        "kind": "public",
        "param": "",
        "return": "ItemStack | undefined"
      },
      "getLore": {
        "comment": {
          "params": {},
          "remarks": "Returns the lore value - a secondary display string - for an ItemStack.",
          "returns": "An array of lore strings. If the item does not have lore, returns an empty array.",
          "throws": "Throws if the slot's container is invalid."
        },
        "match": "getLore(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getTags": {
        "comment": {
          "params": {},
          "remarks": "Returns all tags for the item in the slot.",
          "returns": "Returns all tags for the item in the slot. Return an empty array if the the slot is empty.",
          "throws": "function can throw errors."
        },
        "match": "getTags(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "hasTag": {
        "comment": {
          "params": {
            "tag": "The item tag."
          },
          "remarks": "Returns whether the item in the slot slot has the given tag.",
          "returns": "Returns false when the slot is empty or the item in the slot does not have the given tag.",
          "throws": "function can throw errors."
        },
        "match": "hasTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "isStackableWith": {
        "comment": {
          "params": {
            "itemStack": "The ItemStack that is being compared."
          },
          "remarks": "Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration.",
          "returns": "Returns whether this item stack can be stacked with the given `itemStack`.",
          "throws": "Throws if the slot's container is invalid."
        },
        "match": "isStackableWith(itemStack: ItemStack): boolean",
        "kind": "public",
        "param": "itemStack: ItemStack",
        "return": "boolean"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the ContainerSlot is valid. The container slot is valid if the container exists and is loaded, and the slot index is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "setCanDestroy": {
        "comment": {
          "params": {
            "blockIdentifiers": "The list of blocks, given by their identifiers."
          },
          "remarks": "The list of block types this item can break in Adventure mode. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list. This function can't be called in read-only mode.",
          "throws": "Throws if the slot's container is invalid. Also throws if any of the provided block identifiers are invalid."
        },
        "match": "setCanDestroy(blockIdentifiers?: string[]): void",
        "kind": "public",
        "param": "blockIdentifiers?: string[]",
        "return": "void"
      },
      "setCanPlaceOn": {
        "comment": {
          "params": {
            "blockIdentifiers": "The list of blocks, given by their identifiers."
          },
          "remarks": "The list of block types this item can be placed on in Adventure mode. This is only applicable to block items. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list. This function can't be called in read-only mode.",
          "throws": "Throws if the slot's container is invalid. Also throws if any of the provided block identifiers are invalid."
        },
        "match": "setCanPlaceOn(blockIdentifiers?: string[]): void",
        "kind": "public",
        "param": "blockIdentifiers?: string[]",
        "return": "void"
      },
      "setItem": {
        "comment": {
          "params": {
            "itemStack": "The ItemStack to be placed in the slot."
          },
          "remarks": "Sets the given ItemStack in the slot, replacing any existing item. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setItem(itemStack?: ItemStack): void",
        "kind": "public",
        "param": "itemStack?: ItemStack",
        "return": "void"
      },
      "setLore": {
        "comment": {
          "params": {
            "loreList": "A list of lore strings. Setting this argument to undefined will clear the lore."
          },
          "remarks": "Sets the lore value - a secondary display string - for an ItemStack. This function can't be called in read-only mode.",
          "throws": "Throws if the slot's container is invalid."
        },
        "match": "setLore(loreList?: string[]): void",
        "kind": "public",
        "param": "loreList?: string[]",
        "return": "void"
      }
    },
    "DataDrivenEntityTriggerAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "DataDrivenEntityTriggerAfterEvent"
      },
      "entity": {
        "comment": {
          "params": {},
          "remarks": "Entity that the event triggered on."
        },
        "match": "readonly entity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "eventId": {
        "comment": {
          "params": {},
          "remarks": "Name of the data driven event being triggered."
        },
        "match": "readonly eventId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "getModifiers": {
        "comment": {
          "params": {},
          "remarks": "An updateable list of modifications to component state that are the effect of this triggered event."
        },
        "match": "getModifiers(): DefinitionModifier[]",
        "kind": "public",
        "param": "",
        "return": "DefinitionModifier[]"
      }
    },
    "DataDrivenEntityTriggerAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "DataDrivenEntityTriggerAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called after a data driven entity event is triggered. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,options?: EntityDataDrivenTriggerEventOptions,): (arg: DataDrivenEntityTriggerAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,options?: EntityDataDrivenTriggerEventOptions,",
        "return": "(arg: DataDrivenEntityTriggerAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback that will be called after a data driven entity event is triggered. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: DataDrivenEntityTriggerAfterEvent) => void",
        "return": "void"
      }
    },
    "DataDrivenEntityTriggerBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "DataDrivenEntityTriggerBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true, this entity event is not triggered."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "entity": {
        "comment": {
          "params": {},
          "remarks": "Entity that the event triggered on."
        },
        "match": "readonly entity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Name of the data driven event being triggered."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "getModifiers": {
        "comment": {
          "params": {},
          "remarks": "An updateable list of modifications to component state that are the effect of this triggered event."
        },
        "match": "getModifiers(): DefinitionModifier[]",
        "kind": "public",
        "param": "",
        "return": "DefinitionModifier[]"
      },
      "setModifiers": {
        "comment": {
          "params": {
            "modifiers": "An updated list of modifications to component state."
          },
          "remarks": "Changes a list of modifications to component state that are the effect of this triggered event."
        },
        "match": "setModifiers(modifiers: DefinitionModifier[]): void",
        "kind": "public",
        "param": "modifiers: DefinitionModifier[]",
        "return": "void"
      }
    },
    "DataDrivenEntityTriggerBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "DataDrivenEntityTriggerBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before a data driven entity event is triggered. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void,options?: EntityDataDrivenTriggerEventOptions,): (arg: DataDrivenEntityTriggerBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void,options?: EntityDataDrivenTriggerEventOptions,",
        "return": "(arg: DataDrivenEntityTriggerBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback that will be called before a data driven entity event is triggered. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void",
        "return": "void"
      }
    },
    "Dimension": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Dimension"
      },
      "heightRange": {
        "comment": {
          "params": {},
          "remarks": "Height range of the dimension.",
          "throws": "property can throw when used."
        },
        "match": "readonly heightRange: minecraftcommon.NumberRange",
        "kind": "readonly",
        "param": "",
        "return": "minecraftcommon.NumberRange"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the dimension."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "createExplosion": {
        "comment": {
          "params": {
            "location": "The location of the explosion.",
            "radius": "Radius, in blocks, of the explosion to create.",
            "explosionOptions": "Additional configurable options for the explosion."
          },
          "beta": "",
          "remarks": "Creates an explosion at the specified location. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}",
          "example": "```typescript const overworld = mc.world.getDimension(\"overworld\"); const explodeNoBlocksLoc = { x: Math.floor(targetLocation.x + 1), y: Math.floor(targetLocation.y + 2), z: Math.floor(targetLocation.z + 1) }; log(\"Creating an explosion of radius 15 that does not break blocks.\"); overworld.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false }); ```"
        },
        "match": "createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): void",
        "kind": "public",
        "param": "location: Vector3, radius: number, explosionOptions?: ExplosionOptions",
        "return": "void"
      },
      "fillBlocks": {
        "comment": {
          "params": {
            "begin": "The lower northwest starting corner of the area.",
            "end": "The upper southeast ending corner of the area.",
            "block": "Type of block to fill the volume with.",
            "options": "A set of additional options, such as a matching block to potentially replace this fill block with."
          },
          "beta": "",
          "remarks": "Fills an area between begin and end with block of type block. This function can't be called in read-only mode.",
          "returns": "Returns number of blocks placed.",
          "throws": "function can throw errors."
        },
        "match": "fillBlocks(begin: Vector3,end: Vector3,block: BlockPermutation | BlockType | string,options?: BlockFillOptions,): number",
        "kind": "public",
        "param": "begin: Vector3,end: Vector3,block: BlockPermutation | BlockType | string,options?: BlockFillOptions,",
        "return": "number"
      },
      "getBlock": {
        "comment": {
          "params": {
            "location": "The location at which to return a block."
          },
          "remarks": "Returns a block instance at the given location.",
          "returns": "Block at the specified location, or 'undefined' if asking for a block at an unloaded chunk.",
          "throws": "PositionInUnloadedChunkError: Exception thrown when trying to interact with a Block object that isn't in a loaded and ticking chunk anymore PositionOutOfWorldBoundariesError: Exception thrown when trying to interact with a position outside of dimension height range {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "getBlock(location: Vector3): Block | undefined",
        "kind": "public",
        "param": "location: Vector3",
        "return": "Block | undefined"
      },
      "getBlockFromRay": {
        "comment": {
          "params": {
            "location": "Location from where to initiate the ray check.",
            "direction": "Vector direction to cast the ray.",
            "options": "Additional options for processing this raycast query."
          },
          "remarks": "Gets the first block that intersects with a vector emanating from a location."
        },
        "match": "getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined",
        "kind": "public",
        "param": "location: Vector3, direction: Vector3, options?: BlockRaycastOptions",
        "return": "BlockRaycastHit | undefined"
      },
      "getEntities": {
        "comment": {
          "params": {
            "options": "Additional options that can be used to filter the set of entities returned."
          },
          "remarks": "Returns a set of entities based on a set of conditions defined via the EntityQueryOptions set of filter criteria.",
          "returns": "An entity array.",
          "throws": "function can throw errors.",
          "example": "```typescript const overworld = mc.world.getDimension(\"overworld\"); const items = overworld.getEntities({ location: targetLocation, maxDistance: 20, }); for (const item of items) { const itemComp = item.getComponent(\"item\") as mc.EntityItemComponent; if (itemComp) { if (itemComp.itemStack.typeId.endsWith(\"feather\")) { log(\"Success! Found a feather\", 1); } } } ```"
        },
        "match": "getEntities(options?: EntityQueryOptions): Entity[]",
        "kind": "public",
        "param": "options?: EntityQueryOptions",
        "return": "Entity[]"
      },
      "getEntitiesAtBlockLocation": {
        "comment": {
          "params": {
            "location": "The location at which to return entities."
          },
          "remarks": "Returns a set of entities at a particular location.",
          "returns": "Zero or more entities at the specified location."
        },
        "match": "getEntitiesAtBlockLocation(location: Vector3): Entity[]",
        "kind": "public",
        "param": "location: Vector3",
        "return": "Entity[]"
      },
      "getEntitiesFromRay": {
        "comment": {
          "params": {
            "options": "Additional options for processing this raycast query."
          },
          "remarks": "Gets entities that intersect with a specified vector emanating from a location."
        },
        "match": "getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[]",
        "kind": "public",
        "param": "location: Vector3, direction: Vector3, options?: EntityRaycastOptions",
        "return": "EntityRaycastHit[]"
      },
      "getPlayers": {
        "comment": {
          "params": {
            "options": "Additional options that can be used to filter the set of players returned."
          },
          "remarks": "Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.",
          "returns": "A player array.",
          "throws": "function can throw errors."
        },
        "match": "getPlayers(options?: EntityQueryOptions): Player[]",
        "kind": "public",
        "param": "options?: EntityQueryOptions",
        "return": "Player[]"
      },
      "getWeather": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns the current weather. This function can't be called in read-only mode.",
          "returns": "Returns a WeatherType that explains the broad category of weather that is currently going on."
        },
        "match": "getWeather(): WeatherType",
        "kind": "public",
        "param": "",
        "return": "WeatherType"
      },
      "runCommand": {
        "comment": {
          "params": {
            "commandString": "Command to run. Note that command strings should not start with slash."
          },
          "remarks": "Runs a command synchronously using the context of the broader dimenion. This function can't be called in read-only mode.",
          "returns": "Returns a command result with a count of successful values from the command.",
          "throws": "Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception. {@link CommandError}"
        },
        "match": "runCommand(commandString: string): CommandResult",
        "kind": "public",
        "param": "commandString: string",
        "return": "CommandResult"
      },
      "runCommandAsync": {
        "comment": {
          "params": {
            "commandString": "Command to run. Note that command strings should not start with slash."
          },
          "remarks": "Runs a particular command asynchronously from the context of the broader dimension.  Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.",
          "returns": "For commands that return data, returns a CommandResult with an indicator of command results.",
          "throws": "Throws an exception if the command fails due to incorrect parameters or command syntax, or in erroneous cases for the command. Note that in many cases, if the command does not operate (e.g., a target selector found no matches), this method will not throw an exception."
        },
        "match": "runCommandAsync(commandString: string): Promise<CommandResult>",
        "kind": "public",
        "param": "commandString: string",
        "return": "Promise<CommandResult>"
      },
      "setWeather": {
        "comment": {
          "params": {
            "weatherType": "Set the type of weather to apply.",
            "duration": "Sets the duration of the weather (in ticks). If no duration is provided, the duration will be set to a random duration between 300 and 900 seconds."
          },
          "remarks": "Sets the current weather within the dimension This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setWeather(weatherType: WeatherType, duration?: number): void",
        "kind": "public",
        "param": "weatherType: WeatherType, duration?: number",
        "return": "void"
      },
      "spawnEntity": {
        "comment": {
          "params": {
            "identifier": "Identifier of the type of entity to spawn. If no namespace is specified, 'minecraft:' is assumed.",
            "location": "The location at which to create the entity."
          },
          "remarks": "Creates a new entity (e.g., a mob) at the specified location. This function can't be called in read-only mode.",
          "returns": "Newly created entity at the specified location.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}",
          "example": "```typescript const creeper = overworld.spawnEntity(\"minecraft:creeper\", targetLocation); creeper.triggerEvent(\"minecraft:start_exploding_forced\"); ```"
        },
        "match": "spawnEntity(identifier: string, location: Vector3): Entity",
        "kind": "public",
        "param": "identifier: string, location: Vector3",
        "return": "Entity"
      },
      "spawnItem": {
        "comment": {
          "params": {
            "location": "The location at which to create the item stack."
          },
          "remarks": "Creates a new item stack as an entity at the specified location. This function can't be called in read-only mode.",
          "returns": "Newly created item stack entity at the specified location.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}",
          "example": "```typescript const featherItem = new mc.ItemStack(mc.MinecraftItemTypes.Feather, 1); overworld.spawnItem(featherItem, targetLocation); log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`); ```"
        },
        "match": "spawnItem(itemStack: ItemStack, location: Vector3): Entity",
        "kind": "public",
        "param": "itemStack: ItemStack, location: Vector3",
        "return": "Entity"
      },
      "spawnParticle": {
        "comment": {
          "params": {
            "effectName": "Identifier of the particle to create.",
            "location": "The location at which to create the particle emitter.",
            "molangVariables": "A set of optional, customizable variables that can be adjusted for this particle."
          },
          "remarks": "Creates a new particle emitter at a specified location in the world. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link LocationInUnloadedChunkError} {@link LocationOutOfWorldBoundariesError}",
          "example": "```typescript for (let i = 0; i < 100; i++) { const molang = new mc.MolangVariableMap(); molang.setColorRGB(\"variable.color\", { red: Math.random(), green: Math.random(), blue: Math.random(), alpha: 1 }); let newLocation = { x: targetLocation.x + Math.floor(Math.random() * 8) - 4, y: targetLocation.y + Math.floor(Math.random() * 8) - 4, z: targetLocation.z + Math.floor(Math.random() * 8) - 4, }; overworld.spawnParticle(\"minecraft:colored_flame_particle\", newLocation, molang); } ```"
        },
        "match": "spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void",
        "kind": "public",
        "param": "effectName: string, location: Vector3, molangVariables?: MolangVariableMap",
        "return": "void"
      }
    },
    "DimensionType": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "DimensionType"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the dimension type."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "DimensionTypes": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "DimensionTypes"
      },
      "get": {
        "comment": {
          "params": {},
          "remarks": "Retrieves a dimension type using a string-based identifier."
        },
        "match": "static get(dimensionTypeId: string): DimensionType | undefined",
        "kind": "static",
        "param": "dimensionTypeId: string",
        "return": "DimensionType | undefined"
      },
      "getAll": {
        "comment": {
          "params": {},
          "remarks": "Retrieves an array of all dimension types."
        },
        "match": "static getAll(): DimensionType[]",
        "kind": "static",
        "param": "",
        "return": "DimensionType[]"
      }
    },
    "Effect": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Effect"
      },
      "amplifier": {
        "comment": {
          "params": {},
          "remarks": "Gets an amplifier that may have been applied to this effect. Sample values range typically from 0 to 4. Example: The effect 'Jump Boost II' will have an amplifier value of 1.",
          "throws": "property can throw when used."
        },
        "match": "readonly amplifier: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "displayName": {
        "comment": {
          "params": {},
          "remarks": "Gets the player-friendly name of this effect.",
          "throws": "property can throw when used."
        },
        "match": "readonly displayName: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "duration": {
        "comment": {
          "params": {},
          "remarks": "Gets the entire specified duration, in ticks, of this effect. There are 20 ticks per second. Use {@link TicksPerSecond} constant to convert between ticks and seconds.",
          "throws": "property can throw when used."
        },
        "match": "readonly duration: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Gets the type id of this effect.",
          "throws": "property can throw when used."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether an effect instance is available for use in this context."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EffectAddAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EffectAddAfterEvent"
      },
      "effect": {
        "comment": {
          "params": {},
          "remarks": "Additional properties and details of the effect. This property can't be edited in read-only mode."
        },
        "match": "effect: Effect",
        "kind": "public",
        "param": "",
        "return": "Effect"
      },
      "entity": {
        "comment": {
          "params": {},
          "remarks": "Entity that the effect is being added to. This property can't be edited in read-only mode."
        },
        "match": "entity: Entity",
        "kind": "public",
        "param": "",
        "return": "Entity"
      }
    },
    "EffectAddAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EffectAddAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an effect is added to an entity. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: EffectAddAfterEvent) => void,options?: EntityEventOptions,): (arg: EffectAddAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EffectAddAfterEvent) => void,options?: EntityEventOptions,",
        "return": "(arg: EffectAddAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an effect is added to an entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EffectAddAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EffectAddAfterEvent) => void",
        "return": "void"
      }
    },
    "EffectAddBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EffectAddBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "When set to true will cancel the event."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "duration": {
        "comment": {
          "params": {},
          "remarks": "Effect duration."
        },
        "match": "duration: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "effectType": {
        "comment": {
          "params": {},
          "remarks": "The type of the effect that is being added."
        },
        "match": "readonly effectType: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "entity": {
        "comment": {
          "params": {},
          "remarks": "Entity that the effect is being added to."
        },
        "match": "readonly entity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      }
    },
    "EffectAddBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EffectAddBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an effect is added to an entity. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EffectAddBeforeEvent) => void",
        "return": "(arg: EffectAddBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an effect is added to an entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EffectAddBeforeEvent) => void",
        "return": "void"
      }
    },
    "EffectType": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EffectType"
      },
      "getName": {
        "comment": {
          "params": {},
          "remarks": "Identifier name of this effect type.",
          "returns": "Identifier of the effect type."
        },
        "match": "getName(): string",
        "kind": "public",
        "param": "",
        "return": "string"
      }
    },
    "EffectTypes": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EffectTypes"
      },
      "get": {
        "comment": {
          "params": {},
          "remarks": "Effect type for the given identifier. This function can't be called in read-only mode.",
          "returns": "Effect type for the given identifier or undefined if the effect does not exist."
        },
        "match": "static get(identifier: string): EffectType | undefined",
        "kind": "static",
        "param": "identifier: string",
        "return": "EffectType | undefined"
      },
      "getAll": {
        "comment": {
          "params": {},
          "remarks": "Gets all effects. This function can't be called in read-only mode.",
          "returns": "A list of all effects."
        },
        "match": "static getAll(): EffectType[]",
        "kind": "static",
        "param": "",
        "return": "EffectType[]"
      }
    },
    "Enchantment": {
      "level": {
        "comment": {
          "params": {},
          "remarks": "The level of this enchantment instance. This property can't be edited in read-only mode."
        },
        "match": "level: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "constructor": {
        "comment": {
          "params": {},
          "remarks": "The enchantment type of this instance."
        },
        "match": "constructor(enchantmentType: EnchantmentType | string, level?: number)",
        "kind": "public",
        "param": "enchantmentType: EnchantmentType | string, level?: number",
        "return": "Enchantment"
      }
    },
    "EnchantmentList": {
      "slot": {
        "comment": {
          "params": {},
          "remarks": "The item slot/type that this collection is applied to."
        },
        "match": "readonly slot: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "constructor": {
        "comment": {
          "params": {},
          "remarks": "Creates a new EnchantmentList."
        },
        "match": "constructor(enchantmentSlot: number)",
        "kind": "public",
        "param": "enchantmentSlot: number",
        "return": "EnchantmentList"
      },
      "addEnchantment": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode."
        },
        "match": "addEnchantment(enchantment: Enchantment): boolean",
        "kind": "public",
        "param": "enchantment: Enchantment",
        "return": "boolean"
      },
      "canAddEnchantment": {
        "comment": {
          "params": {},
          "remarks": "Returns whether or not the provided EnchantmentInstance can be added to this collection. This function can't be called in read-only mode."
        },
        "match": "canAddEnchantment(enchantment: Enchantment): boolean",
        "kind": "public",
        "param": "enchantment: Enchantment",
        "return": "boolean"
      },
      "getEnchantment": {
        "comment": {
          "params": {},
          "remarks": "Returns an enchantment associated with a type. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined",
        "kind": "public",
        "param": "enchantmentType: EnchantmentType | string",
        "return": "Enchantment | undefined"
      },
      "hasEnchantment": {
        "comment": {
          "params": {},
          "remarks": "If this collection has an EnchantmentInstance with type, returns the level of the enchantment. Returns 0 if not present.",
          "throws": "function can throw errors."
        },
        "match": "hasEnchantment(enchantmentType: EnchantmentType | string): number",
        "kind": "public",
        "param": "enchantmentType: EnchantmentType | string",
        "return": "number"
      },
      "next": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode."
        },
        "match": "next(): IteratorResult<Enchantment>",
        "kind": "public",
        "param": "",
        "return": "IteratorResult<Enchantment>"
      },
      "removeEnchantment": {
        "comment": {
          "params": {},
          "remarks": "Removes an EnchantmentInstance with type from this collection if present. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "removeEnchantment(enchantmentType: EnchantmentType | string): void",
        "kind": "public",
        "param": "enchantmentType: EnchantmentType | string",
        "return": "void"
      }
    },
    "EnchantmentSlot": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EnchantmentSlot"
      },
      "all": {
        "comment": {
          "params": {}
        },
        "match": "static readonly all = -1",
        "kind": "static readonly",
        "param": "",
        "return": "-1"
      },
      "armorFeet": {
        "comment": {
          "params": {}
        },
        "match": "static readonly armorFeet = 4",
        "kind": "static readonly",
        "param": "",
        "return": "4"
      },
      "armorHead": {
        "comment": {
          "params": {}
        },
        "match": "static readonly armorHead = 1",
        "kind": "static readonly",
        "param": "",
        "return": "1"
      },
      "armorLegs": {
        "comment": {
          "params": {}
        },
        "match": "static readonly armorLegs = 8",
        "kind": "static readonly",
        "param": "",
        "return": "8"
      },
      "armorTorso": {
        "comment": {
          "params": {}
        },
        "match": "static readonly armorTorso = 2",
        "kind": "static readonly",
        "param": "",
        "return": "2"
      },
      "axe": {
        "comment": {
          "params": {}
        },
        "match": "static readonly axe = 512",
        "kind": "static readonly",
        "param": "",
        "return": "512"
      },
      "bow": {
        "comment": {
          "params": {}
        },
        "match": "static readonly bow = 32",
        "kind": "static readonly",
        "param": "",
        "return": "32"
      },
      "carrotStick": {
        "comment": {
          "params": {}
        },
        "match": "static readonly carrotStick = 8192",
        "kind": "static readonly",
        "param": "",
        "return": "8192"
      },
      "cosmeticHead": {
        "comment": {
          "params": {}
        },
        "match": "static readonly cosmeticHead = 262144",
        "kind": "static readonly",
        "param": "",
        "return": "262144"
      },
      "crossbow": {
        "comment": {
          "params": {}
        },
        "match": "static readonly crossbow = 65536",
        "kind": "static readonly",
        "param": "",
        "return": "65536"
      },
      "elytra": {
        "comment": {
          "params": {}
        },
        "match": "static readonly elytra = 16384",
        "kind": "static readonly",
        "param": "",
        "return": "16384"
      },
      "fishingRod": {
        "comment": {
          "params": {}
        },
        "match": "static readonly fishingRod = 4096",
        "kind": "static readonly",
        "param": "",
        "return": "4096"
      },
      "flintsteel": {
        "comment": {
          "params": {}
        },
        "match": "static readonly flintsteel = 256",
        "kind": "static readonly",
        "param": "",
        "return": "256"
      },
      "gArmor": {
        "comment": {
          "params": {}
        },
        "match": "static readonly gArmor = 15",
        "kind": "static readonly",
        "param": "",
        "return": "15"
      },
      "gDigging": {
        "comment": {
          "params": {}
        },
        "match": "static readonly gDigging = 3648",
        "kind": "static readonly",
        "param": "",
        "return": "3648"
      },
      "gTool": {
        "comment": {
          "params": {}
        },
        "match": "static readonly gTool = 131520",
        "kind": "static readonly",
        "param": "",
        "return": "131520"
      },
      "hoe": {
        "comment": {
          "params": {}
        },
        "match": "static readonly hoe = 64",
        "kind": "static readonly",
        "param": "",
        "return": "64"
      },
      "none": {
        "comment": {
          "params": {}
        },
        "match": "static readonly none = 0",
        "kind": "static readonly",
        "param": "",
        "return": "0"
      },
      "pickaxe": {
        "comment": {
          "params": {}
        },
        "match": "static readonly pickaxe = 1024",
        "kind": "static readonly",
        "param": "",
        "return": "1024"
      },
      "shears": {
        "comment": {
          "params": {}
        },
        "match": "static readonly shears = 128",
        "kind": "static readonly",
        "param": "",
        "return": "128"
      },
      "shield": {
        "comment": {
          "params": {}
        },
        "match": "static readonly shield = 131072",
        "kind": "static readonly",
        "param": "",
        "return": "131072"
      },
      "shovel": {
        "comment": {
          "params": {}
        },
        "match": "static readonly shovel = 2048",
        "kind": "static readonly",
        "param": "",
        "return": "2048"
      },
      "spear": {
        "comment": {
          "params": {}
        },
        "match": "static readonly spear = 32768",
        "kind": "static readonly",
        "param": "",
        "return": "32768"
      },
      "sword": {
        "comment": {
          "params": {}
        },
        "match": "static readonly sword = 16",
        "kind": "static readonly",
        "param": "",
        "return": "16"
      }
    },
    "EnchantmentType": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EnchantmentType"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "The name of the enchantment type."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "maxLevel": {
        "comment": {
          "params": {},
          "remarks": "The maximum level this type of enchantment can have."
        },
        "match": "readonly maxLevel: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      }
    },
    "EnchantmentTypes": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EnchantmentTypes"
      },
      "get": {
        "comment": {
          "params": {
            "enchantmentId": "Identifier of the enchantment.  For example, \"minecraft:flame\"."
          },
          "remarks": "Retrieves an enchantment with the specified identifier.",
          "returns": "If available, returns an EnchantmentType object that represents the specified enchantment."
        },
        "match": "static get(enchantmentId: string): EnchantmentType | undefined",
        "kind": "static",
        "param": "enchantmentId: string",
        "return": "EnchantmentType | undefined"
      }
    },
    "Entity": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Entity"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that the entity is currently within.",
          "throws": "property can throw when used."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "fallDistance": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The distance an entity has fallen. The value is reset when the entity is teleported. The value is always 1 when gliding with Elytra.",
          "throws": "property can throw when used."
        },
        "match": "readonly fallDistance: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Unique identifier of the entity. This identifier is intended to be consistent across loads of a world instance. No meaning should be inferred from the value and structure of this unique identifier - do not parse or interpret it. This property is accessible even if {@link Entity.isValid} is false."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isClimbing": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is touching a climbable block. For example, a player next to a ladder or a spider next to a stone wall.",
          "throws": "property can throw when used."
        },
        "match": "readonly isClimbing: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isFalling": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity has a fall distance greater than 0, or greater than 1 while gliding.",
          "throws": "property can throw when used."
        },
        "match": "readonly isFalling: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isInWater": {
        "comment": {
          "params": {},
          "remarks": "Whether any part of the entity is inside a water block.",
          "throws": "property can throw when used."
        },
        "match": "readonly isInWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isOnGround": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is on top of a solid block.",
          "throws": "property can throw when used."
        },
        "match": "readonly isOnGround: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSleeping": {
        "comment": {
          "params": {},
          "remarks": "If true, the entity is currently sleeping.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSleeping: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSneaking": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is sneaking - that is, moving more slowly and more quietly. This property can't be edited in read-only mode."
        },
        "match": "isSneaking: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "isSprinting": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is sprinting. For example, a player using the sprint action, an ocelot running away or a pig boosting with Carrot on a Stick.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSprinting: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSwimming": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is in the swimming state. For example, a player using the swim action or a fish in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSwimming: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "lifetimeState": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Whether the entity reference that you have is valid or not. For example, an entity may be unloaded if it moves into a chunk that is unloaded, but may be reactivated if the chunk it is within gets reloaded."
        },
        "match": "readonly lifetimeState: EntityLifetimeState",
        "kind": "readonly",
        "param": "",
        "return": "EntityLifetimeState"
      },
      "location": {
        "comment": {
          "params": {},
          "remarks": "Current location of the entity.",
          "throws": "property can throw when used."
        },
        "match": "readonly location: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "nameTag": {
        "comment": {
          "params": {},
          "remarks": "Given name of the entity. This property can't be edited in read-only mode."
        },
        "match": "nameTag: string",
        "kind": "public",
        "param": "",
        "return": "string"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Returns a scoreboard identity that represents this entity. Will remain valid when the entity is killed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "addEffect": {
        "comment": {
          "params": {
            "effectType": "Type of effect to add to the entity.",
            "duration": "Amount of time, in ticks, for the effect to apply. There are 20 ticks per second. Use {@link TicksPerSecond} constant to convert between ticks and seconds. The value must be within the range [0, 20000000].",
            "options": "Additional options for the effect."
          },
          "remarks": "Adds or updates an effect, like poison, to the entity. This function can't be called in read-only mode.",
          "returns": "Returns nothing if the effect was added or updated successfully. This can throw an error if the duration or amplifier are outside of the valid ranges, or if the effect does not exist.",
          "throws": "function can throw errors.",
          "example": "```typescript const overworld = mc.world.getDimension(\"overworld\"); const fox = overworld.spawnEntity(\"minecraft:fox\", { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 3, }); fox.addEffect(\"speed\", 10, { amplifier: 2, }); log(\"Created a fox.\"); const wolf = overworld.spawnEntity(\"minecraft:wolf\", { x: targetLocation.x + 4, y: targetLocation.y + 2, z: targetLocation.z + 3, }); wolf.addEffect(\"slowness\", 10, { amplifier: 2, }); wolf.isSneaking = true; log(\"Created a sneaking wolf.\", 1); ```"
        },
        "match": "addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void",
        "kind": "public",
        "param": "effectType: EffectType | string, duration: number, options?: EntityEffectOptions",
        "return": "void"
      },
      "addTag": {
        "comment": {
          "params": {
            "tag": "Content of the tag to add. The tag must be less than 256 characters."
          },
          "remarks": "Adds a specified tag to an entity. This function can't be called in read-only mode.",
          "returns": "Returns true if the tag was added successfully. This can fail if the tag already exists on the entity.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { let mobTypeId = mobs[i % mobs.length]; let entity = overworld.spawnEntity(mobTypeId, targetLocation); entity.addTag(\"mobparty.\" + mobTypeId); } let eqo: mc.EntityQueryOptions = { tags: [\"mobparty.skeleton\"], }; for (let entity of overworld.getEntities(eqo)) { entity.kill(); } ```"
        },
        "match": "addTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "applyDamage": {
        "comment": {
          "params": {
            "amount": "Amount of damage to apply.",
            "options": "Additional options about the source of damage, which may add additional effects or spur additional behaviors on this entity."
          },
          "remarks": "Applies a set of damage to an entity. This function can't be called in read-only mode.",
          "returns": "Whether the entity takes any damage. This can return false if the entity is invulnerable or if the damage applied is less than or equal to 0.",
          "throws": "function can throw errors.",
          "example": "```typescript const skelly = overworld.spawnEntity(\"minecraft:skeleton\", targetLocation); skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton mc.system.runTimeout(() => { let health = skelly.getComponent(\"health\") as mc.EntityHealthComponent; log(\"Skeleton health before heal: \" + health.currentValue); health.resetToMaxValue(); log(\"Skeleton health after heal: \" + health.currentValue); }, 20); ```"
        },
        "match": "applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean",
        "kind": "public",
        "param": "amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions",
        "return": "boolean"
      },
      "applyImpulse": {
        "comment": {
          "params": {
            "vector": "Impulse vector."
          },
          "remarks": "Applies impulse vector to the current velocity of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const zombie = overworld.spawnEntity(\"minecraft:zombie\", targetLocation); zombie.clearVelocity(); // throw the zombie up in the air zombie.applyImpulse({ x: 0, y: 0.5, z: 0 }); ```"
        },
        "match": "applyImpulse(vector: Vector3): void",
        "kind": "public",
        "param": "vector: Vector3",
        "return": "void"
      },
      "applyKnockback": {
        "comment": {
          "params": {
            "directionX": "X direction in horizontal plane.",
            "directionZ": "Z direction in horizontal plane.",
            "horizontalStrength": "Knockback strength for the horizontal vector.",
            "verticalStrength": "Knockback strength for the vertical vector."
          },
          "remarks": "Applies impulse vector to the current velocity of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { overworld.spawnEntity(mobs[i % mobs.length], targetLocation); } let eqo: mc.EntityQueryOptions = { type: \"skeleton\", }; for (let entity of overworld.getEntities(eqo)) { entity.applyKnockback(0, 0, 0, 1); } ```"
        },
        "match": "applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void",
        "kind": "public",
        "param": "directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number",
        "return": "void"
      },
      "clearDynamicProperties": {
        "comment": {
          "params": {},
          "remarks": "Clears all dynamic properties that have been set on this entity.",
          "throws": "function can throw errors."
        },
        "match": "clearDynamicProperties(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "clearVelocity": {
        "comment": {
          "params": {},
          "remarks": "Sets the current velocity of the Entity to zero. Note that this method may not have an impact on Players. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const zombie = overworld.spawnEntity(\"minecraft:zombie\", targetLocation); zombie.clearVelocity(); // throw the zombie up in the air zombie.applyImpulse({ x: 0, y: 0.5, z: 0 }); ```"
        },
        "match": "clearVelocity(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "extinguishFire": {
        "comment": {
          "params": {
            "useEffects": "Whether to show any visual effects connected to the extinguishing."
          },
          "beta": "",
          "remarks": "Extinguishes the fire if the entity is on fire. Note that you can call getComponent('minecraft:onfire') and, if present, the entity is on fire. This function can't be called in read-only mode.",
          "returns": "Returns whether the entity was on fire.",
          "throws": "function can throw errors.",
          "example": "```typescript const cow = overworld.spawnEntity(\"minecraft:cow\", targetLocation); mc.system.runTimeout(() => { cow.teleport( { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 }, { facingLocation: targetLocation, } ); }, 20); ```"
        },
        "match": "extinguishFire(useEffects?: boolean): boolean",
        "kind": "public",
        "param": "useEffects?: boolean",
        "return": "boolean"
      },
      "getBlockFromViewDirection": {
        "comment": {
          "params": {
            "options": "Additional configuration options for the ray cast."
          },
          "remarks": "Returns the first intersecting block from the direction that this entity is looking at.",
          "returns": "Returns the first intersecting block from the direction that this entity is looking at.",
          "throws": "function can throw errors."
        },
        "match": "getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined",
        "kind": "public",
        "param": "options?: BlockRaycastOptions",
        "return": "BlockRaycastHit | undefined"
      },
      "getComponents": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:health'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs can be found as part of the {@link EntityComponentTypes} enum."
          },
          "remarks": "Gets a component (that represents additional capabilities) for an entity.",
          "returns": "Returns the component if it exists on the entity, otherwise undefined."
        },
        "match": "getComponents(): EntityComponent[]",
        "kind": "public",
        "param": "",
        "return": "EntityComponent[]"
      },
      "getDynamicProperty": {
        "comment": {
          "params": {
            "identifier": "The property identifier."
          },
          "remarks": "Returns a property value.",
          "returns": "Returns the value for the property, or undefined if the property has not been set.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string | Vector3 | undefined"
      },
      "getDynamicPropertyIds": {
        "comment": {
          "params": {},
          "remarks": "Returns the available set of dynamic property identifiers that have been used on this entity.",
          "returns": "A string array of the dynamic properties set on this entity.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicPropertyIds(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getDynamicPropertyTotalByteCount": {
        "comment": {
          "params": {},
          "remarks": "Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.  This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicPropertyTotalByteCount(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "getEffect": {
        "comment": {
          "params": {
            "effectType": "The effect identifier."
          },
          "remarks": "Returns the effect for the specified EffectType on the entity, undefined if the effect is not present, or throws an error if the effect does not exist.",
          "returns": "Effect object for the specified effect, undefined if the effect is not present, or throws an error if the effect does not exist.",
          "throws": "function can throw errors."
        },
        "match": "getEffect(effectType: EffectType | string): Effect | undefined",
        "kind": "public",
        "param": "effectType: EffectType | string",
        "return": "Effect | undefined"
      },
      "getEffects": {
        "comment": {
          "params": {},
          "remarks": "Returns a set of effects applied to this entity.",
          "returns": "List of effects.",
          "throws": "function can throw errors."
        },
        "match": "getEffects(): Effect[]",
        "kind": "public",
        "param": "",
        "return": "Effect[]"
      },
      "getEntitiesFromViewDirection": {
        "comment": {
          "params": {
            "options": "Additional configuration options for the ray cast."
          },
          "remarks": "Gets the entities that this entity is looking at by performing a ray cast from the view of this entity.",
          "returns": "Returns a set of entities from the direction that this entity is looking at.",
          "throws": "function can throw errors."
        },
        "match": "getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]",
        "kind": "public",
        "param": "options?: EntityRaycastOptions",
        "return": "EntityRaycastHit[]"
      },
      "getHeadLocation": {
        "comment": {
          "params": {},
          "remarks": "Returns the current location of the head component of this entity.",
          "returns": "Returns the current location of the head component of this entity.",
          "throws": "function can throw errors."
        },
        "match": "getHeadLocation(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getProperty": {
        "comment": {
          "params": {
            "identifier": "The entity Property identifier."
          },
          "remarks": "Gets an entity Property value. If the property was set using the setProperty function within the same tick, the updated value will not be reflected until the subsequent tick.",
          "returns": "Returns the current property value. For enum properties, a string is returned. For float and int properties, a number is returned. For undefined properties, undefined is returned.",
          "throws": "Throws if the entity is invalid."
        },
        "match": "getProperty(identifier: string): boolean | number | string | undefined",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string | undefined"
      },
      "getRotation": {
        "comment": {
          "params": {},
          "remarks": "Returns the current rotation component of this entity.",
          "returns": "Returns a Vec2 containing the rotation of this entity (in degrees).",
          "throws": "function can throw errors."
        },
        "match": "getRotation(): Vector2",
        "kind": "public",
        "param": "",
        "return": "Vector2"
      },
      "getTags": {
        "comment": {
          "params": {},
          "remarks": "",
          "returns": "Returns all tags associated with an entity.",
          "throws": "function can throw errors."
        },
        "match": "getTags(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getVelocity": {
        "comment": {
          "params": {},
          "remarks": "Returns the current velocity vector of the entity.",
          "returns": "Returns the current velocity vector of the entity.",
          "throws": "function can throw errors.",
          "example": "```typescript const fireworkRocket = overworld.spawnEntity(\"minecraft:fireworks_rocket\", targetLocation); mc.system.runTimeout(() => { let velocity = fireworkRocket.getVelocity(); log(\"Velocity of firework is: (x: \" + velocity.x + \", y:\" + velocity.y + \", z:\" + velocity.z + \")\"); }, 5); ```"
        },
        "match": "getVelocity(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getViewDirection": {
        "comment": {
          "params": {},
          "remarks": "Returns the current view direction of the entity.",
          "returns": "Returns the current view direction of the entity.",
          "throws": "function can throw errors."
        },
        "match": "getViewDirection(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "hasComponent": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed."
          },
          "remarks": "Returns true if the specified component is present on this entity.",
          "returns": "Returns true if the specified component is present on this entity."
        },
        "match": "hasComponent(componentId: string): boolean",
        "kind": "public",
        "param": "componentId: string",
        "return": "boolean"
      },
      "hasTag": {
        "comment": {
          "params": {
            "tag": "Identifier of the tag to test for."
          },
          "remarks": "Returns whether an entity has a particular tag.",
          "returns": "Returns whether an entity has a particular tag.",
          "throws": "function can throw errors."
        },
        "match": "hasTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the entity can be manipulated by script. A Player is considered valid when it's EntityLifetimeState is set to Loaded.",
          "returns": "Whether the entity is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "kill": {
        "comment": {
          "params": {},
          "remarks": "Kills this entity. The entity will drop loot as normal. This function can't be called in read-only mode.",
          "returns": "Returns true if entity can be killed (even if it is already dead), otherwise it returns false.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { let mobTypeId = mobs[i % mobs.length]; let entity = overworld.spawnEntity(mobTypeId, targetLocation); entity.addTag(\"mobparty.\" + mobTypeId); } let eqo: mc.EntityQueryOptions = { tags: [\"mobparty.skeleton\"], }; for (let entity of overworld.getEntities(eqo)) { entity.kill(); } ```"
        },
        "match": "kill(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "matches": {
        "comment": {
          "params": {},
          "remarks": "Matches the entity against the passed in options. Uses the location of the entity for matching if the location is not specified in the passed in EntityQueryOptions.",
          "returns": "Returns true if the entity matches the criteria in the passed in EntityQueryOptions, otherwise it returns false.",
          "throws": "function can throw errors."
        },
        "match": "matches(options: EntityQueryOptions): boolean",
        "kind": "public",
        "param": "options: EntityQueryOptions",
        "return": "boolean"
      },
      "playAnimation": {
        "comment": {
          "params": {
            "animationName": "The animation identifier. e.g. animation.creeper.swelling",
            "options": "Additional options to control the playback and transitions of the animation."
          },
          "beta": "",
          "remarks": "Cause the entity to play the given animation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "playAnimation(animationName: string, options?: PlayAnimationOptions): void",
        "kind": "public",
        "param": "animationName: string, options?: PlayAnimationOptions",
        "return": "void"
      },
      "remove": {
        "comment": {
          "params": {},
          "remarks": "Immediately removes the entity from the world. The removed entity will not perform a death animation or drop loot upon removal. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "remove(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "removeEffect": {
        "comment": {
          "params": {
            "effectType": "The effect identifier."
          },
          "remarks": "Removes the specified EffectType on the entity, or returns false if the effect is not present. This function can't be called in read-only mode.",
          "returns": "Returns true if the effect has been removed. Returns false if the effect is not found or does not exist.",
          "throws": "function can throw errors."
        },
        "match": "removeEffect(effectType: EffectType | string): boolean",
        "kind": "public",
        "param": "effectType: EffectType | string",
        "return": "boolean"
      },
      "removeTag": {
        "comment": {
          "params": {
            "tag": "Content of the tag to remove."
          },
          "remarks": "Removes a specified tag from an entity. This function can't be called in read-only mode.",
          "returns": "Returns whether the tag existed on the entity.",
          "throws": "function can throw errors."
        },
        "match": "removeTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "resetProperty": {
        "comment": {
          "params": {
            "identifier": "The Entity Property identifier."
          },
          "remarks": "Resets an Entity Property back to its default value, as specified in the Entity's definition. This property change is not applied until the next tick. This function can't be called in read-only mode.",
          "returns": "Returns the default property value. For enum properties, a string is returned. For float and int properties, a number is returned. For undefined properties, undefined is returned.",
          "throws": "Throws if the entity is invalid. {@link minecraftcommon.EngineError} {@link Error}"
        },
        "match": "resetProperty(identifier: string): boolean | number | string",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string"
      },
      "runCommand": {
        "comment": {
          "params": {
            "commandString": "The command string. Note: This should not include a leading forward slash."
          },
          "remarks": "Runs a synchronous command on the entity. This function can't be called in read-only mode.",
          "returns": "A command result containing whether the command was successful.",
          "throws": "function can throw errors. {@link CommandError} {@link Error}"
        },
        "match": "runCommand(commandString: string): CommandResult",
        "kind": "public",
        "param": "commandString: string",
        "return": "CommandResult"
      },
      "runCommandAsync": {
        "comment": {
          "params": {
            "commandString": "Command to run. Note that command strings should not start with slash."
          },
          "remarks": "Runs a particular command asynchronously from the context of this entity. Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.",
          "returns": "For commands that return data, returns a JSON structure with command response values.",
          "throws": "function can throw errors."
        },
        "match": "runCommandAsync(commandString: string): Promise<CommandResult>",
        "kind": "public",
        "param": "commandString: string",
        "return": "Promise<CommandResult>"
      },
      "setDynamicProperty": {
        "comment": {
          "params": {
            "identifier": "The property identifier.",
            "value": "Data value of the property to set."
          },
          "remarks": "Sets a specified property to a value.",
          "throws": "function can throw errors."
        },
        "match": "setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void",
        "kind": "public",
        "param": "identifier: string, value?: boolean | number | string | Vector3",
        "return": "void"
      },
      "setOnFire": {
        "comment": {
          "params": {
            "seconds": "Length of time to set the entity on fire.",
            "useEffects": "Whether side-effects should be applied (e.g. thawing freeze) and other conditions such as rain or fire protection should be taken into consideration."
          },
          "beta": "",
          "remarks": "Sets an entity on fire (if it is not in water or rain). Note that you can call getComponent('minecraft:onfire') and, if present, the entity is on fire. This function can't be called in read-only mode.",
          "returns": "Whether the entity was set on fire. This can fail if seconds is less than or equal to zero, the entity is wet or the entity is immune to fire.",
          "throws": "function can throw errors.",
          "example": "```typescript const cow = overworld.spawnEntity(\"minecraft:cow\", targetLocation); mc.system.runTimeout(() => { cow.teleport( { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 }, { facingLocation: targetLocation, } ); }, 20); ```"
        },
        "match": "setOnFire(seconds: number, useEffects?: boolean): boolean",
        "kind": "public",
        "param": "seconds: number, useEffects?: boolean",
        "return": "boolean"
      },
      "setProperty": {
        "comment": {
          "params": {
            "identifier": "The Entity Property identifier.",
            "value": "The property value. The provided type must be compatible with the type specified in the entity's definition."
          },
          "remarks": "Sets an Entity Property to the provided value. This property change is not applied until the next tick. This function can't be called in read-only mode.",
          "throws": "Throws if the entity is invalid. Throws if an invalid identifier is provided. Throws if the provided value type does not match the property type. Throws if the provided value is outside the expected range (int, float properties). Throws if the provided string value does not match the set of accepted enum values (enum properties"
        },
        "match": "setProperty(identifier: string, value: boolean | number | string): void",
        "kind": "public",
        "param": "identifier: string, value: boolean | number | string",
        "return": "void"
      },
      "setRotation": {
        "comment": {
          "params": {
            "rotation": "The x and y rotation of the entity (in degrees). For most mobs, the x rotation controls the head tilt and the y rotation controls the body rotation."
          },
          "remarks": "Sets the main rotation of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setRotation(rotation: Vector2): void",
        "kind": "public",
        "param": "rotation: Vector2",
        "return": "void"
      },
      "teleport": {
        "comment": {
          "params": {
            "location": "New location for the entity.",
            "teleportOptions": "Options regarding the teleport operation."
          },
          "remarks": "Teleports the selected entity to a new location This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const pig = overworld.spawnEntity(\"minecraft:pig\", targetLocation); let inc = 1; let runId = mc.system.runInterval(() => { pig.teleport( { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 }, { facingLocation: targetLocation, } ); if (inc > 100) { mc.system.clearRun(runId); } inc++; }, 4); ```"
        },
        "match": "teleport(location: Vector3, teleportOptions?: TeleportOptions): void",
        "kind": "public",
        "param": "location: Vector3, teleportOptions?: TeleportOptions",
        "return": "void"
      },
      "triggerEvent": {
        "comment": {
          "params": {
            "eventName": "Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed."
          },
          "remarks": "Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event. This function can't be called in read-only mode.",
          "throws": "If the event is not defined in the definition of the entity, an error will be thrown.",
          "example": "```typescript const creeper = overworld.spawnEntity(\"minecraft:creeper\", targetLocation); creeper.triggerEvent(\"minecraft:start_exploding_forced\"); ```"
        },
        "match": "triggerEvent(eventName: string): void",
        "kind": "public",
        "param": "eventName: string",
        "return": "void"
      },
      "tryTeleport": {
        "comment": {
          "params": {
            "location": "Location to teleport the entity to.",
            "teleportOptions": "Options regarding the teleport operation."
          },
          "remarks": "Attempts to try a teleport, but may not complete the teleport operation (for example, if there are blocks at the destination.) This function can't be called in read-only mode.",
          "returns": "Returns whether the teleport succeeded. This can fail if the destination chunk is unloaded or if the teleport would result in intersecting with blocks.",
          "throws": "function can throw errors."
        },
        "match": "tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean",
        "kind": "public",
        "param": "location: Vector3, teleportOptions?: TeleportOptions",
        "return": "boolean"
      }
    },
    "EntityAddRiderComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityAddRiderComponent"
      },
      "entityType": {
        "comment": {
          "params": {},
          "remarks": "The type of entity that is added as a rider for this entity when spawned under certain conditions.",
          "throws": "property can throw when used."
        },
        "match": "readonly entityType: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "spawnEvent": {
        "comment": {
          "params": {},
          "remarks": "Optional spawn event to trigger on the rider when that rider is spawned for this entity.",
          "throws": "property can throw when used."
        },
        "match": "readonly spawnEvent: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:addrider'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:addrider'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityAgeableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityAgeableComponent"
      },
      "duration": {
        "comment": {
          "params": {},
          "remarks": "Amount of time before the entity grows up, -1 for always a baby.",
          "throws": "property can throw when used."
        },
        "match": "readonly duration: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "growUp": {
        "comment": {
          "params": {},
          "remarks": "Event to run when this entity grows up.",
          "throws": "property can throw when used."
        },
        "match": "readonly growUp: Trigger",
        "kind": "readonly",
        "param": "",
        "return": "Trigger"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:ageable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:ageable'"
      },
      "getDropItems": {
        "comment": {
          "params": {},
          "remarks": "List of items that the entity drops when it grows up.",
          "throws": "function can throw errors."
        },
        "match": "getDropItems(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getFeedItems": {
        "comment": {
          "params": {},
          "remarks": "List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by.",
          "throws": "function can throw errors."
        },
        "match": "getFeedItems(): EntityDefinitionFeedItem[]",
        "kind": "public",
        "param": "",
        "return": "EntityDefinitionFeedItem[]"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityAttributeComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityAttributeComponent"
      },
      "currentValue": {
        "comment": {
          "params": {},
          "remarks": "Current value of this attribute for this instance.",
          "throws": "property can throw when used."
        },
        "match": "readonly currentValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "defaultValue": {
        "comment": {
          "params": {},
          "remarks": "Returns the default defined value for this attribute.",
          "throws": "property can throw when used."
        },
        "match": "readonly defaultValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMax": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective max of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMax: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMin": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective min of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMin: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "resetToDefaultValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the defined default value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToDefaultValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMaxValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the maximum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMaxValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMinValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the minimum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMinValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "setCurrentValue": {
        "comment": {
          "params": {},
          "remarks": "Sets the current value of this attribute. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setCurrentValue(value: number): boolean",
        "kind": "public",
        "param": "value: number",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityBaseMovementComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityBaseMovementComponent"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityBreathableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityBreathableComponent"
      },
      "breathesAir": {
        "comment": {
          "params": {},
          "remarks": "If true, this entity can breathe in air.",
          "throws": "property can throw when used."
        },
        "match": "readonly breathesAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "breathesLava": {
        "comment": {
          "params": {},
          "remarks": "If true, this entity can breathe in lava.",
          "throws": "property can throw when used."
        },
        "match": "readonly breathesLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "breathesSolids": {
        "comment": {
          "params": {},
          "remarks": "If true, this entity can breathe in solid blocks.",
          "throws": "property can throw when used."
        },
        "match": "readonly breathesSolids: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "breathesWater": {
        "comment": {
          "params": {},
          "remarks": "If true, this entity can breathe in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly breathesWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "generatesBubbles": {
        "comment": {
          "params": {},
          "remarks": "If true, this entity will have visible bubbles while in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly generatesBubbles: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "inhaleTime": {
        "comment": {
          "params": {},
          "remarks": "Time in seconds to recover breath to maximum.",
          "throws": "property can throw when used."
        },
        "match": "readonly inhaleTime: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "suffocateTime": {
        "comment": {
          "params": {},
          "remarks": "Time in seconds between suffocation damage.",
          "throws": "property can throw when used."
        },
        "match": "readonly suffocateTime: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "totalSupply": {
        "comment": {
          "params": {},
          "remarks": "Time in seconds the entity can hold its breath.",
          "throws": "property can throw when used."
        },
        "match": "readonly totalSupply: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:breathable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:breathable'"
      },
      "getBreatheBlocks": {
        "comment": {
          "params": {},
          "remarks": "List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.",
          "throws": "function can throw errors."
        },
        "match": "getBreatheBlocks(): BlockPermutation[]",
        "kind": "public",
        "param": "",
        "return": "BlockPermutation[]"
      },
      "getNonBreatheBlocks": {
        "comment": {
          "params": {},
          "remarks": "List of blocks this entity can't breathe in.",
          "throws": "function can throw errors."
        },
        "match": "getNonBreatheBlocks(): BlockPermutation[]",
        "kind": "public",
        "param": "",
        "return": "BlockPermutation[]"
      },
      "setAirSupply": {
        "comment": {
          "params": {
            "value": "New air supply for the entity."
          },
          "remarks": "Sets the current air supply of the entity.",
          "throws": "function can throw errors."
        },
        "match": "setAirSupply(value: number): void",
        "kind": "public",
        "param": "value: number",
        "return": "void"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityCanClimbComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityCanClimbComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:can_climb'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:can_climb'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityCanFlyComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityCanFlyComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:can_fly'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:can_fly'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityCanPowerJumpComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityCanPowerJumpComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:can_power_jump'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:can_power_jump'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityColorComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityColorComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Value of this particular color. This property can't be edited in read-only mode."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:color'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:color'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityComponent"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityDefinitionFeedItem": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityDefinitionFeedItem"
      },
      "growth": {
        "comment": {
          "params": {},
          "remarks": "The amount by which an entity's age will increase when fed this item. Values usually range between 0 and 1."
        },
        "match": "readonly growth: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "item": {
        "comment": {
          "params": {},
          "remarks": "Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'."
        },
        "match": "readonly item: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "EntityDieAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityDieAfterEvent"
      },
      "damageSource": {
        "comment": {
          "params": {},
          "remarks": "If specified, provides more information on the source of damage that caused the death of this entity."
        },
        "match": "readonly damageSource: EntityDamageSource",
        "kind": "readonly",
        "param": "",
        "return": "EntityDamageSource"
      },
      "deadEntity": {
        "comment": {
          "params": {},
          "remarks": "Now-dead entity object."
        },
        "match": "readonly deadEntity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      }
    },
    "EntityDieAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityDieAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {
            "callback": "Function to call when an entity dies.",
            "options": "Additional filtering options for when the subscription fires."
          },
          "remarks": "Subscribes to an event that fires when an entity dies. This function can't be called in read-only mode.",
          "returns": "Returns the closure that can be used in future downstream calls to unsubscribe."
        },
        "match": "subscribe(callback: (arg: EntityDieAfterEvent) => void,options?: EntityEventOptions,): (arg: EntityDieAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntityDieAfterEvent) => void,options?: EntityEventOptions,",
        "return": "(arg: EntityDieAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Stops this event from calling your function when an entity dies. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntityDieAfterEvent) => void",
        "return": "void"
      }
    },
    "EntityEquippableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityEquippableComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:equippable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:equippable'"
      },
      "getEquipment": {
        "comment": {
          "params": {
            "equipmentSlot": "The equipment slot. e.g. \"head\", \"chest\", \"offhand\""
          },
          "remarks": "Gets the equipped item for the given EquipmentSlot. This function can't be called in read-only mode.",
          "returns": "Returns the item equipped to the given EquipmentSlot. If empty, returns undefined.",
          "throws": "function can throw errors."
        },
        "match": "getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined",
        "kind": "public",
        "param": "equipmentSlot: EquipmentSlot",
        "return": "ItemStack | undefined"
      },
      "getEquipmentSlot": {
        "comment": {
          "params": {
            "equipmentSlot": "The equipment slot. e.g. \"head\", \"chest\", \"offhand\"."
          },
          "beta": "",
          "remarks": "Gets the ContainerSlot corresponding to the given EquipmentSlot. This function can't be called in read-only mode.",
          "returns": "Returns the ContainerSlot corresponding to the given EquipmentSlot.",
          "throws": "function can throw errors."
        },
        "match": "getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot",
        "kind": "public",
        "param": "equipmentSlot: EquipmentSlot",
        "return": "ContainerSlot"
      },
      "setEquipment": {
        "comment": {
          "params": {
            "equipmentSlot": "The equipment slot. e.g. \"head\", \"chest\", \"offhand\".",
            "itemStack": "The item to equip. If undefined, clears the slot."
          },
          "remarks": "Replaces the item in the given EquipmentSlot. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean",
        "kind": "public",
        "param": "equipmentSlot: EquipmentSlot, itemStack?: ItemStack",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityFireImmuneComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityFireImmuneComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:fire_immune'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:fire_immune'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityFloatsInLiquidComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityFloatsInLiquidComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:floats_in_liquid'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:floats_in_liquid'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityFlyingSpeedComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityFlyingSpeedComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Current value of the flying speed of the associated entity. This property can't be edited in read-only mode."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:flying_speed'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:flying_speed'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityFrictionModifierComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityFrictionModifierComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Current value of the friction modifier of the associated entity. This property can't be edited in read-only mode."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:friction_modifier'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:friction_modifier'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityGroundOffsetComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityGroundOffsetComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Value of this particular ground offset. Note that this value is effectively read only; setting the ground offset value will not have an impact on the related entity. This property can't be edited in read-only mode."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:ground_offset'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:ground_offset'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityHealableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHealableComponent"
      },
      "filters": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "A set of filters that healable items might be associated with.",
          "throws": "property can throw when used."
        },
        "match": "readonly filters: FilterGroup",
        "kind": "readonly",
        "param": "",
        "return": "FilterGroup"
      },
      "forceUse": {
        "comment": {
          "params": {},
          "remarks": "Determines if an item can be used regardless of the entity being at full health.",
          "throws": "property can throw when used."
        },
        "match": "readonly forceUse: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:healable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:healable'"
      },
      "getFeedItems": {
        "comment": {
          "params": {},
          "remarks": "A set of items that can specifically heal this entity.",
          "returns": "Entity that this component is associated with.",
          "throws": "function can throw errors."
        },
        "match": "getFeedItems(): FeedItem[]",
        "kind": "public",
        "param": "",
        "return": "FeedItem[]"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityHealthChangedAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHealthChangedAfterEvent"
      },
      "entity": {
        "comment": {
          "params": {},
          "remarks": "Entity whose health changed."
        },
        "match": "readonly entity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "newValue": {
        "comment": {
          "params": {},
          "remarks": "New health value of the entity."
        },
        "match": "readonly newValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "oldValue": {
        "comment": {
          "params": {},
          "remarks": "Old health value of the entity."
        },
        "match": "readonly oldValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      }
    },
    "EntityHealthChangedAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHealthChangedAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when the health of an entity changes. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: EntityHealthChangedAfterEvent) => void,options?: EntityEventOptions,): (arg: EntityHealthChangedAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntityHealthChangedAfterEvent) => void,options?: EntityEventOptions,",
        "return": "(arg: EntityHealthChangedAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when the health of an entity changes. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntityHealthChangedAfterEvent) => void",
        "return": "void"
      }
    },
    "EntityHealthComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHealthComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:health'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:health'"
      },
      "currentValue": {
        "comment": {
          "params": {},
          "remarks": "Current value of this attribute for this instance.",
          "throws": "property can throw when used."
        },
        "match": "readonly currentValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "defaultValue": {
        "comment": {
          "params": {},
          "remarks": "Returns the default defined value for this attribute.",
          "throws": "property can throw when used."
        },
        "match": "readonly defaultValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMax": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective max of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMax: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMin": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective min of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMin: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "resetToDefaultValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the defined default value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToDefaultValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMaxValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the maximum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMaxValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMinValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the minimum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMinValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "setCurrentValue": {
        "comment": {
          "params": {},
          "remarks": "Sets the current value of this attribute. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setCurrentValue(value: number): boolean",
        "kind": "public",
        "param": "value: number",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityHitBlockAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHitBlockAfterEvent"
      },
      "blockFace": {
        "comment": {
          "params": {},
          "remarks": "Face of the block that was hit."
        },
        "match": "readonly blockFace: Direction",
        "kind": "readonly",
        "param": "",
        "return": "Direction"
      },
      "damagingEntity": {
        "comment": {
          "params": {},
          "remarks": "Entity that made the attack."
        },
        "match": "readonly damagingEntity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "hitBlock": {
        "comment": {
          "params": {},
          "remarks": "Block that was hit by the attack."
        },
        "match": "readonly hitBlock: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      }
    },
    "EntityHitBlockAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHitBlockAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an entity hits a block. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: EntityHitBlockAfterEvent) => void,options?: EntityEventOptions,): (arg: EntityHitBlockAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntityHitBlockAfterEvent) => void,options?: EntityEventOptions,",
        "return": "(arg: EntityHitBlockAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an entity hits a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntityHitBlockAfterEvent) => void",
        "return": "void"
      }
    },
    "EntityHitEntityAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHitEntityAfterEvent"
      },
      "damagingEntity": {
        "comment": {
          "params": {},
          "remarks": "Entity that made a hit/melee attack."
        },
        "match": "readonly damagingEntity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "hitEntity": {
        "comment": {
          "params": {},
          "remarks": "Entity that was hit by the attack."
        },
        "match": "readonly hitEntity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      }
    },
    "EntityHitEntityAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHitEntityAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an entity hits another entity. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: EntityHitEntityAfterEvent) => void,options?: EntityEventOptions,): (arg: EntityHitEntityAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntityHitEntityAfterEvent) => void,options?: EntityEventOptions,",
        "return": "(arg: EntityHitEntityAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an entity makes a melee attack on another entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntityHitEntityAfterEvent) => void",
        "return": "void"
      }
    },
    "EntityHurtAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHurtAfterEvent"
      },
      "damage": {
        "comment": {
          "params": {},
          "remarks": "Describes the amount of damage caused."
        },
        "match": "readonly damage: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "damageSource": {
        "comment": {
          "params": {},
          "remarks": "Source information on the entity that may have applied this damage."
        },
        "match": "readonly damageSource: EntityDamageSource",
        "kind": "readonly",
        "param": "",
        "return": "EntityDamageSource"
      },
      "hurtEntity": {
        "comment": {
          "params": {},
          "remarks": "Entity that was hurt."
        },
        "match": "readonly hurtEntity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      }
    },
    "EntityHurtAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityHurtAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an entity is hurt. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: EntityHurtAfterEvent) => void,options?: EntityEventOptions,): (arg: EntityHurtAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntityHurtAfterEvent) => void,options?: EntityEventOptions,",
        "return": "(arg: EntityHurtAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an entity is hurt. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntityHurtAfterEvent) => void",
        "return": "void"
      }
    },
    "EntityInventoryComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityInventoryComponent"
      },
      "additionalSlotsPerStrength": {
        "comment": {
          "params": {},
          "remarks": "Number of slots that this entity can gain per extra strength.",
          "throws": "property can throw when used."
        },
        "match": "readonly additionalSlotsPerStrength: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "canBeSiphonedFrom": {
        "comment": {
          "params": {},
          "remarks": "If true, the contents of this inventory can be removed by a hopper.",
          "throws": "property can throw when used."
        },
        "match": "readonly canBeSiphonedFrom: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "containerType": {
        "comment": {
          "params": {},
          "remarks": "Defines the container for this entity. The container will be undefined if the entity has been removed.",
          "throws": "property can throw when used."
        },
        "match": "readonly containerType: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "inventorySize": {
        "comment": {
          "params": {},
          "remarks": "Number of slots the container has.",
          "throws": "property can throw when used."
        },
        "match": "readonly inventorySize: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "restrictToOwner": {
        "comment": {
          "params": {},
          "remarks": "If true, the entity will not drop it's inventory on death.",
          "throws": "property can throw when used."
        },
        "match": "readonly restrictToOwner: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:inventory'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:inventory'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsBabyComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsBabyComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_baby'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_baby'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsChargedComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsChargedComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_charged'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_charged'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsChestedComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsChestedComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_chested'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_chested'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsDyeableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsDyeableComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_dyeable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_dyeable'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsHiddenWhenInvisibleComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsHiddenWhenInvisibleComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_hidden_when_invisible'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_hidden_when_invisible'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsIgnitedComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsIgnitedComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_ignited'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_ignited'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsIllagerCaptainComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsIllagerCaptainComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_illager_captain'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_illager_captain'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsSaddledComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsSaddledComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_saddled'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_saddled'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsShakingComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsShakingComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_shaking'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_shaking'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsShearedComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsShearedComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_sheared'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_sheared'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsStackableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsStackableComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_stackable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_stackable'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsStunnedComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsStunnedComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_stunned'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_stunned'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIsTamedComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIsTamedComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:is_tamed'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:is_tamed'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityItemComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityItemComponent"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "Item stack represented by this entity in the world.",
          "throws": "property can throw when used."
        },
        "match": "readonly itemStack: ItemStack",
        "kind": "readonly",
        "param": "",
        "return": "ItemStack"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:item'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:item'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityIterator": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityIterator"
      },
      "next": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode."
        },
        "match": "next(): IteratorResult<Entity>",
        "kind": "public",
        "param": "",
        "return": "IteratorResult<Entity>"
      }
    },
    "EntityLavaMovementComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityLavaMovementComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:lava_movement'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:lava_movement'"
      },
      "currentValue": {
        "comment": {
          "params": {},
          "remarks": "Current value of this attribute for this instance.",
          "throws": "property can throw when used."
        },
        "match": "readonly currentValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "defaultValue": {
        "comment": {
          "params": {},
          "remarks": "Returns the default defined value for this attribute.",
          "throws": "property can throw when used."
        },
        "match": "readonly defaultValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMax": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective max of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMax: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMin": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective min of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMin: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "resetToDefaultValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the defined default value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToDefaultValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMaxValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the maximum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMaxValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMinValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the minimum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMinValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "setCurrentValue": {
        "comment": {
          "params": {},
          "remarks": "Sets the current value of this attribute. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setCurrentValue(value: number): boolean",
        "kind": "public",
        "param": "value: number",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityLeashableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityLeashableComponent"
      },
      "softDistance": {
        "comment": {
          "params": {},
          "remarks": "Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.",
          "throws": "property can throw when used."
        },
        "match": "readonly softDistance: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:leashable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:leashable'"
      },
      "leash": {
        "comment": {
          "params": {
            "leashHolder": "The entity to leash this entity to."
          },
          "remarks": "Leashes this entity to another entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "leash(leashHolder: Entity): void",
        "kind": "public",
        "param": "leashHolder: Entity",
        "return": "void"
      },
      "unleash": {
        "comment": {
          "params": {},
          "remarks": "Unleashes this entity if it is leashed to another entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unleash(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityLoadAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityLoadAfterEvent"
      },
      "entity": {
        "comment": {
          "params": {},
          "remarks": "Entity that was loaded. This property can't be edited in read-only mode."
        },
        "match": "entity: Entity",
        "kind": "public",
        "param": "",
        "return": "Entity"
      }
    },
    "EntityLoadAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityLoadAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {
            "callback": "Function that handles the load event."
          },
          "remarks": "Method to register an event handler for what happens when an entity loads. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: EntityLoadAfterEvent) => void): (arg: EntityLoadAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntityLoadAfterEvent) => void",
        "return": "(arg: EntityLoadAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {
            "callback": "Original function that was passed into the subscribe event, that is to be unregistered."
          },
          "remarks": "Unregisters a method that was previously subscribed to the subscription event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntityLoadAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntityLoadAfterEvent) => void",
        "return": "void"
      }
    },
    "EntityMarkVariantComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMarkVariantComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Value of the mark variant value for this entity. This property can't be edited in read-only mode."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:mark_variant'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:mark_variant'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMountTamingComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMountTamingComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:tamemount'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:tamemount'"
      },
      "setTamed": {
        "comment": {
          "params": {
            "showParticles": "Whether to show effect particles when this entity is tamed."
          },
          "remarks": "Sets this rideable entity as tamed. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setTamed(showParticles: boolean): void",
        "kind": "public",
        "param": "showParticles: boolean",
        "return": "void"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementAmphibiousComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementAmphibiousComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.amphibious'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.amphibious'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementBasicComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementBasicComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.basic'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.basic'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement'"
      },
      "currentValue": {
        "comment": {
          "params": {},
          "remarks": "Current value of this attribute for this instance.",
          "throws": "property can throw when used."
        },
        "match": "readonly currentValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "defaultValue": {
        "comment": {
          "params": {},
          "remarks": "Returns the default defined value for this attribute.",
          "throws": "property can throw when used."
        },
        "match": "readonly defaultValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMax": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective max of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMax: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMin": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective min of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMin: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "resetToDefaultValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the defined default value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToDefaultValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMaxValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the maximum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMaxValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMinValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the minimum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMinValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "setCurrentValue": {
        "comment": {
          "params": {},
          "remarks": "Sets the current value of this attribute. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setCurrentValue(value: number): boolean",
        "kind": "public",
        "param": "value: number",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementFlyComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementFlyComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.fly'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.fly'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementGenericComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementGenericComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.generic'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.generic'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementGlideComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementGlideComponent"
      },
      "speedWhenTurning": {
        "comment": {
          "params": {},
          "remarks": "Speed in effect when the entity is turning.",
          "throws": "property can throw when used."
        },
        "match": "readonly speedWhenTurning: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "startSpeed": {
        "comment": {
          "params": {},
          "remarks": "Start speed during a glide.",
          "throws": "property can throw when used."
        },
        "match": "readonly startSpeed: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.glide'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.glide'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementHoverComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementHoverComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.hover'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.hover'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementJumpComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementJumpComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.jump'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.jump'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementSkipComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementSkipComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.skip'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.skip'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityMovementSwayComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityMovementSwayComponent"
      },
      "swayAmplitude": {
        "comment": {
          "params": {},
          "remarks": "Amplitude of the sway motion.",
          "throws": "property can throw when used."
        },
        "match": "readonly swayAmplitude: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "swayFrequency": {
        "comment": {
          "params": {},
          "remarks": "Amount of sway frequency.",
          "throws": "property can throw when used."
        },
        "match": "readonly swayFrequency: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:movement.sway'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:movement.sway'"
      },
      "maxTurn": {
        "comment": {
          "params": {},
          "remarks": "Maximum turn rate for this movement modality of the mob.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxTurn: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityNavigationClimbComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityNavigationClimbComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:navigation.climb'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:navigation.climb'"
      },
      "avoidDamageBlocks": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid blocks that cause damage when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidDamageBlocks: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidPortals": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid portals (like nether portals) when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidPortals: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidSun": {
        "comment": {
          "params": {},
          "remarks": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidSun: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid water when creating a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreach": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump out of water (like a dolphin).",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreach: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreakDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door and break it.",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreakDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canFloat": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can float.",
          "throws": "property can throw when used."
        },
        "match": "readonly canFloat: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canJump": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump up blocks.",
          "throws": "property can throw when used."
        },
        "match": "readonly canJump: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenIronDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenIronDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPassDoors": {
        "comment": {
          "params": {},
          "remarks": "Whether a path can be created through a door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPassDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathFromAir": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can start pathing when in the air.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathFromAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the lava.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSink": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it will be pulled down by gravity while in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSink: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSwim": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSwim: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalk": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground outside water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalk: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalkInLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel in lava like walking on ground.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalkInLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isAmphibious": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground or go underwater.",
          "throws": "property can throw when used."
        },
        "match": "readonly isAmphibious: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityNavigationComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityNavigationComponent"
      },
      "avoidDamageBlocks": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid blocks that cause damage when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidDamageBlocks: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidPortals": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid portals (like nether portals) when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidPortals: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidSun": {
        "comment": {
          "params": {},
          "remarks": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidSun: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid water when creating a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreach": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump out of water (like a dolphin).",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreach: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreakDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door and break it.",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreakDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canFloat": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can float.",
          "throws": "property can throw when used."
        },
        "match": "readonly canFloat: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canJump": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump up blocks.",
          "throws": "property can throw when used."
        },
        "match": "readonly canJump: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenIronDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenIronDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPassDoors": {
        "comment": {
          "params": {},
          "remarks": "Whether a path can be created through a door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPassDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathFromAir": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can start pathing when in the air.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathFromAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the lava.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSink": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it will be pulled down by gravity while in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSink: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSwim": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSwim: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalk": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground outside water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalk: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalkInLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel in lava like walking on ground.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalkInLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isAmphibious": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground or go underwater.",
          "throws": "property can throw when used."
        },
        "match": "readonly isAmphibious: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityNavigationFloatComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityNavigationFloatComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:navigation.float'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:navigation.float'"
      },
      "avoidDamageBlocks": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid blocks that cause damage when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidDamageBlocks: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidPortals": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid portals (like nether portals) when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidPortals: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidSun": {
        "comment": {
          "params": {},
          "remarks": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidSun: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid water when creating a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreach": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump out of water (like a dolphin).",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreach: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreakDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door and break it.",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreakDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canFloat": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can float.",
          "throws": "property can throw when used."
        },
        "match": "readonly canFloat: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canJump": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump up blocks.",
          "throws": "property can throw when used."
        },
        "match": "readonly canJump: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenIronDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenIronDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPassDoors": {
        "comment": {
          "params": {},
          "remarks": "Whether a path can be created through a door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPassDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathFromAir": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can start pathing when in the air.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathFromAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the lava.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSink": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it will be pulled down by gravity while in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSink: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSwim": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSwim: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalk": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground outside water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalk: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalkInLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel in lava like walking on ground.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalkInLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isAmphibious": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground or go underwater.",
          "throws": "property can throw when used."
        },
        "match": "readonly isAmphibious: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityNavigationFlyComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityNavigationFlyComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:navigation.fly'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:navigation.fly'"
      },
      "avoidDamageBlocks": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid blocks that cause damage when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidDamageBlocks: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidPortals": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid portals (like nether portals) when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidPortals: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidSun": {
        "comment": {
          "params": {},
          "remarks": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidSun: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid water when creating a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreach": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump out of water (like a dolphin).",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreach: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreakDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door and break it.",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreakDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canFloat": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can float.",
          "throws": "property can throw when used."
        },
        "match": "readonly canFloat: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canJump": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump up blocks.",
          "throws": "property can throw when used."
        },
        "match": "readonly canJump: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenIronDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenIronDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPassDoors": {
        "comment": {
          "params": {},
          "remarks": "Whether a path can be created through a door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPassDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathFromAir": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can start pathing when in the air.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathFromAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the lava.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSink": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it will be pulled down by gravity while in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSink: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSwim": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSwim: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalk": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground outside water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalk: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalkInLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel in lava like walking on ground.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalkInLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isAmphibious": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground or go underwater.",
          "throws": "property can throw when used."
        },
        "match": "readonly isAmphibious: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityNavigationGenericComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityNavigationGenericComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:navigation.generic'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:navigation.generic'"
      },
      "avoidDamageBlocks": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid blocks that cause damage when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidDamageBlocks: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidPortals": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid portals (like nether portals) when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidPortals: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidSun": {
        "comment": {
          "params": {},
          "remarks": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidSun: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid water when creating a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreach": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump out of water (like a dolphin).",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreach: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreakDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door and break it.",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreakDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canFloat": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can float.",
          "throws": "property can throw when used."
        },
        "match": "readonly canFloat: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canJump": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump up blocks.",
          "throws": "property can throw when used."
        },
        "match": "readonly canJump: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenIronDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenIronDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPassDoors": {
        "comment": {
          "params": {},
          "remarks": "Whether a path can be created through a door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPassDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathFromAir": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can start pathing when in the air.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathFromAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the lava.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSink": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it will be pulled down by gravity while in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSink: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSwim": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSwim: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalk": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground outside water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalk: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalkInLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel in lava like walking on ground.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalkInLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isAmphibious": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground or go underwater.",
          "throws": "property can throw when used."
        },
        "match": "readonly isAmphibious: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityNavigationHoverComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityNavigationHoverComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:navigation.hover'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:navigation.hover'"
      },
      "avoidDamageBlocks": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid blocks that cause damage when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidDamageBlocks: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidPortals": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid portals (like nether portals) when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidPortals: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidSun": {
        "comment": {
          "params": {},
          "remarks": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidSun: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid water when creating a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreach": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump out of water (like a dolphin).",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreach: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreakDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door and break it.",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreakDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canFloat": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can float.",
          "throws": "property can throw when used."
        },
        "match": "readonly canFloat: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canJump": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump up blocks.",
          "throws": "property can throw when used."
        },
        "match": "readonly canJump: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenIronDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenIronDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPassDoors": {
        "comment": {
          "params": {},
          "remarks": "Whether a path can be created through a door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPassDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathFromAir": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can start pathing when in the air.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathFromAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the lava.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSink": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it will be pulled down by gravity while in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSink: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSwim": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSwim: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalk": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground outside water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalk: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalkInLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel in lava like walking on ground.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalkInLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isAmphibious": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground or go underwater.",
          "throws": "property can throw when used."
        },
        "match": "readonly isAmphibious: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityNavigationWalkComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityNavigationWalkComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:navigation.walk'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:navigation.walk'"
      },
      "avoidDamageBlocks": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid blocks that cause damage when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidDamageBlocks: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidPortals": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid portals (like nether portals) when finding a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidPortals: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidSun": {
        "comment": {
          "params": {},
          "remarks": "Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidSun: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "avoidWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder to avoid water when creating a path.",
          "throws": "property can throw when used."
        },
        "match": "readonly avoidWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreach": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump out of water (like a dolphin).",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreach: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canBreakDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door and break it.",
          "throws": "property can throw when used."
        },
        "match": "readonly canBreakDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canFloat": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can float.",
          "throws": "property can throw when used."
        },
        "match": "readonly canFloat: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canJump": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can jump up blocks.",
          "throws": "property can throw when used."
        },
        "match": "readonly canJump: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canOpenIronDoors": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canOpenIronDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPassDoors": {
        "comment": {
          "params": {},
          "remarks": "Whether a path can be created through a door.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPassDoors: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathFromAir": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder that it can start pathing when in the air.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathFromAir: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the lava.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canPathOverWater": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel on the surface of the water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canPathOverWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSink": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it will be pulled down by gravity while in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSink: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canSwim": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.",
          "throws": "property can throw when used."
        },
        "match": "readonly canSwim: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalk": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground outside water.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalk: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "canWalkInLava": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can travel in lava like walking on ground.",
          "throws": "property can throw when used."
        },
        "match": "readonly canWalkInLava: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isAmphibious": {
        "comment": {
          "params": {},
          "remarks": "Tells the pathfinder whether or not it can walk on the ground or go underwater.",
          "throws": "property can throw when used."
        },
        "match": "readonly isAmphibious: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityNpcComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityNpcComponent"
      },
      "defaultScene": {
        "comment": {
          "params": {},
          "remarks": "The DialogueScene that is opened when players first interact with the NPC. This property can't be edited in read-only mode."
        },
        "match": "defaultScene: string",
        "kind": "public",
        "param": "",
        "return": "string"
      },
      "name": {
        "comment": {
          "params": {},
          "remarks": "The name of the NPC as it is displayed to players. This property can't be edited in read-only mode."
        },
        "match": "name: string",
        "kind": "public",
        "param": "",
        "return": "string"
      },
      "skinIndex": {
        "comment": {
          "params": {},
          "remarks": "The index of the skin the NPC will use. This property can't be edited in read-only mode."
        },
        "match": "skinIndex: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:npc'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:npc'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityOnFireComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityOnFireComponent"
      },
      "onFireTicksRemaining": {
        "comment": {
          "params": {},
          "remarks": "The number of ticks remaining before the fire goes out."
        },
        "match": "readonly onFireTicksRemaining: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:onfire'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:onfire'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityPushThroughComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityPushThroughComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Value of the push through distances of this entity. This property can't be edited in read-only mode."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:push_through'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:push_through'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityRemoveAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityRemoveAfterEvent"
      },
      "removedEntityId": {
        "comment": {
          "params": {},
          "remarks": "Id of the entity that was removed."
        },
        "match": "readonly removedEntityId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the type of the entity removed - for example, 'minecraft:skeleton'."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "EntityRemoveAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityRemoveAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {
            "callback": "Function to call.",
            "options": "Additional filtering options for this event."
          },
          "remarks": "Will call your function every time an entity is removed from the game. This function can't be called in read-only mode.",
          "returns": "Returns a closure that can be used in subsequent unsubscribe operations."
        },
        "match": "subscribe(callback: (arg: EntityRemoveAfterEvent) => void,options?: EntityEventOptions,): (arg: EntityRemoveAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntityRemoveAfterEvent) => void,options?: EntityEventOptions,",
        "return": "(arg: EntityRemoveAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes your function from subsequent calls when an entity is removed. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntityRemoveAfterEvent) => void",
        "return": "void"
      }
    },
    "EntityRemoveBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityRemoveBeforeEvent"
      },
      "removedEntity": {
        "comment": {
          "params": {},
          "remarks": "Reference to an entity that is being removed."
        },
        "match": "readonly removedEntity: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      }
    },
    "EntityRemoveBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityRemoveBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {
            "callback": "Function to call."
          },
          "remarks": "Will call your function every time an entity is being removed from the game. This function can't be called in read-only mode.",
          "returns": "Returns a closure that can be used in subsequent unsubscribe operations."
        },
        "match": "subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntityRemoveBeforeEvent) => void",
        "return": "(arg: EntityRemoveBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes your function from subsequent calls when an entity is being removed. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntityRemoveBeforeEvent) => void",
        "return": "void"
      }
    },
    "EntityRideableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityRideableComponent"
      },
      "controllingSeat": {
        "comment": {
          "params": {},
          "remarks": "Zero-based index of the seat that can used to control this entity.",
          "throws": "property can throw when used."
        },
        "match": "readonly controllingSeat: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "crouchingSkipInteract": {
        "comment": {
          "params": {},
          "remarks": "Determines whether interactions are not supported if the entity is crouching.",
          "throws": "property can throw when used."
        },
        "match": "readonly crouchingSkipInteract: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "interactText": {
        "comment": {
          "params": {},
          "remarks": "Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).",
          "throws": "property can throw when used."
        },
        "match": "readonly interactText: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "pullInEntities": {
        "comment": {
          "params": {},
          "remarks": "If true, this entity will pull in entities that are in the correct family_types into any available seat.",
          "throws": "property can throw when used."
        },
        "match": "readonly pullInEntities: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "riderCanInteract": {
        "comment": {
          "params": {},
          "remarks": "If true, this entity will be picked when looked at by the rider.",
          "throws": "property can throw when used."
        },
        "match": "readonly riderCanInteract: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "seatCount": {
        "comment": {
          "params": {},
          "remarks": "Number of seats for riders defined for this entity.",
          "throws": "property can throw when used."
        },
        "match": "readonly seatCount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:rideable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:rideable'"
      },
      "addRider": {
        "comment": {
          "params": {
            "rider": "Entity that will become the rider of this entity."
          },
          "remarks": "Adds an entity to this entity as a rider. This function can't be called in read-only mode.",
          "returns": "True if the rider entity was successfully added.",
          "throws": "function can throw errors."
        },
        "match": "addRider(rider: Entity): boolean",
        "kind": "public",
        "param": "rider: Entity",
        "return": "boolean"
      },
      "ejectRider": {
        "comment": {
          "params": {
            "rider": "Entity that should be ejected from this entity."
          },
          "remarks": "Ejects the specified rider of this entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "ejectRider(rider: Entity): void",
        "kind": "public",
        "param": "rider: Entity",
        "return": "void"
      },
      "ejectRiders": {
        "comment": {
          "params": {},
          "remarks": "Ejects all riders of this entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "ejectRiders(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "getFamilyTypes": {
        "comment": {
          "params": {},
          "remarks": "A string-list of entity types that this entity can support as riders.",
          "throws": "function can throw errors."
        },
        "match": "getFamilyTypes(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getRiders": {
        "comment": {
          "params": {},
          "remarks": "Gets a list of the all the entities currently riding this entity.",
          "throws": "function can throw errors."
        },
        "match": "getRiders(): Entity[]",
        "kind": "public",
        "param": "",
        "return": "Entity[]"
      },
      "getSeats": {
        "comment": {
          "params": {},
          "remarks": "Gets a list of positions and number of riders for each position for entities riding this entity.",
          "throws": "function can throw errors."
        },
        "match": "getSeats(): Seat[]",
        "kind": "public",
        "param": "",
        "return": "Seat[]"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityRidingComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityRidingComponent"
      },
      "entityRidingOn": {
        "comment": {
          "params": {},
          "remarks": "The entity this entity is currently riding on.",
          "throws": "property can throw when used."
        },
        "match": "readonly entityRidingOn: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:riding'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:riding'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityScaleComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityScaleComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Current value for the scale property set on entities. This property can't be edited in read-only mode."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:scale'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:scale'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntitySkinIdComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntitySkinIdComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Returns the value of the skin Id identifier of the entity. This property can't be edited in read-only mode."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:skin_id'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:skin_id'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntitySpawnAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntitySpawnAfterEvent"
      },
      "cause": {
        "comment": {
          "params": {},
          "remarks": "Initialization cause (Spawned, Born ...)."
        },
        "match": "readonly cause: EntityInitializationCause",
        "kind": "readonly",
        "param": "",
        "return": "EntityInitializationCause"
      },
      "entity": {
        "comment": {
          "params": {},
          "remarks": "Entity that was spawned. This property can't be edited in read-only mode."
        },
        "match": "entity: Entity",
        "kind": "public",
        "param": "",
        "return": "Entity"
      }
    },
    "EntitySpawnAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntitySpawnAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {
            "callback": "Function that handles the spawn event."
          },
          "remarks": "Method to register an event handler for what happens when an entity spawns. This function can't be called in read-only mode.",
          "example": "```typescript // register a new function that is called when a new entity is created. mc.world.afterEvents.entitySpawn.subscribe((entityEvent: mc.EntitySpawnAfterEvent) => { if (entityEvent && entityEvent.entity) { log(`New entity of type '${entityEvent.entity.typeId}' created!`, 1); } else { log(`The entity event didn't work as expected.`, -1); } }); mc.system.runTimeout(() => { createOldHorse(log, targetLocation); }, 20); ```"
        },
        "match": "subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: EntitySpawnAfterEvent) => void",
        "return": "(arg: EntitySpawnAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {
            "callback": "Original function that was passed into the subscribe event, that is to be unregistered."
          },
          "remarks": "Unregisters a method that was previously subscribed to the subscription event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: EntitySpawnAfterEvent) => void",
        "return": "void"
      }
    },
    "EntityStrengthComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityStrengthComponent"
      },
      "max": {
        "comment": {
          "params": {},
          "remarks": "Maximum strength of this entity, as defined in the entity type definition.",
          "throws": "property can throw when used."
        },
        "match": "readonly max: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Current value of the strength component that has been set for entities.",
          "throws": "property can throw when used."
        },
        "match": "readonly value: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:strength'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:strength'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityTameableComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityTameableComponent"
      },
      "probability": {
        "comment": {
          "params": {},
          "remarks": "The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100%",
          "throws": "property can throw when used."
        },
        "match": "readonly probability: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:tameable'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:tameable'"
      },
      "getTameItems": {
        "comment": {
          "params": {},
          "remarks": "Returns a set of items that can be used to tame this entity.",
          "throws": "function can throw errors."
        },
        "match": "getTameItems(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "tame": {
        "comment": {
          "params": {},
          "remarks": "Tames this entity. This function can't be called in read-only mode.",
          "returns": "Returns true if the entity was tamed.",
          "throws": "function can throw errors."
        },
        "match": "tame(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityType": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityType"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Identifier of this entity type - for example, 'minecraft:skeleton'."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "EntityTypeIterator": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityTypeIterator"
      },
      "next": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode."
        },
        "match": "next(): IteratorResult<EntityType>",
        "kind": "public",
        "param": "",
        "return": "IteratorResult<EntityType>"
      }
    },
    "EntityTypes": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityTypes"
      },
      "get": {
        "comment": {
          "params": {},
          "remarks": "Retrieves an entity type using a string-based identifier."
        },
        "match": "static get(identifier: string): EntityType | undefined",
        "kind": "static",
        "param": "identifier: string",
        "return": "EntityType | undefined"
      },
      "getAll": {
        "comment": {
          "params": {},
          "remarks": "Retrieves an iterator of all entity types within this world."
        },
        "match": "static getAll(): EntityTypeIterator",
        "kind": "static",
        "param": "",
        "return": "EntityTypeIterator"
      }
    },
    "EntityUnderwaterMovementComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityUnderwaterMovementComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:underwater_movement'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:underwater_movement'"
      },
      "currentValue": {
        "comment": {
          "params": {},
          "remarks": "Current value of this attribute for this instance.",
          "throws": "property can throw when used."
        },
        "match": "readonly currentValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "defaultValue": {
        "comment": {
          "params": {},
          "remarks": "Returns the default defined value for this attribute.",
          "throws": "property can throw when used."
        },
        "match": "readonly defaultValue: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMax": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective max of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMax: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "effectiveMin": {
        "comment": {
          "params": {},
          "remarks": "Returns the effective min of this attribute given any other ambient components or factors.",
          "throws": "property can throw when used."
        },
        "match": "readonly effectiveMin: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "resetToDefaultValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the defined default value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToDefaultValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMaxValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the maximum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMaxValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "resetToMinValue": {
        "comment": {
          "params": {},
          "remarks": "Resets the current value of this attribute to the minimum defined value. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetToMinValue(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "setCurrentValue": {
        "comment": {
          "params": {},
          "remarks": "Sets the current value of this attribute. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setCurrentValue(value: number): boolean",
        "kind": "public",
        "param": "value: number",
        "return": "boolean"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityVariantComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityVariantComponent"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Current value for variant for this entity, as specified via components.",
          "throws": "property can throw when used."
        },
        "match": "readonly value: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:variant'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:variant'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "EntityWantsJockeyComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EntityWantsJockeyComponent"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:wants_jockey'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:wants_jockey'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The entity that owns this component. The entity will be undefined if it has been removed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "ExplosionAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ExplosionAfterEvent"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension where the explosion has occurred."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "getImpactedBlocks": {
        "comment": {
          "params": {},
          "remarks": "Optional source of the explosion."
        },
        "match": "getImpactedBlocks(): Block[]",
        "kind": "public",
        "param": "",
        "return": "Block[]"
      }
    },
    "ExplosionAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ExplosionAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an explosion occurs. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ExplosionAfterEvent) => void",
        "return": "(arg: ExplosionAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an explosion occurs. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ExplosionAfterEvent) => void",
        "return": "void"
      }
    },
    "ExplosionBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ExplosionBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true, cancels the explosion event."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "setImpactedBlocks": {
        "comment": {
          "params": {
            "blocks": "New list of blocks that are impacted by this explosion."
          },
          "remarks": "Updates a collection of blocks impacted by this explosion event."
        },
        "match": "setImpactedBlocks(blocks: Block[]): void",
        "kind": "public",
        "param": "blocks: Block[]",
        "return": "void"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension where the explosion has occurred."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "getImpactedBlocks": {
        "comment": {
          "params": {},
          "remarks": "Optional source of the explosion."
        },
        "match": "getImpactedBlocks(): Block[]",
        "kind": "public",
        "param": "",
        "return": "Block[]"
      }
    },
    "ExplosionBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ExplosionBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when before an explosion occurs. The callback can optionally change or cancel explosion behavior. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ExplosionBeforeEvent) => void",
        "return": "(arg: ExplosionBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called from before when an explosion would occur. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ExplosionBeforeEvent) => void",
        "return": "void"
      }
    },
    "FeedItem": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "FeedItem"
      },
      "healAmount": {
        "comment": {
          "params": {},
          "remarks": "The amount of health this entity gains when fed this item. This number is an integer starting at 0. Sample values can go as high as 40."
        },
        "match": "readonly healAmount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "item": {
        "comment": {
          "params": {},
          "remarks": "Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'."
        },
        "match": "readonly item: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "getEffects": {
        "comment": {
          "params": {},
          "remarks": "As part of the Healable component, an optional collection of side effects that can occur from being fed an item."
        },
        "match": "getEffects(): FeedItemEffect[]",
        "kind": "public",
        "param": "",
        "return": "FeedItemEffect[]"
      }
    },
    "FeedItemEffect": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "FeedItemEffect"
      },
      "amplifier": {
        "comment": {
          "params": {},
          "remarks": "Gets an amplifier that may have been applied to this effect. Valid values are integers starting at 0 and up - but usually ranging between 0 and 4."
        },
        "match": "readonly amplifier: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "chance": {
        "comment": {
          "params": {},
          "remarks": "Chance that this effect is applied as a result of the entity being fed this item. Valid values range between 0 and 1."
        },
        "match": "readonly chance: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "duration": {
        "comment": {
          "params": {},
          "remarks": "Gets the duration, in ticks, of this effect."
        },
        "match": "readonly duration: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "name": {
        "comment": {
          "params": {},
          "remarks": "Gets the identifier of the effect to apply. Example values include 'fire_resistance' or 'regeneration'."
        },
        "match": "readonly name: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "FilterGroup": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "FilterGroup"
      }
    },
    "FluidContainer": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "FluidContainer"
      },
      "maxFillLevel": {
        "comment": {
          "params": {},
          "remarks": "Constant that represents the maximum fill level of a fluid container."
        },
        "match": "static readonly maxFillLevel = 6",
        "kind": "static readonly",
        "param": "",
        "return": "6"
      },
      "minFillLevel": {
        "comment": {
          "params": {},
          "remarks": "Constant that represents the minimum fill level of a fluid container."
        },
        "match": "static readonly minFillLevel = 0",
        "kind": "static readonly",
        "param": "",
        "return": "0"
      }
    },
    "IButtonPushAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "IButtonPushAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ButtonPushAfterEvent) => void",
        "return": "(arg: ButtonPushAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ButtonPushAfterEvent) => void",
        "return": "void"
      }
    },
    "ILeverActionAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ILeverActionAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: LeverActionAfterEvent) => void",
        "return": "(arg: LeverActionAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: LeverActionAfterEvent) => void",
        "return": "void"
      }
    },
    "IPlayerJoinAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "IPlayerJoinAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerJoinAfterEvent) => void",
        "return": "(arg: PlayerJoinAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerJoinAfterEvent) => void",
        "return": "void"
      }
    },
    "IPlayerLeaveAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "IPlayerLeaveAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerLeaveAfterEvent) => void",
        "return": "(arg: PlayerLeaveAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerLeaveAfterEvent) => void",
        "return": "void"
      }
    },
    "IPlayerSpawnAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "IPlayerSpawnAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerSpawnAfterEvent) => void",
        "return": "(arg: PlayerSpawnAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerSpawnAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemCompleteUseAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemCompleteUseAfterEvent"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "Returns the item stack that has completed charging."
        },
        "match": "readonly itemStack: ItemStack",
        "kind": "readonly",
        "param": "",
        "return": "ItemStack"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Returns the source entity that triggered this item event."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "useDuration": {
        "comment": {
          "params": {},
          "remarks": "Returns the time, in ticks, for the remaining duration left before the charge completes its cycle."
        },
        "match": "readonly useDuration: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      }
    },
    "ItemCompleteUseAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemCompleteUseAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a chargeable item completes charging. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemCompleteUseAfterEvent) => void",
        "return": "(arg: ItemCompleteUseAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a chargeable item completes charging. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemCompleteUseAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemComponent"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "ItemCooldownComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemCooldownComponent"
      },
      "cooldownCategory": {
        "comment": {
          "params": {},
          "remarks": "Represents the cooldown category that this item is associated with.",
          "throws": "property can throw when used."
        },
        "match": "readonly cooldownCategory: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "cooldownTicks": {
        "comment": {
          "params": {},
          "remarks": "Amount of time, in ticks, that remain for this item cooldown.",
          "throws": "property can throw when used."
        },
        "match": "readonly cooldownTicks: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:cooldown'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:cooldown'"
      },
      "startCooldown": {
        "comment": {
          "params": {},
          "remarks": "Starts a new cooldown period for this item. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "startCooldown(player: Player): void",
        "kind": "public",
        "param": "player: Player",
        "return": "void"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "ItemDefinitionAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemDefinitionAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an item's definition and components change. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void,): (arg: ItemDefinitionTriggeredAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemDefinitionTriggeredAfterEvent) => void,",
        "return": "(arg: ItemDefinitionTriggeredAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an item's definition and components change. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemDefinitionTriggeredAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemDefinitionTriggeredAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemDefinitionBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemDefinitionBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an item's definition and components change. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void,): (arg: ItemDefinitionTriggeredBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void,",
        "return": "(arg: ItemDefinitionTriggeredBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an item's definition and components change. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemDefinitionTriggeredBeforeEvent) => void",
        "return": "void"
      }
    },
    "ItemDefinitionTriggeredAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemDefinitionTriggeredAfterEvent"
      },
      "eventName": {
        "comment": {
          "params": {},
          "remarks": "Name of the data-driven item event that is triggering this change."
        },
        "match": "readonly eventName: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "Related item stack that the definitional change has been triggered upon."
        },
        "match": "itemStack: ItemStack",
        "kind": "public",
        "param": "",
        "return": "ItemStack"
      }
    },
    "ItemDefinitionTriggeredBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemDefinitionTriggeredBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true, will cancel the application of this item definition change."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "eventName": {
        "comment": {
          "params": {},
          "remarks": "Name of the data-driven item event that is triggering this change."
        },
        "match": "readonly eventName: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "Related item stack that the definitional change has been triggered upon."
        },
        "match": "itemStack: ItemStack",
        "kind": "public",
        "param": "",
        "return": "ItemStack"
      }
    },
    "ItemDurabilityComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemDurabilityComponent"
      },
      "damage": {
        "comment": {
          "params": {},
          "remarks": "Returns the current damage level of this particular item. This property can't be edited in read-only mode."
        },
        "match": "damage: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "maxDurability": {
        "comment": {
          "params": {},
          "remarks": "Represents the amount of damage that this item can take before breaking.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxDurability: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:durability'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:durability'"
      },
      "getDamageChance": {
        "comment": {
          "params": {
            "unbreaking": "Unbreaking factor to consider in factoring the damage chance. Incoming unbreaking parameter must be greater than 0."
          },
          "remarks": "Returns the maximum chance that this item would be damaged using the damageRange property, given an unbreaking level. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "getDamageChance(unbreaking?: number): number",
        "kind": "public",
        "param": "unbreaking?: number",
        "return": "number"
      },
      "getDamageRange": {
        "comment": {
          "params": {},
          "remarks": "A range of numbers that describes the chance of the item losing durability. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "getDamageRange(): minecraftcommon.NumberRange",
        "kind": "public",
        "param": "",
        "return": "minecraftcommon.NumberRange"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "ItemEnchantsComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemEnchantsComponent"
      },
      "enchantments": {
        "comment": {
          "params": {},
          "remarks": "Returns a collection of the enchantments applied to this item stack. This property can't be edited in read-only mode."
        },
        "match": "enchantments: EnchantmentList",
        "kind": "public",
        "param": "",
        "return": "EnchantmentList"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:enchantments'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:enchantments'"
      },
      "removeAllEnchantments": {
        "comment": {
          "params": {},
          "remarks": "Removes all enchantments applied to this item stack. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "removeAllEnchantments(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "ItemFoodComponent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemFoodComponent"
      },
      "canAlwaysEat": {
        "comment": {
          "params": {},
          "remarks": "If true, the player can always eat this item (even when not hungry).",
          "throws": "property can throw when used."
        },
        "match": "readonly canAlwaysEat: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "nutrition": {
        "comment": {
          "params": {},
          "remarks": "Represents how much nutrition this food item will give an entity when eaten.",
          "throws": "property can throw when used."
        },
        "match": "readonly nutrition: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "saturationModifier": {
        "comment": {
          "params": {},
          "remarks": "When an item is eaten, this value is used according to this formula (nutrition * saturation_modifier * 2) to apply a saturation buff.",
          "throws": "property can throw when used."
        },
        "match": "readonly saturationModifier: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "usingConvertsTo": {
        "comment": {
          "params": {},
          "remarks": "When specified, converts the active item to the one specified by this property.",
          "throws": "property can throw when used."
        },
        "match": "readonly usingConvertsTo: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "componentId": {
        "comment": {
          "params": {}
        },
        "match": "static readonly componentId = 'minecraft:food'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:food'"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the component."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the component is valid. A component is considered valid if its owner is valid, in addition to any addition to any additional validation required by the component.",
          "returns": "Whether the component is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "ItemReleaseUseAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemReleaseUseAfterEvent"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "Returns the item stack that triggered this item event."
        },
        "match": "readonly itemStack: ItemStack",
        "kind": "readonly",
        "param": "",
        "return": "ItemStack"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Returns the source entity that triggered this item event."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "useDuration": {
        "comment": {
          "params": {},
          "remarks": "Returns the time, in ticks, for the remaining duration left before the charge completes its cycle."
        },
        "match": "readonly useDuration: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      }
    },
    "ItemReleaseUseAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemReleaseUseAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a chargeable item is released from charging. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemReleaseUseAfterEvent) => void",
        "return": "(arg: ItemReleaseUseAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a chargeable item is released from charging. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemReleaseUseAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemStack": {
      "amount": {
        "comment": {
          "params": {},
          "remarks": "Number of the items in the stack. Valid values range between 1-255. The provided value will be clamped to the item's maximum stack size. This property can't be edited in read-only mode.",
          "throws": "Throws if the value is outside the range of 1-255."
        },
        "match": "amount: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isStackable": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the item is stackable. An item is considered stackable if the item's maximum stack size is greater than 1 and the item does not contain any custom data or properties."
        },
        "match": "readonly isStackable: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "keepOnDeath": {
        "comment": {
          "params": {},
          "remarks": "Gets or sets whether the item is kept on death. This property can't be edited in read-only mode."
        },
        "match": "keepOnDeath: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "lockMode": {
        "comment": {
          "params": {},
          "remarks": "Gets or sets the item's lock mode. The default value is `ItemLockMode.none`. This property can't be edited in read-only mode."
        },
        "match": "lockMode: ItemLockMode",
        "kind": "public",
        "param": "",
        "return": "ItemLockMode"
      },
      "maxAmount": {
        "comment": {
          "params": {},
          "remarks": "The maximum stack size. This value varies depending on the type of item. For example, torches have a maximum stack size of 64, while eggs have a maximum stack size of 16."
        },
        "match": "readonly maxAmount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Given name of this stack of items. The name tag is displayed when hovering over the item. Setting the name tag to an empty string or `undefined` will remove the name tag. This property can't be edited in read-only mode.",
          "throws": "Throws if the length exceeds 255 characters."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "constructor": {
        "comment": {
          "params": {
            "itemType": "Type of item to create. See the {@link",
            "amount": "Number of items to place in the stack, between 1-255. The provided value will be clamped to the item's maximum stack size. Note that certain items can only have one item in the stack."
          },
          "remarks": "Creates a new instance of a stack of items for use in the world.",
          "minecraft/vanilla-data.MinecraftItemTypes}": "for a list of standard item types in Minecraft experiences.",
          "throws": "Throws if `itemType` is invalid, or if `amount` is outside the range of 1-255."
        },
        "match": "constructor(itemType: ItemType | string, amount?: number)",
        "kind": "public",
        "param": "itemType: ItemType | string, amount?: number",
        "return": "ItemStack"
      },
      "clone": {
        "comment": {
          "params": {},
          "remarks": "Creates an exact copy of the item stack, including any custom data or properties.",
          "returns": "Returns a copy of this item stack."
        },
        "match": "clone(): ItemStack",
        "kind": "public",
        "param": "",
        "return": "ItemStack"
      },
      "getCanDestroy": {
        "comment": {
          "params": {},
          "remarks": "Get the list of block types this item can break in Adventure mode. This function can't be called in read-only mode."
        },
        "match": "getCanDestroy(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getCanPlaceOn": {
        "comment": {
          "params": {},
          "remarks": "Get the list of block types this item can be placed on in Adventure mode. This function can't be called in read-only mode."
        },
        "match": "getCanPlaceOn(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getComponents": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:food'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs can be found as part of the {@link ItemComponentTypes} enum."
          },
          "remarks": "Gets a component (that represents additional capabilities) for an item stack.",
          "returns": "Returns the component if it exists on the item stack, otherwise undefined.",
          "example": "```typescript // Get the maximum durability of a custom sword item const itemStack = new ItemStack('custom:sword'); const durability = itemStack.getComponent(ItemComponentTypes.Durability); const maxDurability = durability.maxDurability; ```"
        },
        "match": "getComponents(): ItemComponent[]",
        "kind": "public",
        "param": "",
        "return": "ItemComponent[]"
      },
      "getLore": {
        "comment": {
          "params": {},
          "remarks": "Returns the lore value - a secondary display string - for an ItemStack.",
          "returns": "An array of lore lines. If the item does not have lore, returns an empty array."
        },
        "match": "getLore(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getTags": {
        "comment": {
          "params": {},
          "remarks": "Returns a set of tags associated with this item stack."
        },
        "match": "getTags(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "hasComponent": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:food') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed."
          },
          "remarks": "Returns true if the specified component is present on this item stack."
        },
        "match": "hasComponent(componentId: string): boolean",
        "kind": "public",
        "param": "componentId: string",
        "return": "boolean"
      },
      "hasTag": {
        "comment": {
          "params": {
            "tag": "Tag to search for."
          },
          "remarks": "Checks whether this item stack has a particular tag associated with it.",
          "returns": "True if the Item Stack has the tag associated with it, else false."
        },
        "match": "hasTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "isStackableWith": {
        "comment": {
          "params": {
            "itemStack": "ItemStack to check stacking compatability with."
          },
          "remarks": "Returns whether this item stack can be stacked with the given `itemStack`. This is determined by comparing the item type and any custom data and properties associated with the item stacks. The amount of each item stack is not taken into consideration.",
          "returns": "True if the Item Stack is stackable with the itemStack passed in."
        },
        "match": "isStackableWith(itemStack: ItemStack): boolean",
        "kind": "public",
        "param": "itemStack: ItemStack",
        "return": "boolean"
      },
      "setCanDestroy": {
        "comment": {
          "params": {
            "blockIdentifiers": "String list of block types that the item can destroy."
          },
          "remarks": "The list of block types this item can break in Adventure mode. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list. This function can't be called in read-only mode.",
          "throws": "Throws if any of the provided block identifiers are invalid.",
          "example": "```typescript // Creates a diamond pickaxe that can destroy cobblestone and obsidian const specialPickaxe = new ItemStack(\"minecraft:diamond_pickaxe\"); specialPickaxe.setCanDestroy([\"minecraft:cobblestone\", \"minecraft:obsidian\"]); ```"
        },
        "match": "setCanDestroy(blockIdentifiers?: string[]): void",
        "kind": "public",
        "param": "blockIdentifiers?: string[]",
        "return": "void"
      },
      "setCanPlaceOn": {
        "comment": {
          "params": {
            "blockIdentifiers": "String list of block types that the item can be placed on."
          },
          "remarks": "The list of block types this item can be placed on in Adventure mode. This is only applicable to block items. The block names are displayed in the item's tooltip. Setting the value to undefined will clear the list. This function can't be called in read-only mode.",
          "throws": "Throws if any of the provided block identifiers are invalid.",
          "example": "```typescript // Creates a gold block that can be placed on grass and dirt const specialGoldBlock = new ItemStack(\"minecraft:gold_block\"); specialPickaxe.setCanPlaceOn([\"minecraft:grass\", \"minecraft:dirt\"]); ```"
        },
        "match": "setCanPlaceOn(blockIdentifiers?: string[]): void",
        "kind": "public",
        "param": "blockIdentifiers?: string[]",
        "return": "void"
      },
      "setLore": {
        "comment": {
          "params": {
            "loreList": "List of lore lines. Each element in the list represents a new line. The maximum lore line count is 20. The maximum lore line length is 50 characters."
          },
          "remarks": "Sets the lore value - a secondary display string - for an ItemStack. The lore list is cleared if set to an empty string or undefined. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript // Set the lore of an item to multiple lines of text const itemStack = new ItemStack(\"minecraft:diamond_sword\"); itemStack.setLore([\"Line 1\", \"Line 2\", \"Line 3\"]); ```"
        },
        "match": "setLore(loreList?: string[]): void",
        "kind": "public",
        "param": "loreList?: string[]",
        "return": "void"
      },
      "triggerEvent": {
        "comment": {
          "params": {
            "eventName": "Name of the item type event to trigger. If a namespace is not specified, minecraft: is assumed."
          },
          "beta": "",
          "remarks": "Triggers an item type event. For custom items, a number of events are defined in an items' definition for key item behaviors. This function can't be called in read-only mode."
        },
        "match": "triggerEvent(eventName: string): void",
        "kind": "public",
        "param": "eventName: string",
        "return": "void"
      }
    },
    "ItemStartUseAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemStartUseAfterEvent"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "The impacted item stack that is starting to be charged."
        },
        "match": "readonly itemStack: ItemStack",
        "kind": "readonly",
        "param": "",
        "return": "ItemStack"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Returns the source entity that triggered this item event."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "useDuration": {
        "comment": {
          "params": {},
          "remarks": "Returns the time, in ticks, for the remaining duration left before the charge completes its cycle."
        },
        "match": "readonly useDuration: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      }
    },
    "ItemStartUseAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemStartUseAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a chargeable item starts charging. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemStartUseAfterEvent) => void",
        "return": "(arg: ItemStartUseAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a chargeable item starts charging. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemStartUseAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemStartUseOnAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemStartUseOnAfterEvent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "The block that the item is used on."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "blockFace": {
        "comment": {
          "params": {},
          "remarks": "The face of the block that an item is being used on."
        },
        "match": "readonly blockFace: Direction",
        "kind": "readonly",
        "param": "",
        "return": "Direction"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "The impacted item stack that is starting to be used. Can be undefined in some gameplay scenarios like pushing a button with an empty hand."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "ItemStartUseOnAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemStartUseOnAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an item is used on a block. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemStartUseOnAfterEvent) => void",
        "return": "(arg: ItemStartUseOnAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an item is used on a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemStartUseOnAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemStopUseAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemStopUseAfterEvent"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "The impacted item stack that is stopping being charged. ItemStopUseAfterEvent can be called when teleporting to a different dimension and this can be undefined."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "useDuration": {
        "comment": {
          "params": {},
          "remarks": "Returns the time, in ticks, for the remaining duration left before the charge completes its cycle."
        },
        "match": "readonly useDuration: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      }
    },
    "ItemStopUseAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemStopUseAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a chargeable item stops charging. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemStopUseAfterEvent) => void",
        "return": "(arg: ItemStopUseAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a chargeable item stops charging. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemStopUseAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemStopUseOnAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemStopUseOnAfterEvent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "The block that the item is used on."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "The impacted item stack that is being used on a block."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "ItemStopUseOnAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemStopUseOnAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an item stops being used on a block. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemStopUseOnAfterEvent) => void",
        "return": "(arg: ItemStopUseOnAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an item is used on a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemStopUseOnAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemType": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemType"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Returns the identifier of the item type - for example, 'minecraft:apple'."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "ItemTypes": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemTypes"
      },
      "get": {
        "comment": {
          "params": {},
          "remarks": "Returns a specific item type, if available within Minecraft."
        },
        "match": "static get(itemId: string): ItemType | undefined",
        "kind": "static",
        "param": "itemId: string",
        "return": "ItemType | undefined"
      },
      "getAll": {
        "comment": {
          "params": {},
          "remarks": "Retrieves all available item types registered within Minecraft."
        },
        "match": "static getAll(): ItemType[]",
        "kind": "static",
        "param": "",
        "return": "ItemType[]"
      }
    },
    "ItemUseAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemUseAfterEvent"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "The impacted item stack that is being used."
        },
        "match": "itemStack: ItemStack",
        "kind": "public",
        "param": "",
        "return": "ItemStack"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Returns the source entity that triggered this item event."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "ItemUseAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemUseAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an item is used. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemUseAfterEvent) => void",
        "return": "(arg: ItemUseAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an item is used. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemUseAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemUseBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemUseBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true, this will cancel the item use behavior."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "The impacted item stack that is being used."
        },
        "match": "itemStack: ItemStack",
        "kind": "public",
        "param": "",
        "return": "ItemStack"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Returns the source entity that triggered this item event."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "ItemUseBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemUseBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before an item is used. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemUseBeforeEvent) => void",
        "return": "(arg: ItemUseBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called before an item is used. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemUseBeforeEvent) => void",
        "return": "void"
      }
    },
    "ItemUseOnAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemUseOnAfterEvent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "The block that the item is used on."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "blockFace": {
        "comment": {
          "params": {},
          "remarks": "The face of the block that an item is being used on."
        },
        "match": "readonly blockFace: Direction",
        "kind": "readonly",
        "param": "",
        "return": "Direction"
      },
      "faceLocation": {
        "comment": {
          "params": {},
          "remarks": "Location relative to the bottom north-west corner of the block where the item is placed."
        },
        "match": "readonly faceLocation: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "The impacted item stack that is being used on a block."
        },
        "match": "readonly itemStack: ItemStack",
        "kind": "readonly",
        "param": "",
        "return": "ItemStack"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Returns the source entity that triggered this item event."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "ItemUseOnAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemUseOnAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an item is used on a block. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemUseOnAfterEvent) => void",
        "return": "(arg: ItemUseOnAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an item is used on a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemUseOnAfterEvent) => void",
        "return": "void"
      }
    },
    "ItemUseOnBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemUseOnBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true, this will cancel the item use behavior."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "The block that the item is used on."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "blockFace": {
        "comment": {
          "params": {},
          "remarks": "The face of the block that an item is being used on."
        },
        "match": "readonly blockFace: Direction",
        "kind": "readonly",
        "param": "",
        "return": "Direction"
      },
      "faceLocation": {
        "comment": {
          "params": {},
          "remarks": "Location relative to the bottom north-west corner of the block where the item is placed."
        },
        "match": "readonly faceLocation: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "The impacted item stack that is being used on a block."
        },
        "match": "readonly itemStack: ItemStack",
        "kind": "readonly",
        "param": "",
        "return": "ItemStack"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Returns the source entity that triggered this item event."
        },
        "match": "readonly source: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "ItemUseOnBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ItemUseOnBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before an item is used on a block. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ItemUseOnBeforeEvent) => void",
        "return": "(arg: ItemUseOnBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called before an item is used on a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ItemUseOnBeforeEvent) => void",
        "return": "void"
      }
    },
    "LeverActionAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "LeverActionAfterEvent"
      },
      "isPowered": {
        "comment": {
          "params": {},
          "remarks": "True if the lever is activated (that is, transmitting power)."
        },
        "match": "readonly isPowered: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "Optional player that triggered the lever activation."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "LeverActionAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "LeverActionAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: LeverActionAfterEvent) => void",
        "return": "(arg: LeverActionAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: LeverActionAfterEvent) => void",
        "return": "void"
      }
    },
    "MessageReceiveAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "MessageReceiveAfterEvent"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "The message identifier."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "message": {
        "comment": {
          "params": {},
          "remarks": "The message."
        },
        "match": "readonly message: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "The player who sent the message."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "MinecraftDimensionTypes": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "MinecraftDimensionTypes"
      },
      "nether": {
        "comment": {
          "params": {},
          "remarks": "The Nether is a collection of biomes separate from the Overworld, including Soul Sand Valleys and Crimson forests. Nether fortresses contain exclusive resources. Mobs such as Blaze, Hoglins, Piglins, and Ghasts congregate here."
        },
        "match": "static readonly nether = 'minecraft:nether'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:nether'"
      },
      "overworld": {
        "comment": {
          "params": {},
          "remarks": "The overworld is a collection of biomes, including forests, plains, jungles, mountains, deserts, taiga, and more. This is the default starter dimension for Minecraft. Mobs such as Axolotl, Cows, Creepers, and Zombies congregate here."
        },
        "match": "static readonly overworld = 'minecraft:overworld'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:overworld'"
      },
      "theEnd": {
        "comment": {
          "params": {},
          "remarks": "The End is separate from the Overworld and the Nether and is generated whenever you create an End portal. Here, a giant center island is surrounded by several smaller areas and islands. You can find Endermen here. End midlands are larger areas that transition you from the center to the outer edges of the End. They contain Shulkers, Endermen, End gateway portals, and End cities. End gateway portals are commonly found at the outermost edge of the void. You usually find End barrens toward the edges of the main areas or land in the End."
        },
        "match": "static readonly theEnd = 'minecraft:the_end'",
        "kind": "static readonly",
        "param": "",
        "return": "'minecraft:the_end'"
      }
    },
    "MolangVariableMap": {
      "setColorRGB": {
        "comment": {
          "params": {},
          "remarks": "Adds the following variables to Molang: - `<variable_name>.r` - Red color value [0-1] - `<variable_name>.g` - Green color value [0-1] - `<variable_name>.b` - Blue color value [0-1]",
          "throws": "function can throw errors."
        },
        "match": "setColorRGB(variableName: string, color: RGB): void",
        "kind": "public",
        "param": "variableName: string, color: RGB",
        "return": "void"
      },
      "setColorRGBA": {
        "comment": {
          "params": {},
          "remarks": "Adds the following variables to Molang: - `<variable_name>.r` - Red color value [0-1] - `<variable_name>.g` - Green color value [0-1] - `<variable_name>.b` - Blue color value [0-1] - `<variable_name>.a` - Alpha (transparency) color value [0-1]",
          "throws": "function can throw errors."
        },
        "match": "setColorRGBA(variableName: string, color: RGBA): void",
        "kind": "public",
        "param": "variableName: string, color: RGBA",
        "return": "void"
      },
      "setFloat": {
        "comment": {
          "params": {
            "variableName": "Name of the float-based number to set.",
            "number": "Value for the Molang-based variable to set."
          },
          "remarks": "Sets a numeric (decimal) value within the Molang variable map.",
          "throws": "function can throw errors."
        },
        "match": "setFloat(variableName: string, number: number): void",
        "kind": "public",
        "param": "variableName: string, number: number",
        "return": "void"
      },
      "setSpeedAndDirection": {
        "comment": {
          "params": {},
          "remarks": "Adds the following variables to Molang: - `<variable_name>.speed` - Speed number provided - `<variable_name>.direction_x` - X value from the {@link Vector3} provided - `<variable_name>.direction_y` - Y value from the {@link Vector3} provided - `<variable_name>.direction_z` - Z value from the {@link Vector3} provided",
          "throws": "function can throw errors."
        },
        "match": "setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void",
        "kind": "public",
        "param": "variableName: string, speed: number, direction: Vector3",
        "return": "void"
      },
      "setVector3": {
        "comment": {
          "params": {},
          "remarks": "Adds the following variables to Molang: - `<variable_name>.x` - X value from the {@link Vector3} provided - `<variable_name>.y` - Y value from the {@link Vector3} provided - `<variable_name>.z` - Z value from the {@link Vector3} provided",
          "throws": "function can throw errors."
        },
        "match": "setVector3(variableName: string, vector: Vector3): void",
        "kind": "public",
        "param": "variableName: string, vector: Vector3",
        "return": "void"
      }
    },
    "NavigationResult": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "NavigationResult"
      },
      "isFullPath": {
        "comment": {
          "params": {},
          "remarks": "Whether the navigation result contains a full path, including to the requested destination."
        },
        "match": "readonly isFullPath: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "getPath": {
        "comment": {
          "params": {},
          "remarks": "A set of block locations that comprise the navigation route."
        },
        "match": "getPath(): Vector3[]",
        "kind": "public",
        "param": "",
        "return": "Vector3[]"
      }
    },
    "PistonActivateAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PistonActivateAfterEvent"
      },
      "isExpanding": {
        "comment": {
          "params": {},
          "remarks": "True if the piston is the process of expanding."
        },
        "match": "readonly isExpanding: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "piston": {
        "comment": {
          "params": {},
          "remarks": "Contains additional properties and details of the piston."
        },
        "match": "readonly piston: BlockPistonComponent",
        "kind": "readonly",
        "param": "",
        "return": "BlockPistonComponent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "PistonActivateAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PistonActivateAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a piston expands or retracts. This function can't be called in read-only mode.",
          "example": "```typescript let canceled = false; const pistonLoc: mc.Vector3 = { x: Math.floor(targetLocation.x) + 1, y: Math.floor(targetLocation.y) + 2, z: Math.floor(targetLocation.z) + 1, }; const pistonCallback = mc.world.beforeEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateBeforeEvent) => { if (pistonEvent.piston.location.equals(pistonLoc)) { log(\"Cancelling piston event\"); pistonEvent.cancel = true; canceled = true; } }); ```"
        },
        "match": "subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PistonActivateAfterEvent) => void",
        "return": "(arg: PistonActivateAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a piston expands or retracts. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PistonActivateAfterEvent) => void",
        "return": "void"
      }
    },
    "PistonActivateBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PistonActivateBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If this is set to true within an event handler, the piston activation is canceled."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "isExpanding": {
        "comment": {
          "params": {},
          "remarks": "True if the piston is the process of expanding."
        },
        "match": "readonly isExpanding: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "piston": {
        "comment": {
          "params": {},
          "remarks": "Contains additional properties and details of the piston."
        },
        "match": "readonly piston: BlockPistonComponent",
        "kind": "readonly",
        "param": "",
        "return": "BlockPistonComponent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "PistonActivateBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PistonActivateBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before a piston expands or retracts. This function can't be called in read-only mode.",
          "example": "```typescript // set up a couple of piston blocks let piston = overworld.getBlock(targetLocation); let button = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y + 1, z: targetLocation.z }); if (piston === undefined || button === undefined) { log(\"Could not find block at location.\"); return -1; } piston.setPermutation(mc.BlockPermutation.resolve('piston').withState('facing_direction', 3)); button.setPermutation(mc.BlockPermutation.resolve('acacia_button').withState('facing_direction', 1)); const uncanceledPistonLoc = { x: Math.floor(targetLocation.x) + 2, y: Math.floor(targetLocation.y), z: Math.floor(targetLocation.z) + 2, }; // this is our control. let uncanceledPiston = overworld.getBlock(uncanceledPistonLoc); let uncanceledButton = overworld.getBlock({ x: uncanceledPistonLoc.x, y: uncanceledPistonLoc.y + 1, z: uncanceledPistonLoc.z, }); if (uncanceledPiston === undefined || uncanceledButton === undefined) { log(\"Could not find block at location.\"); return -1; } uncanceledPiston.setPermutation(mc.BlockPermutation.resolve('piston').withState('facing_direction', 3)); uncanceledButton.setPermutation(mc.BlockPermutation.resolve('acacia_button').withState('facing_direction', 1)); mc.world.beforeEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateBeforeEvent) => { let eventLoc = pistonEvent.piston.block.location; if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) { log(\"Cancelling piston event\"); pistonEvent.cancel = true; } }); ```"
        },
        "match": "subscribe(callback: (arg: PistonActivateBeforeEvent) => void): (arg: PistonActivateBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PistonActivateBeforeEvent) => void",
        "return": "(arg: PistonActivateBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called before a piston expands or retracts. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PistonActivateBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PistonActivateBeforeEvent) => void",
        "return": "void"
      }
    },
    "Player": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Player"
      },
      "camera": {
        "comment": {
          "params": {},
          "remarks": "The player's Camera.",
          "throws": "property can throw when used."
        },
        "match": "readonly camera: Camera",
        "kind": "readonly",
        "param": "",
        "return": "Camera"
      },
      "isEmoting": {
        "comment": {
          "params": {},
          "remarks": "If true, the player is currently emoting.",
          "throws": "property can throw when used."
        },
        "match": "readonly isEmoting: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isFlying": {
        "comment": {
          "params": {},
          "remarks": "Whether the player is flying. For example, in Creative or Spectator mode.",
          "throws": "property can throw when used."
        },
        "match": "readonly isFlying: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isGliding": {
        "comment": {
          "params": {},
          "remarks": "Whether the player is gliding with Elytra.",
          "throws": "property can throw when used."
        },
        "match": "readonly isGliding: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isJumping": {
        "comment": {
          "params": {},
          "remarks": "Whether the player is jumping. This will remain true while the player is holding the jump action.",
          "throws": "property can throw when used."
        },
        "match": "readonly isJumping: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "level": {
        "comment": {
          "params": {},
          "remarks": "The current overall level for the player, based on their experience.",
          "throws": "property can throw when used."
        },
        "match": "readonly level: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "name": {
        "comment": {
          "params": {},
          "remarks": "Name of the player.",
          "throws": "property can throw when used."
        },
        "match": "readonly name: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "onScreenDisplay": {
        "comment": {
          "params": {},
          "remarks": "Contains methods for manipulating the on-screen display of a Player.",
          "throws": "property can throw when used."
        },
        "match": "readonly onScreenDisplay: ScreenDisplay",
        "kind": "readonly",
        "param": "",
        "return": "ScreenDisplay"
      },
      "selectedSlot": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Manages the selected slot in the player's hotbar. This property can't be edited in read-only mode."
        },
        "match": "selectedSlot: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "totalXpNeededForNextLevel": {
        "comment": {
          "params": {},
          "remarks": "The overall total set of experience needed to achieve the next level for a player.",
          "throws": "property can throw when used."
        },
        "match": "readonly totalXpNeededForNextLevel: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "xpEarnedAtCurrentLevel": {
        "comment": {
          "params": {},
          "remarks": "The current set of experience achieved for the player.",
          "throws": "property can throw when used."
        },
        "match": "readonly xpEarnedAtCurrentLevel: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "addExperience": {
        "comment": {
          "params": {
            "amount": "Amount of experience to add. Note that this can be negative. Min/max bounds at -2^24 ~ 2^24"
          },
          "remarks": "Adds/removes experience to/from the Player and returns the current experience of the Player. This function can't be called in read-only mode.",
          "returns": "Returns the current experience of the Player.",
          "throws": "function can throw errors."
        },
        "match": "addExperience(amount: number): number",
        "kind": "public",
        "param": "amount: number",
        "return": "number"
      },
      "addLevels": {
        "comment": {
          "params": {
            "amount": "Amount to add to the player. Min/max bounds at -2^24 ~ 2^24"
          },
          "remarks": "Adds/removes level to/from the Player and returns the current level of the Player. This function can't be called in read-only mode.",
          "returns": "Returns the current level of the Player.",
          "throws": "function can throw errors."
        },
        "match": "addLevels(amount: number): number",
        "kind": "public",
        "param": "amount: number",
        "return": "number"
      },
      "getItemCooldown": {
        "comment": {
          "params": {
            "itemCategory": "Specifies the cooldown category to retrieve the current cooldown for."
          },
          "beta": "",
          "remarks": "Gets the current item cooldown time for a particular cooldown category.",
          "throws": "function can throw errors."
        },
        "match": "getItemCooldown(itemCategory: string): number",
        "kind": "public",
        "param": "itemCategory: string",
        "return": "number"
      },
      "getSpawnPoint": {
        "comment": {
          "params": {},
          "remarks": "Gets the current spawn point of the player.",
          "throws": "function can throw errors."
        },
        "match": "getSpawnPoint(): DimensionLocation | undefined",
        "kind": "public",
        "param": "",
        "return": "DimensionLocation | undefined"
      },
      "getTotalXp": {
        "comment": {
          "params": {},
          "remarks": "Gets the total experience of the Player.",
          "throws": "function can throw errors."
        },
        "match": "getTotalXp(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isOp": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns true if this player has operator-level permissions.",
          "throws": "function can throw errors."
        },
        "match": "isOp(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "playMusic": {
        "comment": {
          "params": {
            "trackId": "Identifier of the music track to play.",
            "musicOptions": "Additional options for the music track."
          },
          "beta": "",
          "remarks": "Plays a music track that only this particular player can hear. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "playMusic(trackId: string, musicOptions?: MusicOptions): void",
        "kind": "public",
        "param": "trackId: string, musicOptions?: MusicOptions",
        "return": "void"
      },
      "playSound": {
        "comment": {
          "params": {
            "soundOptions": "Additional optional options for the sound."
          },
          "remarks": "Plays a sound that only this particular player can hear. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript let players = mc.world.getPlayers(); const musicOptions: mc.MusicOptions = { fade: 0.5, loop: true, volume: 1.0, }; mc.world.playMusic(\"music.menu\", musicOptions); const worldSoundOptions: mc.WorldSoundOptions = { pitch: 0.5, volume: 4.0, }; mc.world.playSound(\"ambient.weather.thunder\", targetLocation, worldSoundOptions); const playerSoundOptions: mc.PlayerSoundOptions = { pitch: 1.0, volume: 1.0, }; players[0].playSound(\"bucket.fill_water\", playerSoundOptions); ```"
        },
        "match": "playSound(soundId: string, soundOptions?: PlayerSoundOptions): void",
        "kind": "public",
        "param": "soundId: string, soundOptions?: PlayerSoundOptions",
        "return": "void"
      },
      "postClientMessage": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This is an internal-facing method for posting a system message to downstream clients. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "postClientMessage(id: string, value: string): void",
        "kind": "public",
        "param": "id: string, value: string",
        "return": "void"
      },
      "queueMusic": {
        "comment": {
          "params": {
            "trackId": "Identifier of the music track to play.",
            "musicOptions": "Additional options for the music track."
          },
          "beta": "",
          "remarks": "Queues an additional music track that only this particular player can hear. If a track is not playing, a music track will play. This function can't be called in read-only mode.",
          "throws": "An error will be thrown if volume is less than 0.0. An error will be thrown if fade is less than 0.0."
        },
        "match": "queueMusic(trackId: string, musicOptions?: MusicOptions): void",
        "kind": "public",
        "param": "trackId: string, musicOptions?: MusicOptions",
        "return": "void"
      },
      "resetLevel": {
        "comment": {
          "params": {},
          "remarks": "Resets the level of the player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetLevel(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "sendMessage": {
        "comment": {
          "params": {
            "message": "The message to be displayed."
          },
          "remarks": "Sends a message to the player.",
          "throws": "This method can throw if the provided {@link RawMessage} is in an invalid format. For example, if an empty `name` string is provided to `score`.",
          "example": "```typescript // Displays \"First or Second\" const rawMessage = { translate: \"accessibility.list.or.two\", with: [\"First\", \"Second\"] }; player.sendMessage(rawMessage); ```"
        },
        "match": "sendMessage(message: (RawMessage | string)[] | RawMessage | string): void",
        "kind": "public",
        "param": "message: (RawMessage | string)[] | RawMessage | string",
        "return": "void"
      },
      "setOp": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Will change the specified players permissions, and whether they are operator or not. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setOp(isOp: boolean): void",
        "kind": "public",
        "param": "isOp: boolean",
        "return": "void"
      },
      "setSpawnPoint": {
        "comment": {
          "params": {},
          "remarks": "Sets the current starting spawn point for this particular player. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link Error} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "setSpawnPoint(spawnPoint?: DimensionLocation): void",
        "kind": "public",
        "param": "spawnPoint?: DimensionLocation",
        "return": "void"
      },
      "startItemCooldown": {
        "comment": {
          "params": {
            "itemCategory": "Specifies the cooldown category to retrieve the current cooldown for.",
            "tickDuration": "Duration in ticks of the item cooldown."
          },
          "beta": "",
          "remarks": "Sets the item cooldown time for a particular cooldown category. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "startItemCooldown(itemCategory: string, tickDuration: number): void",
        "kind": "public",
        "param": "itemCategory: string, tickDuration: number",
        "return": "void"
      },
      "stopMusic": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Stops any music tracks from playing for this particular player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "stopMusic(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that the entity is currently within.",
          "throws": "property can throw when used."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "fallDistance": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The distance an entity has fallen. The value is reset when the entity is teleported. The value is always 1 when gliding with Elytra.",
          "throws": "property can throw when used."
        },
        "match": "readonly fallDistance: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Unique identifier of the entity. This identifier is intended to be consistent across loads of a world instance. No meaning should be inferred from the value and structure of this unique identifier - do not parse or interpret it. This property is accessible even if {@link Entity.isValid} is false."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isClimbing": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is touching a climbable block. For example, a player next to a ladder or a spider next to a stone wall.",
          "throws": "property can throw when used."
        },
        "match": "readonly isClimbing: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isFalling": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity has a fall distance greater than 0, or greater than 1 while gliding.",
          "throws": "property can throw when used."
        },
        "match": "readonly isFalling: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isInWater": {
        "comment": {
          "params": {},
          "remarks": "Whether any part of the entity is inside a water block.",
          "throws": "property can throw when used."
        },
        "match": "readonly isInWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isOnGround": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is on top of a solid block.",
          "throws": "property can throw when used."
        },
        "match": "readonly isOnGround: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSleeping": {
        "comment": {
          "params": {},
          "remarks": "If true, the entity is currently sleeping.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSleeping: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSneaking": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is sneaking - that is, moving more slowly and more quietly. This property can't be edited in read-only mode."
        },
        "match": "isSneaking: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "isSprinting": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is sprinting. For example, a player using the sprint action, an ocelot running away or a pig boosting with Carrot on a Stick.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSprinting: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSwimming": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is in the swimming state. For example, a player using the swim action or a fish in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSwimming: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "lifetimeState": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Whether the entity reference that you have is valid or not. For example, an entity may be unloaded if it moves into a chunk that is unloaded, but may be reactivated if the chunk it is within gets reloaded."
        },
        "match": "readonly lifetimeState: EntityLifetimeState",
        "kind": "readonly",
        "param": "",
        "return": "EntityLifetimeState"
      },
      "location": {
        "comment": {
          "params": {},
          "remarks": "Current location of the entity.",
          "throws": "property can throw when used."
        },
        "match": "readonly location: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "nameTag": {
        "comment": {
          "params": {},
          "remarks": "Given name of the entity. This property can't be edited in read-only mode."
        },
        "match": "nameTag: string",
        "kind": "public",
        "param": "",
        "return": "string"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Returns a scoreboard identity that represents this entity. Will remain valid when the entity is killed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "addEffect": {
        "comment": {
          "params": {
            "effectType": "Type of effect to add to the entity.",
            "duration": "Amount of time, in ticks, for the effect to apply. There are 20 ticks per second. Use {@link TicksPerSecond} constant to convert between ticks and seconds. The value must be within the range [0, 20000000].",
            "options": "Additional options for the effect."
          },
          "remarks": "Adds or updates an effect, like poison, to the entity. This function can't be called in read-only mode.",
          "returns": "Returns nothing if the effect was added or updated successfully. This can throw an error if the duration or amplifier are outside of the valid ranges, or if the effect does not exist.",
          "throws": "function can throw errors.",
          "example": "```typescript const overworld = mc.world.getDimension(\"overworld\"); const fox = overworld.spawnEntity(\"minecraft:fox\", { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 3, }); fox.addEffect(\"speed\", 10, { amplifier: 2, }); log(\"Created a fox.\"); const wolf = overworld.spawnEntity(\"minecraft:wolf\", { x: targetLocation.x + 4, y: targetLocation.y + 2, z: targetLocation.z + 3, }); wolf.addEffect(\"slowness\", 10, { amplifier: 2, }); wolf.isSneaking = true; log(\"Created a sneaking wolf.\", 1); ```"
        },
        "match": "addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void",
        "kind": "public",
        "param": "effectType: EffectType | string, duration: number, options?: EntityEffectOptions",
        "return": "void"
      },
      "addTag": {
        "comment": {
          "params": {
            "tag": "Content of the tag to add. The tag must be less than 256 characters."
          },
          "remarks": "Adds a specified tag to an entity. This function can't be called in read-only mode.",
          "returns": "Returns true if the tag was added successfully. This can fail if the tag already exists on the entity.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { let mobTypeId = mobs[i % mobs.length]; let entity = overworld.spawnEntity(mobTypeId, targetLocation); entity.addTag(\"mobparty.\" + mobTypeId); } let eqo: mc.EntityQueryOptions = { tags: [\"mobparty.skeleton\"], }; for (let entity of overworld.getEntities(eqo)) { entity.kill(); } ```"
        },
        "match": "addTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "applyDamage": {
        "comment": {
          "params": {
            "amount": "Amount of damage to apply.",
            "options": "Additional options about the source of damage, which may add additional effects or spur additional behaviors on this entity."
          },
          "remarks": "Applies a set of damage to an entity. This function can't be called in read-only mode.",
          "returns": "Whether the entity takes any damage. This can return false if the entity is invulnerable or if the damage applied is less than or equal to 0.",
          "throws": "function can throw errors.",
          "example": "```typescript const skelly = overworld.spawnEntity(\"minecraft:skeleton\", targetLocation); skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton mc.system.runTimeout(() => { let health = skelly.getComponent(\"health\") as mc.EntityHealthComponent; log(\"Skeleton health before heal: \" + health.currentValue); health.resetToMaxValue(); log(\"Skeleton health after heal: \" + health.currentValue); }, 20); ```"
        },
        "match": "applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean",
        "kind": "public",
        "param": "amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions",
        "return": "boolean"
      },
      "applyImpulse": {
        "comment": {
          "params": {
            "vector": "Impulse vector."
          },
          "remarks": "Applies impulse vector to the current velocity of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const zombie = overworld.spawnEntity(\"minecraft:zombie\", targetLocation); zombie.clearVelocity(); // throw the zombie up in the air zombie.applyImpulse({ x: 0, y: 0.5, z: 0 }); ```"
        },
        "match": "applyImpulse(vector: Vector3): void",
        "kind": "public",
        "param": "vector: Vector3",
        "return": "void"
      },
      "applyKnockback": {
        "comment": {
          "params": {
            "directionX": "X direction in horizontal plane.",
            "directionZ": "Z direction in horizontal plane.",
            "horizontalStrength": "Knockback strength for the horizontal vector.",
            "verticalStrength": "Knockback strength for the vertical vector."
          },
          "remarks": "Applies impulse vector to the current velocity of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { overworld.spawnEntity(mobs[i % mobs.length], targetLocation); } let eqo: mc.EntityQueryOptions = { type: \"skeleton\", }; for (let entity of overworld.getEntities(eqo)) { entity.applyKnockback(0, 0, 0, 1); } ```"
        },
        "match": "applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void",
        "kind": "public",
        "param": "directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number",
        "return": "void"
      },
      "clearDynamicProperties": {
        "comment": {
          "params": {},
          "remarks": "Clears all dynamic properties that have been set on this entity.",
          "throws": "function can throw errors."
        },
        "match": "clearDynamicProperties(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "clearVelocity": {
        "comment": {
          "params": {},
          "remarks": "Sets the current velocity of the Entity to zero. Note that this method may not have an impact on Players. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const zombie = overworld.spawnEntity(\"minecraft:zombie\", targetLocation); zombie.clearVelocity(); // throw the zombie up in the air zombie.applyImpulse({ x: 0, y: 0.5, z: 0 }); ```"
        },
        "match": "clearVelocity(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "extinguishFire": {
        "comment": {
          "params": {
            "useEffects": "Whether to show any visual effects connected to the extinguishing."
          },
          "beta": "",
          "remarks": "Extinguishes the fire if the entity is on fire. Note that you can call getComponent('minecraft:onfire') and, if present, the entity is on fire. This function can't be called in read-only mode.",
          "returns": "Returns whether the entity was on fire.",
          "throws": "function can throw errors.",
          "example": "```typescript const cow = overworld.spawnEntity(\"minecraft:cow\", targetLocation); mc.system.runTimeout(() => { cow.teleport( { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 }, { facingLocation: targetLocation, } ); }, 20); ```"
        },
        "match": "extinguishFire(useEffects?: boolean): boolean",
        "kind": "public",
        "param": "useEffects?: boolean",
        "return": "boolean"
      },
      "getBlockFromViewDirection": {
        "comment": {
          "params": {
            "options": "Additional configuration options for the ray cast."
          },
          "remarks": "Returns the first intersecting block from the direction that this entity is looking at.",
          "returns": "Returns the first intersecting block from the direction that this entity is looking at.",
          "throws": "function can throw errors."
        },
        "match": "getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined",
        "kind": "public",
        "param": "options?: BlockRaycastOptions",
        "return": "BlockRaycastHit | undefined"
      },
      "getComponents": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:health'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs can be found as part of the {@link EntityComponentTypes} enum."
          },
          "remarks": "Gets a component (that represents additional capabilities) for an entity.",
          "returns": "Returns the component if it exists on the entity, otherwise undefined."
        },
        "match": "getComponents(): EntityComponent[]",
        "kind": "public",
        "param": "",
        "return": "EntityComponent[]"
      },
      "getDynamicProperty": {
        "comment": {
          "params": {
            "identifier": "The property identifier."
          },
          "remarks": "Returns a property value.",
          "returns": "Returns the value for the property, or undefined if the property has not been set.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string | Vector3 | undefined"
      },
      "getDynamicPropertyIds": {
        "comment": {
          "params": {},
          "remarks": "Returns the available set of dynamic property identifiers that have been used on this entity.",
          "returns": "A string array of the dynamic properties set on this entity.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicPropertyIds(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getDynamicPropertyTotalByteCount": {
        "comment": {
          "params": {},
          "remarks": "Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.  This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicPropertyTotalByteCount(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "getEffect": {
        "comment": {
          "params": {
            "effectType": "The effect identifier."
          },
          "remarks": "Returns the effect for the specified EffectType on the entity, undefined if the effect is not present, or throws an error if the effect does not exist.",
          "returns": "Effect object for the specified effect, undefined if the effect is not present, or throws an error if the effect does not exist.",
          "throws": "function can throw errors."
        },
        "match": "getEffect(effectType: EffectType | string): Effect | undefined",
        "kind": "public",
        "param": "effectType: EffectType | string",
        "return": "Effect | undefined"
      },
      "getEffects": {
        "comment": {
          "params": {},
          "remarks": "Returns a set of effects applied to this entity.",
          "returns": "List of effects.",
          "throws": "function can throw errors."
        },
        "match": "getEffects(): Effect[]",
        "kind": "public",
        "param": "",
        "return": "Effect[]"
      },
      "getEntitiesFromViewDirection": {
        "comment": {
          "params": {
            "options": "Additional configuration options for the ray cast."
          },
          "remarks": "Gets the entities that this entity is looking at by performing a ray cast from the view of this entity.",
          "returns": "Returns a set of entities from the direction that this entity is looking at.",
          "throws": "function can throw errors."
        },
        "match": "getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]",
        "kind": "public",
        "param": "options?: EntityRaycastOptions",
        "return": "EntityRaycastHit[]"
      },
      "getHeadLocation": {
        "comment": {
          "params": {},
          "remarks": "Returns the current location of the head component of this entity.",
          "returns": "Returns the current location of the head component of this entity.",
          "throws": "function can throw errors."
        },
        "match": "getHeadLocation(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getProperty": {
        "comment": {
          "params": {
            "identifier": "The entity Property identifier."
          },
          "remarks": "Gets an entity Property value. If the property was set using the setProperty function within the same tick, the updated value will not be reflected until the subsequent tick.",
          "returns": "Returns the current property value. For enum properties, a string is returned. For float and int properties, a number is returned. For undefined properties, undefined is returned.",
          "throws": "Throws if the entity is invalid."
        },
        "match": "getProperty(identifier: string): boolean | number | string | undefined",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string | undefined"
      },
      "getRotation": {
        "comment": {
          "params": {},
          "remarks": "Returns the current rotation component of this entity.",
          "returns": "Returns a Vec2 containing the rotation of this entity (in degrees).",
          "throws": "function can throw errors."
        },
        "match": "getRotation(): Vector2",
        "kind": "public",
        "param": "",
        "return": "Vector2"
      },
      "getTags": {
        "comment": {
          "params": {},
          "remarks": "",
          "returns": "Returns all tags associated with an entity.",
          "throws": "function can throw errors."
        },
        "match": "getTags(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getVelocity": {
        "comment": {
          "params": {},
          "remarks": "Returns the current velocity vector of the entity.",
          "returns": "Returns the current velocity vector of the entity.",
          "throws": "function can throw errors.",
          "example": "```typescript const fireworkRocket = overworld.spawnEntity(\"minecraft:fireworks_rocket\", targetLocation); mc.system.runTimeout(() => { let velocity = fireworkRocket.getVelocity(); log(\"Velocity of firework is: (x: \" + velocity.x + \", y:\" + velocity.y + \", z:\" + velocity.z + \")\"); }, 5); ```"
        },
        "match": "getVelocity(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getViewDirection": {
        "comment": {
          "params": {},
          "remarks": "Returns the current view direction of the entity.",
          "returns": "Returns the current view direction of the entity.",
          "throws": "function can throw errors."
        },
        "match": "getViewDirection(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "hasComponent": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed."
          },
          "remarks": "Returns true if the specified component is present on this entity.",
          "returns": "Returns true if the specified component is present on this entity."
        },
        "match": "hasComponent(componentId: string): boolean",
        "kind": "public",
        "param": "componentId: string",
        "return": "boolean"
      },
      "hasTag": {
        "comment": {
          "params": {
            "tag": "Identifier of the tag to test for."
          },
          "remarks": "Returns whether an entity has a particular tag.",
          "returns": "Returns whether an entity has a particular tag.",
          "throws": "function can throw errors."
        },
        "match": "hasTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the entity can be manipulated by script. A Player is considered valid when it's EntityLifetimeState is set to Loaded.",
          "returns": "Whether the entity is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "kill": {
        "comment": {
          "params": {},
          "remarks": "Kills this entity. The entity will drop loot as normal. This function can't be called in read-only mode.",
          "returns": "Returns true if entity can be killed (even if it is already dead), otherwise it returns false.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { let mobTypeId = mobs[i % mobs.length]; let entity = overworld.spawnEntity(mobTypeId, targetLocation); entity.addTag(\"mobparty.\" + mobTypeId); } let eqo: mc.EntityQueryOptions = { tags: [\"mobparty.skeleton\"], }; for (let entity of overworld.getEntities(eqo)) { entity.kill(); } ```"
        },
        "match": "kill(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "matches": {
        "comment": {
          "params": {},
          "remarks": "Matches the entity against the passed in options. Uses the location of the entity for matching if the location is not specified in the passed in EntityQueryOptions.",
          "returns": "Returns true if the entity matches the criteria in the passed in EntityQueryOptions, otherwise it returns false.",
          "throws": "function can throw errors."
        },
        "match": "matches(options: EntityQueryOptions): boolean",
        "kind": "public",
        "param": "options: EntityQueryOptions",
        "return": "boolean"
      },
      "playAnimation": {
        "comment": {
          "params": {
            "animationName": "The animation identifier. e.g. animation.creeper.swelling",
            "options": "Additional options to control the playback and transitions of the animation."
          },
          "beta": "",
          "remarks": "Cause the entity to play the given animation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "playAnimation(animationName: string, options?: PlayAnimationOptions): void",
        "kind": "public",
        "param": "animationName: string, options?: PlayAnimationOptions",
        "return": "void"
      },
      "remove": {
        "comment": {
          "params": {},
          "remarks": "Immediately removes the entity from the world. The removed entity will not perform a death animation or drop loot upon removal. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "remove(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "removeEffect": {
        "comment": {
          "params": {
            "effectType": "The effect identifier."
          },
          "remarks": "Removes the specified EffectType on the entity, or returns false if the effect is not present. This function can't be called in read-only mode.",
          "returns": "Returns true if the effect has been removed. Returns false if the effect is not found or does not exist.",
          "throws": "function can throw errors."
        },
        "match": "removeEffect(effectType: EffectType | string): boolean",
        "kind": "public",
        "param": "effectType: EffectType | string",
        "return": "boolean"
      },
      "removeTag": {
        "comment": {
          "params": {
            "tag": "Content of the tag to remove."
          },
          "remarks": "Removes a specified tag from an entity. This function can't be called in read-only mode.",
          "returns": "Returns whether the tag existed on the entity.",
          "throws": "function can throw errors."
        },
        "match": "removeTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "resetProperty": {
        "comment": {
          "params": {
            "identifier": "The Entity Property identifier."
          },
          "remarks": "Resets an Entity Property back to its default value, as specified in the Entity's definition. This property change is not applied until the next tick. This function can't be called in read-only mode.",
          "returns": "Returns the default property value. For enum properties, a string is returned. For float and int properties, a number is returned. For undefined properties, undefined is returned.",
          "throws": "Throws if the entity is invalid. {@link minecraftcommon.EngineError} {@link Error}"
        },
        "match": "resetProperty(identifier: string): boolean | number | string",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string"
      },
      "runCommand": {
        "comment": {
          "params": {
            "commandString": "The command string. Note: This should not include a leading forward slash."
          },
          "remarks": "Runs a synchronous command on the entity. This function can't be called in read-only mode.",
          "returns": "A command result containing whether the command was successful.",
          "throws": "function can throw errors. {@link CommandError} {@link Error}"
        },
        "match": "runCommand(commandString: string): CommandResult",
        "kind": "public",
        "param": "commandString: string",
        "return": "CommandResult"
      },
      "runCommandAsync": {
        "comment": {
          "params": {
            "commandString": "Command to run. Note that command strings should not start with slash."
          },
          "remarks": "Runs a particular command asynchronously from the context of this entity. Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.",
          "returns": "For commands that return data, returns a JSON structure with command response values.",
          "throws": "function can throw errors."
        },
        "match": "runCommandAsync(commandString: string): Promise<CommandResult>",
        "kind": "public",
        "param": "commandString: string",
        "return": "Promise<CommandResult>"
      },
      "setDynamicProperty": {
        "comment": {
          "params": {
            "identifier": "The property identifier.",
            "value": "Data value of the property to set."
          },
          "remarks": "Sets a specified property to a value.",
          "throws": "function can throw errors."
        },
        "match": "setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void",
        "kind": "public",
        "param": "identifier: string, value?: boolean | number | string | Vector3",
        "return": "void"
      },
      "setOnFire": {
        "comment": {
          "params": {
            "seconds": "Length of time to set the entity on fire.",
            "useEffects": "Whether side-effects should be applied (e.g. thawing freeze) and other conditions such as rain or fire protection should be taken into consideration."
          },
          "beta": "",
          "remarks": "Sets an entity on fire (if it is not in water or rain). Note that you can call getComponent('minecraft:onfire') and, if present, the entity is on fire. This function can't be called in read-only mode.",
          "returns": "Whether the entity was set on fire. This can fail if seconds is less than or equal to zero, the entity is wet or the entity is immune to fire.",
          "throws": "function can throw errors.",
          "example": "```typescript const cow = overworld.spawnEntity(\"minecraft:cow\", targetLocation); mc.system.runTimeout(() => { cow.teleport( { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 }, { facingLocation: targetLocation, } ); }, 20); ```"
        },
        "match": "setOnFire(seconds: number, useEffects?: boolean): boolean",
        "kind": "public",
        "param": "seconds: number, useEffects?: boolean",
        "return": "boolean"
      },
      "setProperty": {
        "comment": {
          "params": {
            "identifier": "The Entity Property identifier.",
            "value": "The property value. The provided type must be compatible with the type specified in the entity's definition."
          },
          "remarks": "Sets an Entity Property to the provided value. This property change is not applied until the next tick. This function can't be called in read-only mode.",
          "throws": "Throws if the entity is invalid. Throws if an invalid identifier is provided. Throws if the provided value type does not match the property type. Throws if the provided value is outside the expected range (int, float properties). Throws if the provided string value does not match the set of accepted enum values (enum properties"
        },
        "match": "setProperty(identifier: string, value: boolean | number | string): void",
        "kind": "public",
        "param": "identifier: string, value: boolean | number | string",
        "return": "void"
      },
      "setRotation": {
        "comment": {
          "params": {
            "rotation": "The x and y rotation of the entity (in degrees). For most mobs, the x rotation controls the head tilt and the y rotation controls the body rotation."
          },
          "remarks": "Sets the main rotation of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setRotation(rotation: Vector2): void",
        "kind": "public",
        "param": "rotation: Vector2",
        "return": "void"
      },
      "teleport": {
        "comment": {
          "params": {
            "location": "New location for the entity.",
            "teleportOptions": "Options regarding the teleport operation."
          },
          "remarks": "Teleports the selected entity to a new location This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const pig = overworld.spawnEntity(\"minecraft:pig\", targetLocation); let inc = 1; let runId = mc.system.runInterval(() => { pig.teleport( { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 }, { facingLocation: targetLocation, } ); if (inc > 100) { mc.system.clearRun(runId); } inc++; }, 4); ```"
        },
        "match": "teleport(location: Vector3, teleportOptions?: TeleportOptions): void",
        "kind": "public",
        "param": "location: Vector3, teleportOptions?: TeleportOptions",
        "return": "void"
      },
      "triggerEvent": {
        "comment": {
          "params": {
            "eventName": "Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed."
          },
          "remarks": "Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event. This function can't be called in read-only mode.",
          "throws": "If the event is not defined in the definition of the entity, an error will be thrown.",
          "example": "```typescript const creeper = overworld.spawnEntity(\"minecraft:creeper\", targetLocation); creeper.triggerEvent(\"minecraft:start_exploding_forced\"); ```"
        },
        "match": "triggerEvent(eventName: string): void",
        "kind": "public",
        "param": "eventName: string",
        "return": "void"
      },
      "tryTeleport": {
        "comment": {
          "params": {
            "location": "Location to teleport the entity to.",
            "teleportOptions": "Options regarding the teleport operation."
          },
          "remarks": "Attempts to try a teleport, but may not complete the teleport operation (for example, if there are blocks at the destination.) This function can't be called in read-only mode.",
          "returns": "Returns whether the teleport succeeded. This can fail if the destination chunk is unloaded or if the teleport would result in intersecting with blocks.",
          "throws": "function can throw errors."
        },
        "match": "tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean",
        "kind": "public",
        "param": "location: Vector3, teleportOptions?: TeleportOptions",
        "return": "boolean"
      }
    },
    "PlayerBreakBlockAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerBreakBlockAfterEvent"
      },
      "brokenBlockPermutation": {
        "comment": {
          "params": {},
          "remarks": "Returns permutation information about this block before it was broken."
        },
        "match": "readonly brokenBlockPermutation: BlockPermutation",
        "kind": "readonly",
        "param": "",
        "return": "BlockPermutation"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "The item stack that was used to break the block after the block was broken, or undefined if empty hand."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "PlayerBreakBlockAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerBreakBlockAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a block is broken by a player. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void,options?: BlockEventOptions,): (arg: PlayerBreakBlockAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerBreakBlockAfterEvent) => void,options?: BlockEventOptions,",
        "return": "(arg: PlayerBreakBlockAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a player breaks a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerBreakBlockAfterEvent) => void",
        "return": "void"
      }
    },
    "PlayerBreakBlockBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerBreakBlockBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true, cancels the block break event."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "The item stack that is being used to break the block, or undefined if empty hand."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "PlayerBreakBlockBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerBreakBlockBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before a block is broken by a player. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void,options?: BlockEventOptions,): (arg: PlayerBreakBlockBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerBreakBlockBeforeEvent) => void,options?: BlockEventOptions,",
        "return": "(arg: PlayerBreakBlockBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called before a player breaks a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerBreakBlockBeforeEvent) => void",
        "return": "void"
      }
    },
    "PlayerDimensionChangeAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerDimensionChangeAfterEvent"
      },
      "fromDimension": {
        "comment": {
          "params": {},
          "remarks": "The dimension the player is changing from."
        },
        "match": "readonly fromDimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "fromLocation": {
        "comment": {
          "params": {},
          "remarks": "The location the player was at before changing dimensions."
        },
        "match": "readonly fromLocation: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "Handle to the player that is changing dimensions."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "toDimension": {
        "comment": {
          "params": {},
          "remarks": "The dimension that the player is changing to."
        },
        "match": "readonly toDimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "toLocation": {
        "comment": {
          "params": {},
          "remarks": "The location the player will spawn to after changing dimensions."
        },
        "match": "readonly toLocation: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      }
    },
    "PlayerDimensionChangeAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerDimensionChangeAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes the specified callback to a player dimension change after event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerDimensionChangeAfterEvent) => void",
        "return": "(arg: PlayerDimensionChangeAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes the specified callback from a player dimension change after event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerDimensionChangeAfterEvent) => void",
        "return": "void"
      }
    },
    "PlayerInteractWithBlockAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerInteractWithBlockAfterEvent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "The block that will be interacted with."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "blockFace": {
        "comment": {
          "params": {},
          "remarks": "The face of the block that is being interacted with."
        },
        "match": "readonly blockFace: Direction",
        "kind": "readonly",
        "param": "",
        "return": "Direction"
      },
      "faceLocation": {
        "comment": {
          "params": {},
          "remarks": "Location relative to the bottom north-west corner of the block where the item is placed."
        },
        "match": "readonly faceLocation: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "The item stack that is being used in the interaction, or undefined if empty hand."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "PlayerInteractWithBlockAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerInteractWithBlockAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called after a player interacts with a block. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void,): (arg: PlayerInteractWithBlockAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerInteractWithBlockAfterEvent) => void,",
        "return": "(arg: PlayerInteractWithBlockAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called after a player interacts with a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerInteractWithBlockAfterEvent) => void",
        "return": "void"
      }
    },
    "PlayerInteractWithBlockBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerInteractWithBlockBeforeEvent"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "The block that will be interacted with."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "blockFace": {
        "comment": {
          "params": {},
          "remarks": "The face of the block that is being interacted with."
        },
        "match": "readonly blockFace: Direction",
        "kind": "readonly",
        "param": "",
        "return": "Direction"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true the interaction will be cancelled."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "faceLocation": {
        "comment": {
          "params": {},
          "remarks": "Location relative to the bottom north-west corner of the block where the item is placed."
        },
        "match": "readonly faceLocation: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "The item stack that is being used in the interaction, or undefined if empty hand."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "PlayerInteractWithBlockBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerInteractWithBlockBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before a player interacts with a block. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void,): (arg: PlayerInteractWithBlockBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerInteractWithBlockBeforeEvent) => void,",
        "return": "(arg: PlayerInteractWithBlockBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called before a player interacts with a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerInteractWithBlockBeforeEvent) => void",
        "return": "void"
      }
    },
    "PlayerInteractWithEntityAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerInteractWithEntityAfterEvent"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "The item stack that is being used in the interaction, or undefined if empty hand."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "target": {
        "comment": {
          "params": {},
          "remarks": "The entity that will be interacted with."
        },
        "match": "readonly target: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      }
    },
    "PlayerInteractWithEntityAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerInteractWithEntityAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called after a player interacts with an entity. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void,): (arg: PlayerInteractWithEntityAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerInteractWithEntityAfterEvent) => void,",
        "return": "(arg: PlayerInteractWithEntityAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called after a player interacts with an entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerInteractWithEntityAfterEvent) => void",
        "return": "void"
      }
    },
    "PlayerInteractWithEntityBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerInteractWithEntityBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true the interaction will be cancelled."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "The item stack that is being used in the interaction, or undefined if empty hand."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "target": {
        "comment": {
          "params": {},
          "remarks": "The entity that will be interacted with."
        },
        "match": "readonly target: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      }
    },
    "PlayerInteractWithEntityBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerInteractWithEntityBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before a player interacts with an entity. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void,): (arg: PlayerInteractWithEntityBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerInteractWithEntityBeforeEvent) => void,",
        "return": "(arg: PlayerInteractWithEntityBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called before a player interacts with an entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerInteractWithEntityBeforeEvent) => void",
        "return": "void"
      }
    },
    "PlayerIterator": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerIterator"
      },
      "next": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode."
        },
        "match": "next(): IteratorResult<Player>",
        "kind": "public",
        "param": "",
        "return": "IteratorResult<Player>"
      }
    },
    "PlayerJoinAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerJoinAfterEvent"
      },
      "playerId": {
        "comment": {
          "params": {},
          "remarks": "Opaque string identifier of the player that joined the game."
        },
        "match": "readonly playerId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "playerName": {
        "comment": {
          "params": {},
          "remarks": "Name of the player that has joined."
        },
        "match": "readonly playerName: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "PlayerJoinAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerJoinAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerJoinAfterEvent) => void",
        "return": "(arg: PlayerJoinAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerJoinAfterEvent) => void",
        "return": "void"
      }
    },
    "PlayerLeaveAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerLeaveAfterEvent"
      },
      "playerId": {
        "comment": {
          "params": {},
          "remarks": "Opaque string identifier of the player that has left the event."
        },
        "match": "readonly playerId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "playerName": {
        "comment": {
          "params": {},
          "remarks": "Player that has left the world."
        },
        "match": "readonly playerName: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      }
    },
    "PlayerLeaveAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerLeaveAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerLeaveAfterEvent) => void",
        "return": "(arg: PlayerLeaveAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerLeaveAfterEvent) => void",
        "return": "void"
      }
    },
    "PlayerLeaveBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerLeaveBeforeEvent"
      },
      "player": {
        "comment": {
          "params": {}
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      }
    },
    "PlayerLeaveBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerLeaveBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): (arg: PlayerLeaveBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerLeaveBeforeEvent) => void",
        "return": "(arg: PlayerLeaveBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerLeaveBeforeEvent) => void",
        "return": "void"
      }
    },
    "PlayerPlaceBlockAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerPlaceBlockAfterEvent"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "Player that placed the block for this event."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "PlayerPlaceBlockAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerPlaceBlockAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a block is placed by a player. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void,options?: BlockEventOptions,): (arg: PlayerPlaceBlockAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerPlaceBlockAfterEvent) => void,options?: BlockEventOptions,",
        "return": "(arg: PlayerPlaceBlockAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an block is placed by a player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerPlaceBlockAfterEvent) => void",
        "return": "void"
      }
    },
    "PlayerPlaceBlockBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerPlaceBlockBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true, cancels the block place event."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "face": {
        "comment": {
          "params": {},
          "remarks": "The face of the block that the new block is being placed on."
        },
        "match": "readonly face: Direction",
        "kind": "readonly",
        "param": "",
        "return": "Direction"
      },
      "faceLocation": {
        "comment": {
          "params": {},
          "remarks": "Location relative to the bottom north-west corner of the block where the new block is being placed onto."
        },
        "match": "readonly faceLocation: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "itemStack": {
        "comment": {
          "params": {},
          "remarks": "The item being used to place the block."
        },
        "match": "itemStack: ItemStack",
        "kind": "public",
        "param": "",
        "return": "ItemStack"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "Player that is placing the block for this event."
        },
        "match": "readonly player: Player",
        "kind": "readonly",
        "param": "",
        "return": "Player"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "PlayerPlaceBlockBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerPlaceBlockBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called before a block is placed by a player. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void,options?: BlockEventOptions,): (arg: PlayerPlaceBlockBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerPlaceBlockBeforeEvent) => void,options?: BlockEventOptions,",
        "return": "(arg: PlayerPlaceBlockBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called before an block is placed by a player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerPlaceBlockBeforeEvent) => void",
        "return": "void"
      }
    },
    "PlayerSpawnAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerSpawnAfterEvent"
      },
      "initialSpawn": {
        "comment": {
          "params": {},
          "remarks": "If true, this is the initial spawn of a player after joining the game. This property can't be edited in read-only mode."
        },
        "match": "initialSpawn: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "player": {
        "comment": {
          "params": {},
          "remarks": "Object that represents the player that joined the game. This property can't be edited in read-only mode."
        },
        "match": "player: Player",
        "kind": "public",
        "param": "",
        "return": "Player"
      }
    },
    "PlayerSpawnAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PlayerSpawnAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Subscribes to the event. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PlayerSpawnAfterEvent) => void",
        "return": "(arg: PlayerSpawnAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes from the event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PlayerSpawnAfterEvent) => void",
        "return": "void"
      }
    },
    "PressurePlatePopAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PressurePlatePopAfterEvent"
      },
      "previousRedstonePower": {
        "comment": {
          "params": {},
          "remarks": "The redstone power of the pressure plate before it was popped."
        },
        "match": "readonly previousRedstonePower: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "redstonePower": {
        "comment": {
          "params": {},
          "remarks": "The redstone power of the pressure plate at the time of the pop."
        },
        "match": "readonly redstonePower: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "PressurePlatePopAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PressurePlatePopAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a pressure plate is popped. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PressurePlatePopAfterEvent) => void",
        "return": "(arg: PressurePlatePopAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a pressure plate is popped. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PressurePlatePopAfterEvent) => void",
        "return": "void"
      }
    },
    "PressurePlatePushAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PressurePlatePushAfterEvent"
      },
      "previousRedstonePower": {
        "comment": {
          "params": {},
          "remarks": "The redstone power of the pressure plate before it was pushed."
        },
        "match": "readonly previousRedstonePower: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "redstonePower": {
        "comment": {
          "params": {},
          "remarks": "The redstone power of the pressure plate at the time of the push."
        },
        "match": "readonly redstonePower: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Source that triggered the pressure plate push."
        },
        "match": "readonly source: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "PressurePlatePushAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "PressurePlatePushAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a pressure plate is pushed. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: PressurePlatePushAfterEvent) => void",
        "return": "(arg: PressurePlatePushAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a pressure plate is pushed. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: PressurePlatePushAfterEvent) => void",
        "return": "void"
      }
    },
    "ProjectileHitBlockAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ProjectileHitBlockAfterEvent"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension where this projectile hit took place."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "hitVector": {
        "comment": {
          "params": {},
          "remarks": "Direction vector of the projectile as it hit a block."
        },
        "match": "readonly hitVector: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "location": {
        "comment": {
          "params": {},
          "remarks": "Location where the projectile hit occurred."
        },
        "match": "readonly location: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "projectile": {
        "comment": {
          "params": {},
          "remarks": "Entity for the projectile that hit a block."
        },
        "match": "readonly projectile: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "getBlockHit": {
        "comment": {
          "params": {},
          "remarks": "Optional source entity that fired the projectile."
        },
        "match": "getBlockHit(): BlockHitInformation",
        "kind": "public",
        "param": "",
        "return": "BlockHitInformation"
      }
    },
    "ProjectileHitBlockAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ProjectileHitBlockAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a projectile hits a block. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ProjectileHitBlockAfterEvent) => void",
        "return": "(arg: ProjectileHitBlockAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a projectile hits a block. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ProjectileHitBlockAfterEvent) => void",
        "return": "void"
      }
    },
    "ProjectileHitEntityAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ProjectileHitEntityAfterEvent"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension where this projectile hit took place."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "hitVector": {
        "comment": {
          "params": {},
          "remarks": "Direction vector of the projectile as it hit an entity."
        },
        "match": "readonly hitVector: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "location": {
        "comment": {
          "params": {},
          "remarks": "Location where the projectile hit occurred."
        },
        "match": "readonly location: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "projectile": {
        "comment": {
          "params": {},
          "remarks": "Entity for the projectile that hit an entity."
        },
        "match": "readonly projectile: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "getEntityHit": {
        "comment": {
          "params": {},
          "remarks": "Optional source entity that fired the projectile."
        },
        "match": "getEntityHit(): EntityHitInformation",
        "kind": "public",
        "param": "",
        "return": "EntityHitInformation"
      }
    },
    "ProjectileHitEntityAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ProjectileHitEntityAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a projectile hits an entity. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): (arg: ProjectileHitEntityAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ProjectileHitEntityAfterEvent) => void",
        "return": "(arg: ProjectileHitEntityAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a projectile hits an entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ProjectileHitEntityAfterEvent) => void",
        "return": "void"
      }
    },
    "Scoreboard": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Scoreboard"
      },
      "addObjective": {
        "comment": {
          "params": {},
          "remarks": "Adds a new objective to the scoreboard. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "addObjective(objectiveId: string, displayName: string): ScoreboardObjective",
        "kind": "public",
        "param": "objectiveId: string, displayName: string",
        "return": "ScoreboardObjective"
      },
      "clearObjectiveAtDisplaySlot": {
        "comment": {
          "params": {},
          "remarks": "Clears the objective that occupies a display slot. This function can't be called in read-only mode."
        },
        "match": "clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined",
        "kind": "public",
        "param": "displaySlotId: DisplaySlotId",
        "return": "ScoreboardObjective | undefined"
      },
      "getObjective": {
        "comment": {
          "params": {
            "objectiveId": "Identifier of the objective."
          },
          "remarks": "Returns a specific objective (by id)."
        },
        "match": "getObjective(objectiveId: string): ScoreboardObjective | undefined",
        "kind": "public",
        "param": "objectiveId: string",
        "return": "ScoreboardObjective | undefined"
      },
      "getObjectiveAtDisplaySlot": {
        "comment": {
          "params": {},
          "remarks": "Returns an objective that occupies the specified display slot."
        },
        "match": "getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined",
        "kind": "public",
        "param": "displaySlotId: DisplaySlotId",
        "return": "ScoreboardObjectiveDisplayOptions | undefined"
      },
      "getObjectives": {
        "comment": {
          "params": {},
          "remarks": "Returns all defined objectives."
        },
        "match": "getObjectives(): ScoreboardObjective[]",
        "kind": "public",
        "param": "",
        "return": "ScoreboardObjective[]"
      },
      "getParticipants": {
        "comment": {
          "params": {},
          "remarks": "Returns all defined scoreboard identities."
        },
        "match": "getParticipants(): ScoreboardIdentity[]",
        "kind": "public",
        "param": "",
        "return": "ScoreboardIdentity[]"
      },
      "removeObjective": {
        "comment": {
          "params": {},
          "remarks": "Removes an objective from the scoreboard. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "removeObjective(objectiveId: ScoreboardObjective | string): boolean",
        "kind": "public",
        "param": "objectiveId: ScoreboardObjective | string",
        "return": "boolean"
      },
      "setObjectiveAtDisplaySlot": {
        "comment": {
          "params": {},
          "remarks": "Sets an objective into a display slot with specified additional display settings. This function can't be called in read-only mode.",
          "returns": "Returns the previous `ScoreboardObjective` set at the display slot, if no objective was previously set it returns `undefined`.",
          "throws": "function can throw errors."
        },
        "match": "setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId,objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,): ScoreboardObjective | undefined",
        "kind": "public",
        "param": "displaySlotId: DisplaySlotId,objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions,",
        "return": "ScoreboardObjective | undefined"
      }
    },
    "ScoreboardIdentity": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ScoreboardIdentity"
      },
      "displayName": {
        "comment": {
          "params": {},
          "remarks": "Returns the player-visible name of this identity."
        },
        "match": "readonly displayName: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the scoreboard identity."
        },
        "match": "readonly id: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "getEntity": {
        "comment": {
          "params": {},
          "remarks": "Type of the scoreboard identity."
        },
        "match": "getEntity(): Entity | undefined",
        "kind": "public",
        "param": "",
        "return": "Entity | undefined"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if the ScoreboardIdentity reference is still valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      }
    },
    "ScoreboardObjective": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ScoreboardObjective"
      },
      "displayName": {
        "comment": {
          "params": {},
          "remarks": "Returns the player-visible name of this scoreboard objective.",
          "throws": "property can throw when used."
        },
        "match": "readonly displayName: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Identifier of the scoreboard objective.",
          "throws": "property can throw when used."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "addScore": {
        "comment": {
          "params": {
            "participant": "Participant to apply the scoreboard value addition to."
          },
          "remarks": "Adds a score to the given participant and objective. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number",
        "kind": "public",
        "param": "participant: Entity | ScoreboardIdentity | string, scoreToAdd: number",
        "return": "number"
      },
      "getParticipants": {
        "comment": {
          "params": {},
          "remarks": "Returns all objective participant identities.",
          "throws": "function can throw errors."
        },
        "match": "getParticipants(): ScoreboardIdentity[]",
        "kind": "public",
        "param": "",
        "return": "ScoreboardIdentity[]"
      },
      "getScore": {
        "comment": {
          "params": {
            "participant": "Identifier of the participant to retrieve a score for."
          },
          "remarks": "Returns a specific score for a participant.",
          "throws": "function can throw errors."
        },
        "match": "getScore(participant: Entity | ScoreboardIdentity | string): number | undefined",
        "kind": "public",
        "param": "participant: Entity | ScoreboardIdentity | string",
        "return": "number | undefined"
      },
      "getScores": {
        "comment": {
          "params": {},
          "remarks": "Returns specific scores for this objective for all participants.",
          "throws": "function can throw errors."
        },
        "match": "getScores(): ScoreboardScoreInfo[]",
        "kind": "public",
        "param": "",
        "return": "ScoreboardScoreInfo[]"
      },
      "hasParticipant": {
        "comment": {
          "params": {},
          "remarks": "Returns if the specified identity is a participant of the scoreboard objective.",
          "throws": "function can throw errors."
        },
        "match": "hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean",
        "kind": "public",
        "param": "participant: Entity | ScoreboardIdentity | string",
        "return": "boolean"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if the ScoreboardObjective reference is still valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "removeParticipant": {
        "comment": {
          "params": {
            "participant": "Participant to remove from being tracked with this objective."
          },
          "remarks": "Removes a participant from this scoreboard objective. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean",
        "kind": "public",
        "param": "participant: Entity | ScoreboardIdentity | string",
        "return": "boolean"
      },
      "setScore": {
        "comment": {
          "params": {
            "participant": "Identity of the participant.",
            "score": "New value of the score."
          },
          "remarks": "Sets a score for a participant. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setScore(participant: Entity | ScoreboardIdentity | string, score: number): void",
        "kind": "public",
        "param": "participant: Entity | ScoreboardIdentity | string, score: number",
        "return": "void"
      }
    },
    "ScoreboardScoreInfo": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ScoreboardScoreInfo"
      },
      "participant": {
        "comment": {
          "params": {},
          "remarks": "This scoreboard participant for this score."
        },
        "match": "readonly participant: ScoreboardIdentity",
        "kind": "readonly",
        "param": "",
        "return": "ScoreboardIdentity"
      },
      "score": {
        "comment": {
          "params": {},
          "remarks": "Score value of the identity for this objective."
        },
        "match": "readonly score: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      }
    },
    "ScreenDisplay": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ScreenDisplay"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns true if the current reference to this screen display manager object is valid and functional."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "setActionBar": {
        "comment": {
          "params": {
            "text": "New value for the action bar text."
          },
          "remarks": "Set the action bar text - a piece of text that displays beneath the title and above the hot-bar. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setActionBar(text: (RawMessage | string)[] | RawMessage | string): void",
        "kind": "public",
        "param": "text: (RawMessage | string)[] | RawMessage | string",
        "return": "void"
      },
      "setTitle": {
        "comment": {
          "params": {},
          "remarks": "Will cause a title to show up on the player's on screen display. Will clear the title if set to empty string. You can optionally specify an additional subtitle as well as fade in, stay and fade out times. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript let players = mc.world.getPlayers(); players[0].onScreenDisplay.setTitle(\"Chapter 1\", { stayDuration: 100, fadeInDuration: 2, fadeOutDuration: 4, subtitle: \"Trouble in Block Town\", }); ```"
        },
        "match": "setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void",
        "kind": "public",
        "param": "title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions",
        "return": "void"
      },
      "updateSubtitle": {
        "comment": {
          "params": {},
          "remarks": "Updates the subtitle if the subtitle was previously displayed via the setTitle method. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void",
        "kind": "public",
        "param": "subtitle: (RawMessage | string)[] | RawMessage | string",
        "return": "void"
      }
    },
    "ScriptEventCommandMessageAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ScriptEventCommandMessageAfterEvent"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Identifier of this ScriptEvent command message."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "message": {
        "comment": {
          "params": {},
          "remarks": "If this command was initiated via an NPC, returns the entity that initiated the NPC dialogue."
        },
        "match": "readonly message: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "sourceType": {
        "comment": {
          "params": {},
          "remarks": "Source block if this command was triggered via a block (e.g., a commandblock.)"
        },
        "match": "readonly sourceType: ScriptEventSource",
        "kind": "readonly",
        "param": "",
        "return": "ScriptEventSource"
      }
    },
    "ScriptEventCommandMessageAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ScriptEventCommandMessageAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Registers a new ScriptEvent handler. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void,options?: ScriptEventMessageFilterOptions,): (arg: ScriptEventCommandMessageAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: ScriptEventCommandMessageAfterEvent) => void,options?: ScriptEventMessageFilterOptions,",
        "return": "(arg: ScriptEventCommandMessageAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Unsubscribes a particular handler for a ScriptEvent event. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: ScriptEventCommandMessageAfterEvent) => void",
        "return": "void"
      }
    },
    "Seat": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Seat"
      },
      "lockRiderRotation": {
        "comment": {
          "params": {},
          "remarks": "If specified, contains a forced rotation that the riders in this seat are facing."
        },
        "match": "readonly lockRiderRotation: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "maxRiderCount": {
        "comment": {
          "params": {},
          "remarks": "A maximum number of riders that this seat can support."
        },
        "match": "readonly maxRiderCount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "minRiderCount": {
        "comment": {
          "params": {},
          "remarks": "A minimum number of riders that can be placed in this seat position, if this seat is to be filled."
        },
        "match": "readonly minRiderCount: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "position": {
        "comment": {
          "params": {},
          "remarks": "Physical location of this seat, relative to the entity's location."
        },
        "match": "readonly position: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      }
    },
    "ServerMessageAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ServerMessageAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when an internal message is passed. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: MessageReceiveAfterEvent) => void",
        "return": "(arg: MessageReceiveAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when an internal message is passed. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: MessageReceiveAfterEvent) => void",
        "return": "void"
      }
    },
    "System": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "System"
      },
      "afterEvents": {
        "comment": {
          "params": {},
          "remarks": "Returns a collection of after-events for system-level operations."
        },
        "match": "readonly afterEvents: SystemAfterEvents",
        "kind": "readonly",
        "param": "",
        "return": "SystemAfterEvents"
      },
      "beforeEvents": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns a collection of before-events for system-level operations."
        },
        "match": "readonly beforeEvents: SystemBeforeEvents",
        "kind": "readonly",
        "param": "",
        "return": "SystemBeforeEvents"
      },
      "currentTick": {
        "comment": {
          "params": {},
          "remarks": "Represents the current world tick of the server."
        },
        "match": "readonly currentTick: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "clearRun": {
        "comment": {
          "params": {},
          "remarks": "Cancels the execution of a function run that was previously scheduled via the `run` function."
        },
        "match": "clearRun(runId: number): void",
        "kind": "public",
        "param": "runId: number",
        "return": "void"
      },
      "run": {
        "comment": {
          "params": {
            "callback": "Function callback to run when the tickDelay time criteria is met."
          },
          "remarks": "Runs a specified function at a future time. This is frequently used to implement delayed behaviors and game loops.",
          "returns": "An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.",
          "example": "```typescript const overworld = mc.world.getDimension(\"overworld\"); try { // Minecraft runs at 20 ticks per second. if (mc.system.currentTick % 1200 === 0) { mc.world.sendMessage(\"Another minute passes...\"); } } catch (e) { console.warn(\"Error: \" + e); } mc.system.run(trapTick); ```"
        },
        "match": "run(callback: () => void): number",
        "kind": "public",
        "param": "callback: () => void",
        "return": "number"
      },
      "runInterval": {
        "comment": {
          "params": {
            "callback": "Functional code that will run when this interval occurs.",
            "tickInterval": "An interval of every N ticks that the callback will be called upon."
          },
          "remarks": "Runs a set of code on an interval.",
          "returns": "An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.",
          "example": "```typescript let intervalRunIdentifier = Math.floor(Math.random() * 10000); mc.system.runInterval(() => { mc.world.sendMessage(\"This is an interval run \" + intervalRunIdentifier + \" sending a message every 30 seconds.\"); }, 600); ```"
        },
        "match": "runInterval(callback: () => void, tickInterval?: number): number",
        "kind": "public",
        "param": "callback: () => void, tickInterval?: number",
        "return": "number"
      },
      "runTimeout": {
        "comment": {
          "params": {
            "callback": "Functional code that will run when this timeout occurs.",
            "tickDelay": "Amount of time, in ticks, before the interval will be called."
          },
          "remarks": "Runs a set of code at a future time specified by tickDelay.",
          "returns": "An opaque handle that can be used with the clearRun method to stop the run of this function on an interval."
        },
        "match": "runTimeout(callback: () => void, tickDelay?: number): number",
        "kind": "public",
        "param": "callback: () => void, tickDelay?: number",
        "return": "number"
      }
    },
    "SystemAfterEvents": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "SystemAfterEvents"
      },
      "scriptEventReceive": {
        "comment": {
          "params": {},
          "remarks": "An event that fires when a /scriptevent command is set. This provides a way for commands and other systems to trigger behavior within script."
        },
        "match": "readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ScriptEventCommandMessageAfterEventSignal"
      }
    },
    "SystemBeforeEvents": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "SystemBeforeEvents"
      },
      "watchdogTerminate": {
        "comment": {
          "params": {},
          "remarks": "Fires when the scripting watchdog shuts down the server. The can be due to using too much memory, or by causing significant slowdown or hang. To prevent shutdown, set the event's cancel property to true."
        },
        "match": "readonly watchdogTerminate: WatchdogTerminateBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "WatchdogTerminateBeforeEventSignal"
      }
    },
    "TargetBlockHitAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "TargetBlockHitAfterEvent"
      },
      "hitVector": {
        "comment": {
          "params": {},
          "remarks": "The position where the source hit the block."
        },
        "match": "readonly hitVector: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "previousRedstonePower": {
        "comment": {
          "params": {},
          "remarks": "The redstone power before the block is hit."
        },
        "match": "readonly previousRedstonePower: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "redstonePower": {
        "comment": {
          "params": {},
          "remarks": "The redstone power at the time the block is hit."
        },
        "match": "readonly redstonePower: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "source": {
        "comment": {
          "params": {},
          "remarks": "Optional source that hit the target block."
        },
        "match": "readonly source: Entity",
        "kind": "readonly",
        "param": "",
        "return": "Entity"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "TargetBlockHitAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "TargetBlockHitAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a target block is hit. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: TargetBlockHitAfterEvent) => void",
        "return": "(arg: TargetBlockHitAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a target block is hit. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: TargetBlockHitAfterEvent) => void",
        "return": "void"
      }
    },
    "Trigger": {
      "eventName": {
        "comment": {
          "params": {},
          "remarks": "Event name of the trigger."
        },
        "match": "eventName: string",
        "kind": "public",
        "param": "",
        "return": "string"
      },
      "constructor": {
        "comment": {
          "params": {},
          "remarks": "Creates a new trigger."
        },
        "match": "constructor(eventName: string)",
        "kind": "public",
        "param": "eventName: string",
        "return": "Trigger"
      }
    },
    "TripWireTripAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "TripWireTripAfterEvent"
      },
      "isPowered": {
        "comment": {
          "params": {},
          "remarks": "Whether or not the block has redstone power."
        },
        "match": "readonly isPowered: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "sources": {
        "comment": {
          "params": {},
          "remarks": "The sources that triggered the trip wire to trip."
        },
        "match": "readonly sources: Entity[]",
        "kind": "readonly",
        "param": "",
        "return": "Entity[]"
      },
      "block": {
        "comment": {
          "params": {},
          "remarks": "Block impacted by this event."
        },
        "match": "readonly block: Block",
        "kind": "readonly",
        "param": "",
        "return": "Block"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that contains the block that is the subject of this event."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      }
    },
    "TripWireTripAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "TripWireTripAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a trip wire is tripped. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: TripWireTripAfterEvent) => void",
        "return": "(arg: TripWireTripAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a trip wire is tripped. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: TripWireTripAfterEvent) => void",
        "return": "void"
      }
    },
    "Vector": {
      "x": {
        "comment": {
          "params": {},
          "remarks": "X component of this vector."
        },
        "match": "x: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "y": {
        "comment": {
          "params": {},
          "remarks": "Y component of this vector."
        },
        "match": "y: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "z": {
        "comment": {
          "params": {},
          "remarks": "Z component of this vector."
        },
        "match": "z: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "back": {
        "comment": {
          "params": {},
          "remarks": "A constant vector that represents (0, 0, -1)."
        },
        "match": "static readonly back: Vector",
        "kind": "static readonly",
        "param": "",
        "return": "Vector"
      },
      "down": {
        "comment": {
          "params": {},
          "remarks": "A constant vector that represents (0, -1, 0)."
        },
        "match": "static readonly down: Vector",
        "kind": "static readonly",
        "param": "",
        "return": "Vector"
      },
      "forward": {
        "comment": {
          "params": {},
          "remarks": "A constant vector that represents (0, 0, 1)."
        },
        "match": "static readonly forward: Vector",
        "kind": "static readonly",
        "param": "",
        "return": "Vector"
      },
      "left": {
        "comment": {
          "params": {},
          "remarks": "A constant vector that represents (-1, 0, 0)."
        },
        "match": "static readonly left: Vector",
        "kind": "static readonly",
        "param": "",
        "return": "Vector"
      },
      "one": {
        "comment": {
          "params": {},
          "remarks": "A constant vector that represents (1, 1, 1)."
        },
        "match": "static readonly one: Vector",
        "kind": "static readonly",
        "param": "",
        "return": "Vector"
      },
      "right": {
        "comment": {
          "params": {},
          "remarks": "A constant vector that represents (1, 0, 0)."
        },
        "match": "static readonly right: Vector",
        "kind": "static readonly",
        "param": "",
        "return": "Vector"
      },
      "up": {
        "comment": {
          "params": {},
          "remarks": "A constant vector that represents (0, 1, 0)."
        },
        "match": "static readonly up: Vector",
        "kind": "static readonly",
        "param": "",
        "return": "Vector"
      },
      "zero": {
        "comment": {
          "params": {},
          "remarks": "A constant vector that represents (0, 0, 0)."
        },
        "match": "static readonly zero: Vector",
        "kind": "static readonly",
        "param": "",
        "return": "Vector"
      },
      "constructor": {
        "comment": {
          "params": {
            "x": "X component of the vector.",
            "y": "Y component of the vector.",
            "z": "Z component of the vector."
          },
          "remarks": "Creates a new instance of an abstract vector."
        },
        "match": "constructor(x: number, y: number, z: number)",
        "kind": "public",
        "param": "x: number, y: number, z: number",
        "return": "Vector"
      },
      "equals": {
        "comment": {
          "params": {
            "other": "Other vector to compare this vector to."
          },
          "remarks": "Compares this vector and another vector to one another.",
          "returns": "True if the two vectors are equal."
        },
        "match": "equals(other: Vector): boolean",
        "kind": "public",
        "param": "other: Vector",
        "return": "boolean"
      },
      "length": {
        "comment": {
          "params": {},
          "remarks": "Returns the length of this vector."
        },
        "match": "length(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "lengthSquared": {
        "comment": {
          "params": {},
          "remarks": "Returns the squared length of this vector."
        },
        "match": "lengthSquared(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "normalized": {
        "comment": {
          "params": {},
          "remarks": "Returns this vector as a normalized vector."
        },
        "match": "normalized(): Vector",
        "kind": "public",
        "param": "",
        "return": "Vector"
      },
      "add": {
        "comment": {
          "params": {},
          "remarks": "Returns the addition of these vectors."
        },
        "match": "static add(a: Vector3, b: Vector3): Vector",
        "kind": "static",
        "param": "a: Vector3, b: Vector3",
        "return": "Vector"
      },
      "cross": {
        "comment": {
          "params": {},
          "remarks": "Returns the cross product of these two vectors."
        },
        "match": "static cross(a: Vector3, b: Vector3): Vector",
        "kind": "static",
        "param": "a: Vector3, b: Vector3",
        "return": "Vector"
      },
      "distance": {
        "comment": {
          "params": {},
          "remarks": "Returns the distance between two vectors."
        },
        "match": "static distance(a: Vector3, b: Vector3): number",
        "kind": "static",
        "param": "a: Vector3, b: Vector3",
        "return": "number"
      },
      "divide": {
        "comment": {
          "params": {},
          "remarks": "Returns the component-wise division of these vectors.",
          "throws": "function can throw errors."
        },
        "match": "static divide(a: Vector3, b: number | Vector3): Vector",
        "kind": "static",
        "param": "a: Vector3, b: number | Vector3",
        "return": "Vector"
      },
      "lerp": {
        "comment": {
          "params": {},
          "remarks": "Returns the linear interpolation between a and b using t as the control."
        },
        "match": "static lerp(a: Vector3, b: Vector3, t: number): Vector",
        "kind": "static",
        "param": "a: Vector3, b: Vector3, t: number",
        "return": "Vector"
      },
      "max": {
        "comment": {
          "params": {},
          "remarks": "Returns a vector that is made from the largest components of two vectors."
        },
        "match": "static max(a: Vector3, b: Vector3): Vector",
        "kind": "static",
        "param": "a: Vector3, b: Vector3",
        "return": "Vector"
      },
      "min": {
        "comment": {
          "params": {},
          "remarks": "Returns a vector that is made from the smallest components of two vectors."
        },
        "match": "static min(a: Vector3, b: Vector3): Vector",
        "kind": "static",
        "param": "a: Vector3, b: Vector3",
        "return": "Vector"
      },
      "multiply": {
        "comment": {
          "params": {},
          "remarks": "Returns the component-wise product of these vectors."
        },
        "match": "static multiply(a: Vector3, b: number | Vector3): Vector",
        "kind": "static",
        "param": "a: Vector3, b: number | Vector3",
        "return": "Vector"
      },
      "slerp": {
        "comment": {
          "params": {},
          "remarks": "Returns the spherical linear interpolation between a and b using s as the control."
        },
        "match": "static slerp(a: Vector3, b: Vector3, s: number): Vector",
        "kind": "static",
        "param": "a: Vector3, b: Vector3, s: number",
        "return": "Vector"
      },
      "subtract": {
        "comment": {
          "params": {},
          "remarks": "Returns the subtraction of these vectors."
        },
        "match": "static subtract(a: Vector3, b: Vector3): Vector",
        "kind": "static",
        "param": "a: Vector3, b: Vector3",
        "return": "Vector"
      }
    },
    "WatchdogTerminateBeforeEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "WatchdogTerminateBeforeEvent"
      },
      "cancel": {
        "comment": {
          "params": {},
          "remarks": "If set to true, cancels the termination of the script runtime. Note that depending on server configuration settings, cancellation of the termination may not be allowed."
        },
        "match": "cancel: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "terminateReason": {
        "comment": {
          "params": {},
          "remarks": "Contains the reason why a script runtime is to be terminated."
        },
        "match": "readonly terminateReason: WatchdogTerminateReason",
        "kind": "readonly",
        "param": "",
        "return": "WatchdogTerminateReason"
      }
    },
    "WatchdogTerminateBeforeEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "WatchdogTerminateBeforeEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when a script runtime is being terminated due to a violation of the performance watchdog system. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): (arg: WatchdogTerminateBeforeEvent) => void",
        "kind": "public",
        "param": "callback: (arg: WatchdogTerminateBeforeEvent) => void",
        "return": "(arg: WatchdogTerminateBeforeEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when a script runtime is being terminated due to a violation of the performance watchdog system. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: WatchdogTerminateBeforeEvent) => void",
        "return": "void"
      }
    },
    "WeatherChangeAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "WeatherChangeAfterEvent"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension in which the weather has changed."
        },
        "match": "readonly dimension: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "lightning": {
        "comment": {
          "params": {},
          "remarks": "Whether it is lightning after the change in weather."
        },
        "match": "readonly lightning: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "raining": {
        "comment": {
          "params": {},
          "remarks": "Whether it is raining after the change in weather."
        },
        "match": "readonly raining: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      }
    },
    "WeatherChangeAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "WeatherChangeAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when weather changes. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: WeatherChangeAfterEvent) => void",
        "return": "(arg: WeatherChangeAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called when weather changes. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: WeatherChangeAfterEvent) => void",
        "return": "void"
      }
    },
    "World": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "World"
      },
      "afterEvents": {
        "comment": {
          "params": {},
          "remarks": "Contains a set of events that are applicable to the entirety of the world.  Event callbacks are called in a deferred manner. Event callbacks are executed in read-write mode."
        },
        "match": "readonly afterEvents: WorldAfterEvents",
        "kind": "readonly",
        "param": "",
        "return": "WorldAfterEvents"
      },
      "beforeEvents": {
        "comment": {
          "params": {},
          "remarks": "Contains a set of events that are applicable to the entirety of the world. Event callbacks are called immediately. Event callbacks are executed in read-only mode."
        },
        "match": "readonly beforeEvents: WorldBeforeEvents",
        "kind": "readonly",
        "param": "",
        "return": "WorldBeforeEvents"
      },
      "scoreboard": {
        "comment": {
          "params": {},
          "remarks": "Returns the general global scoreboard that applies to the world."
        },
        "match": "readonly scoreboard: Scoreboard",
        "kind": "readonly",
        "param": "",
        "return": "Scoreboard"
      },
      "broadcastClientMessage": {
        "comment": {
          "params": {
            "id": "The message identifier.",
            "value": "The message."
          },
          "beta": "",
          "remarks": "A method that is internal-only, used for broadcasting specific messages between client and server. This function can't be called in read-only mode."
        },
        "match": "broadcastClientMessage(id: string, value: string): void",
        "kind": "public",
        "param": "id: string, value: string",
        "return": "void"
      },
      "clearDynamicProperties": {
        "comment": {
          "params": {},
          "remarks": "Clears the set of dynamic properties declared for this behavior pack within the world."
        },
        "match": "clearDynamicProperties(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "getAbsoluteTime": {
        "comment": {
          "params": {},
          "remarks": "Returns the absolute time since the start of the world."
        },
        "match": "getAbsoluteTime(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "getAllPlayers": {
        "comment": {
          "params": {},
          "remarks": "Returns an array of all active players within the world.",
          "throws": "function can throw errors."
        },
        "match": "getAllPlayers(): Player[]",
        "kind": "public",
        "param": "",
        "return": "Player[]"
      },
      "getDay": {
        "comment": {
          "params": {},
          "remarks": "Returns the current day.",
          "returns": "The current day, determined by the world time divided by the number of ticks per day. New worlds start at day 0."
        },
        "match": "getDay(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "getDefaultSpawnLocation": {
        "comment": {
          "params": {},
          "remarks": "Returns the default Overworld spawn location.",
          "returns": "The default Overworld spawn location. By default, the Y coordinate is 32767, indicating a player's spawn height is not fixed and will be determined by surrounding blocks."
        },
        "match": "getDefaultSpawnLocation(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getDimension": {
        "comment": {
          "params": {
            "dimensionId": "The name of the dimension. For example, \"overworld\", \"nether\" or \"the_end\"."
          },
          "remarks": "Returns a dimension object.",
          "returns": "The requested dimension",
          "throws": "Throws if the given dimension name is invalid"
        },
        "match": "getDimension(dimensionId: string): Dimension",
        "kind": "public",
        "param": "dimensionId: string",
        "return": "Dimension"
      },
      "getDynamicProperty": {
        "comment": {
          "params": {
            "identifier": "The property identifier."
          },
          "remarks": "Returns a property value.",
          "returns": "Returns the value for the property, or undefined if the property has not been set.",
          "throws": "Throws if the given dynamic property identifier is not defined.",
          "example": "```typescript let paintStr = mc.world.getDynamicProperty(\"samplelibrary:longerjson\"); let paint: { color: string; intensity: number } | undefined = undefined; log(\"Current value is: \" + paintStr); if (paintStr === undefined) { paint = { color: \"purple\", intensity: 0, }; } else { if (typeof paintStr !== \"string\") { log(\"Paint is of an unexpected type.\"); return -1; } try { paint = JSON.parse(paintStr); } catch (e) { log(\"Error parsing serialized struct.\"); return -1; } } if (!paint) { log(\"Error parsing serialized struct.\"); return -1; } paint.intensity++; paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits mc.world.setDynamicProperty(\"samplelibrary:longerjson\", paintStr); ```"
        },
        "match": "getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string | Vector3 | undefined"
      },
      "getDynamicPropertyIds": {
        "comment": {
          "params": {},
          "remarks": "Gets a set of dynamic property identifiers that have been set in this world.",
          "returns": "A string array of active dynamic property identifiers."
        },
        "match": "getDynamicPropertyIds(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getDynamicPropertyTotalByteCount": {
        "comment": {
          "params": {},
          "remarks": "Gets the total byte count of dynamic properties. This could potentially be used for your own analytics to ensure you're not storing gigantic sets of dynamic properties."
        },
        "match": "getDynamicPropertyTotalByteCount(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "getEntity": {
        "comment": {
          "params": {
            "id": "The id of the entity."
          },
          "remarks": "Returns an entity based on the provided id.",
          "returns": "The requested entity object.",
          "throws": "Throws if the given entity id is invalid."
        },
        "match": "getEntity(id: string): Entity | undefined",
        "kind": "public",
        "param": "id: string",
        "return": "Entity | undefined"
      },
      "getMoonPhase": {
        "comment": {
          "params": {},
          "remarks": "Returns the MoonPhase for the current time."
        },
        "match": "getMoonPhase(): MoonPhase",
        "kind": "public",
        "param": "",
        "return": "MoonPhase"
      },
      "getPlayers": {
        "comment": {
          "params": {
            "options": "Additional options that can be used to filter the set of players returned."
          },
          "remarks": "Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.",
          "returns": "A player array.",
          "throws": "Throws if the provided EntityQueryOptions are invalid."
        },
        "match": "getPlayers(options?: EntityQueryOptions): Player[]",
        "kind": "public",
        "param": "options?: EntityQueryOptions",
        "return": "Player[]"
      },
      "getTimeOfDay": {
        "comment": {
          "params": {},
          "remarks": "Returns the time of day.",
          "returns": "The time of day, in ticks, between 0 and 24000."
        },
        "match": "getTimeOfDay(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "playMusic": {
        "comment": {
          "params": {},
          "remarks": "Plays a particular music track for all players. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript let players = mc.world.getPlayers(); const musicOptions: mc.MusicOptions = { fade: 0.5, loop: true, volume: 1.0, }; mc.world.playMusic(\"music.menu\", musicOptions); const worldSoundOptions: mc.WorldSoundOptions = { pitch: 0.5, volume: 4.0, }; mc.world.playSound(\"ambient.weather.thunder\", targetLocation, worldSoundOptions); const playerSoundOptions: mc.PlayerSoundOptions = { pitch: 1.0, volume: 1.0, }; players[0].playSound(\"bucket.fill_water\", playerSoundOptions); ```"
        },
        "match": "playMusic(trackId: string, musicOptions?: MusicOptions): void",
        "kind": "public",
        "param": "trackId: string, musicOptions?: MusicOptions",
        "return": "void"
      },
      "playSound": {
        "comment": {
          "params": {},
          "remarks": "Plays a sound for all players. This function can't be called in read-only mode.",
          "throws": "An error will be thrown if volume is less than 0.0. An error will be thrown if fade is less than 0.0. An error will be thrown if pitch is less than 0.01. An error will be thrown if volume is less than 0.0.",
          "example": "```typescript let players = mc.world.getPlayers(); const musicOptions: mc.MusicOptions = { fade: 0.5, loop: true, volume: 1.0, }; mc.world.playMusic(\"music.menu\", musicOptions); const worldSoundOptions: mc.WorldSoundOptions = { pitch: 0.5, volume: 4.0, }; mc.world.playSound(\"ambient.weather.thunder\", targetLocation, worldSoundOptions); const playerSoundOptions: mc.PlayerSoundOptions = { pitch: 1.0, volume: 1.0, }; players[0].playSound(\"bucket.fill_water\", playerSoundOptions); ```"
        },
        "match": "playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void",
        "kind": "public",
        "param": "soundId: string, location: Vector3, soundOptions?: WorldSoundOptions",
        "return": "void"
      },
      "queueMusic": {
        "comment": {
          "params": {
            "trackId": "Identifier of the music track to play.",
            "musicOptions": "Additional options for the music track."
          },
          "remarks": "Queues an additional music track for players. If a track is not playing, a music track will play. This function can't be called in read-only mode.",
          "throws": "An error will be thrown if volume is less than 0.0. An error will be thrown if fade is less than 0.0."
        },
        "match": "queueMusic(trackId: string, musicOptions?: MusicOptions): void",
        "kind": "public",
        "param": "trackId: string, musicOptions?: MusicOptions",
        "return": "void"
      },
      "sendMessage": {
        "comment": {
          "params": {
            "message": "The message to be displayed."
          },
          "remarks": "Sends a message to all players.",
          "throws": "This method can throw if the provided {@link RawMessage} is in an invalid format. For example, if an empty `name` string is provided to `score`.",
          "example": "```typescript // Displays \"First or Second\" const rawMessage = { translate: \"accessibility.list.or.two\", with: [\"First\", \"Second\"] }; world.sendMessage(rawMessage); ```"
        },
        "match": "sendMessage(message: (RawMessage | string)[] | RawMessage | string): void",
        "kind": "public",
        "param": "message: (RawMessage | string)[] | RawMessage | string",
        "return": "void"
      },
      "setAbsoluteTime": {
        "comment": {
          "params": {
            "absoluteTime": "The world time, in ticks."
          },
          "remarks": "Sets the world time. This function can't be called in read-only mode."
        },
        "match": "setAbsoluteTime(absoluteTime: number): void",
        "kind": "public",
        "param": "absoluteTime: number",
        "return": "void"
      },
      "setDefaultSpawnLocation": {
        "comment": {
          "params": {
            "spawnLocation": "Location of the spawn point. Note that this is assumed to be within the overworld dimension."
          },
          "remarks": "Sets a default spawn location for all players. This function can't be called in read-only mode.",
          "throws": "Throws if the provided spawn location is out of bounds. {@link Error} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "setDefaultSpawnLocation(spawnLocation: Vector3): void",
        "kind": "public",
        "param": "spawnLocation: Vector3",
        "return": "void"
      },
      "setDynamicProperty": {
        "comment": {
          "params": {
            "identifier": "The property identifier.",
            "value": "Data value of the property to set."
          },
          "remarks": "Sets a specified property to a value.",
          "throws": "Throws if the given dynamic property identifier is not defined.",
          "example": "```typescript let paintStr = mc.world.getDynamicProperty(\"samplelibrary:longerjson\"); let paint: { color: string; intensity: number } | undefined = undefined; log(\"Current value is: \" + paintStr); if (paintStr === undefined) { paint = { color: \"purple\", intensity: 0, }; } else { if (typeof paintStr !== \"string\") { log(\"Paint is of an unexpected type.\"); return -1; } try { paint = JSON.parse(paintStr); } catch (e) { log(\"Error parsing serialized struct.\"); return -1; } } if (!paint) { log(\"Error parsing serialized struct.\"); return -1; } paint.intensity++; paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits mc.world.setDynamicProperty(\"samplelibrary:longerjson\", paintStr); ```"
        },
        "match": "setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void",
        "kind": "public",
        "param": "identifier: string, value?: boolean | number | string | Vector3",
        "return": "void"
      },
      "setTimeOfDay": {
        "comment": {
          "params": {
            "timeOfDay": "The time of day, in ticks, between 0 and 24000."
          },
          "remarks": "Sets the time of day. This function can't be called in read-only mode.",
          "throws": "Throws if the provided time of day is not within the valid range."
        },
        "match": "setTimeOfDay(timeOfDay: number | TimeOfDay): void",
        "kind": "public",
        "param": "timeOfDay: number | TimeOfDay",
        "return": "void"
      },
      "stopMusic": {
        "comment": {
          "params": {},
          "remarks": "Stops any music tracks from playing. This function can't be called in read-only mode."
        },
        "match": "stopMusic(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      }
    },
    "WorldAfterEvents": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "WorldAfterEvents"
      },
      "blockExplode": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event fires for each BlockLocation destroyed by an explosion. It is fired after the blocks have already been destroyed."
        },
        "match": "readonly blockExplode: BlockExplodeAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "BlockExplodeAfterEventSignal"
      },
      "buttonPush": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a button is pushed."
        },
        "match": "readonly buttonPush: ButtonPushAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ButtonPushAfterEventSignal"
      },
      "chatSend": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event is triggered after a chat message has been broadcast or sent to players."
        },
        "match": "readonly chatSend: ChatSendAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ChatSendAfterEventSignal"
      },
      "dataDrivenEntityTriggerEvent": {
        "comment": {
          "params": {},
          "beta": ""
        },
        "match": "readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "DataDrivenEntityTriggerAfterEventSignal"
      },
      "effectAdd": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event fires when an effect, like poisoning, is added to an entity."
        },
        "match": "readonly effectAdd: EffectAddAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EffectAddAfterEventSignal"
      },
      "entityDie": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an entity dies."
        },
        "match": "readonly entityDie: EntityDieAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntityDieAfterEventSignal"
      },
      "entityHealthChanged": {
        "comment": {
          "params": {},
          "remarks": "This event fires when entity health changes in any degree."
        },
        "match": "readonly entityHealthChanged: EntityHealthChangedAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntityHealthChangedAfterEventSignal"
      },
      "entityHitBlock": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an entity hits (that is, melee attacks) a block."
        },
        "match": "readonly entityHitBlock: EntityHitBlockAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntityHitBlockAfterEventSignal"
      },
      "entityHitEntity": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an entity hits (that is, melee attacks) another entity."
        },
        "match": "readonly entityHitEntity: EntityHitEntityAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntityHitEntityAfterEventSignal"
      },
      "entityHurt": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an entity is hurt (takes damage)."
        },
        "match": "readonly entityHurt: EntityHurtAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntityHurtAfterEventSignal"
      },
      "entityLoad": {
        "comment": {
          "params": {},
          "remarks": "Fires when an entity is loaded."
        },
        "match": "readonly entityLoad: EntityLoadAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntityLoadAfterEventSignal"
      },
      "entityRemove": {
        "comment": {
          "params": {},
          "remarks": "Fires when an entity is removed (for example, potentially unloaded, or removed after being killed)."
        },
        "match": "readonly entityRemove: EntityRemoveAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntityRemoveAfterEventSignal"
      },
      "entitySpawn": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an entity is spawned."
        },
        "match": "readonly entitySpawn: EntitySpawnAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntitySpawnAfterEventSignal"
      },
      "explosion": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event is fired after an explosion occurs."
        },
        "match": "readonly explosion: ExplosionAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ExplosionAfterEventSignal"
      },
      "itemCompleteUse": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a chargeable item completes charging."
        },
        "match": "readonly itemCompleteUse: ItemCompleteUseAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemCompleteUseAfterEventSignal"
      },
      "itemDefinitionEvent": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "For custom items, this event is triggered when the fundamental set of defined components for the item change. Note that this event is only fired for custom data-driven items."
        },
        "match": "readonly itemDefinitionEvent: ItemDefinitionAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemDefinitionAfterEventSignal"
      },
      "itemReleaseUse": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a chargeable item is released from charging."
        },
        "match": "readonly itemReleaseUse: ItemReleaseUseAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemReleaseUseAfterEventSignal"
      },
      "itemStartUse": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a chargeable item starts charging."
        },
        "match": "readonly itemStartUse: ItemStartUseAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemStartUseAfterEventSignal"
      },
      "itemStartUseOn": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a player successfully uses an item or places a block by pressing the Use Item / Place Block button. If multiple blocks are placed, this event will only occur once at the beginning of the block placement. Note: This event cannot be used with Hoe or Axe items."
        },
        "match": "readonly itemStartUseOn: ItemStartUseOnAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemStartUseOnAfterEventSignal"
      },
      "itemStopUse": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a chargeable item stops charging."
        },
        "match": "readonly itemStopUse: ItemStopUseAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemStopUseAfterEventSignal"
      },
      "itemStopUseOn": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a player releases the Use Item / Place Block button after successfully using an item. Note: This event cannot be used with Hoe or Axe items."
        },
        "match": "readonly itemStopUseOn: ItemStopUseOnAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemStopUseOnAfterEventSignal"
      },
      "itemUse": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an item is successfully used by a player."
        },
        "match": "readonly itemUse: ItemUseAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemUseAfterEventSignal"
      },
      "itemUseOn": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an item is used on a block by a player."
        },
        "match": "readonly itemUseOn: ItemUseOnAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemUseOnAfterEventSignal"
      },
      "leverAction": {
        "comment": {
          "params": {},
          "remarks": "A lever has been pulled."
        },
        "match": "readonly leverAction: LeverActionAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "LeverActionAfterEventSignal"
      },
      "messageReceive": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event is an internal implementation detail, and is otherwise not currently functional."
        },
        "match": "readonly messageReceive: ServerMessageAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ServerMessageAfterEventSignal"
      },
      "pistonActivate": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event fires when a piston expands or retracts."
        },
        "match": "readonly pistonActivate: PistonActivateAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PistonActivateAfterEventSignal"
      },
      "playerBreakBlock": {
        "comment": {
          "params": {},
          "remarks": "This event fires for a block that is broken by a player."
        },
        "match": "readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerBreakBlockAfterEventSignal"
      },
      "playerDimensionChange": {
        "comment": {
          "params": {},
          "remarks": "Fires when a player moved to a different dimension."
        },
        "match": "readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerDimensionChangeAfterEventSignal"
      },
      "playerInteractWithBlock": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "An event for when a player interacts with a block."
        },
        "match": "readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerInteractWithBlockAfterEventSignal"
      },
      "playerInteractWithEntity": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event fires when a player interacts with an entity."
        },
        "match": "readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerInteractWithEntityAfterEventSignal"
      },
      "playerJoin": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a player joins a world.  See also playerSpawn for another related event you can trap for when a player is spawned the first time within a world."
        },
        "match": "readonly playerJoin: PlayerJoinAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerJoinAfterEventSignal"
      },
      "playerLeave": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a player leaves a world."
        },
        "match": "readonly playerLeave: PlayerLeaveAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerLeaveAfterEventSignal"
      },
      "playerPlaceBlock": {
        "comment": {
          "params": {},
          "remarks": "This event fires for a block that is placed by a player."
        },
        "match": "readonly playerPlaceBlock: PlayerPlaceBlockAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerPlaceBlockAfterEventSignal"
      },
      "playerSpawn": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a player spawns or respawns. Note that an additional flag within this event will tell you whether the player is spawning right after join vs. a respawn."
        },
        "match": "readonly playerSpawn: PlayerSpawnAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerSpawnAfterEventSignal"
      },
      "pressurePlatePop": {
        "comment": {
          "params": {},
          "remarks": "A pressure plate has popped back up (i.e., there are no entities on the pressure plate.)"
        },
        "match": "readonly pressurePlatePop: PressurePlatePopAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PressurePlatePopAfterEventSignal"
      },
      "pressurePlatePush": {
        "comment": {
          "params": {},
          "remarks": "A pressure plate has pushed (at least one entity has moved onto a pressure plate.)"
        },
        "match": "readonly pressurePlatePush: PressurePlatePushAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PressurePlatePushAfterEventSignal"
      },
      "projectileHitBlock": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a projectile hits a block."
        },
        "match": "readonly projectileHitBlock: ProjectileHitBlockAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ProjectileHitBlockAfterEventSignal"
      },
      "projectileHitEntity": {
        "comment": {
          "params": {},
          "remarks": "This event fires when a projectile hits an entity."
        },
        "match": "readonly projectileHitEntity: ProjectileHitEntityAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ProjectileHitEntityAfterEventSignal"
      },
      "targetBlockHit": {
        "comment": {
          "params": {},
          "remarks": "A target block was hit."
        },
        "match": "readonly targetBlockHit: TargetBlockHitAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "TargetBlockHitAfterEventSignal"
      },
      "tripWireTrip": {
        "comment": {
          "params": {},
          "remarks": "A trip wire was tripped."
        },
        "match": "readonly tripWireTrip: TripWireTripAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "TripWireTripAfterEventSignal"
      },
      "weatherChange": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event will be triggered when the weather changes within Minecraft."
        },
        "match": "readonly weatherChange: WeatherChangeAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "WeatherChangeAfterEventSignal"
      },
      "worldInitialize": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event fires when the script environment is initialized on a World. In addition, you can register dynamic properties within the scope of a world Initialize event."
        },
        "match": "readonly worldInitialize: WorldInitializeAfterEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "WorldInitializeAfterEventSignal"
      }
    },
    "WorldBeforeEvents": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "WorldBeforeEvents"
      },
      "chatSend": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event is triggered after a chat message has been broadcast or sent to players."
        },
        "match": "readonly chatSend: ChatSendBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ChatSendBeforeEventSignal"
      },
      "dataDrivenEntityTriggerEvent": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event is fired when an entity event has been triggered that will update the component definition state of an entity."
        },
        "match": "readonly dataDrivenEntityTriggerEvent: DataDrivenEntityTriggerBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "DataDrivenEntityTriggerBeforeEventSignal"
      },
      "effectAdd": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event is triggered after an event has been added to an entity."
        },
        "match": "readonly effectAdd: EffectAddBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EffectAddBeforeEventSignal"
      },
      "entityRemove": {
        "comment": {
          "params": {},
          "remarks": "Fires before an entity is removed from the world (for example, unloaded or removed after being killed.)"
        },
        "match": "readonly entityRemove: EntityRemoveBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "EntityRemoveBeforeEventSignal"
      },
      "explosion": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event is fired after an explosion occurs."
        },
        "match": "readonly explosion: ExplosionBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ExplosionBeforeEventSignal"
      },
      "itemDefinitionEvent": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "For custom items, this event is triggered when the fundamental set of defined components for the item change. Note that this event is only fired for custom data-driven items."
        },
        "match": "readonly itemDefinitionEvent: ItemDefinitionBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemDefinitionBeforeEventSignal"
      },
      "itemUse": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an item is successfully used by a player."
        },
        "match": "readonly itemUse: ItemUseBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemUseBeforeEventSignal"
      },
      "itemUseOn": {
        "comment": {
          "params": {},
          "remarks": "This event fires when an item is used on a block by a player."
        },
        "match": "readonly itemUseOn: ItemUseOnBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "ItemUseOnBeforeEventSignal"
      },
      "pistonActivate": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event fires when a piston expands or retracts."
        },
        "match": "readonly pistonActivate: PistonActivateBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PistonActivateBeforeEventSignal"
      },
      "playerBreakBlock": {
        "comment": {
          "params": {},
          "remarks": "This event fires before a block is broken by a player."
        },
        "match": "readonly playerBreakBlock: PlayerBreakBlockBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerBreakBlockBeforeEventSignal"
      },
      "playerInteractWithBlock": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Fires before a player interacts with a block."
        },
        "match": "readonly playerInteractWithBlock: PlayerInteractWithBlockBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerInteractWithBlockBeforeEventSignal"
      },
      "playerInteractWithEntity": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Fires before a player interacts with an entity."
        },
        "match": "readonly playerInteractWithEntity: PlayerInteractWithEntityBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerInteractWithEntityBeforeEventSignal"
      },
      "playerLeave": {
        "comment": {
          "params": {},
          "remarks": "Fires when a player leaves the game."
        },
        "match": "readonly playerLeave: PlayerLeaveBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerLeaveBeforeEventSignal"
      },
      "playerPlaceBlock": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This event fires before a block is placed by a player."
        },
        "match": "readonly playerPlaceBlock: PlayerPlaceBlockBeforeEventSignal",
        "kind": "readonly",
        "param": "",
        "return": "PlayerPlaceBlockBeforeEventSignal"
      }
    },
    "WorldInitializeAfterEvent": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "WorldInitializeAfterEvent"
      }
    },
    "WorldInitializeAfterEventSignal": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "WorldInitializeAfterEventSignal"
      },
      "subscribe": {
        "comment": {
          "params": {},
          "remarks": "Adds a callback that will be called when the scripting environment is initialized for a World. This function can't be called in read-only mode."
        },
        "match": "subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void",
        "kind": "public",
        "param": "callback: (arg: WorldInitializeAfterEvent) => void",
        "return": "(arg: WorldInitializeAfterEvent) => void"
      },
      "unsubscribe": {
        "comment": {
          "params": {},
          "remarks": "Removes a callback from being called the scripting environment is initialized for a World. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void",
        "kind": "public",
        "param": "callback: (arg: WorldInitializeAfterEvent) => void",
        "return": "void"
      }
    },
    "CommandError": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "CommandError"
      }
    },
    "LocationInUnloadedChunkError": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "LocationInUnloadedChunkError"
      }
    },
    "LocationOutOfWorldBoundariesError": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "LocationOutOfWorldBoundariesError"
      }
    }
  },
  "@minecraft/server-ui": {
    "ActionFormData": {
      "body": {
        "comment": {
          "params": {},
          "remarks": "Method that sets the body text for the modal form."
        },
        "match": "body(bodyText: minecraftserver.RawMessage | string): ActionFormData",
        "kind": "public",
        "param": "bodyText: minecraftserver.RawMessage | string",
        "return": "ActionFormData"
      },
      "button": {
        "comment": {
          "params": {},
          "remarks": "Adds a button to this form with an icon from a resource pack."
        },
        "match": "button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData",
        "kind": "public",
        "param": "text: minecraftserver.RawMessage | string, iconPath?: string",
        "return": "ActionFormData"
      },
      "show": {
        "comment": {
          "params": {
            "player": "Player to show this dialog to."
          },
          "remarks": "Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "show(player: minecraftserver.Player): Promise<ActionFormResponse>",
        "kind": "public",
        "param": "player: minecraftserver.Player",
        "return": "Promise<ActionFormResponse>"
      },
      "title": {
        "comment": {
          "params": {},
          "remarks": "This builder method sets the title for the modal dialog."
        },
        "match": "title(titleText: minecraftserver.RawMessage | string): ActionFormData",
        "kind": "public",
        "param": "titleText: minecraftserver.RawMessage | string",
        "return": "ActionFormData"
      }
    },
    "ActionFormResponse": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ActionFormResponse"
      },
      "canceled": {
        "comment": {
          "params": {},
          "remarks": "Returns the index of the button that was pushed."
        },
        "match": "readonly canceled: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      }
    },
    "FormResponse": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "FormResponse"
      },
      "canceled": {
        "comment": {
          "params": {},
          "remarks": "Contains additional details as to why a form was canceled."
        },
        "match": "readonly canceled: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      }
    },
    "MessageFormData": {
      "body": {
        "comment": {
          "params": {},
          "remarks": "Method that sets the body text for the modal form."
        },
        "match": "body(bodyText: minecraftserver.RawMessage | string): MessageFormData",
        "kind": "public",
        "param": "bodyText: minecraftserver.RawMessage | string",
        "return": "MessageFormData"
      },
      "button1": {
        "comment": {
          "params": {},
          "remarks": "Method that sets the text for the first button of the dialog."
        },
        "match": "button1(text: minecraftserver.RawMessage | string): MessageFormData",
        "kind": "public",
        "param": "text: minecraftserver.RawMessage | string",
        "return": "MessageFormData"
      },
      "button2": {
        "comment": {
          "params": {},
          "remarks": "This method sets the text for the second button on the dialog."
        },
        "match": "button2(text: minecraftserver.RawMessage | string): MessageFormData",
        "kind": "public",
        "param": "text: minecraftserver.RawMessage | string",
        "return": "MessageFormData"
      },
      "show": {
        "comment": {
          "params": {
            "player": "Player to show this dialog to."
          },
          "remarks": "Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "show(player: minecraftserver.Player): Promise<MessageFormResponse>",
        "kind": "public",
        "param": "player: minecraftserver.Player",
        "return": "Promise<MessageFormResponse>"
      },
      "title": {
        "comment": {
          "params": {},
          "remarks": "This builder method sets the title for the modal dialog."
        },
        "match": "title(titleText: minecraftserver.RawMessage | string): MessageFormData",
        "kind": "public",
        "param": "titleText: minecraftserver.RawMessage | string",
        "return": "MessageFormData"
      }
    },
    "MessageFormResponse": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "MessageFormResponse"
      },
      "canceled": {
        "comment": {
          "params": {},
          "remarks": "Returns the index of the button that was pushed."
        },
        "match": "readonly canceled: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      }
    },
    "ModalFormData": {
      "dropdown": {
        "comment": {
          "params": {},
          "remarks": "Adds a dropdown with choices to the form."
        },
        "match": "dropdown(label: minecraftserver.RawMessage | string,options: (minecraftserver.RawMessage | string)[],defaultValueIndex?: number,): ModalFormData",
        "kind": "public",
        "param": "label: minecraftserver.RawMessage | string,options: (minecraftserver.RawMessage | string)[],defaultValueIndex?: number,",
        "return": "ModalFormData"
      },
      "show": {
        "comment": {
          "params": {
            "player": "Player to show this dialog to."
          },
          "remarks": "Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "show(player: minecraftserver.Player): Promise<ModalFormResponse>",
        "kind": "public",
        "param": "player: minecraftserver.Player",
        "return": "Promise<ModalFormResponse>"
      },
      "slider": {
        "comment": {
          "params": {},
          "remarks": "Adds a numeric slider to the form."
        },
        "match": "slider(label: minecraftserver.RawMessage | string,minimumValue: number,maximumValue: number,valueStep: number,defaultValue?: number,): ModalFormData",
        "kind": "public",
        "param": "label: minecraftserver.RawMessage | string,minimumValue: number,maximumValue: number,valueStep: number,defaultValue?: number,",
        "return": "ModalFormData"
      },
      "textField": {
        "comment": {
          "params": {},
          "remarks": "Adds a textbox to the form."
        },
        "match": "textField(label: minecraftserver.RawMessage | string,placeholderText: minecraftserver.RawMessage | string,defaultValue?: minecraftserver.RawMessage | string,): ModalFormData",
        "kind": "public",
        "param": "label: minecraftserver.RawMessage | string,placeholderText: minecraftserver.RawMessage | string,defaultValue?: minecraftserver.RawMessage | string,",
        "return": "ModalFormData"
      },
      "title": {
        "comment": {
          "params": {},
          "remarks": "This builder method sets the title for the modal dialog."
        },
        "match": "title(titleText: minecraftserver.RawMessage | string): ModalFormData",
        "kind": "public",
        "param": "titleText: minecraftserver.RawMessage | string",
        "return": "ModalFormData"
      },
      "toggle": {
        "comment": {
          "params": {},
          "remarks": "Adds a toggle checkbox button to the form."
        },
        "match": "toggle(label: minecraftserver.RawMessage | string, defaultValue?: boolean): ModalFormData",
        "kind": "public",
        "param": "label: minecraftserver.RawMessage | string, defaultValue?: boolean",
        "return": "ModalFormData"
      }
    },
    "ModalFormResponse": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ModalFormResponse"
      },
      "canceled": {
        "comment": {
          "params": {},
          "remarks": "An ordered set of values based on the order of controls specified by ModalFormData."
        },
        "match": "readonly canceled: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      }
    }
  },
  "@minecraft/server-gametest": {
    "FenceConnectivity": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "FenceConnectivity"
      },
      "east": {
        "comment": {
          "params": {},
          "remarks": "Represents whether this fence block is connected to another fence to the east (x + 1)."
        },
        "match": "readonly east: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "north": {
        "comment": {
          "params": {},
          "remarks": "Represents whether this fence block is connected to another fence to the north (z - 1)."
        },
        "match": "readonly north: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "south": {
        "comment": {
          "params": {},
          "remarks": "Represents whether this fence block is connected to another fence to the south (z + 1)."
        },
        "match": "readonly south: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "west": {
        "comment": {
          "params": {},
          "remarks": "Represents whether this fence block is connected to another fence to the west (x - 1)."
        },
        "match": "readonly west: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      }
    },
    "GameTestSequence": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "GameTestSequence"
      },
      "thenExecute": {
        "comment": {
          "params": {
            "callback": "Callback function to execute."
          },
          "remarks": "Runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution. This function can't be called in read-only mode.",
          "returns": "Returns a GameTestSequence object where additional .thenXyz method steps can be added."
        },
        "match": "thenExecute(callback: () => void): GameTestSequence",
        "kind": "public",
        "param": "callback: () => void",
        "return": "GameTestSequence"
      },
      "thenExecuteAfter": {
        "comment": {
          "params": {
            "delayTicks": "Number of ticks to wait before executing the callback.",
            "callback": "Callback function to execute."
          },
          "remarks": "After a delay, runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution. This function can't be called in read-only mode.",
          "returns": "Returns a GameTestSequence object where additional .thenXyz method steps can be added."
        },
        "match": "thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence",
        "kind": "public",
        "param": "delayTicks: number, callback: () => void",
        "return": "GameTestSequence"
      },
      "thenExecuteFor": {
        "comment": {
          "params": {
            "callback": "Callback function to execute."
          },
          "remarks": "Runs the given callback every tick for the given number of ticks. This function can't be called in read-only mode.",
          "returns": "Returns a GameTestSequence object where additional .thenXyz method steps can be added."
        },
        "match": "thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence",
        "kind": "public",
        "param": "tickCount: number, callback: () => void",
        "return": "GameTestSequence"
      },
      "thenFail": {
        "comment": {
          "params": {
            "errorMessage": "Error message summarizing the failure condition."
          },
          "remarks": "Causes the test to fail if this step in the GameTest sequence is reached. This function can't be called in read-only mode."
        },
        "match": "thenFail(errorMessage: string): void",
        "kind": "public",
        "param": "errorMessage: string",
        "return": "void"
      },
      "thenIdle": {
        "comment": {
          "params": {
            "delayTicks": "Number of ticks to delay for this step in the GameTest sequence."
          },
          "remarks": "Idles the GameTest sequence for the specified delayTicks. This function can't be called in read-only mode.",
          "returns": "Returns a GameTestSequence object where additional .thenXyz method steps can be added."
        },
        "match": "thenIdle(delayTicks: number): GameTestSequence",
        "kind": "public",
        "param": "delayTicks: number",
        "return": "GameTestSequence"
      },
      "thenSucceed": {
        "comment": {
          "params": {},
          "remarks": "Marks the GameTest a success if this step is reached in the GameTest sequence. This function can't be called in read-only mode."
        },
        "match": "thenSucceed(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "thenWait": {
        "comment": {
          "params": {
            "callback": "Testing callback function to execute. Typically, this function will have .assertXyz functions within it."
          },
          "remarks": "Executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution. This function can't be called in read-only mode.",
          "returns": "Returns a GameTestSequence object where additional .thenXyz method steps can be added."
        },
        "match": "thenWait(callback: () => void): GameTestSequence",
        "kind": "public",
        "param": "callback: () => void",
        "return": "GameTestSequence"
      },
      "thenWaitAfter": {
        "comment": {
          "params": {
            "delayTicks": "Tick (after the previous step in the GameTest sequence) to run the callback at.",
            "callback": "Testing callback function to execute. Typically, this function will have .assertXyz functions within it."
          },
          "remarks": "After a delay from the previous step, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution. This function can't be called in read-only mode.",
          "returns": "Returns a GameTestSequence object where additional .thenXyz method steps can be added."
        },
        "match": "thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence",
        "kind": "public",
        "param": "delayTicks: number, callback: () => void",
        "return": "GameTestSequence"
      }
    },
    "RegistrationBuilder": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "RegistrationBuilder"
      },
      "batch": {
        "comment": {
          "params": {
            "batchName": "Name of the batch for the test."
          },
          "remarks": "Sets the batch for the test to run in. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "batch(batchName: string): RegistrationBuilder",
        "kind": "public",
        "param": "batchName: string",
        "return": "RegistrationBuilder"
      },
      "maxAttempts": {
        "comment": {
          "params": {},
          "remarks": "Sets the maximum number of times a test will try to rerun if it fails. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "maxAttempts(attemptCount: number): RegistrationBuilder",
        "kind": "public",
        "param": "attemptCount: number",
        "return": "RegistrationBuilder"
      },
      "maxTicks": {
        "comment": {
          "params": {},
          "remarks": "Sets the maximum number of ticks a test will run for before timing out and failing. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "maxTicks(tickCount: number): RegistrationBuilder",
        "kind": "public",
        "param": "tickCount: number",
        "return": "RegistrationBuilder"
      },
      "padding": {
        "comment": {
          "params": {
            "paddingBlocks": "Size, in blocks, around the GameTest where additional GameTests should not be created."
          },
          "remarks": "Size around the GameTest, in blocks, that should be reserved for the test when running multiple tests together. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "padding(paddingBlocks: number): RegistrationBuilder",
        "kind": "public",
        "param": "paddingBlocks: number",
        "return": "RegistrationBuilder"
      },
      "required": {
        "comment": {
          "params": {
            "isRequired": "If set to true, the test must pass in order for the entire run of tests to pass."
          },
          "remarks": "Whether this test is required to pass as part of its broader set of tests. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "required(isRequired: boolean): RegistrationBuilder",
        "kind": "public",
        "param": "isRequired: boolean",
        "return": "RegistrationBuilder"
      },
      "requiredSuccessfulAttempts": {
        "comment": {
          "params": {},
          "remarks": "Sets the number of successful test runs to be considered successful. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder",
        "kind": "public",
        "param": "attemptCount: number",
        "return": "RegistrationBuilder"
      },
      "rotateTest": {
        "comment": {
          "params": {},
          "remarks": "If true, runs the test in all four rotations when run via /gametest runset. This function can't be called in read-only mode."
        },
        "match": "rotateTest(rotate: boolean): RegistrationBuilder",
        "kind": "public",
        "param": "rotate: boolean",
        "return": "RegistrationBuilder"
      },
      "setupTicks": {
        "comment": {
          "params": {},
          "remarks": "Sets the number of ticks for a test to wait before executing when the structure is spawned. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "setupTicks(tickCount: number): RegistrationBuilder",
        "kind": "public",
        "param": "tickCount: number",
        "return": "RegistrationBuilder"
      },
      "structureName": {
        "comment": {
          "params": {},
          "remarks": "Sets the name of the structure for a test to use. \"xyz:bar\" will load `/structures/xyz/bar.mcstructure` from the behavior pack stack. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "structureName(structureName: string): RegistrationBuilder",
        "kind": "public",
        "param": "structureName: string",
        "return": "RegistrationBuilder"
      },
      "tag": {
        "comment": {
          "params": {},
          "remarks": "Adds a tag to a test. You can run all tests with a given tag with `/gametest runset <tag>`. This function can't be called in read-only mode.",
          "returns": "RegistrationBuilder object where additional configuration methods can be called."
        },
        "match": "tag(tag: string): RegistrationBuilder",
        "kind": "public",
        "param": "tag: string",
        "return": "RegistrationBuilder"
      }
    },
    "SculkSpreader": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "SculkSpreader"
      },
      "maxCharge": {
        "comment": {
          "params": {},
          "remarks": "Gets the maximum charge of a sculk spreader.",
          "throws": "property can throw when used."
        },
        "match": "readonly maxCharge: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "addCursorsWithOffset": {
        "comment": {
          "params": {},
          "remarks": "Adds a cursor - which is a notional waypoint that the sculk will spread in the direction of. This function can't be called in read-only mode."
        },
        "match": "addCursorsWithOffset(offset: minecraftserver.Vector3, charge: number): void",
        "kind": "public",
        "param": "offset: minecraftserver.Vector3, charge: number",
        "return": "void"
      },
      "getCursorPosition": {
        "comment": {
          "params": {},
          "remarks": "Retrieves the current position of the specified cursor. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "getCursorPosition(index: number): minecraftserver.Vector3",
        "kind": "public",
        "param": "index: number",
        "return": "minecraftserver.Vector3"
      },
      "getNumberOfCursors": {
        "comment": {
          "params": {},
          "remarks": "Returns a number of overall cursors for this sculk spreader. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "getNumberOfCursors(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "getTotalCharge": {
        "comment": {
          "params": {},
          "remarks": "Gets the total current charge of the sculk spreader. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "getTotalCharge(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      }
    },
    "SimulatedPlayer": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "SimulatedPlayer"
      },
      "headRotation": {
        "comment": {
          "params": {},
          "remarks": "Rotation of the head across pitch and yaw angles.",
          "throws": "property can throw when used."
        },
        "match": "readonly headRotation: minecraftserver.Vector2",
        "kind": "readonly",
        "param": "",
        "return": "minecraftserver.Vector2"
      },
      "isSprinting": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is sprinting. For example, a player using the sprint action, an ocelot running away or a pig boosting with Carrot on a Stick.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSprinting: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "attack": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to make an attack 'swipe'. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. Target selection is performed by raycasting from the player's head. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "attack(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "attackEntity": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to attack the provided target. Returns true if the attack was performed - for example, the player was not on cooldown and had a valid target. The attack can be performed at any distance and does not require line of sight to the target entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "attackEntity(entity: minecraftserver.Entity): boolean",
        "kind": "public",
        "param": "entity: minecraftserver.Entity",
        "return": "boolean"
      },
      "breakBlock": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block to interact with.",
            "direction": "Direction to place the specified item within."
          },
          "remarks": "Destroys the block at blockLocation, respecting the rules of the server player's game mode. The block will be hit until broken, an item is used or stopBreakingBlock is called. Returns true if the block at blockLocation is solid. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction",
        "return": "boolean"
      },
      "chat": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "chat(message: string): void",
        "kind": "public",
        "param": "message: string",
        "return": "void"
      },
      "disconnect": {
        "comment": {
          "params": {},
          "remarks": "Simulates and performs a disconnection of the simulated player from the world. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "disconnect(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "dropSelectedItem": {
        "comment": {
          "params": {},
          "remarks": "Drops the simulated player's selected item This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "dropSelectedItem(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "fly": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to start flying as though they were flying in creative mode. For flying with Elytra, see function glide. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "fly(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "giveItem": {
        "comment": {
          "params": {
            "itemStack": "Item to give.",
            "selectSlot": "Whether to set the selected slot once given."
          },
          "remarks": "Gives the simulated player a particular item stack. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean",
        "kind": "public",
        "param": "itemStack: minecraftserver.ItemStack, selectSlot?: boolean",
        "return": "boolean"
      },
      "glide": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to start gliding. Elytra must be equipped and the player must be in the air. This function can't be called in read-only mode.",
          "returns": "Returns true if the simulated player begins to glide. Returns false if the player is already gliding, or the player does not have Elytra equipped, is in water or is on the ground.",
          "throws": "function can throw errors."
        },
        "match": "glide(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "interact": {
        "comment": {
          "params": {},
          "remarks": "Performs a raycast from the player’s head and interacts with the first intersected block or entity. Returns true if the interaction was successful. Maximum range is 6 blocks. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "interact(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "interactWithBlock": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block to interact with.",
            "direction": "Direction to place the specified item within."
          },
          "remarks": "Causes the simulated player to interact with a block. The block at the specified block location must be solid. Returns true if the interaction was performed. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction",
        "return": "boolean"
      },
      "interactWithEntity": {
        "comment": {
          "params": {
            "entity": "Entity to interact with."
          },
          "remarks": "Causes the simulated player to interact with a mob. Returns true if the interaction was performed. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "interactWithEntity(entity: minecraftserver.Entity): boolean",
        "kind": "public",
        "param": "entity: minecraftserver.Entity",
        "return": "boolean"
      },
      "jump": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to jump. This function can't be called in read-only mode.",
          "returns": "True if a jump was performed.",
          "throws": "function can throw errors."
        },
        "match": "jump(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "lookAtBlock": {
        "comment": {
          "params": {},
          "remarks": "Rotates the simulated player's head/body to look at the given block location. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "lookAtBlock(blockLocation: minecraftserver.Vector3): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3",
        "return": "void"
      },
      "lookAtEntity": {
        "comment": {
          "params": {},
          "remarks": "Rotates the simulated player's head/body to look at the given entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "lookAtEntity(entity: minecraftserver.Entity): void",
        "kind": "public",
        "param": "entity: minecraftserver.Entity",
        "return": "void"
      },
      "lookAtLocation": {
        "comment": {
          "params": {},
          "remarks": "Rotates the simulated player's head/body to look at the given location. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "lookAtLocation(location: minecraftserver.Vector3): void",
        "kind": "public",
        "param": "location: minecraftserver.Vector3",
        "return": "void"
      },
      "move": {
        "comment": {
          "params": {},
          "remarks": "Orders the simulated player to walk in the given direction relative to the GameTest. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "move(westEast: number, northSouth: number, speed?: number): void",
        "kind": "public",
        "param": "westEast: number, northSouth: number, speed?: number",
        "return": "void"
      },
      "moveRelative": {
        "comment": {
          "params": {},
          "remarks": "Orders the simulated player to walk in the given direction relative to the player's current rotation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "moveRelative(leftRight: number, backwardForward: number, speed?: number): void",
        "kind": "public",
        "param": "leftRight: number, backwardForward: number, speed?: number",
        "return": "void"
      },
      "moveToBlock": {
        "comment": {
          "params": {},
          "remarks": "Orders the simulated player to move to the given block location in a straight line. If a move or navigation is already playing, this will override the last move/navigation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "moveToBlock(blockLocation: minecraftserver.Vector3, speed?: number): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, speed?: number",
        "return": "void"
      },
      "moveToLocation": {
        "comment": {
          "params": {},
          "remarks": "Orders the simulated player to move to the given location in a straight line. If a move or navigation is already playing, this will override the last move/navigation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "moveToLocation(location: minecraftserver.Vector3, speed?: number): void",
        "kind": "public",
        "param": "location: minecraftserver.Vector3, speed?: number",
        "return": "void"
      },
      "navigateToBlock": {
        "comment": {
          "params": {},
          "remarks": "Orders the simulated player to move to a specific block location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): minecraftserver.NavigationResult",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, speed?: number",
        "return": "minecraftserver.NavigationResult"
      },
      "navigateToEntity": {
        "comment": {
          "params": {},
          "remarks": "Will use navigation to follow the selected entity to within a one block radius. If a move or navigation is already playing, this will override the last move/navigation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "navigateToEntity(entity: minecraftserver.Entity, speed?: number): minecraftserver.NavigationResult",
        "kind": "public",
        "param": "entity: minecraftserver.Entity, speed?: number",
        "return": "minecraftserver.NavigationResult"
      },
      "navigateToLocation": {
        "comment": {
          "params": {},
          "remarks": "Orders the simulated player to move to a specific location using navigation. If a move or navigation is already playing, this will override the last move/walk. Note that if the simulated player gets stuck, that simulated player will stop. The player must be touching the ground in order to start navigation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "navigateToLocation(location: minecraftserver.Vector3, speed?: number): minecraftserver.NavigationResult",
        "kind": "public",
        "param": "location: minecraftserver.Vector3, speed?: number",
        "return": "minecraftserver.NavigationResult"
      },
      "navigateToLocations": {
        "comment": {
          "params": {
            "locations": "A list of locations to use for routing.",
            "speed": "Net speed to use for doing the navigation."
          },
          "remarks": "Use navigation to follow the route provided via the locations parameter. If a move or navigation is already playing, this will override the last move/navigation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void",
        "kind": "public",
        "param": "locations: minecraftserver.Vector3[], speed?: number",
        "return": "void"
      },
      "respawn": {
        "comment": {
          "params": {},
          "remarks": "Respawns the particular simulated player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "respawn(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "rotateBody": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to turn by the provided angle, relative to the player's current rotation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "rotateBody(angleInDegrees: number): void",
        "kind": "public",
        "param": "angleInDegrees: number",
        "return": "void"
      },
      "setBodyRotation": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to turn to face the provided angle, relative to the GameTest. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setBodyRotation(angleInDegrees: number): void",
        "kind": "public",
        "param": "angleInDegrees: number",
        "return": "void"
      },
      "setGameMode": {
        "comment": {
          "params": {
            "gameMode": "Game mode to set."
          },
          "remarks": "Sets the game mode that the simulated player is operating under. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setGameMode(gameMode: minecraftserver.GameMode): void",
        "kind": "public",
        "param": "gameMode: minecraftserver.GameMode",
        "return": "void"
      },
      "setItem": {
        "comment": {
          "params": {
            "itemStack": "Item to set.",
            "slot": "Slot to place the given item in.",
            "selectSlot": "Whether to set the selected slot once set."
          },
          "remarks": "Sets a particular item for the simulated player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean",
        "kind": "public",
        "param": "itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean",
        "return": "boolean"
      },
      "stopBreakingBlock": {
        "comment": {
          "params": {},
          "remarks": "Stops destroying the block that is currently being hit. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "stopBreakingBlock(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "stopFlying": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to stop flying. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "stopFlying(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "stopGliding": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to stop gliding. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "stopGliding(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "stopInteracting": {
        "comment": {
          "params": {},
          "remarks": "Stops interacting with entities or blocks. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "stopInteracting(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "stopMoving": {
        "comment": {
          "params": {},
          "remarks": "Stops moving/walking/following if the simulated player is moving. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "stopMoving(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "stopSwimming": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to stop swimming. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "stopSwimming(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "stopUsingItem": {
        "comment": {
          "params": {},
          "remarks": "Stops using the currently active item. This function can't be called in read-only mode.",
          "returns": "Returns the item that was in use. Undefined if no item was in use.",
          "throws": "function can throw errors."
        },
        "match": "stopUsingItem(): minecraftserver.ItemStack | undefined",
        "kind": "public",
        "param": "",
        "return": "minecraftserver.ItemStack | undefined"
      },
      "swim": {
        "comment": {
          "params": {},
          "remarks": "Causes the simulated player to start swimming. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "swim(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "useItem": {
        "comment": {
          "params": {
            "itemStack": "Item to use."
          },
          "remarks": "Causes the simulated player to use an item. Does not consume the item. Returns false if the item is on cooldown. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "useItem(itemStack: minecraftserver.ItemStack): boolean",
        "kind": "public",
        "param": "itemStack: minecraftserver.ItemStack",
        "return": "boolean"
      },
      "useItemInSlot": {
        "comment": {
          "params": {
            "slot": "Index of the inventory slot."
          },
          "remarks": "Causes the simulated player to hold and use an item in their inventory. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "useItemInSlot(slot: number): boolean",
        "kind": "public",
        "param": "slot: number",
        "return": "boolean"
      },
      "useItemInSlotOnBlock": {
        "comment": {
          "params": {
            "slot": "Index of the slot to use.",
            "blockLocation": "Location to use the item upon.",
            "direction": "Direction to place the specified item within.",
            "faceLocation": "Location relative to the bottom north-west corner of the block where the item is placed."
          },
          "remarks": "Causes the simulated player to use an item in their inventory on a block. The block at the specified block location must be solid. Returns true if the item was used. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "useItemInSlotOnBlock(slot: number,blockLocation: minecraftserver.Vector3,direction?: minecraftserver.Direction,faceLocation?: minecraftserver.Vector3,): boolean",
        "kind": "public",
        "param": "slot: number,blockLocation: minecraftserver.Vector3,direction?: minecraftserver.Direction,faceLocation?: minecraftserver.Vector3,",
        "return": "boolean"
      },
      "useItemOnBlock": {
        "comment": {
          "params": {
            "itemStack": "Item to use.",
            "blockLocation": "Location to use the item upon.",
            "direction": "Direction to place the specified item within.",
            "faceLocation": "Location relative to the bottom north-west corner of the block where the item is placed."
          },
          "remarks": "Causes the simulated player to use an item on a block. The block at the specified block location must be solid. Returns true if the item was used. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "useItemOnBlock(itemStack: minecraftserver.ItemStack,blockLocation: minecraftserver.Vector3,direction?: minecraftserver.Direction,faceLocation?: minecraftserver.Vector3,): boolean",
        "kind": "public",
        "param": "itemStack: minecraftserver.ItemStack,blockLocation: minecraftserver.Vector3,direction?: minecraftserver.Direction,faceLocation?: minecraftserver.Vector3,",
        "return": "boolean"
      },
      "camera": {
        "comment": {
          "params": {},
          "remarks": "The player's Camera.",
          "throws": "property can throw when used."
        },
        "match": "readonly camera: Camera",
        "kind": "readonly",
        "param": "",
        "return": "Camera"
      },
      "isEmoting": {
        "comment": {
          "params": {},
          "remarks": "If true, the player is currently emoting.",
          "throws": "property can throw when used."
        },
        "match": "readonly isEmoting: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isFlying": {
        "comment": {
          "params": {},
          "remarks": "Whether the player is flying. For example, in Creative or Spectator mode.",
          "throws": "property can throw when used."
        },
        "match": "readonly isFlying: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isGliding": {
        "comment": {
          "params": {},
          "remarks": "Whether the player is gliding with Elytra.",
          "throws": "property can throw when used."
        },
        "match": "readonly isGliding: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isJumping": {
        "comment": {
          "params": {},
          "remarks": "Whether the player is jumping. This will remain true while the player is holding the jump action.",
          "throws": "property can throw when used."
        },
        "match": "readonly isJumping: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "level": {
        "comment": {
          "params": {},
          "remarks": "The current overall level for the player, based on their experience.",
          "throws": "property can throw when used."
        },
        "match": "readonly level: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "name": {
        "comment": {
          "params": {},
          "remarks": "Name of the player.",
          "throws": "property can throw when used."
        },
        "match": "readonly name: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "onScreenDisplay": {
        "comment": {
          "params": {},
          "remarks": "Contains methods for manipulating the on-screen display of a Player.",
          "throws": "property can throw when used."
        },
        "match": "readonly onScreenDisplay: ScreenDisplay",
        "kind": "readonly",
        "param": "",
        "return": "ScreenDisplay"
      },
      "selectedSlot": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Manages the selected slot in the player's hotbar. This property can't be edited in read-only mode."
        },
        "match": "selectedSlot: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "totalXpNeededForNextLevel": {
        "comment": {
          "params": {},
          "remarks": "The overall total set of experience needed to achieve the next level for a player.",
          "throws": "property can throw when used."
        },
        "match": "readonly totalXpNeededForNextLevel: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "xpEarnedAtCurrentLevel": {
        "comment": {
          "params": {},
          "remarks": "The current set of experience achieved for the player.",
          "throws": "property can throw when used."
        },
        "match": "readonly xpEarnedAtCurrentLevel: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "addExperience": {
        "comment": {
          "params": {
            "amount": "Amount of experience to add. Note that this can be negative. Min/max bounds at -2^24 ~ 2^24"
          },
          "remarks": "Adds/removes experience to/from the Player and returns the current experience of the Player. This function can't be called in read-only mode.",
          "returns": "Returns the current experience of the Player.",
          "throws": "function can throw errors."
        },
        "match": "addExperience(amount: number): number",
        "kind": "public",
        "param": "amount: number",
        "return": "number"
      },
      "addLevels": {
        "comment": {
          "params": {
            "amount": "Amount to add to the player. Min/max bounds at -2^24 ~ 2^24"
          },
          "remarks": "Adds/removes level to/from the Player and returns the current level of the Player. This function can't be called in read-only mode.",
          "returns": "Returns the current level of the Player.",
          "throws": "function can throw errors."
        },
        "match": "addLevels(amount: number): number",
        "kind": "public",
        "param": "amount: number",
        "return": "number"
      },
      "getItemCooldown": {
        "comment": {
          "params": {
            "itemCategory": "Specifies the cooldown category to retrieve the current cooldown for."
          },
          "beta": "",
          "remarks": "Gets the current item cooldown time for a particular cooldown category.",
          "throws": "function can throw errors."
        },
        "match": "getItemCooldown(itemCategory: string): number",
        "kind": "public",
        "param": "itemCategory: string",
        "return": "number"
      },
      "getSpawnPoint": {
        "comment": {
          "params": {},
          "remarks": "Gets the current spawn point of the player.",
          "throws": "function can throw errors."
        },
        "match": "getSpawnPoint(): DimensionLocation | undefined",
        "kind": "public",
        "param": "",
        "return": "DimensionLocation | undefined"
      },
      "getTotalXp": {
        "comment": {
          "params": {},
          "remarks": "Gets the total experience of the Player.",
          "throws": "function can throw errors."
        },
        "match": "getTotalXp(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "isOp": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Returns true if this player has operator-level permissions.",
          "throws": "function can throw errors."
        },
        "match": "isOp(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "playMusic": {
        "comment": {
          "params": {
            "trackId": "Identifier of the music track to play.",
            "musicOptions": "Additional options for the music track."
          },
          "beta": "",
          "remarks": "Plays a music track that only this particular player can hear. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "playMusic(trackId: string, musicOptions?: MusicOptions): void",
        "kind": "public",
        "param": "trackId: string, musicOptions?: MusicOptions",
        "return": "void"
      },
      "playSound": {
        "comment": {
          "params": {
            "soundOptions": "Additional optional options for the sound."
          },
          "remarks": "Plays a sound that only this particular player can hear. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript let players = mc.world.getPlayers(); const musicOptions: mc.MusicOptions = { fade: 0.5, loop: true, volume: 1.0, }; mc.world.playMusic(\"music.menu\", musicOptions); const worldSoundOptions: mc.WorldSoundOptions = { pitch: 0.5, volume: 4.0, }; mc.world.playSound(\"ambient.weather.thunder\", targetLocation, worldSoundOptions); const playerSoundOptions: mc.PlayerSoundOptions = { pitch: 1.0, volume: 1.0, }; players[0].playSound(\"bucket.fill_water\", playerSoundOptions); ```"
        },
        "match": "playSound(soundId: string, soundOptions?: PlayerSoundOptions): void",
        "kind": "public",
        "param": "soundId: string, soundOptions?: PlayerSoundOptions",
        "return": "void"
      },
      "postClientMessage": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "This is an internal-facing method for posting a system message to downstream clients. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "postClientMessage(id: string, value: string): void",
        "kind": "public",
        "param": "id: string, value: string",
        "return": "void"
      },
      "queueMusic": {
        "comment": {
          "params": {
            "trackId": "Identifier of the music track to play.",
            "musicOptions": "Additional options for the music track."
          },
          "beta": "",
          "remarks": "Queues an additional music track that only this particular player can hear. If a track is not playing, a music track will play. This function can't be called in read-only mode.",
          "throws": "An error will be thrown if volume is less than 0.0. An error will be thrown if fade is less than 0.0."
        },
        "match": "queueMusic(trackId: string, musicOptions?: MusicOptions): void",
        "kind": "public",
        "param": "trackId: string, musicOptions?: MusicOptions",
        "return": "void"
      },
      "resetLevel": {
        "comment": {
          "params": {},
          "remarks": "Resets the level of the player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "resetLevel(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "sendMessage": {
        "comment": {
          "params": {
            "message": "The message to be displayed."
          },
          "remarks": "Sends a message to the player.",
          "throws": "This method can throw if the provided {@link RawMessage} is in an invalid format. For example, if an empty `name` string is provided to `score`.",
          "example": "```typescript // Displays \"First or Second\" const rawMessage = { translate: \"accessibility.list.or.two\", with: [\"First\", \"Second\"] }; player.sendMessage(rawMessage); ```"
        },
        "match": "sendMessage(message: (RawMessage | string)[] | RawMessage | string): void",
        "kind": "public",
        "param": "message: (RawMessage | string)[] | RawMessage | string",
        "return": "void"
      },
      "setOp": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Will change the specified players permissions, and whether they are operator or not. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setOp(isOp: boolean): void",
        "kind": "public",
        "param": "isOp: boolean",
        "return": "void"
      },
      "setSpawnPoint": {
        "comment": {
          "params": {},
          "remarks": "Sets the current starting spawn point for this particular player. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link Error} {@link LocationOutOfWorldBoundariesError}"
        },
        "match": "setSpawnPoint(spawnPoint?: DimensionLocation): void",
        "kind": "public",
        "param": "spawnPoint?: DimensionLocation",
        "return": "void"
      },
      "startItemCooldown": {
        "comment": {
          "params": {
            "itemCategory": "Specifies the cooldown category to retrieve the current cooldown for.",
            "tickDuration": "Duration in ticks of the item cooldown."
          },
          "beta": "",
          "remarks": "Sets the item cooldown time for a particular cooldown category. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "startItemCooldown(itemCategory: string, tickDuration: number): void",
        "kind": "public",
        "param": "itemCategory: string, tickDuration: number",
        "return": "void"
      },
      "stopMusic": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Stops any music tracks from playing for this particular player. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "stopMusic(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "dimension": {
        "comment": {
          "params": {},
          "remarks": "Dimension that the entity is currently within.",
          "throws": "property can throw when used."
        },
        "match": "readonly dimension: Dimension",
        "kind": "readonly",
        "param": "",
        "return": "Dimension"
      },
      "fallDistance": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "The distance an entity has fallen. The value is reset when the entity is teleported. The value is always 1 when gliding with Elytra.",
          "throws": "property can throw when used."
        },
        "match": "readonly fallDistance: number",
        "kind": "readonly",
        "param": "",
        "return": "number"
      },
      "id": {
        "comment": {
          "params": {},
          "remarks": "Unique identifier of the entity. This identifier is intended to be consistent across loads of a world instance. No meaning should be inferred from the value and structure of this unique identifier - do not parse or interpret it. This property is accessible even if {@link Entity.isValid} is false."
        },
        "match": "readonly id: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "isClimbing": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is touching a climbable block. For example, a player next to a ladder or a spider next to a stone wall.",
          "throws": "property can throw when used."
        },
        "match": "readonly isClimbing: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isFalling": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity has a fall distance greater than 0, or greater than 1 while gliding.",
          "throws": "property can throw when used."
        },
        "match": "readonly isFalling: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isInWater": {
        "comment": {
          "params": {},
          "remarks": "Whether any part of the entity is inside a water block.",
          "throws": "property can throw when used."
        },
        "match": "readonly isInWater: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isOnGround": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is on top of a solid block.",
          "throws": "property can throw when used."
        },
        "match": "readonly isOnGround: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSleeping": {
        "comment": {
          "params": {},
          "remarks": "If true, the entity is currently sleeping.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSleeping: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "isSneaking": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is sneaking - that is, moving more slowly and more quietly. This property can't be edited in read-only mode."
        },
        "match": "isSneaking: boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "isSwimming": {
        "comment": {
          "params": {},
          "remarks": "Whether the entity is in the swimming state. For example, a player using the swim action or a fish in water.",
          "throws": "property can throw when used."
        },
        "match": "readonly isSwimming: boolean",
        "kind": "readonly",
        "param": "",
        "return": "boolean"
      },
      "lifetimeState": {
        "comment": {
          "params": {},
          "beta": "",
          "remarks": "Whether the entity reference that you have is valid or not. For example, an entity may be unloaded if it moves into a chunk that is unloaded, but may be reactivated if the chunk it is within gets reloaded."
        },
        "match": "readonly lifetimeState: EntityLifetimeState",
        "kind": "readonly",
        "param": "",
        "return": "EntityLifetimeState"
      },
      "location": {
        "comment": {
          "params": {},
          "remarks": "Current location of the entity.",
          "throws": "property can throw when used."
        },
        "match": "readonly location: Vector3",
        "kind": "readonly",
        "param": "",
        "return": "Vector3"
      },
      "nameTag": {
        "comment": {
          "params": {},
          "remarks": "Given name of the entity. This property can't be edited in read-only mode."
        },
        "match": "nameTag: string",
        "kind": "public",
        "param": "",
        "return": "string"
      },
      "typeId": {
        "comment": {
          "params": {},
          "remarks": "Returns a scoreboard identity that represents this entity. Will remain valid when the entity is killed."
        },
        "match": "readonly typeId: string",
        "kind": "readonly",
        "param": "",
        "return": "string"
      },
      "addEffect": {
        "comment": {
          "params": {
            "effectType": "Type of effect to add to the entity.",
            "duration": "Amount of time, in ticks, for the effect to apply. There are 20 ticks per second. Use {@link TicksPerSecond} constant to convert between ticks and seconds. The value must be within the range [0, 20000000].",
            "options": "Additional options for the effect."
          },
          "remarks": "Adds or updates an effect, like poison, to the entity. This function can't be called in read-only mode.",
          "returns": "Returns nothing if the effect was added or updated successfully. This can throw an error if the duration or amplifier are outside of the valid ranges, or if the effect does not exist.",
          "throws": "function can throw errors.",
          "example": "```typescript const overworld = mc.world.getDimension(\"overworld\"); const fox = overworld.spawnEntity(\"minecraft:fox\", { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 3, }); fox.addEffect(\"speed\", 10, { amplifier: 2, }); log(\"Created a fox.\"); const wolf = overworld.spawnEntity(\"minecraft:wolf\", { x: targetLocation.x + 4, y: targetLocation.y + 2, z: targetLocation.z + 3, }); wolf.addEffect(\"slowness\", 10, { amplifier: 2, }); wolf.isSneaking = true; log(\"Created a sneaking wolf.\", 1); ```"
        },
        "match": "addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): void",
        "kind": "public",
        "param": "effectType: EffectType | string, duration: number, options?: EntityEffectOptions",
        "return": "void"
      },
      "addTag": {
        "comment": {
          "params": {
            "tag": "Content of the tag to add. The tag must be less than 256 characters."
          },
          "remarks": "Adds a specified tag to an entity. This function can't be called in read-only mode.",
          "returns": "Returns true if the tag was added successfully. This can fail if the tag already exists on the entity.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { let mobTypeId = mobs[i % mobs.length]; let entity = overworld.spawnEntity(mobTypeId, targetLocation); entity.addTag(\"mobparty.\" + mobTypeId); } let eqo: mc.EntityQueryOptions = { tags: [\"mobparty.skeleton\"], }; for (let entity of overworld.getEntities(eqo)) { entity.kill(); } ```"
        },
        "match": "addTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "applyDamage": {
        "comment": {
          "params": {
            "amount": "Amount of damage to apply.",
            "options": "Additional options about the source of damage, which may add additional effects or spur additional behaviors on this entity."
          },
          "remarks": "Applies a set of damage to an entity. This function can't be called in read-only mode.",
          "returns": "Whether the entity takes any damage. This can return false if the entity is invulnerable or if the damage applied is less than or equal to 0.",
          "throws": "function can throw errors.",
          "example": "```typescript const skelly = overworld.spawnEntity(\"minecraft:skeleton\", targetLocation); skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton mc.system.runTimeout(() => { let health = skelly.getComponent(\"health\") as mc.EntityHealthComponent; log(\"Skeleton health before heal: \" + health.currentValue); health.resetToMaxValue(); log(\"Skeleton health after heal: \" + health.currentValue); }, 20); ```"
        },
        "match": "applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean",
        "kind": "public",
        "param": "amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions",
        "return": "boolean"
      },
      "applyImpulse": {
        "comment": {
          "params": {
            "vector": "Impulse vector."
          },
          "remarks": "Applies impulse vector to the current velocity of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const zombie = overworld.spawnEntity(\"minecraft:zombie\", targetLocation); zombie.clearVelocity(); // throw the zombie up in the air zombie.applyImpulse({ x: 0, y: 0.5, z: 0 }); ```"
        },
        "match": "applyImpulse(vector: Vector3): void",
        "kind": "public",
        "param": "vector: Vector3",
        "return": "void"
      },
      "applyKnockback": {
        "comment": {
          "params": {
            "directionX": "X direction in horizontal plane.",
            "directionZ": "Z direction in horizontal plane.",
            "horizontalStrength": "Knockback strength for the horizontal vector.",
            "verticalStrength": "Knockback strength for the vertical vector."
          },
          "remarks": "Applies impulse vector to the current velocity of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { overworld.spawnEntity(mobs[i % mobs.length], targetLocation); } let eqo: mc.EntityQueryOptions = { type: \"skeleton\", }; for (let entity of overworld.getEntities(eqo)) { entity.applyKnockback(0, 0, 0, 1); } ```"
        },
        "match": "applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void",
        "kind": "public",
        "param": "directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number",
        "return": "void"
      },
      "clearDynamicProperties": {
        "comment": {
          "params": {},
          "remarks": "Clears all dynamic properties that have been set on this entity.",
          "throws": "function can throw errors."
        },
        "match": "clearDynamicProperties(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "clearVelocity": {
        "comment": {
          "params": {},
          "remarks": "Sets the current velocity of the Entity to zero. Note that this method may not have an impact on Players. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const zombie = overworld.spawnEntity(\"minecraft:zombie\", targetLocation); zombie.clearVelocity(); // throw the zombie up in the air zombie.applyImpulse({ x: 0, y: 0.5, z: 0 }); ```"
        },
        "match": "clearVelocity(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "extinguishFire": {
        "comment": {
          "params": {
            "useEffects": "Whether to show any visual effects connected to the extinguishing."
          },
          "beta": "",
          "remarks": "Extinguishes the fire if the entity is on fire. Note that you can call getComponent('minecraft:onfire') and, if present, the entity is on fire. This function can't be called in read-only mode.",
          "returns": "Returns whether the entity was on fire.",
          "throws": "function can throw errors.",
          "example": "```typescript const cow = overworld.spawnEntity(\"minecraft:cow\", targetLocation); mc.system.runTimeout(() => { cow.teleport( { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 }, { facingLocation: targetLocation, } ); }, 20); ```"
        },
        "match": "extinguishFire(useEffects?: boolean): boolean",
        "kind": "public",
        "param": "useEffects?: boolean",
        "return": "boolean"
      },
      "getBlockFromViewDirection": {
        "comment": {
          "params": {
            "options": "Additional configuration options for the ray cast."
          },
          "remarks": "Returns the first intersecting block from the direction that this entity is looking at.",
          "returns": "Returns the first intersecting block from the direction that this entity is looking at.",
          "throws": "function can throw errors."
        },
        "match": "getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined",
        "kind": "public",
        "param": "options?: BlockRaycastOptions",
        "return": "BlockRaycastHit | undefined"
      },
      "getComponents": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:health'). If no namespace prefix is specified, 'minecraft:' is assumed. Available component IDs can be found as part of the {@link EntityComponentTypes} enum."
          },
          "remarks": "Gets a component (that represents additional capabilities) for an entity.",
          "returns": "Returns the component if it exists on the entity, otherwise undefined."
        },
        "match": "getComponents(): EntityComponent[]",
        "kind": "public",
        "param": "",
        "return": "EntityComponent[]"
      },
      "getDynamicProperty": {
        "comment": {
          "params": {
            "identifier": "The property identifier."
          },
          "remarks": "Returns a property value.",
          "returns": "Returns the value for the property, or undefined if the property has not been set.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string | Vector3 | undefined"
      },
      "getDynamicPropertyIds": {
        "comment": {
          "params": {},
          "remarks": "Returns the available set of dynamic property identifiers that have been used on this entity.",
          "returns": "A string array of the dynamic properties set on this entity.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicPropertyIds(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getDynamicPropertyTotalByteCount": {
        "comment": {
          "params": {},
          "remarks": "Returns the total size, in bytes, of all the dynamic properties that are currently stored for this entity.  This can be useful for diagnosing performance warning signs - if, for example, an entity has many megabytes of associated dynamic properties, it may be slow to load on various devices.",
          "throws": "function can throw errors."
        },
        "match": "getDynamicPropertyTotalByteCount(): number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "getEffect": {
        "comment": {
          "params": {
            "effectType": "The effect identifier."
          },
          "remarks": "Returns the effect for the specified EffectType on the entity, undefined if the effect is not present, or throws an error if the effect does not exist.",
          "returns": "Effect object for the specified effect, undefined if the effect is not present, or throws an error if the effect does not exist.",
          "throws": "function can throw errors."
        },
        "match": "getEffect(effectType: EffectType | string): Effect | undefined",
        "kind": "public",
        "param": "effectType: EffectType | string",
        "return": "Effect | undefined"
      },
      "getEffects": {
        "comment": {
          "params": {},
          "remarks": "Returns a set of effects applied to this entity.",
          "returns": "List of effects.",
          "throws": "function can throw errors."
        },
        "match": "getEffects(): Effect[]",
        "kind": "public",
        "param": "",
        "return": "Effect[]"
      },
      "getEntitiesFromViewDirection": {
        "comment": {
          "params": {
            "options": "Additional configuration options for the ray cast."
          },
          "remarks": "Gets the entities that this entity is looking at by performing a ray cast from the view of this entity.",
          "returns": "Returns a set of entities from the direction that this entity is looking at.",
          "throws": "function can throw errors."
        },
        "match": "getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[]",
        "kind": "public",
        "param": "options?: EntityRaycastOptions",
        "return": "EntityRaycastHit[]"
      },
      "getHeadLocation": {
        "comment": {
          "params": {},
          "remarks": "Returns the current location of the head component of this entity.",
          "returns": "Returns the current location of the head component of this entity.",
          "throws": "function can throw errors."
        },
        "match": "getHeadLocation(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getProperty": {
        "comment": {
          "params": {
            "identifier": "The entity Property identifier."
          },
          "remarks": "Gets an entity Property value. If the property was set using the setProperty function within the same tick, the updated value will not be reflected until the subsequent tick.",
          "returns": "Returns the current property value. For enum properties, a string is returned. For float and int properties, a number is returned. For undefined properties, undefined is returned.",
          "throws": "Throws if the entity is invalid."
        },
        "match": "getProperty(identifier: string): boolean | number | string | undefined",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string | undefined"
      },
      "getRotation": {
        "comment": {
          "params": {},
          "remarks": "Returns the current rotation component of this entity.",
          "returns": "Returns a Vec2 containing the rotation of this entity (in degrees).",
          "throws": "function can throw errors."
        },
        "match": "getRotation(): Vector2",
        "kind": "public",
        "param": "",
        "return": "Vector2"
      },
      "getTags": {
        "comment": {
          "params": {},
          "remarks": "",
          "returns": "Returns all tags associated with an entity.",
          "throws": "function can throw errors."
        },
        "match": "getTags(): string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "getVelocity": {
        "comment": {
          "params": {},
          "remarks": "Returns the current velocity vector of the entity.",
          "returns": "Returns the current velocity vector of the entity.",
          "throws": "function can throw errors.",
          "example": "```typescript const fireworkRocket = overworld.spawnEntity(\"minecraft:fireworks_rocket\", targetLocation); mc.system.runTimeout(() => { let velocity = fireworkRocket.getVelocity(); log(\"Velocity of firework is: (x: \" + velocity.x + \", y:\" + velocity.y + \", z:\" + velocity.z + \")\"); }, 5); ```"
        },
        "match": "getVelocity(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "getViewDirection": {
        "comment": {
          "params": {},
          "remarks": "Returns the current view direction of the entity.",
          "returns": "Returns the current view direction of the entity.",
          "throws": "function can throw errors."
        },
        "match": "getViewDirection(): Vector3",
        "kind": "public",
        "param": "",
        "return": "Vector3"
      },
      "hasComponent": {
        "comment": {
          "params": {
            "componentId": "The identifier of the component (e.g., 'minecraft:rideable') to retrieve. If no namespace prefix is specified, 'minecraft:' is assumed."
          },
          "remarks": "Returns true if the specified component is present on this entity.",
          "returns": "Returns true if the specified component is present on this entity."
        },
        "match": "hasComponent(componentId: string): boolean",
        "kind": "public",
        "param": "componentId: string",
        "return": "boolean"
      },
      "hasTag": {
        "comment": {
          "params": {
            "tag": "Identifier of the tag to test for."
          },
          "remarks": "Returns whether an entity has a particular tag.",
          "returns": "Returns whether an entity has a particular tag.",
          "throws": "function can throw errors."
        },
        "match": "hasTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "isValid": {
        "comment": {
          "params": {},
          "remarks": "Returns whether the entity can be manipulated by script. A Player is considered valid when it's EntityLifetimeState is set to Loaded.",
          "returns": "Whether the entity is valid."
        },
        "match": "isValid(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "kill": {
        "comment": {
          "params": {},
          "remarks": "Kills this entity. The entity will drop loot as normal. This function can't be called in read-only mode.",
          "returns": "Returns true if entity can be killed (even if it is already dead), otherwise it returns false.",
          "throws": "function can throw errors.",
          "example": "```typescript let mobs = [\"creeper\", \"skeleton\", \"sheep\"]; // create some sample mob data for (let i = 0; i < 10; i++) { let mobTypeId = mobs[i % mobs.length]; let entity = overworld.spawnEntity(mobTypeId, targetLocation); entity.addTag(\"mobparty.\" + mobTypeId); } let eqo: mc.EntityQueryOptions = { tags: [\"mobparty.skeleton\"], }; for (let entity of overworld.getEntities(eqo)) { entity.kill(); } ```"
        },
        "match": "kill(): boolean",
        "kind": "public",
        "param": "",
        "return": "boolean"
      },
      "matches": {
        "comment": {
          "params": {},
          "remarks": "Matches the entity against the passed in options. Uses the location of the entity for matching if the location is not specified in the passed in EntityQueryOptions.",
          "returns": "Returns true if the entity matches the criteria in the passed in EntityQueryOptions, otherwise it returns false.",
          "throws": "function can throw errors."
        },
        "match": "matches(options: EntityQueryOptions): boolean",
        "kind": "public",
        "param": "options: EntityQueryOptions",
        "return": "boolean"
      },
      "playAnimation": {
        "comment": {
          "params": {
            "animationName": "The animation identifier. e.g. animation.creeper.swelling",
            "options": "Additional options to control the playback and transitions of the animation."
          },
          "beta": "",
          "remarks": "Cause the entity to play the given animation. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "playAnimation(animationName: string, options?: PlayAnimationOptions): void",
        "kind": "public",
        "param": "animationName: string, options?: PlayAnimationOptions",
        "return": "void"
      },
      "remove": {
        "comment": {
          "params": {},
          "remarks": "Immediately removes the entity from the world. The removed entity will not perform a death animation or drop loot upon removal. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "remove(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "removeEffect": {
        "comment": {
          "params": {
            "effectType": "The effect identifier."
          },
          "remarks": "Removes the specified EffectType on the entity, or returns false if the effect is not present. This function can't be called in read-only mode.",
          "returns": "Returns true if the effect has been removed. Returns false if the effect is not found or does not exist.",
          "throws": "function can throw errors."
        },
        "match": "removeEffect(effectType: EffectType | string): boolean",
        "kind": "public",
        "param": "effectType: EffectType | string",
        "return": "boolean"
      },
      "removeTag": {
        "comment": {
          "params": {
            "tag": "Content of the tag to remove."
          },
          "remarks": "Removes a specified tag from an entity. This function can't be called in read-only mode.",
          "returns": "Returns whether the tag existed on the entity.",
          "throws": "function can throw errors."
        },
        "match": "removeTag(tag: string): boolean",
        "kind": "public",
        "param": "tag: string",
        "return": "boolean"
      },
      "resetProperty": {
        "comment": {
          "params": {
            "identifier": "The Entity Property identifier."
          },
          "remarks": "Resets an Entity Property back to its default value, as specified in the Entity's definition. This property change is not applied until the next tick. This function can't be called in read-only mode.",
          "returns": "Returns the default property value. For enum properties, a string is returned. For float and int properties, a number is returned. For undefined properties, undefined is returned.",
          "throws": "Throws if the entity is invalid. {@link minecraftcommon.EngineError} {@link Error}"
        },
        "match": "resetProperty(identifier: string): boolean | number | string",
        "kind": "public",
        "param": "identifier: string",
        "return": "boolean | number | string"
      },
      "runCommand": {
        "comment": {
          "params": {
            "commandString": "The command string. Note: This should not include a leading forward slash."
          },
          "remarks": "Runs a synchronous command on the entity. This function can't be called in read-only mode.",
          "returns": "A command result containing whether the command was successful.",
          "throws": "function can throw errors. {@link CommandError} {@link Error}"
        },
        "match": "runCommand(commandString: string): CommandResult",
        "kind": "public",
        "param": "commandString: string",
        "return": "CommandResult"
      },
      "runCommandAsync": {
        "comment": {
          "params": {
            "commandString": "Command to run. Note that command strings should not start with slash."
          },
          "remarks": "Runs a particular command asynchronously from the context of this entity. Note that there is a maximum queue of 128 asynchronous commands that can be run in a given tick.",
          "returns": "For commands that return data, returns a JSON structure with command response values.",
          "throws": "function can throw errors."
        },
        "match": "runCommandAsync(commandString: string): Promise<CommandResult>",
        "kind": "public",
        "param": "commandString: string",
        "return": "Promise<CommandResult>"
      },
      "setDynamicProperty": {
        "comment": {
          "params": {
            "identifier": "The property identifier.",
            "value": "Data value of the property to set."
          },
          "remarks": "Sets a specified property to a value.",
          "throws": "function can throw errors."
        },
        "match": "setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void",
        "kind": "public",
        "param": "identifier: string, value?: boolean | number | string | Vector3",
        "return": "void"
      },
      "setOnFire": {
        "comment": {
          "params": {
            "seconds": "Length of time to set the entity on fire.",
            "useEffects": "Whether side-effects should be applied (e.g. thawing freeze) and other conditions such as rain or fire protection should be taken into consideration."
          },
          "beta": "",
          "remarks": "Sets an entity on fire (if it is not in water or rain). Note that you can call getComponent('minecraft:onfire') and, if present, the entity is on fire. This function can't be called in read-only mode.",
          "returns": "Whether the entity was set on fire. This can fail if seconds is less than or equal to zero, the entity is wet or the entity is immune to fire.",
          "throws": "function can throw errors.",
          "example": "```typescript const cow = overworld.spawnEntity(\"minecraft:cow\", targetLocation); mc.system.runTimeout(() => { cow.teleport( { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 2 }, { facingLocation: targetLocation, } ); }, 20); ```"
        },
        "match": "setOnFire(seconds: number, useEffects?: boolean): boolean",
        "kind": "public",
        "param": "seconds: number, useEffects?: boolean",
        "return": "boolean"
      },
      "setProperty": {
        "comment": {
          "params": {
            "identifier": "The Entity Property identifier.",
            "value": "The property value. The provided type must be compatible with the type specified in the entity's definition."
          },
          "remarks": "Sets an Entity Property to the provided value. This property change is not applied until the next tick. This function can't be called in read-only mode.",
          "throws": "Throws if the entity is invalid. Throws if an invalid identifier is provided. Throws if the provided value type does not match the property type. Throws if the provided value is outside the expected range (int, float properties). Throws if the provided string value does not match the set of accepted enum values (enum properties"
        },
        "match": "setProperty(identifier: string, value: boolean | number | string): void",
        "kind": "public",
        "param": "identifier: string, value: boolean | number | string",
        "return": "void"
      },
      "setRotation": {
        "comment": {
          "params": {
            "rotation": "The x and y rotation of the entity (in degrees). For most mobs, the x rotation controls the head tilt and the y rotation controls the body rotation."
          },
          "remarks": "Sets the main rotation of the entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "setRotation(rotation: Vector2): void",
        "kind": "public",
        "param": "rotation: Vector2",
        "return": "void"
      },
      "teleport": {
        "comment": {
          "params": {
            "location": "New location for the entity.",
            "teleportOptions": "Options regarding the teleport operation."
          },
          "remarks": "Teleports the selected entity to a new location This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript const pig = overworld.spawnEntity(\"minecraft:pig\", targetLocation); let inc = 1; let runId = mc.system.runInterval(() => { pig.teleport( { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 }, { facingLocation: targetLocation, } ); if (inc > 100) { mc.system.clearRun(runId); } inc++; }, 4); ```"
        },
        "match": "teleport(location: Vector3, teleportOptions?: TeleportOptions): void",
        "kind": "public",
        "param": "location: Vector3, teleportOptions?: TeleportOptions",
        "return": "void"
      },
      "triggerEvent": {
        "comment": {
          "params": {
            "eventName": "Name of the entity type event to trigger. If a namespace is not specified, minecraft: is assumed."
          },
          "remarks": "Triggers an entity type event. For every entity, a number of events are defined in an entities' definition for key entity behaviors; for example, creepers have a minecraft:start_exploding type event. This function can't be called in read-only mode.",
          "throws": "If the event is not defined in the definition of the entity, an error will be thrown.",
          "example": "```typescript const creeper = overworld.spawnEntity(\"minecraft:creeper\", targetLocation); creeper.triggerEvent(\"minecraft:start_exploding_forced\"); ```"
        },
        "match": "triggerEvent(eventName: string): void",
        "kind": "public",
        "param": "eventName: string",
        "return": "void"
      },
      "tryTeleport": {
        "comment": {
          "params": {
            "location": "Location to teleport the entity to.",
            "teleportOptions": "Options regarding the teleport operation."
          },
          "remarks": "Attempts to try a teleport, but may not complete the teleport operation (for example, if there are blocks at the destination.) This function can't be called in read-only mode.",
          "returns": "Returns whether the teleport succeeded. This can fail if the destination chunk is unloaded or if the teleport would result in intersecting with blocks.",
          "throws": "function can throw errors."
        },
        "match": "tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean",
        "kind": "public",
        "param": "location: Vector3, teleportOptions?: TeleportOptions",
        "return": "boolean"
      }
    },
    "Tags": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Tags"
      },
      "suiteAll": {
        "comment": {
          "params": {},
          "remarks": "Indicates that the tagged test should be a part of all suites."
        },
        "match": "static readonly suiteAll = 'suite:all'",
        "kind": "static readonly",
        "param": "",
        "return": "'suite:all'"
      },
      "suiteDebug": {
        "comment": {
          "params": {},
          "remarks": "Indicates that the tagged test should be a part of an internal (debug) test suite."
        },
        "match": "static readonly suiteDebug = 'suite:debug'",
        "kind": "static readonly",
        "param": "",
        "return": "'suite:debug'"
      },
      "suiteDefault": {
        "comment": {
          "params": {},
          "remarks": "Indicates that the tagged test should be a part of the default test suite."
        },
        "match": "static readonly suiteDefault = 'suite:default'",
        "kind": "static readonly",
        "param": "",
        "return": "'suite:default'"
      },
      "suiteDisabled": {
        "comment": {
          "params": {},
          "remarks": "Indicates that the tagged test should be a part of a suite of disabled tests."
        },
        "match": "static readonly suiteDisabled = 'suite:disabled'",
        "kind": "static readonly",
        "param": "",
        "return": "'suite:disabled'"
      },
      "suiteNextUpdate": {
        "comment": {
          "params": {}
        },
        "match": "static readonly suiteNextUpdate = 'suite:nextupdate'",
        "kind": "static readonly",
        "param": "",
        "return": "'suite:nextupdate'"
      }
    },
    "Test": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "Test"
      },
      "assert": {
        "comment": {
          "params": {
            "condition": "Expression of the condition to evaluate.",
            "message": "Message that is passed if the _condition_ does not evaluate to true."
          },
          "remarks": "Tests that the condition specified in _condition_ is true. If not, an error with the specified _message_ is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assert(condition: boolean, message: string): void",
        "kind": "public",
        "param": "condition: boolean, message: string",
        "return": "void"
      },
      "assertBlockPresent": {
        "comment": {
          "params": {
            "blockType": "Expected block type.",
            "blockLocation": "Location of the block to test at.",
            "isPresent": "If true, this function tests whether a block of the specified type is at the location. If false, tests that a block of the specified type is not present."
          },
          "remarks": "Tests that a block of the specified type is present at the specified location. If it is not, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertBlockPresent(blockType: minecraftserver.BlockType | string,blockLocation: minecraftserver.Vector3,isPresent?: boolean,): void",
        "kind": "public",
        "param": "blockType: minecraftserver.BlockType | string,blockLocation: minecraftserver.Vector3,isPresent?: boolean,",
        "return": "void"
      },
      "assertBlockState": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block to test at.",
            "callback": "Callback function that contains additional tests based on the block at the specified location."
          },
          "remarks": "Tests that a block has a particular state value at the specified location. If it does not have that state value, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}",
          "example": "```typescript test.assertBlockState(buttonPos, (block) => { return block.permutation.getProperty(\"button_pressed_bit\") == 0; }); ```"
        },
        "match": "assertBlockState(blockLocation: minecraftserver.Vector3, callback: (arg: minecraftserver.Block) => boolean): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, callback: (arg: minecraftserver.Block) => boolean",
        "return": "void"
      },
      "assertCanReachLocation": {
        "comment": {
          "params": {
            "mob": "Entity that you wish to test the location against.",
            "blockLocation": "Structure-relative location to test whether the specified mob can reach.",
            "canReach": "If true, tests whether the mob can reach the location. If false, tests whether the mob is not able to reach the location."
          },
          "remarks": "Tests that an entity can reach a particular location. Depending on the value of canReach, throws an exception if the condition is not met.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertCanReachLocation(mob: minecraftserver.Entity,blockLocation: minecraftserver.Vector3,canReach?: boolean,): void",
        "kind": "public",
        "param": "mob: minecraftserver.Entity,blockLocation: minecraftserver.Vector3,canReach?: boolean,",
        "return": "void"
      },
      "assertContainerContains": {
        "comment": {
          "params": {
            "itemStack": "Represents the type of item to check for. The specified container must contain at least 1 item matching the item type defined in _itemStack_.",
            "blockLocation": "Location of the block with a container (for example, a chest) to test the contents of."
          },
          "remarks": "Tests that a container (e.g., a chest) at the specified location contains a specified of item stack. If not, an error is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertContainerContains(itemStack: minecraftserver.ItemStack, blockLocation: minecraftserver.Vector3): void",
        "kind": "public",
        "param": "itemStack: minecraftserver.ItemStack, blockLocation: minecraftserver.Vector3",
        "return": "void"
      },
      "assertContainerEmpty": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block with a container (for example, a chest) to test is empty of contents."
          },
          "remarks": "Tests that a container (e.g., a chest) at the specified location is empty. If not, an error is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertContainerEmpty(blockLocation: minecraftserver.Vector3): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3",
        "return": "void"
      },
      "assertEntityHasArmor": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Identifier of the entity to match (e.g., 'minecraft:skeleton').",
            "armorSlot": "Container slot index to test.",
            "armorName": "Name of the armor to look for.",
            "armorData": "Data value integer to look for.",
            "blockLocation": "Location of the entity with armor to test for.",
            "hasArmor": "Whether or not the entity is expected to have the specified armor equipped."
          },
          "remarks": "Tests that an entity has a specific piece of armor equipped. If not, an error is thrown.",
          "throws": "function can throw errors. {@link GameTestError}",
          "example": "```typescript test.assertEntityHasArmor(\"minecraft:horse\", armorSlotTorso, \"diamond_horse_armor\", 0, horseLocation, true); ```"
        },
        "match": "assertEntityHasArmor(entityTypeIdentifier: string,armorSlot: number,armorName: string,armorData: number,blockLocation: minecraftserver.Vector3,hasArmor?: boolean,): void",
        "kind": "public",
        "param": "entityTypeIdentifier: string,armorSlot: number,armorName: string,armorData: number,blockLocation: minecraftserver.Vector3,hasArmor?: boolean,",
        "return": "void"
      },
      "assertEntityHasComponent": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Identifier of the specified entity (e.g., 'minecraft:skeleton'). If the namespace is not specified, 'minecraft:' is assumed.",
            "componentIdentifier": "Identifier of the component to check for. If the namespace is not specified, 'minecraft:' is assumed.",
            "blockLocation": "Location of the block with a container (for example, a chest.)",
            "hasComponent": "Determines whether to test that the component exists, or does not."
          },
          "remarks": "Tests that an entity has a particular component. If not, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}",
          "example": "```typescript test.assertEntityHasComponent(\"minecraft:sheep\", \"minecraft:is_sheared\", entityLoc, false); ```"
        },
        "match": "assertEntityHasComponent(entityTypeIdentifier: string,componentIdentifier: string,blockLocation: minecraftserver.Vector3,hasComponent?: boolean,): void",
        "kind": "public",
        "param": "entityTypeIdentifier: string,componentIdentifier: string,blockLocation: minecraftserver.Vector3,hasComponent?: boolean,",
        "return": "void"
      },
      "assertEntityInstancePresent": {
        "comment": {
          "params": {
            "entity": "Specific entity to test for.",
            "blockLocation": "Location of the entity to test for.",
            "isPresent": "Whether to test that an entity is present or not present at the specified location."
          },
          "remarks": "Depending on the value for isPresent, tests that a particular entity is present or not present at the specified location. Depending on the value of isPresent, if the entity is found or not found, an error is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertEntityInstancePresent(entity: minecraftserver.Entity,blockLocation: minecraftserver.Vector3,isPresent?: boolean,): void",
        "kind": "public",
        "param": "entity: minecraftserver.Entity,blockLocation: minecraftserver.Vector3,isPresent?: boolean,",
        "return": "void"
      },
      "assertEntityInstancePresentInArea": {
        "comment": {
          "params": {
            "entity": "Entity instance to test for.",
            "isPresent": "If true, this function tests whether the specified entity is present in the GameTest area. If false, tests that the specified entity is not present."
          },
          "remarks": "Tests that an entity instance is present within the GameTest area. If not, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}",
          "example": "```typescript gt.register(\"StarterTests\", \"simpleMobTest\", (test: gt.Test) => { const attackerId = \"fox\"; const victimId = \"chicken\"; test.spawn(attackerId, { x: 5, y: 2, z: 5 }); let victim = test.spawn(victimId, { x: 2, y: 2, z: 2 }); test.assertEntityInstancePresentInArea(victim, true); test.succeedWhen(() => { test.assertEntityInstancePresentInArea(victim, false); }); }) .maxTicks(400) .structureName(\"gametests:mediumglass\"); ```"
        },
        "match": "assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void",
        "kind": "public",
        "param": "entity: minecraftserver.Entity, isPresent?: boolean",
        "return": "void"
      },
      "assertEntityPresent": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.",
            "blockLocation": "Location of the entity to test for.",
            "searchDistance": "The distance to search for the entity from the blockLocation.",
            "isPresent": "If true, this function tests whether an entity of the specified type is present. If false, tests that an entity of the specified type is not present."
          },
          "remarks": "Depending on the value of isPresent, tests for the presence or non-presence of entity of a specified type at a particular location. If the condition is not met, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertEntityPresent(entityTypeIdentifier: string,blockLocation: minecraftserver.Vector3,searchDistance?: number,isPresent?: boolean,): void",
        "kind": "public",
        "param": "entityTypeIdentifier: string,blockLocation: minecraftserver.Vector3,searchDistance?: number,isPresent?: boolean,",
        "return": "void"
      },
      "assertEntityPresentInArea": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.",
            "isPresent": "If true, this function tests whether an entity of the specified type is present in the GameTest area. If false, tests that an entity of the specified type is not present."
          },
          "remarks": "Tests that an entity of a specified type is present within the GameTest area. If not, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}",
          "example": "```typescript gt.register(\"StarterTests\", \"simpleMobTest\", (test: gt.Test) => { const attackerId = \"fox\"; const victimId = \"chicken\"; test.spawn(attackerId, { x: 5, y: 2, z: 5 }); test.spawn(victimId, { x: 2, y: 2, z: 2 }); test.assertEntityPresentInArea(victimId, true); test.succeedWhen(() => { test.assertEntityPresentInArea(victimId, false); }); }) .maxTicks(400) .structureName(\"gametests:mediumglass\"); ```"
        },
        "match": "assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void",
        "kind": "public",
        "param": "entityTypeIdentifier: string, isPresent?: boolean",
        "return": "void"
      },
      "assertEntityState": {
        "comment": {
          "params": {
            "blockLocation": "Location of the entity to look for.",
            "entityTypeIdentifier": "Identifier of the entity (e.g., 'minecraft:skeleton') to look for. Note if no namespace is specified, 'minecraft:' is assumed.",
            "callback": "Callback function where facets of the selected entity can be tested for. If this callback function returns false or no entity with the specified identifier is found, an exception is thrown."
          },
          "remarks": "Tests that an entity (e.g., a skeleton) at the specified location has a particular piece of data. If not, an error is thrown.",
          "throws": "function can throw errors. {@link GameTestError}",
          "example": "```typescript test.assertEntityState( villagerPos, \"minecraft:villager_v2\", (entity) => entity.getEffect(MinecraftEffectTypes.Regeneration).duration > 120 ); // At least 6 seconds remaining in the villagers' effect ```"
        },
        "match": "assertEntityState(blockLocation: minecraftserver.Vector3,entityTypeIdentifier: string,callback: (arg: minecraftserver.Entity) => boolean,): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3,entityTypeIdentifier: string,callback: (arg: minecraftserver.Entity) => boolean,",
        "return": "void"
      },
      "assertEntityTouching": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.",
            "location": "Location of the entity to test for.",
            "isTouching": "If true, this function tests whether the entity is touching the specified location. If false, tests that an entity is not testing the specified location."
          },
          "remarks": "Depending on the value of isTouching, tests that an entity of a specified type is touching or connected to another entity. If the condition is not met, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertEntityTouching(entityTypeIdentifier: string, location: minecraftserver.Vector3, isTouching?: boolean): void",
        "kind": "public",
        "param": "entityTypeIdentifier: string, location: minecraftserver.Vector3, isTouching?: boolean",
        "return": "void"
      },
      "assertIsWaterlogged": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block to test for.",
            "isWaterlogged": "Whether to test that the block at _position_ is expected to be waterlogged."
          },
          "remarks": "Depending on the value of isWaterlogged, tests that a block at a location contains water. If the condition is not met, an error is thrown. Pure water blocks are not considered to be waterlogged.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertIsWaterlogged(blockLocation: minecraftserver.Vector3, isWaterlogged?: boolean): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, isWaterlogged?: boolean",
        "return": "void"
      },
      "assertItemEntityCountIs": {
        "comment": {
          "params": {
            "itemType": "Type of item to look for.",
            "blockLocation": "Location to search around for the specified set of items.",
            "searchDistance": "Range, in blocks, to aggregate a count of items around. If 0, will only search the particular block at _position_.",
            "count": "Number of items, at minimum, to look and test for."
          },
          "remarks": "Tests that items of a particular type and count are present within an area. If not, an error is thrown.",
          "throws": "function can throw errors. {@link GameTestError}",
          "example": "```typescript test.assertItemEntityCountIs(Items.feather, expectedFeatherLoc, 0, 1); ```"
        },
        "match": "assertItemEntityCountIs(itemType: minecraftserver.ItemType | string,blockLocation: minecraftserver.Vector3,searchDistance: number,count: number,): void",
        "kind": "public",
        "param": "itemType: minecraftserver.ItemType | string,blockLocation: minecraftserver.Vector3,searchDistance: number,count: number,",
        "return": "void"
      },
      "assertItemEntityPresent": {
        "comment": {
          "params": {
            "itemType": "Type of item to test for.",
            "blockLocation": "Location of the item entity to test for.",
            "searchDistance": "Radius in blocks to look for the item entity.",
            "isPresent": "If true, this function tests whether an item entity of the specified type is present. If false, tests that an item entity of the specified type is not present."
          },
          "remarks": "Depending on the value of isPresent, tests whether a particular item entity is present or not at a particular location. If the condition is not met, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertItemEntityPresent(itemType: minecraftserver.ItemType | string,blockLocation: minecraftserver.Vector3,searchDistance?: number,isPresent?: boolean,): void",
        "kind": "public",
        "param": "itemType: minecraftserver.ItemType | string,blockLocation: minecraftserver.Vector3,searchDistance?: number,isPresent?: boolean,",
        "return": "void"
      },
      "assertRedstonePower": {
        "comment": {
          "params": {
            "blockLocation": "Location to test.",
            "power": "Expected power level."
          },
          "remarks": "Tests that Redstone power at a particular location matches a particular value. If not, an exception is thrown.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "assertRedstonePower(blockLocation: minecraftserver.Vector3, power: number): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, power: number",
        "return": "void"
      },
      "destroyBlock": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block to destroy.",
            "dropResources": "Whether to add resources exposed with a particular drop."
          },
          "remarks": "Destroys a block at a particular location. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "destroyBlock(blockLocation: minecraftserver.Vector3, dropResources?: boolean): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, dropResources?: boolean",
        "return": "void"
      },
      "fail": {
        "comment": {
          "params": {
            "errorMessage": "Error message summarizing the failure condition."
          },
          "remarks": "Marks the current test as a failure case.",
          "throws": "function can throw errors."
        },
        "match": "fail(errorMessage: string): void",
        "kind": "public",
        "param": "errorMessage: string",
        "return": "void"
      },
      "failIf": {
        "comment": {
          "params": {
            "callback": "Callback function that runs. If the function runs successfully, the test is marked as a failure. Typically, this function will have .assertXyz method calls within it."
          },
          "remarks": "Runs the given callback. If the callback does not throw an exception, the test is marked as a failure.",
          "throws": "function can throw errors."
        },
        "match": "failIf(callback: () => void): void",
        "kind": "public",
        "param": "callback: () => void",
        "return": "void"
      },
      "getBlock": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block to retrieve."
          },
          "remarks": "Gets a block at the specified block location. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "getBlock(blockLocation: minecraftserver.Vector3): minecraftserver.Block",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3",
        "return": "minecraftserver.Block"
      },
      "getDimension": {
        "comment": {
          "params": {},
          "remarks": "Gets the dimension of this test.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "getDimension(): minecraftserver.Dimension",
        "kind": "public",
        "param": "",
        "return": "minecraftserver.Dimension"
      },
      "getFenceConnectivity": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block to retrieve."
          },
          "remarks": "If the block at the specified block location is a fence, this returns a helper object with details on how a fence is connected. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "getFenceConnectivity(blockLocation: minecraftserver.Vector3): FenceConnectivity",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3",
        "return": "FenceConnectivity"
      },
      "getSculkSpreader": {
        "comment": {
          "params": {
            "blockLocation": "Location of the block to retrieve a sculk spreader from."
          },
          "remarks": "Retrieves a sculk spreader object that can be used to control and manage how sculk grows from a block. This function can't be called in read-only mode.",
          "returns": "Returns the SculkSpreader or undefined if no SculkSpreader is present on the block.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "getSculkSpreader(blockLocation: minecraftserver.Vector3): SculkSpreader | undefined",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3",
        "return": "SculkSpreader | undefined"
      },
      "getTestDirection": {
        "comment": {
          "params": {},
          "remarks": "Returns the direction of the current test - see the {@link",
          "minecraft/server.Direction}": "for more information on potential values (north, east, south, west - values 2-5)."
        },
        "match": "getTestDirection(): minecraftserver.Direction",
        "kind": "public",
        "param": "",
        "return": "minecraftserver.Direction"
      },
      "idle": {
        "comment": {
          "params": {
            "tickDelay": "Amount of time to wait, in ticks."
          },
          "remarks": "This asynchronous function will wait for the specified time in ticks before continuing execution. This function can't be called in read-only mode."
        },
        "match": "idle(tickDelay: number): Promise<void>",
        "kind": "public",
        "param": "tickDelay: number",
        "return": "Promise<void>"
      },
      "killAllEntities": {
        "comment": {
          "params": {},
          "remarks": "Kills all entities within the GameTest structure. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "killAllEntities(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "onPlayerJump": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "onPlayerJump(mob: minecraftserver.Entity, jumpAmount: number): void",
        "kind": "public",
        "param": "mob: minecraftserver.Entity, jumpAmount: number",
        "return": "void"
      },
      "pressButton": {
        "comment": {
          "params": {
            "blockLocation": "Location to push the button at."
          },
          "remarks": "Presses a button at a block location. This function can't be called in read-only mode.",
          "throws": "Will throw an error if a button is not present at the specified position. {@link GameTestError}"
        },
        "match": "pressButton(blockLocation: minecraftserver.Vector3): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3",
        "return": "void"
      },
      "print": {
        "comment": {
          "params": {
            "text": "Message to display."
          },
          "remarks": "Displays the specified message to all players. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "print(text: string): void",
        "kind": "public",
        "param": "text: string",
        "return": "void"
      },
      "pullLever": {
        "comment": {
          "params": {
            "blockLocation": "Location to pull the lever at."
          },
          "remarks": "Pulls a lever at a block location. This function can't be called in read-only mode.",
          "throws": "Will throw an error if a lever is not present at the specified position. {@link GameTestError}"
        },
        "match": "pullLever(blockLocation: minecraftserver.Vector3): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3",
        "return": "void"
      },
      "pulseRedstone": {
        "comment": {
          "params": {
            "blockLocation": "Location to pulse Redstone at.",
            "duration": "Number of ticks to pulse Redstone."
          },
          "remarks": "Sends a Redstone pulse at a particular location by creating a temporary Redstone block. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "pulseRedstone(blockLocation: minecraftserver.Vector3, duration: number): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, duration: number",
        "return": "void"
      },
      "relativeBlockLocation": {
        "comment": {
          "params": {
            "worldBlockLocation": "Absolute location in the world to convert to a relative location."
          },
          "remarks": "From a BlockLocation, returns a new BlockLocation with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account.",
          "returns": "A location relative to the GameTest command block.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "relativeBlockLocation(worldBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3",
        "kind": "public",
        "param": "worldBlockLocation: minecraftserver.Vector3",
        "return": "minecraftserver.Vector3"
      },
      "relativeLocation": {
        "comment": {
          "params": {
            "worldLocation": "Absolute location in the world to convert to a relative location."
          },
          "remarks": "From a location, returns a new location with coordinates relative to the current GameTest structure block. For example, the relative coordinates for the block above the structure block are (0, 1, 0). Rotation of the GameTest structure is also taken into account. This function can't be called in read-only mode.",
          "returns": "A location relative to the GameTest command block.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "relativeLocation(worldLocation: minecraftserver.Vector3): minecraftserver.Vector3",
        "kind": "public",
        "param": "worldLocation: minecraftserver.Vector3",
        "return": "minecraftserver.Vector3"
      },
      "removeSimulatedPlayer": {
        "comment": {
          "params": {
            "simulatedPlayer": "Simulated player to remove."
          },
          "remarks": "Removes a simulated player from the world. This function can't be called in read-only mode."
        },
        "match": "removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void",
        "kind": "public",
        "param": "simulatedPlayer: SimulatedPlayer",
        "return": "void"
      },
      "rotateDirection": {
        "comment": {
          "params": {
            "direction": "Direction to translate into a direction relative to the GameTest facing. Passing in Direction.south will return the test direction; Passing in Direction.north will return the opposite of the test direction, and so on."
          },
          "remarks": "Returns a relative direction given the current rotation of the current test. Passing in Direction.south will return the test direction; Passing in Direction.north will return the opposite of the test direction, and so on. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "rotateDirection(direction: minecraftserver.Direction): minecraftserver.Direction",
        "kind": "public",
        "param": "direction: minecraftserver.Direction",
        "return": "minecraftserver.Direction"
      },
      "rotateVector": {
        "comment": {
          "params": {},
          "remarks": "This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "rotateVector(vector: minecraftserver.Vector3): minecraftserver.Vector3",
        "kind": "public",
        "param": "vector: minecraftserver.Vector3",
        "return": "minecraftserver.Vector3"
      },
      "runAfterDelay": {
        "comment": {
          "params": {
            "delayTicks": "Number of ticks to delay before running the specified callback.",
            "callback": "Callback function to execute."
          },
          "remarks": "Runs a specific callback after a specified delay of ticks This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "runAfterDelay(delayTicks: number, callback: () => void): void",
        "kind": "public",
        "param": "delayTicks: number, callback: () => void",
        "return": "void"
      },
      "runAtTickTime": {
        "comment": {
          "params": {
            "tick": "Tick (after the start of the GameTest) to run the callback at.",
            "callback": "Callback function to execute."
          },
          "remarks": "Runs the given callback after a delay of _tick_ ticks from the start of the GameTest. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "runAtTickTime(tick: number, callback: () => void): void",
        "kind": "public",
        "param": "tick: number, callback: () => void",
        "return": "void"
      },
      "setBlockPermutation": {
        "comment": {
          "params": {
            "blockData": "Permutation that contains the configuration data for a block.",
            "blockLocation": "Location of the block to set."
          },
          "remarks": "Sets a block to a particular configuration (a BlockPermutation) at the specified block location. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "setBlockPermutation(blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3): void",
        "kind": "public",
        "param": "blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3",
        "return": "void"
      },
      "setBlockType": {
        "comment": {
          "params": {
            "blockType": "Type of block to set.",
            "blockLocation": "Location of the block to set."
          },
          "remarks": "Sets a block to a particular type at the specified block location. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "setBlockType(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3): void",
        "kind": "public",
        "param": "blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3",
        "return": "void"
      },
      "setFluidContainer": {
        "comment": {
          "params": {
            "location": "Location of the fluid container block.",
            "type": "Type of fluid to set. See {@link"
          },
          "remarks": "For blocks that are fluid containers - like a cauldron - changes the type of fluid within that container. This function can't be called in read-only mode.",
          "minecraft/server-gametest.FluidType}": "a list of values.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "setFluidContainer(location: minecraftserver.Vector3, type: minecraftserver.FluidType): void",
        "kind": "public",
        "param": "location: minecraftserver.Vector3, type: minecraftserver.FluidType",
        "return": "void"
      },
      "setTntFuse": {
        "comment": {
          "params": {
            "entity": "Entity that is explodable.",
            "fuseLength": "Length of time, in ticks, before the entity explodes."
          },
          "remarks": "Sets the fuse of an explodable entity. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "setTntFuse(entity: minecraftserver.Entity, fuseLength: number): void",
        "kind": "public",
        "param": "entity: minecraftserver.Entity, fuseLength: number",
        "return": "void"
      },
      "spawn": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>)."
          },
          "remarks": "Spawns an entity at a location. This function can't be called in read-only mode.",
          "returns": "The spawned entity. If the entity cannot be spawned, returns undefined.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}",
          "example": "```typescript test.spawn(\"minecraft:pig<minecraft:ageable_grow_up>\", { x: 1, y: 2, z: 1 }); ```"
        },
        "match": "spawn(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity",
        "kind": "public",
        "param": "entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3",
        "return": "minecraftserver.Entity"
      },
      "spawnAtLocation": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Type of entity to create. If no namespace is provided, 'minecraft:' is assumed. Note that an optional initial spawn event can be specified between less than/greater than signs (e.g., namespace:entityType<spawnEvent>)."
          },
          "remarks": "Spawns an entity at a location. This function can't be called in read-only mode.",
          "returns": "The spawned entity. If the entity cannot be spawned, returns undefined.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}",
          "example": "```typescript test.spawn(\"minecraft:pig<minecraft:ageable_grow_up>\", { x: 1.5, y: 2, z: 1.5 }); ```"
        },
        "match": "spawnAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity",
        "kind": "public",
        "param": "entityTypeIdentifier: string, location: minecraftserver.Vector3",
        "return": "minecraftserver.Entity"
      },
      "spawnItem": {
        "comment": {
          "params": {
            "itemStack": "ItemStack that describes the item entity to create.",
            "location": "Location to create the item entity at."
          },
          "remarks": "Spawns an item entity at a specified location. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}",
          "example": "```typescript const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1, 0); const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5, 0); test.spawnItem(oneEmerald, { x: 3.5, y: 3, z: 1.5 }); test.spawnItem(fiveEmeralds, { x: 1.5, y: 3, z: 1.5 }); ```"
        },
        "match": "spawnItem(itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3): minecraftserver.Entity",
        "kind": "public",
        "param": "itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3",
        "return": "minecraftserver.Entity"
      },
      "spawnSimulatedPlayer": {
        "comment": {
          "params": {
            "blockLocation": "Location where to spawn the simulated player.",
            "name": "Name to give the new simulated player."
          },
          "remarks": "Creates a new simulated player within the world. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "spawnSimulatedPlayer(blockLocation: minecraftserver.Vector3,name?: string,gameMode?: minecraftserver.GameMode,): SimulatedPlayer",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3,name?: string,gameMode?: minecraftserver.GameMode,",
        "return": "SimulatedPlayer"
      },
      "spawnWithoutBehaviors": {
        "comment": {
          "params": {
            "blockLocation": "Location where the entity should be spawned."
          },
          "remarks": "Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity",
        "kind": "public",
        "param": "entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3",
        "return": "minecraftserver.Entity"
      },
      "spawnWithoutBehaviorsAtLocation": {
        "comment": {
          "params": {
            "location": "Location where the entity should be spawned."
          },
          "remarks": "Spawns an entity at a location without any AI behaviors. This method is frequently used in conjunction with methods like .walkTo to create predictable mob actions. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "spawnWithoutBehaviorsAtLocation(entityTypeIdentifier: string,location: minecraftserver.Vector3,): minecraftserver.Entity",
        "kind": "public",
        "param": "entityTypeIdentifier: string,location: minecraftserver.Vector3,",
        "return": "minecraftserver.Entity"
      },
      "spreadFromFaceTowardDirection": {
        "comment": {
          "params": {
            "blockLocation": "BlockLocation containing a multiface block.",
            "fromFace": "Face to spread from. This face must already be set.",
            "direction": "Direction to spread. Use the Minecraft.Direction enum to specify a direction."
          },
          "remarks": "Tests that a particular item entity is present at a particular location. If not, an exception is thrown. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}",
          "example": "```typescript test.spreadFromFaceTowardDirection({ x: 1, y: 2, z: 1 }, Direction.south, Direction.down); ```"
        },
        "match": "spreadFromFaceTowardDirection(blockLocation: minecraftserver.Vector3,fromFace: minecraftserver.Direction,direction: minecraftserver.Direction,): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3,fromFace: minecraftserver.Direction,direction: minecraftserver.Direction,",
        "return": "void"
      },
      "startSequence": {
        "comment": {
          "params": {},
          "remarks": "Creates a new GameTestSequence - A set of steps that play out sequentially within a GameTest. This function can't be called in read-only mode.",
          "returns": "A new GameTestSequence with chaining methods that facilitate creating a set of steps."
        },
        "match": "startSequence(): GameTestSequence",
        "kind": "public",
        "param": "",
        "return": "GameTestSequence"
      },
      "succeed": {
        "comment": {
          "params": {},
          "remarks": "Marks the current test as a success case. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "succeed(): void",
        "kind": "public",
        "param": "",
        "return": "void"
      },
      "succeedIf": {
        "comment": {
          "params": {
            "callback": "Callback function that runs. If the function runs successfully, the test is marked as a success. Typically, this function will have .assertXyz method calls within it."
          },
          "remarks": "Runs the given callback. If the callback does not throw an exception, the test is marked as a success. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "succeedIf(callback: () => void): void",
        "kind": "public",
        "param": "callback: () => void",
        "return": "void"
      },
      "succeedOnTick": {
        "comment": {
          "params": {
            "tick": "Tick after the start of the GameTest to mark the test as successful."
          },
          "remarks": "Marks the test as a success at the specified tick. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "succeedOnTick(tick: number): void",
        "kind": "public",
        "param": "tick: number",
        "return": "void"
      },
      "succeedOnTickWhen": {
        "comment": {
          "params": {
            "tick": "Tick after the start of the GameTest to run the testing callback at.",
            "callback": "Callback function that runs. If the function runs successfully, the test is marked as a success."
          },
          "remarks": "Runs the given callback at _tick_ ticks after the start of the test. If the callback does not throw an exception, the test is marked as a failure. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "succeedOnTickWhen(tick: number, callback: () => void): void",
        "kind": "public",
        "param": "tick: number, callback: () => void",
        "return": "void"
      },
      "succeedWhen": {
        "comment": {
          "params": {
            "callback": "Testing callback function that runs. If the function runs successfully, the test is marked as a success."
          },
          "remarks": "Runs the given callback every tick. When the callback successfully executes, the test is marked as a success. Specifically, the test will succeed when the callback does not throw an exception. This function can't be called in read-only mode.",
          "throws": "function can throw errors.",
          "example": "```typescript gt.register(\"StarterTests\", \"simpleMobTest\", (test: gt.Test) => { const attackerId = \"fox\"; const victimId = \"chicken\"; test.spawn(attackerId, { x: 5, y: 2, z: 5 }); test.spawn(victimId, { x: 2, y: 2, z: 2 }); test.assertEntityPresentInArea(victimId, true); test.succeedWhen(() => { test.assertEntityPresentInArea(victimId, false); }); }) .maxTicks(400) .structureName(\"gametests:mediumglass\"); ```"
        },
        "match": "succeedWhen(callback: () => void): void",
        "kind": "public",
        "param": "callback: () => void",
        "return": "void"
      },
      "succeedWhenBlockPresent": {
        "comment": {
          "params": {
            "blockType": "Type of block to test for.",
            "blockLocation": "Location of the block to test at.",
            "isPresent": "If true, this function tests whether a block of the specified type is present. If false, tests that a block of the specified type is not present."
          },
          "remarks": "Depending on the condition of isPresent, tests for the presence of a block of a particular type on every tick. When the specified block of a type is found or not found (depending on isPresent), the test is marked as a success. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "succeedWhenBlockPresent(blockType: minecraftserver.BlockType | string,blockLocation: minecraftserver.Vector3,isPresent?: boolean,): void",
        "kind": "public",
        "param": "blockType: minecraftserver.BlockType | string,blockLocation: minecraftserver.Vector3,isPresent?: boolean,",
        "return": "void"
      },
      "succeedWhenEntityHasComponent": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Type of entity to look for. If no namespace is specified, 'minecraft:' is assumed.",
            "componentIdentifier": "Type of component to test for the presence of. If no namespace is specified, 'minecraft:' is assumed.",
            "blockLocation": "Block location of the entity to test.",
            "hasComponent": "If true, this function tests for the presence of a component. If false, this function tests for the lack of a component."
          },
          "remarks": "Tests for the presence of a component on every tick. Depending on the value of hasComponent, when the specified component is found, the test is marked as a success. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "succeedWhenEntityHasComponent(entityTypeIdentifier: string,componentIdentifier: string,blockLocation: minecraftserver.Vector3,hasComponent: boolean,): void",
        "kind": "public",
        "param": "entityTypeIdentifier: string,componentIdentifier: string,blockLocation: minecraftserver.Vector3,hasComponent: boolean,",
        "return": "void"
      },
      "succeedWhenEntityPresent": {
        "comment": {
          "params": {
            "entityTypeIdentifier": "Type of entity to test for (e.g., 'minecraft:skeleton'). If an entity namespace is not specified, 'minecraft:' is assumed.",
            "blockLocation": "Location of the entity to test for.",
            "isPresent": "If true, this function tests whether an entity of the specified type is present. If false, tests that an entity of the specified type is not present."
          },
          "remarks": "Depending on the value of isPresent, tests for the presence of an entity on every tick. When an entity of the specified type is found or not found (depending on isPresent), the test is marked as a success. This function can't be called in read-only mode.",
          "throws": "function can throw errors."
        },
        "match": "succeedWhenEntityPresent(entityTypeIdentifier: string,blockLocation: minecraftserver.Vector3,isPresent?: boolean,): void",
        "kind": "public",
        "param": "entityTypeIdentifier: string,blockLocation: minecraftserver.Vector3,isPresent?: boolean,",
        "return": "void"
      },
      "triggerInternalBlockEvent": {
        "comment": {
          "params": {
            "event": "Event to trigger. Valid values include minecraft:drip, minecraft:grow_stalagtite, minecraft:grow_stalagmite, minecraft:grow_up, minecraft:grow_down and minecraft:grow_sideways."
          },
          "remarks": "Triggers a block event from a fixed list of available block events. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "triggerInternalBlockEvent(blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]): void",
        "kind": "public",
        "param": "blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]",
        "return": "void"
      },
      "until": {
        "comment": {
          "params": {
            "callback": "Function with code to evaluate."
          },
          "remarks": "This asynchronous function will wait until the code in the specified callback successfully completes. until can be used in conjunction with .assert functions to evaluate that a condition is true. This function can't be called in read-only mode."
        },
        "match": "until(callback: () => void): Promise<void>",
        "kind": "public",
        "param": "callback: () => void",
        "return": "Promise<void>"
      },
      "walkTo": {
        "comment": {
          "params": {
            "mob": "Mob entity to give orders to.",
            "blockLocation": "Location where the entity should be walk to.",
            "speedModifier": "Adjustable modifier to the mob's walking speed."
          },
          "remarks": "Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "walkTo(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number): void",
        "kind": "public",
        "param": "mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number",
        "return": "void"
      },
      "walkToLocation": {
        "comment": {
          "params": {
            "mob": "Mob entity to give orders to.",
            "location": "Location where the entity should be walk to.",
            "speedModifier": "Adjustable modifier to the mob's walking speed."
          },
          "remarks": "Forces a mob to walk to a particular location. Usually used in conjunction with methods like .spawnWithoutBehaviors to have more predictable mob behaviors. Mobs will stop navigation as soon as they intersect the target location. This function can't be called in read-only mode.",
          "throws": "function can throw errors. {@link GameTestError}"
        },
        "match": "walkToLocation(mob: minecraftserver.Entity, location: minecraftserver.Vector3, speedModifier?: number): void",
        "kind": "public",
        "param": "mob: minecraftserver.Entity, location: minecraftserver.Vector3, speedModifier?: number",
        "return": "void"
      },
      "worldBlockLocation": {
        "comment": {
          "params": {
            "relativeBlockLocation": "Location relative to the GameTest command block."
          },
          "remarks": "From a BlockLocation with coordinates relative to the GameTest structure block, returns a new BlockLocation with coordinates relative to world. Rotation of the GameTest structure is also taken into account.",
          "returns": "An absolute location relative to the GameTest command block.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "worldBlockLocation(relativeBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3",
        "kind": "public",
        "param": "relativeBlockLocation: minecraftserver.Vector3",
        "return": "minecraftserver.Vector3"
      },
      "worldLocation": {
        "comment": {
          "params": {
            "relativeLocation": "Location relative to the GameTest command block."
          },
          "remarks": "From a location with coordinates relative to the GameTest structure block, returns a new location with coordinates relative to world. Rotation of the GameTest structure is also taken into account.",
          "returns": "An absolute location relative to the GameTest command block.",
          "throws": "function can throw errors. {@link minecraftserver.GameTestError}"
        },
        "match": "worldLocation(relativeLocation: minecraftserver.Vector3): minecraftserver.Vector3",
        "kind": "public",
        "param": "relativeLocation: minecraftserver.Vector3",
        "return": "minecraftserver.Vector3"
      }
    },
    "GameTestError": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "GameTestError"
      },
      "messageParameters": {
        "comment": {
          "params": {}
        },
        "match": "messageParameters: string[]",
        "kind": "public",
        "param": "",
        "return": "string[]"
      },
      "type": {
        "comment": {
          "params": {}
        },
        "match": "type: GameTestErrorType",
        "kind": "public",
        "param": "",
        "return": "GameTestErrorType"
      }
    }
  },
  "@minecraft/common": {
    "ArgumentOutOfBoundsError": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "ArgumentOutOfBoundsError"
      },
      "maxValue": {
        "comment": {
          "params": {},
          "remarks": "Max expected value for the condition."
        },
        "match": "maxValue: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "minValue": {
        "comment": {
          "params": {},
          "remarks": "Min expected value for the condition."
        },
        "match": "minValue: number",
        "kind": "public",
        "param": "",
        "return": "number"
      },
      "value": {
        "comment": {
          "params": {},
          "remarks": "Passed-in value for the argument."
        },
        "match": "value: number",
        "kind": "public",
        "param": "",
        "return": "number"
      }
    },
    "EngineError": {
      "constructor": {
        "comment": {
          "params": {}
        },
        "match": "private constructor()",
        "kind": "private",
        "param": "",
        "return": "EngineError"
      }
    }
  }
};
export default Spinnet;