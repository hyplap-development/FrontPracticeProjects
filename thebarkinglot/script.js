// Dog Home Animation

// var bgPattern = document.getElementById("ourlot")
// window.addEventListener("scroll", function(){
//   bgPattern.style.backgroundPosition =+this.window.pageYOffset+"px";
// })

// Dog image Slider
$(document).ready(function(){  
    $('.dog-images').slick({  
        infinite: true,  
        slidesToShow: 5,  
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,  
        arrows : true,  
        dots : false,  
        prevArrow: '.arrow_prev',   
        nextArrow: '.arrow_next',   
    
        responsive: [  
            {  
              breakpoint: 1000,  
              settings: {  
                slidesToShow:2, 
                slidesToScroll: 1,  
              }  
            },  
            {  
              breakpoint: 600,  
              settings: {  
                slidesToShow: 1,  
                slidesToScroll: 1  
              }  
            }  
        ]  
      });  
      
    })