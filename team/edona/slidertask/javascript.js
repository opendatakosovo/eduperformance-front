$(document).ready(function () {
    $("#volume").slider({
        min: 0,
        max: 100,
        value: 0,
        range: "min",
        slide: function (event, ui) {
            changeSlider(ui.value);
        }
    });
    var myMedia = document.createElement('audio');
    $('#slider-voting').append(myMedia);
    myMedia.id = "myMedia";

    // playAudio('http://a.tumblr.com/tumblr_l14pkbmbuq1qavyj3o1.mp3', 0);
    //
    // function playAudio(fileName, myVolume) {
    //     myMedia.src = fileName;
    //     myMedia.setAttribute('loop', 'loop');
    //     setVolume(myVolume);
    //     myMedia.play();
    // }

    function setVolume(myVolume) {
        var myMedia = document.getElementById('myMedia');
        myMedia.volume = myVolume;
    }

    function changeSlider(myVolume) {
        let volumeThreshold = [15, 30, 45, 60, 70, 80]
        let volumeClasses = ["v0", "v1", "v2", "v3", "v4", "v5"]
        let classIndex = volumeThreshold.findIndex((threshold) => {
            return myVolume < threshold
        });
        changeClassTo(volumeClasses[classIndex]);
        setVolume(myVolume / 100);
    }

    function changeClassTo(className) {
        $('#volume').removeClass();
        $('#volume').addClass(className);
    }
});


