$(document).ready(function() {
    	$('#valForm').on('submit', function() {
        	event.preventDefault(); 
        	let uname = $("#uname").val();
        	let email = $("#email").val();
        	let pass1 = $("#pass1").val();
        	let pass2 = $("#pass2").val();
        	let mob_num = $("#mob_num").val();
        	let dob = $("#dob").val();
        	console.log(uname)
        	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        	var phoneno = /^\d{10}$/;
        	var name_pattern = /[^\w\s-]/;

        
  	      	if (uname === "") {
        	    $("#uname_error").text("Enter the user name");
        	} else if (name_pattern.test(uname)) {
        	    $("#uname_error").text("User name shouldn't contain special characters");
        	} else {
        	    $("#uname_error").text("");
        	}
		
    		if (email === "") {
	            $("#email_error").text("Enter the email");
	        } else if (!emailRegex.test(email)) {
	            $("#email_error").text("Not a valid email");
	        } else {
	            $("#email_error").text("");
	        }

      
	        var psw_lower = /[a-z]/;
	        var psw_upper = /[A-Z]/;
	        var psw_digit = /[0-9]/;
	        var psw_special = /[^a-zA-Z0-9]/;
	
	        if (pass1.length === 0) {
        	    $("#pass1_error").text("Enter the password");
        	} else if (/\s/.test(pass1)) {
        	    $("#pass1_error").text("Should not contain whitespace");
        	} else if (!psw_lower.test(pass1)) {
        	    $("#pass1_error").text("Must contain at least one lowercase letter");
        	} else if (!psw_upper.test(pass1)) {
        	    $("#pass1_error").text("Must contain at least one uppercase letter");
        	} else if (!psw_digit.test(pass1)) {
        	    $("#pass1_error").text("Must contain at least one digit");
        	} else if (!psw_special.test(pass1)) {
        	    $("#pass1_error").text("Must contain at least one special character");
        	} else if (pass1.length < 8) {
        	    $("#pass1_error").text("Password must contain at least 8 characters");
        	} else {
        	    $("#pass1_error").text("");
        	}

       
	        if (pass1 !== pass2) {
	            $("#pass2_error").text("Password mismatch");
	        } else {
	            $("#pass2_error").text("");
       	 	}

       
   	     	if (mob_num === "") {
   	     	    $("#mob_num_error").text("Enter the mobile number");
   	    	} else if (!phoneno.test(mob_num)) {
   	      	   $("#mob_num_error").text("Invalid. Must contain 10 digits");
   	     	} else {
   	     	    $("#mob_num_error").text("");
   	     	}

       
	        if ($("#m").is(":checked") || $("#f").is(":checked")) {
	            $("#gen_error").text("");
	        } else {
	            $("#gen_error").text("Select your gender");
	        }

   
	        if ($("#fb").is(":checked") || $("#ct").is(":checked")) {
	            $("#sports_error").text("");
	        } else {
	            $("#sports_error").text("Select your favourite sports");
	        }

       
       	 	if (dob === "") {
       	 	    $("#dob_error").text("Select your date of birth");
       	 	} else {
       	 	    $("#dob_error").text("");
        	}
	       
    	})
})

function myFunction(event) {
    var key = event.charCode;
    if (key < 48 || key > 57) {
        event.preventDefault();
    }
}
