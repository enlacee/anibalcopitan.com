(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,12],{271:function(t,e,r){"use strict";r.r(e);var n={name:"Nav",data:function(){return{toggleNav:!0}},methods:{openMenuMobile:function(){this.toggleNav=!this.toggleNav}}},o=r(45),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-header page-scroll"},[r("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:function(e){return t.openMenuMobile()}}},[r("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"})]),t._v(" "),r("h1",{staticClass:"h1-header"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#top"},on:{click:function(e){return e.preventDefault(),t.$utils.goTop(0)}}},[t._v("Anibal Copitan")])])]),t._v(" "),r("div",{staticClass:"navbar-collapse",class:{collapse:t.toggleNav}},[t._m(0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav navbar-nav navbar-right"},[r("li",{staticClass:"hidden"},[r("a",{attrs:{href:"#page-top"}})]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.anibalcopitan.com/"}},[r("i",{staticClass:"fas fa-code"}),t._v("Blog")])]),t._v(" "),r("li",[r("a",{attrs:{href:"/#skills"}},[t._v("Technologies")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(271).default})},272:function(t,e,r){var content=r(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("545c0203",content,!1,{sourceMap:!1})},273:function(t,e,r){t.exports=r.p+"img/code-design.fcb6d67.png"},274:function(t,e,r){"use strict";r.r(e);r(46);var n={name:"Footer",methods:{copyText:function(){var text,t,e=document.getElementById("input-text").innerText;text=e,t=document.createElement("input"),document.body.appendChild(t),t.setAttribute("value",text),t.select(),document.execCommand("copy"),document.body.removeChild(t);var r=document.getElementById("button-click"),n=r.innerText;r.innerText="Copied!",r.setAttribute("disabled","disabled"),setTimeout((function(){r.removeAttribute("disabled"),r.innerText=n}),700)}}},o=(r(278),r(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{attrs:{id:"footer"}},[t._m(0),t._v(" "),r("div",{staticClass:"footer-contact wow fadeIn"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4"}),t._v(" "),r("div",{staticClass:"col-md-6"},[t._m(1),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{id:"button-click"},on:{click:function(e){return t.copyText()}}},[t._v("Copy Email")])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer-below"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8"},[r("h2",[t._v("Contact Me")]),t._v(" "),r("p",[t._v("Have questions or need support? Feel free to reach out!\n                    ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("address",[r("a",{attrs:{id:"input-text",href:"mailto:contact@anibalcopitan.com"}},[t._v("contact@anibalcopitan.com")])])}],!1,null,"4a3e8380",null);e.default=component.exports;installComponents(component,{Footer:r(274).default})},277:function(t,e,r){var content=r(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("167bd7cc",content,!1,{sourceMap:!1})},278:function(t,e,r){"use strict";r(272)},279:function(t,e,r){var n=r(58)(!1);n.push([t.i,"footer address[data-v-4a3e8380]{display:inline-block;margin-right:1em}button.btn[data-v-4a3e8380]{padding:.3em 1em;border:1px solid #fff;font-size:.7em}button.btn[data-v-4a3e8380]:active{background-color:#000;color:#fff;border:1px solid #fff}button.btn[disabled][data-v-4a3e8380]{border:1px solid grey}",""]),t.exports=n},288:function(t,e,r){t.exports=r.p+"img/code-design-okey-pay.28265ca.png"},289:function(t,e,r){"use strict";r(277)},290:function(t,e,r){var n=r(58)(!1);n.push([t.i,"#store[data-v-4ed93a33]{background-color:grey}a[data-v-4ed93a33]:focus,a[data-v-4ed93a33]:hover{text-decoration:none}.btn[data-v-4ed93a33]{margin-bottom:2px;background-color:#000;color:#fff}.product-grid[data-v-4ed93a33]{display:flex;flex-wrap:wrap;grid-gap:20px;gap:20px;justify-content:center}.product-card[data-v-4ed93a33]{position:relative;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,.1);overflow:hidden;width:300px;text-align:center;padding:20px;transition:transform .3s ease}.product-card[data-v-4ed93a33]:hover{transform:scale(1.05)}.product-card img[data-v-4ed93a33]{width:100%;height:150px;-o-object-fit:cover;object-fit:cover;border-bottom:1px solid #ddd}.product-card h2[data-v-4ed93a33]{font-size:20px;margin:10px 0}.product-card p[data-v-4ed93a33]{color:#888}.product-card .badges[data-v-4ed93a33]{position:absolute;top:10px;left:10px;display:flex;grid-gap:2px;gap:2px;flex-wrap:wrap}.product-card .badge[data-v-4ed93a33]{color:#fff;padding:5px 10px;border-radius:5px;font-size:12px;font-weight:700;white-space:nowrap}.product-card .badge[data-type=gratis][data-v-4ed93a33]{background:#28a745}.product-card .badge[data-type=de-pago][data-v-4ed93a33]{background:#dc3545}.product-card .badge[data-type=sass][data-v-4ed93a33]{background:#17a2b8}.cta-button[data-v-4ed93a33]{display:block;width:200px;margin:40px auto;padding:10px;background-color:#007bff;color:#fff;text-align:center;text-decoration:none;border-radius:5px;font-size:18px;transition:background-color .3s ease}.cta-button[data-v-4ed93a33]:hover{background-color:#0056b3}",""]),t.exports=n},293:function(t,e,r){"use strict";r.r(e);var n={props:{isExpanded:{type:Boolean,default:!1}},data:function(){return{title:"Tienda",linkTienda:!0===this.isExpanded?"#":"/tienda",linkTiendaOnclick:!0===this.isExpanded?"return false;":""}},methods:{handleClick:function(t){var e=t.target.getAttribute("data-url");e&&window.open(e,"_blank","noopener,noreferrer")}}},o=(r(289),r(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"store"}},[n("div",{staticClass:"container-fluid text-center"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12 text-center"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("hr",{staticClass:"star-primary"})])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"product-grid"},[n("div",{staticClass:"product-card"},[t._m(0),t._v(" "),n("img",{attrs:{src:r(273),alt:"Producto 3"}}),t._v(" "),n("h2",[t._v("ReservaTotal")]),t._v(" "),n("p",[t._v("Reserva y paga con Yape")]),t._v(" "),n("div",{staticClass:"payment-buttons"},[n("button",{staticClass:"btn",attrs:{"data-url":"https://reservatotal.anibalcopitan.com/"},on:{click:t.handleClick}},[t._v("Usar Ahora")])])]),t._v(" "),n("div",{staticClass:"product-card"},[t._m(1),t._v(" "),n("img",{attrs:{src:r(288),alt:"Producto 3"}}),t._v(" "),n("h2",[t._v("OkeyPay")]),t._v(" "),n("p",[t._v("Agrega funcionalidades Yape")]),t._v(" "),n("div",{staticClass:"payment-buttons"},[n("button",{staticClass:"btn",attrs:{"data-url":"https://okeypay.anibalcopitan.com/"},on:{click:t.handleClick}},[t._v("Usar Ahora")])])]),t._v(" "),n("div",{staticClass:"product-card"},[t._m(2),t._v(" "),n("img",{attrs:{src:r(273),alt:"Producto 2"}}),t._v(" "),n("h2",[t._v("Simple youtube")]),t._v(" "),n("p",[t._v("PHP - JS")]),t._v(" "),n("div",{staticClass:"payment-buttons"},[n("a",{staticClass:"btn",attrs:{href:"http://local.anibalcopitan.com/projects/simple-youtube/index.php?q=maria",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ver Demo")]),t._v(" "),n("button",{staticClass:"btn yape",attrs:{"data-url":"https://wa.me/51970142637?text=Hola,%20quiero%20comprar%20el%20producto%20SIMPLE%20YOUTUBE.%20Voy%20a%20realizar%20el%20pago%20de%20$2%20USD%20o%20S/7.50%20(equivalente%20en%20soles).%20Por%20favor,%20confirma%20una%20vez%20que%20hayas%20recibido%20el%20pago.%20¡Gracias!"},on:{click:t.handleClick}},[t._v("Comprar con Yape")]),t._v(" "),n("button",{staticClass:"btn paypal",attrs:{"data-url":"https://wa.me/51970142637?text=Para%20comprar%20SIMPLE%20YOUTUBE,%20transfiere%20$2%20USD%20o%20S/7.50%20a%20nuestro%20PayPal:%20acopitan@gmail.com.%20Luego,%20confirma%20aquí%20para%20procesar%20tu%20pedido.%20¡Gracias!"},on:{click:t.handleClick}},[t._v("Comprar con PayPal")])])]),t._v(" "),n("div",{staticClass:"product-card"},[t._m(3),t._v(" "),n("img",{attrs:{src:r(273),alt:"Producto 1"}}),t._v(" "),n("h2",[t._v("Tareas aleatoreas")]),t._v(" "),n("p",[t._v("JS")]),t._v(" "),n("div",{staticClass:"payment-buttons"},[n("a",{staticClass:"btn",attrs:{href:"http://enlacee.github.io/tareas-random",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ver Demo")]),t._v(" "),n("button",{staticClass:"btn free",attrs:{"data-url":"https://github.com/enlacee/tareas-random/archive/refs/heads/master.zip"},on:{click:t.handleClick}},[t._v("Descargar Gratis")])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"badges"},[r("span",{staticClass:"badge",attrs:{"data-type":"gratis"}},[t._v("Gratis en la Nube")]),t._v(" "),r("span",{staticClass:"badge",attrs:{"data-type":""}},[t._v("Sass")]),t._v(" "),r("span",{staticClass:"badge"},[t._v("Web App")]),t._v(" "),r("span",{staticClass:"badge"},[t._v("Android App")]),t._v(" "),r("span",{staticClass:"badge"},[t._v("Pago Online")]),t._v(" "),r("span",{staticClass:"badge"},[t._v("🇵🇪")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"badges"},[r("span",{staticClass:"badge",attrs:{"data-type":"gratis"}},[t._v("Gratis en la Nube")]),t._v(" "),r("span",{staticClass:"badge",attrs:{"data-type":""}},[t._v("Sass")]),t._v(" "),r("span",{staticClass:"badge"},[t._v("Android App")]),t._v(" "),r("span",{staticClass:"badge"},[t._v("🇵🇪")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"badges"},[r("span",{staticClass:"badge",attrs:{"data-type":"de-pago"}},[t._v("De Pago")]),t._v(" "),r("span",{staticClass:"badge"},[t._v("Web App")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"badges"},[r("span",{staticClass:"badge",attrs:{"data-type":"gratis"}},[t._v("Gratis")]),t._v(" "),r("span",{staticClass:"badge"},[t._v("Web App")])])}],!1,null,"4ed93a33",null);e.default=component.exports},305:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(59).default)("9391b4a2",content,!1,{sourceMap:!1})},312:function(t,e,r){"use strict";r(305)},313:function(t,e,r){var n=r(58)(!1);n.push([t.i,".navbar-fixed-bottom[data-v-968ea1d4],.navbar-fixed-top[data-v-968ea1d4]{position:relative}",""]),t.exports=n},330:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{title:"Tienda | Anibal Copitan"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:'Tienda "scripts", "proyectos para desarrolladores", "herramientas para programadores'},{hid:"og:description",name:"og:description",content:'Tienda "scripts", "proyectos para desarrolladores", "herramientas para programadores'},{hid:"og:title",name:"og:title",content:this.title}]}},mounted:function(){this.$utils.redirectToHttps()},methods:{}},o=(r(312),r(45)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-header page-scroll"},[t._m(0),t._v(" "),r("h1",{staticClass:"h1-header"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#top"},on:{click:function(e){return e.preventDefault(),t.$utils.goTop(0)}}},[t._v("ANIBAL COPITAN - Store")])])]),t._v(" "),r("div",{staticClass:"navbar-collapse",class:{collapse:t.toggleNav}},[t._m(1)])])]),t._v(" "),r("StoreView"),t._v(" "),r("Footer")],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggle",attrs:{type:"button",onclick:""}},[r("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"}),t._v(" "),r("span",{staticClass:"icon-bar"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"nav navbar-nav navbar-right"},[e("li",{staticClass:"hidden"},[e("a",{attrs:{href:"#page-top"}})])])}],!1,null,"968ea1d4",null);e.default=component.exports;installComponents(component,{Nav:r(271).default,StoreView:r(293).default,Footer:r(274).default})}}]);