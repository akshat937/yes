class Rope {

    constructor(bodyA,PointB){

       var options = {
           bodyA : bodyA,
           pointB : this.pointB,
           lenght : 10,
           stiffness : 0.05
       }

       this.rope = Constraint.create(options);
       this.pointB = pointB
       World.add(world,this.chain)

    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
    strokeWeight(2);
    line(pointA.x,pointA.y - 100,pointB.x,pointB.y + 100)

    

    }
}