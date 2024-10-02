$(document).ready(function () {

	// Variables
	var nombreMessage = 8;
	var message1Opened = false;
	var message2Opened = false;

	var nombreLinkedin = 2;
	var linkedinOpened = false;

	var nombreMail = 0;
	var mailOpened = false;

	var sendingForgetPassword = false;

	$("#nombreMessage").text(nombreMessage);
	$("#nombreLinkedin").text(nombreLinkedin);
	updateNotificationDisplay();

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	
	// Page d'accueil du téléphone

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


	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	
	// Messages
	$("#ouvrirMessages").on("click", function () {
		$("#messages").css("right", "0")
	});

	$("#ouvrirMessage1").on("click", function () {
		$("#message1").css("right", "0")

		if (!message1Opened) { 
			nombreMessage -= 3;

			$("#nombreMessage").text(nombreMessage);
			updateNotificationDisplay();
			message1Opened = true;
		}
	});

	$("#ouvrirMessage2").on("click", function () {
		$("#message2").css("right", "0")

		if (!message2Opened) { 
			nombreMessage -= 5;

			$("#nombreMessage").text(nombreMessage);
			updateNotificationDisplay();
			message2Opened = true;
		}
	});

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	
	// Linkedin
	$("#ouvrirLinkedin").on("click", function () {
		$("#linkedin").css("right", "0")
	});

	$("#forgetPassword").on("click", function () {
		if (sendingForgetPassword) {
			$("#forgetPassword").addClass("cant");

            // Retirer la classe après l'animation
            setTimeout(function() {
                $("#forgetPassword").removeClass("cant");
            }, 500);
		}

		if (!sendingForgetPassword) {
			sendingForgetPassword = true
			$("#notifGmail").css("top", "160%")
	
			nombreMail += 1;
			$("#nombreMail").text(nombreMail);
			updateNotificationDisplay();
			
			setTimeout(function() {
				$("#notifGmail").css("top", "0");
			}, 4000);
		}
	});

	$("#connexionButton").on("click", function () {
		var username = $("#user").val();
		var password = $("#password").val();
	
		var validUsername = "Simon.Rernard";
		var validPassword = "S!m0N_rd";
	
		if (!sendingForgetPassword || username === "" || password === "" || username !== validUsername || password !== validPassword) {
			$("#connexionButton").addClass("cant");

            setTimeout(function() {
                $("#connexionButton").removeClass("cant");
            }, 500);
		}
	});

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	
	// Home

	$("#homeTelephone").on("click", function () {
		$("#messages").css("right", "-100%")
		$("#message1").css("right", "-100%")
		$("#message2").css("right", "-100%")

		$("#linkedin").css("right", "-100%")
	});

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	
	// Fonctions

	function updateNotificationDisplay() {
		$('.notificationNumber').each(function() {
			if ($(this).text().trim() === '' || $(this).text().trim() === '0') {
				$(this).css('display', 'none');
			} else {
				$(this).css('display', 'flex');
			}
		});
	}
});