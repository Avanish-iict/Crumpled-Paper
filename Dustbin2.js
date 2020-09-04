class Dustbin2{
  constructor(y,x,width,height){
   
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 106.20;
        this.height = 10;
  
         World.add(world,this.body);
  }
   
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
       //push();
      translate(pos.x,pos.y); 
       rotate(angle);
    rectMode(CENTER);
    rect(591, 675, this.width, this.height);

    fill("red")
    pop();
  }
}
