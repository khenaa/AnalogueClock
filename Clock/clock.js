function setTime(){

	var canvas = document.querySelector("#clock");
	var context = canvas.getContext("2d");
	var clockRadius = canvas.width/2;

	// creating the clock surface
	context.beginPath();
	context.fillStyle = "black";
	context.arc(clockRadius, clockRadius, clockRadius, 0, 2*Math.PI);
	context.fill();

	// creating the center dot
	context.fillStyle = "white";
	context.beginPath();
	context.arc(clockRadius, clockRadius, 10, 0, 2*Math.PI);
	context.fill();

	// creating the numbers
	context.font = clockRadius / 10 + "px arial";
	context.fillStyle = "white";
	context.textAlign = "center";
	context.textBaseline = "middle";

	for(var i = 1; i<=12; i++){
		context.fillText(i, clockRadius + clockRadius * 0.9 * Math.sin(i * 2*Math.PI / 12), clockRadius - (clockRadius * 0.9 * Math.cos(i * 2*Math.PI / 12)));
	}



	var hours = new Date().getHours();
	var mins = new Date().getMinutes();
	var sec = new Date().getSeconds();

	var fullHours = hours % 12 + mins / 60 + sec / 3600;

	var hoursAngle = fullHours * 2*Math.PI / 12;
	var minutesAngle = mins * 2*Math.PI / 60;
	var secondsAngle = sec * 2*Math.PI / 60;

	// creating the hour hand
	context.strokeStyle = "white";
	context.moveTo(clockRadius, clockRadius);
	context.lineTo(clockRadius + clockRadius * 0.55 * Math.sin(hoursAngle), clockRadius - (clockRadius * 0.55 * Math.cos(hoursAngle)));
	context.lineWidth = 5;
	context.stroke();

	// creating the minute hand
	context.moveTo(clockRadius, clockRadius);
	context.lineTo(clockRadius + clockRadius * 0.8 * Math.sin(minutesAngle), clockRadius - (clockRadius * 0.8 * Math.cos(minutesAngle)));
	context.lineWidth = 3;
	context.stroke();

	// creating the seconds hand
	context.moveTo(clockRadius, clockRadius);
	context.lineTo(clockRadius + clockRadius * 0.9 * Math.sin(secondsAngle), clockRadius - (clockRadius * 0.9 * Math.cos(secondsAngle)));
	context.lineWidth = 2;
	context.stroke();

}

setInterval(setTime, 1000);
