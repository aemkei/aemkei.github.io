o='';
for (y=5; y--;) {
  o+="\n";
  for (x=32;x--;) {
    d = x/4 | 0;
    i = x%4 + y*3;
    t = (D = Date()[23-d]) < ':' ? D : 10;  
    c = (x%4>2) ? " " : ' #'[
      '筯቉珧珏寉秏积牉篯篏А'.charCodeAt(t) & 1 << i &&1
    ] || ' ';  
    o+= c+c
  }
}

console.log(o);

function r(){
  j=o='';
  r=(r+"").replace(/\s/g, '');
  r=r+r;
  for (y=5; y--;) {
    o+="\n";
    for (x=32;x--;) {
      d = x/4 | 0;
      i = x%4 + y*3;
      t = (D = Date()[23-d]) < ':' ? D : 10;  
      c = x%4<3 && '筯ᝉ抧珏寉禎积犒篯篏А'.charCodeAt(t) & 1 << i;  
      j++;
      o+= c?r[j]: ' '
      j++;
      o+= c?r[j]: ' '
    }
  }
  
  console.log(o);
}

r();