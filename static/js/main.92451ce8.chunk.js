(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),o=(n(29),n(14)),i=n(24),u=n(6),l=n.n(u),j=n(11),d=n(10),h=n(1),b=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(h.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};b.defaultProps={color:"steelBlue"};var f=b,p=n(2),O=function(e){var t=e.title,n=e.toggleForm,r=e.showAdd,c=Object(p.e)();return console.log(c),Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:t}),("/"===c.pathname||"/task-tracker"===c.pathname)&&Object(h.jsx)(f,{color:r?"red":"green",text:r?"Close":"Add",onClick:function(){n("click")}})]})};O.defaultProps={title:"Task Tracker"};var x=O,k=n(23),m=function(e){var t=e.task,n=e.deleteTask,r=e.toggleReminder;return Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){r(t.id)},children:[Object(h.jsxs)("h3",{children:[t.text," ",Object(h.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){n(t.id)}})]}),Object(h.jsx)("p",{children:t.day})]})},v=function(e){var t=e.tasks,n=e.deleteTask,r=e.toggleReminder;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)(m,{task:e,deleteTask:n,toggleReminder:r},e.id)}))})},g=function(e){var t=e.addTask,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(""),b=Object(d.a)(j,2),f=b[0],p=b[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){(e.preventDefault(),a)?(t({text:a,day:u,reminder:f}),s(""),l(""),p(!1)):alert("Please Add a Task")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{htmlFor:"",children:"Day & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{htmlFor:"",children:"Set Reminder"}),Object(h.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(h.jsx)("input",{type:"submit",className:"btn btn-block",placeholder:"Save Task"})]})},y=n(8),T=function(){return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:"Copyright \xa9 2021"}),Object(h.jsx)(y.b,{to:"/task-tracker/about",children:"About"})]})},w=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 1.0.0"}),Object(h.jsx)(y.b,{to:"/task-tracker",children:"Go Back"})]})};var C=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!1),s=Object(d.a)(a,2),u=s[0],b=s[1],f=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,c(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(j.a)(l.a.mark((function e(t){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.id=n[n.length-1].id+1,e.next=3,fetch("http://localhost:8000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,console.log(a),c((function(e){return[].concat(Object(i.a)(e),[a])}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/tasks/".concat(t),{method:"DELETE"});case 2:c(n.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(l.a.mark((function e(t){var r,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return r=e.sent,a=Object(o.a)(Object(o.a)({},r),{},{reminder:!r.reminder}),console.log(r),e.next=7,fetch("http://localhost:8000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 7:return s=e.sent,e.next=10,s.json();case 10:i=e.sent,c(n.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:i.reminder}):e})));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){return Object(h.jsxs)(h.Fragment,{children:[u&&Object(h.jsx)(g,{addTask:k}),n.length>0?Object(h.jsx)(v,{tasks:n,toggleReminder:C,deleteTask:m}):"No Tasks To Show"]})};return Object(h.jsx)(y.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{showAdd:u,toggleForm:function(){b(!u)}}),Object(h.jsx)(p.a,{exact:!0,path:["/","/task-tracker"],children:Object(h.jsx)(S,{})}),Object(h.jsx)(p.a,{path:"/task-tracker/about",component:w}),Object(h.jsx)(T,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.92451ce8.chunk.js.map