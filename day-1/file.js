const fs = require('fs');

const filename = fs.readFileSync('./data/start.txt','utf-8');

const data = fs.readFileSync(`./data/${filename}`, 'utf-8')

fs.writeFileSync('./data/output.txt',data, 'utf-8')




