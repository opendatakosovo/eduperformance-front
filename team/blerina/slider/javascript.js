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

    function setVolume(myVolume) {
        var myMedia = document.getElementById('myMedia');
        myMedia.volume = myVolume;
    }

    function changeSlider(myVolume) {
        let volumeThreshold = [20, 40, 60, 80, 100]
        let volumeClasses = ["v0", "v3", "v4", "v5", "v6"   ]
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


