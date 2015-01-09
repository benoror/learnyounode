var fs = require('fs')

module.exports = function (dir, ext, callback) {
	var filtered = []

	fs.readdir(dir, function(e, list) {
		if(e) 
			return callback(e)

		var re = new RegExp('.' + ext + '$')

		for(var i=0;i<list.length;i++) {
			if(list[i].match(re)) {
				filtered.push(list[i])
			}
		}

		callback(null, filtered)
	})
}