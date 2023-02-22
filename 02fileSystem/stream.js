const fs = require('fs');
const rs = fs.createReadStream('./lorem.txt','utf8');
const ws = fs.createWriteStream('newLorem.txt')
/* rs.on('data',(dataChunk)=>{
    ws.write(dataChunk);
}) */
rs.pipe(ws);