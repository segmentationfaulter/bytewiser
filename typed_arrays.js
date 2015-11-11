'use strict';

process.stdin.on('data', (chunk) => {
  process.stdin.pause();    // so that we don't accept more than one buffer
  const buf = new ArrayBuffer(chunk.length);  // this is coming from V8

  // create a new view for the raw buffer
  let view = new Uint8Array(buf);

  // copy cotets from chunk coming from Node to typed array from V8
  for (let i = 0; i < chunk.length; i++) {
    view[i] = chunk[i];
  }
  console.log(JSON.stringify(view));
});
