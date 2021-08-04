(this["webpackJsonpastronauts-2-front-end"]=this["webpackJsonpastronauts-2-front-end"]||[]).push([[0],{117:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(12),o=a.n(s),i=(a(117),a(19)),c=a(8),l=a(15),d=a(28),u=a(37),j=a.n(u),m=a(53),b=a(29),h=a.n(b),p="https://api-astronauts.herokuapp.com/api/",g=function(e,t){var a=Object(r.useState)(e),n=Object(c.a)(a,2),s=n[0],o=n[1];return Object(r.useEffect)((function(){function e(){return(e=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h()({method:"get",baseURL:p,url:"/astronauts",headers:{jwtToken:window.localStorage.getItem("token")}}),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){return e.apply(this,arguments)}().then((function(e){var t=e.data.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{birthday:new Date(e.birthday)})}));o(t)})).catch((function(e){console.log(e)}))}),[t]),{astronauts:s,setAstronauts:o,addAstronaut:function(e){var t=[].concat(Object(d.a)(s),[e]);o(t)},deleteAstronaut:function(e){var t=s.filter((function(t){return t._id!==e}));o(t)},editAstronaut:function(e){var t=s.map((function(t){return t._id===e._id?e:t}));o(t)}}},x=function(){var e={type:"",text:""},t=Object(r.useState)(e),a=Object(c.a)(t,2),n=a[0],s=a[1],o=Object(r.useState)(!1),i=Object(c.a)(o,2),l=i[0],d=i[1];return[l,n,d,s,function(){s(e),d(!1)}]},O=a(217),f=a(220),v=a(224),w=a(223),y=a(219),N=a(221),k=a(222),S=a(167),C=a(218),I=a(225),L=a(96),T=a.n(L),A=a(95),W=a.n(A),D=a(216),q=a(16),U=a(234),F=a(215),E=a(213),H=a(214),M=a(212),G=a(2);var P=function(e){var t=e.open,a=e.handleClose,r=e.handleDelete,n=e.astronaut;return Object(G.jsxs)(U.a,{open:t,onClose:a,transitionDuration:10,children:[Object(G.jsx)(M.a,{id:"alert-dialog-title",children:"Deleting ".concat(n.firstName," ").concat(n.lastName)}),Object(G.jsx)(E.a,{children:Object(G.jsx)(H.a,{id:"alert-dialog-description",children:"Do you really want to delete ".concat(n.firstName," ").concat(n.lastName,"?")})}),Object(G.jsxs)(F.a,{children:[Object(G.jsx)(D.a,{onClick:a,color:"primary",children:"Cancel"}),Object(G.jsx)(D.a,{onClick:r,color:"primary",variant:"contained",children:"Delete"})]})]})},R={root:{flexGrow:1,marginBottom:"2rem"},table:{minWidth:650},tableContainer:{margin:"auto",marginTop:"2rem"},tableHeader:{backgroundColor:"#3F3D56"},tableHeaderCell:{color:"white",fontWeight:"bold"},buttonContainer:{marginTop:"1rem",display:"flex",justifyContent:"end"}},_=Object(O.a)((function(){return R}));var B=function(e){var t=_(),a=Object(r.useState)(!1),n=Object(c.a)(a,2),s=n[0],o=n[1],i=Object(r.useState)({}),l=Object(c.a)(i,2),d=l[0],u=l[1],j=e.astronauts,m=e.deleteAstronaut,b=function(){o(!1),u({})};return Object(G.jsxs)("div",{className:t.root,children:[Object(G.jsxs)(C.a,{maxWidth:"md",children:[Object(G.jsx)(y.a,{component:S.a,className:t.tableContainer,children:Object(G.jsxs)(f.a,{className:t.table,"aria-label":"simple table",children:[Object(G.jsx)(N.a,{className:t.tableHeader,children:Object(G.jsxs)(k.a,{children:[Object(G.jsx)(w.a,{className:t.tableHeaderCell,children:"#"}),Object(G.jsx)(w.a,{className:t.tableHeaderCell,children:"Firstname"}),Object(G.jsx)(w.a,{className:t.tableHeaderCell,children:"Lastname"}),Object(G.jsx)(w.a,{className:t.tableHeaderCell,children:"Birthday"}),Object(G.jsx)(w.a,{className:t.tableHeaderCell,children:"Superpower"}),Object(G.jsx)(w.a,{className:t.tableHeaderCell,children:"Options"})]})}),Object(G.jsx)(v.a,{children:j.map((function(e,t){return Object(G.jsxs)(k.a,{hover:!0,children:[Object(G.jsx)(w.a,{component:"th",scope:"row",children:t+1}),Object(G.jsx)(w.a,{children:e.firstName}),Object(G.jsx)(w.a,{children:e.lastName}),Object(G.jsx)(w.a,{children:e.birthday.toLocaleString("en-GB",{timeZone:"UTC"}).slice(0,10)}),Object(G.jsx)(w.a,{children:e.superpower}),Object(G.jsxs)(w.a,{children:[Object(G.jsx)(I.a,{"aria-label":"edit",component:q.b,to:"/astronauts/".concat(e._id),children:Object(G.jsx)(W.a,{})}),Object(G.jsx)(I.a,{"aria-label":"delete",onClick:function(){return function(e){o(!0),u(e)}(e)},children:Object(G.jsx)(T.a,{})})]})]},e._id)}))})]})}),Object(G.jsx)(C.a,{maxWidth:!1,disableGutters:!0,className:t.buttonContainer,children:Object(G.jsx)(D.a,{color:"primary",variant:"contained",component:q.b,to:"/astronauts/add",children:"Add astronaut"})})]}),Object(G.jsx)(P,{open:s,handleClose:b,astronaut:d,handleDelete:function(){return m(d._id),void b()}})]})},z=a(226),V=a(227),J=a(102),K=a.p+"static/media/logo2.9a5711c6.svg",Z={navbar:{backgroundColor:"white"},title:{color:"rgba(0, 0, 0, 0.87)",flexGrow:1,display:"flex",textTransform:"uppercase",letterSpacing:"0.3rem"},navImage:{maxHeight:"25px",marginLeft:"0.4rem"}},Q=Object(O.a)((function(){return Z}));var X=function(e){var t=e.isUserLoggedIn,a=e.logout,r=Q();return Object(G.jsx)("div",{className:r.root,children:Object(G.jsx)(z.a,{position:"static",className:r.navbar,children:Object(G.jsxs)(V.a,{children:[Object(G.jsxs)(J.a,{variant:"h6",className:r.title,children:["Astronauts"," ",Object(G.jsx)("img",{src:K,alt:"Astronaut and spaceship.",className:r.navImage})]}),t&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(D.a,{color:"primary",variant:"contained",component:q.b,to:"/astronauts",children:"All astronauts"}),Object(G.jsx)(D.a,{color:"primary",variant:"contained",component:q.b,to:"/astronauts/add",style:{marginLeft:"1rem"},children:"Add astronaut"}),Object(G.jsx)(D.a,{color:"primary",variant:"contained",component:q.b,to:"/",style:{marginLeft:"1rem"},onClick:function(){return a()},children:"Logout"})]}),!t&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(D.a,{color:"primary",variant:"contained",component:q.b,to:"/register",style:{marginLeft:"1rem"},children:"Sign up"}),Object(G.jsx)(D.a,{color:"primary",variant:"contained",component:q.b,to:"/login",style:{marginLeft:"1rem"},children:"Login"})]})]})})})},Y=function(e,t){var a=Object(r.useState)(e),n=Object(c.a)(a,2),s=n[0],o=n[1],i=Object(r.useState)(t),l=Object(c.a)(i,2),d=l[0],u=l[1];return[s,function(e){o(e.target.value),u(!1)},function(){o(""),u("")},d,u]},$=a(230),ee=a(97),te={root:{flexGrow:1},paper:{maxWidth:"450px",margin:"2rem auto",padding:"1rem"},image:{width:"80%",marginLeft:"10%",marginTop:"1rem"}},ae=Object(O.a)((function(){return te}));var re=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),n=a[0],s=a[1],o=e.handleAstronaut,i=e.history,l=e.astronauts,d=(e.match.params||"").id,u=ae(),j="",m="",b="",h="",p=l.find((function(e){return e._id===d}))||!1;p&&(j=p.firstName,m=p.lastName,b=p.birthday.toISOString().slice(0,10),h=p.superpower);var g=Y(j,!1),x=Object(c.a)(g,5),O=x[0],f=x[1],v=x[2],w=x[3],y=x[4],N=Y(m,!1),k=Object(c.a)(N,5),C=k[0],I=k[1],L=k[2],T=k[3],A=k[4],W=Y(b,!1),q=Object(c.a)(W,5),U=q[0],F=q[1],E=q[2],H=q[3],M=q[4],P=Y(h,!1),R=Object(c.a)(P,5),_=R[0],B=R[1],z=R[2],V=R[3],Z=R[4];return Object(G.jsx)("div",{className:u.root,children:Object(G.jsx)(S.a,{className:u.paper,elevation:3,children:Object(G.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new Date(U),a={firstName:O,lastName:C,birthday:t,superpower:_},r=Object(ee.astronautValidation)(a).error;if(r){var n=r.details[0].context.key;"firstName"===n?y(!0):"lastName"===n?A(!0):"birthday"===n?M(!0):Z(!0),s(r.details[0].message)}else o(a,d),v(),L(),E(),z(),i.push("/astronauts")},children:[Object(G.jsx)(J.a,{component:"h1",variant:"h4",align:"center",children:"Add new team member"}),Object(G.jsx)("img",{className:u.image,src:K,alt:"Astronaut and spaceship."}),Object(G.jsx)($.a,{autoFocus:!0,required:!0,label:"Firstname",onChange:f,value:O,variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter the firstname.",error:w,helperText:w&&n}),Object(G.jsx)($.a,{required:!0,label:"Lastname",onChange:I,value:C,variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter the lastname.",error:T,helperText:T&&n}),Object(G.jsx)($.a,{id:"date",label:"Birthday",type:"date",value:U,onChange:F,variant:"outlined",margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},error:H,helperText:H&&n}),Object(G.jsx)($.a,{required:!0,label:"Superpower",onChange:B,value:_,variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter the superpower.",error:V,helperText:V&&n}),Object(G.jsx)(D.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",style:{marginTop:"0.5rem"},children:"Save astronaut"})]})})})},ne=a(60),se={root:{flexGrow:1},paper:{maxWidth:"450px",margin:"2rem auto",padding:"1rem"},image:{width:"80%",marginLeft:"10%"}},oe=Object(O.a)((function(){return se}));var ie=function(e){var t=e.setIsMessage,a=e.setMessage,n=oe(),s=Object(r.useState)(""),o=Object(c.a)(s,2),i=o[0],d=o[1],u=Y("",!1),b=Object(c.a)(u,5),g=b[0],x=b[1],O=(b[2],b[3]),f=b[4],v=Y("",!1),w=Object(c.a)(v,5),y=w[0],N=w[1],k=(w[2],w[3]),C=w[4],I=Y("",!1),L=Object(c.a)(I,5),T=L[0],A=L[1],W=(L[2],L[3]),q=L[4],U=Y("",!1),F=Object(c.a)(U,5),E=F[0],H=F[1],M=(F[2],F[3]),P=F[4],R=Object(r.useState)(!1),_=Object(c.a)(R,2),B=_[0],z=_[1],V=function(){var e=Object(m.a)(j.a.mark((function e(r){var n,s,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=Object(ne.registerValidation)({username:g,email:y,password:T,passwordConfirmation:E}),!(s=n.error)){e.next=22;break}if("username"!==(o=s.details[0].context.key)){e.next=8;break}f(!0),e.next=19;break;case 8:if("email"!==o){e.next=12;break}C(!0),e.next=19;break;case 12:if("password"!==o){e.next=17;break}return q(!0),e.abrupt("return",d("Password has to have at least 5 characters."));case 17:return P(!0),e.abrupt("return",d("Entered password in not the same as password above."));case 19:d(s.details[0].message),e.next=23;break;case 22:h()({method:"post",baseURL:p,url:"/users/register",data:{username:g,email:y,password:T,passwordConfirmation:E}}).then((function(e){var r=e.data.success;r&&(a({type:"success",text:r.message}),t(!0)),z(!0)})).catch((function(e){var t=e.response.data.error;"email"===t.key?C(!0):"username"===t.key&&f(!0),d(t.message)}));case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsx)("div",{className:n.root,children:Object(G.jsxs)(S.a,{className:n.paper,elevation:3,children:[Object(G.jsxs)("form",{onSubmit:V,children:[Object(G.jsx)(J.a,{component:"h1",variant:"h4",align:"center",children:"Register and start recording your astronauts"}),Object(G.jsx)("img",{className:n.image,src:K,alt:"Astronaut and spaceship."}),Object(G.jsx)($.a,{autoFocus:!0,required:!0,label:"Username",onChange:x,value:g,variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Choose your username.",error:O,helperText:O&&i}),Object(G.jsx)($.a,{required:!0,label:"Email",onChange:N,value:y,type:"email",variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter your email.",error:k,helperText:k&&i}),Object(G.jsx)($.a,{required:!0,label:"Password",onChange:A,value:T,type:"password",variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter your password.",error:W,helperText:W&&i}),Object(G.jsx)($.a,{required:!0,label:"Password confirmation",onChange:H,value:E,type:"password",variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter your password again.",error:M,helperText:M&&i}),Object(G.jsx)(D.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",style:{marginTop:"0.5rem"},children:"Register"})]}),B&&Object(G.jsx)(l.a,{to:"/login"})]})})},ce={root:{flexGrow:1},paper:{maxWidth:"450px",margin:"2rem auto",padding:"1rem"},image:{width:"80%",marginLeft:"10%",marginTop:"1rem"}},le=Object(O.a)((function(){return ce}));var de=function(e){var t=e.setIsUserLoggedIn,a=e.setIsMessage,n=e.setMessage,s=le(),o=Object(r.useState)(""),i=Object(c.a)(o,2),d=i[0],u=i[1],j=Y("",!1),m=Object(c.a)(j,5),b=m[0],g=m[1],x=(m[2],m[3]),O=m[4],f=Y("",!1),v=Object(c.a)(f,5),w=v[0],y=v[1],N=(v[2],v[3]),k=v[4],C=Object(r.useState)(!1),I=Object(c.a)(C,2),L=I[0],T=I[1];return Object(G.jsx)("div",{className:s.root,children:Object(G.jsxs)(S.a,{className:s.paper,elevation:3,children:[Object(G.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=Object(ne.loginValidation)({username:b,password:w}).error;r?("username"===r.details[0].context.key?O(!0):k(!0),u(r.details[0].message)):h()({method:"post",baseURL:p,url:"/users/login",data:{username:b,password:w}}).then((function(e){window.localStorage.setItem("token",e.data.user.token);var r=e.data.success;r&&(n({type:"success",text:r.message}),a(!0)),t(!0),T(!0)})).catch((function(e){var t=e.response.data.error;t&&(O(!0),k(!0),n({type:"error",text:t.message}),a(!0))}))},children:[Object(G.jsx)(J.a,{component:"h1",variant:"h3",align:"center",children:"Welcome back!"}),Object(G.jsx)("img",{className:s.image,src:K,alt:"Astronaut and spaceship."}),Object(G.jsx)(J.a,{component:"h2",variant:"h5",align:"center",style:{marginTop:"1rem"},children:"Just log in and you are ready to lunch!"}),Object(G.jsx)($.a,{autoFocus:!0,required:!0,label:"Username",onChange:g,value:b,variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter your username.",error:x,helperText:x&&d}),Object(G.jsx)($.a,{required:!0,label:"Password",onChange:y,value:w,type:"password",variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter your password.",error:N,helperText:N&&d}),Object(G.jsx)(D.a,{fullWidth:!0,type:"submit",variant:"contained",color:"primary",style:{marginTop:"0.5rem"},children:"Log in"})]}),L&&Object(G.jsx)(l.a,{to:"/astronauts"})]})})},ue=a(98);var je=function(){var e=!1,t=window.localStorage.getItem("token");if(t){var a=Object(ue.a)(t),n=(new Date).getTime()/1e3;a.exp>n?e=!0:window.localStorage.removeItem("token")}var s=Object(r.useState)(e),o=Object(c.a)(s,2),i=o[0],l=o[1];return[i,l,function(){window.localStorage.removeItem("token"),l(!1)}]},me=a.p+"static/media/logo3.013cc87e.svg",be={root:{flexGrow:1,backgroundImage:"url(".concat(me,")"),backgroundPosition:"center",backgroundSize:"auto 135%",backgroundRepeat:"no-repeat"},title:{width:"80%",maxWidth:"900px",display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto","& a:hover":{transform:"scale(1.1)"}},heading:{fontSize:"7rem",color:"white",textShadow:"2px 2px 10px rgba(0,0,0,0.5)"},subtitle:{color:"white",fontSize:"2rem",textShadow:"2px 2px 6px rgba(0,0,0,0.5)"},signupButton:{height:"50px",width:"180px",margin:"3rem auto",fontSize:"1.1rem",letterSpacing:"0.3rem",fontWeight:"bold"}},he=Object(O.a)((function(){return be}));var pe=function(){var e=he();return Object(G.jsx)("div",{className:e.root,children:Object(G.jsxs)("div",{className:e.title,children:[Object(G.jsxs)("h1",{className:e.heading,children:["Know",Object(G.jsx)("br",{}),"your",Object(G.jsx)("br",{}),"astronauts"]}),Object(G.jsx)("p",{className:e.subtitle,children:"Keep records about your astronauts. Fast, easy and simple."}),Object(G.jsx)(D.a,{className:e.signupButton,color:"secondary",variant:"contained",component:q.b,to:"/register",children:"Sign up"})]})})},ge={root:{marginTop:"auto"},footer:{backgroundColor:"#212529"},title:{flexGrow:1},link:{color:"white",margin:"0 3px"}},xe=Object(O.a)((function(){return ge}));var Oe=function(){var e=xe();return Object(G.jsx)(z.a,{position:"static",className:e.footer,children:Object(G.jsx)(V.a,{children:Object(G.jsxs)(J.a,{variant:"caption",className:e.title,align:"center",children:["\xa9Astronauts. Created by",Object(G.jsx)(q.b,{to:"https://github.com/samueldusek",className:e.link,children:"Samuel Du\u0161ek"}),"with Node.JS, MongoDB a React."]})})})},fe=(a(165),a(99)),ve=Object(fe.a)({palette:{primary:{main:"#3F3D56"},secondary:{main:"rgba(0, 0, 0, 0.87)"}}}),we=a(3),ye=["component","isUserLoggedIn"],Ne=function(e){var t=e.component,a=e.isUserLoggedIn,r=Object(we.a)(e,ye);return Object(G.jsx)(l.b,Object(i.a)(Object(i.a)({},r),{},{render:function(e){return a?Object(G.jsx)(t,Object(i.a)(Object(i.a)({},r),e)):Object(G.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},ke=a(233),Se=a(231);function Ce(e){return Object(G.jsx)(Se.a,Object(i.a)({elevation:6,variant:"filled"},e))}var Ie=function(e){var t=e.open,a=e.message,r=e.hideAndClearMessage;return Object(G.jsx)("div",{children:Object(G.jsx)(ke.a,{autoHideDuration:5e3,anchorOrigin:{vertical:"top",horizontal:"center"},open:t,onClose:r,children:Object(G.jsx)(Ce,{onClose:r,severity:"error"===a.type?"error":"success",children:a.text})})})},Le=a.p+"static/media/logo.638e5f23.svg",Te={root:{flexGrow:1},title:{width:"80%",maxWidth:"500px",display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto"},heading:{fontSize:"4rem",color:"black"},subtitle:{color:"black",fontSize:"2rem"},image:{width:"100%",marginTop:"2rem"}},Ae=Object(O.a)((function(e){return Te}));var We=function(){var e=Ae();return Object(G.jsx)("div",{className:e.root,children:Object(G.jsxs)("div",{className:e.title,children:[Object(G.jsx)("h1",{className:e.heading,children:"It looks like you lost!"}),Object(G.jsx)("p",{className:e.subtitle,children:"Try to click on the rocket."}),Object(G.jsx)("p",{className:e.subtitle,children:"Hopefully, it will help you reach your destination."}),Object(G.jsx)(q.b,{to:"/",children:Object(G.jsx)("img",{src:Le,alt:"Spaceship",className:e.image})})]})})},De=a(229);var qe=function(){var e=je(!1),t=Object(c.a)(e,3),a=t[0],r=t[1],n=t[2],s=g([],a),o=s.astronauts,d=s.addAstronaut,u=s.deleteAstronaut,j=s.editAstronaut,m=x(!1,""),b=Object(c.a)(m,5),O=b[0],f=b[1],v=b[2],w=b[3],y=b[4];return Object(G.jsx)("div",{className:"App",children:Object(G.jsxs)(De.a,{theme:ve,children:[Object(G.jsx)(X,{isUserLoggedIn:a,logout:n}),Object(G.jsxs)(l.d,{children:[Object(G.jsx)(l.b,{exact:!0,path:"/login",render:function(e){return Object(G.jsx)(de,Object(i.a)({setIsUserLoggedIn:r,setIsMessage:v,setMessage:w},e))}}),Object(G.jsx)(l.b,{exact:!0,path:"/register",render:function(){return Object(G.jsx)(ie,{setIsMessage:v,setMessage:w})}}),Object(G.jsx)(Ne,{isUserLoggedIn:a,exact:!0,path:"/astronauts",component:B,astronauts:o,deleteAstronaut:function(e){h()({method:"delete",baseURL:p,url:"/astronauts/".concat(e),headers:{jwtToken:window.localStorage.getItem("token")}}).then((function(t){u(e);var a=t.data.success;a&&(w({type:"success",text:a.message}),v(!0))})).catch((function(e){e.response.data.error&&(w({type:"error",text:"Something went wrong. Please try it again."}),v(!0))}))}}),Object(G.jsx)(Ne,{isUserLoggedIn:a,exact:!0,path:"/astronauts/add",component:re,astronauts:o,handleAstronaut:function(e){h()({method:"post",baseURL:p,url:"/astronauts",headers:{jwtToken:window.localStorage.getItem("token")},data:{firstName:e.firstName,lastName:e.lastName,birthday:e.birthday.toISOString(),superpower:e.superpower}}).then((function(t){var a=Object(i.a)(Object(i.a)({},e),{},{_id:t.data.astronaut._id});d(a);var r=t.data.success;r&&(w({type:"success",text:r.message}),v(!0))})).catch((function(e){e.response.data.error&&(w({type:"error",text:"Something went wrong. Please try it again."}),v(!0))}))}}),Object(G.jsx)(Ne,{isUserLoggedIn:a,exact:!0,path:"/astronauts/:id",component:re,astronauts:o,handleAstronaut:function(e,t){h()({method:"put",baseURL:p,url:"/astronauts/".concat(t),headers:{jwtToken:window.localStorage.getItem("token")},data:{firstName:e.firstName,lastName:e.lastName,birthday:e.birthday.toISOString(),superpower:e.superpower}}).then((function(a){var r=Object(i.a)(Object(i.a)({},e),{},{_id:t});j(r);var n=a.data.success;n&&(w({type:"success",text:n.message}),v(!0))})).catch((function(e){var t=e.response.data.error;t&&(w({type:"error",text:t.message}),v(!0))}))}}),Object(G.jsx)(l.b,{exact:!0,path:"/",render:function(){return Object(G.jsx)(pe,{})}}),Object(G.jsx)(l.b,{exact:!0,path:"*",render:function(){return Object(G.jsx)(We,{})}})]}),Object(G.jsx)(Oe,{}),O&&Object(G.jsx)(Ie,{hideAndClearMessage:y,open:O,message:f})]})})},Ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,235)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),s(e),o(e)}))};o.a.render(Object(G.jsx)(q.a,{children:Object(G.jsx)(n.a.StrictMode,{children:Object(G.jsx)(qe,{})})}),document.getElementById("root")),Ue()},60:function(e,t,a){var r=a(86);e.exports.registerValidation=function(e){return r.object({username:r.string().alphanum().min(2).max(30).required(),email:r.string().email({tlds:{allow:!1}}).required(),password:r.string().min(5).required(),passwordConfirmation:r.ref("password")}).validate(e)},e.exports.loginValidation=function(e){return r.object({username:r.string().alphanum().min(2).max(30).required(),password:r.string().min(5).required()}).validate(e)}},97:function(e,t,a){var r=a(86);e.exports.astronautValidation=function(e){return r.object({firstName:r.string().alphanum().min(1).max(30).required(),lastName:r.string().alphanum().min(1).max(30).required(),birthday:r.date().required(),superpower:r.string().min(1).max(50).required()}).validate(e)}}},[[166,1,2]]]);
//# sourceMappingURL=main.6aa4ff29.chunk.js.map