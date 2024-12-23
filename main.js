const http = require('http');

const port = parseInt(process.argv[2], 10) || 9001;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHeader(200, {'Content-Type': 'text/html'});
		res.write('<h1>This is my Node Server</h1>');
		res.end();
	}
});

server.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});


