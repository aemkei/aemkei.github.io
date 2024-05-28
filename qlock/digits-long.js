const digits = `
###     #   ##    ###   # #   ###   ###   ###   ###   ###      
# #    ##     #     #   # #   #     #       #   # #   # #    # 
# #   # #    #    ###   ###   ##    ###    #    ###   ###      
# #     #   #       #     #     #   # #    #    # #     #    # 
###     #   ###   ###     #   ##    ###    #    ###   ###      
`.split('\n');

// console.log(digits);

const numbers = [];

for (let i = 0; i < 11; i++) {
  // console.log('---');
  let number = '';
  for (let y = 0; y<5; y++) {
    let row = '';
    for (let x = 0; x<3; x++) {
      const fill = digits[y+1][i*6 + (2-x)];
      const filled = fill == '#' ? 1 : 0;

      row += fill;
      number += filled;
    }
    // console.log(row);
  }
  numbers.push(number);
}

// console.log(numbers);

const binaries = numbers.map(number => {
  return Number('0b' + number);
});


console.log(binaries.join(','))