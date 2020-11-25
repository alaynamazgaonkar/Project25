class Ground {
    constructor(x, y) {
     var options = {
          isStatic : true}

      this.body = Bodies.rectangle(x, y, 500,50,options);
      this.height = 50;
      this.width= 1000;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };