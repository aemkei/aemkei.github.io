z = 1.07;

Z = 1.7490935185097156;
U = 0.338774526e-6;

Z=1.7490935184678901
U=3.402209769e-7

T = -2;
E = 0;

function s(e){
  e && (E=!E);

  H = "";
  z *= 0.9;
  T *= 0.8;

  for (Y = 0; Y < 2; Y+=0.1){
    for (X = 0; X < 2; X+=0.04){
      for (
        x = y = i = 0;
        i < 99 && x*x + y*y <= 99;
        i++
      ){
        t = 2*x*y;
        x = x*x - y*y + z*X - z - Z/(1-T);
        y = t + z*Y - z - U;
      }
      H += "  .+#"[i % 5];
    }
    H += "\n";
  }

  P.innerHTML = H;
  E && setTimeout(s, 99);
}
onclick = s;