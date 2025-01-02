
$(document).ready(function () {
    $("container,.details, .product1, .product2, .product3").hide();
    $(".container").animate({
        height: '100vh'}, 1000, function () {
            $(".container").animate({
                width: '1000vh'}, 1000, function () {
                    $(".details").fadeIn(1000, function () {
                        $(".product1").fadeIn(1000, function () {
                            $(".product2").fadeIn(1000, function () {
                                $(".product3").fadeIn(1000);
                            });
                        });
                    });
                })
        })
})

