function printPiramid(num) {
    //num высота пирамидки
    var result = '*'; // stars 
    if (num === 0) { // если  номер меньше нуля возращаемся все вершина
        return ' ';
    }
    if (num % 2 === 1) {
        console.log(num);
        return result + printPiramid(num - 1) + '\n';
    }
    for (var i = 0; i < num; i++){
        var space = ' ';
       if (i % 2 === 0) {
            space =+ result;  
             }
    }
    
    return space; //  тут прибавляем к результату остаток 
}
console.log(printPiramid(8));
