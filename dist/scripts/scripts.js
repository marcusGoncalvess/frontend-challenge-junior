let email=document.querySelector(".email"),text=document.querySelector(".email-text"),facebook=document.querySelector(".fb"),textFb=document.querySelector(".fb p"),iconeFb=document.querySelector(".fb img"),instagram=document.querySelector(".insta"),textInsta=document.querySelector(".insta p"),iconeInsta=document.querySelector(".insta img");email.addEventListener("keyup",()=>{text.innerHTML=""}),facebook.addEventListener("mouseover",()=>{iconeFb.src="../src/assets/facebook-hover.svg",iconeFb.style.width="22px",textFb.style.fontSize="20px"}),facebook.addEventListener("mouseout",()=>{iconeFb.src="../src/assets/facebook.svg",iconeFb.style.width="18px",textFb.style.fontSize="16px"}),instagram.addEventListener("mouseover",()=>{iconeInsta.src="../src/assets/instagram-hover.svg",iconeInsta.style.width="22px",textInsta.style.fontSize="20px"}),instagram.addEventListener("mouseout",()=>{iconeInsta.src="../src/assets/instagram.svg",iconeInsta.style.width="18px",textInsta.style.fontSize="16px"});var mySwiper=new Swiper(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});