(this.webpackJsonptrivia=this.webpackJsonptrivia||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),i=n.n(c),l=n(1),o=(n(13),[{id:"any",name:"Any Category"},{id:9,name:"General Knowledge"},{id:10,name:"Entertainment: Books"},{id:11,name:"Entertainment: Film"},{id:12,name:"Entertainment: Music"},{id:13,name:"Entertainment: Musicals &amp; Theatres"},{id:14,name:"Entertainment: Television"},{id:15,name:"Entertainment: Video Games"},{id:16,name:"Entertainment: Board Games"},{id:17,name:"Science &amp; Nature"},{id:18,name:"Science: Computers"},{id:19,name:"Science: Mathematics"},{id:20,name:"Mythology"},{id:21,name:"Sports"},{id:22,name:"Geography"},{id:23,name:"History"},{id:24,name:"Politics"},{id:25,name:"Art"},{id:26,name:"Celebrities"},{id:27,name:"Animals"},{id:28,name:"Vehicles"},{id:29,name:"Entertainment: Comics"},{id:30,name:"Science: Gadgets"},{id:31,name:"Entertainment: Japanese Anime &amp; Manga"},{id:32,name:"Entertainment: Cartoon &amp; Animations"}]);var s=function(e){var t=e.category,n=e.chooseCategory;return r.a.createElement("div",{className:"category"},r.a.createElement("p",null,"Select Category"),r.a.createElement("select",{value:t,onChange:function(e){return n(e.target.value)}},o.map((function(e,t){return r.a.createElement("option",{key:t,value:e.id,dangerouslySetInnerHTML:{__html:e.name}})}))))},m=["Any Difficulty","Easy","Medium","Hard"];var u=function(e){var t=e.difficulty,n=e.chooseDifficulty;return r.a.createElement("div",{className:"difficulty"},r.a.createElement("p",null,"Select Difficulty"),r.a.createElement("select",{value:t,onChange:function(e){return n(e.target.value)}},m.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))};var d=function(e){var t=e.isCorrect,n=Object(a.useState)(0),c=Object(l.a)(n,2),i=c[0],o=c[1],s=Object(a.useState)(0),m=Object(l.a)(s,2),u=m[0],d=m[1];return Object(a.useEffect)((function(){null!==t&&(t?o((function(e){return e+1})):d((function(e){return e+1})))}),[t]),r.a.createElement("div",{className:"score"},r.a.createElement("div",{className:"incorrect"},r.a.createElement("strong",null,u),r.a.createElement("span",null,"incorrect")),r.a.createElement("div",{className:"correct"},r.a.createElement("strong",null,i),r.a.createElement("span",null,"correct")))},f=n(7),E=n(6),y=n.n(E);var v=function(e){var t=e.question,n=e.handleAnswer,a=y()([].concat(Object(f.a)(t.incorrect_answers),[t.correct_answer]));return r.a.createElement("div",{className:"question"},r.a.createElement("h2",{dangerouslySetInnerHTML:{__html:t.question}}),a.map((function(e,t){return r.a.createElement("button",{key:t,onClick:function(){return n(e)},dangerouslySetInnerHTML:{__html:e}})})))};var g=function(e){var t=e.isCorrect,n=e.question,a=e.getQuestion;return r.a.createElement("div",{className:"result modal ".concat(t?"is-correct":"is-incorrect")},r.a.createElement("div",{className:"overlay"}),r.a.createElement("div",{className:"modal-content"},t&&r.a.createElement("span",{role:"img","aria-label":"fist bump emoji"},"\ud83d\udc4a\ud83d\udc4a\ud83d\udc4a",r.a.createElement("br",null),"YOU WON!"),!t&&r.a.createElement("span",{role:"img","aria-label":"crying face emoji"},"\ud83d\ude22\ud83d\ude22\ud83d\ude22",r.a.createElement("br",null),"YOU LOST!"),!t&&r.a.createElement("div",{className:"correct-answer"},r.a.createElement("small",null,"The correct answer was:"),r.a.createElement("br",null),r.a.createElement("strong",{dangerouslySetInnerHTML:{__html:n.correct_answer}})),r.a.createElement("button",{onClick:a},"Next question")))};var p=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("any"),i=Object(l.a)(c,2),o=i[0],s=i[1],m=Object(a.useState)(""),u=Object(l.a)(m,2),d=u[0],f=u[1],E=Object(a.useCallback)((function(){var e="https://opentdb.com/api.php?amount=1";"any"!==o&&(e+="&category=".concat(o)),null!==d&&(e+="&difficulty=".concat(d.toLowerCase())),fetch(e).then((function(e){return e.json()})).then((function(e){return r(e.results[0])}))}),[o,d]);return Object(a.useEffect)((function(){E()}),[E,o]),{question:n,category:o,setCategory:s,difficulty:d,setDifficulty:f,getQuestion:E}};var b=function(){var e=p(),t=e.question,n=e.getQuestion,c=e.category,i=e.setCategory,o=e.difficulty,m=e.setDifficulty,f=Object(a.useState)(null),E=Object(l.a)(f,2),y=E[0],b=E[1];function h(){b(null),n()}return r.a.createElement("div",{className:"app"},null!==y&&r.a.createElement(g,{isCorrect:y,question:t,getQuestion:h}),r.a.createElement("div",{className:"question-header"},r.a.createElement(s,{category:c,chooseCategory:i}),r.a.createElement(u,{difficulty:o,chooseDifficulty:m}),r.a.createElement(d,{isCorrect:y})),r.a.createElement("div",{className:"question-main"},t&&r.a.createElement(v,{question:t,handleAnswer:function(e){var n=e===t.correct_answer;b(n)}})),r.a.createElement("div",{className:"question-footer"},r.a.createElement("button",{onClick:h},"Next question")))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0238ff45.chunk.js.map