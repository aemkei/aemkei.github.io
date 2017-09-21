/*eslint-disable */

code = `S="\\40\\n";M="map";i=991;for(z=[];i;)z[--i]=i%30?8:S[1];F=d=>[30,1,-30,-1][M]((f,g,h)=>S[0]<z[f=d+2*h[3&g+i]]&&(z[f]=z[(d+f)/2]=S[0],i--,F(f))),F(32),z+""`;


X = (r,c,o=2*c+2,i=2*r*o+o,z=[],F=(p,i=Math.random()*4)=>[o,1,-o,-1].map((s,j,d)=>z[s=p+2*d[j+i&3]]>0&&(z[s]=z[(p+s)/2]=' ',F(s))))=>{for(;i--;)z[i]=i%o?8:`\n`;F(o+2);return''+z}



while (true) {

  x= X(7,7)
    .replace(/8,8/g,888)
    .replace(/8,8/g,888)
    .replace(/,/g, " ");

  s = code.split("")

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

  y = y + s.join('');

  try {
    eval(y);
    console.log(y)
    // continue;
  } catch(e) {

  }

}