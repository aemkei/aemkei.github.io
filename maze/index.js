
//  8888888888888888888888888
    for(z=[i=991];i--;m="map")z[i]=i%30?8:"\n";F=d=>[30,1,-30,-1][m]((f,g,h)=>" "<z[f=d+2*h[3&g+i]]&&(z[f]=z[(d+f)/2]=" ",i+=7,F(f))),F(32),z


/*

  8888888888888888888888888
  8           8           8
  8   88888   8   88888   8
  8   8       8       8   8
  8   8   888888888   8   8
  8   8   8   8       8   8
  8   8   8   8   88888   8
  8       8       8       8
  8   88888   88888   8   8
  8   8       8       8   8
  8   888888888   88888   8
  8               8       8
  8888888888888888888888888


*/

console.log(z+"")


X = (r,c,o=2*c+2,i=2*r*o+o,z=[],F=(p,i=Math.random()*4)=>[o,1,-o,-1].map((s,j,d)=>z[s=p+2*d[j+i&3]]>0&&(z[s]=z[(p+s)/2]=' ',F(s))))=>{for(;i--;)z[i]=i%o?8:`\n`;F(o+2);return''+z}


console.log(X(6,6)
  .replace(/8,8/g,888)
  .replace(/8,8/g,888)
  .replace(/,/g, " ")
)