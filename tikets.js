var Tiket = function(type, startTime, endTime, assigne) {
  this.type = type;
  this.startTime = startTime;
  this.endTime = endTime;
  this.assigne = assigne;
}
var type = ["Critical", "Major", "Minor"];
var assignees = ['Kaflan', "Zub", "Davert"];
var dateStart = new Date();
var dateEnd = new Date();
var tikets = [];
for (var i = 0; i < 5; i++) {
  var randoms = Math.floor(Math.random() * type.length);
  var start = dateStart.setDate(dateStart.getDate() + Math.floor(Math.random() * 5));
  var end = dateEnd.setDate(dateEnd.getDate() + 10);
  tiket = new Tiket(type[randoms], start, end, assignees[randoms]);
  tikets.push(tiket);
}
// вычеслем среднее время тикета в милисек
//1 Час (ч) = 3600000 Миллисекунд (мс)
function calculateAverageTime(tikets, type) {
  return tikets.filter(function(ticket) {
    return ticket.type === type;
  }).map(function(ticket) {
    return ticket.endTime - ticket.startTime;
  }).reduce(function(sum, current) {
    return sum + current;
  }, 0) / tikets.length / 3600000;
}

function choseBestIngener(tickets, assignees, type) {
  // for each engineer
  // for all his tickets
  // calculate avarage time
  // choose minimal time per engineer
  var userTime = {};
  assignees.forEach(function(assigne) {
    var userTickets = tickets.filter(function(ticket){
      return ticket.assigne === assigne;
    });
    userTime[assigne] = calculateAverageTime(userTickets, type);
  });
  _.max(Object.keys(userTime), function (o) {
   return userTime[o];
 });
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
var timeAll = [];
for (var i = 0; i < type.length; i++) {
  timeAll.push(calculateAverageTime(tikets, type[i]));
  console.log('Средне время продолжительности тикета: ', type[i], calculateAverageTime(tikets, type[i]));
  console.log('Максимальное время закрытия тикета: ', type[i], getMaxOfArray(timeAll));
  console.log('Минимальное время закрытия тикета: ', type[i], getMinOfArray(timeAll));
  console.log(type[i], choseBestIngener(tikets, assignees, type[i]))
}
