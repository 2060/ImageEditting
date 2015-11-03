applyFilter = function (filter) {
	app.addUndo();
	var layer = app.getActiveLayer();
	
	layer.filters = (layer.filters ? layer.filters: []);
	layer.filters.push(filter);
	if (layer.cacheCanvas) {
		layer.updateCache();
	} else {
		layer.cache(0, 0, layer.width, layer.height);
	}
}

filterBrightness = function (value) {
	applyFilter(new ColorFilter(value, value, value, 1));
}

filterColorify = function (r, g, b, a) {
	applyFilter(new ColorFilter(1.0, 1.0, 1.0, 1.0, r, g, b, a));
	hideDialog('#dialog-filtercolorify');
}

filterSharpen = function () {
	applyFilter(new ConvolutionFilter(
		[
			[  0, -1,  0 ],
			[ -1,  5, -1 ],
			[  0, -1,  0 ]
		],
		1.0,
		0.0
	));
	hideDialog('#dialog-filtersharpen');
}

app.callbacks.filterBrightnessIncrease = function () {
	var val = 1.05;
	filterBrightness(val);
}

app.callbacks.filterBrightnessDecrease = function () {
	var val = 0.95;
	filterBrightness(val);
}

app.callbacks.filterColorify = function (e) {
	var r = $('#dialog-filtercolorify input.r').val() * 1,
		g = $('#dialog-filtercolorify input.g').val() * 1,
		b = $('#dialog-filtercolorify input.b').val() * 1,
		a = $('#dialog-filtercolorify input.a').val() * 1;
	switch (e.type) {
		case "click":
			filterColorify(r, g, b, a);
			break;
		case "keydown":
			if (e.keyCode == 13) filterColorify(r, g, b, a);
			break;
	}
}

app.callbacks.filterSharpen = function (e) {
	filterSharpen();
}