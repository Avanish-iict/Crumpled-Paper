class Dustbin3{
  constructor(x,y,width,height){
   
    var options ={
      isStatic:true
     
    }
      this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 90;
        this.height = 90;
  
         World.add(world,this.body);
  }
   
  display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y); 
     // rotate(angle);
   rectMode(CENTER);
   rect(450, 135, 10, 90);
            
      pop();
    }
  }

