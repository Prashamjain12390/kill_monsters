class Monster {
  constructor(x, y, width, height) {
    
    var options = {
        
        'frictionAir':0,
        'density':5
    }
    this.width = width;
    this.height = height;
   this.x = x;
   this.y = y;
   this.image = loadImage("images/Monster-02.png");
   
    this.body = Bodies.rectangle(this.x, this.y,this.width, this.height, options);
   
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    stroke(0);
    translate(this.body.position.x, this.body.position.y-52);
    image(this.image, 0, 0, this.width, this.height);
     strokeWeight(0);
    pop();
  
  }

}
