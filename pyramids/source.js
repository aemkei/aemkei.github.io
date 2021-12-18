source = `for(o=i=2011;i--;)o+=i%63?i&i/32&&'_':'\\n'`;

encoded = [... source].map(char =>
  unescape('%uD80C%uDC' + char.charCodeAt(0).toString(16))
).join('');

console.log(encoded);