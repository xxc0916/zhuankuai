
cc.Class({
    extends: cc.Component,

    properties: {
        prefabs:[cc.Prefab]
    },

    // use this for initialization
    onLoad: function () {
    cc.director.getCollisionManager().enabled = true;
     //cc.director.getCollisionManager().enabledDebugDraw = true;
    this.zhi();
    for(let i = 0 ;i<100;i++){
        var a =[]
        n.push(a)
    }
    //this.disLine =[];
     this.end=false;
    //  for(let i=0;i<50;i++){
    //   this.addLine(i)
    //  } 
    this.addLine(0)
    this.u = 1
    this.schedule(function() {
      this.addLine(this.u)
      this.u ++
    }, 75/Math.abs(speedy));
    },
   
    addLine(num){
    var a = Math.floor(Math.random()*4);
    
    var oneLine = []
    for(let i =0;i<4;i++){
         var monster = cc.instantiate(this.prefabs[i===a?0:1]);
         if(monster.group ==='hong'){
             oneLine.push(monster)
         }
         monster.parent = this.node;
         monster.line = num + 100
         monster.position =cc.p(160*i - 240,504)
    } 
    n.push(oneLine)
    },
    
     zhi:function(){
        var Request ={};
        Request = GetRequest();
        var a
        a = Request["rank"];
        var b
        b="_aa"+a+"bb-";
        this.i= hex_md5(b)
        
    },
       chick:function(){
        if(!this.end){
            //location.replace("http://game.guangjixinxi.com/ntjycq/Index/result?score="+this.feng+"&rank="+this.i);
             this.end =true
        }
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
function GetRequest() {
    var url = window.location.search
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
