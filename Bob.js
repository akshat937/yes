class Bob{

    constructor(x,y){

    var options = {
      isStatic : false,
      restitution : 0.3,
      friction : 0.5,
      density : 1.2
    }

      this.body = Bodies.circle(x,y,30,options);
      World.add(world,this.body)
    }

    display(){
      push();
      translate(this.body.position.x,this.body.position.y)
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0,30,30); 
      pop();
    }
}