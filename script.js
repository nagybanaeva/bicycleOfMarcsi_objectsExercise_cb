let bicycle = {
	'type': 'városi bringa', 
	'color': 'mentazöld', 
	'frame material': 'acél',
	'print properties': function() {
		var properties = [];
  		for (var bicycleProperty in this) {
			if (typeof this[bicycleProperty] !== 'function') {
      		properties.push(this[bicycleProperty]);
    		}
		}
		console.log(properties);
	}
};





