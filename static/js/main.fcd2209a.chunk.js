(this["webpackJsonpadd-description-app"]=this["webpackJsonpadd-description-app"]||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),o=n(37),u=(n(88),n(75)),i=n(22),s=n(113),d=n(11),p=n(12),m=n(13),f=n(14),v=n(15),h=n(16),E=n(19),b=n(114),O=n(116),g=n(111),y=n(4),w=n(63),j=n.n(w);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(){var e=Object(h.a)(["\n @font-face {\n   font-family: 'Kruk';\n   src: url('","');\n }\n\n .symbol-view {\n  font-family: Kruk;\n  font-size: 32pt;\n }\n .red {\n   color: red;\n }\n"]);return D=function(){return e},e}var _=E.a.div(D(),j.a),k=function(e){var t=e.categoryId,n=e.value,a=e.showEditModal;return r.a.createElement("tr",null,r.a.createElement("td",{width:"130px"},r.a.createElement(_,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.value},className:"symbol-view"}))),r.a.createElement("td",{width:"250px"},n.name),r.a.createElement("td",{width:"50px"},n.pitch),r.a.createElement("td",{width:"50px"},n.sounds),r.a.createElement("td",{width:"100px"},n.opts.join(", ")),r.a.createElement("td",{width:"100px"},r.a.createElement(O.a,{onClick:a(S({},n,{categoryId:t}))},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435")))},I=function(e){var t=e.category,n=e.showEditModal;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.name),r.a.createElement(g.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u0412\u0438\u0434"),r.a.createElement("th",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),r.a.createElement("th",null,"\u041f\u043e\u043c\u0435\u0442\u0430"),r.a.createElement("th",null,"\u0417\u0432\u0443\u043a\u043e\u0432"),r.a.createElement("th",null,"\u041e\u043f\u0446\u0438\u0438"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t.symbols.map((function(e){return r.a.createElement(k,{key:e._id,categoryId:t._id,value:e,showEditModal:n})})))))},C=n(67),P=n.n(C),T=n(32),L=n(68),F=n(69),A=n(71),M=n(115),N=n(112),U=n(74),R=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).myRef=r.a.createRef(),n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.input,n=e.options,a=e.className,c=t.name,l=t.value,o=t.onBlur,u=t.onChange,i=t.onFocus;return r.a.createElement(U.a,{valueKey:"value",name:c,value:l,options:n,onChange:u,onBlur:function(){return o(l)},onFocus:i,className:a})}}]),t}(r.a.Component),B=function(e){switch(e){case-1:return"\u041e\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e";case 0:return"\u041d\u0435\u0442";case 1:return"\u041e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e";default:return"\u041d\u0435\u0442"}},H=function(e){switch(e){case-1:return"\u0412\u043d\u0438\u0437";case 0:return"\u0420\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e";case 1:return"\u0412\u0432\u0435\u0440\u0445";default:return"\u0420\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e"}},J=function(e){switch(e){case 1:return"1/8";case 2:return"1/4";case 4:return"1/2";case 6:return"3/4";case 8:return"4/4";default:return"1/2"}},K=function(e){switch(e){case 1:return"\u0423\u0442 \u043d\u0438\u0437\u043a\u043e\u0435";case 2:return"\u0420\u0435 \u043d\u0438\u0437\u043a\u043e\u0435";case 3:return"\u041c\u0438 \u043d\u0438\u0437\u043a\u043e\u0435";case 4:return"\u0423\u0442";case 5:return"\u0420\u0435";case 6:return"\u041c\u0438";case 7:return"\u0424\u0430";case 8:return"\u0421\u043e\u043b\u044c";case 9:return"\u041b\u044f";case 10:return"\u0424\u0430 \u0432\u044b\u0441\u043e\u043a\u043e\u0435";case 11:return"\u0421\u043e\u043b\u044c \u0432\u044b\u0441\u043e\u043a\u043e\u0435";case 12:return"\u041b\u044f \u0432\u044b\u0441\u043e\u043a\u043e\u0435";default:return""}},G=function(e){return-1!==e.indexOf("dependency")?[{value:0,label:"\u041d\u0435\u0442"},{value:-1,label:"\u041e\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e"},{value:1,label:"\u041e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0433\u043e"}]:-1!==e.indexOf("direction")?[{value:0,label:"\u0420\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e"},{value:-1,label:"\u0412\u043d\u0438\u0437"},{value:1,label:"\u0412\u0432\u0435\u0440\u0445"}]:-1!==e.indexOf("length")?[{value:1,label:"1/8"},{value:2,label:"1/4"},{value:4,label:"1/2"},{value:6,label:"3/4"},{value:8,label:"4/4"}]:-1!==e.indexOf("pitch")?[{value:1,label:"\u0423\u0442 \u043d\u0438\u0437\u043a\u043e\u0435"},{value:2,label:"\u0420\u0435 \u043d\u0438\u0437\u043a\u043e\u0435"},{value:3,label:"\u041c\u0438 \u043d\u0438\u0437\u043a\u043e\u0435"},{value:4,label:"\u0423\u0442"},{value:5,label:"\u0420\u0435"},{value:6,label:"\u041c\u0438"},{value:7,label:"\u0424\u0430"},{value:8,label:"\u0421\u043e\u043b\u044c"},{value:9,label:"\u041b\u044f"},{value:10,label:"\u0424\u0430 \u0432\u044b\u0441\u043e\u043a\u043e\u0435"},{value:11,label:"\u0421\u043e\u043b\u044c \u0432\u044b\u0441\u043e\u043a\u043e\u0435"},{value:12,label:"\u041b\u044f \u0432\u044b\u0441\u043e\u043a\u043e\u0435"}]:""};function z(){var e=Object(h.a)(["\n"]);return z=function(){return e},e}var V=E.a.div(z()),q=function(e){var t=e.onClick;return r.a.createElement(V,{onClick:t},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},r.a.createElement("title",null,"cross"),r.a.createElement("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"})))};function W(){var e=Object(h.a)(["\n"]);return W=function(){return e},e}var X=E.a.div(W()),$=function(e){var t=e.onClick;return r.a.createElement(X,{onClick:t},r.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},r.a.createElement("title",null,"plus"),r.a.createElement("path",{d:"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"})))};function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(n,!0).forEach((function(t){Object(y.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Z(){var e=Object(h.a)(["\n  cursor: pointer;\n  background-color: #F5F5F5;\n  border-radius: 5px;\n  display: flex;\n  padding: 10px;\n  width: 180px;\n  justify-content: center;\n\n  :hover {\n    background-color: #EEEEEE;\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(h.a)(["\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  svg {\n    fill: #4CAF50;\n    margin-left: 10px;\n  }\n"]);return ee=function(){return e},e}function te(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  svg {\n    fill: #e57373;\n  }\n\n  svg:hover {\n    fill: #f44336;\n    cursor: pointer;\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(h.a)(["\n  margin-bottom: 30px;\n"]);return ne=function(){return e},e}var ae=E.a.div(ne()),re=E.a.div(te()),ce=E.a.div(ee()),le=E.a.div(Z()),oe=function(e){var t=e.name,n=e.onChange;return r.a.createElement(A.a,{md:"3",sm:"8"},r.a.createElement(T.a,{name:t,options:G(t),onChange:n,component:R}))},ue=function(e){var t=e.value.sounds_description,n=e.onSubmit,a=function(e){var t=e.sounds,n=e.dependency;return{dependency:{value:n,label:B(n)},sounds:t.map((function(e){return{direction:{value:e.direction,label:H(e.direction)},length:{value:e.length,label:J(e.length)},pitch:{value:e.pitch,label:K(e.pitch)}}}))}}(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement(T.b,{onSubmit:n,initialValues:a,mutators:Y({},L.a),render:function(e){var t=e.handleSubmit,n=e.form.mutators,a=n.push,c=(n.pop,e.submitting),l=e.pristine,o=e.values;return r.a.createElement("form",{onSubmit:t},r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a.Group,{as:N.a},r.a.createElement(A.a,{md:"2",sm:"8"},"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c: "),r.a.createElement(oe,{name:"dependency"})),r.a.createElement(F.a,{name:"sounds"},(function(e){var t=e.fields;return t.map((function(e,n){return r.a.createElement(ae,{key:e},r.a.createElement("h3",null,"\u0417\u0432\u0443\u043a ",n+1),r.a.createElement(M.a.Group,{as:N.a},r.a.createElement(A.a,{md:"3",sm:"8"},"\u041d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),r.a.createElement(A.a,{md:"3",sm:"8"},"\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),r.a.createElement(A.a,{md:"3",sm:"8"},"\u0412\u044b\u0441\u043e\u0442\u0430")),r.a.createElement(M.a.Group,{as:N.a},r.a.createElement(oe,{name:"".concat(e,".direction")}),r.a.createElement(oe,{name:"".concat(e,".length")}),r.a.createElement(oe,{name:"".concat(e,".pitch")}),r.a.createElement(A.a,{md:"2",sm:"8"},r.a.createElement(re,null,r.a.createElement(q,{onClick:function(){return t.remove(n)}}))),r.a.createElement(A.a,{md:"1",sm:"8"})))}))})),r.a.createElement(ce,null,r.a.createElement(le,{onClick:function(){return a("sounds",void 0)}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0432\u0443\u043a ",r.a.createElement($,null))),r.a.createElement("div",null,r.a.createElement(O.a,{type:"submit",disabled:c||l},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement("pre",null,JSON.stringify(o,0,2))))}})))};function ie(){var e=Object(h.a)(["\n.modal-dialog {\n  max-width: 700px;\n}\n"]);return ie=function(){return e},e}function se(){var e=Object(h.a)(["\n  width: 300px;\n  height: 100px;\n  padding: 20px;\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  margin: -200px 0 0 -240px;\n"]);return se=function(){return e},e}var de=E.a.div(se()),pe=Object(E.a)(b.a)(ie()),me={id:2,name:"1212",pitch:"\u0423\u0442 \u043d\u0438\u0437\u043a\u043e\u0435",sounds:"1",opts:["\u0422\u0438\u0445\u0430\u044f"],value:"<span></span>1212",sounds_description:{sounds:[{direction:1,length:8,pitch:12},{direction:0,length:4,pitch:6}],dependency:0}},fe=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).componentDidMount=function(){console.log("cmd")},n.showEditModal=function(e){return function(){console.log({value:e}),n.setState({showModal:!0,valueForEdit:e})}},n.closeEditModal=function(){n.setState({showModal:!1,valueForEdit:{}})},n.saveDescription=function(e){var t=n.props.updateDescription,a=n.state.valueForEdit,r=a._id,c=a.categoryId;t({value:{dependency:e.dependency.value,sounds:e.sounds.map((function(e){return{direction:e.direction.value,length:e.length.value,pitch:e.pitch.value}}))},categoryId:c,symbolId:r}),n.closeEditModal()},n.state={showModal:!1,valueForEdit:{}},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.values,a=t.loading,c=this.state.showModal;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(de,null,r.a.createElement("img",{src:P.a,alt:"loading"})):r.a.createElement(r.a.Fragment,null,n.map((function(t){return r.a.createElement(I,{key:t._id,category:t,showEditModal:e.showEditModal})})),r.a.createElement(pe,{show:c,onHide:this.closeEditModal},r.a.createElement(b.a.Header,{closeButton:!0},r.a.createElement(b.a.Title,null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f")),r.a.createElement(b.a.Body,null,r.a.createElement(ue,{value:me,onSubmit:this.saveDescription})),r.a.createElement(b.a.Footer,null,r.a.createElement(O.a,{variant:"secondary",onClick:this.closeEditModal},"\u041e\u0442\u043c\u0435\u043d\u0430")))))}}]),t}(a.Component),ve=function(e){return e.list.list},he=function(e){return e.list.loading},Ee=function(e){return e.updateDescription.loading},be=function(){return{type:"UPDATE_DESCRIPTION_SUCCESS"}},Oe=function(){return{type:"UPDATE_DESCRIPTION_FAILED"}},ge=Object(o.b)((function(e){return{values:ve(e),loadingList:he(e),loadingUpdate:Ee(e)}}),(function(e){return{updateDescription:function(t){return e({type:"UPDATE_DESCRIPTION",payload:t})}}}))(fe),ye=function(){return{type:"LOAD_LIST"}},we=function(e){return{type:"LOAD_LIST_SUCCESS",payload:e}},je=function(){return{type:"LOAD_LIST_FAILED"}},xe=function(){return{type:"FETCHED_LIST"}};var Se=Object(o.b)((function(e){return e}),(function(e){return{actions:Object(i.b)({fetchList:xe},e)}}))((function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],l=n[1];return Object(a.useEffect)((function(){c||(e.actions.fetchList(),l(!0))})),r.a.createElement(s.a,null,r.a.createElement(ge,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=n(76),_e={list:[],loading:!1,error:!1},ke={loading:!1,error:!1},Ie=Object(i.c)({list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_LIST":return{loading:!0,error:!1,list:[]};case"LOAD_LIST_SUCCESS":return{error:!1,loading:!1,list:t.payload};case"LOAD_LIST_FAILED":return{list:[],loading:!1,error:!0};default:return e}},updateDescription:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_DESCRIPTION":return{loading:!0,error:!1};case"UPDATE_DESCRIPTION_SUCCESS":return{error:!1,loading:!1};case"UPDATE_DESCRIPTION_FAILED":return{loading:!1,error:!0};default:return e}}}),Ce=n(20),Pe=n.n(Ce),Te=n(21),Le=Pe.a.mark(Ae),Fe=Pe.a.mark(Me);function Ae(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)("FETCHED_LIST",Me);case 2:case"end":return e.stop()}}),Le)}function Me(){var e;return Pe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Te.c)(ye());case 3:return t.next=5,Object(Te.b)((function(){return fetch("https://tranquil-plateau-55628.herokuapp.com/kruk/all").then((function(e){return e.json()})).then((function(e){return e}))}));case 5:return e=t.sent,t.next=8,Object(Te.c)(we(e));case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(Te.c)(je());case 14:case"end":return t.stop()}}),Fe,null,[[0,10]])}var Ne=Pe.a.mark(Re),Ue=Pe.a.mark(Be);function Re(e){var t,n,a,r,c;return Pe.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,n=t.value,a=t.categoryId,r=t.symbolId,console.log(JSON.stringify({bodyData:n})),l.prev=2,l.next=5,Object(Te.b)((function(){return fetch("https://tranquil-plateau-55628.herokuapp.com/kruk/".concat(a,"/edit-description/").concat(r),{method:"put",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})}));case 5:return c=l.sent,console.log("success",{value:c}),l.next=9,Object(Te.c)(be(c));case 9:l.next=15;break;case 11:return l.prev=11,l.t0=l.catch(2),l.next=15,Object(Te.c)(Oe(l.t0));case 15:case"end":return l.stop()}}),Ne,null,[[2,11]])}function Be(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.d)("UPDATE_DESCRIPTION",Re);case 2:case"end":return e.stop()}}),Ue)}var He=Pe.a.mark(Je);function Je(){return Pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Te.a)([Ae(),Be()]);case 2:case"end":return e.stop()}}),He)}var Ke=Object(De.a)(),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,ze=Object(i.e)(Ie,Ge(Object(i.a)(Ke)));Ke.run(Je);var Ve=ze,qe=document.getElementById("root");l.a.render(r.a.createElement(o.a,{store:Ve},r.a.createElement(Se,null)),qe),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,n){e.exports=n.p+"static/media/Kruk-Kalashn-edit-VG.a204d2e7.ttf"},67:function(e,t,n){e.exports=n.p+"static/media/Loading.f4404720.gif"},78:function(e,t,n){e.exports=n(109)},88:function(e,t,n){}},[[78,1,2]]]);
//# sourceMappingURL=main.fcd2209a.chunk.js.map