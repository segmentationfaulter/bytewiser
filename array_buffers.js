'use strict';

const integer = Number(process.argv[2]);

// create a unsigned 32-bit view with size in parens
const view32bit = new Uint32Array(1);

// file the underlying buffer
view32bit[0] = integer;

// finds the reference to underlying memory for view32bit
const underlyingMemory = view32bit.buffer;

// create a new 16-bit view for the same underlyingMemory
const view16bit = new Uint16Array(underlyingMemory);

console.log(JSON.stringify(view16bit));
