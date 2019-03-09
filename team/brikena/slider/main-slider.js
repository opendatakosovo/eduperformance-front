      var ischromebrowser=0;
  $(document).ready(function(){

  //check if is chrome browser 
   var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

if (isIOSChrome) {
   // is Google Chrome on IOS
   

} 
//if is chrome browser use css to fill with blue track-range depends on value selected
else if(
   isChromium !== null &&
   typeof isChromium !== "undefined" &&
   vendorName === "Google Inc." &&
   isOpera === false &&
   isIEedge === false
) {

 $('input[type="range"]').change(function () {
    var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
   
     $(this).css({'background-image':
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #0067f4), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')','border-radius':'5px'}
                );
});
ischromebrowser=1;

$('.chrome-custom').css('cssText','margin-top:-6px!important');

} 



 $(".minus").click(function(){
    var slidervalue = document.getElementById("myRange").value;
    var value = parseInt(slidervalue);
    if(value!=1)
    {
      
     $("input[type=range]").val(value-1);
      sliderchange(); 
     
       
    }
    
  });
$(".plus").click(function(){
    var slidervalue = document.getElementById("myRange").value;
    var value = parseInt(slidervalue);
    if(value!=5)
    {
      
     $("input[type=range]").val(value+1);
     sliderchange();

   }
 });

//custom css for firefox browser(slider) 
 if(navigator.userAgent.indexOf("Firefox") != -1 ){
          $('.chrome-custom').css('cssText','margin-top:2px!important'); 
      
        }
  });

  function sliderchange() {
  var a = document.getElementById("myRange").value;
  var variable = parseInt(a);
  
 
  if(variable==1)
  {
  $("#myRange").removeClass();   
  if (ischromebrowser==1) {
    var val = ($('input[type=range]').val() - $('input[type=range]').attr('min')) / ($('input[type=range]').attr('max') - $('input[type=range]').attr('min'));
    $('input[type=range]').append('<style>input[type=range]::-webkit-slider-runnable-track{background:transparent;border:0px;}</style>');
     $('input[type=range]').css({'background-image':
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #0067f4), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')','border-radius':'5px'}
                );
  } 
  } 
  else if(variable==2)
  {
  $("#myRange").removeClass().addClass('emoji2');  
  if (ischromebrowser==1) {
    var val = ($('input[type=range]').val() - $('input[type=range]').attr('min')) / ($('input[type=range]').attr('max') - $('input[type=range]').attr('min'));
    $('input[type=range]').append('<style>input[type=range]::-webkit-slider-runnable-track{background:transparent;}</style>');
     $('input[type=range]').css({'background-image':
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #0067f4), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')','border-radius':'5px'}
                );
  } 
  }
  else if(variable==3)
  {
  $("#myRange").removeClass().addClass('emoji3');
  if (ischromebrowser==1) {
    var val = ($('input[type=range]').val() - $('input[type=range]').attr('min')) / ($('input[type=range]').attr('max') - $('input[type=range]').attr('min'));
    $('input[type=range]').append('<style>input[type=range]::-webkit-slider-runnable-track{background:transparent;}</style>');
     $('input[type=range]').css({'background-image':
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #0067f4), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')','border-radius':'5px'}
                );
  } 
  }
   else if(variable==4)
  {
  $("#myRange").removeClass().addClass('emoji4');
  if (ischromebrowser==1) {
    var val = ($('input[type=range]').val() - $('input[type=range]').attr('min')) / ($('input[type=range]').attr('max') - $('input[type=range]').attr('min'));
    $('input[type=range]').append('<style>input[type=range]::-webkit-slider-runnable-track{background:transparent;}</style>');
     $('input[type=range]').css({'background-image':
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #0067f4), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')','border-radius':'5px'}
                );
  } 
  }
   else if(variable==5)
  {
  $("#myRange").removeClass().addClass('emoji5');
  if (ischromebrowser==1) {
    var val = ($('input[type=range]').val() - $('input[type=range]').attr('min')) / ($('input[type=range]').attr('max') - $('input[type=range]').attr('min'));
    $('input[type=range]').append('<style>input[type=range]::-webkit-slider-runnable-track{background:transparent;}</style>');
     $('input[type=range]').css({'background-image':
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #0067f4), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')','border-radius':'5px'}
                );
  } 
  }
  
}