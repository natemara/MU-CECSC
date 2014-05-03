	$(document).ready(function() {
	
		var time = 0;
		var arrow = '';
		// $("#down").html(time);
	
			 
	 $(window).scroll(function() {
		 if ((Math.round((new Date()).getTime() / 1000)-1) > time)
		 {
			 if ($(this).scrollTop() < 230) {
				 textIn();
			 }
			 else{
				 textOut();
			 }
		 }
	 });
	 	 
	 function textIn() {
		  $(".frontPageTitle").fadeIn();
		  $(".frontPageTitle").fadeIn();
		  $("#down").fadeIn();
	 };
	 
	  function textOut() {
		  $(".frontPageTitle").fadeOut();
		  $(".frontPageTitle").fadeOut();
		  $("#down").fadeOut();
	 };

	 
	 	$("#down").click(function() {
	 		
	 		arrow = $(document).scrollTop();
	 		if(arrow > 100){
	 			time = Math.round((new Date()).getTime() / 1000);
		    	$("html, body").animate({ scrollTop:0 }, "slow");
		    	textIn();
	    }
	    else{
		   time = Math.round((new Date()).getTime() / 1000);
		 	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		 	textOut();
	    }

		 	return false;
	 	});
 	});
