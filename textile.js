// [textile-js | https://github.com/GehDoc/textile-js]  Build version: 2.0.112 - 2021-03-07T23:57:48+0100  
 !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("textile",[],t):"object"==typeof exports?exports.textile=t():e.textile=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){var n={},r=e.exports={pattern:{punct:"[!-/:-@\\[\\\\\\]-`{-~]",space:"\\s"},escape:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},collapse:function(e){return e.replace(/(?:#.*?(?:\n|$))/g,"").replace(/\s+/g,"")},expandPatterns:function(e){return e.replace(/\[:\s*(\w+)\s*:\]/g,(function(t,n){var a=r.pattern[n];if(a)return r.expandPatterns(a);throw new Error("Pattern "+t+" not found in "+e)}))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},compile:function(e,t){r.isRegExp(e)&&(1===arguments.length&&(t=(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"")),e=e.source);var a=e+(t||"");if(a in n)return n[a];var s=r.expandPatterns(e);return t&&/x/.test(t)&&(s=r.collapse(s)),t&&/s/.test(t)&&(s=s.replace(/([^\\])\./g,"$1[^\\0]")),t=(t||"").replace(/[^gim]/g,""),n[a]=new RegExp(s,t)}}},function(e,t){e.exports=function(e){var t,n=String(e),r=0,a={index:function(){return r},save:function(){return t=r,a},getSlot:function(){return t||0},getPos:function(){return r||0},load:function(){return r=t,e=n.slice(r),a},advance:function(t){return r+="string"==typeof t?t.length:t,e=n.slice(r)},skipWS:function(){var t=/^\s+/.exec(e);return t?(r+=t[0].length,e=n.slice(r),t[0]):""},lookbehind:function(e){return e=null==e?1:e,n.slice(r-e,r)},startsWith:function(t){return e.substring(0,t.length)===t},slice:function(t,n){return null!=n?e.slice(t,n):e.slice(t)},valueOf:function(){return e},toString:function(){return e}};return a}},function(e,t){var n=/^\(([^()\n]+)\)/,r=/^(\(+)/,a=/^(\)+)/,s=/^(<>|<|>|=)/,i=/^(<|>|=)/,o=/^(~|\^|-)/,c=/^\\(\d+)/,l=/^\/(\d+)/,u=/^\{([^}]*)\}/,p=/^\s*([^:\s]+)\s*:\s*(.+)\s*$/,f=/^\[([^[\]\n]+)\]/,d={"<":"left","=":"center",">":"right","<>":"justify"},h={"~":"bottom","^":"top","-":"middle"};e.exports={copyAttr:function(e,t){if(e){var n={};for(var r in e)!(r in e)||t&&r in t||(n[r]=e[r]);return n}},parseAttr:function(e,t,g){if((e=String(e))&&"notextile"!==t){var v,m={},x={style:m},b=e,y=/^(?:table|t[dh]|t(?:foot|head|body)|b[qc]|div|notextile|pre|h[1-6]|fn\\d+|p|###)$/.test(t),S="img"===t,$="li"===t,O=!y&&!S&&"a"!==t,L=S?i:s;do{if(v=u.exec(b))v[1].split(";").forEach((function(e){var t=e.match(p);t&&(m[t[1]]=t[2])})),b=b.slice(v[0].length);else if(v=f.exec(b)){var A=b.slice(v[0].length);!A&&O||g&&g===A.slice(0,g.length)?v=null:(x.lang=v[1],b=b.slice(v[0].length))}else if(v=n.exec(b)){var w=b.slice(v[0].length);if(!w&&O||g&&(" "===w[0]||g===w.slice(0,g.length)))v=null;else{var N=v[1].split("#");N[0]&&(x.class=N[0]),N[1]&&(x.id=N[1]),b=w}}else{if(y||$){if(v=r.exec(b)){m["padding-left"]="".concat(v[1].length,"em"),b=b.slice(v[0].length);continue}if(v=a.exec(b)){m["padding-right"]="".concat(v[1].length,"em"),b=b.slice(v[0].length);continue}}if((S||y||$)&&(v=L.exec(b))){var k=d[v[1]];S?x.align=k:m["text-align"]=k,b=b.slice(v[0].length)}else if("td"!==t&&"tr"!==t||!(v=o.exec(b))){if("td"===t){if(v=c.exec(b)){x.colspan=v[1],b=b.slice(v[0].length);continue}if(v=l.exec(b)){x.rowspan=v[1],b=b.slice(v[0].length);continue}}}else m["vertical-align"]=h[v[1]],b=b.slice(v[0].length)}}while(v);var _=[];for(var E in m)_.push("".concat(E,":").concat(m[E]));return _.length?x.style=_.join(";"):delete x.style,b===e?void 0:[e.length-b.length,x]}},addLineNumber:function(e,t,n,r,a,s){return t.showOriginalLineNumber&&n&&(r=r||0,e||(e={}),e["data-line"]=n[r+a],void 0!==s&&(e["data-line-end"]=n[r+s]),t.cssClassOriginalLineNumber&&(e.class=(e.class?e.class+" ":"")+t.cssClassOriginalLineNumber)),e}}},function(e,t,n){var r=n(0),a=n(1);r.pattern.html_id="[a-zA-Z][a-zA-Z\\d:]*",r.pattern.html_attr="(?:\"[^\"]+\"|'[^']+'|[^>\\s]+)";var s=r.compile(/^\s*([^=\s]+)(?:\s*=\s*("[^"]+"|'[^']+'|[^>\s]+))?/),i=r.compile(/^<!--(.+?)-->/,"s"),o=r.compile(/^<\/([:html_id:])([^>]*)>/),c=r.compile(/^<([:html_id:])((?:\s[^=\s/]+(?:\s*=\s*[:html_attr:])?)+)?\s*(\/?)>/),l=r.compile(/^\s*<([:html_id:](?::[a-zA-Z\d]+)*)((?:\s[^=\s/]+(?:\s*=\s*[:html_attr:])?)+)?\s*(\/?)>/),u={area:1,base:1,br:1,col:1,embed:1,hr:1,img:1,input:1,link:1,meta:1,option:1,param:1,wbr:1};function p(){return!0}function f(e){return i.exec(e)}function d(e){return c.exec(e)}function h(e){return o.exec(e)}function g(e){for(var t,n={};t=s.exec(e);)n[t[1]]="string"==typeof t[2]?t[2].replace(/^(["'])(.*)\1$/,"$2"):null,e=e.slice(t[0].length);return n}e.exports={singletons:u,tokenize:function(e,t,n){var r,s=[],i=!1,o=t?function(e){return e in t}:p,c=o,l={},v=0;e=a(String(e));do{if((r=f(e))&&o("!"))s.push({type:"COMMENT",data:r[1],pos:e.index(),src:r[0]}),e.advance(r[0]);else if((r=h(e))&&o(r[1])){var m={type:"CLOSE",tag:r[1],pos:e.index(),src:r[0]};if(e.advance(r[0]),s.push(m),l[m.tag]--,v--,n&&(!v||!l[m.tag]<0||isNaN(l[m.tag])))return s;i&&(i=null,o=c)}else if((r=d(e))&&o(r[1])){var x={type:r[3]||r[1]in u?"SINGLE":"OPEN",tag:r[1],pos:e.index(),src:r[0]};r[2]&&(x.attr=g(r[2])),"script"!==r[1]&&"code"!==r[1]&&"style"!==r[1]||(i=x.tag,o=function(e){return e===i}),"OPEN"===x.type&&(v++,l[x.tag]=(l[x.tag]||0)+1),s.push(x),e.advance(r[0])}else(r=/([^<]+|[^\0])/.exec(e))&&s.push({type:"TEXT",data:r[0],pos:e.index(),src:r[0]}),e.advance(r&&r[0].length||1)}while(e.valueOf());return s},parseHtml:function(e,t){for(var n,r=[],a=[],s=r,i=0;i<e.length;i++)if("COMMENT"===(n=e[i]).type)s.push(["!",n.data]);else if("TEXT"===n.type||"WS"===n.type)s.push(n.data);else if("SINGLE"===n.type)s.push(n.attr?[n.tag,n.attr]:[n.tag]);else if("OPEN"===n.type){var o=n.attr?[n.tag,n.attr]:[n.tag];s.push(o),a.push(o),s=o}else if("CLOSE"===n.type){if(a.length)for(var c=a.length-1;c>=0;c--){if(a[c][0]===n.tag){a.splice(c),s=a[a.length-1]||r;break}}if(!a.length&&t)return r.sourceLength=n.pos+n.src.length,r}return r.sourceLength=n?n.pos+n.src.length:0,r},parseHtmlAttr:g,testCloseTag:h,testOpenTagBlock:function(e){return l.exec(e)},testOpenTag:d,testComment:f}},function(e,t,n){var r=n(1),a=n(9),s=n(0),i=n(12),o=n(2),c=o.parseAttr,l=o.addLineNumber,u=n(13).parseGlyph,p=n(3),f=p.parseHtml,d=p.parseHtmlAttr,h=p.tokenize,g=p.singletons,v=p.testComment,m=p.testOpenTag,x=n(5),b=x.ucaps,y=x.txattr,S=x.txcite;s.pattern.txattr=y,s.pattern.txcite=S,s.pattern.ucaps=b;var $={"*":"strong","**":"b","??":"cite",_:"em",__:"i","-":"del","%":"span","+":"ins","~":"sub","^":"sup","@":"code"},O=/^([[{]?)(__?|\*\*?|\?\?|[-+^~@%])/,L=s.compile(/^!(?!\s)([:txattr:](?:\.[^\n\S]|\.(?:[^./]))?)([^!\s]+?) ?(?:\(((?:[^()]|\([^()]+\))+)\))?!(?::([^\s]+?(?=[!-.:-@[\\\]-`{-~](?:$|\s)|\s|$)))?/),A=s.compile(/^\[!(?!\s)([:txattr:](?:\.[^\n\S]|\.(?:[^./]))?)([^!\s]+?) ?(?:\(((?:[^()]|\([^()]+\))+)\))?!(?::([^\s]+?(?=[!-.:-@[\\\]-`{-~](?:$|\s)|\s|$)))?\]/),w=s.compile(/^((?!TM\)|tm\))[[:ucaps:]](?:[[:ucaps:]\d]{1,}(?=\()|[[:ucaps:]\d]{2,}))(?:\((.*?)\))?(?=\W|$)/),N=s.compile(/^"(?!\s)((?:[^"]|"(?![\s:])[^\n"]+"(?!:))+)"[:txcite:]/),k=/^\["([^\n]+?)":((?:\[[a-z0-9]*\]|[^\]])+)\]/,_=/\s*\(((?:\([^()]*\)|[^()])+)\)$/,E=/^\[(\d+)(!?)\]/;t.parsePhrase=function e(t,n,o,p){t=r(t);var x,b,y=a();do{if(t.save(),t.startsWith("\r\n")&&t.advance(1),t.startsWith("\n"))t.advance(1),t.startsWith(" ")?t.advance(1):n.breaks&&y.add(["br"]),y.add("\n");else if(x=/^==(.*?)==/.exec(t))t.advance(x[0]),y.add(x[1]);else{var S=t.getPos(),P=t.lookbehind(1),T=!P||/^[\s<>.,"'?!;:()[\]%{}]$/.test(P);if((x=O.exec(t))&&(T||x[1])){t.advance(x[0]);var j=x[2],C=x[1],M=$[j],W="code"===M;(b=!W&&c(t,M,j))&&(t.advance(b[0]),b=b[1]);var z=void 0,F=void 0;if("["===C)z="^(.*?)",F="(?:])";else if("{"===C)z="^(.*?)",F="(?:})";else{var H=s.escape(j.charAt(0));z=W?"^(\\S+|\\S+.*?\\S)":"^([^\\s".concat(H,"]+|[^\\s").concat(H,"].*?\\S(").concat(H,"*))"),F="(?=$|[\\s.,\"'!?;:()«»„“”‚‘’<>])"}if((x=s.compile("".concat(z,"(").concat(s.escape(j),")").concat(F)).exec(t))&&x[1]){var Z=t.getPos();t.advance(x[0]),W?y.add([M,x[1]]):y.add([M,b].concat(e(x[1],n,o,p+Z)));continue}t.load()}if((x=L.exec(t))||(x=A.exec(t))){t.advance(x[0]);var q=(b=x[1]&&c(x[1],"img"))?b[1]:{src:""},R=["img",i(q,n.showOriginalLineNumber?l({},n,o,p,S):void 0)];q.src=x[2],q.alt=x[3]?q.title=x[3]:"",x[4]&&(R=["a",{href:x[4]},R]),y.add(R)}else if(x=v(t)){var D=["!"];n.showOriginalLineNumber&&D.push(l({},n,o,p,t.getSlot())),D.push(x[1]),y.add(D),t.advance(x[0])}else{if(x=m(t)){t.advance(x[0]);var I=t.getPos(),G=x[1],B=x[3]||x[1]in g,X=[G],U=x[2]?d(x[2]):void 0;if(B){var J=n.showOriginalLineNumber?l({},n,o,p,S):void 0;U?X.push(i(U,J)):J&&X.push(J),y.add(X).add(t.skipWS());continue}if(x=s.compile("^(.*?)(</".concat(G,"\\s*>)"),"s").exec(t)){var K=n.showOriginalLineNumber?l({},n,o,p,S,S+(x[0].length>0?x[0].length-1:0)):void 0;if(U?X.push(i(U,K)):K&&X.push(K),t.advance(x[0]),"code"===G)X.push(x[1]);else{if("notextile"===G){y.merge(f(h(x[1])));continue}X=X.concat(e(x[1],n,o,p+I))}y.add(X);continue}t.load()}if((x=E.exec(t))&&/\S/.test(P))t.advance(x[0]),y.add(["sup",{class:"footnote",id:"fnr"+x[1]},"!"===x[2]?x[1]:["a",{href:"#fn"+x[1]},x[1]]]);else if(x=w.exec(t)){t.advance(x[0]);var Q=["span",{class:"caps"},x[1]];x[2]&&(Q=["acronym",{title:x[2]},Q]),y.add(Q)}else if(T&&(x=N.exec(t))||(x=k.exec(t))){t.advance(x[0]);var V=x[1].match(_),Y=V?x[1].slice(0,x[1].length-V[0].length):x[1];(b=c(Y,"a"))?(Y=Y.slice(b[0]),b=b[1]):b={},V&&!Y&&(Y=V[0],V=""),b.href=x[2],V&&(b.title=V[1]),"$"===Y&&(Y=b.href.replace(/^(https?:\/\/|ftps?:\/\/|mailto:)/,"")),y.add(["a",b].concat(e(Y.replace(/^(\.?\s*)/,""),n,o,p+t.getSlot())))}else(x=/([a-zA-Z0-9,.':]+|[ \f\r\t\v\xA0\u2028\u2029]+|[^\0])/.exec(t))&&y.add(x[0]),t.advance(x&&x[0].length||1)}}}while(t.valueOf());return y.get().map(u)}},function(e,t){t.txblocks="(?:b[qc]|div|notextile|pre|h[1-6]|fn\\d+|p|###)",t.ucaps="A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾⱿꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞠꞢꞤꞦꞨꞪ",t.txcite=":((?:[^\\s()]|\\([^\\s()]+\\)|[()])+?)(?=[!-\\.:-@\\[\\\\\\]-`{-~]+(?:$|\\s)|$|\\s)";var n=t.attr_class="\\([^\\)]+\\)",r=t.attr_style="\\{[^\\}]+\\}",a=t.attr_lang="\\[[^\\[\\]]+\\]",s=t.attr_align="(?:<>|<|>|=)",i=t.attr_pad="[\\(\\)]+",o=t.txattr="(?:".concat(n,"|").concat(r,"|").concat(a,"|").concat(s,"|").concat(i,")*");t.txlisthd="[\\t ]*(\\*|\\#(?:_|\\d+)?)".concat(o,"(?: +\\S|\\.\\s*(?=\\S|\\n))"),t.txlisthd2="[\\t ]*[\\#\\*]*(\\*|\\#(?:_|\\d+)?)".concat(o,"(?: +\\S|\\.\\s*(?=\\S|\\n))")},function(e,t){e.exports=function(e,t){if(t)for(var n in t)e[n]=t[n];return e}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=n(3).singletons;function s(e,t){return e.replace(/&(?!(#\d{2,}|#x[\da-fA-F]{2,}|[a-zA-Z][a-zA-Z1-4]{1,6});)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,t?"&quot;":'"').replace(/'/g,t?"&#39;":"'")}function i(e){if(!function(e){return Array.isArray(e)&&"string"==typeof e[0]}(e))throw new Error("Not a jsonML node");return"object"===r(t=e[1])&&!Array.isArray(t);var t}e.exports={reIndent:function e(t,n){return n?t.map((function(t){if(/^\n\t+/.test(t))if(n<0)t=t.slice(0,n);else for(var r=0;r<n;r++)t+="\t";else if(Array.isArray(t))return e(t,n);return t})):t},toHTML:function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,c=void 0===i.shouldEscape||i.shouldEscape,l=i.dontEscapeContentForTags||[];if("string"==typeof(t=t.concat()))return c?s(t):t;var u=t.shift(),p={},f="",d=[];for(t.length&&"object"===r(t[0])&&!Array.isArray(t[0])&&(p=t.shift());t.length;)d.push(e(t.shift(),n,{dontEscapeContentForTags:l,shouldEscape:c&&!l.includes(u)}));var h=d.join("");for(var g in Array.isArray(n)&&n.forEach((function(e){h=e(u,p,h,o)})),p)f+=null==p[g]?" ".concat(g):" ".concat(g,'="').concat(s(String(p[g]),!0),'"');return"!"===u?"\x3c!--".concat(h,"--\x3e"):u in a||u.indexOf(":")>-1&&!h.length?"<".concat(u).concat(f," />"):"<".concat(u).concat(f,">").concat(h,"</").concat(u,">")},escape:s,applyHooks:function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(Array.isArray(t)&&Array.isArray(n)&&n.length){for(var s=+r||0,i=0,o=n.length;i<o;i++){var c=n[i];c[0](t,c[1],s,a)}s++;for(var l=0,u=t.length;l<u;l++)Array.isArray(t[l])&&e(t[l],n,s,a)}return t},addAttributes:function(e,t){if(i(e))return Object.assign(e[1],t);var n=Object.assign({},t);return e.splice(1,0,n),n}}},function(e,t,n){var r=n(9),a=n(1),s=n(0),i=n(11),o=n(7),c=n(3),l=c.parseHtml,u=c.tokenize,p=c.parseHtmlAttr,f=c.singletons,d=c.testComment,h=c.testOpenTagBlock,g=n(4).parsePhrase,v=n(2),m=v.copyAttr,x=v.parseAttr,b=v.addLineNumber,y=n(14),S=y.testList,$=y.parseList,O=n(15),L=O.testDefList,A=O.parseDefList,w=n(16),N=w.testTable,k=w.parseTable,_=n(5),E=_.txblocks,P=_.txlisthd,T=_.txattr;s.pattern.txblocks=E,s.pattern.txlisthd=P,s.pattern.txattr=T;var j={p:0,hr:0,ul:1,ol:0,li:0,div:1,pre:0,object:1,script:0,noscript:0,blockquote:1,notextile:1},C=s.compile(/^([:txblocks:])/),M=s.compile(/^(.*?)($|\r?\n(?=[:txlisthd:])|\r?\n(?:\s*\n|$)+)/,"s"),W=s.compile(/^(.*?)($|\r?\n(?=[:txlisthd:])|\r?\n+(?=[:txblocks:][:txattr:]\.))/,"s"),z=s.compile(/^(.*?)($|\r?\n(?:\s*\n|$)+)/,"s"),F=s.compile(/^(.*?)($|\r?\n+(?=[:txblocks:][:txattr:]\.))/,"s"),H=/^(---+|\*\*\*+|___+)(\r?\n\s+|$)/,Z=s.compile(/^\[([^\]]+)\]((?:https?:\/\/|\/)\S+)(?:\s*\n|$)/),q=/^fn\d+$/,R=/^( *\r?\n)+/,D=Object.prototype.hasOwnProperty;function I(e){for(var t=1;t<(arguments.length<=1?0:arguments.length-1);t++){var n=t+1<1||arguments.length<=t+1?void 0:arguments[t+1];if(null!=n)for(var r in n)D.call(n,r)&&(e[r]=n[r])}return e}function G(e,t,n,r,a,s,i){t=t||"p";var o=[];return e.split(/(?:\r?\n){2,}/).forEach((function(e,c){if("p"===t&&/^\s/.test(e)){var l=0;if(a.showOriginalLineNumber){var u=e.match(/^(\r?\n|\t| )*/g);u&&u[0]&&(l+=u[0].length)}e=e.replace(/\r?\n[\t ]/g," ").trim(),o=o.concat(g(e,a,s,i+l))}else r&&c&&o.push(r),o.push(n?[t,n].concat(g(e,a,s,i)):[t].concat(g(e,a,s,i)))})),o}t.parseFlow=function e(t,n,s,c){for(var v,y,O=r(),w=function(e,t,n){if(t.showOriginalLineNumber){n=n||0;var r=e.match(R);return r&&r[0]&&(n+=(r[0].match(/\n/g)||[]).length),n}return 0}(t,n,s),_=function(e,t,n){if(t.showOriginalLineNumber){var r=[],a=e.toString();for(var s in a)r[s]=n,"\n"===a[s]&&n++;return r}}(t=a(t.replace(R,"")),n,w);t.valueOf();)if(t.save(),y=Z.exec(t))v||(v={}),t.advance(y[0]),v[y[1]]=y[2];else{if(O.linebreak(),y=C.exec(t)){t.advance(y[0]);var E=y[0],P=x(t,E);if(P&&(t.advance(P[0]),P=P[1]),P=b(P,n,_,0,t.getSlot()),y=/^\.(\.?)(?:\s|(?=:))/.exec(t)){var T=!!y[1],D=T?W:M;if("bc"!==E&&"pre"!==E||(D=T?F:z),y=D.exec(t.advance(y[0])),t.advance(y[0]),"bq"===E){var B=y[1];(y=/^:(\S+)\s+/.exec(B))&&(P||(P={}),P.cite=y[1],B=B.slice(y[0].length));var X=G(B,"p",m(P,{cite:1,id:1}),"\n",n,t.getSlot());O.add(["blockquote",P,"\n"].concat(X).concat(["\n"]))}else if("bc"===E){var U=P?m(P,{id:1}):null;O.add(["pre",P,U?["code",U,y[1]]:["code",y[1]]])}else if("notextile"===E)O.merge(l(u(y[1])));else if("###"===E);else if("pre"===E)O.add(["pre",P,y[1]]);else if(q.test(E)){var J=E.replace(/\D+/g,"");P||(P={}),P.class=(P.class?P.class+" ":"")+"footnote",P.id="fn"+J,O.add(["p",P,["a",{href:"#fnr"+J},["sup",J]]," "].concat(g(y[1],n,_,t.getSlot())))}else O.merge(G(y[1],E,P,"\n",n,_,t.getSlot()));continue}t.load()}if(y=d(t)){var K=["!"];n.showOriginalLineNumber&&K.push(b({},n,_,0,t.getSlot())),K.push(y[1]),O.add(K),t.advance(y[0]+(/(?:\s*\n+)+/.exec(t)||[])[0])}else{if(y=h(t)){var Q=y[1];if(Q in j)if(y[3]||Q in f){var V=t.getSlot();if(t.advance(y[0]),/^\s*(\n|$)/.test(t)){var Y=[Q];n.showOriginalLineNumber?Y.push(b(y[2]?p(y[2]):{},n,_,0,V)):y[2]&&Y.push(p(y[2])),O.add(Y),t.skipWS();continue}}else if("pre"===Q){var ee=u(t,{pre:1,code:1},Q);n.showOriginalLineNumber&&(ee[0].attr=b(ee[0].attr,n,_,0,t.getSlot()));var te=l(ee,!0);if(t.load().advance(te.sourceLength),/^\s*(\n|$)/.test(t)){O.merge(te),t.skipWS();continue}}else if("notextile"===Q){for(var ne=u(t,null,Q),re=1;/^\s+$/.test(ne[re].src);)re++;var ae=l(ne.slice(re,-1),!0),se=ne.pop();if(t.load().advance(se.pos+se.src.length),/^\s*(\n|$)/.test(t)){O.merge(ae),t.skipWS();continue}}else{t.skipWS();for(var ie=u(t,null,Q),oe=t.getSlot(),ce=ie.pop(),le=1;ie[le]&&/^[\n\r]+$/.test(ie[le].src);)le++;if(ce.tag===Q){var ue=ie.length>1?t.slice(ie[le].pos,ce.pos):"";if(t.advance(ce.pos+ce.src.length),/^\s*(\n|$)/.test(t)){var pe=[Q];if(n.showOriginalLineNumber?pe.push(b(y[2]?p(y[2]):{},n,_,0,oe,t.getPos()-1)):y[2]&&pe.push(p(y[2])),"script"===Q||"style"===Q)pe.push(ue);else{var fe=ie.length>1?ie[le].pos:0;if(n.showOriginalLineNumber){var de=ue.match(/^\n+/);de&&de[0]&&(fe+=de[0].length)}var he=ue.replace(/^\n+/,"").replace(/\s*$/,""),ge=/\n\r?\n/.test(he)||"ol"===Q||"ul"===Q,ve=ge?e(he,n,_?_[oe+fe]:void 0,c):g(he,I({},n,{breaks:!1}),_,oe+fe);(ge||/^\n/.test(ue))&&pe.push("\n"),(ge||/\s$/.test(ue))&&ve.push("\n"),pe=pe.concat(ve)}O.add(pe),t.skipWS();continue}}}t.load()}if(y=H.exec(t)){var me=["hr"];n.showOriginalLineNumber&&me.push(b({},n,_,0,t.getSlot())),t.advance(y[0]),O.add(me)}else(y=S(t))?(t.advance(y[0]),O.add($(y[0],n,_,t.getSlot()))):(y=L(t))?(t.advance(y[0]),O.add(A(y[0],n,_,t.getSlot(),c))):(y=N(t))?(t.advance(y[0]),O.add(k(y[1],n,_,t.getSlot()))):(y=M.exec(t),O.merge(G(y[1],"p",b({},n,_,0,t.getSlot()),"\n",n,_,t.getSlot())),t.advance(y[0]))}}var xe=v?[[i,v]]:[];return n.hooks&&Array.isArray(n.hooks)&&(xe=xe.concat(n.hooks)),o.applyHooks(O.get(),xe,void 0,c)}},function(e,t){e.exports=function(e){var t=Array.isArray(e)?e:[];return{add:function(e){return"string"==typeof e&&"string"==typeof t[t.length-1]?t[t.length-1]+=e:Array.isArray(e)?t.push(e.filter((function(e){return void 0!==e}))):e&&t.push(e),this},merge:function(e){for(var t=0,n=e.length;t<n;t++)this.add(e[t]);return this},linebreak:function(){t.length&&this.add("\n")},get:function(){return t}}}},function(e,t,n){var r=n(6),a=n(7),s=n(8).parseFlow,i=n(3).parseHtml;function o(e,t,n){return t=r(r({},o.defaults),t||{}),s(e,t,t.lineOffset,n).map((function(e){return a.toHTML(e,t.renderers,{dontEscapeContentForTags:t.dontEscapeContentForTags},n)})).join("")}e.exports=o,o.defaults={breaks:!0,showOriginalLineNumber:!1,lineOffset:0,cssClassOriginalLineNumber:"",hooks:[],renderers:{},dontEscapeContentForTags:[]},o.setOptions=o.setoptions=function(e){return r(o.defaults,e),this},o.parse=o.convert=o,o.html_parser=i,o.tokenize=function(e,t,n){return t=r(r({},o.defaults),t||{}),s(e,t,t.lineOffset,n)},o.jsonml=function(e,t,n){return["html"].concat(o.tokenize(e,t,n))},o.serialize=function(e,t,n){return t=r(r({},o.defaults),t||{}),a.toHTML(e,t.renderers,{dontEscapeContentForTags:t.dontEscapeContentForTags},n)},o.jsonmlUtils=a},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.exports=function(e,t){if(Array.isArray(e)&&"a"===e[0]){var r=e[1];"object"===n(r)&&"href"in r&&r.href in t&&(r.href=t[r.href])}return e}},function(e,t){e.exports=function(e,t){if(t)for(var n in t)e[n]="class"===n?(e[n]?e[n]+" ":"")+t[n]:t[n];return e}},function(e,t,n){var r=n(0),a=/(\w)'(\w)/g,s=/([^-]|^)->/,i=r.compile(/([^\s[(])"(?=$|\s|[:punct:])/g),o=r.compile(/([^\s[(])'(?=$|\s|[:punct:])/g),c=/(\b ?|\s|^)(?:\(C\)|\[C\])/gi,l=/([\d.,]+['"]? ?)x( ?)(?=[\d.,]['"]?)/g,u=r.compile(/(\d*[.,]?\d+)"(?=\s|$|[:punct:])/g),p=/([^.]?)\.{3}/g,f=/(^|[\s\w])--([\s\w]|$)/g,d=/ - /g,h=/"/g,g=/'/g,v=/(\b ?|\s|^)(?:\(R\)|\[R\])/gi,m=r.compile(/(\d*[.,]?\d+)'(?=\s|$|[:punct:])/g),x=/(\b ?|\s|^)(?:\((?:TM|tm)\)|\[(?:TM|tm)\])/g;t.parseGlyph=function(e){return"string"!=typeof e?e:e.replace(s,"$1&#8594;").replace(l,"$1&#215;$2").replace(p,"$1&#8230;").replace(f,"$1&#8212;$2").replace(d," &#8211; ").replace(x,"$1&#8482;").replace(v,"$1&#174;").replace(c,"$1&#169;").replace(u,"$1&#8243;").replace(i,"$1&#8221;").replace(h,"&#8220;").replace(m,"$1&#8242;").replace(a,"$1&#8217;$2").replace(o,"$1&#8217;").replace(g,"&#8216;").replace(/[([]1\/4[\])]/,"&#188;").replace(/[([]1\/2[\])]/,"&#189;").replace(/[([]3\/4[\])]/,"&#190;").replace(/[([]o[\])]/,"&#176;").replace(/[([]\+\/-[\])]/,"&#177;")}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=n(1),s=n(0),i=n(6),o=n(2),c=o.parseAttr,l=o.addLineNumber,u=n(4).parsePhrase,p=n(5),f=p.txlisthd,d=p.txlisthd2;s.pattern.txlisthd=f,s.pattern.txlisthd2=d;var h=s.compile(/^((?:[:txlisthd:][^\0]*?(?:\r?\n|$))+)(\s*\n|$)/,"s"),g=s.compile(/^([#*]+)([^\0]+?)(\n(?=[:txlisthd2:])|$)/,"s");function v(e){for(var t="\n";e--;)t+="\t";return t}e.exports={testList:function(e){return h.exec(e)},parseList:function(e,t,n,s){if(t.showOriginalLineNumber){var o=e.match(/(^|\r?\n)[\t ]+/);o&&o[0]&&(s+=o[0].length)}e=a(e.replace(/(^|\r?\n)[\t ]+/,"$1"));for(var p,f,d,h,m=[],x={},b=t._lst||{},y=0;f=g.exec(e);){var S=["li"],$=f[1].length,O="#"===f[1].substr(-1)?"ol":"ul",L=null,A=void 0,w=void 0,N=void 0,k=void 0;(d=/^(_|\d+)/.exec(f[2]))&&(y=isFinite(d[1])?parseInt(d[1],10):b[$]||x[$]||1,f[2]=f[2].slice(d[1].length)),(N=c(f[2],"li"))&&(f[2]=f[2].slice(N[0]),N=N[1]);var _=l({},t,n,s,e.getPos());if(/^\.\s*$/.test(f[2]))p=N||{},e.advance(f[0]);else{for(;m.length<$;)A=[O,{},v(m.length+1),L=["li"]],(w=m[m.length-1])&&(w.li.push(v(m.length)),w.li.push(A)),m.push({ul:A,li:L,att:0,pbaLineNumber:_}),x[m.length]=1;for(;m.length>$;)(k=m.pop()).ul.push(v(m.length)),1!==k.att||k.ul[3][1].substr||i(k.ul[1],k.ul[3].splice(1,1)[0]);w=m[m.length-1],y&&(w.ul[1].start=y,x[$]=y,y=0),p&&(w.att=9,i(w.ul[1],p),p=null),L||(w.ul.push(v(m.length),S),w.li=S),N?(w.li.push(i(N,_)),w.att++):w.li.push(_),Array.prototype.push.apply(w.li,u(f[2].trim(),t,n,s)),e.advance(f[0]),x[$]=(x[$]||0)+1}}for(t._lst=x;m.length;)(h=m.pop()).ul.push(v(m.length)),1!==h.att||h.ul[3][1].substr||i(h.ul[1],h.ul[3].splice(1,1)[0]),"object"===r(h.ul[3][1])?i(h.ul[3][1],h.pbaLineNumber):h.ul[3].splice(1,0,h.pbaLineNumber);return h.ul}}},function(e,t,n){var r=n(1),a=n(2).addLineNumber,s=/^((?:- (?:[^\n]\n?)+?)+:=(?: *\n[^\0]+?=:(?:\n|$)|(?:[^\0]+?(?:$|\n(?=\n|- )))))+/,i=/^((?:- (?:[^\n]\n?)+?)+):=( *\n[^\0]+?=:\s*(?:\n|$)|(?:[^\0]+?(?:$|\n(?=\n|- ))))/;t.testDefList=function(e){return s.exec(e)},t.parseDefList=function(e,t,s,o,c){if(t.showOriginalLineNumber){var l=e.match(/^\s+/);l&&l[0]&&(o+=l[0].length)}e=r(e.trim());for(var u,p,f,d=n(4).parsePhrase,h=n(8).parseFlow,g=["dl","\n"];f=i.exec(e);){var v=(u=f[1].split(/(?:^|\n)- /))[0].length;u=u.slice(1);var m=[];for(t.showOriginalLineNumber&&(m=f[1].match(/(?:^|\n)- /g).slice(1));u.length;){var x=u.shift();g.push("\t",["dt"].concat(a({},t,s,o,e.getPos()+v),d(x.trim(),t,s,o)),"\n"),t.showOriginalLineNumber&&(v+=x.length,m.length&&(v+=m.shift().length))}if(p=f[2].trim(),t.showOriginalLineNumber){v=f[1].length+2;var b=f[2].match(/^\s+/);b&&b[0]&&(v+=b[0].length)}g.push("\t",["dd"].concat(a({},t,s,o,e.getPos()+v),/=:$/.test(p)?h(p.slice(0,-2).trim(),t,t.showOriginalLineNumber?s[(o||0)+v+e.getPos()]:0,c):d(p,t,s,(o||0)+v+e.getPos())),"\n"),e.advance(f[0])}return g}},function(e,t,n){var r=n(0),a=n(6),s=n(1),i=n(2),o=i.parseAttr,c=i.addLineNumber,l=n(4).parsePhrase,u=n(7).reIndent,p=n(5).txattr;r.pattern.txattr=p;var f=r.compile(/^((?:table[:txattr:]\.(?:\s(.+?))\s*\n)?(?:(?:[:txattr:]\.[^\n\S]*)?\|.*?\|[^\n\S]*(?:\n|$))+)([^\n\S]*\n+)?/,"s"),d=/^table(_?)([^\n]*?)\.(?:[ \t](.+?))?\s*\n/,h=r.compile(/^(\|([~^-][:txattr:])\.\s*\n)?([:txattr:]\.[^\n\S]*)?(\|)(.*?)\|[^\n\S]*(\n|$)/,"s"),g=/^\|=([^\n+]*)\n/,v=/^\|:([^\n+]*)\|[\r\t ]*\n/,m=/^\|([\^\-~])([^\n+]*)\.[ \t\r]*\n/,x={"^":"thead","~":"tfoot","-":"tbody"};function b(e){var t=["colgroup",{}];return e.split("|").forEach((function(e,n){var r,s=n?{}:t[1],i=e.trim();i&&((r=/^\\(\d+)/.exec(i))&&(s.span=+r[1],i=i.slice(r[0].length)),(r=o(i,"col"))&&(a(s,r[1]),i=i.slice(r[0])),(r=/\b\d+\b/.exec(i))&&(s.width=+r[0])),n&&t.push("\n\t\t",["col",s])})),t.concat(["\n\t"])}e.exports={parseColgroup:b,parseTable:function(e,t,n,r){if(t.showOriginalLineNumber){var i=e.match(/^\s+/);i&&i[0]&&(r+=i[0].length)}e=s(e.trim());var p,f,y,S,$,O,L,A,w=[],N={},k=0,_=function(e,t){y=[e,t||{}],w.push(y)};(A=d.exec(e))&&(e.advance(A[0]),(O=o(A[2],"table"))&&a(N,O[1]),A[3]&&(N.summary=A[3])),(A=g.exec(e))&&(f=["caption"],(O=o(A[1],"caption"))&&(f.push(O[1]),A[1]=A[1].slice(O[0])),/\./.test(A[1])?(f.push(A[1].slice(1).replace(/\|\s*$/,"").trim()),k++,e.advance(A[0])):f=null);do{if(A=v.exec(e))p=b(A[1]),k++;else if(A=m.exec(e)){var E=x[A[1]]||"tbody";_(E,(O=o("".concat(A[2]," "),E))&&O[1]),k++}else if(A=h.exec(e)){var P=0+(A[1]?A[1].length:0)+(A[2]?A[2].length:0)+(A[3]?A[3].length:0)+(A[4]?A[4].length:0);y||_("tbody"),S=["tr"],A[3]&&(O=o(A[3],"tr"))?S.push(c(O[1],t,n,r,e.getPos())):S.push(c({},t,n,r,e.getPos())),y.push("\n\t\t",S),$=s(A[5]);do{$.save();var T=$.startsWith("_"),j=[T?"th":"td"];if(T&&$.advance(1),(O=o($,"td"))&&($.advance(O[0]),j.push(O[1])),O||T){var C=/^\.\s*/.exec($);C?$.advance(C[0]):(j=["td"],$.load())}var M=/^(==.*?==|[^|])*/.exec($);j=j.concat(l(M[0],t,n,r+e.getPos()+P+$.getPos())),S.push("\n\t\t\t",j),L="|"===$.valueOf().charAt(M[0].length),$.advance(M[0].length+1)}while(L);S.push("\n\t\t")}A&&e.advance(A[0])}while(A);var W=["table",N];return k?(f&&W.push("\n\t",f),p&&W.push("\n\t",p),w.forEach((function(e){W.push("\n\t",e.concat(["\n\t"]))}))):W=W.concat(u(w[0].slice(2),-1)),W.push("\n"),W},testTable:function(e){return f.exec(e)}}}])}));
//# sourceMappingURL=textile.js.map 