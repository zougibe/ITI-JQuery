$("button.tab").click(function () {
    var tabNumber = $(this).text().split(" ")[1];
    $(".content").html(`Content ${tabNumber}`);
});


$("button.tab").focus(function () {
    $(this).css("background-color", "rgb(199, 199, 199)");
  }).blur(function () {
    $(this).css("background-color", "");
  });
  