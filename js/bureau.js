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
			text: "Tsk. Encore un membre de l'entourage de ce minus qui vient le chercher et nous questionner sur son absence. Nous ne sommes pas la police ici. Et puis, qu'est-ce que j'en sais moi. Heureusement que je l'ai licencié. Tsk.", 
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
			text: "C'est sûrement pour cette raison qu'il n'est pas venu au restaurant le lundi 16 septembre...", 
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
			text: "Il a disparu ?! Vous êtes sûre...? C'est peut-être pour ça qu'il n'est pas venu au restaurant prévu le lundi 16 septembre...", 
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
	const dialogueTextElement = document.getElementById('dialogue-text');
	const dialogueBox = document.getElementById('dialogue-box');
	const nameTag = document.getElementById('name-tag');
	const choicesElement = document.getElementById('choices');
	const character1 = document.getElementById('character1');
	const character2 = document.getElementById('character2');
	
	function typeWriter(text, callback) {
		let i = 0;
		dialogueTextElement.textContent = '';
		isTyping = true;
	
		const typingInterval = setInterval(() => {
			if (i < text.length) {
				dialogueTextElement.textContent += text.charAt(i);
				i++;
			} else {
				clearInterval(typingInterval);
				isTyping = false;
				if (callback) callback();
			}
		}, 35);
	}
	
	function showChoices(choices) {
		choicesElement.innerHTML = '';
		choicesElement.style.display = 'block';
		overlay.style.display = 'block';
		choicesVisible = true;
	
		choices.forEach(choice => {
			const button = document.createElement('button');
			button.textContent = choice.text;
			button.classList.add('choice-button');
			button.addEventListener('click', () => {
				choicesElement.style.display = 'none';
				overlay.style.display = 'none';
				choicesVisible = false;
				currentDialogueIndex = choice.next;
				showNextDialogue();
			});
			choicesElement.appendChild(button);
		});
	}
	
	let canClick = false;
	
	function showNextDialogue() {
		if (currentDialogueIndex < dialogues.length) {
			const currentDialogue = dialogues[currentDialogueIndex];
			nameTag.textContent = currentDialogue.name;
	
			if (currentDialogue.name === "Victor") {
				nameTag.className = 'name-tag name-tag-victor'; 
			} else if (currentDialogue.name === "Marc") {
				nameTag.className = 'name-tag name-tag-marc'; 
			}
	
			dialogueBox.style.display = 'block';
			typeWriter(currentDialogue.text, () => {
				canClick = true;
	
				// Affiche le bouton #goToHome uniquement lors du huitième dialogue
				if (currentDialogueIndex === 8) {
					console.log("Affichage du bouton #goToHome");
					$('#goToHome').show(); // Affiche le bouton
				}
	
				if (currentDialogue.choices && currentDialogue.choices.length > 0) {
					showChoices(currentDialogue.choices);
				} else {
					choicesElement.style.display = 'none';
					choicesVisible = false;
					currentDialogueIndex++;
	
					if (currentDialogue.name === "Victor") {
						canClick = false;
	
						setTimeout(() => {
							dialogueBox.style.display = 'none'; 
							character2.style.display = 'none'; 
	
							setTimeout(() => {
								character1.style.display = 'block'; 
								dialogueBox.style.display = 'block';
								showNextDialogue(); 
								canClick = true; 
							}, 2000); 
						}, 4000); 
					} else {
						setTimeout(() => {
							showNextDialogue();
						}, 2000);
					}
				}
			});
		} else {
			dialogueBox.style.display = 'none';
			choicesElement.style.display = 'none';
			// Ne cache pas le bouton ici, pour qu'il reste visible après le dernier dialogue
			document.body.removeEventListener('click', onBodyClick);
		}
	}
	
	
	function onBodyClick() {
		if (!isTyping && canClick && currentDialogueIndex > 0) {
			document.body.removeEventListener('click', onBodyClick);
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