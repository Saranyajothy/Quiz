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
        question: "Which country does yoga originate from?",
        choice1: "India",
        choice2: "Bangladesh",
        choice3: "Thailand",
        choice4: "Ireland",
        answer: 1,
    },
    {
        question: "What is chakra?",
        choice1: "kundalini",
        choice2: "karma",
        choice3: "Energy center",
        choice4: "prayer point",
        answer: 3,
    },
    {
        question: "How many chakras are in the human body",
        choice1: "Five",
        choice2: "Seven",
        choice3: "Three",
        choice4: "One",
        answer: 2,
    },
    {
        question: "What is the system of nerves that connects chakras and is where energy flows through?",
        choice1: "Pranayamam",
        choice2: "Ramayanam",
        choice3: "Upanishad",
        choice4: "Nadi",
        answer: 4,
    },
    {
        question: "What is the true meaning of yoga",
        choice1: "Spiritual union",
        choice2: "Attaining freedom",
        choice3: "Physical health",
        choice4: "Body conditioning",
        answer: 1,
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