const fs = require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method; 
if(url==='/')
{
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type= "submit"> send</button></form></body>');
    res.write('</html>');
   return res.end();
}
if(url==='/message' && method==='POST')
{ const body=[];
    req.on('data',(chunk) =>
    {
        body.push(chunk);
    });
    req.on('end',()=>{
        const parsedbody= Buffer.concat(body).toString();
        const message=parsedbody.split('=')[1];
        fs.writeFileSync('ishan.txt',message);
    });
    return res.end();
}
res.setHeader('content-type','text/html');
res.write('<html>');
res.write('<head><title>My Page</title></head>');
res.write('<body><h1>Hello Ishan Malhotra !</h1></body>');
res.write('</html>');
res.end();
};
module.exports=requestHandler;