function backpack(v, goods){
	if(v <=0 || goods.length === 0){
		return 0;
	}
	var bestPrice = 0;
	goods.forEach(function(good, index){
		var niceGoods = [].concat(goods);
		niceGoods.splice(index, 1);
		if(good.v <= v && bestPrice < good.p + backpack(v-good.v, niceGoods)){
			bestPrice = (good.p + backpack(v-good.v, niceGoods));
		}
	});
  console.log(bestPrice)
	return bestPrice;
}
function goods(){
  var someGoods = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
  var Goods = function(v, p){
    this.v = v;
    this.p = p;
  }
  var arr = [];
  for(var i = 0; i< someGoods; i++){
    var p = Math.floor(Math.random() * (100 - 4 + 1)) + i;
    var v = Math.floor(Math.random() * (100 - 4 + 1)) + i;
    arr.push(new Goods(v, p));
  }
  return arr;
}
console.log(backpack(120, goods()));
