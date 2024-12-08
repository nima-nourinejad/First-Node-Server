const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.write('<h1>This is my Node Server</h1>');
		res.end();
	}
});

server.listen(9001, () => {
	console.log('Server is listening on port 9001');
});