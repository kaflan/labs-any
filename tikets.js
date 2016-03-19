var Tiket = function (type, startTime, endTime, assigne) {
    this.type = type;
    this.startTime = startTime;
    this.endTime = endTime;
    this.assigne = assigne;
}
var type = ["Critical", "Major", "Minor"];
var ingeneers = ['Kaflan', "Zub", "Davert"];
var dateStart = new Date();
var dateEnd = new Date();
var tikets = [];
for(var i = 0; i < 5; i++){
  var randoms =  Math.floor(Math.random() * type.length);
  var start = dateStart.setDate(dateStart.getDate() + Math.floor(Math.random()*5));
  var end = dateEnd.setDate(dateEnd.getDate() + 10 );
  // console.log(start, end);
 tiket = new Tiket(type[randoms], start, end, ingeneers[randoms]);
 tikets.push(tiket);
}
// console.log(tikets)
var result = [];
for(var j = 0; j < tikets.length; j++){
   result.push(tikets[j].endTime - tikets[j].startTime);
}
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}
var maxTime = getMaxOfArray(result);
var minTime = getMinOfArray(result);
console.log(maxTime, minTime);
