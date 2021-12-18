### 1. Source Code (With Comments)

```js
setInterval(              // main loop
  _ => {
    for (
      Y = y,              // loop through columns
      x = 80;             // 80 chars width
      x -= 2;             // move cursor by 2 chars
    )
      for (
        Y = (
          Y + x * x + 9   // get pseudo random Y value
        ) % 27,           // limit to 27 rows
        p(                // render first char
          x,
          Y,
          (
            X = "\33["    // ANSI escape character
          ) +

          `37m${          // white color
            C(y * x)      // pseudo random char
          }`
        ),
        o = 7;            // fade out 7 steps
        --o;
      )
        p(                // render column specific char
          x,              // use current X position
          Y - o,          // move to previous line
          X + `38;5;${    // use 256 color palette
            52 - 6 * o    // fade out green color
          }m${
            C((x*7))      // row specific Kanji
          }`
        );
    y++
  },
  y = 99,                 // update every 99 ms
  C = _ => String         // function to return Kanji
    .fromCharCode(
      12450 + _ % 32
    ),
  p = ((x, y, c) =>
    x < 21 &&             // render only the 21st lines
    console.log(          // log the output
      X + `40m${          // use black background
        X
      }${
        y                 // move to row
      };${
        x                 // move to column
      }H${
        c                 // render given char
      }`)
    )
)
```

### 2. Minify Code (No Whitespace)

```js
setInterval(_=>{for(Y=y,x=80;x-=2;)for(Y=(Y+x*x+9)%30,p(x,Y,(X="\33[")+
`37m${C(y*x)}`),o=7;--o;)p(x,Y-o,X+`38;5;${52-6*o}m${C((x*7))}`);y++},y
=99,C=_=>String.fromCharCode(12450+_%32),p=((o,x,_)=>x<24&&console.log(
X+`40m${X}${x};${o}H${_}`)))
```

### 3. Hex Escaped Code (\x)

```js
eval(
 '\x73\x65\x74\x49\x6E\x74\x65\x72\x76\x61\x6C\x28\x5F\x3D\x3E\x7B\x66'+
 '\x6F\x72\x28\x59\x3D\x79\x2C\x78\x3D\x38\x30\x3B\x78\x2D\x3D\x32\x3B'+
 '\x29\x66\x6F\x72\x28\x59\x3D\x28\x59\x2B\x78\x2A\x78\x2B\x39\x29\x25'+
 '\x33\x30\x2C\x70\x28\x78\x2C\x59\x2C\x28\x58\x3D\x22\x5C\x33\x33\x5B'+
 '\x22\x29\x2B\x60\x33\x37\x6D\x24\x7B\x43\x28\x79\x2A\x78\x29\x7D\x60'+
 '\x29\x2C\x6F\x3D\x37\x3B\x2D\x2D\x6F\x3B\x29\x70\x28\x78\x2C\x59\x2D'+
 '\x6F\x2C\x58\x2B\x60\x33\x38\x3B\x35\x3B\x24\x7B\x35\x32\x2D\x36\x2A'+
 '\x6F\x7D\x6D\x24\x7B\x43\x28\x28\x78\x2A\x37\x29\x29\x7D\x60\x29\x3B'+
 '\x79\x2B\x2B\x7D\x2C\x79\x3D\x39\x39\x2C\x43\x3D\x5F\x3D\x3E\x53\x74'+
 '\x72\x69\x6E\x67\x2E\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65'+
 '\x28\x31\x32\x34\x35\x30\x2B\x5F\x25\x33\x32\x29\x2C\x70\x3D\x28\x28'+
 '\x6F\x2C\x78\x2C\x5F\x29\x3D\x3E\x78\x3C\x32\x34\x26\x26\x63\x6F\x6E'+
 '\x73\x6F\x6C\x65\x2E\x6C\x6F\x67\x28\x58\x2B\x60\x34\x30\x6D\x24\x7B'+
 '\x58\x7D\x24\x7B\x78\x7D\x3B\x24\x7B\x6F\x7D\x48\x24\x7B\x5F\x7D\x60'+
 '\x29\x29\x29\x20'
)
```

