(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getFilter",(function(){return re}));var c,r,i,o,s=n(0),u=n.n(s),l=n(31),A=n.n(l),j=(n(66),n(7)),b=n(53),d=n.n(b),g=n(1),O=function(e){var t=e.children;return Object(g.jsx)("div",{className:d.a.container,children:t})},h=n(39),f=n.n(h),p=function(){return Object(g.jsx)("div",{className:f.a.container,children:Object(g.jsxs)("h1",{className:f.a.title,children:["Welcome!"," ",Object(g.jsx)("span",{role:"img","aria-label":"Welcome icon",children:"\ud83d\udc4b"})]})})},m=n(15),B=n(3),x=n(12),v=n.n(x),w=n(21),C=n(40),D=n.n(C),I=D.a.create({baseURL:"https://61b44d0559c6ac0017300fbe.mockapi.io"}),N=D.a.create({baseURL:"https://connections-api.herokuapp.com"}),Q=n(2),y=function(e){N.defaults.headers.common.Authorization="Bearer "+e},k=Object(Q.c)("auth/signup",function(){var e=Object(w.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/users/signup",t);case 3:return n=e.sent,a=n.data,y(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),P=Object(Q.c)("auth/login",function(){var e=Object(w.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("/users/login",t);case 3:return n=e.sent,a=n.data,y(a.token),e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),F=Object(Q.c)("auth/logOut",function(){var e=Object(w.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.post("users/logout");case 3:t.unset(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),H={register:k,logIn:P,logOut:F},z={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getToken:function(e){return e.auth.token}},G=n(6),S={user:{name:null,email:null},token:null,isLoggedIn:!1,isLoading:!1,error:null},R=Object(Q.e)({name:"auth",initialState:S,extraReducers:(c={},Object(G.a)(c,H.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.isLoading=!1,e.error=null})),Object(G.a)(c,H.register.pending,(function(e){e.isLoading=!0,e.error=null})),Object(G.a)(c,H.register.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload})),Object(G.a)(c,H.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0,e.isLoading=!1,e.error=null})),Object(G.a)(c,H.logIn.pending,(function(e){e.isLoading=!0,e.error=null})),Object(G.a)(c,H.logIn.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload})),Object(G.a)(c,H.logOut.fulfilled,(function(e){e.user=S.user,e.token=null,e.isLoggedIn=!1,e.isLoading=!1,e.error=null})),Object(G.a)(c,H.logOut.pending,(function(e){e.isLoading=!0,e.error=null})),Object(G.a)(c,H.logOut.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload})),c)}).reducer,E=n(41),M=n.n(E),J=function(){var e=Object(B.d)(),t=Object(s.useState)(""),n=Object(m.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(""),i=Object(m.a)(r,2),o=i[0],u=i[1],l=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":return c(a);case"password":return u(a);default:return}};return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Login Page"}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(H.logIn({email:a,password:o})),c(""),u("")},children:[Object(g.jsxs)("label",{className:M.a.label,children:["Email",Object(g.jsx)("input",{type:"email",name:"email",value:a,onChange:l})]}),Object(g.jsxs)("label",{className:M.a.label,children:["Password",Object(g.jsx)("input",{type:"password",name:"password",value:o,onChange:l})]}),Object(g.jsx)("button",{type:"submit",children:"Login"})]})]})},U=n(34),T=n.n(U),Y=function(){var e=Object(B.d)(),t=Object(s.useState)(""),n=Object(m.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(""),i=Object(m.a)(r,2),o=i[0],u=i[1],l=Object(s.useState)(""),A=Object(m.a)(l,2),j=A[0],b=A[1],d=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return c(a);case"email":return u(a);case"password":return b(a);default:return}};return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Register Page"}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(H.register({name:a,email:o,password:j})),c(""),u(""),b("")},children:[Object(g.jsxs)("label",{className:T.a.label,children:["Name",Object(g.jsx)("input",{type:"text",name:"name",value:a,onChange:d})]}),Object(g.jsxs)("label",{className:T.a.label,children:["Email",Object(g.jsx)("input",{type:"email",name:"email",value:o,onChange:d})]}),Object(g.jsxs)("label",{className:T.a.label,children:["Password",Object(g.jsx)("input",{type:"password",name:"password",value:j,onChange:d})]}),Object(g.jsx)("button",{type:"submit",children:"Register"})]})]})},K=n(55),L=n(11),X=Object(K.a)({reducerPath:"contactsApi",baseQuery:Object(L.d)({baseUrl:"https://61b44d0559c6ac0017300fbe.mockapi.io"}),tagTypes:["Contact"],endpoints:function(e){return{fetchContacts:e.query({query:function(){return"/contacts"},providesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]}),addContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contact"]})}}}),W=X.useFetchContactsQuery,V=X.useDeleteContactMutation,q=X.useAddContactMutation,Z=n(25),_=n(56),$=n.n(_),ee=function(){var e=Object(s.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(m.a)(c,2),i=r[0],o=r[1],u=q(),l=Object(m.a)(u,2),A=l[0],j=l[1].isLoading,b=W().data,d=Object(Z.generate)(),O=Object(Z.generate)(),h=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":o(c)}};return Object(g.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n.trim()||""===i.trim())return alert("The fields are mandatory.");var t,c,r=(t=n,c=i,b.find((function(e){var n=e.name,a=e.number;return n===t||a===c})));if(r)return alert(r.name+" is already in contacts.");A({name:n,number:i}),a(""),o("")},className:$.a.form,children:[Object(g.jsx)("label",{htmlFor:d,children:"Name"}),Object(g.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:h,id:d}),Object(g.jsx)("label",{htmlFor:O,children:"Number"}),Object(g.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:i,onChange:h,id:O}),Object(g.jsx)("button",{type:"submit",disabled:j,children:j?"Adding...":"Add Contact"})]})},te="/contacts",ne=Object(Q.c)("contacts/fetchContacts",Object(w.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get(te);case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))),ae=Object(Q.c)("contacts/addContact",function(){var e=Object(w.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.post(te,t);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ce=Object(Q.c)("contacts/deleteContact",function(){var e=Object(w.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.delete("".concat(te,"/").concat(t));case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),re=function(e){return e.contacts.filter},ie=(n(38),n(33)),oe=n(9),se=Object(Q.e)({name:"contacts",initialState:{items:[],loading:!1,filter:"",error:null},reducers:{changeFilter:function(e,t){var n=t.payload;e.filter=n}},extraReducers:(r={},Object(G.a)(r,ne.fulfilled,(function(e,t){var n=t.payload;return Object(oe.a)(Object(oe.a)({},e),{},{items:n,loading:!1,error:null})})),Object(G.a)(r,ne.pending,(function(e){return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0,error:null})})),Object(G.a)(r,ne.rejected,(function(e,t){return Object(oe.a)(Object(oe.a)({},e),{},{loading:!1,error:t.error.message})})),Object(G.a)(r,ae.fulfilled,(function(e,t){var n=t.payload;return Object(oe.a)(Object(oe.a)({},e),{},{items:[n].concat(Object(ie.a)(e.items)),loading:!1,error:null})})),Object(G.a)(r,ae.pending,(function(e){return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0,error:null})})),Object(G.a)(r,ae.rejected,(function(e,t){return Object(oe.a)(Object(oe.a)({},e),{},{loading:!1,error:t.error.message})})),Object(G.a)(r,ce.fulfilled,(function(e,t){var n=t.payload;return Object(oe.a)(Object(oe.a)({},e),{},{items:e.items.filter((function(e){return e.id!==n.id})),loading:!1,error:null})})),Object(G.a)(r,ce.pending,(function(e){return Object(oe.a)(Object(oe.a)({},e),{},{loading:!0,error:null})})),Object(G.a)(r,ce.rejected,(function(e,t){return Object(oe.a)(Object(oe.a)({},e),{},{loading:!1,error:t.error.message})})),r)}),ue=se.actions,le=se.reducer,Ae=function(){var e=Object(Z.generate)(),t=Object(B.e)(a.getFilter),n=Object(B.d)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("label",{htmlFor:e,children:"Find contacts by name"}),Object(g.jsx)("input",{value:t,onChange:function(e){var t=e.target.value;return n(ue.changeFilter(t))},id:e})]})},je=n(57),be=n.n(je),de=function(e){var t=e.name,n=e.number,a=e.id,c=V(),r=Object(m.a)(c,2),i=r[0],o=r[1].isLoading;return Object(g.jsx)("li",{className:be.a.contact,children:Object(g.jsxs)("p",{children:[Object(g.jsx)("span",{children:t}),": ",Object(g.jsx)("span",{children:n}),Object(g.jsx)("button",{type:"button",onClick:function(){return i(a)},disabled:o,children:o?"Deleting...":"Delete"})]})})},ge=function(){var e=Object(B.e)(a.getFilter),t=W(),n=t.data,c=void 0===n?[]:n,r=t.isLoading,i=t.error,o=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}(c,e);return Object(g.jsxs)(g.Fragment,{children:[r&&Object(g.jsx)("h2",{children:"Loading..."}),i&&!r&&Object(g.jsx)("h2",{children:i}),o&&Object(g.jsx)("ul",{children:o.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(g.jsx)(de,{name:n,number:a,id:t},t)}))})]})},Oe=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Phonebook"}),Object(g.jsx)(ee,{}),Object(g.jsx)("h2",{children:"Contacts"}),Object(g.jsx)(Ae,{}),Object(g.jsx)(ge,{})]})},he=n(19),fe=n(26),pe=n.n(fe),me=function(){return Object(g.jsxs)("nav",{children:[Object(g.jsx)(he.b,{to:"/",exact:!0,className:pe.a.link,activeClassName:pe.a["active-link"],children:"Main Page"}),Object(g.jsx)(he.b,{to:"/contacts",exact:!0,className:pe.a.link,activeClassName:pe.a["active-link"],children:"Contacts"})]})},Be=n(35),xe=n.n(Be),ve=function(){var e=Object(B.d)(),t=Object(B.e)(z.getUserName);return Object(g.jsxs)("div",{className:xe.a.container,children:[Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"",width:"32",className:xe.a.avatar}),Object(g.jsxs)("span",{className:xe.a.name,children:["Welcome, ",t]}),Object(g.jsx)("button",{type:"button",onClick:function(){return e(H.logOut())},children:"Logout"})]})},we=n(27),Ce=n.n(we),De=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(he.b,{to:"/register",exact:!0,className:Ce.a.link,activeClassName:Ce.a["active-link"],children:"Registration"}),Object(g.jsx)(he.b,{to:"/login",exact:!0,className:Ce.a.link,activeClassName:Ce.a["active-link"],children:"Login"})]})},Ie=n(59),Ne=n.n(Ie),Qe=function(){var e=Object(B.e)(z.getIsLoggedIn);return Object(g.jsxs)("header",{className:Ne.a.header,children:[Object(g.jsx)(me,{}),e?Object(g.jsx)(ve,{}):Object(g.jsx)(De,{})]})},ye=function(){return Object(g.jsxs)(O,{children:[Object(g.jsx)(Qe,{}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{exact:!0,path:"/",component:p}),Object(g.jsx)(j.a,{path:"/register",component:Y}),Object(g.jsx)(j.a,{path:"/login",component:J}),Object(g.jsx)(j.a,{path:"/contacts",component:Oe})]})]})},ke=n(20),Pe=n(60),Fe=n.n(Pe),He=n(8),ze=Object(Q.b)("counter/Increment"),Ge=Object(Q.b)("counter/Decrement"),Se=Object(Q.d)(0,(i={},Object(G.a)(i,ze,(function(e,t){return e+t.payload})),Object(G.a)(i,Ge,(function(e,t){return e-t.payload})),i)),Re=Object(Q.d)(15,{}),Ee=Object(He.b)({value:Se,step:Re}),Me=[].concat(Object(ie.a)(Object(Q.f)({serializableCheck:{ignoredActions:[ke.a,ke.f,ke.b,ke.c,ke.d,ke.e]}})),[X.middleware]),Je={key:"auth",storage:Fe.a},Ue=Object(Q.a)({reducer:(o={counter:Ee,contacts:le},Object(G.a)(o,X.reducerPath,X.reducer),Object(G.a)(o,"auth",Object(ke.g)(Je,R)),o),middleware:Me,devTools:!1}),Te=Object(ke.h)(Ue),Ye=n(61);A.a.render(Object(g.jsx)(u.a.StrictMode,{children:Object(g.jsx)(B.a,{store:Ue,children:Object(g.jsx)(Ye.a,{loading:Object(g.jsx)("p",{children:"Loading..."}),persistor:Te,children:Object(g.jsx)(he.a,{children:Object(g.jsx)(ye,{})})})})}),document.getElementById("root"))},26:function(e,t,n){e.exports={link:"Navigation_link__1EFcw","active-link":"Navigation_active-link__1_fWD"}},27:function(e,t,n){e.exports={link:"AuthNav_link__3hiaU","active-link":"AuthNav_active-link__cq8ff"}},34:function(e,t,n){e.exports={label:"RegisterView_label__3ovwJ"}},35:function(e,t,n){e.exports={container:"UserMenu_container__2U4P2",avatar:"UserMenu_avatar__2btLj",name:"UserMenu_name__2KSBE"}},38:function(e,t){},39:function(e,t,n){e.exports={container:"HomeView_container__3iZvC",title:"HomeView_title__281CP"}},41:function(e,t,n){e.exports={label:"LoginView_label__3qjgk"}},53:function(e,t,n){e.exports={container:"Container_container__19BtI"}},56:function(e,t,n){e.exports={form:"Form_form__1WhxY"}},57:function(e,t,n){e.exports={contact:"ContactItem_contact__A0GNP"}},59:function(e,t,n){e.exports={header:"AppBar_header__ZTBuR"}},66:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.a7d38f9a.chunk.js.map