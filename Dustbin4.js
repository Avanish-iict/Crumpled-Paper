class Dustbin4 {
    constructor(y,x,width,height){
         var options = {
            isStatic:true
        }
      
    
      this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = 10;
          this.height = 90;
    
           World.add(world,this.body);
          }
     
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(640, 625, 10, 90,{isStatic:true});
        
        translate(pos.x,pos.y);
              fill("red");
        pop();
      }
    }
    
