es6-module-macro
================

ES6 Module macro that expands to commonjs

## WIP

This is a work in progress and is really very easily broken but that's the beauty of macros they're personal syntax extensions.

## Sweetjs

This macro can be compiled using [sweetjs](http://sweetjs.org) or you can check it out in the [live editor](http://sweetjs.org/browser/editor.html#macro%20import%20{%0A%09rule%20{%0A%09%09{%20$modules%20%28,%29%20...%20}%20from%20$module:lit;%0A%09}%20=%3E%20{%0A%09%09$%28var%20$modules%20=%20require%28$module%29.$modules;%29%20...%0A%09}%0A}%0A%0Aimport%20{%20support,%20dispatchClick%20}%20from%20%27./utils%27;%0Aimport%20{%20foo%20}%20from%20%27./goo%27;%0A%0Amacro%20export%20{%0A%09rule%20{%0A%09%09{%20$modules%20%28,%29%20...%20};%0A%09}%20=%3E%20{%0A%09%09$%28exports.$modules%20=%20$modules;%29%20...%0A%09}%0A}%0A%0Aexport%20{%20support,%20dispatchClick%20};%0Aexport%20{%20goo%20};).

## License

Copyright 2014, Ryan Seddon  
This content is released under the MIT license  
http://ryanseddon.mit-license.org
