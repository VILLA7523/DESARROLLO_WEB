
$(document).ready(function() {
	var llenado = "";
	$.ajax({
		url: "http://localhost:8080/CategoryRestService/FindAll"
	}).then(function(data) {
		$.each(data, function(i, obj){
			var fila = "<tr><th scope='row'>" + obj.id + "</th>" +
    						"<td>" + obj.whenCreated + "</td>" +
    						"<td>" + obj.whenLastUpdated + "</td>" +
    						"<td>" + obj.name + "</td>" +
    						"<td>" + obj.description + "</td>";
    		llenado = llenado.concat(fila);
		});
		$('.tabla').append(llenado);
	});
});

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
			type: 'POST',
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