/**
 * Created by 三木 on 2018/8/22.
 */
window.onload=function(){

    //////////////////////////////////购物车下拉 选项卡///////////////////////////////////////
    let right_right=document.getElementsByClassName("right_right");
    let shophide=document.getElementsByClassName("shophide");
    right_right[0].onmouseenter=function(){
        shophide[0].style.height="100px";
        shophide[0].style.boxShadow="0 5px 10px 1px rgba(0,0,0,0.15)";

    };
    right_right[0].onmouseleave=function(){
        shophide[0].style.height=0;
        shophide[0].style.boxShadow="none";

    };


    //////////////////nav 隐藏////////////////////////
    $(".nav li").mouseenter(function(){
        $(".main_se_pull ul").eq($(this).index()).css("display","block");
        $(".main_se_pull").css("height","248px");
        $(".main_se_pull").css("boxShadow","0 5px 8px 1px rgba(0,0,0,0.15)");
        $(".main_se_pull").css("borderTop","1px solid #e0e0e0");
    });
    $(".nav li").mouseleave(function(){
        $(".main_se_pull ul").eq($(this).index()).css("display","none");
        $(".main_se_pull").css("height","0");
        $(".main_se_pull").css("boxShadow","0");
        $(".main_se_pull").css("borderTop","0");
    });
    $(".nav li:nth-child(9)").mouseenter(function(){
        $(".main_se_pull").css("height","0");
        $(".main_se_pull").css("boxShadow","0");
        $(".main_se_pull").css("borderTop","0");
    });
    $(".nav li:nth-child(10)").mouseenter(function(){
        $(".main_se_pull").css("height","0");
        $(".main_se_pull").css("boxShadow","0");
        $(".main_se_pull").css("borderTop","0");
    });


    /* let navLi=document.querySelectorAll(".nav li");
    let main_se_pull=document.querySelector(".main_se_pull");
    let main_se_pullLi=document.querySelectorAll(".main_se_pull ul");


    navLi.forEach((v,i)=>{
        v.onmouseenter=function () {
            main_se_pull.style.height="248px";
            main_se_pull.style.boxShadow="0 5px 8px 1px rgba(0,0,0,0.15)";
            main_se_pull.style.borderTop="1px solid #e0e0e0";
            main_se_pullLi.forEach(function (){
                main_se_pullLi.forEach(function (e) {
                    e.style.display="none";
                });
                main_se_pullLi[i].style.display="block";

            });
        };
        navLi[8].onmouseenter=function (){
            main_se_pull.style.height="0";
            main_se_pull.style.boxShadow="0";
            main_se_pull.style.borderTop="0";
        };
        navLi[9].onmouseenter=function (){
            main_se_pull.style.height="0";
            main_se_pull.style.boxShadow="0";
            main_se_pull.style.borderTop="0";
        };
        v.onmouseleave=function () {
            main_se_pull.style.height="0";
            main_se_pull.style.boxShadow="none";
            main_se_pull.style.borderTop="0";
        };

    });
*/

    //////////////asideBox  选项卡///////////////////////



    $(".text li").mouseenter(function(){
        $(".asideBox").eq($(this).index()).css("display","block");
    });
    $(".text li").mouseleave(function(){
        $(".asideBox").eq($(this).index()).css("display","none");
    });
    // $(".text li:nth-child(6)").mouseenter(function(){
    //     $(".asideBox1").css("display","block");
    // });
    // $(".text li:nth-child(6)").mouseleave(function(){
    //     $(".asideBox1").css("display","none");
    // });

    /*function asideEnter(asideBoxLi,textNum) {
        for(let i=0;i<textNum.length;i++){
            textNum[i].onmouseenter=function(){
                asideBoxLi[i].style.display="block";
            };
            textNum[i].onmouseleave=function(){
                asideBoxLi[i].style.display="none";
            }
        }
    }
    let text=document.getElementsByClassName("text")[0];
    let text1=text.getElementsByClassName("text1");
    let asideBox=document.getElementsByClassName("asideBox");
    asideEnter(asideBox,text1);

    let text2=text.getElementsByClassName("text2");
    let asideBox1=document.getElementsByClassName("asideBox1");
    asideEnter(asideBox1,text2);

    let text3=text.getElementsByClassName("text3");
    let asideBox2=document.getElementsByClassName("asideBox2");
    asideEnter(asideBox2,text3);

    let text4=text.getElementsByClassName("text4");
    let asideBox3=document.getElementsByClassName("asideBox3");
    asideEnter(asideBox3,text4);*/


    ///////////////////banner  轮播 台高层级方法///////////////////////////////
    /*1.css初始化  class  z-index
     * 2.setinterval（move，2000）num=0
     * 3.移入 移出banner
     * 4.左右箭头
     * 5.小点点击
     * */
    let t=setInterval(move,1000);
    let num=0;
    let li=$(".banner li");
    let dotLi=$(".dot li");
    function move(type="next"){
        li.css("z-index","5");
        dotLi.removeClass("dotHot");
        if(type=="next"){
            num++;
            if(num==li.length){
                num=0;
            }
        }else if(type=="prev"){
            num--;
            if(num<0){
                num=li.length-1;
            }
        }
        li.eq(num).css("z-index","10");
        dotLi.eq(num).addClass("dotHot");
    }
    $(".banner").mouseenter(function(){
        clearInterval(t);
    });
    $(".banner").mouseleave(function(){
        t=setInterval(move,1000);
    });
    $(".btns").click(function(){
        move(type="prev");
    });
    $(".btns1").click(function(){
        move(type="next");
    });

    /*
     let banner=document.getElementsByClassName("banner")[0];
     let bannerLi=banner.getElementsByTagName("li");
     let dot=document.getElementsByClassName("dot")[0];
     let dotLi=dot.getElementsByTagName("li");
     let btns=document.getElementsByClassName("btns")[0];
     let btns1=document.getElementsByClassName("btns1")[0];

     let t=setInterval(move,1000);
     let num=0;
     function move() {                             //如何轮播
     num++;
     if(num==bannerLi.length){
     num=0;
     }
     for(let i=0;i<bannerLi.length;i++){
     bannerLi[i].style.zIndex="5";
     dotLi[i].className="";
     }
     bannerLi[num].style.zIndex="10";
     dotLi[num].className="dotHot";
     }

     function move1() {
     num--;
     if(num<0){
     num=bannerLi.length-1;
     }
     for(let i=0;i<bannerLi.length;i++){
     bannerLi[i].style.zIndex="5";
     dotLi[i].className="";
     }
     bannerLi[num].style.zIndex="10";
     dotLi[num].className="dotHot";
     }

     banner.onmouseenter=function(){
     clearInterval(t);
     };
     banner.onmouseleave=function(){
     t=setInterval(move,1000);
     };


     btns.onclick=function () {
     clearInterval(t);
     move1();
     };

     btns1.onclick=function () {
     clearInterval(t);
     move();
     };
     for(let i=0;i<dotLi.length;i++){
     dotLi[i].onclick=function () {                     //易错  要遍历
     clearInterval(t);
     for(let j=0;j<bannerLi.length;j++){
     bannerLi[j].style.zIndex="5";
     dotLi[j].className="";
     }
     bannerLi[i].style.zIndex="10";
     dotLi[i].className="dotHot";
     num=i;
     }
     }*/

////////////////////////////////////家电  选项卡///////////////////////////////
    /*let appliance=document.getElementsByClassName("appliance")[0];
    let applyHead_right=appliance.getElementsByClassName("applyHead_right")[0];
    let applyHead_rightLi=applyHead_right.getElementsByTagName("li");

    let applyBottom_right=appliance.getElementsByClassName("applyBottom_right");

    console.log(applyBottom_right);
    for(let i=0;i<applyHead_rightLi.length;i++){
        applyHead_rightLi[i].onmouseenter=function(){
            for(let i=0;i<applyBottom_right.length;i++){
                applyBottom_right[i].style.zIndex=5;
            }
            applyBottom_right[i].style.zIndex=10;
        };
    }*/
////////////////////////////////////家电  选项卡 封装函数//////////////////
    function enter(section){
        let applyHead_right=section.getElementsByClassName("applyHead_right")[0];
        let li_section=applyHead_right.getElementsByTagName("li");

        let applyBottom_right=section.getElementsByClassName("applyBottom_right");
        for(let i=0;i<li_section.length;i++){
            li_section[i].onmouseenter=function(){
                for(let i=0;i<applyBottom_right.length;i++){
                    applyBottom_right[i].style.zIndex=5;
                    li_section[i].className="";
                }
                applyBottom_right[i].style.zIndex=10;
                li_section[i].className="applyHead_hot";
            };
        }
    }


    let appliance=document.getElementsByClassName("appliance")[0];
    enter(appliance);
    let Intelligence=document.getElementsByClassName("Intelligence")[0];
    enter(Intelligence);
    let collocation=document.getElementsByClassName("collocation")[0];
    enter(collocation);
    let parts=document.getElementsByClassName("parts")[0];
    enter(parts);
    let periphery=document.getElementsByClassName("periphery")[0];
    enter(periphery);



////////////////////为你推荐  轮播/////////////////////////////

    function Rec_enter(recNum,heRi_riNum,heRi_leNum,R_width) {

    let flag=true;
    let now=next=0;

        heRi_riNum.onclick=function Rec_moveR(){
            next++;
            // if(flag==false){
            //     return;
            // }
            if(next==heRi_riNum.length){
                next=heRi_riNum.length-1;
                return;
            }
            // flag=false;
            recNum[next].style.left=R_width+"px";
            animate(recNum[now],{left:-R_width},function(){
                flag=true;
            });
            animate(recNum[next],{left:0},function(){
                flag=true;
            });
            // heRi_riNum[now].style.color="";
            // heRi_riNum[next].style.color="#7a8c90";
            now=next;
        };
        heRi_leNum.onclick=function Rec_moveL(){
        next--;
        if(flag==false){
            return;
        }
        if(next<0){
            next=0;
            return;
        }
        flag=false;
        recNum[next].style.left=-R_width+"px";
        animate(recNum[now],{left:R_width},function(){
            flag=true;
        });
        animate(recNum[next],{left:0},function(){
            flag=true;
        });
        // heRi_leNum[now].style.color="";
        // heRi_leNum[next].style.color="#7a8c90";
        now=next;
    };
    }

    let recommend_bottom=document.querySelectorAll(".recommend_bottom");
    let recommend_ul=document.getElementsByClassName("recommend_ul")[0];
    let Rec_width=parseInt(getComputedStyle(recommend_ul,null).width);
    console.log(Rec_width);

    let headRight_right1=document.querySelector(".headRight_right1");
    let headRight_left1=document.querySelector(".headRight_left1");
    Rec_enter(recommend_bottom,headRight_right1,headRight_left1,Rec_width);

    //////////////////小米闪购/////////////////////
    let bottom_rightLi=document.querySelectorAll(".bottom_right");
    let bottom_right=document.getElementsByClassName("bottom_right")[0];
    let Pho_width=parseInt(getComputedStyle(bottom_right,null).width);


    let headRight_right=document.querySelector(".headRight_right");
    let headRight_left=document.querySelector(".headRight_left");
    Rec_enter(bottom_rightLi,headRight_right,headRight_left,Pho_width);

    ////////////////内容  轮播  左右移动///////////
 /*   let content_centerLi=document.querySelectorAll(".content_center");
    let content_center=document.getElementsByClassName("content_center")[0];
    let content_width=parseInt(getComputedStyle(content_center,null).width);

    let potLi=document.querySelectorAll(".pot1");

    let btns2=document.querySelector(".btns2");
    let btns2_2=document.querySelector(".btns2_2");


    let now=next=0;

    btns2_2.onclick=function C_moveR(){
        next++;
        if(next==content_centerLi.length){
            next=content_centerLi.length-1;
            return;
        }
        content_centerLi[next].style.left=content_width+"px";
        animate(content_centerLi[now],{left:-content_width});
        animate(content_centerLi[next],{left:0});
        potLi[now].classList.remove("pot1Hot");
        potLi[next].classList.add("pot1Hot");
        now=next;
    };
    btns2.onclick=function C_moveL(){
        next--;
        if(next<0){
            next=0;
            return;
        }
        content_centerLi[next].style.left=-content_width+"px";
        animate(content_centerLi[now],{left:content_width});
        animate(content_centerLi[next],{left:0});

        potLi[now].classList.remove("pot1Hot");
        potLi[next].classList.add("pot1Hot");
        now=next;
    };
    potLi.forEach(function(v,i){
        v.onclick=function(){
            potLi.forEach(function(v){
                v.classList.remove("pot1Hot");
            });
            if(now==i){
                return;
            }else if(now<i){
                next++;
                if(next==content_centerLi.length){
                    next=content_centerLi.length-1;
                    return;
                }
                content_centerLi[next].style.left=content_width+"px";
                animate(content_centerLi[now],{left:-content_width});
                animate(content_centerLi[i],{left:0});
            }else{
                next--;
                if(next<0){
                    next=0;
                    return;
                }
                content_centerLi[next].style.left=-content_width+"px";
                animate(content_centerLi[now],{left:content_width});
                animate(content_centerLi[i],{left:0});
            }
            potLi[i].classList.add("pot1Hot");
            next=now=i;
        }
    });*/

    ///////////////////// 封装 内容 函数/////////////////////////////////////
    function content_enter(centerNumLi,potNumLi,btnsNum,btnsNum_2){
        let content_center=document.getElementsByClassName("content_center")[0];
        let content_width=parseInt(getComputedStyle(content_center,null).width);

        let next=0;
        let now=0;
        btnsNum_2.onclick=function C_moveR(){
            next++;
            if(next==centerNumLi.length){
                next=centerNumLi.length-1;
                return;
            }
            centerNumLi[next].style.left=content_width+"px";
            animate(centerNumLi[now],{left:-content_width});
            animate(centerNumLi[next],{left:0});
            potNumLi[now].classList.remove("pot1Hot");
            potNumLi[next].classList.add("pot1Hot");
            now=next;
        };
        btnsNum.onclick=function C_moveL(){
            next--;
            if(next<0){
                next=0;
                return;
            }
            centerNumLi[next].style.left=-content_width+"px";
            animate(centerNumLi[now],{left:content_width});
            animate(centerNumLi[next],{left:0});

            potNumLi[now].classList.remove("pot1Hot");
            potNumLi[next].classList.add("pot1Hot");
            now=next;
        };
        potNumLi.forEach(function(v,i){
            v.onclick=function(){
                potNumLi.forEach(function(v){
                    v.classList.remove("pot1Hot");
                });
                if(now==i){
                    return;
                }else if(now<i){
                    next++;
                    if(next==centerNumLi.length){
                        next=centerNumLi.length-1;
                        return;
                    }
                    centerNumLi[next].style.left=content_width+"px";
                    animate(centerNumLi[now],{left:-content_width});
                    animate(centerNumLi[i],{left:0});
                }else{
                    next--;
                    if(next<0){
                        next=0;
                        return;
                    }
                    centerNumLi[next].style.left=-content_width+"px";
                    animate(centerNumLi[now],{left:content_width});
                    animate(centerNumLi[i],{left:0});
                }
                potNumLi[i].classList.add("pot1Hot");
                next=now=i;
            }
        });
    }
    let content_centerLi=document.querySelectorAll(".content_center");
    let potLi=document.querySelectorAll(".pot1");
    let btns2=document.querySelector(".btns2");
    let btns2_2=document.querySelector(".btns2_2");
    content_enter(content_centerLi,potLi,btns2,btns2_2);

    let content_centerLi2=document.querySelectorAll(".content_center2");
    let potLi2=document.querySelectorAll(".pot2");
    let btns3=document.querySelector(".btns3");
    let btns3_3=document.querySelector(".btns3_3");
    console.log(content_centerLi2, potLi2, btns3, btns3_3);
    content_enter(content_centerLi2,potLi2,btns3,btns3_3);

    let content_centerLi3=document.querySelectorAll(".content_center3");
    let potLi3=document.querySelectorAll(".pot3");
    let btns4=document.querySelector(".btns4");
    let btns4_4=document.querySelector(".btns4_4");
    content_enter(content_centerLi3,potLi3,btns4,btns4_4);

    let content_centerLi4=document.querySelectorAll(".content_center4");
    let potLi4=document.querySelectorAll(".pot4");
    let btns5=document.querySelector(".btns5");
    let btns5_5=document.querySelector(".btns5_5");
    content_enter(content_centerLi4,potLi4,btns5,btns5_5);

    //////////////////////视频//////////////////////

    let play=document.querySelectorAll(".play");
    let playhide=document.querySelector(".playhide");
    play.forEach(function (v) {
        v.onclick=function(){
            playhide.style.display="block";                       //不执行
        }
    })



}