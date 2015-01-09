var http = require('http')

var processResponse1 = function (response) {
	var result = "";

	response.setEncoding("utf8")

	response.on("data", function (data) {
		result += data;
	})

	response.on("end", function () {
		console.log(result)
		http.get(url2, processResponse2)
	})
}

var processResponse2 = function (response) {
	var result = "";

	response.setEncoding("utf8")

	response.on("data", function (data) {
		result += data;
	})

	response.on("end", function () {
		console.log(result)
		http.get(url3, processResponse3)
	})
}

var processResponse3 = function (response) {
	var result = "";

	response.setEncoding("utf8")

	response.on("data", function (data) {
		result += data;
	})

	response.on("end", function () {
		console.log(result)
	})
}

var url1 = process.argv[2],
	url2 = process.argv[3],
	url3 = process.argv[4]

http.get(url1, processResponse1)