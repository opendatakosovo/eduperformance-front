$(document).ready(function(){
        $(".ask-input").focus(function(){
        	var editid=$(this).attr('id');
        	var formclass="ask-input-focus-"+editid;
         $(this).css('cssText', "border-color:#0067f4 !important;");
         $("."+formclass).css('cssText',"color: #0067f4 !important;");
     });
        $(".ask-input").focusout(function(){
        	var editid=$(this).attr('id');
        	var formclass="ask-input-focus-"+editid;
         $(this).css('cssText', "border-color:#a4a4a4 !important;");
         $("."+formclass).css('cssText',"color: black;");
     });
});