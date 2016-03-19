// Написать функцию pow, аналогичную Math.pow,
var x = prompt ("введите число", 5)
var y = prompt ('Введите степень', 2)
var result;
for(var i = 0; i < y; i++) {
  result = x;
  result *=result;
}
cosnole.log(result);

/*
Циклом заполнить массив с помощью команды prompt в котором будет список из 5-ти любых имен
Потом вывести с помощью prompt сообщение с просьбой ввести имя пользователя
Введенное имя, циклом сравнивать с именами в массиве
Если нет совпадения, то есть введенное имя пользователя не существует в массиве - выдавать с помощью alert сообщение об ошибке
Если есть совпадение - выводить сообщение "Андрей, вы успешно вошли". Вместо "Андрей" должно быть имя текущего пользователя
*/
var users = [];
for(var i = 0; i < 5; i++ ){
  var name = prompt ("Введите имя", 'Kaflan');
  if(!name || name === null){
    i--;
    alert('имя вводить обезательно');
  }
  users.push(name);
}
var yourName = prompt('Ведите одно из 5 имен которое вы вводили', '');
function nameSearch(name) {
  for (var i = 0; i < nameList.length; ++i) {
    if (nameList[i] === name) {
     return "Your name: " + nameList[i]
    }
  }
  return false;
}
alert(nameSearch(yourName));
