class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.traj=loadImage("sprites/smoke.png");
    this.traject=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var posit=[this.body.position.x,this.body.position.y];
      this.traject.push(posit);
    }
    console.log(this.traject);
    for(var i=0;i<this.traject.length;i++){
      var posx=this.traject[i][0];
      var posy=this.traject[i][1];
      image(this.traj,posx,posy);
    }
  }
}
