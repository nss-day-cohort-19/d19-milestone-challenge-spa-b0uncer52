"use strict";

var CarLot = (function(){
	var inventory = [];
	return {
		loadInventory: function (callback) {
			var loader = new XMLHttpRequest();

			loader.addEventListener("load", function () {
				inventory = JSON.parse(this.responseText).cars;

				return callback(inventory);
			});
			loader.open("GET", "inventory.json");
			loader.send();
	    }
	};
})();