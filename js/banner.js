/**
 * Created by 三木 on 2018/8/23.
 */
window.onload=function () {
    let bannerLi=document.querySelectorAll(".banner li");
    console.log(bannerLi);
    let banner=document.getElementsByClassName("banner")[0];
    let width=parseInt(getComputedStyle(banner,null).width);
    console.log(width);

    let dotLi=document.querySelectorAll(".dot li");
    console.log(dotLi);
    let btns=document.querySelector(".btns");
    let btns1=document.querySelector(".btns1");
    console.log(btns, btns1);

    //自动轮播
    let flag=true;
    let now=next=0;
    let t=setInterval(move,2000);
    function move(){
        next++;
        if(next==bannerLi.length){
            next=0;
        }
        bannerLi[next].style.left=width+"px";
        animate(bannerLi[now],{left:-width},function(){
            flag=true;
        });
        animate(bannerLi[next],{left:0},function(){
            flag=true;
        });
        dotLi[now].classList.remove("dotHot");
        dotLi[next].classList.add("dotHot");
        now=next;
    }
    function moveL(){
        next--;
        if(next<0){
            next=bannerLi.length-1;
        }
        bannerLi[next].style.left=-width+"px";
        animate(bannerLi[now],{left:width},function(){
            flag=true;
        });
        animate(bannerLi[next],{left:0},function(){
            flag=true;
        });
        dotLi[now].classList.remove("dotHot");
        dotLi[next].classList.add("dotHot");
        now=next;
    }
    // // 鼠标移入
    banner.onmouseenter=function(){
        clearInterval(t);
    };
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
    };
    // //按钮点击
    btns1.onclick=function(){
        clearInterval(t);
        if(flag==false){
            return;
        }
        if(next==bannerLi.length-1){
            next=bannerLi.length-1;
            return;
        }
        flag=false;
        move();
    };
    btns.onclick=function(){
        clearInterval(t);
        if(flag==false){
            return;
        }
        if(next==0){
            return;
        }
        flag=false;
        moveL();
    };


//////////////////////////小点点击 将要 现在 下一个/////////////////////////////////////////////


    dotLi.forEach(function(v,i){                     //i 指要点击的对象  now 指当前点击的
        dotLi[i].onclick=function(){
            // clearInterval(t);
            dotLi.forEach(function(v){
                v.classList.remove("dotHot");
            });
            if(now==i){
                return;
            }else if(now<i){
                bannerLi[i].style.left = width+"px";
                animate(bannerLi[now], {left: -width},function(){
                    flag=true;
                });
                animate(bannerLi[i], {left: 0},function(){
                    flag=true;
                });
                // dotLi[now].classList.remove("dotHot");
                // dotLi[i].classList.add("dotHot");
                // next=now=i;
            }else{
                bannerLi[i].style.left=-width+"px";
                animate(bannerLi[now],{left:width},function(){
                    flag=true;
                });
                animate(bannerLi[i],{left:0},function(){
                    flag=true;
                });
                // dotLi[now].classList.remove("dotHot");
                // dotLi[i].classList.add("dotHot");
                // next=now=i;
            }
            dotLi[i].classList.add("dotHot");
            next=now=i;
        }
    })













}