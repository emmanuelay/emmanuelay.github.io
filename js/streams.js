var canvas = null;
var counter = 0;
var counter2 = 0;
var counter3 = 0;
var fps = 60;

window.onload = function() {
	canvas = document.getElementById("flap");
	canvas.width  = window.innerWidth;
	// draw();
};

function windowResize() {
	canvas.width  = window.innerWidth;
	
};

window.addEventListener('resize', windowResize);


function draw() {

	var ctx = canvas.getContext("2d");
	var width = canvas.width;
	var height = canvas.height;
	ctx.clearRect(0,0, canvas.width, canvas.height);

	ctx.fillStyle = "rgba(93, 95, 116, .5)";
	var increase = .0001055 + (10 * Math.PI / (width/2));
	var increase2 = .0000095 + (8 * Math.PI / width);
	var increase3 = .000195 + (8 * Math.PI / (width/2));
	for (var i = 0; i < (width/2); i++) {

		y1 = (height/6) * Math.sin(counter);
		y2 = (height/8) * Math.cos(counter2);
		y3 = (height/6) * Math.sin(counter3);
		
		r = (y1 + y2 + y3) / 2;
		r0 = (y3 + y1) / 2;
		r1 = (y1 + y3) / 4;
		r2 = (y2 + y3) / 2;
		
		ctx.fillStyle = "rgba(93, 95, 116, .3)";
		ctx.fillRect(i*4, height/2, 1, r);
		ctx.fillStyle = "rgba(93, 95, 116, .6)";
		ctx.fillRect((width-1)-(i*4), height/2, 1, r0);
		ctx.fillStyle = "rgba(93, 95, 116, .4)";
		ctx.fillRect((i*4), height/2, 1, r1);
		ctx.fillStyle = "rgba(93, 95, 116, .2)";
		ctx.fillRect((i*4), height/2, 1, r2);

		counter += increase;
		counter2 += increase2;
		counter3 += increase3;
		
	}

	setTimeout(function(){
		requestAnimationFrame(draw);
	}, 1000 / fps);
	
}