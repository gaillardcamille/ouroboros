$(document).ready(function () {

	const dialogues = [
		{
			text: "Je peux savoir qui vous êtes? Je ne vous ai jamais vue.",
			name: "Victor",
			choices: [
				{ text: "Euh... Je suis une vieille amie de Simon Renard.", next: 1 }
			]
		},
		{
			text: "Tsk. Encore un membre de l'entourage de ce minus qui vient le chercher et nous questionner sur son absence. Nous ne sommes pas la police ici. Et puis, qu'est-ce que j'en sais moi. Il ne fait que nous embêter ce personnage. Heureusement que je l'ai licencié. Tsk.",
			name: "Victor",
			choices: []
		},
		{
			text: "Vous connaissez Simon? Est-ce que vous auriez des nouvelles de lui par hasard?",
			name: "Marc",
			choices: [
				{ text: "J'ai entendu dire qu'il est tombé malade...", next: 3 },
				{ text: "Il a disparu, je suis venue pour vous questionner là-dessus.", next: 6 }
			]
		},
		{
			text: "Oh... Il ne se sent pas trop bien...",
			name: "Marc",
		},
		{
			text: "C'est sûrement pour cette raison qu'il n'est pas venu au restaurant le vendredi 13 septembre...",
			name: "Marc",
		},
		{
			text: "Je lui avais prévu une petite virée au restaurant, puisqu'il est dans une situation assez délicate.",
			name: "Marc",
			choices: [
				{ text: "Ah... Je vois...", next: 8 }
			]
		},
		{
			text: "Il a disparu ?! Vous êtes sûre...? C'est peut-être pour ça qu'il n'est pas venu au restaurant prévu le vendredi 13 septembre...",
			name: "Marc",
			choices: [
				{ text: "Il était au courant de ça?", next: 7 }
			]
		},
		{
			text: "Oui. En tout cas je l'ai contacté, mais il me semblait préoccupé par autre chose.",
			name: "Marc",
			choices: [
				{ text: "Je vois...", next: 8 }
			]
		},
		{
			text: "Merci d'avoir donné des nouvelles. Je pense que vous devriez partir avant que notre chef ne vous signale à la sécurité.",
			name: "Marc",
			choices: []
		}
	];

	let currentDialogueIndex = 0;
	let isTyping = false;
	let choicesVisible = false;

	function typeWriter(text, callback) {
		let i = 0;
		$('#dialogue-text').text('');

		isTyping = true;

		const typingInterval = setInterval(() => {
			if (i < text.length) {
				$('#dialogue-text').text($('#dialogue-text').text() + text.charAt(i));
				i++;
			} else {
				clearInterval(typingInterval);
				isTyping = false;
				if (callback) callback();
			}
		}, 50);
	}

	function showChoices(choices) {
		$('#choices').empty().show();
		$('#overlay').show();
		choicesVisible = true;

		choices.forEach(choice => {
			$('<button></button>')
				.text(choice.text)
				.addClass('choice-button')
				.on('click', () => {
					$('#choices').hide();
					$('#overlay').hide();
					choicesVisible = false;
					currentDialogueIndex = choice.next;
					showNextDialogue();
				})
				.appendTo('#choices');
		});
	}

	function showNextDialogue() {
		if (currentDialogueIndex < dialogues.length) {
			const currentDialogue = dialogues[currentDialogueIndex];
			$('#name-tag').text(currentDialogue.name);

			// Change la couleur du name-tag en fonction du personnage
			if (currentDialogue.name === "Victor") {
				$('#name-tag').attr('class', 'name-tag name-tag-victor'); // Classe pour Victor
			} else if (currentDialogue.name === "Marc") {
				$('#name-tag').attr('class', 'name-tag name-tag-marc'); // Classe pour Marc
			}

			$('#dialogue-box').show();
			typeWriter(currentDialogue.text, () => {
				if (currentDialogue.choices && currentDialogue.choices.length > 0) {
					showChoices(currentDialogue.choices);
				} else {
					$('#choices').hide();
					choicesVisible = false;
					currentDialogueIndex++;

					// Masquer Victor et afficher Marc après le dialogue de Victor
					if (currentDialogue.name === "Victor") {
						$('#character2').hide(); // Victor disparaît
						$('#character1').show(); // Marc devient visible
					}

					// Attendre un clic pour passer au dialogue suivant
					$(document.body).on('click', onBodyClick);
				}
			});
		} else {
			$('#dialogue-box').hide();
			$('#choices').hide();
			$(document.body).off('click', onBodyClick);
		}
	}

	function onBodyClick() {
		if (!isTyping) {
			$(document.body).off('click', onBodyClick);
			showNextDialogue();
		}
	}


	// Démarre avec le premier dialogue
	$("#goToDesk").on("click", function () {
		setTimeout(function () {
			showNextDialogue();
			console.log("fonctionne")
		}, 200);

	})

});