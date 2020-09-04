class Ground{
    constructor(y,x,width,height){
     
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
          this.width = width;
          this.height = height;
    
           World.add(world,this.body);
    }
     
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(210,90, this.width, this.height);
        translate(pos.x,pos.y);
        
              
        pop();
      }
    }
