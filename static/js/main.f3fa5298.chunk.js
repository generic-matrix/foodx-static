(this.webpackJsonpfoodx=this.webpackJsonpfoodx||[]).push([[0],{128:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),o=n.n(r),i=n(13),c=n.n(i),s=n(32),l=n(41),u=n(34),d=n(36),j=n(23),b=n.n(j),h=n(12),O=n(173),p=n(172),f=n(130),g=n(182),m=n(171),x=n(55),v=n(65),y=n.n(v),S=n(181),k=n(187),w=n(170),C=n(166),N=Object(C.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/featured/?food,cooking,vegan,farm)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),_=n(186),I=n(17),E=n.n(I);var T=function(e){var t=Object(r.useState)(""),n=Object(h.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(""),s=Object(h.a)(c,2),l=s[0],u=s[1],d=Object(r.useState)(!1),j=Object(h.a)(d,2),b=j[0],O=j[1],f=Object(r.useState)("Feilds are missing"),g=Object(h.a)(f,2),v=g[0],C=g[1],I=N();return Object(a.jsxs)("div",{className:I.paper,children:[Object(a.jsx)(_.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:b,autoHideDuration:5,onClick:function(){O(!1)},message:v}),Object(a.jsx)(k.a,{className:I.avatar,children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(x.a,{component:"h1",variant:"h5",children:"Sign in to access 35K+ recipies"}),Object(a.jsxs)("form",{className:I.form,noValidate:!0,onSubmit:function(t){t.preventDefault(),""===o||""===l?(C("Feilds are missing"),O(!0)):(C("Validating..."),O(!0),E.a.Login(o,l).then((function(t){O(!1),e.token(t)})).catch((function(e){C(e),O(!0)})))},children:[Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:o,autoComplete:"email",onChange:function(e){i(e.target.value)},autoFocus:!0}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:l,label:"Password",type:"password",id:"password",onChange:function(e){u(e.target.value)},autoComplete:"current-password"}),Object(a.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:I.submit,children:"Sign In"}),Object(a.jsx)(m.a,{container:!0,children:Object(a.jsx)(m.a,{item:!0,children:Object(a.jsx)(p.a,{href:"#",variant:"body2",onClick:function(){e.state_change("sign_up")},children:"Don't have an account? Sign Up"})})})]})]})};var F=function(e){var t=Object(r.useState)(""),n=Object(h.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)(""),s=Object(h.a)(c,2),l=s[0],u=s[1],d=Object(r.useState)(""),j=Object(h.a)(d,2),b=j[0],O=j[1],f=Object(r.useState)(""),g=Object(h.a)(f,2),v=g[0],C=g[1],I=Object(r.useState)(!1),T=Object(h.a)(I,2),F=T[0],P=T[1],A=Object(r.useState)("Feilds are missing"),G=Object(h.a)(A,2),D=G[0],L=G[1],R=N();return Object(a.jsxs)("div",{className:R.paper,children:[Object(a.jsx)(_.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:F,autoHideDuration:5,onClick:function(){P(!1)},message:D}),Object(a.jsx)(k.a,{className:R.avatar,children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(x.a,{component:"h1",variant:"h5",children:"Welcome Dear ! Access 35K+ Foods Recepies just in one go"}),Object(a.jsxs)("form",{className:R.form,noValidate:!0,onSubmit:function(t){t.preventDefault(),""===l||""===b||""===o?(L("Feilds are missing"),P(!0)):b!==v?(L("The passwords are not matching"),P(!0)):(L("Validating..."),P(!0),E.a.SignUp(o,l,b).then((function(t){P(!1),e.token(t)})).catch((function(e){L(e),P(!0)})))},children:[Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"text",label:"Your Name",name:o,autoComplete:"Name",onChange:function(e){i(e.target.value)},autoFocus:!0}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:l,autoComplete:"Email",onChange:function(e){u(e.target.value)}}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:b,label:"Password",type:"password",id:"password",autoComplete:"Password",onChange:function(e){O(e.target.value)}}),Object(a.jsx)(S.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:v,label:"Retype Password",type:"password",id:"r_password",autoComplete:"Retype Password",onChange:function(e){C(e.target.value)}}),Object(a.jsx)(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:R.submit,children:"Sign Up"}),Object(a.jsx)(m.a,{container:!0,children:Object(a.jsx)(m.a,{item:!0,children:Object(a.jsx)(p.a,{href:"#",variant:"body2",onClick:function(){e.state_change("sign_in")},children:"Login with existing account? Sign In"})})})]})]})};function P(){return Object(a.jsxs)(x.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(p.a,{color:"inherit",href:"https://material-ui.com/",children:"FoodX"})," ",(new Date).getFullYear(),"."]})}function A(e){var t=N(),n=Object(r.useState)("sign_in"),o=Object(h.a)(n,2),i=o[0],c=o[1];return Object(a.jsxs)(m.a,{container:!0,component:"main",className:t.root,children:[Object(a.jsx)(O.a,{}),Object(a.jsx)(m.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),Object(a.jsxs)(m.a,{item:!0,xs:12,sm:8,md:5,component:f.a,elevation:6,square:!0,children:["sign_in"===i?Object(a.jsx)(T,{state_change:c,token:e.token}):Object(a.jsx)(F,{state_change:c,token:e.token}),Object(a.jsx)(g.a,{mt:5,children:Object(a.jsx)(P,{})})]})]})}var G=n(16),D=n(184),L=n(18),R=n.n(L),W=n(33),z=n(174),B=n(175),J=n(177),q=n(176),U=n(188),M=n(189),V=Object(C.a)({root:{maxWidth:345},media:{height:140}});function Y(e){var t=V();return Object(a.jsx)(z.a,{className:t.root,children:Object(a.jsxs)(B.a,{children:[Object(a.jsx)(q.a,{className:t.media,image:"https://source.unsplash.com/featured/?"+E.a.GetNouns(e.title),title:e.title}),Object(a.jsxs)(J.a,{children:[Object(a.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(a.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"div",children:Object(a.jsxs)(g.a,{display:"flex",children:[Object(a.jsx)(U.a,{name:"read-only",value:parseFloat(e.rating),readOnly:!0}),Object(a.jsx)(M.a,{size:"small",label:e.review_count+" reviews"})]})})]})]})})}var H=n(178),K=n(123),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({data:[],page:"loading"}),E.a.GetIP().then((function(t){Object(W.a)(R.a.mark((function n(){var a;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,K(t);case 2:a=n.sent,E.a.GetNearbyFoods(a.latitude,a.longitude,b.a).then((function(t){e.setState({data:t,page:"loaded"})})).catch((function(t){e.setState({data:[],page:"error"})}));case 4:case"end":return n.stop()}}),n)})))()})).catch((function(t){e.setState({data:[],page:"error"})}))}},{key:"GetFoodDetails",value:function(e){this.props.set_food_id(e)}},{key:"render",value:function(){var e=this;return null===this.state?Object(a.jsx)("div",{}):"loading"===this.state.page?Object(a.jsx)("div",{style:{paddingLeft:"10%",paddingRight:"10%",paddingTop:"2%"},children:Object(a.jsx)(H.a,{})}):"loaded"===this.state.page?Object(a.jsxs)("div",{className:"MuiTypography-root MuiTypography-body1",children:[Object(a.jsx)("h2",{children:"People Around you have tried it"}),Object(a.jsx)("p",{children:"The images are powered by Unsplash"}),Object(a.jsx)("br",{}),Object(a.jsx)(m.a,{container:!0,spacing:3,children:this.state.data.map((function(t,n){return Object(a.jsx)(m.a,{item:!0,xs:!0,onClick:function(){e.GetFoodDetails(t.id)},children:Object(a.jsx)(Y,{title:t.name,rating:t.rating,review_count:t.rating_count},t.id)},n)}))})]}):Object(a.jsx)(m.a,{item:!0,xs:12,style:{textAlign:"center"},children:Object(a.jsx)("h2",{children:"Bummer :( We ran into an internal error"})})}}]),n}(o.a.Component),Q=n(89),Z=n(183),$=n(179),ee=n(180);function te(e){var t=e.children,n=e.value,r=e.index,o=Object(Q.a)(e,["children","value","index"]);return Object(a.jsx)("div",Object(G.a)(Object(G.a)({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-".concat(r),"aria-labelledby":"simple-tab-".concat(r)},o),{},{children:n===r&&Object(a.jsx)(g.a,{p:3,children:Object(a.jsx)(x.a,{children:t})})}))}function ne(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var ae=Object(C.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function re(e){var t=ae(),n=o.a.useState(0),i=Object(h.a)(n,2),c=i[0],s=i[1],l=o.a.useState(!0),u=Object(h.a)(l,2),d=u[0],j=u[1],O=o.a.useState({}),p=Object(h.a)(O,2),f=p[0],m=p[1],x=o.a.useState(""),v=Object(h.a)(x,2),y=v[0],C=v[1],N=o.a.useState(5),I=Object(h.a)(N,2),T=I[0],F=I[1],P=Object(r.useState)(null),A=Object(h.a)(P,2),D=A[0],L=A[1],R=Object(r.useState)(!1),W=Object(h.a)(R,2),B=W[0],q=W[1];!0===d&&E.a.GetFoodDetails(e.food_id,b.a).then((function(e){j(!1),m(e)})).catch((function(e){j(!1)}));return!0!==d?Object(a.jsxs)("div",{children:[null!==D?Object(a.jsx)(_.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:B,autoHideDuration:5,onClick:function(){q(!1)},message:D}):Object(a.jsx)("div",{}),Object(a.jsx)(g.a,{display:"flex",justifyContent:"center",m:1,p:1,children:Object(a.jsx)(M.a,{label:"Go back",color:"secondary",onClick:function(){e.set_food_id(null)}})}),Object(a.jsxs)("div",{className:t.root,style:{backgroundColor:"white"},children:[Object(a.jsxs)(Z.a,{value:c,onChange:function(e,t){s(t)},variant:"scrollable",scrollButtons:"auto",centered:!0,children:[Object(a.jsx)($.a,Object(G.a)({label:"Ingrediends"},ne(0))),Object(a.jsx)($.a,Object(G.a)({label:"Steps to Cook"},ne(1))),Object(a.jsx)($.a,Object(G.a)({label:"Rating"},ne(3))),Object(a.jsx)($.a,Object(G.a)({label:"Add A Rating"},ne(4)))]}),Object(a.jsx)(te,{value:c,index:0,style:{padding:"2%"},children:void 0===f.ingredients?Object(a.jsx)("div",{}):f.ingredients.map((function(e,t){return 0===t?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:f.title}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:e}),Object(a.jsx)("br",{})]})]},t):Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:e}),Object(a.jsx)("br",{})]},t)}))}),Object(a.jsx)(te,{value:c,index:1,style:{padding:"2%"},children:void 0===f.instructions?Object(a.jsx)("div",{}):f.instructions.map((function(e,t){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:e}),Object(a.jsx)("br",{})]},t)}))}),Object(a.jsx)(te,{value:c,index:2,style:{padding:"2%"},children:void 0===f.rating||null===f.rating?Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Sorry ! NO reviews found for this food , you may write one heading over to the next section"})}):f.rating.map((function(e,n){return Object(a.jsx)("div",{style:{padding:"10px"},children:Object(a.jsxs)(z.a,{className:t.root,children:[Object(a.jsx)(ee.a,{avatar:Object(a.jsx)(k.a,{"aria-label":"recipe",className:t.avatar,children:e.user_name[0]}),title:e.user_name,subheader:e.message}),Object(a.jsx)(J.a,{children:Object(a.jsx)(g.a,{display:"flex",children:Object(a.jsx)(U.a,{name:"read-only",value:parseFloat(e.star),readOnly:!0})})})]})},n)}))}),Object(a.jsxs)(te,{value:c,index:3,style:{padding:"2%"},children:[Object(a.jsx)("h2",{children:"Do add a review it allows us to improve ! "}),Object(a.jsx)("br",{}),Object(a.jsx)(S.a,{style:{width:"100%"},placeholder:"Add a review ",multiline:!0,rows:2,rowsMax:4,label:y,onChange:function(e){C(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(U.a,{value:T,onChange:function(e){F(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)(w.a,{variant:"outlined",color:"secondary",onClick:function(){var e=E.a.parseJwt(b.a.get("token"));E.a.AddRating(f.id,e.email.split("@")[0],y,T,b.a).then((function(e){L("Review Added !"),q(!0)})).catch((function(e){L(e),q(!0)}))},children:"Submit"})]})]})]}):Object(a.jsx)("div",{style:{paddingLeft:"10%",paddingRight:"10%",paddingTop:"2%"},children:Object(a.jsx)(H.a,{})})}var oe=function(e){var t=Object(r.useState)([]),n=Object(h.a)(t,2),o=n[0],i=n[1],c=Object(r.useState)("Yes ! Type in to get suggesstions"),s=Object(h.a)(c,2),l=s[0],u=s[1],d=Object(r.useState)(null),j=Object(h.a)(d,2),O=j[0],p=j[1];return Object(a.jsxs)("div",{children:[null===O?Object(a.jsxs)(m.a,{container:!0,justify:"center",style:{paddingTop:"20px"},children:[Object(a.jsx)(D.a,{style:{width:"80%"},id:"autocomplete",options:o,getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(a.jsx)(S.a,Object(G.a)(Object(G.a)({},e),{},{label:"What do you want to make today ?",onChange:function(e){!function(e){if(e.length>0){u("Nothing found as searched");var t=[];E.a.AutoComplete(e,b.a).then((function(e){e.forEach((function(e){t.push(e)})),i(t)})).catch((function(e){console.log(e)}))}else u("Yes ! Type in to get suggesstions")}(e.target.value)},placeholder:"Search for terms like Panckaes , maggie etc..",variant:"outlined"}))},onSelect:function(e){return function(e){var t=E.a.GetFoodId(o,e);null!=t&&p(t)}(e.target.value)},noOptionsText:l}),Object(a.jsx)(w.a,{onClick:function(){e.logout()},children:"\xa0Logout"})]}):Object(a.jsx)("div",{}),Object(a.jsx)("br",{}),null!==O?Object(a.jsx)(re,{set_food_id:p,food_id:O}):Object(a.jsx)(X,{set_food_id:p})]})},ie=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={token:b.a.get("token")},e.SetToken=function(t){b.a.set("token",t),e.setState({token:t})},e.Logout=function(){b.a.remove("token"),e.setState({token:void 0})},e}return Object(l.a)(n,[{key:"render",value:function(){return null===this.state?Object(a.jsx)("div",{}):void 0!==this.state.token?Object(a.jsx)(oe,{logout:this.Logout}):Object(a.jsx)(A,{token:this.SetToken})}}]),n}(o.a.Component),ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,191)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(ie,{})}),document.getElementById("root")),ce()},17:function(e,t,n){var a=n(112),r="http://localhost:9091";e.exports={Login:function(e,t){return new Promise((function(n,a){fetch(r+"/api/v1/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){200===e.status?e.json().then((function(e){null===e.error?n(e.data.token):a(e.error)})):a("--\x3eInternal Error")})).catch((function(e){return a("Internal Error")}))}))},SignUp:function(e,t,n){return new Promise((function(a,o){fetch(r+"/api/v1/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:n})}).then((function(e){200===e.status?e.json().then((function(e){null===e.error?a(e.data.token):o(e.error)})):o("Internal Error")})).catch((function(e){return o("Internal Error")}))}))},AutoComplete:function(e,t){return new Promise((function(n,a){fetch(r+"/api/v1/autocomplete?food_name="+e,{method:"GET",headers:{Authorization:"Bearer "+t.get("token")}}).then((function(e){200===e.status?e.json().then((function(e){null===e.error?n(e.data):a(e.error)})):a("Internal Error")})).catch((function(e){return a("Internal Error")}))}))},GetFoodId:function(e,t){var n=null;return e.forEach((function(e){e.name===t&&(n=e.id)})),n},GetIP:function(){return new Promise((function(e,t){fetch("https://www.cloudflare.com/cdn-cgi/trace",{method:"GET"}).then((function(n){200===n.status?n.text().then((function(t){e(t.split("\n")[2].replace("ip=",""))})).catch((function(e){t("Internal Error")})):t("Internal Error")})).catch((function(e){return t("Internal Error")}))}))},GetNearbyFoods:function(e,t,n){return new Promise((function(a,o){fetch(r+"/api/v1/nearme?lat="+e+"&lng="+t,{method:"GET",headers:{Authorization:"Bearer "+n.get("token")}}).then((function(e){200===e.status?e.json().then((function(e){null===e.error?a(e.data):o(e.error)})):o("Internal Error")})).catch((function(e){return o("Internal Error")}))}))},GetNouns:function(e){var t="",n=(new a.Lexer).lex(e),r=(new a.Tagger).tag(n);for(var o in r){var i=r[o],c=i[0],s=i[1];"NN"!==s&&"NNP"!==s&&"NNS"!==s||(t=t+c+",")}return t},GetFoodDetails:function(e,t){return new Promise((function(n,a){fetch(r+"/api/v1/search?food_id="+e,{method:"GET",headers:{Authorization:"Bearer "+t.get("token")}}).then((function(e){200===e.status?e.json().then((function(e){null===e.error?n(e.data):a(e.error)})):a("Internal Error")})).catch((function(e){return a("Internal Error")}))}))},AddRating:function(e,t,n,a,o){return new Promise((function(i,c){fetch(r+"/api/v1/add-rating",{method:"POST",headers:{Authorization:"Bearer "+o.get("token"),"Content-Type":"application/json"},body:JSON.stringify({food_id:e,user_name:t,message:n,star:""+a})}).then((function(e){200===e.status?e.json().then((function(e){console.log(JSON.stringify(e)),null===e.error?i("okay"):c(e.error)})):c("Internal Error")})).catch((function(e){return c("Internal Error")}))}))},parseJwt:function(e){var t=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(t).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""));return JSON.parse(n)}}}},[[128,1,2]]]);
//# sourceMappingURL=main.f3fa5298.chunk.js.map