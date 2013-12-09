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

    	if(number == "1")
    	{
    		$("#err").text("Thank you for entering the number 1");
    	
    	}

    	return false;
    	
	}

	$("#subButton").click(ValidateForm);
});