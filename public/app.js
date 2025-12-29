
/* Typing Effect */
const words=["Web Developer", "WordPress Expert","Wordpress Themes", "Wordpress Plugins"];
let i=0,j=0,t=document.getElementById("typing");
function type(){
    if(j<words[i].length){
        t.innerHTML+=words[i][j++];
        setTimeout(type,100);
    }else setTimeout(erase,1500);
}
function erase(){
    if(j>0){
        t.innerHTML=words[i].substring(0,--j);
        setTimeout(erase,60);
    }else{
        i=(i+1)%words.length;
        setTimeout(type,400);
    }
}
type();

/* Scroll Reveal */
document.addEventListener("scroll",()=>{
    document.querySelectorAll(".reveal").forEach(e=>{
        if(e.getBoundingClientRect().top < window.innerHeight-100)
            e.classList.add("active");
    });
});

/* Cursor */
const c=document.querySelector(".cursor");
const r=document.querySelector(".cursor-ring");
document.addEventListener("mousemove",e=>{
    c.style.left=r.style.left=e.clientX+"px";
    c.style.top=r.style.top=e.clientY+"px";
});