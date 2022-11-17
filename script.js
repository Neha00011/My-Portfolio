  $(window).scroll(function(){
    if(this.scrollY > 20){
        $(".navbar").addClass("sticky");
    }else{
        $(".navbar").removeClass("sticky");
    }
    if(this.scroll > 500){
      $(".scroll-up-btn").addClass("show");
    }else{
      $(".scroll-up-btn").removeClass("show");
    }
   });

   $('scroll-up-btn').click(function(){
       $('html').animate({scrollTop: 0});
   });

   //typing animation script 
  var typed = new Typed(".typing",{
      strings: ["Frontend developer","Competitive programmer","Content Writer"],
      typespeed:10,
      backspeed:10,
      loop:true
   });




   //toggle menu/navbar script
   $(".menu-btn").click(function(){
     $(".navbar .menu").toggleClass("active");
     $(".menu-btn i").toggleClass("active");
   });
