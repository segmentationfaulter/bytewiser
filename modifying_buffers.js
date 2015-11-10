'use strict';

const dot = '.'.charCodeAt(0);
const bang = '!'.charCodeAt(0);
process.stdin.on('data', (chunk) => {
  process.stdin.pause();  // makes sure that we get the first chunk only
  for (let i = 0; i < chunk.length; i++) {
    if (chunk[i] === dot) {
      chunk[i] = bang;
    }
  }
  console.log(chunk);
});
