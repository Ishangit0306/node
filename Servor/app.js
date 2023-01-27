const http= require('http');
const servor=http.createServer((req,res)=>{

    // console.log(req.url,req.method,req.header);
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1>Hello Ishan</h1></body>');
    res.write('<html>');
    res.end();
});
servor.listen(3000);