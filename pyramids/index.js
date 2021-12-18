A = ''              // empty string
B = !A + A          // "true"
C = !B + A          // "false"
D = A + {}          // "[object Object]"
E = B[A++]          // "t" = "true"[0]
F = B[G = A]        // "r" = "true"[1]
H = ++G + A         // 2, 3
I = D[G + H]        // "c"

B[
  I +=              // "c"
    D[A] +          // "o" = "object"[0]
    (B.C+D)[A] +    // "n" = "undefined"[1]
    C[H] +          // "s" = "false"[3]
    E +             // "t"
    F +             // "r"
    B[G] +          // "u" = "true"[2]
    I +             // "c" = "[object]"[5]
    E +             // "t"
    D[A] +          // "o" = "[object]"[1]
    F               // "r"
][
  I                 // "constructor"
](
  C[A] +            //  "a"
  C[G] +            //  "l"
  B[H] +            //  "e"
  F +               //  "r"
  E +               //  "t"
  "(A)"             // "(1)"
)()