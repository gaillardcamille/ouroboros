$(document).ready(function () {

	// Variables
	var nombreMessage = 8;
	var message1Opened = false;
	var message2Opened = false;

	var nombreLinkedin = 2;
	var linkedin1Opened = false;
	var linkedin2Opened = false;
	var connectedLinkedin = false;

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

		if (connectedLinkedin) {
			$("#messageLinkedin").css("right", "0")
		}
		
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
			$("#notifMail").css("top", "160%")
			$("#ouvrirMail1").css("display", "block")
	
			nombreMail += 1;
			$("#nombreMail").text(nombreMail);
			updateNotificationDisplay();
			
			setTimeout(function() {
				$("#notifMail").css("top", "0");
			}, 4000);
		}
	});

	$("#connexionButton").on("click", function () {
		var username = $("#user").val();
		var password = $("#password").val();
	
		var validUsername = "Simon.Rernard";
		var validPassword = "S!m0N_rd";
	
		if (username === "" || password === "" || username !== validUsername || password !== validPassword) {
			$("#connexionButton").addClass("cant");

            setTimeout(function() {
                $("#connexionButton").removeClass("cant");
            }, 500);
		}
		else {
			connectedLinkedin = true
			$("#messageLinkedin").css("right", "0")
		}
	});

	$("#ouvrirLinkedin1").on("click", function () {
		$("#linkedin1").css("right", "0")

		if (!linkedin1Opened) { 
			nombreLinkedin -= 1;

			$("#nombreLinkedin").text(nombreLinkedin);
			updateNotificationDisplay();
			linkedin1Opened = true;
		}
	});

	$("#ouvrirLinkedin2").on("click", function () {
		$("#linkedin2").css("right", "0")

		if (!linkedin2Opened) { 
			nombreLinkedin -= 1;

			$("#nombreLinkedin").text(nombreLinkedin);
			updateNotificationDisplay();
			linkedin2Opened = true;

			$("#lieuBureau").css("top", "120%")
	
			
			setTimeout(function() {
				$("#lieuBureau").css("top", "0");
			}, 4000);
		}
	});

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	
	// Mails
	$("#ouvrirMail").on("click", function () {
		$("#mail").css("right", "0")

		if(!sendingForgetPassword) {
			$("#ouvrirMail1").css("display", "none")
		}
	});

	$("#ouvrirMail1").on("click", function () {
		$("#mail1").css("right", "0")

		if (!mailOpened) { 
			nombreMail -= 1;

			$("#nombreMail").text(nombreMail);
			updateNotificationDisplay();
			mailOpened = true;
		}
	});

	$("#ouvrirMail2").on("click", function () {
		$("#mail2").css("right", "0")
	});

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////
	
	// Home

	$("#homeTelephone").on("click", function () {
		$("#messages").css("right", "-100%")
		$("#message1").css("right", "-100%")
		$("#message2").css("right", "-100%")

		$("#linkedin").css("right", "-100%")
		$("#linkedin1").css("right", "-100%")
		$("#linkedin2").css("right", "-100%")

		$("#mail").css("right", "-100%")
		$("#mail1").css("right", "-100%")
		$("#mail2").css("right", "-100%")
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