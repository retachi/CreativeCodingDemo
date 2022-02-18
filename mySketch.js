function setup() {
	createCanvas(600, 600);
	background(255);
}

function draw() {
	
	noFill()
	rectMode(CENTER)
	
	ellipse(width/2,height/2,600,20+frameCount*10);
	// rect(width/2,height/2,150+frameCount*10,100)
	circle(width/2,height/2,frameCount*10)
	
	strokeWeight(frameCount%2==0?2:1)
	
	
}