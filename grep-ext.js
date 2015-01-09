var fs = require('fs'),
	sExt = process.argv[3]

fs.readdir(process.argv[2], function(e, list) {
	var re = new RegExp('.' + sExt + '$')

	for(var i=0;i<list.length;i++) {
		if(list[i].match(re)) {
			console.log(list[i])
		}
	}
})