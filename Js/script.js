        // Initialize Swiper
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            autoplay: {
              delay:5000,
              disableOnInteraction: false
            },
             navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            },
          });


//about dropdown
const icone1 = document.getElementById('close1');
const icone2 = document.getElementById('close2');
const icone3 = document.getElementById('close3');
const content1 = document.querySelector('#text1');
const content2 = document.querySelector('#text2');
const content3 = document.querySelector('#text3');

// functions
  icone1.addEventListener('click', function(){
    content1.classList.toggle("active2");
    content2.classList.remove("active2");
    content3.classList.remove("active2");
  });
  icone2.addEventListener('click', function(){
    content1.classList.remove("active2");
    content2.classList.toggle("active2");
    content3.classList.remove("active2");
  });
  icone3.addEventListener('click', function(){
    content1.classList.remove("active2");
    content2.classList.remove("active2");
    content3.classList.toggle("active2");
  });
