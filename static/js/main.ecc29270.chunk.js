(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(6)),i=n(9),l=n(2),d=n(0),u=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};u.defaultProps={color:"steelBlue"};var j=u,b=function(e){var t=e.title,n=e.toggleForm,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(j,{color:c?"red":"green",text:c?"Close":"Add",onClick:function(){n("click")}})]})};b.defaultProps={title:"Task Tracker"};var m=b,h=n(8),O=function(e){var t=e.task,n=e.deleteTask,c=e.toggleReminder;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," ",Object(d.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){n(t.id)}})]}),Object(d.jsx)("p",{children:t.day})]})},x=function(e){var t=e.tasks,n=e.deleteTask,c=e.toggleReminder;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(O,{task:e,deleteTask:n,toggleReminder:c},e.id)}))})},f=function(e){var t=e.addTask,n=Object(c.useState)(),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(),i=Object(l.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(),m=Object(l.a)(b,2),h=m[0],O=m[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){(e.preventDefault(),a)?(t({text:a,day:u,reminder:h}),o(""),j(""),O(!1)):alert("Please Add a Task")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"",children:"Task"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{htmlFor:"",children:"Day & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{htmlFor:"",children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",className:"btn btn-block",placeholder:"Save Task"})]})};var k=function(){var e=Object(c.useState)([{id:1,text:"Doctors Appoinment",day:"Feb 5th at 2:30pm",reminder:!0},{id:2,text:"Doctors Appoinment",day:"Feb 5th at 2:30pm",reminder:!0},{id:3,text:"Doctors Appoinment",day:"Feb 5th at 2:30pm",reminder:!0}]),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(l.a)(a,2),u=o[0],j=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(m,{showAdd:u,toggleForm:function(){j(!u)}}),u&&Object(d.jsx)(f,{addTask:function(e){e.id=n.length+1,r((function(t){return[].concat(Object(i.a)(t),[e])}))}}),n.length>0?Object(d.jsx)(x,{tasks:n,toggleReminder:function(e){r(n.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t}))),console.log("hello")},deleteTask:function(e){r(n.filter((function(t){return t.id!==e})))}}):"No Tasks To Show"]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.ecc29270.chunk.js.map