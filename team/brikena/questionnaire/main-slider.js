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
  var rangeid=$(this).attr('id');
    var val = ($('#'+rangeid).val() - $('#'+rangeid).attr('min')) / ($('#'+rangeid).attr('max') - $('#'+rangeid).attr('min'));
   
     $('#'+rangeid).css({'background-image':
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
  var minusid=$(this).attr('id');
  var rangeid2="myRange"+minusid;
    var slidervalue = document.getElementById(rangeid2).value;
    var value = parseInt(slidervalue);
    if(value!=1)
    {
      
     $("#"+rangeid2).val(value-1);
      sliderchange(rangeid2); 
     
       
    }
    
  });
$(".plus").click(function(){
  var plusid=$(this).attr('id');
  var rangeid3="myRange"+plusid;
    var slidervalue = document.getElementById(rangeid3).value;
    var value = parseInt(slidervalue);
    if(value!=5)
    {
      
     $("#"+rangeid3).val(value+1);
     sliderchange(rangeid3);

   }
 });

//custom css for firefox browser(slider) 
 if(navigator.userAgent.indexOf("Firefox") != -1 ){
          $('.chrome-custom').css('cssText','margin-top:2px!important'); 
      
        }


 $('input[type=range]').change(function(){
      var rangechange=$(this).attr('id');
      
       sliderchange(rangechange);
        });

$("#reset").click(function(){
if (ischromebrowser==1) {
     $('input[type=range]').css({'background-image':
                  ' -webkit-gradient(linear, 0% 0%, 100% 0%, to(#d3d3d3), to(#d3d3d3)) ',
                  'border-radius':'5px'}
                  );


  }
    });
  });



  function sliderchange(rangeid) {
  var a = document.getElementById(rangeid).value;
  var variable = parseInt(a);
  
 
  if(variable==1)
  {
      $("#"+rangeid).removeClass();   
      if (ischromebrowser==1) {
        changecolor(rangeid)
      } 
  } 
  else if(variable==2)
  {
      $("#"+rangeid).removeClass().addClass('emoji2');  
      if (ischromebrowser==1) {
       changecolor(rangeid);
      } 
  }
  else if(variable==3)
  {
      $("#"+rangeid).removeClass().addClass('emoji3');
      if (ischromebrowser==1) {
       changecolor(rangeid);
      } 
  }
   else if(variable==4)
  {
      $("#"+rangeid).removeClass().addClass('emoji4');
      if (ischromebrowser==1) {
       changecolor(rangeid);
      } 
  }
   else if(variable==5)
    {
    $("#"+rangeid).removeClass().addClass('emoji5');
    if (ischromebrowser==1) {
      changecolor(rangeid);
    } 
  }
  
}
function changecolor(rangeid)
{
  var val = ($("#"+rangeid).val() - $("#"+rangeid).attr('min')) / ($("#"+rangeid).attr('max') - $("#"+rangeid).attr('min'));
    $("#"+rangeid).append('<style>#'+rangeid+'::-webkit-slider-runnable-track{background:transparent !important;border:0px !important;}</style>');
     $("#"+rangeid).css({'background-image':
                '-webkit-gradient(linear, left top, right top, '
                + 'color-stop(' + val + ', #0067f4), '
                + 'color-stop(' + val + ', #C5C5C5)'
                + ')','border-radius':'5px'}
                );
}

