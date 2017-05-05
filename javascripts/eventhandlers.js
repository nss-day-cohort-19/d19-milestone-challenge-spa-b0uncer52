"use strict";
var EventHandlers = (function(chip) {

	chip.activateEvents = () => {
		var master = $("#master-wrapper");
		var input = $("input");

		function keypress(keyin) {
			if(keyin.keyCode == 13) {
			input[0].removeEventListener("keyup", keypress);
			input.blur();
			input[0].value = "";
			}
			else{
				document.querySelector('.clicked').children[2].innerHTML = keyin.target.value;
			}
		}
		master[0].addEventListener("click", (event) => {
			var target = $(event.target.parentElement);
			if(target.hasClass("col-sm-4 car")) {
				var color = "black";
				CarLot.resetBack();
				CarLot.setBack(target, color);
				input[0].addEventListener("keyup", keypress);
				input.focus();
				input[0].value = "";
			}
		});
	};
	return chip;
})(CarLot);