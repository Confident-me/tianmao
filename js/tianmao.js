 $(function(){
//文本框事件
    function zz(qq){
         var wenben=$(".wenben")[qq];
         //document.write(wenben.value)
         wenben.onfocus=function(){//表单获得焦点
          
         if(wenben.value=="魅力惠入驻！时尚轻奢首选"){

        wenben.value="";
        }
      }
      wenben.onblur=function(){
        if(wenben.value){

        }else{
          wenben.value="魅力惠入驻！时尚轻奢首选";
        }
      }
    }
    var wenben=$(".wenben");
   for(var i=0;i<wenben.length;i++){
          zz(i);
   }

//轮播图事件
var lunbo=$(".lunbo");//获取
        //alert(lunbo);
        var xiaodian=$(".banner-xiaodian");
       // alert(xiaodian)
        var num=1;
        //alert(num);
        function bb(){
            if(num==5){//当num=5的时候就给它赋值成0
                num=0;
            }
            for(var i=0;i<lunbo.length;i++){//遍历lunbo图片
                 lunbo[i].style.zIndex=2;//初始的层级都为2
                 xiaodian[i].style.background="#333";//小按钮初始的背景颜色
                // xiaodian[i].style.color="#ccc";//字体颜色
            }
            lunbo[num].style.zIndex=3;
           xiaodian[num].style.background="#ccc";
           // xiaodian[num].style.color="#333";
            num++;
            //alert(lunbo[num]);
        }
        var t=setInterval(bb,2000);//时间函数
         for(var i=0;i<xiaodian.length;i++){//遍历小按钮
             xiaodian[i].index=i;//index就是保存当前对象的i值
             xiaodian[i].onmouseover=function(){
                clearInterval(t);//当鼠标滑上去，停止时间函数。
                for(var j=0;j<xiaodian.length;j++){
                    lunbo[j].style.zIndex=2;
                    xiaodian[j].style.background="#333";
                    xiaodian[j].style.color="#C40000";
                }
                lunbo[this.index].style.zIndex=3;
                xiaodian[this.index].style.background="#ccc";
                xiaodian[this.index].style.color="#C40000";
           }
           xiaodian[i].onmouseout=function(){
            t=setInterval(bb,2000);
            num=this.index+1;
           }
         }
    

//鼠标滑动 小桃心 事件

 var zhongxin=getClass("zhong-1");
 var xin=getClass("xin");
    for(var i=0;i<zhongxin.length;i++){
      zhongxin[i].index=i;
        zhongxin[i].onmouseover=function(){
          xin[this.index].style.display="block";
        }
        zhongxin[i].onmouseout=function(){
          xin[this.index].style.display="none";
        }
      }


//楼层跳转事件
        var search=$(".search")[0];
        var flag=true;
        var flag1=true;//0--440  440-3000
        var floors=$(".lou1");

        var jump=$(".jump")[0];
        var btn=$("li",jump);
        //alert(floors[1].offsetTop)

      //按钮控制滚动条
        for(var i=0;i<btn.length;i++){
            btn[i].index=i;
            btn[i].onclick=function(){
                //alert(floors[this.index].t)
                var obj=document.documentElement.scrollTop?document.documentElement:document.body;//获取滚动条的对象
                //var scrollT=getScrollT();
                //obj.scrollTop=floors[this.index].t;
                animate(obj,{scrollTop:floors[this.index].t})//当前按钮的对应楼层的top赋值给滚动条
            }
        }

        window.onscroll=function(){
            //搜索框的显示与隐藏
            var scrollT=getScrollT();
            if(scrollT>=440){
                if(flag){//为了保证页面往下拉时只有一个animate函数执行
                    animate(search,{top:0},500);
                    flag=false;
                    flag1=true;
                }               
            }else{
                if(flag1){
                    animate(search,{top:-50});
                    flag1=false;
                    flag=true;
                }               
            }
             

             //楼层跳转
            var h=document.documentElement.clientHeight;
            var scrollT=getScrollT();
            if(scrollT>=1280){
                jump.style.display="block";
            }else{
                jump.style.display="none";
            }
        //滚动条控制按钮
            for(var i=0;i<floors.length;i++){
                floors[i].t=floors[i].offsetTop;//
                if(floors[i].t<scrollT+h/2){//如果scrollTop大于当前楼层的top
                    //alert(11111)
                    for(var j=0;j<btn.length;j++){
                        btn[j].style.color="black";
                    }
                    btn[i].style.color="red";
                }
                //floors[i].index=i;
            }
/**************************************/
        var floor=$(".lou1");
      
      var ch=document.documentElement.clientHeight;
      
        var scrollT=getScrollT();//
        //document.title=scrollT;
        //alert(floor[0].offsetTop)
        for(var i=0;i<floor.length;i++){
        if(floor[i].offsetTop<scrollT+ch){//当前楼层到顶部的高度如果小于页面内容超出浏览器的距离+浏览器的距离时
                var imgs=$("img",floor[i]);//获取当前楼层的所有图片
                for(var j=0;j<imgs.length;j++){//遍历图片
                  imgs[j].src=imgs[j].getAttribute("cc");//把每一个图片的aa属性的值赋值给src属性即可
                }
                //alert(imgs.length)
        }
      }
      


    }
    var searchsousuo1=$(".searchsousuo1")[0];
    searchsousuo1.onfocus=function(){//表单获得焦点
       if(searchsousuo1.value=="魅力惠入驻！时尚轻奢首选"){
        searchsousuo1.value="";
        }
    }
    searchsousuo1.onblur=function(){
        if(searchsousuo1.value){

        }else{
            searchsousuo1.value="魅力惠入驻！时尚轻奢首选";
        }
    }


//左边小轮播事件
function aa(a){
  var shijian=$(".shijian")[a];
      function moveleft(){

        animate(shijian,{left:-200},600,Tween.Linear,function(){//等待第一次动画执行完成后
        shijian.style.left=0;
        var last=getLast(shijian);
        var first=getFirst(shijian);
        shijian.appendChild(first);
        });
      }
      function moveright(){
        var last=getLast(shijian);
        shijian.style.left=-200+"px";
        var first=getFirst(shijian);
        shijian.insertBefore(last,first);
        animate(shijian,{left:0},600,Tween.Linear)
      }
      var t=setInterval(moveleft,2000);

      var left=$(".btn1")[a];
      var right=$(".btn2")[a];
      //alert(right);
      left.onmouseover=right.onmouseover=function(){
        clearInterval(t);
      }
      left.onmouseout=right.onmouseout=function(){
        t=setInterval(moveleft,2000);
      }
      left.onclick=function(){
        moveleft();
      }
      right.onclick=function(){
        moveright();
      }
}
 var shijian=$(".shijian");
for(var i=0;i<shijian.length;i++){
  aa(i)
}

/**********************************************/
/*图片按需加载*/



})








