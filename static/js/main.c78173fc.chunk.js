(this["webpackJsonpjonasjourney-notepad-web"]=this["webpackJsonpjonasjourney-notepad-web"]||[]).push([[0],{47:function(e,t,a){},53:function(e,t,a){},7:function(e,t,a){"use strict";(function(e){var n=a(38),c=a.n(n),s=a(25),r=a.n(s),o=a(39);o.config({path:r.a.resolve(e,"..","..",".env")});var i=c.a.create({baseURL:"https://jonasnotepad.herokuapp.com"});t.a=i}).call(this,"/")},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(1),s=a.n(c),r=a(16),o=a.n(r),i=a(14),l=a(4),u=a(5),j=a.n(u),d=a(20),b=a(13),O=a(3),h=(a(47),a(11)),p=function(e){var t=e.closeSidebarFunc,a=Object(l.g)();return Object(n.jsxs)("div",{className:"sideBar",children:[Object(n.jsx)("div",{className:"hideMenuContainer",children:Object(n.jsx)("button",{onClick:function(){return t()},children:Object(n.jsx)(h.a,{size:24})})}),Object(n.jsx)("button",{className:"headerContainer",children:Object(n.jsx)("a",{href:"https://github.com/heroneto",children:Object(n.jsx)("img",{src:"https://avatars1.githubusercontent.com/u/41599309?s=460&u=65b95962731f7965ead8de961b01c59e66554721&v=4",alt:"Heron Eto"})})}),Object(n.jsxs)("div",{className:"menuContainer",children:[Object(n.jsx)("span",{className:"title",children:"Menu"}),Object(n.jsx)(i.c,{to:"/notes",className:"menuOption",activeClassName:"/notes"===a.pathname?"selected":"",activeStyle:{backgroundColor:"#D6D4C7"},children:"Notas"})]})]})},m=(a(53),a(40)),x=a(7),f=a(18),v="";function N(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(""),o=Object(O.a)(r,2),l=o[0],u=o[1],N=Object(c.useState)(""),g=Object(O.a)(N,2),C=g[0],y=g[1],k=Object(c.useState)(!1),w=Object(O.a)(k,2),S=w[0],D=w[1],I=Object(c.useState)(0),z=Object(O.a)(I,2),L=z[0],B=z[1],E=Object(c.useState)(!1),A=Object(O.a)(E,2),F=A[0],M=A[1],_=Object(c.useState)(10),q=Object(O.a)(_,2),T=q[0],J=q[1],H=Object(c.useState)(0),R=Object(O.a)(H,2),V=R[0],P=R[1],U=Object(c.useState)(0),G=Object(O.a)(U,2),K=G[0],Q=G[1],W=Object(c.useState)(!0),X=Object(O.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)("updatedAt"),ee=Object(O.a)($,2),te=ee[0],ae=ee[1],ne=Object(c.useState)("-1"),ce=Object(O.a)(ne,2),se=ce[0],re=ce[1];function oe(){return(oe=Object(b.a)(j.a.mark((function e(){var t,n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="limit=".concat(T,"&skip=").concat(V+T,"&sortBy=").concat(te,"&sortOrder=").concat(se),e.next=3,x.a.get("/notes?".concat(t));case 3:200===(n=e.sent).status&&(c=n.data.notes,r=[].concat(Object(d.a)(a),Object(d.a)(c)),s(r),Q(n.data.total),(c.length<T||V+T>K)&&Z(!1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(){return(ie=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/notes/search?text=".concat(t));case 2:200===(a=e.sent).status&&(console.log(a.data),s(a.data));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(){return ue.apply(this,arguments)}function ue(){return(ue=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:"",body:"",date:new Date},e.next=3,x.a.post("/notes",t);case 3:201===e.sent.status?(f.a.success("nota criada com sucesso"),x.a.get("/notes?limit=".concat(T,"&skip=0&sortBy=").concat(te,"&sortOrder=").concat(se)).then((function(e){200===e.status&&(Q(e.data.total),s(e.data.notes))}))):f.a.error("Falha na cria\xe7\xe3o da nota");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e){clearTimeout(v),v=setTimeout((function(){!function(e){ie.apply(this,arguments)}(e),B((function(e){return e+1}))}),1e3)}return Object(c.useEffect)((function(){x.a.get("/notes?limit=".concat(T,"&skip=0&sortBy=").concat(te,"&sortOrder=").concat(se)).then((function(e){200===e.status&&(Q(e.data.total),s(e.data.notes),e.data.total===e.data.notes&&Z(!1))}))}),[T,te,se]),Object(n.jsxs)("div",{className:"notes-view-container",children:[S&&Object(n.jsx)(p,{closeSidebarFunc:function(){return D(!1)}}),Object(n.jsxs)("div",{className:"listContainer",children:[Object(n.jsxs)("div",{className:"titleContainer",children:[Object(n.jsx)("button",{onClick:function(){return D(!S)},className:"toggleMenu",children:Object(n.jsx)(h.c,{size:24})}),Object(n.jsx)("span",{className:"title",children:"Jonas Journey Notepad"})]}),Object(n.jsxs)("div",{className:"listActionsContainer",children:[Object(n.jsxs)("div",{className:"searchData",children:[Object(n.jsx)("input",{onChange:function(e){y(""),u(e.target.value),je(e.target.value)},value:l,type:"text",className:"searchInput",placeholder:"Digite para pesquisar",disabled:C.length>0}),Object(n.jsx)("button",{onClick:function(){return u("")},className:"button-clear",children:"Limpar"})]}),Object(n.jsxs)("div",{className:"searchData",children:[Object(n.jsx)("input",{value:C,onChange:function(e){u(""),y(e.target.value),je(e.target.value)},type:"date",className:"searchInput",disabled:l.length>0}),Object(n.jsx)("button",{onClick:function(){return y("")},className:"button-clear",children:"Limpar"})]}),L," Execu\xe7\xf5es",Object(n.jsx)("button",{className:"button",onClick:le,children:"Nova Nota"})]}),Object(n.jsx)("div",{className:"listHeader",children:F?Object(n.jsxs)("div",{className:"listOptions",children:[Object(n.jsx)("div",{className:"closeOptions",children:Object(n.jsx)("button",{onClick:function(){return M(!1)},className:"toggleOption",children:Object(n.jsx)(h.b,{size:24})})}),Object(n.jsx)("span",{className:"label",children:"Limite"}),Object(n.jsxs)("select",{disabled:l.length>0||C.length>0,value:T,onChange:function(e){return J(Number(e.target.value))},className:"optionSelector",children:[Object(n.jsx)("option",{value:"10",children:"10"}),Object(n.jsx)("option",{value:"20",children:"20"}),Object(n.jsx)("option",{value:"50",children:"50"}),Object(n.jsx)("option",{value:"100",children:"100"}),Object(n.jsx)("option",{value:"200",children:"200"})]}),Object(n.jsx)("span",{className:"label",children:"Ordenar por:"}),Object(n.jsxs)("select",{disabled:l.length>0||C.length>0,value:te,onChange:function(e){return ae(e.target.value)},className:"optionSelector",children:[Object(n.jsx)("option",{value:"createdAt",children:"Data cria\xe7\xe3o"}),Object(n.jsx)("option",{value:"updatedAt",children:"Data Atualiza\xe7\xe3o"})]}),Object(n.jsx)("span",{className:"label",children:"Ordem:"}),Object(n.jsxs)("select",{disabled:l.length>0||C.length>0,value:se,onChange:function(e){return re(e.target.value)},className:"optionSelector",children:[Object(n.jsx)("option",{value:"-1",children:"desc"}),Object(n.jsx)("option",{value:"1",children:"asc"})]})]}):Object(n.jsx)("button",{disabled:l.length>0||C.length>0,onClick:function(){return M(!0)},className:"toggleOption",children:Object(n.jsx)(m.a,{size:24})})}),Object(n.jsx)("div",{className:"listInfo",children:Object(n.jsxs)("span",{children:["Mostrando ",a.length," de ",K]})}),Object(n.jsxs)("div",{className:"list",children:[Object(n.jsx)("span",{className:"title",children:"Lista de notas"}),a.map((function(e){return Object(n.jsxs)(i.b,{to:"/note/".concat(e._id),className:"itemContainer",children:[Object(n.jsxs)("div",{className:"itemContent",children:[Object(n.jsx)("span",{className:"noteTitle",children:e.title||"Nova nota..."}),Object(n.jsx)("span",{className:"noteBody",children:"".concat(e.body.slice(0,40),"...")}),Object(n.jsx)("span",{className:"noteDate",children:new Date(e.date).toLocaleDateString()})]}),Object(n.jsx)("div",{className:"itemIcon",children:Object(n.jsx)(h.b,{size:24})})]},e._id)})),Y&&0===l.length&&0===C.length&&Object(n.jsx)("button",{onClick:function(){P(V+T),function(){oe.apply(this,arguments)}()},className:"itemContainer-nextPage",children:"Ver mais"})]})]}),Object(n.jsx)("button",{className:"floatIcon",onClick:le,children:Object(n.jsx)(h.d,{size:32,color:"#FFF"})})]})}f.a.configure({autoClose:1500,position:"top-center",limit:3});a(71);f.a.configure({autoClose:1500,position:"top-center",limit:3});var g=function(){var e=Object(l.f)(),t=e.location.pathname.split("/"),a=t[t.length-1],s=Object(c.useState)(""),r=Object(O.a)(s,2),o=r[0],u=r[1],p=Object(c.useState)(""),m=Object(O.a)(p,2),f=m[0],v=m[1],N=Object(c.useState)(""),g=Object(O.a)(N,2),C=g[0],y=g[1],k=Object(c.useState)(""),w=Object(O.a)(k,2),S=w[0],D=w[1],I=Object(c.useState)(!1),z=Object(O.a)(I,2),L=z[0],B=z[1],E=Object(c.useState)([]),A=Object(O.a)(E,2),F=A[0],M=A[1],_=Object(c.useState)(""),q=Object(O.a)(_,2),T=q[0],J=q[1],H=Object(c.useState)(""),R=Object(O.a)(H,2),V=R[0],P=R[1],U=Object(c.useState)(""),G=Object(O.a)(U,2),K=G[0],Q=G[1];function W(){return(W=Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.delete("/notes/".concat(o));case 2:200===t.sent.status&&e.push("/notes");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function X(){return(X=Object(b.a)(j.a.mark((function t(){var a,n,c,s,r,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=C.split("-"),n=Object(O.a)(a,3),c=n[0],s=n[1],r=n[2],i={title:f,body:S,date:new Date(Number(c),Number(s)-1,Number(r)),id:o},t.next=4,x.a.put("/notes",i);case 4:200===t.sent.status&&e.push("/notes");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Y(){return(Y=Object(b.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={body:T,noteId:o,date:new Date},e.next=3,x.a.post("/comments",t);case 3:200===(a=e.sent).status&&M((function(e){return[].concat(Object(d.a)(e),[a.data])}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return(Z=Object(b.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(t),e.next=3,x.a.get("/comment/".concat(t));case 3:200===(a=e.sent).status&&(Q(a.data.body),B(!0));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){return($=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("/comments/".concat(t));case 2:if(200!==e.sent.status){e.next=8;break}return e.next=6,x.a.get("/note/".concat(a));case 6:200===(n=e.sent).status&&(c=n.data,M(c.comments));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(){return(ee=Object(b.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={body:K,date:(new Date).toLocaleDateString(),id:V},e.next=3,x.a.put("/comments",t);case 3:if(200!==e.sent.status){e.next=9;break}return e.next=7,x.a.get("/note/".concat(a));case 7:200===(n=e.sent).status&&(c=n.data,M(c.comments),B(!1));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){x.a.get("/note/".concat(a)).then((function(e){if(200===e.status){var t=e.data;u(t._id),v(t.title),D(t.body);var a=new Date(t.date).toLocaleDateString().split("/"),n=Object(O.a)(a,3),c=n[0],s=n[1],r=n[2];y("".concat(r,"-").concat(s,"-").concat(c)),M(t.comments)}}))}),[a]),Object(n.jsxs)("div",{className:"noteEdit-container",children:[Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)(i.b,{className:"goBack",to:"/notes",children:Object(n.jsx)(h.a,{size:24})}),Object(n.jsxs)("div",{className:"actions",children:[Object(n.jsx)("button",{className:"activeButton",onClick:function(){return X.apply(this,arguments)},children:"Atualizar"}),Object(n.jsx)("button",{onClick:function(){return W.apply(this,arguments)},className:"inactiveButton",children:"Excluir"})]})]}),Object(n.jsxs)("div",{className:"editorContainer",children:[Object(n.jsxs)("div",{className:"editorHeader",children:[Object(n.jsx)("input",{value:f,onChange:function(e){return v(e.target.value)},required:!0,type:"text",className:"title",placeholder:"Toda jornada merece um belo  t\xedtulo..."}),Object(n.jsx)("input",{onChange:function(e){return y(e.target.value)},required:!0,type:"date",className:"date",placeholder:"Insira a data..",defaultValue:C})]}),Object(n.jsxs)("div",{className:"editor",children:[Object(n.jsx)("textarea",{maxLength:2e3,value:S,onChange:function(e){return D(e.target.value)},className:"noteInput",placeholder:"Fale um pouco da sua jornada..."}),Object(n.jsxs)("div",{className:"comments-container",children:[Object(n.jsx)("span",{className:"title",children:"Coment\xe1rios"}),Object(n.jsxs)("div",{className:"inputContainer",children:[Object(n.jsx)("textarea",{maxLength:250,onChange:function(e){return J(e.target.value)},value:T,className:"commentInput",placeholder:"Insira o coment\xe1rio aqui..."}),Object(n.jsx)("button",{onClick:function(){return Y.apply(this,arguments)},children:Object(n.jsx)(h.e,{size:24})})]}),Object(n.jsx)("div",{className:"commentList",children:F.map((function(e){return Object(n.jsxs)("div",{className:"comment",children:[Object(n.jsx)("span",{className:"commentDate",children:e.date}),Object(n.jsx)("span",{className:"commentText",children:e.body}),Object(n.jsxs)("div",{className:"commentActions",children:[Object(n.jsx)("button",{onClick:function(){return function(e){return $.apply(this,arguments)}(e._id)},className:"removeComment",children:"Remover"}),Object(n.jsx)("button",{onClick:function(){return function(e){return Z.apply(this,arguments)}(e._id)},className:"editComment",children:"Editar"})]})]},e._id)}))})]})]})]}),L&&Object(n.jsx)("div",{className:"comment-edit-modal",children:Object(n.jsxs)("div",{className:"editor",children:[Object(n.jsx)("button",{onClick:function(){return B(!1)},className:"closeModal",children:Object(n.jsx)(h.f,{size:24})}),Object(n.jsxs)("div",{className:"inputContainer",children:[Object(n.jsx)("textarea",{value:K,onChange:function(e){return Q(e.target.value)},className:"commentInput",placeholder:"Insira o coment\xe1rio aqui..."}),Object(n.jsx)("button",{onClick:function(){return ee.apply(this,arguments)},children:Object(n.jsx)(h.e,{size:24})})]})]})})]})};function C(){return Object(n.jsx)(i.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/jonasjourney-notepad-web/",children:Object(n.jsx)(N,{})}),Object(n.jsx)(l.a,{path:"/jonasjourney-notepad-web/notes",children:Object(n.jsx)(N,{})}),Object(n.jsx)(l.a,{path:"/jonasjourney-notepad-web/note/:id",children:Object(n.jsx)(g,{})})]})})}a(72),a(73);var y=function(){return Object(n.jsx)(C,{})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.c78173fc.chunk.js.map