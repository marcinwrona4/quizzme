function goToCategoryPanel() {
	 		document.getElementById("start-panel").style.visibility = 'hidden';  
	 		document.getElementById("category-panel").style.visibility = 'visible'; 
	 	}

const biologyQuestions = [{ id: 1, question: "Ile par odnóży mają kraby?", answer: [2, 4, 5, 10], correct_answer: 10 },	 	
{ id: 2, question: "Jak inaczej nazywana jest witamina B6?", answer: ["tiamina", "ryboflawina", "pirydoksyna", "biotyna" ], correct_answer: "kwas pantotenowy" },
{ id: 3, question: "Gdzie wydzielany jest hormon wzrostu?", answer: ["w szyszynce", "w podwzgórzu", "w przysadce mózgowej", "w nadnerczach" ], correct_answer: "w przysadce mózgowej" }];

console.log(biologyQuestions[0].question);