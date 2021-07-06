$(document).ready(function() {
	$("#submit").click(function(e) {
		var name_ = document.getElementById("name").value;
		var _description = document.getElementById("description").value;
		var sendInfo = {
			"name": name_,
			"description": _description
		};

		$.ajax({
			url: "http://localhost:8080/CategoryRestService/Add",
			type: 'PUT',
			dataType: "json",
			contentType : "application/json",
			data: JSON.stringify(sendInfo),
			success: function (msg) {
               if (msg) {
                   alert(name_ + "Registro exitoso");
                   console.log("Categoría registrada :3");
               } else {
                   alert("Error!!!!" + name_);
                   console.log("Vuelva a Registrar La categoría");
               }
           },
		});
	});
});