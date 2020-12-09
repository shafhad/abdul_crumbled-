class Bin {
      constructor(){
    
		
		this.dustbinWidth=150;
		this.dustbinHeight=150;
		this.wallThickness=15;
           this.image=loadImage("dustbingreen.png")
           this.leftWall=Bodies.rectangle(1050,600,10,100,{isStatic:true});
           this.rightWall=Bodies. rectangle(1250,600,10,100,{isStatic:true});
           this.bottomWall=Bodies. rectangle(1100,650,200,10,{isStatic:true});
           World.add(world,this.leftWall);
           World.add(world,this.rightWall);
           World.add(world,this.bottomWall);
        }    
 display(){
   var posBottom=this.bottomWall.position;
   var posLeft=this.leftWall.position;
   var posRight=this.rightWall.position;

   

   push()
   translate(posLeft.x, posLeft.y);
   rectMode(CENTER)
   
   angleMode(RADIANS)
   fill(255)
   rotate(this.angle)
   
   pop()

   push()
   translate(posRight.x, posRight.y);
   rectMode(CENTER)
   
   angleMode(RADIANS)
   fill(255)
   rotate(-1*this.angle)
  
   pop()

   push()
   translate(posBottom.x, posBottom.y+10);
   rectMode(CENTER)
  
   angleMode(RADIANS)
   fill(255)
   imageMode(CENTER);
  image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
   
    //image(this.image,30,30,150,300)
   pop()
 }
}


