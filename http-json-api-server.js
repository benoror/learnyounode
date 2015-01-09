var http = require('http'),
	map = require('through2-map')

http.createServer(function (req, res) {
	var url = require('url').parse(req.url, true),
		date = new Date(url.query.iso),
		result = {}

	if(url.pathname === '/api/parsetime') {
		result.hour = date.getHours()
		result.minute =  date.getMinutes()
		result.second =  date.getSeconds()
	} else if(url.pathname === '/api/unixtime') {
		result.unixtime = date.getTime()
	}

	res.writeHead(200, { 'Content-Type': 'application/json' })

	res.end(JSON.stringify(result))

}).listen(process.argv[2])