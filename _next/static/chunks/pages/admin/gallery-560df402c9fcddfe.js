(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[252],{9595:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var a=n(4658),r=n.n(a),i=n(5675),c=n.n(i),s=n(5893),o=function(e){return(0,s.jsx)("div",{className:"".concat(""!==e.customClass?"".concat(r().image__wrapper," ").concat(e.customClass):r().image__wrapper),children:(0,s.jsx)(c(),{src:e.src,alt:e.alt,fill:!0,style:{objectFit:"cover"},className:r().slider__image})})}},9826:function(e,t,n){"use strict";n.d(t,{IG:function(){return o},lX:function(){return l},sG:function(){return u}});var a=n(3977),r=n(6650),i=n(9828),c=n(1259),s=(0,a.ZF)({apiKey:"AIzaSyA4bRI_AJIqel0pdZTzZWpYEUlpJtFFtBU",authDomain:"react-photography-c6b2f.firebaseapp.com",projectId:"react-photography-c6b2f",storageBucket:"react-photography-c6b2f.appspot.com",messagingSenderId:"9911131058",appId:"1:9911131058:web:4269b821e02e16baa8a2ab",measurementId:"G-D7PVTCJL2R"}),o=(0,r.cF)(s),u=(0,i.ad)(s),l=(0,c.v0)(s)},4113:function(e,t,n){"use strict";n.d(t,{k:function(){return u}});var a=n(29),r=n(7794),i=n.n(r),c=n(7294),s=n(9826),o=n(9828),u=function(e,t,n,r){var u=(0,c.useState)(!1),l=u[0],_=u[1],d=(0,c.useState)(!1),p=d[0],m=d[1];return(0,c.useEffect)(function(){var c,u=(c=(0,a.Z)(i().mark(function n(){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.r7)((0,o.JU)(s.sG,e,r),t);case 3:_(!0),n.next=10;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0),m(!0);case 10:case"end":return n.stop()}},n,null,[[0,6]])})),function(){return c.apply(this,arguments)});t&&e&&n&&u()},[t,e,n,r]),{succesfullUpload:l,error:p}}},1632:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(6687),r=n(9499),i=n(29),c=n(7794),s=n.n(c),o=n(7294),u=n(9826),l=n(9828);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=function(e,t){var n=(0,o.useState)([]),r=n[0],c=n[1];return(0,o.useEffect)(function(){var t,n=(0,l.hJ)(u.sG,e);(t=(0,i.Z)(s().mark(function e(){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.PL)(n);case 2:c(e.sent.docs.map(function(e){return d(d({},e.data()),{},{id:e.id})}));case 5:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)})()},[e,t]),(0,a.Z)(r).sort(function(e,t){return e.date-t.date})}},5371:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var a=n(6687),r=n(6650),i=n(9826),c=n(7294),s=function(e){var t=(0,c.useState)([]),n=t[0],s=t[1],o=(0,c.useState)(!1),u=o[0],l=o[1],_=(0,c.useState)(0),d=_[0],p=_[1];return(0,c.useEffect)(function(){s([]),null==e||e.forEach(function(e){var t=new Date().getTime()+String(e.name),n=(0,r.iH)(i.IG,t),c=(0,r.B0)(n,e);c.on("state_changed",function(e){switch(p(e.bytesTransferred/e.totalBytes*100),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},function(e){console.log(e)},function(){(0,r.Jt)(c.snapshot.ref).then(function(e){s(function(t){return[].concat((0,a.Z)(t),[e])}),console.log("Upload is Done"),l(!0)})})})},[e]),{pictureURL:n,succesPictureUpload:u,progress:d,setProgress:p,setSuccesPictureUpload:l}}},5066:function(e,t,n){"use strict";n.d(t,{I:function(){return u}});var a=n(29),r=n(7794),i=n.n(r),c=n(7294),s=n(9826),o=n(9828),u=function(e,t,n){var r=(0,c.useState)(!1),u=r[0],l=r[1],_=(0,c.useState)(!1),d=_[0],p=_[1];return(0,c.useEffect)(function(){var r,c=(r=(0,a.Z)(i().mark(function n(){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,o.ET)((0,o.hJ)(s.sG,e),t);case 3:console.log("dodaję nowy obiekt"),l(!0),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),p(!0);case 11:case"end":return n.stop()}},n,null,[[0,7]])})),function(){return r.apply(this,arguments)});t&&e&&n&&c()},[t,e,n]),{succesfullUpload:u,error:d}}},2280:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(6687),i=n(7794),c=n.n(i),s=n(3236),o=n.n(s),u=n(7294),l=n(5371),_=n(5066),d=n(5893);t.default=function(e){var t,n=(0,u.useState)([]),i=n[0],s=n[1],p=(0,u.useState)(!1),m=p[0],f=p[1],h=(0,u.useState)({}),j=h[0],v=h[1],b=(0,u.useState)("Gallery")[0],g=(0,u.useRef)(),y=(0,u.useRef)(),x=(0,u.useRef)(),w=(0,u.useRef)(),N=(0,l.H)(i),S=N.pictureURL,z=N.succesPictureUpload,k=N.progress,P=N.setProgress,O=(t=(0,a.Z)(c().mark(function t(n){var a,r,i;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),a=Number(x.current.value),r=Number(w.current.value),i=g.current.value.trim(),f(!0),v({name:i,url:S[0],date:new Date().getTime(),size:r,orientation:a}),g.current.value="",y.current.value="",e.update(e.updateCounter+1);case 9:case"end":return t.stop()}},t)})),function(e){return t.apply(this,arguments)});(0,u.useEffect)(function(){if(100==k&&!0==z){var e=setTimeout(function(){P(0)},2e3);return function(){return clearInterval(e)}}},[z,k,P]);var Z=(0,_.I)(b,j,m),C=Z.succesfullUpload,D=Z.error;return C&&e.toggle(),(0,d.jsxs)("div",{className:o().modal__add,children:[C&&(0,d.jsx)("p",{className:o().admin__success,children:"Udało się dodać nowe zdjęcie ! "}),D&&(0,d.jsx)("p",{className:o().admin__success,children:"Niestety wystąpił błąd ! "}),(0,d.jsx)("button",{onClick:e.toggle,className:o().modal__closure,children:"X"}),(0,d.jsxs)("form",{className:o().admin__wrapper,onSubmit:O,children:[(0,d.jsx)("label",{className:o().admin__label,htmlFor:"names",children:"Tytuł zdjęcia"}),(0,d.jsx)("input",{className:o().admin__input,ref:g,type:"text",id:"names",required:!0}),(0,d.jsx)("label",{className:o().admin__label,htmlFor:"size",children:"Rozmiar zdjęcia w galerii"}),(0,d.jsxs)("select",{className:o().admin__select,ref:w,name:"size",id:"size",required:!0,children:[(0,d.jsx)("option",{value:0,children:"Małe"}),(0,d.jsx)("option",{value:1,children:"Duże"}),(0,d.jsx)("option",{value:2,children:"Bardzo Duże"})]}),(0,d.jsx)("label",{className:o().admin__label,htmlFor:"orientation",children:"Orientacja Zdjęcia"}),(0,d.jsxs)("select",{className:o().admin__select,ref:x,name:"orientation",id:"orientation",required:!0,children:[(0,d.jsx)("option",{value:0,children:"Poziome"}),(0,d.jsx)("option",{value:1,children:"Pionowe"})]}),(0,d.jsx)("label",{className:o().admin__label,htmlFor:"file",children:"Załącz zdjęcie"}),(0,d.jsx)("input",{className:o().admin__input,onChange:function(e){if(null!=e.target.files){var t,n=null===(t=e.target)||void 0===t?void 0:t.files[0];s(function(e){return[].concat((0,r.Z)(e),[n])})}},ref:y,style:{border:"none"},type:"file",id:"file",accept:"image/png, image/jpeg",required:!0}),0!=k&&(0,d.jsx)("p",{className:o().admin__success,children:"Trwa upload zdjęcia (".concat(Math.round(k),")%")}),z&&(0,d.jsx)("p",{className:o().admin__success,children:" Zdjęcie gotowe do dodania !"}),(0,d.jsx)("button",{className:o().admin__button,type:"submit",children:"Dodaj"})]})]})}},4723:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(6687),i=n(7794),c=n.n(i),s=n(1290),o=n.n(s),u=n(7294),l=n(5371),_=n(4113),d=n(5893);t.default=function(e){var t,n=e.elementToEdit,i=(0,u.useState)([]),s=i[0],p=i[1],m=(0,u.useState)(!1),f=m[0],h=m[1],j=(0,u.useState)({}),v=j[0],b=j[1],g=(0,u.useState)("Gallery")[0],y=null==n?void 0:n.id,x=(0,u.useRef)(),w=(0,u.useRef)(),N=(0,u.useRef)(),S=(0,u.useRef)();(0,u.useEffect)(function(){x.current.value=null==n?void 0:n.name},[null==n?void 0:n.name]);var z=(0,l.H)(s),k=z.pictureURL,P=z.succesPictureUpload,O=z.progress,Z=z.setProgress,C=(t=(0,a.Z)(c().mark(function t(a){var r,i,s;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),r=Number(N.current.value),i=Number(S.current.value),s=x.current.value.trim(),h(!0),n.name=s,0!==k.length?n.url=k[0]:null==n||n.url,n.size=i,n.orientation=r,b(n),x.current.value="",e.update(e.updateCounter+1);case 12:case"end":return t.stop()}},t)})),function(e){return t.apply(this,arguments)});(0,u.useEffect)(function(){if(100==O&&!0==P){var e=setTimeout(function(){Z(0)},2e3);return function(){return clearInterval(e)}}},[P,O,Z]);var D=(0,_.k)(g,v,f,y),I=D.succesfullUpload,E=D.error;return I&&e.toggle(),(0,d.jsxs)("div",{className:o().modal__add,children:[E&&(0,d.jsx)("p",{className:o().admin__success,children:"Niestety wystąpił błąd ! "}),(0,d.jsx)("button",{onClick:e.toggle,className:o().modal__closure,children:"X"}),(0,d.jsxs)("form",{className:o().admin__wrapper,onSubmit:C,children:[(0,d.jsx)("label",{className:o().admin__label,htmlFor:"names",children:"Tytuł zdjęcia"}),(0,d.jsx)("input",{className:o().admin__input,ref:x,type:"text",id:"names"}),(0,d.jsx)("label",{className:o().admin__label,htmlFor:"size",children:"Rozmiar zdjęcia w galerii"}),(0,d.jsxs)("select",{className:o().admin__select,defaultValue:null==n?void 0:n.size,ref:S,name:"size",id:"size",children:[(0,d.jsx)("option",{value:0,children:"Małe"}),(0,d.jsx)("option",{value:1,children:"Duże"}),(0,d.jsx)("option",{value:2,children:"Bardzo Duże"})]}),(0,d.jsx)("label",{className:o().admin__label,htmlFor:"orientation",children:"Orientacja Zdjęcia"}),(0,d.jsxs)("select",{className:o().admin__select,defaultValue:null==n?void 0:n.orientation,ref:N,name:"orientidation",id:"orientation",children:[(0,d.jsx)("option",{value:0,children:"Poziome"}),(0,d.jsx)("option",{value:1,children:"Pionowe"})]}),(0,d.jsx)("label",{className:o().admin__label,htmlFor:"file",children:"Załącz zdjęcie"}),(0,d.jsx)("input",{className:o().admin__input,onChange:function(e){if(null!=e.target.files){var t,n=null===(t=e.target)||void 0===t?void 0:t.files[0];p(function(e){return[].concat((0,r.Z)(e),[n])})}},ref:w,style:{border:"none"},type:"file",id:"file",accept:"image/png, image/jpeg"}),0!=O&&(0,d.jsx)("p",{className:o().admin__success,children:"Trwa upload zdjęcia (".concat(Math.round(O),")%")}),P&&(0,d.jsx)("p",{className:o().admin__success,children:" Zdjęcie gotowe do dodania !"}),(0,d.jsx)("button",{className:o().admin__button,type:"submit",children:"Dodaj"})]})]})}},515:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n(7794),i=n.n(r),c=n(9197),s=n.n(c),o=n(1632),u=n(9826),l=n(9828),_=n(7294),d=n(9595),p=n(2280),m=n(4723),f=n(1163),h=n(5893);t.default=function(){var e,t,n="Gallery",r=(0,f.useRouter)(),c=(0,_.useState)(!1),j=c[0],v=c[1],b=(0,_.useState)(!1),g=b[0],y=b[1],x=(0,_.useState)({name:"",id:"",url:"",date:0,size:0,orientation:0}),w=x[0],N=x[1],S=(0,_.useState)(0),z=S[0],k=S[1],P=(e=(0,a.Z)(i().mark(function e(t){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(void 0!==t)){e.next=4;break}return e.next=3,(0,l.oe)((0,l.JU)(u.sG,n,t));case 3:k(z+1);case 4:case"end":return e.stop()}},e)})),function(t){return e.apply(this,arguments)}),O=(t=(0,a.Z)(i().mark(function e(t){return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:N(t),C();case 2:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),Z=function(){v(!j)},C=function(){y(!g)},D=(0,o.Z)(n,z);return(0,h.jsxs)("div",{className:s().admin__opinion,children:[(0,h.jsx)("button",{onClick:function(){r.back()},className:s().button__back,children:"Powr\xf3ć"}),(0,h.jsx)("button",{onClick:Z,className:s().admin__opinion__add,children:"Dodaj nowe zdjęcie"}),j&&(0,h.jsx)(p.default,{toggle:Z,updateCounter:z,update:k}),g&&(0,h.jsx)(m.default,{toggle:C,updateCounter:z,update:k,elementToEdit:w}),j&&(0,h.jsx)("div",{className:s().admin__opinion__modal__backdrop}),g&&(0,h.jsx)("div",{className:s().admin__opinion__modal__backdrop}),Array.isArray(D)&&0!==D.length&&0!==Object.keys(D[0]).length&&D.map(function(e){var t=e.name,n=e.id,a=e.url,r=e.date,i=e.size,c=e.orientation;return(0,h.jsxs)("div",{className:s().fetched__wrapper,children:[(0,h.jsx)("div",{className:s().fetched__image__wrapper,children:(0,h.jsx)(d.d,{customClass:s().fetched__image,src:String(a),alt:String(t)})}),(0,h.jsxs)("div",{className:s().fetched__info,children:[(0,h.jsx)("p",{className:s().fetched__paragraph,children:"ID: "+n}),(0,h.jsx)("p",{className:s().fetched__paragraph,children:"Tytuł: "+t}),(0,h.jsx)("p",{className:s().fetched__paragraph,children:"Orientacja: "+c}),(0,h.jsx)("p",{className:s().fetched__paragraph,children:"Rozmiar: "+i}),(0,h.jsx)("p",{className:s().fetched__paragraph,children:"URL zdjęcia: "+a}),(0,h.jsx)("p",{className:s().fetched__paragraph,children:"Data dodania: ".concat(new Date(Number(r)))})]}),(0,h.jsxs)("div",{className:s().fetched__action,children:[(0,h.jsx)("button",{onClick:function(){P(n)},className:s().fetched__icon,children:"Usuń"}),(0,h.jsx)("button",{onClick:function(){O(e)},className:s().fetched__icon,children:"Edytuj"})]})]},n)})]})}},9658:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/gallery",function(){return n(515)}])},4658:function(e){e.exports={image__wrapper:"CustomImage_image__wrapper__Ie_YS",slider__image:"CustomImage_slider__image__Dw6Ip"}},3236:function(e){e.exports={modal__add:"addStyle_modal__add__BejZ_",admin__wrapper:"addStyle_admin__wrapper__30u8h",admin__label:"addStyle_admin__label__Z0p_0",admin__input:"addStyle_admin__input__jpVXG",description:"addStyle_description__51xyV",file:"addStyle_file__PJJat",admin__select:"addStyle_admin__select__9zCGj",admin__button:"addStyle_admin__button__j34en",admin__success:"addStyle_admin__success__F2QHB",admin__error:"addStyle_admin__error__cpIS7",modal__closure:"addStyle_modal__closure__Ohu4K"}},1290:function(e){e.exports={modal__add:"editStyle_modal__add__ITs8x",admin__wrapper:"editStyle_admin__wrapper__ti4K1",admin__label:"editStyle_admin__label__D_9sA",admin__input:"editStyle_admin__input__WePz8",description:"editStyle_description__bhWP1",file:"editStyle_file__L4v_i",admin__select:"editStyle_admin__select__Yspb_",admin__button:"editStyle_admin__button__Nrnu9",admin__success:"editStyle_admin__success__g5oFP",admin__error:"editStyle_admin__error__MRjNz",modal__closure:"editStyle_modal__closure__CIPu6"}},9197:function(e){e.exports={admin__opinion:"main_admin__opinion__aySL3",admin__opinion__add:"main_admin__opinion__add__8OppE",fetched__wrapper:"main_fetched__wrapper__Rd7_s",fetched__action:"main_fetched__action___aRqG",fetched__image__wrapper:"main_fetched__image__wrapper__B9nKW",fetched__info:"main_fetched__info__jQCOY",fetched__icon:"main_fetched__icon__RnXNT",admin__opinion__modal__backdrop:"main_admin__opinion__modal__backdrop__G9HA1",button__back:"main_button__back__nv8KJ",overlapper:"main_overlapper__61qxm",fetched__wrapper_pictures:"main_fetched__wrapper_pictures__DzFd0"}},1163:function(e,t,n){e.exports=n(9898)},29:function(e,t,n){"use strict";function a(e,t,n,a,r,i,c){try{var s=e[i](c),o=s.value}catch(e){n(e);return}s.done?t(o):Promise.resolve(o).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var c=e.apply(t,n);function s(e){a(c,r,i,s,o,"next",e)}function o(e){a(c,r,i,s,o,"throw",e)}s(void 0)})}}n.d(t,{Z:function(){return r}})},6687:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[16,597,477,675,774,888,179],function(){return e(e.s=9658)}),_N_E=e.O()}]);