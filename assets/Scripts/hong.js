cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // use this for initialization
    onLoad: function () {
   
      this.speed=cc.v2(0, 2000)
       this.node.speed =this.speed
         this.collisionY = 0;
         this.one = false
         
    },

     onCollisionEnter: function (other, self) {
        //   if(other.node.group ==='wall'){
        //       cc.game.pause()
        //       return
        //   }
        var otherAabb = other.world.aabb;//得到另一个的框框（rect）
        var otherPreAabb = other.world.preAabb.clone();//上一次计算的碰撞组件另一个的 aabb 碰撞框
        var selfAabb = self.world.aabb;//得到自己的框框
        var selfPreAabb = self.world.preAabb.clone();
        selfPreAabb.y = selfAabb.y;
        otherPreAabb.y = otherAabb.y;
            
           if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)&&!this.one) {
            if (this.speed.y < 0 && (selfPreAabb.yMax > otherPreAabb.yMax)) {
                this.node.y = otherPreAabb.yMax - this.node.parent.y;
                this.collisionY = -1;
            }
            else if (this.speed.y > 0 && (selfPreAabb.yMin < otherPreAabb.yMin)) {
                this.node.y = otherPreAabb.yMin - selfPreAabb.height - this.node.parent.y;
                this.collisionY = 1;
            }
            this.speed.y = speedy;
            other.touchingY = true;
            this.node.group = 'hong';
            this.node.line = other.node.line - 1
            n[this.node.line].push(this.node)
            if(n[this.node.line].length===4){
                for(let x in n[this.node.line]){
                    n[this.node.line][x].active =false
                }
                n[this.node.line] =[]
                for(let i =1;i<10;i++){
                if(n[this.node.line - i] !==[]){
                for(let y in n[this.node.line - i]){
                    n[this.node.line - i][y].y += 75
                    n[this.node.line - i][y].line += 1
                    n[this.node.line-i + 1].push(n[this.node.line - i][y])
                }
                n[this.node.line - i] =[]
                }
                }
            }
            this.one = true;
               
           }
          
    },


    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
     
        this.node.y += this.speed.y * dt;
    
    },
});
