/*eslint-disable */

s = `S="\\40";M="map";for(z=[i=991];i--;)z[i]=i%30?8:"\\n";F=d=>[30,1,-30,-1][M]((f,g,h)=>S<z[f=d+2*h[3&g+i]]&&(z[f]=z[(d+f)/2]=S,i--,F(f))),F(32),z+""`;

x = `
  8888888888888888888888888
  8       8           8   8
  8   8   8   8   8   8   8
  8   8   8   8   8       8
  8   8   8   8   888888888
  8       8   8   8       8
  8   88888   8   8   8   8
  8   8       8       8   8
  8   888888888   88888   8
  8           8       8   8
  888888888   888888888   8
  8                       8
  8888888888888888888888888
`;

s = s.split("")

i = 0;
y = "";

missing = 0;

for (var a in x){
  c = x[a]

  if (c == " "){
    y += " ";
  } else if (c == '\n'){
    y += "\n";
  } else {
    y += s.shift() || (missing++, "");
  }
}

console.log(y + s.join(''));

console.log(missing)