# SIX

Author: Martin Kleppe ([@aemkei](https://twitter.com/aemkei) / [aem1k.com](http://aem1k.com))

[JSFuck](http://www.jsfuck.com/) is an esoteric and educational programming style based on the atomic parts of JavaScript. It uses only six different characters to write and execute code: `(`,`)`,`+`,`[`,`]`and `!`.

The program that runs here is a simple:

```
console.error(6)
```

But written without using any alpha numeric characters.

I created the JSFuck website about [six years ago](https://en.wikipedia.org/wiki/JSFuck#cite_note-9) especially for the browser environment. Unfortunately the generated output is quite big and allows very limited input when we want to stay below the IOJCC [size limit](https://iojcc.org/rules/) of 2048 bytes.


Note: The obfuscated output of `console.log(6)` was bigger (2102 bytes) than `console.error(6)` (1570 bytes), because the char `g` is [harder](https://github.com/aemkei/jsfuck/blob/master/output.txt#L72) to obfuscate. Also, the underlying converter here is optimized for Node + ES6 and produces output that is shorter than the online version which gives some space for a formatted input.






