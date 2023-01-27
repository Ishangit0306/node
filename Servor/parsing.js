const http= require('http');
const route=require('./ routes');
const servor=http.createServer(route);
servor.listen(3003);
