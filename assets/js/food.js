const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.getElementById('progressText');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [{
        question: "What is the most expensive spice in the world by weight?",
        choice1: "Cardamom",
        choice2: "Saffron",
        choice3: "Cloves",
        choice4: "Cinnamon",
        answer: 2,
    },
    {
        question: "Grenadine is obtained from which fruit?",
        choice1: "Dragon fruit",
        choice2: "Berries",
        choice3: "Pomegranate",
        choice4: "Orange",
        answer: 3,
    },

    {
        question: "What is the main ingredient in falafel?",
        choice1: "Chickpea",
        choice2: "Radish",
        choice3: "Zucchini",
        choice4: "Apple",
        answer: 1,
    },
    {
        question: "What ingredient makes bread rise?",
        choice1: "Vinigar",
        choice2: "gelatine",
        choice3: "Yeast",
        choice4: "Oil",
        answer: 3,
    },
    {
        question: "What is Marsala?",
        choice1: "Cocktail",
        choice2: "Orchid thives",
        choice3: "Vodka",
        choice4: "Sweet wine",
        answer: 4,
    },
]
// questions and score
const SCORE_BONUS = 10
const MAXIMUM_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAXIMUM_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end-game.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAXIMUM_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAXIMUM_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_BONUS)
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    })

})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame();