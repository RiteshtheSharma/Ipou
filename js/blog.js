var img;
var insert;

 let blogs_link;
if(document.querySelectorAll(".main_content").length==1)
blogs_link=document.querySelector(".main_content");

else{
    blogs_link=document.querySelectorAll(".main_content")[1];
}
blogs_link.addEventListener('click',((e)=>{
img =  e.target;

if(img.tagName=='IMG')
{localStorage.setItem('img',JSON.stringify(img.attributes[0].nodeValue));

window.location.href = "blogs.html";
}

}))

insert = document.getElementById('insert');
img=localStorage.getItem('img');

img=JSON.parse(img);
if(insert!=null && img!=null){
    insert.innerHTML=`<img src=${img} alt="">`
}