const colors = [...'🟦🟩🟨🟧🟥🟪'];
let output = '\n\n';

for (let y = 0; y < 11; y++) {
  output += '\n   ';
  for (let x = 0; x < 11; x++) {
    // let v = (x * y) % 5;
    // let v = (x + y) % 6;
    // let v = (x ^ y) / 2;
    // let v = (x ^ y) + 2;
    let v = (x + y) % 6;
    // let v = ((x+4) * (y+4)) % 24;
    let color = colors[v];
    output += color || '⬛';
  }
}

console.log(output + '\n\n' );