function search(needle, haystack){
	var tail = [haystack];
	var curObj;
	while(curObj = tail.shift()){
	for(var in curObj) {
		if(needle === curObj[i]){return true;}
		if(typeof curObj[i]){
			tail.push(curObj[i]);
		}
	}
	}
	return false;
}
