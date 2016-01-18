function backpack(v, goods){
	if(v <=0 || goods.length === 0){
		return 0;
	}
	var bestPrice = 0;
	goods.forEach(function(good, index){
		var niceGoods = [].concat(goods);
		niceGoods.splice(index, 1);
		if(goodv <= v && bestPrice < good.p + backpack(v-good.v, niceGoods)){
			bestPrice = (bestPrice < good.p + backpack(v-good.v, niceGoods));
		}
	});
	return bestPrice;
	
}
console.log(backpack(120, [{v:100, p: 110},{v:70, p:70}, {v: 50, p:65}]));