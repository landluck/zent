(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[5956],{45956:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>C});var t=a(73450),p=a(27378),e=a(57318),o=a(39550),c=a(74473),l=a(96681),u=a(31846),i=a(82010),r=a(25120),k=a(24246);function d(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function m(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?d(Object(a),!0).forEach((function(s){(0,t.Z)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var f=function(){return(0,k.jsxs)(o.W,{style:{margin:"10px 0"},children:[(0,k.jsx)(c.r,{span:8,children:(0,k.jsx)(l.z,{type:"primary",size:"large",children:"首页"})}),(0,k.jsx)(c.r,{span:8,offset:8,children:(0,k.jsx)(u.D,{offsetTop:135,children:(0,k.jsx)(l.z,{type:"primary",size:"large",children:"固钉"})})})]})},g=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{text:"固钉"}),(0,t.Z)(this,"onPin",(()=>{this.setState({text:"已经固定啦"})})),(0,t.Z)(this,"onUnpin",(()=>{this.setState({text:"取消固定啦"})}))}render(){return(0,k.jsx)(u.D,{offsetTop:200,onPin:this.onPin,onUnpin:this.onUnpin,children:(0,k.jsx)(i.b,{type:"warning",children:this.state.text})})}}return(0,k.jsx)(n,{})},h=function(){return(0,k.jsx)("div",{className:"affix-demo-bottom",children:(0,k.jsx)(u.D,{offsetBottom:60,children:(0,k.jsx)(i.b,{type:"warning",children:(0,k.jsx)("p",{children:"设置距离底部值"})})})})},y=function(){return(0,k.jsx)("div",{className:"affix-demo-both",children:(0,k.jsx)(u.D,{offsetBottom:150,offsetTop:50,children:(0,k.jsx)(i.b,{type:"warning",children:(0,k.jsx)("p",{children:"同时设置 offsetTop 和 offsetBottom"})})})})},x=function(){class n extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"containerRef",null),(0,t.Z)(this,"affixRef",p.createRef()),(0,t.Z)(this,"onSrcoll",(()=>{var n,s;null===(n=this.affixRef)||void 0===n||null===(s=n.current)||void 0===s||s.updatePosition()}))}render(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"affix-target__container",ref:n=>this.containerRef=n,children:(0,k.jsx)("div",{className:"affix-target__content",children:(0,k.jsx)(u.D,{ref:this.affixRef,offsetBottom:20,offsetTop:20,getAffixContainer:()=>this.containerRef,children:(0,k.jsx)(l.z,{children:"相对目标节点定位的固钉"})})})}),(0,k.jsx)(r.f,{onScroll:this.onSrcoll})]})}}return(0,k.jsx)(n,{})};function v(n){return(0,k.jsx)(n.tag,m(m({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return(0,k.jsx)(v,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function b(n){return(0,k.jsx)(v,{tag:"style",html:n.style})}function w(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),w(n.parentNode,s);return s}class z extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,p=s.children;return(0,k.jsxs)("div",{className:"zandoc-react-demo",children:[(0,k.jsx)("div",{className:"zandoc-react-demo__preview",children:p}),(0,k.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,k.jsx)("div",{className:"zandoc-react-demo__title",children:(0,k.jsx)("p",{children:a||""})}),(0,k.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,k.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,k.jsx)(v,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class C extends p.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&(0,e.l)(document.documentElement,0,w(s,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(b,{style:".affix-target__container{\n        height: 150px;\n        overflow-y: auto;\n    }\n\n    .affix-target__content {\n        background: rgba(0, 0, 0, 0.1);\n        padding-top: 150px;\n        height: 200px;\n    }"}),p.createElement(j,{html:'<h2 class="anchor-heading"><a href="#affix-gu-ding">¶</a><a href="javascript:void(0)" id="affix-gu-ding" class="anchor-point"></a>Affix 固钉</h2>\n<p>将元素固定在特定区域，一般用于导航栏固钉。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),p.createElement(z,{title:"通过 offsetTop 设置到顶部距离",id:"Demooffsettop",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Affix</span><span class="token punctuation">,</span> <span class="token maybe-class-name">LayoutRow</span> <span class="token keyword module">as</span> <span class="token maybe-class-name">Row</span><span class="token punctuation">,</span> <span class="token maybe-class-name">LayoutCol</span> <span class="token keyword module">as</span> <span class="token maybe-class-name">Col</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Row</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token operator">:</span> <span class="token string">\'10px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        首页\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Col</span></span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Affix</span></span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">135</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          固钉\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Affix</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Col</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Row</span></span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(f)),p.createElement(z,{title:"设置回调函数",id:"Democallback",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Affix</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Alert</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token operator">:</span> <span class="token string">\'固钉\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onPin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">\'已经固定啦\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onUnpin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">\'取消固定啦\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Affix</span></span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span> <span class="token attr-name">onPin</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onPin</span><span class="token punctuation">}</span></span> <span class="token attr-name">onUnpin</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onUnpin</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Alert</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">state</span><span class="token punctuation">.</span><span class="token property-access">text</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Alert</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Affix</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">App</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(g)),p.createElement(z,{title:"设置距离底部值：`offsetBottom`",id:"Demooffsetbottom",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Affix</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Alert</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>affix-demo-bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Affix</span></span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Alert</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>设置距离底部值<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Alert</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Affix</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(h)),p.createElement(z,{title:"同时设置 offsetTop 和 offsetBottom",id:"Demoboth",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Affix</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Alert</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>affix-demo-both<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Affix</span></span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span></span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Alert</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>同时设置 offsetTop 和 offsetBottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Alert</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Affix</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(y)),p.createElement(z,{title:"自定义相对定位节点",id:"Democontainer",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Affix</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Button</span><span class="token punctuation">,</span> <span class="token maybe-class-name">WindowScrollHandler</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  containerRef <span class="token operator">=</span> <span class="token keyword null nil">null</span><span class="token punctuation">;</span>\n  affixRef <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onSrcoll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">affixRef</span><span class="token operator">?.</span>current<span class="token operator">?.</span><span class="token method function property-access">updatePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>affix-target__container<span class="token punctuation">"</span></span>\n          <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token parameter">ref</span> <span class="token arrow operator">=></span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">containerRef</span> <span class="token operator">=</span> ref<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>affix-target__content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Affix</span></span>\n              <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">affixRef</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">20</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">getAffixContainer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">containerRef</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>相对目标节点定位的固钉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Affix</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">WindowScrollHandler</span></span> <span class="token attr-name">onScroll</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">onSrcoll</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(x)),p.createElement(j,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>offsetTop</td>\n<td>距离窗口顶部指定偏移量后触发</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>offsetBottom</td>\n<td>距离窗口底部指定偏移量后触发</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>getAffixContainer</td>\n<td>自定义相对定位的节点</td>\n<td><code>() => HTMLElement | null</code></td>\n<td><code>window</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>子节点</td>\n<td><code>React.ReactNode</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onPin</td>\n<td>触发固定后执行的回调函数</td>\n<td><code>() => void</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onUnpin</td>\n<td>固定消失后执行的回调函数</td>\n<td><code>() => void</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>zIndex</td>\n<td>固定时的 \n<code>z-index</code></td>\n<td><code>number</code></td>\n<td>10</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td><code>string</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>placeholderClassName</td>\n<td>占位容器的类名</td>\n<td><code>string</code></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>注意</strong></p>\n<ul>\n<li><code>offsetTop</code> 和 <code>offsetBottom</code> 至少传一个，也可以同时设置，同时设置的时候注意窗口高度很小的时候可能会出现两个参数行为冲突的情况，请谨慎使用。</li>\n<li>在页面有两层滚动时，需要同时使用 <code>ref</code> 和 <code>getAffixContainer</code> 实现固钉相对定位自定义节点定位，需要监听外层滚动事件。</li>\n</ul>'}))}}},82010:(n,s,a)=>{"use strict";a.d(s,{b:()=>k});var t=a(59312),p=a(24246),e=a(60042),o=a.n(e),c=a(27378),l=a(78486),u=a(78513),i=["outline","closed","onClose"],r=["title","description","loading","closable","closed","onClose","closeContent","extraContent"],k=function(n){function s(){var s=null!==n&&n.apply(this,arguments)||this;return s.state={closed:!1},s.onCloseHandler=function(){s.isControlled||s.setState({closed:!0}),s.props.onClose&&s.props.onClose()},s}return(0,t.ZT)(s,n),Object.defineProperty(s.prototype,"isControlled",{get:function(){return"closed"in this.props},enumerable:!1,configurable:!0}),Object.defineProperty(s.prototype,"closed",{get:function(){return this.isControlled?this.props.closed:this.state.closed},enumerable:!1,configurable:!0}),s.prototype.render=function(){var n;if(this.closed)return null;var s=(0,u.Z)(this.props,r),a=s.className,e=s.type,c=s.outline,k=(0,t._T)(s,["className","type","outline"]),d=(0,u.Z)(this.props,i),m=o()("zent-alert","zent-alert-style-"+e,a,((n={})["zent-alert-outline"]=c,n));return(0,p.jsx)("div",(0,t.pi)({className:m},k,{"data-zv":"9.12.0"},{children:(0,p.jsx)(l.Z,(0,t.pi)({},d,{onAlertItemClose:this.onCloseHandler},{children:this.props.children}),void 0)}),void 0)},s.highlightClassName="zent-alert-content__highlight",s.defaultProps={type:"info",loading:!1,outline:!1,closable:!1},s}(c.PureComponent)},78486:(n,s,a)=>{"use strict";var t=a(59312),p=a(24246),e=a(27378),o=a(60042),c=a.n(o),l=a(27036),u=a(20840),i={info:"info-circle",warning:"warning",success:"check-circle",error:"error-circle"},r=(0,e.forwardRef)((function(n,s){var a=n.extraContent,o=n.classItemName,r=n.title,k=n.description,d=n.children,m=n.loading,f=n.type,g=n.closable,h=n.closeContent,y=n.onAlertItemClose,x=(0,e.useRef)(n);x.current=n;var v=(0,e.useMemo)((function(){return d||(0,p.jsxs)(p.Fragment,{children:[r&&(0,p.jsx)("h3",(0,t.pi)({className:"zent-alert-item-content__title","data-zv":"9.12.0"},{children:r}),void 0),k&&(0,p.jsx)("p",(0,t.pi)({className:"zent-alert-item-content__description","data-zv":"9.12.0"},{children:k}),void 0)]},void 0)}),[d,k,r]),j=(0,e.useMemo)((function(){var n=x.current.onClose;return g?(0,p.jsx)("div",(0,t.pi)({className:"zent-alert-item-close-wrapper",onClick:function(s){null==n||n(),y&&y(),s.stopPropagation()},"data-zv":"9.12.0"},{children:null!=h?h:(0,p.jsx)(l.Z,{type:"close",className:"zent-alert-item-close-btn"},void 0)}),void 0):null}),[g,h,y]),b=(0,e.useMemo)((function(){return m?(0,p.jsx)(u.Z,{className:"zent-alert-item-icon",loading:!0,icon:"circle",iconSize:16},void 0):f in i?(0,p.jsx)(l.Z,{className:"zent-alert-item-icon",type:i[f]},void 0):null}),[m,f]);return(0,p.jsxs)("div",(0,t.pi)({className:c()("zent-alert-item",o),ref:s,"data-zv":"9.12.0"},{children:[b,(0,p.jsx)("div",(0,t.pi)({className:"zent-alert-item-content","data-zv":"9.12.0"},{children:v}),void 0),a&&(0,p.jsx)("div",(0,t.pi)({className:"zent-alert-item-extra-content","data-zv":"9.12.0"},{children:a}),void 0),j]}),void 0)}));r.displayName="AlertItem",s.Z=r},48591:(n,s,a)=>{"use strict";var t=(0,a(27378).createContext)({});s.Z=t},74473:(n,s,a)=>{"use strict";a.d(s,{r:()=>r});var t=a(59312),p=a(24246),e=a(27378),o=a(60042),c=a.n(o),l=a(65225),u=a(48591),i=a(81093),r=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(s,n),s.prototype.render=function(){var n=this;return(0,p.jsx)(u.Z.Consumer,{children:function(s){return(0,p.jsx)(l.Z.Consumer,{children:function(a){var e,o=n.props,l=o.span,u=o.offset,r=o.order,k=o.className,d=o.style,m=(0,t._T)(o,["span","offset","order","className","style"]),f=d,g=(0,i.r)(s,a.colGutter);if(g>0){var h=g/2;f=(0,t.pi)((0,t.pi)({},f),{paddingLeft:h,paddingRight:h})}var y=(0,i.r)(s,l),x=(0,i.r)(s,u),v=(0,i.r)(s,r),j=c()("zent-col",((e={})["zent-col-offset-"+u]=x,e["zent-col-order-"+r]=v,e),"zent-col-"+y,k);return(0,p.jsx)("div",(0,t.pi)({},m,{className:j,style:f,"data-zv":"9.12.0"},{children:n.props.children}),void 0)}},void 0)}},void 0)},s.defaultProps={offset:0,order:0},s}(e.Component)},65225:(n,s,a)=>{"use strict";a.d(s,{x:()=>t});var t=(0,a(27378).createContext)({rowGutter:0,colGutter:0});s.Z=t},39550:(n,s,a)=>{"use strict";a.d(s,{W:()=>r});var t=a(59312),p=a(24246),e=a(27378),o=a(60042),c=a.n(o),l=a(65225),u=a(48591),i=a(81093),r=function(n){function s(){return null!==n&&n.apply(this,arguments)||this}return(0,t.ZT)(s,n),s.prototype.render=function(){var n=this,s=this.props,a=s.className,e=s.style,o=s.justify,r=s.align,k=(0,t._T)(s,["className","style","justify","align"]),d=c()({"zent-row":!0},"zent-row-justify-"+o,"zent-row-align-"+r,a);return(0,p.jsx)(u.Z.Consumer,{children:function(s){return(0,p.jsx)(l.Z.Consumer,{children:function(a){var o=(0,i.r)(s,a.colGutter),c=(0,i.r)(s,a.rowGutter),l=e;if(o>0){var u=-o/2;l=(0,t.pi)((0,t.pi)({},l),{marginLeft:u,marginRight:u})}if(c&&c>0){var r=c/2;l=(0,t.pi)((0,t.pi)({},l),{paddingTop:r,paddingBottom:r})}return(0,p.jsx)("div",(0,t.pi)({},k,{className:d,style:l,"data-zv":"9.12.0"},{children:n.props.children}),void 0)}},void 0)}},void 0)},s.defaultProps={justify:"start",align:"start"},s}(e.Component)},81093:(n,s,a)=>{"use strict";var t;a.d(s,{j:()=>o,r:()=>c}),function(n){n.fhd="(min-width: 1920px)",n.xxl="(min-width: 1600px)",n.xl="(min-width: 1200px)",n.lg="(min-width: 992px)",n.md="(min-width: 768px)",n.sm="(min-width: 576px)",n.xs="(max-width: 575px)"}(t||(t={}));var p=a(72551),e=Object.keys(t).reduce((function(n,s){return n[t[s]]=s,n}),{}),o=Object.keys(e);function c(n,s){if("number"==typeof s)return s;for(var a=0;a<o.length;a++){var t=o[a],c=e[t];if(n[t]){var l=s[c];if(void 0!==l)return l}}return(0,p.n)(s,"fallback")?s.fallback:0}}}]);