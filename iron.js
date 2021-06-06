class Iron {
	constructor(x,y)
	{
		var options = {
			'density':30,
			'friction': 3,
			'restitution':0.8
		  };
		this.x=x;
		this.y=y;
        
		this.body = Bodies.rectangle(x, y,150, 150 , options);
        this.width = 150;
        this.height = 150;
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("silver");
			fill("black");
            rect(0, 0, this.width, this.height);
			pop()
	}

}