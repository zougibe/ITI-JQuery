// scrollTop(); to know how many pixels the user has scrolled down

// $("about").offset().top; to know how far the element is from the top of the page    fixed element 

// $(window).scrollTop() > $("about").offset().top;

// $(span).show(1000); to show the element in 1 second

// $(span).hide(1000); to hide the element in 1 second

// $(span).toggle(1000); to show and hide the element in 1 second

// $(window).scrollTop(0) = 0; to scroll to the top of the page

// $("html").animate({scrollTop: 0}, 1000); to scroll to the top of the page in 1 second

$.get("https://jsonplaceholder.typicode.com/users", function(data) {
    data.forEach(function(user, i) {
        console.log(i + 1, user.name, user.id);

        var btn = document.createElement("button");
        $(btn).text(user.name);
        $(btn).appendTo($(".users"));
        $(btn).addClass("btn");
        $(btn).attr("id", user.id);
        console.log(btn);
    });

    $(".btn").click(function() {
        var id = $(this).attr("id");
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, function(posts) {
            $(".posts").empty(); 

            posts.forEach(function(post) {
                var title = $("<h2>").text(post.title);
                var body = $("<p>").text(post.body);
                $(title).appendTo($(".posts"));
                $(body).appendTo($(".posts"));
            });
        });
    });
});



