 function getRange(n){
     var res = [];
     for(var c = 0; c < n; c++){
         res.push(c);
     }
     return res;
 }
function permutationIterative(n){
    var solutions = [];
    solutions[1]= [[0]];
    for(var currentN = 2; currentN <= n; currentN++){
        var currentResults = [];
        for(var i = 0; i < currentN; i++){
           var myNumbers = getRange(currentN);
           myNumbers.splice(i, 1);
           var previosStepSolution = solutions[currentN -1];
           for(var j = 0; j < previosStepSolution.length; j++){
              var currentSolution = [];  
              for(var jj = 0; jj < previosStepSolution[j].length; jj++){
                   currentSolution.push(myNumbers[previosStepSolution[j][jj]]);
              }
              currentResults.push([i].concat(currentSolution));
           }
        }
        solutions[currentN] = currentResults;
    }
    return  solutions[n];
}
console.log(permutationIterative(3));