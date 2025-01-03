var about = $("#about").offset().top;
$(window).on("scroll", function() {
    if ($(window).scrollTop() > about - 100) {
        $("nav").css({ backgroundColor: "white" });
        $(".icon span").css({ color: "black" }); 
        $("header nav ul li a").css({ color: "black" }); 
        $(".toTop").css({ opacity: 1 });

    } else {
        $("nav").css({ backgroundColor: "black" });
        $(".icon span").css({ color: "#white" }); 
        $("header nav ul li a").css({ color: "white" }); 
        $(".toTop").css({ opacity: 0});

    }
});

$(".toTop").on("click", function() {
    $("html,body").animate({ scrollTop: 0 }, 1000);
})