### 4. Combine to Higher Code Points (Kanji-like)

```js
encoded = "獥瑉湴敲癡氨弽㹻景爨夽礬砽㠰㭸ⴽ㈻⥦潲⡙㴨夫砪砫㤩┳〬瀨砬夬⡘㴢尳㍛∩⭠㌷洤筃" +
  "⡹⩸⥽怩Ɐ㴷㬭ⵯ㬩瀨砬夭漬堫怳㠻㔻⑻㔲ⴶ⩯絭⑻䌨⡸⨷⤩絠⤻礫⭽ⱹ㴹㤬䌽弽㹓瑲楮朮晲潭䍨" +
  "慲䍯摥⠱㈴㔰⭟┳㈩Ɒ㴨⡯ⱸⱟ⤽㹸㰲㐦♣潮獯汥⹬潧⡘⭠㐰洤筘紤筸紻⑻潽䠤筟絠⤩⤠"

decoded = escape(encoded)     // "%u7365%u7449..."
  .replace(/%./g,'')          // remove "%u": "73657449..."
  .replace(/(..)/g,'\\x$1');  // add hex escape "\x": "\x73\x65\x74\x49..."

unescaped = eval("'"+ decoded + "'");
eval(unescaped);
```

### 5. Wrap with Aurebesh.js (Katakana)

```js
// basic characters
ぁ="",お=!ぁ+ぁ,ぃ=!お+ぁ,ぅ=ぁ+{},ざ=お[0],ご=お[1],く=ぅ[5],
け=(お.ぃ+ぅ)[1],し=お[2],げ=ぅ[1],さ=ぃ[3],ぐ=お[3],

// Function constructor
が=お[う=く+げ+け+さ+ざ+ご+し+く+ざ+げ+ご][う],

// special character
ぉ=" ",え="\\",ぇ="'",い='"',

// eval script
が(が((あ=ご+ぐ+ざ+し+ご+け+ぉ)+い+が(あ+が(
  // unescape code points
  あ+い+ぐ+さ+く+(ぎ=ぃ[1])+(こ=え+160)+ぐ+"("+ぇ+(
    "獥瑉湴敲癡氨弽㹻景爨夽礬砽㠰㭸ⴽ㈻⥦潲⡙㴨夫砪砫㤩┳〬瀨砬夬⡘㴢尳㍛∩⭠㌷洤筃" +
    "⡹⩸⥽怩Ɐ㴷㬭ⵯ㬩瀨砬夭漬堫怳㠻㔻⑻㔲ⴶ⩯絭⑻䌨⡸⨷⤩絠⤻礫⭽ⱹ㴹㤬䌽弽㹓瑲楮朮晲潭䍨" +
    "慲䍯摥⠱㈴㔰⭟┳㈩Ɒ㴨⡯ⱸⱟ⤽㹸㰲㐦♣潮獯汥⹬潧⡘⭠㐰洤筘紤筸紻⑻潽䠤筟絠⤩⤠"
  )+ぇ+(き=")."+ご+ぐ+こ+(え+154)+ぎ+く+ぐ+"(/")+
  ("%."+(か="/"+え+147+",'")+"'")+
  (き+"(..)"+か+え+え+え+え+え+170+"$1')")+い
)())()+い)())()
```

### 6. Minify Asian Code (Katakana + Pseudo Kanji)

