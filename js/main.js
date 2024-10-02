$(document).ready(function () {


	var nombreMessage = "3";
	$("#nombreMessage").text(nombreMessage);

	$("#debutJeu").on("click", function () {
		$("#debutJeu").css("top", "-100%")
	});

	$("#ouvrirTelephone").on("click", function () {
		$("#zoneTelephone").css("bottom", "0")
		$("#backgroundTelephone").css("display", "block")
	});

	$("#backgroundTelephone").on("click", function () {
		$("#zoneTelephone").css("bottom", "-99%")
		$("#backgroundTelephone").css("display", "none")
	});

	$("#verouillageTelephone").on("click", function () {
		$("#verouillageTelephone").css("top", "-100%")
	});

	$("#ouvrirMessages").on("click", function () {
		$("#messages").css("right", "0")
	});
	
});