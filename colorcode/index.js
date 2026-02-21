function update() {

  const colors = {
    '[': '#FF0',
    ']': '#FF0',
    '(': '#FF0',
    ')': '#FF0',
    '!': '#FF0',
    '+': '#FF0',
  };

  const chars = [...input.value].map(char => {
    return char.fontcolor(colors[char]);
  });

  output.innerHTML = chars.join('');
}

input.addEventListener('input', update);
update();