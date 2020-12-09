class Paper {
    constructor(x,y,radius){
        var optoins={
            restitution:0.8,
            density:3,
            friction:1

        }
        
        this.image=loadImage("paper.png")
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,optoins);
        World.add(world,this.body);
     }
 display(){
     var angle=this.body.angle
     push ();
     translate(this.body.position.x,this.body.position.y)
    rotate(angle)
  imageMode(CENTER) 
  fill ("pink");
  image(this.image,0,0,this.radius,this.radius)
pop ();
 }
}
