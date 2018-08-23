/**
 * Created by 三木 on 2018/8/22.
 */
window.onload=function(){
    let right_right=document.getElementsByClassName("right_right");
    let shophide=document.getElementsByClassName("shophide");
    right_right[0].onmouseenter=function(){
        shophide[0].style.height="100px";
        shophide[0].style.boxShadow="0 5px 10px 1px rgba(0,0,0,0.15)";
        // shophide.style.transition="all 1s";
    };
    right_right[0].onmouseleave=function(){
        shophide[0].style.height=0;
        shophide[0].style.boxShadow="none";
        // shophide.style.transition="all 1s";
    };
    let text=document.getElementsByClassName("text");   //text(只有一个子元素)是html集合，被调用时必须加[0]
    let li=text[0].getElementsByTagName("li");
    let asideBox=document.getElementsByClassName("asideBox");
    for(let i=0;i<li.length;i++){
        li[i].onmouseenter=function(){
            asideBox[i].style.display="block";
        };
        li[i].onmouseleave=function(){
            asideBox[i].style.display="none";
        }
    }

};