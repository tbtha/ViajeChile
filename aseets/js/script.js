$(document).ready(function(){
    console.log("ready!");
    //integrar color al navbar en movimiento  
    $(window).scroll(function () {
        if ($("#navbar").offset().top > 56) {
            $("#navbar").addClass("navbar-color");
        } else {
            $("#navbar").removeClass("navbar-color");
        }
    });

    $(".img").click(function(){
        $(".card-text").toggle();

});

});
