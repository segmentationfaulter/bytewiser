'use strict';

process.stdin.once('data', (chunk) => {
  const buf = new ArrayBuffer(chunk.length);  // this is coming from V8

  // create a new view for the raw buffer
  let view = new Uint8Array(buf);

  // copy octets from chunk coming from Node to typed array from V8
  for (let i = 0; i < chunk.length; i++) {
    view[i] = chunk[i];
  }
  console.log(JSON.stringify(view));
});
