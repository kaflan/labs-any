R = {
	_: 'Котик',
	bind: function (fnc, newThis) {
		var arr = Array.prototype.slice.call(arguments,2);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === R._) {
				arr[i] = undefined;
			}
		}
		return function func() {
			var params = [];
			var arg = Array.prototype.slice.call(arguments);
			for (var i = 0; i < arr.length; i++) {
				params.push(arr[i]);
			}
			for (var i = 0; i < params.length; i++) {
				if (typeof params[i] === 'undefined') {
					params[i] = arg.shift();
				}
			}
			if(arg.length){
				for(var i = 0; i < arg.length; i++){
					params.push(arg[i]);
				}
			}
			console.log('params', arg);
			return fnc.apply(newThis, params);
		};
	}
}


function g(a, b, c) {
	console.log(this, a, b, c);
}
var p1 = R.bind(g, 1, 2, 3, R._);
p1(); // 1, 2, 3, undefined
// p1(4); // 1, 2, 3, 4
// var p2 = R.bind(g, 1, R._, 2, 3);
// p2(); // 1, undefined, 2, 3
// p2(4); // 1, 4, 2, 3
var p3 = R.bind(g, 1, R._, R._);
// p3(); // 1, undefined, undefined, undefined
// p3(4); // 1, 4, undefined, undefined
p3(4, 5); // 1, 4, 5, undefined
p3(4, 5, 6); // 1, 4, 5, 6
p3(1, 2, 3, 4, 5, 6);// 1, 1, 2, 3, 4, 5, 6