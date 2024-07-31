var main=document.querySelector(".main"); 
    var cursor=document.querySelector(".cursor");

main.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";

})

var tl = gsap.timeline();

tl.from(".nav h1",{
  scale:0.5,
  opacity: 0,
  delay:0.5,
  duration:0.99,
  staggar:1,
})


tl.from(".nav_part2 ",{
  scale:0.5,
  opacity: 0,
  delay:0.5,
  duration:0.99,
  staggar:1,

})

tl.from(".nav_part3",{
 scale:0.5,
  opacity: 0,
  delay:0.5,
  duration:0.99,
  staggar:1,
})

tl.from(".page1_part1 h1",{
  x:-100,
  opacity: 0,
  delay:0.5,
  duration:0.99,
  staggar:1,
})

tl.from(".img1 img",{
  x:-100,
  opacity: 0,
  delay:0.5,
  duration:0.99,
  staggar:1,
  x:100,
  
})

tl.from(".name_div h1",{
  
  opacity:0,
  scale:0.5,
  delay:0.5,
  duration:1,
 
})