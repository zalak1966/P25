class Paper{
    constructor(x,y,r){
       var option={
           isStatic:false,
           restitution:0.3,
           friction:0,
           density:1.2
       }
       this.image=loadImage("paper.png")
       this.body=Bodies.circle(x,y,r,option)
       this.r=r
       World.add(world,this.body)
    }
    display()
    {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image, 0, 0, this.r, this.r);
      pop();
    }
      
    }
  