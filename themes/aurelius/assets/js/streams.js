var canvas = null;
var counter = 0;
var counter2 = 0;
var counter3 = 0;
var fps = 60;

window.onload = function() {
	canvas = document.getElementById("flap");
	canvas.width  = window.innerWidth;
	draw();
};

function windowResize() {
	canvas.width  = window.innerWidth;
};

window.addEventListener('resize', windowResize);


function draw() {

	var ctx = canvas.getContext("2d");
	var width = canvas.width;
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.fillStyle = "rgba(93, 95, 116, .5)";
	var increase = .0001055 + (10 * Math.PI / (width/2));
	var increase2 = .0000095 + (8 * Math.PI / width);
	var increase3 = .000195 + (8 * Math.PI / (width/2));
	for (var i = 0; i < (width/2); i++) {

		y1 = 30 * Math.sin(counter);
		y2 = 20 * Math.cos(counter2);
		y3 = 30 * Math.sin(counter3);
		y = y1 + y2 + y3 / 2;
		y0 = y3 / 2;
		y4 = y1 + y3 / 2;
		
		ctx.fillStyle = "rgba(93, 95, 116, .3)";
		ctx.fillRect(i*4, 80, 1, y);
		ctx.fillStyle = "rgba(93, 95, 116, .9)";
		ctx.fillRect(width-(i*4), 80, 1, y0);
		ctx.fillStyle = "rgba(93, 95, 116, .6)";
		ctx.fillRect((i*4), 80, 1, y4);

		counter += increase;
		counter2 += increase2;
		counter3 += increase3;
		
	}

	setTimeout(function(){
		requestAnimationFrame(draw);
	}, 1000 / fps);
	
}