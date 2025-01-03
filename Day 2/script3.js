
const images = [
    "../../Client Side Tech/images/slide1.jpg",
    "../../Client Side Tech/images/slide2.jpg",
    "../../Client Side Tech/images/slide3.jpg",
    "../../Client Side Tech/images/slide4.jpg"
];

let currentIndex = 0;


$(".slider").click(function (e) {
    const src = $(this).attr("src");
    $("#mainP").attr("src", src); 
    $(".mainPic").show(); 
    currentIndex = images.indexOf(src);
});


$(".mainPic").click(function (e) {
    if (e.target === this) {
        $(".mainPic").hide(); 
    }
});


$(".last").click(function () {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    $("#mainP").attr("src", images[currentIndex]);
});


$(".next").click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    $("#mainP").attr("src", images[currentIndex]);
});

