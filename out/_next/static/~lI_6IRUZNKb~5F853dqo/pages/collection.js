(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{232:function(t,e,o){__NEXT_REGISTER_PAGE("/collection",function(){return t.exports=o(244),{page:t.exports.default}})},244:function(t,e,o){"use strict";o.r(e);var n=o(0),i=o.n(n),r=(o(27),o(32)),a=o(33),l=o(34),c=o(19),s=o.n(c),u=i.a.forwardRef(function(t,e){return i.a.createElement("div",{style:{gridRowEnd:"".concat(t.rowSpan)}},i.a.createElement("img",{src:t.url,ref:e,style:{width:"100%",display:"block"},onLoad:function(){t.imageLoaded(t.url)}}))});function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){v(t,e,o[e])})}return t}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var o=[],n=!0,i=!1,r=void 0;try{for(var a,l=t[Symbol.iterator]();!(n=(a=l.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(t){i=!0,r=t}finally{try{n||null==l.return||l.return()}finally{if(i)throw r}}return o}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function v(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var b=function(t){function e(t){var o,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,r=y(e).call(this,t),o=!r||"object"!==f(r)&&"function"!=typeof r?h(n):r,v(h(h(o)),"updateDimensions",function(){var t=document.getElementsByClassName("grid")[0],e=parseInt(window.getComputedStyle(t).getPropertyValue("grid-auto-rows")),n=Number.isNaN(e)?0:e,i=parseInt(window.getComputedStyle(t).getPropertyValue("grid-row-gap")),r=new Map,a=!0,l=!1,c=void 0;try{for(var s,u=o.state.images[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var f=d(s.value,2),g=f[0],y=f[1],m=p({},y);y.loaded&&(m.rowSpan="span ".concat(Math.ceil((y.ref.current.getBoundingClientRect().height+i)/(n+i))),m.updated=!0),r.set(g,m)}}catch(t){l=!0,c=t}finally{try{a||null==u.return||u.return()}finally{if(l)throw c}}o.setState({images:r,updated:!0}),console.log("updated")}),o.state={images:new Map,updated:!1},t.collection.images.map(function(t,e){var n=i.a.createRef();o.state.images.set(t,{url:"",ref:n,rowSpan:"auto",loaded:!1,updated:!1})}),o}var o,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(e,i.a.Component),o=e,(n=[{key:"imageLoaded",value:function(t){var e=new Map,o=!0,n=!1,i=void 0;try{for(var r,a=this.state.images[Symbol.iterator]();!(o=(r=a.next()).done);o=!0){var l=d(r.value,2),c=l[0],s=l[1];c===t&&(s.loaded=!0),e.set(c,s)}}catch(t){n=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(n)throw i}}this.setState({images:e}),this.isLoaded()&&this.updateDimensions()}},{key:"setImageURLs",value:function(){var t=new Map,e=!0,o=!1,n=void 0;try{for(var i,r=this.state.images[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var a=d(i.value,2),l=a[0],c=a[1];t.set(l,p({},c,{url:l}))}}catch(t){o=!0,n=t}finally{try{e||null==r.return||r.return()}finally{if(o)throw n}}this.setState({images:t})}},{key:"isLoaded",value:function(){var t=this.state.images.size>0,e=!0,o=!1,n=void 0;try{for(var i,r=this.state.images[Symbol.iterator]();!(e=(i=r.next()).done);e=!0){var a=d(i.value,2);a[0];t&=a[1].loaded}}catch(t){o=!0,n=t}finally{try{e||null==r.return||r.return()}finally{if(o)throw n}}return t}},{key:"componentDidMount",value:function(){this.setImageURLs(),window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var t=this,e=[],o=!0,n=!1,r=void 0;try{for(var a,l=function(){var o=d(a.value,2),n=o[0],r=o[1];e.push(i.a.createElement(u,{key:"col-".concat(n),rowSpan:r.rowSpan,url:r.url,imageLoaded:function(){t.imageLoaded(n)},ref:r.ref}))},c=this.state.images[Symbol.iterator]();!(o=(a=c.next()).done);o=!0)l()}catch(t){n=!0,r=t}finally{try{o||null==c.return||c.return()}finally{if(n)throw r}}return i.a.createElement("div",{className:"jsx-3852080897 collection details"},i.a.createElement("h2",{className:"jsx-3852080897"}," ",this.props.collection.text," Collection"),i.a.createElement("p",{className:"jsx-3852080897"}," ",this.props.collection.details),i.a.createElement("div",{className:"jsx-3852080897 "+"loading-message".concat(this.state.updated?" is-hidden":"")},"Loading..."),i.a.createElement("div",{className:"jsx-3852080897 "+"grid".concat(this.state.updated?"":" is-hidden")},e),i.a.createElement(s.a,{styleId:"3852080897",css:[".collection.jsx-3852080897{position:relative;border-top:.1rem solid #000;}","h2.jsx-3852080897{font-size:3rem;line-height:1.1;margin:2rem 0 0;}","p.jsx-3852080897{margin-top:0;}",".grid.jsx-3852080897{display:grid;grid-gap:30px;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));grid-auto-rows:5px;opacity:1;-webkit-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;}",".grid.is-hidden.jsx-3852080897{opacity:0;}",".loading-message.jsx-3852080897{font-size:3.2rem;opacity:1;text-align:center;position:absolute;width:100%;margin-top:3rem;}",".loading-message.is-hidden.jsx-3852080897{opacity:0;}"]}))}}])&&g(o.prototype,n),r&&g(o,r),e}(),w=o(42);function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var O=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,S(e).apply(this,arguments))}var o,n,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,i.a.Component),o=e,c=[{key:"getInitialProps",value:function(t){var e=t.query.id;return{collection:w.find(function(t){return t.href===e})}}}],(n=[{key:"render",value:function(){return i.a.createElement("div",{className:"wrapper"},i.a.createElement("header",null,i.a.createElement(r.a,{title:"Work"}),i.a.createElement(a.a,null),i.a.createElement("h1",null,"AMI",i.a.createElement("br",null),"JENNER"),i.a.createElement("h2",null,"Photo Art Director")),i.a.createElement(b,{collection:this.props.collection}),i.a.createElement(l.a,null))}}])&&j(o.prototype,n),c&&j(o,c),e}();e.default=O},42:function(t){t.exports=[{href:"sailor-moon",grid:"/static/grid/sailor_moon_grid.jpg",text:"Sailor Moon",details:"Toei animation licensing with Torrid.",images:["/static/collections/sailor-moon/181213_email_Sailor_Moon_animation.gif","/static/collections/sailor-moon/11579523_41516.jpg","/static/collections/sailor-moon/11575335_41240.jpg","/static/collections/sailor-moon/11575335_41350.jpg","/static/collections/sailor-moon/11579523_41662.jpg","/static/collections/sailor-moon/11575335_41179.jpg","/static/collections/sailor-moon/11579523_41699.jpg"]},{href:"minnie-mouse",grid:"/static/grid/minnie_grid.jpg",text:"Minnie Mouse NYFW",images:[]},{href:"outlander",grid:"/static/grid/outlander_grid.jpg",text:"Outlander",images:[]},{href:"hello-kitty",grid:"/static/grid/hello_kitty_grid.jpg",text:"Hello Kitty",details:"Sanrio CO. licensing collection with Torrid.",images:["/static/collections/hello-kitty/181120_email_Hello_Kitty.jpg","/static/collections/hello-kitty/11579514_42082.jpg","/static/collections/hello-kitty/11575307_41874.jpg","/static/collections/hello-kitty/11576227_41920.jpg","/static/collections/hello-kitty/11576227_41935.jpg","/static/collections/hello-kitty/11579514_42028.jpg","/static/collections/hello-kitty/11579514_42064.jpg","/static/collections/hello-kitty/11579514_42106.jpg","/static/collections/hello-kitty/11585803_42283.jpg","/static/collections/hello-kitty/11585847_42163.jpg"]},{href:"star-wars",grid:"/static/grid/star_wars_grid.jpg",text:"Star Wars",images:["/static/collections/star-wars/181204_Social_Star_Wars_Story_1_1080x1920.jpg","/static/collections/star-wars/11652240_0491.jpg","/static/collections/star-wars/11652240_0343.jpg","/static/collections/star-wars/11652240_0513.jpg","/static/collections/star-wars/11655408_0209.jpg"]},{href:"disney-villains",grid:"/static/grid/villains_grid.jpg",text:"Disney Villains",images:[]},{href:"collection-seven",grid:"",text:"Collection Seven",images:[]},{href:"collection-eight",grid:"",text:"Collection Eight",images:[]},{href:"collection-nine",grid:"",text:"Collection Nine",images:[]},{href:"collection-ten",grid:"",text:"Collection Ten",images:[]},{href:"collection-eleven",grid:"",text:"Collection Eleven",images:[]},{href:"collection-twelve",grid:"",text:"Collection Twelve",images:[]}]}},[[232,1,0]]]);