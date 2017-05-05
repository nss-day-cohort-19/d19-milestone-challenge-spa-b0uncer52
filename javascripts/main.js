"use strict";
function populatePage(inventory) {
	var domString = "";
	for(var i = 0; i < inventory.length; i++) {
		if(i % 3 === 0) {domString += `<div class="row">`;}
		domString += `<div class="col-sm-4 car" id="id${i}"><div>${inventory[i].year} ${inventory[i].make} ${inventory[i].model}</div>`;
		domString += `<div>$${inventory[i].price}</div><div>${inventory[i].description}</div></div>`;
		if(i % 3 === 2) {domString += `</div>`;}
	}
	$("#display").html(domString);
	CarLot.activateEvents();
}
CarLot.loadInventory(populatePage);

