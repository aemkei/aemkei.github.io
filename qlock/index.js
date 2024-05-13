for(i=15;i++<24;)console.log(Date()[i]);

o='';
for(d=11; d--;){
  for(i=16;i--;){
    o += (' #'[('筯቉珧珏寉秏积牉篯篏'.charCodeAt(d)||65)&1<<i&&1]) +  ('\n'[i%3] || '')
  }
}

console.log(o);

console.log('-----')

o='';
for(d=15;d++<24;)
for(i=16;i--;)
o+=(' #'['筯቉珧珏寉秏积牉篯篏'.charCodeAt(Date()[d])&1<<i&&1]) +  ('\n'[i%3] || '')
console.log(o);


console.log('-----')

o='';
for(d=15;d++<23;)
for(i=16;i--;)
o+=(
  ' #'[
    '筯቉珧珏寉秏积牉篯篏А'.charCodeAt(
      (D = Date()[d])<':'?D:10
    ) & 1 << i &&1
  ]
) +  ('\n'[i%3] || '')
console.log(o);
