const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req);
    //you receive the request and return the response
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end("here s the about page")
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we cant find the page</p>
    <a href="/">backhome</a>`
    )
})

server.listen(5000)


