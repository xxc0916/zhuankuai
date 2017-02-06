cc.Class({
    extends: cc.Component,

    properties: {
     pre:cc.Prefab
    },

    // use this for initialization
    onLoad: function () {

    },
   
    addOne(){
         var monster = cc.instantiate(this.pre);
         monster.parent = this.node;
         monster.position =cc.p(0,0)
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
