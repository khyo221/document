$(function(){

    //////////////////////////////
    ///$('선택').on('이벤트',할일)
    //일 =>function 일 (){}

    //$(this), 나
    //$(this).index() 번호


// function 팝업창끄기() {
//     console.log(
//         $(this),
//         $(this).index(),
//         $(this).parent(),
//         $(this).next(),
//         $(this).prev(),
//         $(this).children(),
//         "아하"
//     )
// }


function 팝업창끄기() {
    console.log(
        $(this).parent().hide()
        //console.log($(this).parent().index())
    )}
$('.popUp button').on('click', 팝업창끄기);
    //////////////////////////////
});