!function(t){function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=2)}([function(t,n,e){!function(){"use strict";var n=e(1),i={ele:null,data:null,menuItem:[],init:function(){this.initEle(),this.initEvent()},initEle:function(){for(var t,e,i=0,r=this.data.length;i<r;i++)t=this.data[i],e=n({data:t}),this.menuItem.push(e)},initEvent:function(){}};t.exports=i}()},function(t,n,e){!function(){"use strict";function n(t){t=t||[];var n={ele:null,data:t.data,init:function(){this.initEle(),this.initEvent()},initEle:function(){this.ele=i.make("div","app__menu__item")},initEvent:function(){}};return n.init(),n}var i=e(3);t.exports=n}()},function(t,n,e){!function(){"use strict";e(0);console.log("my app!")}()},function(t,n){!function(){"use strict";var n={make:function(t,n){var e=document.createElement(t);return e.className=n,e}};t.exports=n}()}]);