
    const audio = $("audio")[0];
    const playBtn = $(".Play");
    const stopBtn = $(".Stop");
    const volumeSlider = $(".volume");
    const muteBtn = $("#mute-unmute");
    const seekSlider = $(".Seek");
    let currentSong = "";

    $(".play-song").on("click", function () {
        const songSrc = $(this).parent().data("src");
        if (currentSong !== songSrc) {
            audio.src = songSrc;
            currentSong = songSrc;
        }
        audio.play();
        playBtn.html('<i class="fa-solid fa-pause"></i>');
    });

    playBtn.on("click", function () {
        if (audio.paused || audio.ended) {
            audio.play();
            playBtn.html('<i class="fa-solid fa-pause"></i>');
        } else {
            audio.pause();
            playBtn.html('<i class="fa-solid fa-play"></i>');
        }
    });


    stopBtn.on("click", function () {
        audio.pause();
        audio.onload()
        playBtn.html('<i class="fa-solid fa-play"></i>');
    });

    volumeSlider.on("input", function () {
        audio.volume = $(this).val();
    });


    muteBtn.on("click", function () {
        audio.muted = !audio.muted;
        $(this).html(
            audio.muted ? '<i class="fa-solid fa-volume-xmark"></i>': '<i class="fa-solid fa-volume-high"></i>'
        );
    });


    seekSlider.on("input", function () {
        const seekTo = ($(this).val() / 100) * audio.duration;
        audio.currentTime = seekTo;
        
    });


    audio.addEventListener("timeupdate", function () {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            seekSlider.val(progress);
        }
    });

    audio.addEventListener("ended", function () {
        seekSlider.val(0);
        playBtn.html('<i class="fa-solid fa-play"></i>');
    });

