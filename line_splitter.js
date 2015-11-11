'use strict';
const fs = require('fs');

fs.readFile(process.argv[2], (err, contents) => {
  if (err) throw err;
  let start = 0;
  for (var end = 0; end < contents.length; end++) {
    if (contents[end] === '\n'.charCodeAt(0)) {
      console.log(contents.slice(start, end + 1));
      start = end + 1;
    }
  }
  // given that there is no newline characer at the end of the file
  console.log(contents.slice(start, end + 1));
});
