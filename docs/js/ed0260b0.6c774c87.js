(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ed0260b0"],{"49b1":function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"q-pa-md row justify-around"},[o("my-component",{attrs:{"bg-color":e.bgColor}})],1)},l=[],n=o("2b0e"),a=o("dda6"),i=n["a"].extend({name:"my-component",mixins:[a["a"]],props:{bgColor:String},data:function(){return{}},render:function(e){return e("div",this.setBackgroundColor(this.bgColor,{style:{width:"200px",height:"200px"}}))}}),s={components:{MyComponent:i},data:function(){return{bgColor:"#FF0000"}}},d=s,u=o("2877"),c=Object(u["a"])(d,t,l,!1,null,null,null);r["default"]=c.exports},dda6:function(e,r,o){"use strict";o.d(r,"a",function(){return u}),o.d(r,"b",function(){return c});var t=o("2b0e");const l=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];function n(e){return!!e&&l.includes(e.toLowerCase())}function a(e){return!!e&&(!!e.match(/^(#|(rgb|hsl)a?\()/)||n(e))}function i(e){return!!e&&e.startsWith("--")}function s(e,r="black"){return void 0===e&&void 0!==r?s(r):a(e)?e:d(e,r)}function d(e,r){const o=i(e)?e:`--q-color-${e}`;return`var(${o}, '${r}')`}const u=t["a"].extend({name:"colorize",props:{color:String},methods:{__isValidCssColor(e){return a(e)||i(e)},setBothColors(e,r,o={}){return this.setTextColor(e,this.setBackgroundColor(r,o))},setBackgroundColor(e,r={}){if(this.__isValidCssColor(e)){const o=s(e);r.style={...r.style,"background-color":`${o}`,"border-color":`${o}`}}else if(e){const o=e.toString().trim();r.class={...r.class,["bg-"+o]:!0}}return r},setTextColor(e,r={}){if(this.__isValidCssColor(e)){const o=s(e);r.style={...r.style,color:`${o}`,"caret-color":`${o}`}}else if(e){const o=e.toString().trim();r.class={...r.class,["text-"+o]:!0}}return r}}}),c=t["a"].extend({name:"theme",props:{theme:{type:Object,default:()=>{}},enableTheme:Boolean},methods:{useDefaultTheme(e,r,o={}){return o},getThemeColors(e=[]){const r=new Map;return!0===this.enableTheme&&void 0!==this.theme&&e.forEach(e=>{r.set(e,this.theme[e])}),r}}})}}]);