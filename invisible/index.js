with(invisible()){
  // code as binaries where 0=o, 1=i
  oooiooiooooioioooioioooooiooioioooioioioioooi
}


function invisible() {
  return new Proxy({}, {
    has: function (_, name) {
      console.log(name);
      console.log(name.replace(/o/g, 0))
      return true;
    }
  });
}