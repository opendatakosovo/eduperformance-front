$(document).ready(function () {
    /* $(".shade").mouseover(function () {
         $(this).addClass("boxShadow ");
         $(this).addClass("hovered");
         $(this).find(".imgSch2").addClass("hovered");
         $(this).find(".color").addClass("customFontCards2");
     });
     $(".shade").mouseout(function () {
         $(this).removeClass("boxShadow ");
         $(this).removeClass("hovered");
         $(this).find(".imgSch2").removeClass("hovered");
         $(this).find(".color").removeClass("customFontCards2");
     })*/
    $(".ask-input").focus(function () {
        var editid = $(this).attr('id');
        var formclass = "ask-input-focus-" + editid;
        $(this).css('cssText', "border-color:#0067f4 !important;");
        $("." + formclass).css('cssText', "color: #0067f4 !important;");
    });
    $(".ask-input").focusout(function () {
        var editid = $(this).attr('id');
        var formclass = "ask-input-focus-" + editid;
        $(this).css('cssText', "border-color:#a4a4a4 !important;");
        $("." + formclass).css('cssText', "color: black;");
    });

});