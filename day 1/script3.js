$("img").click(function (e) {
    var src = $(e.target).attr("src");
    console.log(src);
    $(".mainContent > img").attr("src", src);
});