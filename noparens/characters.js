// get first char
console.log('abcde'.charAt``);

// get last char
console.log('abcde'.split``.pop``);
console.log('abcde'.split``.reverse``.shift``);

// false
// true
// String
// Array

console.log(String.name.charAt``); // S
console.log(Array.name.charAt``); // A
console.log(confirm.name.charAt``); // A

// "undefined"
[][[]] +
	[][
		// 0
		+[]
	][+[]][
		// 1
		++[+[]][+[]]
	][+[]];

function getAllPropertyNames(o) {
	return o
		? Object.getOwnPropertyNames(o).concat(
				getAllPropertyNames(Object.getPrototypeOf(o))
		  )
		: [];
}

getAllPropertyNames([]).filter((name) =>
	name.split('').every((char) => 'acdefinotuvyIN'.includes(char))
);
