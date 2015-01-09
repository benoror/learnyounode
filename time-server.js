var net = require('net')

var server = net.createServer(function (socket) {
	var date = new Date(),
		sdate = date.getFullYear() + '-'
             + ('0' + (date.getMonth()+1)).slice(-2) + '-'
             + ('0' + date.getDate()).slice(-2) + ' '
             + date.getHours() + ':' + date.getMinutes() + '\n'

	socket.write(sdate)
	socket.end()
})

server.listen(process.argv[2])