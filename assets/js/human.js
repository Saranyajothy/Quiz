const question = document.querySelector('#question');
const choices =Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuetion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let availableQuestions = []

let questions =[
    {
        question: "Where in the body does most of digestion take place?",
        choice1: "Small Intestine",
        choice: "Stomach",
        choice: "Mouth",
        choice: "Large Intestine",
        answer: 1, 
        },
{
        question: "Where in the body are new blood cells made?",
        choice1: "Liver",
        choice2: "Brain",
        choice3: "Bones",
        choice4: "Heart",
        answer: 2, 
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
]
const score_points = 10
const max_questions = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

questionCounter++ 
progressText.innerText = `Question ${questionCounter} of ${max_questions}`
progressBarFull.style.width = `${(questionCounter/max_questions) * 100}%`

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
        if(!acceptingAnswers) return
        acceptingAnswers = false

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'  
          
        if(classToApply === 'correct') {
            incrementScore(score_points)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 100)
    })

})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
