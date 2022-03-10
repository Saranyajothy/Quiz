/*jshint esversion: 6 */
const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.getElementById('progressText');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [{
        question: "Which country gifted the 'statue of liberty' to USA in 1886?",
        choice1: "Brazil",
        choice2: "France",
        choice3: "England",
        choice4: "Canada",
        answer: 2,
    },
    {
        question: "Which country is known as the 'Land of Rising Sun'?",
        choice1: "Japan",
        choice2: "New Zealand",
        choice3: "Fiji",
        choice4: "China",
        answer: 1,
    },

    {
        question: "What plateau is known as the 'Roof of the World?",
        choice1: "Andes",
        choice2: "Himalayas",
        choice3: "Karakoram",
        choice4: "Pamir",
        answer: 4,
    },
    {
        question: "In which country is known as the 'Playground of Europe?",
        choice1: "Austria",
        choice2: "Holland",
        choice3: "Switerland",
        choice4: "Italy",
        answer: 3,
    },
    {
        question: "The world longest road without any corners is located in?",
        choice1: "USA",
        choice2: "Australia",
        choice3: "Saudi Arabia",
        choice4: "China",
        answer: 3,
    },
];

// questions and score
const SCORE_BONUS = 10;
const MAXIMUM_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAXIMUM_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end-game.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAXIMUM_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAXIMUM_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });

});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();