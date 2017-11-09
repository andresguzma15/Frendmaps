$(document).ready( 
    
    setTimeout(function(){
    
    $('.content-form').css("opacity", "1");
    }, 100)
)

//Email

$('#username').on('focus', function(){
    
    $('.lbl-username').css("margin-top", "-20px");
    $('.lbl-username').css("font-size", "14px");
})

$('#username').on('focusout', function(){
    
    if($('#username').val().length < 1){
        
        $('.lbl-username').css("margin-top", "10px");
        $('.lbl-username').css("font-size", "20px");
    }else{
        $('.lbl-username').css("margin-top", "-20px");
    $('.lbl-username').css("font-size", "14px");
    }
})

//Contraseña

$('#password').on('focus', function(){
    
    $('.lbl-password').css("margin-top", "20px");
    $('.lbl-password').css("font-size", "14px");
})

$('#password').on('focusout', function(){
    
    if($('#password').val().length < 1){
        
        $('.lbl-password').css("margin-top", "50px");
        $('.lbl-password').css("font-size", "20px");
    }else{
        $('.lbl-password').css("margin-top", "20px");
    $('.lbl-password').css("font-size", "14px");
    }
})




// sign up


//username

$('#username_sign').on('focus', function(){
    
    $('.lbl-username_sign').css("margin-top", "-20px");
    $('.lbl-username_sign').css("font-size", "14px");
})

$('#username_sign').on('focusout', function(){
    
    if($('#username_sign').val().length < 1){
        
        $('.lbl-username_sign').css("margin-top", "10px");
        $('.lbl-username_sign').css("font-size", "20px");
    }else{
        $('.lbl-username_sign').css("margin-top", "-20px");
    $('.lbl-username_sign').css("font-size", "14px");
    }
})

//password

$('#password_sign').on('focus', function(){
    
    $('.lbl-password_sign').css("margin-top", "20px");
    $('.lbl-password_sign').css("font-size", "14px");
})

$('#password_sign').on('focusout', function(){
    
    if($('#password_sign').val().length < 1){
        
        $('.lbl-password_sign').css("margin-top", "50px");
        $('.lbl-password_sign').css("font-size", "20px");
    }else{
        $('.lbl-password_sign').css("margin-top", "20px");
    $('.lbl-password_sign').css("font-size", "14px");
    }
})

//first_name

$('#firstname_sign').on('focus', function(){
    
    $('.lbl-firstname_sign').css("margin-top", "40px");
    $('.lbl-firstname_sign').css("font-size", "14px");
})

$('#firstname_sign').on('focusout', function(){
    
    if($('#firstname_sign').val().length < 1){
        
        $('.lbl-firstname_sign').css("margin-top", "70px");
        $('.lbl-firstname_sign').css("font-size", "20px");
    }else{
        $('.lbl-firstname_sign').css("margin-top", "40px");
    $('.lbl-firstname_sign').css("font-size", "14px");
    }
})

//last_name

$('#lastname_sign').on('focus', function(){
    
    $('.lbl-lastname_sign').css("margin-top", "60px");
    $('.lbl-lastname_sign').css("font-size", "14px");
})

$('#lastname_sign').on('focusout', function(){
    
    if($('#lastname_sign').val().length < 1){
        
        $('.lbl-lastname_sign').css("margin-top", "80px");
        $('.lbl-lastname_sign').css("font-size", "20px");
    }else{
        $('.lbl-lastname_sign').css("margin-top", "60px");
    $('.lbl-lastname_sign').css("font-size", "14px");
    }
})

