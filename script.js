function main () {

	$(".bouton").click(function () {
			// Fonction clique Bouton pour ajouter une tâche dans la liste
	
		var input = $('#myInput').val();

		$(".list-taches").append($("<li>").append(input));
	});



}

$(document).ready(function(){
	main();
});



