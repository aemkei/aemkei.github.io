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

setInterval(x=>{o='';for(y=5;y--;o+="\n")for(x=38;x--;)o+=x%5>2?" ":' #'['㭮ᙉ狧掎寉禎㦮犒㯮㯎А'.charCodeAt((D=Date()[23-(x/5|0)])<':'?D:10)&1<<(x%5+y*3)&&1]||' ';console.log(o);},999)

