var args = process.argv,
	total = 0;

for(var i=2;i<args.length;i++) {
	var num = parseInt(args[i]);
	total+=num;
}

console.log(total);