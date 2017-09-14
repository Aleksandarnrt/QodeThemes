$(function(){
    mobileNav();
})

function mobileNav(){
     
    $('.mobile-nav-toggle').on('click',function(){
        
        var status= $(this).hasClass('is-open');
        if(status)
            $('.mobile-nav-toggle, .mobile-nav, .logo').removeClass('is-open');
        else
            $('.mobile-nav-toggle, .mobile-nav, .logo').addClass('is-open');
        
    });
    
}

$(window).ready(function(){
    
    setTimeout(function(){
              $('.logo, .navigations').addClass('is-showing'); 
          },150);
    
});