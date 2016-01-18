function isMultipleOfTwo(x){
	if(x === 1 ){
		return true;
	}
	if(x > 1){
		if(x%2 === 1){
			return false;
		}else{
		return isMultipleOfTwo((x/2));	
		}
	}
}
console.log(isMultipleOfTwo(6));