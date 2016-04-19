var timer = {
    second: 1000,
		start: null,
    run: function (min) {
      var seconds = min || this.second;		
			this.start = setInterval(function () {
					console.log('second pass');
			}, seconds);		
    },
    stop: function (min) {
		var stop = function () { clearInterval(this.start); }
        setTimeout(stop.bind(this), min);
        // return false;
    }
}
timer.run(1000);
timer.stop(3000);