(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[502],{4843:function(e,t,n){"use strict";n.r(t);var r=n(6540),o=n(1015),u=n(249),a=n.n(u),i=n(3673),f=n(7859),l=n(7182);const c=f.default.main.withConfig({displayName:"tag__StyledTagsContainer",componentId:"sc-12nytmj-0"})(["max-width:1000px;a{",";}h1{",";margin-bottom:50px;a{font-size:var(--fz-lg);font-weight:400;}}ul{li{font-size:24px;h2{font-size:inherit;margin:0;a{color:var(--light-slate);}}.subtitle{color:var(--slate);font-size:var(--fz-sm);.tag{margin-right:10px;}}}}"],(e=>{let{theme:t}=e;return t.mixins.inlineLink}),(e=>{let{theme:t}=e;return t.mixins.flexBetween}));t.default=e=>{let{pageContext:t,data:n,location:u}=e;const{tag:f}=t,{edges:s}=n.allMarkdownRemark;return r.createElement(l.PE,{location:u},r.createElement(i.m,{title:`Tagged: #${f}`}),r.createElement(c,null,r.createElement("span",{className:"breadcrumb"},r.createElement("span",{className:"arrow"},"←"),r.createElement(o.Link,{to:"/pensieve"},"All memories")),r.createElement("h1",null,r.createElement("span",null,"#",f),r.createElement("span",null,r.createElement(o.Link,{to:"/pensieve/tags"},"View all tags"))),r.createElement("ul",{className:"fancy-list"},s.map((e=>{let{node:t}=e;const{title:n,slug:u,date:i,tags:f}=t.frontmatter;return r.createElement("li",{key:u},r.createElement("h2",null,r.createElement(o.Link,{to:u},n)),r.createElement("p",{className:"subtitle"},r.createElement("time",null,new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})),r.createElement("span",null," — "),f&&f.length>0&&f.map(((e,t)=>r.createElement(o.Link,{key:t,to:`/pensieve/tags/${a()(e)}/`,className:"tag"},"#",e)))))})))))}},1873:function(e,t,n){var r=n(9325).Symbol;e.exports=r},4932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},882:function(e){e.exports=function(e,t,n,r){var o=-1,u=null==e?0:e.length;for(r&&u&&(n=e[++o]);++o<u;)n=t(n,e[o],o,e);return n}},1733:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},2552:function(e,t,n){var r=n(1873),o=n(659),u=n(9350),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):u(e)}},4552:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},7556:function(e,t,n){var r=n(1873),o=n(4932),u=n(6449),a=n(4394),i=r?r.prototype:void 0,f=i?i.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return o(t,e)+"";if(a(t))return f?f.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}},5539:function(e,t,n){var r=n(882),o=n(828),u=n(6645),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(u(o(t).replace(a,"")),e,"")}}},4647:function(e,t,n){var r=n(4552)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},4840:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},659:function(e,t,n){var r=n(1873),o=Object.prototype,u=o.hasOwnProperty,a=o.toString,i=r?r.toStringTag:void 0;e.exports=function(e){var t=u.call(e,i),n=e[i];try{e[i]=void 0;var r=!0}catch(f){}var o=a.call(e);return r&&(t?e[i]=n:delete e[i]),o}},5434:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},9350:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:function(e,t,n){var r=n(4840),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();e.exports=u},2225:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",o="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+u+"]",i="\\d+",f="["+n+"]",l="["+r+"]",c="[^"+t+u+i+n+r+o+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+o+"]",d="(?:"+l+"|"+c+")",m="(?:"+p+"|"+c+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",E="[\\ufe0e\\ufe0f]?",h=E+b+("(?:\\u200d(?:"+["[^"+t+"]",s,x].join("|")+")"+E+b+")*"),y="(?:"+[f,s,x].join("|")+")"+h,j=RegExp([p+"?"+l+"+"+g+"(?="+[a,p,"$"].join("|")+")",m+"+"+v+"(?="+[a,p+d,"$"].join("|")+")",p+"?"+d+"+"+g,p+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,y].join("|"),"g");e.exports=function(e){return e.match(j)||[]}},828:function(e,t,n){var r=n(4647),o=n(3222),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(u,r).replace(a,"")}},6449:function(e){var t=Array.isArray;e.exports=t},346:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},4394:function(e,t,n){var r=n(2552),o=n(346);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},249:function(e,t,n){var r=n(5539)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},3222:function(e,t,n){var r=n(7556);e.exports=function(e){return null==e?"":r(e)}},6645:function(e,t,n){var r=n(1733),o=n(5434),u=n(3222),a=n(2225);e.exports=function(e,t,n){return e=u(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---src-templates-tag-js-29b1f21a38ca37ee61e3.js.map