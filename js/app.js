
//toggle menu
$(document).ready(function($) {
       
    $('.toggle-nav').click(function(e) {
    $('.toggle-nav').toggleClass('active');
    $('.menu ul').toggleClass('active');
  
    e.preventDefault();
    });
    
    $('.portfolio li').click(function() {
    var category = $(this).attr('class');

    if (category==="h"){
    	$('.angular, .jquery, .ruby').hide();
    	$('.html').show(1000);		
    }
    else if(category==="j"){
    	$('.angular, .ruby, .html').hide();
    	$('.jquery').show(1000);
    }
    else if(category==="a"){
    	$('.jquery, .ruby, .html').hide();
    	$('.angular').show(1000);
    }
    else if(category==="r"){
    	$('.jquery, .angular, .html').hide();
    	$('.ruby').show(1000);
    }
    else if(category==="all"){
    	$('.all').show(1000);
    }
    
  });

    
    // $('form').submit(function() {
    //     var email = $('#email').val();
    // 	var subject = $('#subject').val();
    // 	var message = $('#message').val();
        
    //     if(email === "") {
    //     	$('.email-error').text("Please enter an email address");
    //     }
    	
    //     if(subject === "") {
    //     	$('.subject-error').text("Please enter a subject");
    //     }
    
    //     if(message === "") {
    //     	$('.message-error').text("Please enter a message");
    //     }
    	
    //     return false;
    // });

  
});
