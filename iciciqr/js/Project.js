const readMoreBtn = document.querySelector('.btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e) => {
    text.classList.toggle('show-more');
    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText = 'Read Less';
        
    }
    else
    {
        readMoreBtn.innerText = 'Read More';
    }
})

// Our Partners
$(document).ready(function(){
  $('.multiple-logo').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows : true,
      dots : true,
      prevArrow: '.arrow_prev', 
      nextArrow: '.arrow_next', 

      responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]
    });
  
  })
  // function part of to.top button;
  const toTop=document.querySelector(".to-top");
  window.addEventListener("scroll",()=>{
    if(window.pageYOffset>200){
      toTop.classList.add("active");
    }else{
      toTop.classList.remove("active");
    }
  })
  // ------------------------------------------------
  // ----------------------------------------
  const li=document.querySelectorAll(".nav-item");
  const sec=document.querySelectorAll("section");

  function activeMenu(){
    let len=sec.length;
    while(--len && window.scrollY+97<sec[len].offsetTop){}
    li.forEach(ltx =>ltx.classList.remove("active"));
    li[len].classList.add("active");
  }
  activeMenu();
  window.addEventListener("scroll",activeMenu);