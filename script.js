const biologyQuestions = [{
        id: 1,
        question: "Ile par odnóży mają kraby?",
        answer: [2, 4, 5, 10],
        correct_answer: 5
    },
    {
        id: 2,
        question: "Jak inaczej nazywana jest witamina B6?",
        answer: ["tiamina", "ryboflawina", "pirydoksyna", "biotyna"],
        correct_answer: "pirydoksyna"
    },
    {
        id: 3,
        question: "Gdzie wydzielany jest hormon wzrostu?",
        answer: ["w szyszynce", "w podwzgórzu", "w przysadce mózgowej", "w nadnerczach"],
        correct_answer: "w przysadce mózgowej"
    }
];

const geographyQuestions = [{
        id: 1,
        question: "Jakie miasto jest stolicą Wenezueli?",
        answer: ["Lima", "Caracas", "Buenos Aires", "Asuncion"],
        correct_answer: "Caracas"
    },
    {
        id: 2,
        question: "Jak nazywa się najwyższy szczyt Ameryki Północnej?",
        answer: ["Aconcagua", "Denali", "Kilimandżaro", "Mont Blanc"],
        correct_answer: "Denali"
    },
    {
        id: 3,
        question: "Jaki kolor nie występuje na fladze Czech?",
        answer: ["biały", "zielony", "niebieski", "czerwony"],
        correct_answer: "zielony"
    }
];

const musicQuestions = [{
        id: 1,
        question: "Jakim instrumentem jest klarnet?",
        answer: ["perkusyjnym", "dętym drewnianym", "strunowym", "dętym blaszanym"],
        correct_answer: "dętym drewnianym"
    },
    {
        id: 2,
        question: "Jakie tempo nie jest wolne?",
        answer: ["adagio", "allegro", "largo", "lento"],
        correct_answer: "allegro"
    },
    {
        id: 3,
        question: "Która z wymienionych osób nigdy nie należała do zespołu The Beatles?",
        answer: ["Paul McCartney", "George Harrison", "Dave Gahan", "Ringo Starr"],
        correct_answer: "Dave Gahan"
    }
];

var question_number = 1;
var correct_answers = 0;
var categoryQuestion = "";

function goToCategoryPanel() {
    document.getElementById("start-panel").style.visibility = 'hidden';
    document.getElementById("category-panel").style.visibility = 'visible';
}


function displayQuestion(category) {

    if (category == "biology" && question_number == 1) {
        document.getElementById("category-panel").style.visibility = 'hidden';
        document.getElementById("questions").style.visibility = 'visible';

        document.getElementById("question").innerHTML = biologyQuestions[0].question;

        for (let i = 1, j = 0, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = biologyQuestions[j].answer[k];
        }
        categoryQuestion = "biology";
    } else if (category == "biology" && question_number == 2) {

        document.getElementById("question").innerHTML = biologyQuestions[1].question;
        for (let i = 1, j = 1, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = biologyQuestions[j].answer[k];
        }
        console.log(categoryQuestion);
    } else if (category == "biology" && question_number == 3) {

        document.getElementById("question").innerHTML = biologyQuestions[2].question;
        for (let i = 1, j = 2, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = biologyQuestions[j].answer[k];
        }
    } else if (category == "geography" && question_number == 1) {
        document.getElementById("category-panel").style.visibility = 'hidden';
        document.getElementById("questions").style.visibility = 'visible';

        document.getElementById("question").innerHTML = geographyQuestions[0].question;
        for (let i = 1, j = 0, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = geographyQuestions[j].answer[k];
            categoryQuestion = "geography";
        }
    } else if (category == "geography" && question_number == 2) {

        document.getElementById("question").innerHTML = geographyQuestions[1].question;

        for (let i = 1, j = 1, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = geographyQuestions[j].answer[k];
        }
    } else if (category == "geography" && question_number == 3) {

        document.getElementById("question").innerHTML = geographyQuestions[2].question;

        for (let i = 1, j = 2, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = geographyQuestions[j].answer[k];
        }
    } else if (category == "music" && question_number == 1) {
        document.getElementById("category-panel").style.visibility = 'hidden';
        document.getElementById("questions").style.visibility = 'visible';

        document.getElementById("question").innerHTML = musicQuestions[0].question;
        for (let i = 1, j = 0, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = musicQuestions[j].answer[k];
            categoryQuestion = "music";
        }
    } else if (category == "music" && question_number == 2) {

        document.getElementById("question").innerHTML = musicQuestions[1].question;

        for (let i = 1, j = 1, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = musicQuestions[j].answer[k];
        }
    } else if (category == "music" && question_number == 3) {

        document.getElementById("question").innerHTML = musicQuestions[2].question;

        for (let i = 1, j = 2, k = 0; i <= 4; i++, k++) {
            document.getElementById("answer" + i.toString()).innerHTML = musicQuestions[j].answer[k];
        }
    } else {
        document.getElementById("questions").style.visibility = 'hidden';
        document.getElementById("end-panel").style.visibility = 'visible';
        document.getElementById("summary-message").innerHTML = "Twój wynik: " + correct_answers.toString() + "/3 prawidłowych odpowiedzi";
    }


}

function checkAnswer(button_number) {
    var button = document.getElementById('answer' + button_number.toString());
    var buttonText = button.innerHTML;
    if (categoryQuestion == "biology") {
        if (buttonText === biologyQuestions[question_number - 1].correct_answer.toString()) {
            correct_answers += 1;
            const myTimeout = setTimeout(function() {
                question_number += 1;
                displayQuestion("biology");
            }, 500);
        } else {
            const myTimeout = setTimeout(function() {
                question_number += 1;
                displayQuestion("biology");

            }, 500);
        }
    } else if (categoryQuestion == "geography") {
        if (buttonText === geographyQuestions[question_number - 1].correct_answer.toString()) {
            correct_answers += 1;
            const myTimeout = setTimeout(function() {
                question_number += 1;
                displayQuestion("geography");
            }, 500);
        } else {
            const myTimeout = setTimeout(function() {
                question_number += 1;
                displayQuestion("geography");

            }, 500);
        }
    } else if (categoryQuestion == "music") {
        if (buttonText === musicQuestions[question_number - 1].correct_answer.toString()) {
            correct_answers += 1;
            const myTimeout = setTimeout(function() {
                question_number += 1;
                displayQuestion("music");
            }, 500);
        } else {
            const myTimeout = setTimeout(function() {
                question_number += 1;
                displayQuestion("music");

            }, 500);
        }
    }

}