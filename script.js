function showName(){
    const name = $('#name-input').val();
    $('#name-output').text(name);
}

function showNumber(){
    document.getElementById('number-input').addEventListener('input', function (e) {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
      });
    const number = $('#number-input').val();
    $('.number-output').text(number);
}

function showMonth(){
    const month = $('#month-input').val();
    $('#month-output').text(month+'/');
}

function showYear(){
    const year = $('#year-input').val();
    $('#year-output').text(year);
}

function showCVC(){
    const cvc = $('#cvc-input').val();
    $('#cvc-output').text(cvc);
}


$("#submit").click(function(event) {
    let errors = 0;
    $("form :input").map(function(){
         if( !$(this).val()) {
              $(this).addClass('warning');
              $(this).next('.errmsg').show().text("Can't be blank");
              errors++;
        } else if ($(this).val()) {
              $(this).addClass('valid');
              $(this).next('.errmsg').hide();
        }   
    });

    const name = $('#name-input').val();
    const number = $('#number-input').val().replace(/\s/g, '');
    const month = $('#month-input').val();
    const year = $('#year-input').val();
    const cvc = $('#cvc-input').val();

    const regex =/\d{16}/;    
    if(!(regex.test(number)) && number.length!==0 ){
        $('#number-input').addClass('warning').next('.errmsg').show().text('Wrong format, numbers only'); errors++;
    }

    const regexcvc =/\d{3}/;    
    if(!(regexcvc.test(cvc)) && cvc.length!==0){
        $('#cvc-input').addClass('warning').next('.errmsg').show().text('Wrong cvc format'); errors++;
    }

    const regexmonth = /\d{2}/;
    if( (month < 1 || month > 12 || !regexmonth.test(month)) && month.length!==0){
        $('#month-input').addClass('warning').next('.errmsg').show().text('Wrong month format'); errors++;
    }
    const regexyear = /\d{4}/;
    if( (year < 2024 || !regexyear.test(year)) && year.length!==0){
        $('#year-input').addClass('warning').next('.errmsg').show().text('Wrong year format'); errors++;
    }

console.log(errors)
    
    if(errors <= 1){
        $('form').hide();
        $('.sub-container').show();
    }
    event.preventDefault();

});

$("#continue").click(function(event) {
    $('.sub-container').hide();
    $('form').show();
});