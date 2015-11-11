'use strict';

process.stdin.once('data', (chunk) => {
  // create the raw buffer
  const buf = new ArrayBuffer(chunk.length);

  // create a new view for the raw buffer so that we could perform operations on raw buffer above
  let view = new Uint8Array(buf);

  // copy octets from chunk coming from Node side to buffer coming from V8
  for (let i = 0; i < chunk.length; i++) {
    view[i] = chunk[i];
  }
  console.log(JSON.stringify(view));
});
