function main () {

	$(".bouton").click(function () {
			// Fonction clique Bouton pour ajouter une tâche dans la liste
	
		var input = $('#myInput').val();

		$("#the-list").append($("<li><div><button>Tâche terminée</button></div>").append(input));
		
	});



}

$(document).ready(function(){
	main();
});



