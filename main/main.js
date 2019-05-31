module.exports = function main(a) {
let numbers = `
._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|
`;
let splitArr = numbers.split(/   |\n/),
		number = [],
		j=0;
for(let i=0,l=splitArr.length;i<l;i++){
	let numberStr = splitArr[i];
	if(''==numberStr) continue;
	if(10==j) j=0;
	if(!(j in number))
		number[j] = [];
	  number[j].push(numberStr);
		j++;
}
let b = '';
for(let i=0;i<3;i++){
	for(let j=0,l=a.length;j<l;j++){
		let numberr = a[j];
		b += number[numberr][i];
		if(j!=l-1) b += " ";
	}
	b += "\n";
}
return b;
};
