const http= require('http');
const fs = require('fs');
const servor=http.createServer((req,res)=>{

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
    {fs.writeFileSync('ishan.txt','HI THERE');
        res.statusCode=302;
        res.setHeader=('location','/');
        return res.end();
    }
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1>Hello Ishan Malhotra</h1></body>');
    res.write('</html>');
    res.end();
   
});
servor.listen(3001);