input = `
 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|`;


m = input.match(/.../g);
f = i => parseInt([...m[i]].map(c => c == " " | 0).join(''), 2);
console.log(m.length, m);
s = [];
for (i = 0; i <= m.length / 3; i++) s[i] = [f(i)] + f(i * 2) + f(i * 3);

console.log(s);
m = input.match(/.../g);
f = i => parseInt([...m[i]].map(c => c == " " | 0).join ``, 2);
s = "";
for (i = 0; i <= m.length / 3; i++) s += "555975595759552975495619540951195649200".split(9).indexOf([f(i)] + f(i * 2) + f(i * 3));

console.log(s);
/*
 _      _  _       _   _  _   _   _
| |  |  _| _| |_| |_  |_   | |_| |_|
|_|  | |_  _|   |  _| |_|  | |_|  _|

*/