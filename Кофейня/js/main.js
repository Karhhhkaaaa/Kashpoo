let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

// отзывы

let swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
    },
});

// каталог

let list = document.querySelectorAll(".ul-katalog li");
let box = document.querySelectorAll(".box");

list.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list.forEach((el1)=>{
            el1.style.color = "#000";
            el1.style.borderBottom = "none";
        })
        e.target.style.borderBottom = "1px solid #E4B95B"
        e.target.style.color = "#E4B95B";
        box.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";

        })
    })
})

// popup

let popup = document.getElementById("popup")
// let popup = document.querySelector(".book")

function openPopup(){
    popup.classList.add("open-popup")
}
function closePopup(){
    popup.classList.remove("open-popup")
}

// document.addEventListener("DOMContentLoaded", function(){
//     var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
//     console.log(scrollbar);
//     document.querySelector('[href="#popup"]').addEventListener('click',function(){
//       document.body.style.overflow = 'hidden';
//       document.querySelector('#popup').style.marginLeft = scrollbar;
//     });
//     document.querySelector('[href="#close"]').addEventListener('click',function(){
//       document.body.style.overflow = 'visible';
//       document.querySelector('#popup').style.marginLeft = '0px';
//     });
//   });