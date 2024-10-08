$(document).ready(function () {
	
	/////////////////////////
	////    VARIABLES    ////
	/////////////////////////

	var nombreMessage = 15;
	var message1Opened = false;
	var message2Opened = false;
	var message3Opened = false;

	var nombreLinkedin = 1;
	var linkedin1Opened = false;
	var connectedLinkedin = false;

	var nombreMail = 0;
	var mail1Opened = false;
	var mail2Opened = false;
	var sendingForgetPassword = false;

	var connectedCalculatrice = false;
	var lastMessage = false;
	var nombreMessagePrive = 0;
	var lastMessageOpened = false;

	var nombreIndice = 8;

	var calendarOpened = false;

	$("#nombreMessage").text(nombreMessage);
	$("#nombreLinkedin").text(nombreLinkedin);
	$("#nombreIndice").text(nombreIndice);
	updateNotificationDisplay();

	/////////////////////////////////////////////////////////////////////////////
	
	/////////////////////////
	////    FONCTIONS    ////
	/////////////////////////

	function updateNotificationDisplay() {
		$('.notificationNumber').each(function() {
			let notificationValue = parseInt($(this).text().trim(), 10);
			if (isNaN(notificationValue) || notificationValue <= 0) {
				$(this).css('display', 'none');
			} else {
				$(this).css('display', 'flex');
			}
		});
	}

	function updateNombreIndice() {
		nombreIndice -= 1;
		
		
		$("#nombreIndice").text(nombreIndice);

		if (nombreIndice <= 0) {
			$("#finNotif").css("top", "120%")
	
			
			setTimeout(function() {
				$("#finNotif").css("top", "0");
			}, 8000);

			$("#endTheGame").css("display", "block")

			nombreIndice = 0;
			$("#nombreIndice").text(nombreIndice);
		}
		else {
			$("#indiceTrouve").css("top", "120%")

			setTimeout(function() {
				$("#indiceTrouve").css("top", "0");
			}, 4000);
		}
	}

	/////////////////////////////////////////////////////////////////////////////
	
	/////////////////////////
	////    TELEPHONE    ////
	/////////////////////////

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

	$("#homeTelephone").on("click", function () {
		$("#messages").css("right", "-100%")
		$("#message1").css("right", "-100%")
		$("#message2").css("right", "-100%")

		$("#linkedin").css("right", "-100%")
		$("#linkedin1").css("right", "-100%")
		$("#linkedin2").css("right", "-100%")

		$("#mail").css("right", "-100%")
		$(".mail").css("right", "-100%")

		$("#calculatrice").css("right", "-100%")
		$("#journal").css("right", "-100%")
		$(".pageJournal").css("right", "-100%")
		$("#messagePrive").css("right", "-100%")
		$("#calendrier").css("right", "-100%")
	});

	/////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////
	////     MESSAGES     ////
	//////////////////////////
	
	$("#ouvrirMessages").on("click", function () {
		$("#messages").css("right", "0")
	});

	$("#ouvrirMessage1").on("click", function () {
		$("#message1").css("right", "0")

		if (!message1Opened) { 
			nombreMessage -= 10;

			$("#nombreMessage").text(nombreMessage);
			updateNotificationDisplay();
			message1Opened = true;
			updateNombreIndice();
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

	$("#ouvrirMessage3").on("click", function () {
		$("#message3").css("right", "0")

		if (!message3Opened) { 
			updateNombreIndice();
			message3Opened = true;
		}
	});

	$(".message i").on("click", function () {
		$(this).closest('.message').css("right", "-100%");
	});

	/////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////
	////     LINKEDIN     ////
	//////////////////////////

	$("#ouvrirLinkedin").on("click", function () {
		$("#linkedin").css("right", "0")

		if (connectedLinkedin) {
			$("#messageLinkedin").css("right", "0")
		}
		
	});

	$("#forgetPassword").on("click", function () {
		if (sendingForgetPassword) {
			$("#forgetPassword").addClass("cant");

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
	
		var validUsername = "Simon.Renard";
		var validPassword = "S!m0N_rd";
	
		if (!sendingForgetPassword || username === "" || password === "" || username !== validUsername || password !== validPassword) {
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
		$("#ouvrirLinkedin1").css("border", "unset")

		if (!linkedin1Opened) { 
			nombreLinkedin -= 1;

			$("#nombreLinkedin").text(nombreLinkedin);
			updateNotificationDisplay();
			linkedin1Opened = true;

			$("#lieuBureau").css("top", "175%")
			updateNombreIndice();

			$("#goToDesk").css("display", "block")
		}
	});

	$("#ouvrirLinkedin2").on("click", function () {
		$("#linkedin2").css("right", "0")
	});

	$(".linkedinMessage i").on("click", function () {
		$(this).closest('.linkedinMessage').css("right", "-100%");
	});

	/////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////
	////    CALENDRIER    ////
	//////////////////////////

	$("#ouvrirCalendrier").on("click", function () {
		$("#calendrier").css("right", "0")

		if (!calendarOpened) { 
			updateNombreIndice();
			calendarOpened = true;
		}
	});

	/////////////////////////////////////////////////////////////////////////////
	
	///////////////////////////
	////       MAILS       ////
	///////////////////////////

	$("#ouvrirMail").on("click", function () {
		$("#mail").css("right", "0")

		if(!sendingForgetPassword) {
			$("#ouvrirMail1").css("display", "none")
		}
	});

	$("#ouvrirMail1").on("click", function () {
		$("#mail1").css("right", "0")

		if (!mail1Opened) { 
			nombreMail -= 1;

			$("#nombreMail").text(nombreMail);
			updateNotificationDisplay();
			mailOpened = true;
		}
	});

	$("#ouvrirMail2").on("click", function () {
		$("#mail2").css("right", "0")

		if (!mail2Opened) { 
			updateNombreIndice();
			mail2Opened = true;
		}
	});

	$("#ouvrirMail3").on("click", function () {
		$("#mail3").css("right", "0")
	});

	$("#ouvrirMail4").on("click", function () {
		$("#mail4").css("right", "0")
	});

	$("#ouvrirMail5").on("click", function () {
		$("#mail5").css("right", "0")
	});

	$(".mail i").on("click", function () {
		$(this).parent().css("right", "-100%");
	});

	/////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////
	////   CALCULATRICE   ////
	//////////////////////////

	$("#ouvrirCalculatrice").on("click", function () {
		$("#calculatrice").css("right", "0")

		if (connectedCalculatrice) {
			$("#zonePrive").css("right", "0")
		}
	});

	$("#equal").on("click", function () {
		var currentText = $('#result').text();
		console.log(currentText)
		if (currentText == "13092012" || currentText == "09132012" || currentText == "20120913" || currentText == "20121309") {
			connectedCalculatrice = true
			$("#zonePrive").css("right", "0")
		}
		else {
			$('#result').text('');
		}
	});

	$("#ouvrirJournal").on("click", function () {
		$("#journal").css("right", "0")
		$("#journal .pageJournal:first-of-type").css("right", "0");
	});

	$('.nextPage').on('click', function() {
		const currentPage = $(this).closest('.pageJournal');
		const nextPage = currentPage.next('.pageJournal');
	
		if (nextPage.length) {
		  currentPage.css('right', '100%');
	
		  nextPage.css('right', '0');

		  	if (nextPage.attr('id') === 'endPage' && !lastMessage) {
				lastMessage = true
				$("#notifMessage").css("top", "160%")
			
				nombreMessagePrive += 1;
				$("#nombreMessagePrive").text(nombreMessagePrive);
				updateNotificationDisplay();

				updateNombreIndice();
					
				setTimeout(function() {
					$("#notifMessage").css("top", "0");
				}, 4000);

				$(".newMessage").css("display", "block")
        	}
		}
	});

	$('.prevPage').on('click', function() {
		const currentPage = $(this).closest('.pageJournal');
		const prevPage = currentPage.prev('.pageJournal');
	
		if (prevPage.length) {
		  	currentPage.css('right', '-100%');

			prevPage.css('right', '0');
		}
	});

	$("#ouvrirMessagePrive").on("click", function () {
		$("#messagePrive").css("right", "0")

		if (lastMessage && !lastMessageOpened) {
			nombreMessagePrive -= 1;

			$("#nombreMessagePrive").text(nombreMessagePrive);
			updateNotificationDisplay();
			lastMessageOpened = true;

			updateNombreIndice();
		}
	});

	$("#messagePrive h2 i").on("click", function () {
		$("#messagePrive").css("right", "-100%");
	});

	$("#journal h2 i").on("click", function () {
		$("#journal").css("right", "-100%");
		$(".pageJournal").css("right", "-100%")
	});

	/////////////////////////////////////////////////////////////////////////////
	
	///////////////////////////
	////  LIEU CHANGEMENT  ////
	///////////////////////////

	$("#goToDesk").on("click", function () {
		$("#maison").css("right", "100%")
		$("#bureau").css("right", "0%")
		$("#goToDesk").css("display", "none")
		$("#lieuBureau").css("top", "0")
	})

	$("#goToHome").on("click", function () {
		$("#maison").css("right", "0")
		$("#bureau").css("right", "-100%")
		$("#goToHome").css("display", "none")
		updateNombreIndice()
	})

	/////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////
	////    FIN DE JEU    ////
	//////////////////////////

	$("#endTheGame").on("click", function () {
		$("#finJeu").css("top", "0")
		
		setTimeout(function() {
			$("#finJeu div:first-child").css("top", "0")
			$("#finJeu div:last-child").css("top", "0")
		}, 700);
	});

	$("#finJeu button").on("click", function () {
		$("#finJeu div:first-child").css("top", "-100%")
		$("#finJeu div:last-child").css("top", "-100%")
	});
});