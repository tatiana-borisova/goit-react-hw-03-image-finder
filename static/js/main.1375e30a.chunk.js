(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU",label:"Searchbar_label__1BV3w",input:"Searchbar_input__2C4aO"}},14:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__gboaM",item:"ImageGallery_item__35Kd3"}},15:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},17:function(e,t,a){e.exports={image:"ImageGalleryItem_image__2xsbt"}},18:function(e,t,a){e.exports={button:"Button_button__3QF_k"}},25:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),c=a.n(o),s=(a(24),a(25),a(12)),i=a(3),u=a.n(i),l=a(9),h=a(5),m=a(6),b=a(8),p=a(7),d=a(11),g=a(16),f=a.n(g),j=function(){var e=Object(l.a)(u.a.mark((function e(t,a){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat("https://pixabay.com/api","/?image_type=photo&orientation=horizontal&q=").concat(t,"&page=").concat(a,"&per_page=12&key=").concat("23600792-c35e54b22aba5a82a8a51cd77"),e.next=3,fetch(r);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=j,v=a(19),O=a(10),x=a.n(O),k=a(1),w=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.searchQuery,r=e.props.onSubmit;""!==a.trim()?(r(a),e.setState({searchQuery:""})):d.b.warning("Enter your request")},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(k.jsx)("header",{className:x.a.Searchbar,children:Object(k.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmit,children:[Object(k.jsxs)("button",{type:"submit",className:x.a.button,children:[Object(k.jsx)(v.a,{}),Object(k.jsx)("span",{className:x.a.label,children:"Search"})]}),Object(k.jsx)("input",{className:x.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleQueryChange,value:this.state.searchQuery})]})})}}]),a}(r.Component),_=a(17),S=a.n(_),C=function(e){var t=e.src,a=e.alt,r=e.onClick,n=e.largeImage;return Object(k.jsx)("img",{className:S.a.image,src:t,alt:a,onClick:function(){return r(n)}})},I=a(14),M=a.n(I),N=function(e){var t=e.result,a=e.onClick;return Object(k.jsx)("ul",{className:M.a.gallery,children:t.map((function(e){return Object(k.jsx)("li",{className:M.a.item,children:Object(k.jsx)(C,{src:e.webformatURL,alt:e.tags,largeImage:e.largeImageURL,onClick:a})},e.id)}))})},E=a(18),Q=a.n(E),D=function(e){var t=e.onClick;return Object(k.jsx)("button",{className:Q.a.button,type:"button",onClick:t,children:"Load more"})},F=a(15),L=a.n(F),B=document.getElementById("modal-root"),K=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){return"Escape"===t.code&&e.props.onClick()},e.handleBackdropClick=function(t){return t.currentTarget===t.target&&e.props.onClick()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImage;return Object(o.createPortal)(Object(k.jsx)("div",{className:L.a.overlay,onClick:this.handleBackdropClick,children:Object(k.jsx)("div",{className:L.a.modal,children:Object(k.jsx)("img",{src:e,alt:""})})}),B)}}]),a}(r.Component),U=(a(48),a(49),"idle"),A="resolved",G="pending",T=function(e){Object(b.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",page:1,result:[],showModal:!1,status:U,largeImage:null},e.onLoadMoreClick=Object(l.a)(u.a.mark((function t(){var a,r,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.state,r=a.page,n=a.searchQuery,e.setState({status:G}),e.onFetchImages(r,e.onErrorNoMoreImages(n),e.onErrorNoMoreImages(n));case 3:case"end":return t.stop()}}),t)}))),e.onFetchImages=function(){var t=Object(l.a)(u.a.mark((function t(a,r,n){var o,c,i;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.state.searchQuery,t.prev=1,t.next=4,y(o,a);case 4:if(c=t.sent,0!==(i=c.hits).length){t.next=8;break}throw new Error(r);case 8:if(!(i.length<12)){t.next=11;break}throw e.setState((function(e){return{result:[].concat(Object(s.a)(e.result),Object(s.a)(i))}})),new Error(n);case 11:e.setState((function(e){return{status:A,result:[].concat(Object(s.a)(e.result),Object(s.a)(i)),page:a+1}})),window.scrollBy({top:1e3,behavior:"smooth"}),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),d.b.error(t.t0.message),e.setState({status:U});case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e,a,r){return t.apply(this,arguments)}}(),e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e.toggleModal=function(t){e.setState((function(e){return{largeImage:t,showModal:!e.showModal}}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(l.a)(u.a.mark((function e(t,a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=this.state.searchQuery)!==a.searchQuery&&(this.setState({result:[],status:G}),this.onFetchImages(1,this.onErrorNoImages(r),this.onErrorNoMoreImages(r)));case 2:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"onErrorNoImages",value:function(e){return'No images found for "'.concat(e,'". Try again.')}},{key:"onErrorNoMoreImages",value:function(e){return'No more images found for "'.concat(e,'".')}},{key:"render",value:function(){var e=this.state,t=e.result,a=e.status,r=e.showModal,n=e.largeImage;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(w,{onSubmit:this.handleFormSubmit}),Object(k.jsx)(N,{result:t,onClick:this.toggleModal}),a===A&&Object(k.jsx)(D,{onClick:this.onLoadMoreClick}),a===G&&Object(k.jsx)(f.a,{type:"ThreeDots",color:"#995471",width:100,style:{textAlign:"center"}}),r&&Object(k.jsx)(K,{largeImage:n,onClick:this.toggleModal}),Object(k.jsx)(d.a,{position:"top-right",autoClose:3e3})]})}}]),a}(r.Component),W=T;c.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(W,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1375e30a.chunk.js.map