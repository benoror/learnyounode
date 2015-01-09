var mymodule = require('./module.js')

var printFiltered = function(e, list) {
		for(var i=0;i<list.length;i++) {
			console.log(list[i])
		}
}

mymodule(process.argv[2], process.argv[3], printFiltered)