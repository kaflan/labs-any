function permutations(n) {
    function generatePermitation(list) {
        if (list.length === 1) {
            return [list];
        }
        var result = [];
        for (var i = 0; i < list.length; i++) {
            var newList = [].concat(list);
            newList.splice(i, 1);
            var smallResult = generatePermitation(newList);
            for (var j = 0; j < smallResult.length; j++) {
                result.push([list[i]].concat(smallResult[j]));
            }
        }
        return result;
    }
    var initial = [];
    for (var c = 1; c <= n; c++) {
        initial.push(c);
    }
    return generatePermitation(initial);
}

console.log(permutations(3));