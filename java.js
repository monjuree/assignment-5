// JavaScript Document
	
	

	
$(document).ready(function(){
	
	$("form").submit(addCity);
	   function addCity(event) {
	   event.preventDefault();
			
		var city = $("#city-type").val(); //pass user inputed

			   			
			switch (city)
			{
				case ("nyc") : 		   
				case ("NYC") :	
				case ("new your"):	
					$('body').removeClass('starter-image').addClass('nyc');
				break;
					
				case ("sf"):
				case ("SF"):
				case ("san francisco"):
					  $('body').removeClass('starter-image').addClass('sf');
				break;
					
				case ("la"):
				case ("LA"):	
				case ("LAX"):
				case ("los angeles"):
					  $('body').removeClass('starter-image').addClass('la');
				break;	
					
				case ("atx"):
				case ("ATX"):	
				case ("austin"):
				case ("Austin"):
					  $('body').removeClass('starter-image').addClass('austin');
				break;
					
				case ("syd"):
				case ("SYD"):	
				case ("Sydney"):
				case ("sydney"):
					  $('body').removeClass('starter-image').addClass('sydney');
				break;	
					
				default:
					console.log("no image found");
					break;
					
			   }
		   
		}//end of addcity function
	
});//end of document.ready function
      







