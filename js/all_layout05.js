$(function () {

    //////////////////////////////
    ///$('선택').on('이벤트',할일)
    //일 =>function 일 (){}

    //$(this), 나
    //$(this).index() 번호

    function tabMenu() {
        var idx = $(this).index(); //0.1.2.3
        //    console.log(idx)
        $('.tabLink li').removeClass('active');
        $(this).addClass('active');
        $('.tabContent>div').removeClass('active');
        $('.tabContent>div').eq(idx).addClass('active');
        // $('.tabContent>div').eq(idx).addClass('active').siblings().removeClass('active');
    }


    $('.tabLink li').on('click', tabMenu);

    $('.xi-close').on('click', function () {
        $('.headerWrap').slideToggle();
    })


    // $('.bgFixed').on('mouseenter', function () {
    //     $('.footerWrap').slideToggle();
    // })

    // $('.bgFixed').on('mousesleave', function () {
    //     $('.footerWrap').slideToggle();
    // })

    $('.bgFixed').hover(function () {
        $('.footerWrap').hide();
    }, function () {
        $('.footerWrap').show();
    })

    //////////////////////////////
})