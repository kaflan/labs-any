function nexPermitation(string){
    var str = string.split('');
    var currentPosition = str.length - 2;
    var goodNumbers = [str[str.length -1]];
    while( currentPosition >= 0 && str[currentPosition] > str[currentPosition + 1]){
        goodNumbers.push(str[currentPosition]);
        currentPosition--;
    }
    if(currentPosition === -1){
        return false;
    }
    goodNumbers.sort()
    var newNum;
    for(var i = 0; i < goodNumbers.length; i++){
        if(goodNumbers[i] > str[currentPosition]){
            newNum = goodNumbers[i];
            break;
        }
    }
  
    goodNumbers[i] = str[currentPosition];
    str[currentPosition] = newNum;
    goodNumbers.sort();
    return str.slice(0, currentPosition + 1).concat(goodNumbers).join(''); 
}
console.log(nexPermitation('2134'));