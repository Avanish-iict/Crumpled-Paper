class Paper{
  constructor(x,y,width,height){

      var options = {
        isStatic:false,
    restitution:0.10,
       friction:0.5,
       density:1.2
       
      }
      this.body = Bodies.circle(250,300,20,options);
    

       World.add(world,this.body);


    }
   
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    translate(pos.x,pos.y); 
    
    ellipseMode(CENTER);
   ellipse(-90, 10, 30, 30);

   fill("red");
    
    pop();
  }
 }
