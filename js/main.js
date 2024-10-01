$(document).ready(function () {


	var nombreMessage = "3";
	$("#nombreMessage").text(nombreMessage);

	$("#debutJeu").on("click", function () {
		$("#debutJeu").css("display", "none")
	});

	$("#ouvrirTelephone").on("click", function () {
		$("#telephone").css("bottom", "50px")
		$("#backgroundTelephone").css("display", "block")
	});

	$("#backgroundTelephone").on("click", function () {
		$("#telephone").css("bottom", "-99%")
		$("#backgroundTelephone").css("display", "none")
	});

	$("#verouillageTelephone").on("click", function () {
		$("#verouillageTelephone").css("top", "-100%")
	});
	
});