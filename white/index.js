// A="";T=!A+A;L=!T+A;O=A+{};M='"';t=T[0];r=T[1];c=O[5];n=(T.L+O)[1];u=T[2];o=O[1];s=L[3];e=T[3];a=L[1];p="\\160";K=r+e+t+u+r+n+" ";X=T[P=c+o+n+s+t+r+u+c+t+o+r][P];X(X(K+M+X(K+X(K+M+e+s+c+a+p+e+"(XXX)."+r+e+p+"\\154"+a+c+e+"(/..(.)..(.)/g,'\\\\\\\\\\170$1$2')"+M)())()+M)())()

A = ""                    // ""

T = !A + A                // "true"
L = !T + A                // "false"
O = A + {}                // "[object Object]"

M = '"'

var a = "123";

a();

t = T[0]                  // t = "true"[0]
r = T[1]                  // r = "true"[1]

c = O[5]                  // c = "[object Object]"[5]
n = (T.L + O)[1]          // n = "undefined[object Object]"[1]
u = T[2]                  // u = "true"[2]
o = O[1]                  // o = "[object Object]"[1]
s = L[3]                  // s = "false"[3]
e = T[3]                  // e = "true"[3]
a = L[1]

p = "\\160"

K = r+e+t+u+r+n + " "

X = T[
  P = c+o+n+s+t+r+u+c+t+o+r
][P]

X(
  X(
   K + M +
    X(
      K +
      X(
        K + M +
        e+s+c+a+p+e+
        "('')." +
        r+e+p+"\\154"+a+c+e+      // replace
        "(/..(.)..(.)/\\147,'\\\\\\\\\\170$1$2')" +
        M
      )()
    )()
    + M
 )()
)()