var output = "";
for (var i=0; i<64; i++) {
  output += ("\\u0" + (768 + i).toString(16).toUpperCase());
}
combined = eval('" ' + output + '"');


// console.log(output);
// console.log(combined);


code = "alert(1)";

codes = code.split("").map(function(x){ return x.charCodeAt(0) - 13; });
output = codes.map(function(x){return x.toString(16); });

output = output.join("")

console.log(output);

unicode = output.replace(/(.)/g, "\\u031$1");

console.log(unicode);


combined = eval('" ' + unicode + '"');

// console.log(codes);
// console.log(output);
// console.log(unicode);

console.log(combined);
