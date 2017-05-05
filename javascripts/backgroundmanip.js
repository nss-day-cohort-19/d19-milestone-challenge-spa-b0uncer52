"use strict";

var BackgroundManip = ((sandwich) => {

	sandwich.resetBack = () => {
		$(".car").removeClass("clicked");
		$(".car").css("background-color", "white");
	};

	sandwich.setBack = (car, color) => {
		car.addClass("clicked");
		car.css("background-color", color); //using bootstrap, i liked the way it layed out better using
		//a background for car while the rest of car elements had a different color

	};

	return sandwich;
})(CarLot);