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
    question: "How many Chakras are in the human body?",
    choice1: "Seven",
    choice2: "Three",
    choice3: "Twenty-five",
    choice4: "Eight",
    answer: 1,
},
{
    question: "What is Chakra?",
    choice1: "Prayer point",
    choice2: "Karma",
    choice3: "Performance",
    choice4: "Energy center",
    answer: 4,
},

{
    question: "Where is kundalini located?",
    choice1: "The brain",
    choice2: "The base of the spine",
    choice3: "The whole body",
    choice4: "The forehead",
    answer: 2,
},
{
    question: "Which Chakrs signifies the process of enlightenment?",
    choice1: "3rd",
    choice2: "4th",
    choice3: "6th",
    choice4: "7th",
    answer: 4,
},
{
    question: "What is the true meaning of yoga?",
    choice1: "Physical health",
    choice2: "Attaining freedom",
    choice3: "Spiritual union",
    choice4: "Strength",
    answer: 3,
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