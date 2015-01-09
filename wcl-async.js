var fs = require('fs')

fs.readFile(process.argv[2], function(e, data) {
	console.log(data.toString().split('\n').length - 1)
})