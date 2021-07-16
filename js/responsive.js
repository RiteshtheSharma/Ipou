var body = document.querySelector('body');
var nav = document.querySelector('nav');
 var content = document.querySelector('div.content');
 var footer = document.querySelector('div.footer');  
 var cross_equal = document.getElementById('cross_equal');
 var thr = document.getElementById("thr");
 var bhr = document.getElementById("bhr");
 var qicon = document.getElementById("qicon");
 var toindex = document.getElementById("toindex");
 var hamburger_menu=document.querySelector(".ham_menu");
 var ham_anchors= document.querySelectorAll(".ham_menu ul li a");
 if(nav!=null)
{
 window.onscroll = function(e) {
     //true:- scrolling upwards
   if((this.oldScroll > this.scrollY)&&((this.scrollY>=56)) && document.querySelector(".sticky_nav")==null)
     nav.classList.add("sticky_nav");
   else if(((this.scrollY<56) ||(this.oldScroll < this.scrollY) || (window.scrollMaxY-this.scrollY<56))  && document.querySelector(".sticky_nav")!=null)
   nav.classList.remove("sticky_nav");
   this.oldScroll = this.scrollY;
  } }
function adjust_footer (event) {

   
    var height1 = content.offsetHeight;
    var height2= footer.offsetHeight;
    var height3 = 0;
    if(nav!=null)
    height3 = nav.offsetHeight;
      
    if (height1+height2+height3 < screen.height) {
        footer.classList.add('stikybottom');
    }
    else if( document.querySelector('.stikybottom')!=null){
        footer.classList.remove('stikybottom');
    } 
}

document.addEventListener("DOMContentLoaded", adjust_footer);
window.addEventListener("orientationchange", adjust_footer);

if(cross_equal!=null){
    cross_equal.addEventListener('click',((e)=>{let target_dom=e.target;
    body_overflowY=body.style.overflowY;
      thr.classList.toggle("fthr");
        bhr.classList.toggle("fbhr");
       
        if(body_overflowY=="" || body_overflowY=="scroll")
        {
            setTimeout(()=>{body.style.overflowY="hidden";
            nav.classList.add("hamcolor");
            hamburger_menu.classList.add("visible");
            qicon.classList.toggle("hide");
            toindex.classList.toggle("hide");
            nav.classList.toggle("ham_t_body");
      },700);
    }
        else
        {
            setTimeout(()=>{body.style.overflowY="scroll";
            nav.classList.remove("hamcolor");
                hamburger_menu.classList.remove("visible");
                qicon.classList.toggle("hide");
                toindex.classList.toggle("hide");
                nav.classList.toggle("ham_t_body");
    
},700);

       }
       
       
          
        
    }));



}
