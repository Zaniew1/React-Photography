(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{9826:function(e,t,n){"use strict";n.d(t,{IG:function(){return u},lX:function(){return l},sG:function(){return c}});var r=n(3977),a=n(6650),i=n(9828),o=n(1259),s=(0,r.ZF)({apiKey:"AIzaSyA4bRI_AJIqel0pdZTzZWpYEUlpJtFFtBU",authDomain:"react-photography-c6b2f.firebaseapp.com",projectId:"react-photography-c6b2f",storageBucket:"react-photography-c6b2f.appspot.com",messagingSenderId:"9911131058",appId:"1:9911131058:web:4269b821e02e16baa8a2ab",measurementId:"G-D7PVTCJL2R"}),u=(0,a.cF)(s),c=(0,i.ad)(s),l=(0,o.v0)(s)},4113:function(e,t,n){"use strict";n.d(t,{k:function(){return c}});var r=n(29),a=n(7794),i=n.n(a),o=n(7294),s=n(9826),u=n(9828),c=function(e,t,n,a){var c=(0,o.useState)(!1),l=c[0],d=c[1],_=(0,o.useState)(!1),f=_[0],m=_[1];return(0,o.useEffect)(function(){var o,c=(o=(0,r.Z)(i().mark(function n(){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.r7)((0,u.JU)(s.sG,e,a),t);case 3:d(!0),n.next=10;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0),m(!0);case 10:case"end":return n.stop()}},n,null,[[0,6]])})),function(){return o.apply(this,arguments)});t&&e&&n&&c()},[t,e,n,a]),{succesfullUpload:l,error:f}}},5371:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var r=n(6687),a=n(6650),i=n(9826),o=n(7294),s=function(e){var t=(0,o.useState)([]),n=t[0],s=t[1],u=(0,o.useState)(!1),c=u[0],l=u[1],d=(0,o.useState)(0),_=d[0],f=d[1];return(0,o.useEffect)(function(){s([]),null==e||e.forEach(function(e){var t=new Date().getTime()+String(e.name),n=(0,a.iH)(i.IG,t),o=(0,a.B0)(n,e);o.on("state_changed",function(e){switch(f(e.bytesTransferred/e.totalBytes*100),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}},function(e){console.log(e)},function(){(0,a.Jt)(o.snapshot.ref).then(function(e){s(function(t){return[].concat((0,r.Z)(t),[e])}),console.log("Upload is Done"),l(!0)})})})},[e]),{pictureURL:n,succesPictureUpload:c,progress:_,setProgress:f,setSuccesPictureUpload:l}}},4723:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n(6687),i=n(7794),o=n.n(i),s=n(1290),u=n.n(s),c=n(7294),l=n(5371),d=n(4113),_=n(5893);t.default=function(e){var t,n=e.elementToEdit,i=(0,c.useState)([]),s=i[0],f=i[1],m=(0,c.useState)(!1),p=m[0],h=m[1],v=(0,c.useState)({}),b=v[0],y=v[1],g=(0,c.useState)("Gallery")[0],j=null==n?void 0:n.id,S=(0,c.useRef)(),x=(0,c.useRef)(),N=(0,c.useRef)(),w=(0,c.useRef)();(0,c.useEffect)(function(){S.current.value=null==n?void 0:n.name},[null==n?void 0:n.name]);var z=(0,l.H)(s),P=z.pictureURL,I=z.succesPictureUpload,E=z.progress,U=z.setProgress,k=(t=(0,r.Z)(o().mark(function t(r){var a,i,s;return o().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),a=Number(N.current.value),i=Number(w.current.value),s=S.current.value.trim(),h(!0),n.name=s,0!==P.length?n.url=P[0]:null==n||n.url,n.size=i,n.orientation=a,y(n),S.current.value="",e.update(e.updateCounter+1);case 12:case"end":return t.stop()}},t)})),function(e){return t.apply(this,arguments)});(0,c.useEffect)(function(){if(100==E&&!0==I){var e=setTimeout(function(){U(0)},2e3);return function(){return clearInterval(e)}}},[I,E,U]);var T=(0,d.k)(g,b,p,j),Z=T.succesfullUpload,A=T.error;return Z&&e.toggle(),(0,_.jsxs)("div",{className:u().modal__add,children:[A&&(0,_.jsx)("p",{className:u().admin__success,children:"Niestety wystąpił błąd ! "}),(0,_.jsx)("button",{onClick:e.toggle,className:u().modal__closure,children:"X"}),(0,_.jsxs)("form",{className:u().admin__wrapper,onSubmit:k,children:[(0,_.jsx)("label",{className:u().admin__label,htmlFor:"names",children:"Tytuł zdjęcia"}),(0,_.jsx)("input",{className:u().admin__input,ref:S,type:"text",id:"names"}),(0,_.jsx)("label",{className:u().admin__label,htmlFor:"size",children:"Rozmiar zdjęcia w galerii"}),(0,_.jsxs)("select",{className:u().admin__select,defaultValue:null==n?void 0:n.size,ref:w,name:"size",id:"size",children:[(0,_.jsx)("option",{value:0,children:"Małe"}),(0,_.jsx)("option",{value:1,children:"Duże"}),(0,_.jsx)("option",{value:2,children:"Bardzo Duże"})]}),(0,_.jsx)("label",{className:u().admin__label,htmlFor:"orientation",children:"Orientacja Zdjęcia"}),(0,_.jsxs)("select",{className:u().admin__select,defaultValue:null==n?void 0:n.orientation,ref:N,name:"orientidation",id:"orientation",children:[(0,_.jsx)("option",{value:0,children:"Poziome"}),(0,_.jsx)("option",{value:1,children:"Pionowe"})]}),(0,_.jsx)("label",{className:u().admin__label,htmlFor:"file",children:"Załącz zdjęcie"}),(0,_.jsx)("input",{className:u().admin__input,onChange:function(e){if(null!=e.target.files){var t,n=null===(t=e.target)||void 0===t?void 0:t.files[0];f(function(e){return[].concat((0,a.Z)(e),[n])})}},ref:x,style:{border:"none"},type:"file",id:"file",accept:"image/png, image/jpeg"}),0!=E&&(0,_.jsx)("p",{className:u().admin__success,children:"Trwa upload zdjęcia (".concat(Math.round(E),")%")}),I&&(0,_.jsx)("p",{className:u().admin__success,children:" Zdjęcie gotowe do dodania !"}),(0,_.jsx)("button",{className:u().admin__button,type:"submit",children:"Dodaj"})]})]})}},486:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/gallery/EditGallery",function(){return n(4723)}])},1290:function(e){e.exports={modal__add:"editStyle_modal__add__ITs8x",admin__wrapper:"editStyle_admin__wrapper__ti4K1",admin__label:"editStyle_admin__label__D_9sA",admin__input:"editStyle_admin__input__WePz8",description:"editStyle_description__bhWP1",file:"editStyle_file__L4v_i",admin__select:"editStyle_admin__select__Yspb_",admin__button:"editStyle_admin__button__Nrnu9",admin__success:"editStyle_admin__success__g5oFP",admin__error:"editStyle_admin__error__MRjNz",modal__closure:"editStyle_modal__closure__CIPu6"}},29:function(e,t,n){"use strict";function r(e,t,n,r,a,i,o){try{var s=e[i](o),u=s.value}catch(e){n(e);return}s.done?t(u):Promise.resolve(u).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var o=e.apply(t,n);function s(e){r(o,a,i,s,u,"next",e)}function u(e){r(o,a,i,s,u,"throw",e)}s(void 0)})}}n.d(t,{Z:function(){return a}})},6687:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})}},function(e){e.O(0,[16,597,477,774,888,179],function(){return e(e.s=486)}),_N_E=e.O()}]);