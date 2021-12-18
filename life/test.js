
function assert(a, d, expected){
  result = old(a, d)
  console.log(result == expected, a, d, " ---", result, expected);
}


function old(a, d){
  // return d == 3 | a & d == 2;
  return (a|d)==3;
}


assert(1, 2, 1);
assert(1, 3, 1);
assert(0, 3, 1);

for (var n=0; n<10; n++){
  if (n != 3){
    assert(0, n, 0);
  }
  if (n != 3 && n != 2){
    assert(1, n, 0);
  }

}
