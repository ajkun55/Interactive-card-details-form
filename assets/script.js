/*
$(document).ready(function(){
    $("button").click(function(){
        if(!$('#first-name').value){
            $('#first-name-err').css('display','block');
            $('#first-name').css('border','1.5px solid var(--clr-Red)');
        }
        if(!$('#last-name').value){
            $('#last-name-err').css('display','block');
            $('#last-name').css('border','1.5px solid var(--clr-Red)');
        }
        if(!$('#email').value){
            $('#email-err').css('display','block');
            $('#email').css('border','1.5px solid var(--clr-Red)');console.log('good');
            $('#email').attr('value','email#example.com');
        }if($('#email').value){console.log('good')}
        if(!$('#message').value){
            $('#message').next().css('display','block');
            $('#message').css('border','1.5px solid var(--clr-Red)');
        }
        if($('input[type="radio"]:checked').length === 0){
            $('#radioerr').css('display','block');
        }
        if($('input[type="checkbox"]:checked').length === 0){
            $('#checkerr').css('display','block');
        }

        $("#check").click(function(){
            $(this).toggleClass('checked')
        });
  });

  $('input[type=radio]').click(function(){
    $(this).parent(".box").toggleClass('radiochecked');});
    
  
  });*/

  $("button").click(function(event) {
    let errors = 0;
    $("form :input").map(function(){console.log($(this).val());
         if( !$(this).val()) {
              $(this).addClass('warning');
              $(this).next('.errmsg').show();
              errors++;
        } else if ($(this).val()) {
              $(this).addClass('success');
              $(this).next('.errmsg').hide();
        }   
        if($('input[type="radio"]:checked').length === 0){
            $('#radioerr').css('display','block');
        }else{
            $('#radioerr').css('display','none');
        }
        if($('input[type="checkbox"]:checked').length === 0){
            $('#checkerr').css('display','block');
        }else{
            $('#checkerr').css('display','none');
        }
    });
    
    if(errors <= 1){
        $('.success-msg').css('visibility','visible');
        $('.errmsg').css('display','none');
    }else{
        $('.success-msg').css('visibility','hidden');
    }
    event.preventDefault();

});

function showSuccess() {
    $('.success-msg').css('visibility','visible');
  }

  const radios = document.querySelectorAll('input[type="radio"]');
     radios.forEach(radio => {
         radio.onclick = () => {
            radios.forEach(radio => {
            radio.parentElement.style.backgroundColor = radio.checked ? 'var(--clr-Light-Green)' : 'var(--clr-White)';
        });
     }
  });