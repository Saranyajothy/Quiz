const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.getElementById('progressText');

// console.log('hello');
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [{
        question: "Who is the following is known as the father of modern olympic?",
        choice1: "Le Marques de samaranch",
        choice2: "Pierre de coubertin",
        choice3: "Dementrius vikellas",
        choice4: "Ferenc kermeny",
        answer: 2,
    },
    {
        question: "Which language other than english is the official language of the international olympic committee?",
        choice1: "Chinese",
        choice2: "German",
        choice3: "Spanish",
        choice4: "French",
        answer: 4,
    },

    {
        question: "What is the motto of the Tokyo Olympic 2020?",
        choice1: "Share the spirit",
        choice2: "United by emotion ",
        choice3: "Welcome home",
        choice4: "One world one dream",
        answer: 2,
    },
    {
        question: "Which city in the first in the world to be awarded both summer and winter olympics?",
        choice1: "Seoul",
        choice2: "Tokyo",
        choice3: "Beijing",
        choice4: "Atlanta",
        answer: 4,
    },
    {
        question: "When were the first recorded olympics held?",
        choice1: "776 Bc",
        choice2: "825 Bc",
        choice3: "320 Bc",
        choice4: "80 Bc",
        answer: 1,
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