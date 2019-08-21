(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["16f49b2a"],{"0960":function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("hero",[o("div",{staticClass:"q-markdown"},[o("example-title",{attrs:{title:"Colorize Basic"}}),o("example-card",{attrs:{title:"Text",name:"ColorizeColor","tag-parts":n.getTagParts(t("5334").default)}}),o("example-card",{attrs:{title:"Background",name:"ColorizeBackground","tag-parts":n.getTagParts(t("eda9").default)}}),o("example-card",{attrs:{title:"Border",name:"ColorizeBorder","tag-parts":n.getTagParts(t("600a").default)}}),o("example-card",{attrs:{title:"Text, Background and Border",name:"ColorizeBoth","tag-parts":n.getTagParts(t("2175").default)}}),o("example-title",{attrs:{title:"Colorize Advanced"}}),o("q-markdown",[n._v("\nFor all examples below that take an input, you can manually enter any valid color as well. Here are some ideas you can try:\n\n| Color | Type |\n| --- | --- |\n| purple-7 | Quasar color palette |\n| --q-color-green-5 | Quasar css var color |\n| rgb(255, 128, 27) | rgb color |\n| hsl(120, 100%, 50%) | hsl color |\n| coral | CSS named color |\n\n      ")]),o("example-card",{attrs:{title:"Text with Input",name:"ColorizeColorSelection","tag-parts":n.getTagParts(t("a77b").default)}}),o("example-card",{attrs:{title:"Background with Input",name:"ColorizeBackgroundSelection","tag-parts":n.getTagParts(t("6519").default)}}),o("example-card",{attrs:{title:"Border with Input",name:"ColorizeBorderSelection","tag-parts":n.getTagParts(t("6519").default)}}),o("example-card",{attrs:{title:"Text, Background and Border with Input",name:"ColorizeBothSelection","tag-parts":n.getTagParts(t("71b2").default)}}),o("example-title",{attrs:{title:"Theme Basic"}}),o("example-card",{attrs:{title:"Simple Theme",name:"ThemeSimple","tag-parts":n.getTagParts(t("7e0b").default)}}),o("example-title",{attrs:{title:"Theme Advanced"}}),o("example-card",{attrs:{title:"Theme Selection",name:"ThemeSelection","tag-parts":n.getTagParts(t("4f87").default)}}),o("example-card",{attrs:{title:"Theme Quasar Components",name:"ThemeQuasarComponents","tag-parts":n.getTagParts(t("3755").default)}})],1)])},r=[],l=t("2514"),a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:n.slugifiedTitle},on:{click:function(e){return n.copyHeading(n.slugifiedTitle)}}},[n._v(n._s(n.title))])},i=[];t("a481");function s(n){var e=window.location.origin+window.location.pathname+"#"+n,t=document.createElement("textarea");t.className="fixed-top",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function c(n){return encodeURIComponent(String(n).trim().replace(/\s+/g,"-"))}var d={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return c(this.title)}},methods:{copyHeading:s}},m=d,p=t("2877"),u=Object(p["a"])(m,a,i,!1,null,null,null),h=u.exports,b=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:n.slugifiedTitle}},[t("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[t("q-toolbar",[t("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[t("q-toolbar-title",{staticClass:"example-title",staticStyle:{padding:"5px 20px"},on:{click:function(e){return n.copyHeading(n.slugifiedTitle)}}},[t("span",{staticClass:"ellipsis"},[n._v(n._s(n.title))])])],1)],1),t("q-separator"),t("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[t("q-card",[t("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:n.tab,callback:function(e){n.tab=e},expression:"tab"}},[n.parts.template?t("q-tab",{attrs:{name:"template",label:"Template"}}):n._e(),n.parts.script?t("q-tab",{attrs:{name:"script",label:"Script"}}):n._e(),n.parts.style?t("q-tab",{attrs:{name:"style",label:"Style"}}):n._e()],1),t("q-separator"),t("q-tab-panels",{attrs:{animated:""},model:{value:n.tab,callback:function(e){n.tab=e},expression:"tab"}},[n.parts.template?t("q-tab-panel",{attrs:{name:"template"}},[t("q-markdown",{attrs:{src:n.parts.template}})],1):n._e(),n.parts.script?t("q-tab-panel",{attrs:{name:"script"}},[t("q-markdown",{attrs:{src:n.parts.script}})],1):n._e(),n.parts.style?t("q-tab-panel",{attrs:{name:"style"}},[t("q-markdown",{attrs:{src:n.parts.style}})],1):n._e()],1)],1)],1),t("q-separator"),t(n.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},g=[],C=(t("ac6a"),t("cadf"),t("06db"),t("456d"),{name:"ExampleCard",components:{ColorizeColor:function(){return Promise.all([t.e("ecfd915e"),t.e("2d2219f4")]).then(t.bind(null,"caaa"))},ColorizeBackground:function(){return Promise.all([t.e("ecfd915e"),t.e("2d0c264a")]).then(t.bind(null,"49b1"))},ColorizeBorder:function(){return Promise.all([t.e("ecfd915e"),t.e("2d221f94")]).then(t.bind(null,"cd41"))},ColorizeBoth:function(){return Promise.all([t.e("ecfd915e"),t.e("2d0bdf19")]).then(t.bind(null,"2dc4"))},ColorizeColorSelection:function(){return Promise.all([t.e("ecfd915e"),t.e("2d2132cb")]).then(t.bind(null,"ac0c"))},ColorizeBackgroundSelection:function(){return Promise.all([t.e("ecfd915e"),t.e("2d0ced61")]).then(t.bind(null,"60c4"))},ColorizeBorderSelection:function(){return Promise.all([t.e("ecfd915e"),t.e("2d0d2ac7")]).then(t.bind(null,"5a05"))},ColorizeBothSelection:function(){return Promise.all([t.e("ecfd915e"),t.e("2d0e1d38")]).then(t.bind(null,"7ba8"))},ThemeSimple:function(){return Promise.all([t.e("ecfd915e"),t.e("2d222734")]).then(t.bind(null,"cf50"))},ThemeSelection:function(){return Promise.all([t.e("ecfd915e"),t.e("2d0cf34e")]).then(t.bind(null,"6372"))},ThemeQuasarComponents:function(){return Promise.all([t.e("ecfd915e"),t.e("770c0960")]).then(t.bind(null,"c464e"))}},props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return c(this.title)}},methods:{copyHeading:s,updateParts:function(){var n=this;this.parts={},Object.keys(this.tagParts).forEach(function(e){""!==n.tagParts[e]&&(n.parts[e]="```\n"+n.tagParts[e]+"\n```")})}}}),f=C,x=Object(p["a"])(f,b,g,!1,null,null,null),v=x.exports,y=function(n){var e,t={},o=T(n);o&&o.length>0&&(t.template=o);var r=document.createElement("html");return r.innerHTML=n,e=r.getElementsByTagName("script"),e.length>0&&(t.script=e[0].outerHTML),e=r.getElementsByTagName("style"),e.length>0&&(t.style=e[0].outerHTML),t},T=function(n){var e="";if(n&&n.length>0){var t="<template",o="</template>",r=n.indexOf(t),l=n.lastIndexOf(o);r>-1&&l>-1&&(e=n.substring(r,l+o.length))}return e},q={name:"Examples",components:{Hero:l["a"],ExampleTitle:h,ExampleCard:v},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Colorize Basic"),this.addToToc("Text",2),this.addToToc("Background",2),this.addToToc("Border",2),this.addToToc("Text, Background and Border",2),this.addToToc("Colorize Advanced"),this.addToToc("Text with Input",2),this.addToToc("Background with Input",2),this.addToToc("Border with Input",2),this.addToToc("Text, Background and Border with Input",2),this.addToToc("Theme Basic"),this.addToToc("Simple Theme",2),this.addToToc("Theme Advanced"),this.addToToc("Theme Selection",2),this.addToToc("Theme Quasar Components",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(n){this.$store.commit("common/toc",n)}}},methods:{getTagParts:y,addToToc:function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=c(n);this.tempToc.push({children:[],id:t,label:n,level:e})}}},w=q,z=(t("e872"),Object(p["a"])(w,o,r,!1,null,null,null));e["default"]=z.exports},2175:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :color=\"color\"\n      :bg-color=\"bgColor\"\n      :border-color=\"borderColor\"\n      class=\"text-center\"\n    >\n      <div class=\"text-h4\">Some Text</div>\n    </my-component>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { Colorize } from 'quasar-mixin-colorize'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [Colorize],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String,\n    borderColor: String\n  },\n\n  render (h) {\n    return h('div', this.setBorderColor(this.borderColor, this.setBothColors(this.color, this.bgColor, {\n      style: {\n        width: '200px',\n        height: '200px',\n        borderStyle: 'solid',\n        borderWidth: '10px'\n      }\n    })), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      color: '#FFFF00',\n      bgColor: '#FF0000',\n      borderColor: '#00FAFA'\n    }\n  }\n}\n<\/script>\n"},2514:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("section",{staticClass:"page-header"},[t("h1",{staticClass:"project-name"},[n._v("Colorize & Theme")]),t("h2",{staticClass:"project-tagline"}),t("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://github.com/hawkeye64/quasar-mixin-colorize",target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),t("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),t("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),t("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://donate.quasar.dev",target:"_blank",label:"Donate","no-caps":"",flat:""}})],1),t("main",{staticClass:"flex flex-start justify-center inset-shadow"},[t("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),t("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[n._t("default")],2)])])},r=[],l={name:"Hero"},a=l,i=t("2877"),s=Object(i["a"])(a,o,r,!1,null,null,null);e["a"]=s.exports},3755:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div class=\"q-pa-md\">\n    <div class=\"q-pb-md q-gutter-md row justify-around\">\n      <q-toggle\n        class=\"col-12\"\n        v-model=\"enableTheme\"\n        label=\"Enable themes\"\n      />\n      <q-select\n        outlined\n        dense\n        emit-value\n        map-options\n        label=\"Change theme\"\n        v-model=\"theme\"\n        :options=\"themesList\"\n        :disable=\"enableTheme !== true\"\n        class=\"col-12\"\n      />\n    </div>\n    <q-separator />\n    <div class=\"q-pa-md row justify-around\">\n      <my-component\n        :enable-theme=\"enableTheme\"\n        :theme=\"theme\"\n        class=\"text-center\"\n      >\n        <div class=\"text-h4\">Quasar Components</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { Colorize, Theme } from 'quasar-mixin-colorize'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [Colorize, Theme],\n\n  data () {\n    return {\n      radio: 'line',\n      checkbox: true,\n      knob: 70\n    }\n  },\n\n  methods: {\n    __renderRadio (h, type, label) {\n      let colors = new Map(), color, bgColor\n      let updateColors = this.useDefaultTheme\n      if (this.enableTheme === true) {\n        color = 'color'\n        bgColor = 'bgColor'\n        colors = this.getThemeColors([color, bgColor])\n        updateColors = this.setBothColors\n      }\n\n      return h('q-radio', updateColors(colors.get(color), colors.get(bgColor), {\n        props: {\n          value: this.radio,\n          val: type,\n          label: label,\n          dark: (this.enableTheme === true && this.theme && 'color' in this.theme),\n          color: this.enableTheme === true && this.theme && 'color' in this.theme ? this.theme.color : void 0\n        },\n        on: {\n          'input': (v) => { this.radio = v }\n        }\n      }))\n    },\n\n    __renderCheckbox (h) {\n      let colors = new Map(), color, bgColor\n      let updateColors = this.useDefaultTheme\n      if (this.enableTheme === true) {\n        color = 'color'\n        bgColor = 'bgColor'\n        colors = this.getThemeColors([color, bgColor])\n        updateColors = this.setBothColors\n      }\n\n      return h('q-checkbox', updateColors(colors.get(color), colors.get(bgColor), {\n        props: {\n          value: this.checkbox,\n          dark: (this.enableTheme === true && this.theme && 'color' in this.theme),\n          color: this.enableTheme === true && this.theme && 'color' in this.theme ? this.theme.color : void 0\n        },\n        on: {\n          'input': (v) => { this.checkbox = v }\n        }\n      }))\n    },\n\n    __renderKnob (h) {\n      let colors = new Map(), color, bgColor\n      let updateColors = this.useDefaultTheme\n      if (this.enableTheme === true) {\n        color = 'color'\n        bgColor = 'bgColor'\n        colors = this.getThemeColors([color, bgColor])\n        updateColors = this.setBothColors\n      }\n\n      return h('q-knob', updateColors(colors.get(color), colors.get(bgColor), {\n        props: {\n          value: this.knob\n        },\n        on: {\n          'input': (v) => { this.knob = v }\n        }\n      }))\n    }\n  },\n\n  render (h) {\n    const slot = this.$slots.default\n\n    let colors = new Map(), color, bgColor\n    let updateColors = this.useDefaultTheme\n    if (this.enableTheme === true) {\n      color = 'color'\n      bgColor = 'bgColor'\n      colors = this.getThemeColors([color, bgColor])\n      updateColors = this.setBothColors\n    }\n\n    return h('div', updateColors(colors.get(color), colors.get(bgColor), {\n      staticClass: 'q-pa-md',\n      style: {\n        width: '100%'\n      }\n    }), [\n      slot || '',\n      this.__renderRadio(h, 'line', 'Line'),\n      this.__renderRadio(h, 'rect', 'Rect'),\n      this.__renderCheckbox(h),\n      this.__renderKnob(h)\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      enableTheme: true,\n      theme: void 0,\n      themes: [\n        {\n          name: 'Default'\n        },\n        {\n          name: 'Dark',\n          color: 'blue-grey-2',\n          bgColor: 'blue-grey-8'\n        },\n        {\n          name: 'Teal',\n          color: 'teal-2',\n          bgColor: 'teal-8'\n        },\n        {\n          name: 'Brown',\n          color: 'brown-2',\n          bgColor: 'brown-8'\n        },\n        {\n          name: 'Deep Purple',\n          color: 'deep-purple-2',\n          bgColor: 'deep-purple-8'\n        },\n        {\n          name: 'Indigo',\n          color: 'grey-2',\n          bgColor: 'indigo-8'\n        },\n        {\n          name: 'Blue',\n          color: 'blue-2',\n          bgColor: 'blue-8'\n        }\n      ]\n    }\n  },\n\n  computed: {\n    themesList () {\n      const list = []\n      this.themes.forEach((theme) => {\n        list.push({\n          label: theme.name,\n          value: { ...theme }\n        })\n      })\n      return list\n    }\n  }\n}\n<\/script>\n"},"4f87":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div class=\"q-pa-md\">\n    <div class=\"q-pb-md q-gutter-md row justify-around\">\n      <q-toggle\n        class=\"col-12\"\n        v-model=\"enableTheme\"\n        label=\"Enable themes\"\n      />\n      <q-select\n        outlined\n        dense\n        emit-value\n        map-options\n        label=\"Change theme\"\n        v-model=\"theme\"\n        :options=\"themesList\"\n        :disable=\"enableTheme !== true\"\n        class=\"col-12\"\n      />\n    </div>\n    <q-separator />\n    <div class=\"q-pa-md row justify-around\">\n      <my-component\n        :enable-theme=\"enableTheme\"\n        :theme=\"theme\"\n        class=\"text-center\"\n      >\n        <div class=\"text-h4\">Some Text</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { Colorize, Theme } from 'quasar-mixin-colorize'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [Colorize, Theme],\n\n  render (h) {\n    let colors = new Map(), color, bgColor\n    let updateColors = this.useDefaultTheme\n    if (this.enableTheme === true) {\n      color = 'color'\n      bgColor = 'bgColor'\n      colors = this.getThemeColors([color, bgColor])\n      updateColors = this.setBothColors\n    }\n\n    return h('div', updateColors(colors.get(color), colors.get(bgColor), {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      enableTheme: true,\n      theme: void 0,\n      themes: [\n        {\n          name: 'Default'\n        },\n        {\n          name: 'Dark',\n          color: 'blue-grey-2',\n          bgColor: 'blue-grey-8'\n        },\n        {\n          name: 'Teal',\n          color: 'teal-2',\n          bgColor: 'teal-8'\n        },\n        {\n          name: 'Brown',\n          color: 'brown-2',\n          bgColor: 'brown-8'\n        },\n        {\n          name: 'Deep Purple',\n          color: 'deep-purple-2',\n          bgColor: 'deep-purple-8'\n        },\n        {\n          name: 'Indigo',\n          color: 'grey-2',\n          bgColor: 'indigo-8'\n        },\n        {\n          name: 'Blue',\n          color: 'blue-2',\n          bgColor: 'blue-8'\n        }\n      ]\n    }\n  },\n\n  computed: {\n    themesList () {\n      const list = []\n      this.themes.forEach((theme) => {\n        list.push({\n          label: theme.name,\n          value: { ...theme }\n        })\n      })\n      return list\n    }\n  }\n}\n<\/script>\n"},5334:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :color=\"color\"\n    >\n      <div class=\"text-h4\">Some Text</div>\n    </my-component>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { Colorize } from 'quasar-mixin-colorize'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [Colorize],\n\n  render (h) {\n    return h('div', this.setTextColor(this.color, {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      color: '#FF0000'\n    }\n  }\n}\n<\/script>\n"},"600a":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :border-color=\"borderColor\"\n    />\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { Colorize } from 'quasar-mixin-colorize'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [Colorize],\n\n  props: {\n    borderColor: String\n  },\n\n  data () {\n    return {\n    }\n  },\n\n  render (h) {\n    return h('div', this.setBorderColor(this.borderColor, {\n      style: {\n        width: '200px',\n        height: '200px',\n        borderStyle: 'solid',\n        borderWidth: '10px'\n      }\n    }))\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      borderColor: 'purple-14'\n    }\n  }\n}\n<\/script>\n"},6519:function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <div class="q-pa-md">\n    <div class="q-pb-md q-gutter-md row justify-around">\n      <q-input\n        filled\n        v-model="bgColor"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="bgColor" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n    </div>\n    <q-separator />\n    <div class="q-pa-md row justify-around">\n      <my-component\n        :bg-color="bgColor"\n      >\n        <div class="text-h4">Some Text</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from \'vue\'\nimport { Colorize } from \'quasar-mixin-colorize\'\n\nconst MyComponent = Vue.extend({\n  name: \'my-component\',\n\n  mixins: [Colorize],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String\n  },\n\n  render (h) {\n    return h(\'div\', this.setBackgroundColor(this.bgColor, {\n      style: {\n        width: \'200px\',\n        height: \'200px\'\n      }\n    }))\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      bgColor: \'#FF0000\'\n    }\n  }\n}\n<\/script>\n'},"71b2":function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n<div class="q-pa-md">\n    <div class="q-pb-md q-gutter-md row justify-around">\n      <q-input\n        filled\n        v-model="color"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="color" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n\n      <q-input\n        filled\n        v-model="bgColor"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="bgColor" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n\n      <q-input\n        filled\n        v-model="borderColor"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="borderColor" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n    </div>\n    <q-separator />\n    <div class="q-pa-md row justify-around">\n      <my-component\n        :color="color"\n        :bg-color="bgColor"\n        :borderColor="borderColor"\n        class="text-center"\n      >\n        <div class="text-h4">Some Text</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from \'vue\'\nimport { Colorize } from \'quasar-mixin-colorize\'\n\nconst MyComponent = Vue.extend({\n  name: \'my-component\',\n\n  mixins: [Colorize],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String,\n    borderColor: String\n  },\n\n  render (h) {\n    return h(\'div\', this.setBorderColor(this.borderColor, this.setBothColors(this.color, this.bgColor, {\n      style: {\n        width: \'200px\',\n        height: \'200px\',\n        borderStyle: \'solid\',\n        borderWidth: \'10px\'\n      }\n    })), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      color: \'#FFFF00\',\n      bgColor: \'#FF0000\',\n      borderColor: \'#00FAFA\'\n    }\n  }\n}\n<\/script>\n'},"7e0b":function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :enable-theme=\"enableTheme\"\n      :theme=\"theme\"\n      class=\"text-center\"\n    >\n      <div class=\"text-h4\">Some Text</div>\n    </my-component>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { Colorize, Theme } from 'quasar-mixin-colorize'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [Colorize, Theme],\n\n  render (h) {\n    let colors = new Map(), color, bgColor\n    let updateColors = this.useDefaultTheme\n    if (this.enableTheme === true) {\n      color = 'color'\n      bgColor = 'bgColor'\n      colors = this.getThemeColors([color, bgColor])\n      updateColors = this.setBothColors\n    }\n\n    return h('div', updateColors(colors.get(color), colors.get(bgColor), {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      enableTheme: true,\n      theme: {\n        color: 'grey-2',\n        bgColor: 'blue-grey-8'\n      }\n    }\n  }\n}\n<\/script>\n"},a77b:function(n,e,t){"use strict";t.r(e),e["default"]='<template>\n  <div class="q-pa-md">\n    <div class="q-pb-md q-gutter-md row justify-around">\n      <q-input\n        filled\n        v-model="color"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="color" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n    </div>\n    <q-separator />\n    <div class="q-pa-md row justify-around">\n      <my-component\n        :color="color"\n      >\n        <div class="text-h4">Some Text</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from \'vue\'\nimport { Colorize } from \'quasar-mixin-colorize\'\n\nconst MyComponent = Vue.extend({\n  name: \'my-component\',\n\n  mixins: [Colorize],\n\n  render (h) {\n    return h(\'div\', this.setTextColor(this.color, {\n      style: {\n        width: \'200px\',\n        height: \'200px\'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      color: \'#FF0000\'\n    }\n  },\n\n  methods: {\n    selectColor () {\n    }\n  }\n}\n<\/script>\n'},b656:function(n,e,t){},e872:function(n,e,t){"use strict";var o=t("b656"),r=t.n(o);r.a},eda9:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :bg-color=\"bgColor\"\n    />\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { Colorize } from 'quasar-mixin-colorize'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [Colorize],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String\n  },\n\n  data () {\n    return {\n    }\n  },\n\n  render (h) {\n    return h('div', this.setBackgroundColor(this.bgColor, {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }))\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      bgColor: '#FF0000'\n    }\n  }\n}\n<\/script>\n"}}]);