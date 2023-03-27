$(function () {
    let questions11 = $(".questions11");
    let questions21 = $(".questions21");
    let questions12 = $(".questions12");
    let questions22 = $(".questions22");
    let questions13 = $(".questions13");
    let questions23 = $(".questions23");
    let questions14 = $(".questions14");
    let questions24 = $(".questions24");

    questions11.click(function(){
        questions11.toggleClass("active");
        questions21.toggleClass("active");
    })
    questions12.click(function(){
        questions12.toggleClass("active");
        questions22.toggleClass("active");
    })
    questions13.click(function(){
        questions13.toggleClass("active");
        questions23.toggleClass("active");
    })
    questions14.click(function(){
        questions14.toggleClass("active");
        questions24.toggleClass("active");
    })

    let boorger_icon = $(".header__boorger-icon");
    let burger__menu =  $(".burger__menu");
    boorger_icon.click(function(){
        burger__menu.toggleClass("active");
    })
})