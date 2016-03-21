var htmlGenerator  = {
  createElm: function(elm){
    return document.createElement(elm);
  },
  addClass: function(elm, cls){
    return this.selectElm(elm).classList.add(cls);
  },
  addElemToHtml: function(parent, elem, i){
          i = i || 0;
   return document.querySelectorAll(parent)[i].appendChild(elem);
  },
  selectElm: function(elm){
    return document.querySelector(elm);
  },
  addText: function(elem, text){
    return this.selectElm(elem).textContent = text;
  },
  addTextToAll: function(elem, text, i){
     return document.querySelectorAll(elem)[i].textContent = text; 
  }
};
var h1 = htmlGenerator.createElm("h1");
var div = htmlGenerator.createElm("div");
var ol = htmlGenerator.createElm("ol");
var li = htmlGenerator.createElm("li");
var ul = htmlGenerator.createElm("ul"); 
var input = htmlGenerator.createElm('input');
var quest = 'Вопрос #';
var answer = 'Ответ #';
htmlGenerator.addElemToHtml("body", div);
htmlGenerator.addElemToHtml("div", h1);
htmlGenerator.addElemToHtml("div", ol);
htmlGenerator.addText("h1", 'Тест по программированию')

for(var i = 0; i < 3; i++){
    li = htmlGenerator.createElm("li");
    ul = htmlGenerator.createElm("ul"); 
    htmlGenerator.addElemToHtml('ol',li);
    htmlGenerator.addTextToAll('ol>li', quest + ' ' + (1 + i), i)
    htmlGenerator.addElemToHtml('ol>li', ul, i);
    for(var j = 0; j < 3; j++ ){
         var input = htmlGenerator.createElm('input'); 
         var p = htmlGenerator.createElm('p');
         input.setAttribute('type', 'checkbox');
         input.setAttribute('value', 'text'); 
         input.setAttribute("name",   answer + (j +1));
         input.setAttribute("class",   'block');
         p.innerText = answer + " " +  (j +1);
        htmlGenerator.addElemToHtml('ol>li>ul', p, i)
        htmlGenerator.addElemToHtml('ol>li>ul', input, i)
    }
}
// console.log(result);