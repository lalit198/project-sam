$(document).ready(function () {
    $('.desk_show_eye1').click(function(){
   
    if($(this).hasClass('fa-eye-slash')){
       
      $(this).removeClass('fa-eye-slash');
      
      $(this).addClass('fa-eye');
      
      $('.desk_pass1').attr('type','text');
        
    }else{
     
      $(this).removeClass('fa-eye');
      
      $(this).addClass('fa-eye-slash');  
      
      $('.desk_pass1').attr('type','password');
    }
});
});

$(document).ready(function () {
    $('.desk_show_eye2').click(function(){
   
    if($(this).hasClass('fa-eye-slash')){
       
      $(this).removeClass('fa-eye-slash');
      
      $(this).addClass('fa-eye');
      
      $('.desk_pass2').attr('type','text');
        
    }else{
     
      $(this).removeClass('fa-eye');
      
      $(this).addClass('fa-eye-slash');  
      
      $('.desk_pass2').attr('type','password');
    }
});
});