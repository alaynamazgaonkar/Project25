class Dustbin2 {
    constructor(x, y,width,height) {
      var options = {
          isStatic:true}
      this.body = Bodies.rectangle(x, y,width,height,options);
      this.width = width;
      this.height =height;
      this.image = loadImage("dustbingreen.png")
     // Matter.Body.setAngle(this.body,angle);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      //fill("pink");
      image(this.image,0, -90, this.width+35, this.height+150);
      //rect(0, 0, this.width, this.height);

      pop();
    }
  };
  