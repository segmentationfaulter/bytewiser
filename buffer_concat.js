'use strict';

const list = [];
process.stdin.on('data', (chunk) => {
  list.push(chunk);
});
process.stdin.on('end', () => {
  console.log(Buffer.concat(list));
})
