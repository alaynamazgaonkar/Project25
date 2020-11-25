class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':0.2,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      this.height = this.radius*2
      this.width = this.radius*2
      this.image = loadImage("paper.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("white");
      image(this.image,0, 0, 90, 90);
      pop();
    }
  };