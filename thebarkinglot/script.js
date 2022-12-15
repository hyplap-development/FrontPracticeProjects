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

    // ------------togglebar icon------------//
//     document.getElementById("arrow").onclick=function(){
//       toggle1();
//     }
// function toggle1(){
      
//       if(document.getElementById("arrow").className=='fa fa-times'){
//               document.getElementById("arrow").className='fa-solid fa-bars';
//       }else{
//               document.getElementById("arrow").className='fa fa-times';
//       }
     
// }

$("[data-trigger]").on("click", function(){
  var trigger_id =  $(this).attr('data-trigger');
  $(trigger_id).toggleClass("show");
  $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e){
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}); 