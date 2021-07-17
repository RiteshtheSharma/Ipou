var index_to_account=document.querySelector('form.flex_def');
let Name;


if(index_to_account!=null)
index_to_account.addEventListener('submit',(e)=>{
    e.preventDefault();
Name=localStorage.setItem('name',e.target.querySelectorAll('input')[0].value);
window.location.href='account.html';
})

if(window.location.href.endsWith('account.html')){
    let f=post_tag.querySelectorAll('div.ch')[0];
    let s=post_tag.querySelectorAll('div.ch')[1];
    f.addEventListener('click',()=>{
        console.log('f');
       if(f.id.length==0){
           f.id='post';
           s.id='';
           post_tag_content.innerHTML=``;
           Array.from(['img/android_app.png','img/apple_app.png'
        ,'img/favicon.png','img/index.jpeg','img/iphone.jpg',
    `\"img/Over 4M Pixel jpeg & png_Notebook_PC_1_Blank.jpg\"`,'img/socialm1.jpg',
'img/socialm3.jpg','img/socilam2.jpg'],(element)=>{
    post_tag_content.innerHTML+=`<div onmouseover=\"display(this) \" onmouseout=\"withdraw(this)\"><span class="hide"><big>♡</big> 7k <big>🗨</big>6 </span><img src=${element}></div>`});

     }}) ;
    s.addEventListener('click',()=>{
        console.log('f');
        if(s.id.length==0){
            s.id='tag';
            f.id='';
            post_tag_content.innerHTML=``;
            Array.from([`\"img/Over 4M Pixel jpeg & png_Notebook_PC_1_Blank.jpg\"`,'img/socialm1.jpg',
    'img/socialm3.jpg','img/socilam2.jpg','img/android_app.png','img/apple_app.png'
    ,'img/favicon.png','img/index.jpeg','img/iphone.jpg'],(element)=>{
        post_tag_content.innerHTML+=`<div onmouseover=\"display(this) \" onmouseout=\"withdraw(this)\"><span class="hide"><big>♡</big> 7k <big>🗨</big>6 </span><img src=${element}></div>`});

        }
    }) 
} 
let username=document.getElementsByClassName('username');
if(username!=null)
{Array.from(username,(element)=>{
    element.innerText=localStorage.getItem('name');
    post_tag_content.innerHTML=``;
    Array.from(['img/android_app.png','img/apple_app.png'
 ,'img/favicon.png','img/index.jpeg','img/iphone.jpg',
`${'\"img/Over 4M Pixel jpeg & png_Notebook_PC_1_Blank.jpg\"'}`,'img/socialm1.jpg',
'img/socialm3.jpg','img/socilam2.jpg'],(element)=>{
    post_tag_content.innerHTML+=`<div onmouseover=\"display(this) \" onmouseout=\"withdraw(this)\"><span class="hide"><big>♡</big> 7k <big>🗨</big>6 </span><img src=${element}></div>`});


})


}
function display(is){
    
    is.querySelector('img').classList.add('lowbright');
    is.querySelector('span').classList.remove('hide');
}
function withdraw(is){
   
    is.querySelector('img').classList.remove('lowbright');
    is.querySelector('span').classList.add('hide');
}