```js
ぁ="",お=!ぁ+ぁ,ぃ=!お+ぁ,ぅ=ぁ+{},ざ=お[0],ご=お[1],く=ぅ[5],け=(お.ぃ
+ぅ)[1],し=お[2],げ=ぅ[1],さ=ぃ[3],ぐ=お[3],が=お[う=く+げ+け+さ+ざ+ご+
し+く+ざ+げ+ご][う],ぉ=" ",え="\\",ぇ="'",い='"',が(が((あ=ご+ぐ+ざ+し+
ご+け+ぉ)+い+が(あ+が(あ+い+ぐ+さ+く+(ぎ=ぃ[1])+(こ=え+160)+ぐ+"("+ぇ+(
"獥瑉湴敲癡氨弽㹻景爨夽礬砽㠰㭸ⴽ㈻⥦潲⡙㴨夫砪砫㤩┳〬瀨砬夬⡘㴢尳㍛∩⭠㌷洤筃"+
"⡹⩸⥽怩Ɐ㴷㬭ⵯ㬩瀨砬夭漬堫怳㠻㔻⑻㔲ⴶ⩯絭⑻䌨⡸⨷⤩絠⤻礫⭽ⱹ㴹㤬䌽弽㹓瑲楮朮晲潭䍨"+
"慲䍯摥⠱㈴㔰⭟┳㈩Ɒ㴨⡯ⱸⱟ⤽㹸㰲㐦♣潮獯汥⹬潧⡘⭠㐰洤筘紤筸紻⑻潽䠤筟絠⤩⤠")+ぇ+
(き=")."+ご+ぐ+こ+(え+154)+ぎ+く+ぐ+"(/")+("%."+(か="/"+え+147+",'")+
"'")+(き+"(..)"+か+え+え+え+え+え+170+"$1')")+い)())()+い)())()
```

### 7. Format Output to Columns (Whitespace)

```
  ぁ="",お       =!ぁ+ぁ,         ぃ=!お+ぁ        ,ぅ=ぁ+{       },ざ=お[
  0],ご=お        [1],く=         ぅ[5],け         =(お.ぃ+       ぅ)[1],
  し=お[2]        ,げ=ぅ[1        ],さ=ぃ[         3],ぐ=お       [3],が=
  お[う=く        +げ+け+さ        +ざ+ご+し        +く+ざ+げ      +ご][う],
  ぉ=" ",え       ="\\",ぇ        ="'",い=        '"',が(が       ((あ=ご+
  ぐ+ざ+し+       ご+け+ぉ)        +い+が(あ       +が(あ+い      +ぐ+さ+く
  +(ぎ=ぃ[1       ])+(こ=え       +160)+ぐ         +"("+ぇ+       ("獥瑉湴"
  +"敲癡氨"       +"弽㹻景"+      "爨夽礬砽"       +"㠰㭸ⴽ㈻"      +"⥦潲⡙㴨"
  +"夫砪砫"+      "㤩┳〬瀨"+       "砬夬⡘㴢"+       "尳㍛∩⭠㌷"     +"洤筃⡹⩸⥽"
 +"怩Ɐ㴷㬭"       +"ⵯ㬩瀨砬"      +"夭漬堫"+       "怳㠻㔻⑻"+      "㔲ⴶ⩯絭⑻"
  +"䌨⡸⨷⤩"+      "絠⤻礫⭽ⱹ"       +"㴹㤬䌽弽"      +"㹓瑲楮"+      "朮晲潭䍨"+
 "慲䍯摥⠱㈴"      +"㔰⭟┳㈩"+                      "Ɒ㴨⡯ⱸⱟ"+      "⤽㹸㰲㐦"+
  "♣潮獯汥⹬"      +"潧⡘⭠㐰"+                      "洤筘紤筸"+     "紻⑻潽䠤"+
  "筟絠⤩⤠")      +ぇ+(き=[]                       +")."+ご+
  ぐ+こ+(え+     154)+ぎ+く                       +ぐ+"(/")
                 +("%."+(                        か="/"+え+
                 147+",'")                       +"'")+(き+
                 "(..)"+か                        +え+え+え+
                 え+え+170
                 +"$1')")+
                 い)())()+
                 い)())(7)
```