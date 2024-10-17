$(document).ready(function(){

	$("#valForm").validate({
		rules:{
			uname:{
				required:true,
				minlength:5
				
			}
		}

	})

})