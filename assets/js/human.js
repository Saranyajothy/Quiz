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
        question: "Where in the body does most of digestion take place?",
        choice1: "Small Intestine",
        choice2: "Stomach",
        choice3: "Mouth",
        choice4: "Large Intestine",
        answer: 1,
    },
    {
        question: "Where in the body are new blood cells made?",
        choice1: "Liver",
        choice2: "Brain",
        choice3: "Bone marrow",
        choice4: "Heart",
        answer: 3,
    },
    {
        question: "Which type of joint is your thumb joint?",
        choice1: "Hinge",
        choice2: "Saddle",
        choice3: "Glide",
        choice4: "Ball and socket",
        answer: 2,
    },
    {
        question: "What is the heaviest organ in the human body?",
        choice1: "Kidney",
        choice2: "Brain",
        choice3: "Liver",
        choice4: "Skin",
        answer: 4,
    },
    {
        question: "What is the longest bone in the Human body?",
        choice1: "Thigh bone",
        choice2: "Collarbone",
        choice3: "Spine",
        choice4: "Shinbone",
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