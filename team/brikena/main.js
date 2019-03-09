$(document).ready(function() {
		 $(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		   });
		 
		 $('.collapse').on('shown.bs.collapse', function() {
		   $('.container-home').hide();
    	   });

		 $('.collapse').on('hidden.bs.collapse', function() {
		   $('.container-home').show();
		   });
		 
		 $('.collapse').on('shown.bs.collapse', function() {
		   $('.container-profile').hide();
    	   });

		 $('.collapse').on('hidden.bs.collapse', function() {
		   $('.container-profile').show();
		   });
});