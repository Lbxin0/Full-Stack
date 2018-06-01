
    document.onclick=function(e){
        // alert(e.clientX)
        var x=e.clientX;
        var y=e.clientY;
        var h=window.innerHeight;
        var hh=window.innerWidth/2;
        draw(x,y,h);
        // alert(hh)

    }
    function draw(x,y,h){
        //添加事件
        var dv1=document.createElement("div");
        dv1.className="fire";
        // alert(x)
        dv1.style.left=x+"px";
        dv1.style.top=h+"px";
        dv1.style.backgroundColor=colors();
        // var xx=dv1.style.left;
        // alert(xx)
        document.body.appendChild(dv1);
        var speed=-15;
        var time=setInterval(function(){
            dv1.style.top=dv1.offsetTop+speed+"px";
            if(dv1.offsetTop<=y){
                clearInterval(time);
                document.body.removeChild(dv1)
                createFire(x,y,h);//绘制烟花
            }

        },1000/60);

    }
    function createFire(x,y,h){
        var n=Math.ceil(Math.random()*50)+40;
        var files=[];
        for(j=0;j<n;j++){
            files[j]=document.createElement("div");
            files[j].className="more";
            files[j].style.left=x+"px";
            files[j].style.top=y+"px";
            files[j].style.backgroundColor=colors();
            // alert(files[j].style.left)
            files[j].speedX=Math.random()*20-10;
            files[j].speedY=Math.random()*20-10;
            document.body.appendChild(files[j])
        }
// alert(n)
        setInterval(function()
        {
            for (i = 0; i < n; i++) {
                files[i].style.left = files[i].offsetLeft + files[i].speedX+"px";
                files[i].style.top = files[i].offsetTop + files[i].speedY+"px";
                files[i].speedY+=1;
                if(files[i].offsetLeft<0||files[i].offsetLeft>window.innerWidth||files[i].offsetTop> h-10 ){
                    document.body.removeChild(files[i]);

                }
            }

        },1000/60)
    }

    //生成随机颜色  格式一  rgb(x,x,x)  0--255
    function colors(){
        var r=Math.floor(Math.random()*256);  //生成0-255之间的随机数
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb("+r+","+g+","+b+")";


    }

