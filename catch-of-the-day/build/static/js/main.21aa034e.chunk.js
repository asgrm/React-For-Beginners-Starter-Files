(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{32:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(19),i=a(64),o=a(65),c=a(66),l=a(6),u=a(7),h=a(9),m=a(8);function p(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function d(e){return e[Math.floor(Math.random()*e.length)]}function f(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(d(e),"-").concat(d(e),"-").concat(d(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var v=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).myInput=r.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter A Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"enter store name",defaultValue:f()}),r.a.createElement("button",{type:"submit"},"Visit Store \u2192"))}}]),a}(r.a.Component),g=a(11),b=function(e){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"Of"),r.a.createElement("span",{className:"the"},"The")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,e.tagline)))},y=a(16),E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).renderOrder=function(t){var a=e.props.fishes[t],n=e.props.order[t],s=a&&"available"===a.status,i={classNames:"order",key:t,timeout:{enter:500,exit:500}};return a?s?r.a.createElement(y.CSSTransition,i,r.a.createElement("li",{key:t},r.a.createElement("span",null,r.a.createElement(y.TransitionGroup,{component:"span",className:"count"},r.a.createElement(y.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",null,n))),"lbs ",a.name,p(a.price*n),r.a.createElement("button",{onClick:function(){return e.props.removeFromOrder(t)}},"\xd7")))):r.a.createElement(y.CSSTransition,i,r.a.createElement("li",{key:t},"Sorry ",a?a.name:"fish"," is no longer available")):null},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+n.price*r:t}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h2",null,"Order"),r.a.createElement(y.TransitionGroup,{component:"ul",className:"order"},t.map(this.renderOrder)),r.a.createElement("div",{className:"total"},"Total:",r.a.createElement("strong",null,p(a))))}}]),a}(r.a.Component),O=a(17),j=a.n(O),S=a(23),w=a(20),k=a(15),C=a.n(k),F=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).nameRef=r.a.createRef(),e.priceRef=r.a.createRef(),e.statusRef=r.a.createRef(),e.descRef=r.a.createRef(),e.imageRef=r.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:+e.priceRef.current.value,status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"fish-edit",onSubmit:this.createFish,autoComplete:"off"},r.a.createElement("input",{type:"text",name:"name",ref:this.nameRef,placeholder:"Name"}),r.a.createElement("input",{type:"text",name:"price",ref:this.priceRef,placeholder:"Price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),r.a.createElement("input",{type:"text",name:"image",ref:this.imageRef,placeholder:"Image"}),r.a.createElement("button",{type:"submit"},"+ Add fish"))}}]),a}(r.a.Component),x=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=Object(g.a)(Object(g.a)({},e.props.fish),{},{[t.currentTarget.name]:t.currentTarget.value});console.log(a),e.props.updateFish(e.props.index,a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),r.a.createElement("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),r.a.createElement("select",{name:"status",onChange:this.handleChange,value:this.props.fish.status},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out!")),r.a.createElement("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),r.a.createElement("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),a}(r.a.Component),N=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Sign in to manage your store's inventory"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With GitHub"))},R=a(30),T=a.n(R),I=C.a.initializeApp({apiKey:"AIzaSyCa6LSWdjvZ1wCei09hwV4t5ZEbJ3JoOKg",authDomain:"catch-of-the-day-by-asgrm.firebaseapp.com",databaseURL:"https://catch-of-the-day-by-asgrm-default-rtdb.firebaseio.com"}),A=T.a.createClass(I.database()),D=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(S.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.fetch(e.props.storeId,{context:Object(w.a)(e)});case 2:if((n=t.sent).owner){t.next=6;break}return t.next=6,A.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid});case 6:e.setState({uid:a.user.uid,owner:n.owner||a.user.uid});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(C.a.auth["".concat(t,"AuthProvider")]);I.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(S.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("loging out!"),t.next=3,C.a.auth().signOut();case 3:e.setState({uid:null});case 4:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=r.a.createElement("button",{onClick:this.logout},"Log Out!");return this.state.uid?this.state.uid!==this.state.owner?r.a.createElement("div",null,r.a.createElement("p",null,"Sorry you are not the owner!"),t):r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory!!!"),t,Object.keys(this.props.fishes).map((function(t){return r.a.createElement(x,{key:t,index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})})),r.a.createElement(F,{addFish:this.props.addFish}),r.a.createElement("button",{onClick:this.props.loadSamplesFishes},"Load Sample Fishes")):r.a.createElement(N,{authenticate:this.authenticate})}}]),a}(r.a.Component),L={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},P=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,n=t.name,s=t.price,i=t.desc,o="available"===t.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("h3",{className:"fish-name"},n,r.a.createElement("span",{className:"price"},p(s))),r.a.createElement("p",null,i),r.a.createElement("button",{onClick:function(){return e.props.addToOrder(e.props.index)},disabled:!o},o?"Add To Card":"Sold out!"))}}]),a}(r.a.Component),J=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={fishes:{},order:{}},e.addToOrder=function(t){var a=Object(g.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(g.a)({},e.state.order);delete a[t],e.setState({order:a})},e.addFish=function(t){var a=Object(g.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var n=Object(g.a)({},e.state.fishes);n[t]=a,e.setState({fishes:n})},e.deleteFish=function(t){var a=Object(g.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadSamplesFishes=function(){e.setState({fishes:L})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=A.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){A.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(b,{tagline:"fresh seafood market"}),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map((function(t){return r.a.createElement(P,{key:t,index:t,addToOrder:e.addToOrder,details:e.state.fishes[t]})})))),r.a.createElement(E,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(D,{fishes:this.state.fishes,addFish:this.addFish,loadSamplesFishes:this.loadSamplesFishes,updateFish:this.updateFish,deleteFish:this.deleteFish,storeId:this.props.match.params.storeId}))}}]),a}(r.a.Component),M=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Page not found"))},W=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(c.a,{exact:!0,path:"/",component:v}),r.a.createElement(c.a,{path:"/store/:storeId",component:J}),r.a.createElement(c.a,{component:M})))};a(60);Object(s.render)(r.a.createElement(W,null),document.querySelector("#main"))}},[[32,1,2]]]);
//# sourceMappingURL=main.21aa034e.chunk.js.map