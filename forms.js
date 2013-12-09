$(document).ready(function()
{
	

	function ValidateForm()
	{
		var number=$("#number").val();
    	
    	if(number == null || number == "" || number !== (/^[0-9]+$/))
   		 	{
        		
        		$("#err").text("This should not be blank and should only contain number");
   			
        	} 
		
	    if(number == "0")
    		{
    			
    			$("#err").text("Nothing to do, you entered a zero.");
    
   		 	}
 
 		else if(number == "1")
    		{
    			
    			$("#err").text("Thank you for entering the number 1");
    	
    		}

    	 else //if(number > "1")
    		{
    			b=" ";
    			for (var i = number; i >= 0; i--) 
    			{
						    		
    				console.log(i);
    				b=b + "-- Countdown" + " " + i +"<br>";
    			}
    			
    			$("#err").html(b);
    			
    		}
	}

	$("#subButton").click(ValidateForm);
});