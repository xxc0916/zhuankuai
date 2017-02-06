cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.speed=cc.v2(0, 0)
        this.speed.y = speedy;
        this.node.speed =this.speed
    },
     onCollisionEnter: function (other, self) {
          if(other.node.group ==='wall'){
              cc.game.pause()
              return
          }
        // var otherAabb = other.world.aabb;//得到另一个的框框（rect）
        // var otherPreAabb = other.world.preAabb.clone();//上一次计算的碰撞组件另一个的 aabb 碰撞框
        // var selfAabb = self.world.aabb;//得到自己的框框
        // var selfPreAabb = self.world.preAabb.clone();
        // selfPreAabb.y = selfAabb.y;
        // otherPreAabb.y = otherAabb.y;
            
        //   if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)&&!this.one) {
        //     if (this.speed.y < 0 && (selfPreAabb.yMax > otherPreAabb.yMax)) {
        //         this.node.y = otherPreAabb.yMax - this.node.parent.y;
        //         this.collisionY = -1;
        //     }
        //     else if (this.speed.y > 0 && (selfPreAabb.yMin < otherPreAabb.yMin)) {
        //         this.node.y = otherPreAabb.yMin - selfPreAabb.height - this.node.parent.y;
        //         this.collisionY = 1;
        //     }
        //     this.speed.y = speedy;
        //     other.touchingY = true;
               
        //   }
         
     },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
     this.node.y += this.speed.y * dt;
    },
});
