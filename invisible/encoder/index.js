// converts a given string into a sequence of [] symbols
function convert(input) {
  return [...input].map(c => {
    // Convert character to 8-bit binary
    const binary = c.charCodeAt(0).toString(2).padStart(8, '0');

    // Map each bit to the corresponding invisible character
    return [...binary].map(b => b == "0" ? "\uFFA0" : "\u3164").join('');
    // return binary;
  }).join('');
}

const library = `new Proxy({},{get:(_,n)=>eval([...n].map(n=>+("ﾠ">n)).join\`\`.replace(/.{8}/g,n=>String.fromCharCode(+("0b"+n))))}).
//// invisible code start ////
`


function convertInput(){
  const newValue = convert(document.getElementById('input').value);
  document.getElementById('output').value = `${library}
  ${newValue}
//// invisible code end ////`;
}

document.getElementById('input').addEventListener('input', (event) => {
  convertInput();
});

document.getElementById('convert').addEventListener('click', (event) => {
  convertInput()
  event.preventDefault();
});

document.getElementById('run').addEventListener('click', (event) => {
  event.preventDefault();
  eval(document.getElementById('output').value);
});

convertInput();