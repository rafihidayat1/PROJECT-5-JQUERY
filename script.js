$(document).ready(function(){


    // $('p').click(function(){
    //     $(this).hide()
    // })

    $('.textClass').click(function(){
        $(this).hide()
    })

    $('#textId').click(function(){
        $(this).hide()
    })

    $('#show').click(function(){
        $('#textId').show()
    })

    $('#hide').click(function(){
        $('#textId').hide()
    })



    $('.doubleClick').dblclick(function(){
        $('.alert').hide()

    })

    $('.toggle').click(function(){
        $('.contentToggle').toggle()

        if($(this).text() == "Show "){
            $(this). text ("Hide")
        }else{
            $(this) .text("Show")
        }
    })


    $('#name').change(function(){
        if($(this).val() ==""){
            $('.alertName').show()
    }else{
            $('.alertName').hide()

    }
    })

    $('#email').blur(function(){
        $('.alertEmail').show()
    })

    $('#smaller').click(function(){
        $('.box').animate({
            width: "100px", 
            height: "100px",
            marginLeft: "500px"
        },500).css({
            backgroundColor: "#dedede"
        })
    })

    $('.action').click(function(){
        $(".box"). addClass("active")

    })

    $('.actionRemove').click(function(){
        $(".box"). removeClass("active")


    })
        

    //product Tab

    $('.product-item').hide()
    $('.product-item:first').show()

    $('.product-colors div a:not(:first)').addClass('inactive')

    $('.product-colors div a').on('click', function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inactive')){
          $('.product-colors div a') .addClass('inactive') 
          $(this).removeClass('inactive')      
        }

        $('.product-item').hide()
        $('#' + n + 'image' ).show()
    })

})
