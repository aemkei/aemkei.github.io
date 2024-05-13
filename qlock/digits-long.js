const digits = `
###     #   ##    ###   # #   ###   ###   ###   ###   ###      
# #    ##     #     #   # #   #     #       #   # #   # #    # 
# #   # #    #    ###   ###   ##    ###    #    ###   ###      
# #     #   #       #     #     #   # #    #    # #     #    # 
###     #   ###   ###     #   ##    ###    #    ###   ###      
`.split('\n');

console.log(digits);

const numbers = [];

for (let i = 0; i < 11; i++) {
  console.log('---');
  let number = '';
  for (let y = 0; y<5; y++) {
    let row = '';
    for (let x = 0; x<3; x++) {
      const fill = digits[y+1][x + i*6];
      const filled = fill == '#' ? 1 : 0;

      row += fill;
      number += filled;
    }
    console.log(row);
  }
  numbers.push(number);
}

console.log(numbers);

const binaries = numbers.map(number => {
  return Number('0b' + number);
});

console.log(binaries);

const chars = binaries.map(binary => {
  return String.fromCharCode(binary);
});

const hex = binaries.map(binary => {
  return binary.toString(16);
});

const b36 = binaries.map(binary => {
  return binary.toString(36);
});

console.log(hex);
console.log(b36);
console.log(chars);

const string = chars.join('');

console.log(string);

string.split('').map(char => {
  const code = char.charCodeAt(0);
  console.log(code);

  digit = '';
  for(i=15;i--;){
    digit += (' #'[code&1<<i&&1]) +  ('\n'[i%3] || '');
  }
  console.log(digit);


  digit = '';
  for(i=15;i--;){
    c = ' #'[code&1<<i&&1];
    digit += c+c +  ('\n'[i%3] || '');
  }
  console.log(digit);  
});

console.log(string);
console.log(hex.join(',0x'))
console.log(binaries.join(','))