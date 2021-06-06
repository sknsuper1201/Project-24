class Stone {
	constructor(x,y)
	{
		var options = {
			'density':12,
			'friction': 0.9,
			'restitution':0.9
		  };
		this.x=x;
		this.y=y;
        
		this.body = Bodies.rectangle(x, y,75, 75 , options);
        this.width = 75;
        this.height = 75;
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
            rect(0, 0, this.width, this.height);
			pop()
	}

}