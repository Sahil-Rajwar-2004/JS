let number = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
}

console.log("Using for loop");
for(let i=0;i<Object.keys(number).length;i++){
	console.log(Object.keys(number)[i]+" = "+number[Object.keys(number)[i]]);
}
console.log("\n");
console.log("Using for in loop!");
for(let i in number){
	console.log(i+" = "+number[i]);
}

