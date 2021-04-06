class Hero {
  constructor(x, y, width, height) {
    this.image = loadImage("Superhero-01.png");
   
    var options = {
        
        'frictionAir':0.005,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    //stroke(0,0,0);
    translate(this.body.position.x, this.body.position.y);
    //rect(0,0,this.width,this.height);
   // rectMode(CENTER)
    image(this.image, 0, 0, this.width, this.height);
     strokeWeight(0);
    pop();
  }

}
