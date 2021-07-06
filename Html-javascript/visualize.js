//llenando la tabla

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

