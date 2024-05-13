const digits = `
 _       _   _       _   _   _   _   _     
| |   |  _|  _| |_| |_  |_    | |_| |_|  _ 
|_|   | |_   _|   |  _| |_|   | |_|  _|    

`.split('\n');

console.log(digits);

const chars = [];

for (let i = 0; i < 11; i++) {
  console.log('++++');
  let data = ''
  for (let y = 1; y <= 3; y++) {
    let row = '';
    for (let x = 0; x < 3; x++) {
      const fill = digits[y][x + i * 4];
      data += fill;
      row += fill;
    }
    console.log(row);
  }


  const bitmap = [1, 3, 4, 5, 6, 7, 8].map(index => data[index] != ' ');
  const binary = '0b' + bitmap.map(b => b ? 1 : 0).join('');
  const number = Number(binary);
  const char = String.fromCharCode(number);

  chars.push(char);

  console.log(data);
  console.log(binary);
  console.log(number);
  console.log(char);
}

string = chars.join('');
console.log(string);
console.log("-----------------------");

string.split('').map((char, number) => {
  const code = char.charCodeAt(0);
  const binary = code.toString(2);

  let symbol = ' ';

  for (i = 7; i--;) {
    const b = code & (1 << i);
    const s = b && 1 ? ['|', '_', '|', '|', '_', '|', '_'][i] : ' ';
    symbol += s + ((((i == 6) || (i == 3)) ? '\n' : ''));
  }
  console.log(symbol);
});

console.log(string);

string.split('').map((char, number) => {
  const code = char.charCodeAt(0);
  const binary = code.toString(2);

  let symbol = ' ';

  for (i = 7; i--;) {
    const b = code & (1 << i);
    const s = b && 1 ? '###' : '   ';
    symbol += s + ((((i == 6) || (i == 3)) ? '\n' : ''));
  }
  console.log(symbol);
});