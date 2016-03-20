var htmlGenerator  = {
  createElm: function(elm){
    return document.createElement(elm);
  },
  addClass: function(elm, cls){
    return this.selectElm(elm).classList.add(cls);
  },
  addElemToHtml: function(parent, elem){
    
   return this.selectElm(parent).appendChild(elem);
  },
  selectElm: function(elm){
    return document.querySelector(elm);
  },
  addText: function(elem, text){
    return this.selectElm(elem).textContent = text;
  }
};
var h1 = htmlGenerator.createElm("h1");
var div = htmlGenerator.createElm("div");
var ol = htmlGenerator.createElm("ol");
var ul = htmlGenerator.createElm("ul");
var li = htmlGenerator.createElm("li");
var input = htmlGenerator.createElm('input');
var quest = 'Вопрос #';
var answer = 'Ответ #';
htmlGenerator.addElemToHtml("body", div);
htmlGenerator.addElemToHtml("div", h1);
htmlGenerator.addElemToHtml("div", ol);
htmlGenerator.addText("h1", 'Тест по программированию')
for(var i = 0; i < 3; i++){
  console.log(li.insertBefore, i);
    
//  htmlGenerator.addText("li", quest + i);
  for(var j = 0; j < 3; j++){
  }
}
