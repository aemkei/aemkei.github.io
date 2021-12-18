terser --compress --mangle --toplevel -- index.js | \
sed -e "s/const//" >\
output.js

cat output.js
wc -c output.js