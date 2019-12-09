const http = require('http')
const host = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res)=>{
	
	res.statusCode = 200
	res.setHeader('content-type','text/plain');
	res.end('Olá Mundo! \n Meu primeiro script em node.js!');
	
})
server.listen(port, host,()=>{
	
	console.log(`Server rodando at http://${host}:${port}`)
	
})