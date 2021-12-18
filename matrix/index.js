
a=[];
a.length=40;
setInterval(_=>{
  output="";
  for (y=20;y--;){
    for(x=0;x<a.length;x++){
      output += (x**y*z++)%3 ? "#" : " ";
    }
    output+="\n"
  }

  console.log(output);
},z=9)