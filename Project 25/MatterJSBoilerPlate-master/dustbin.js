class Dustbin {
    constructor(x, y,width,height) {
      var options = {
          isStatic:true}
      this.body = Bodies.rectangle(x, y,width,height,options);
      this.width = width;
      this.height =height;
  
     // Matter.Body.setAngle(this.body,angle);

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0,141,0);
      stroke(0,141,0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  