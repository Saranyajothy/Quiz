const question = document.querySelector('#question');
const choices = document.querySelector('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuetion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = [] 

let questions =[
    {
    question: 'Where in the body does most of digestion take place?',
    Achoice: 'Small Intestine',
    Bchoice: 'Stomach',
    CChoice: 'Mouth',
    DChoice: 'Large Intestine',
    answer: A, 
    },

    {
        question: 'Where in the body are new blood cells made?',
        Achoice: 'Liver',
        Bchoice: 'Brain',
        Cchoice: 'Bones',
        Dchoice: 'Heart',
        answer: B, 
    },

    {
        question: 'Which type of joint is your thumb joint?',
        Achoice: 'Hinge',
        Bchoice: 'Saddle',
        Cchoice: 'Glide',
        Dchoice: 'Ball and socket',
        answer: B, 
    },
    {
        question: 'What is the heaviest organ in the human body?',
        Achoice: 'Kidney',
        Bchoice: 'Brain',
        Cchoice: 'Liver',
        Dchoice: 'Skin',
        answer: D, 
    },
    {
        question: 'What is the longest bone in the Human body?',
        Achoice: 'Thigh bone',
        Bchoice: 'Collarbone',
        Cchoice: 'Spine',
        Dchoice: 'Shinbone',
        answer: A, 
    },
]
const score_point = 100
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
}

questionCounter++ 
progressText.innerText = `Question ${questionCounter} of ${max-questions}`
progressBarFull.style.width = `${(questionCounter/max_questions) * 100}%`

constquestionIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})

availableQuestions.splice(questionsIndex, 1)

acceptingAnswers = true

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        acceptingAnswers = false

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'  
          
        if(classToApply === 'correct') {
            incrementScore(score_point)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() =>{
            selectedChoice.parentElement.classList.remove(classToApply)
        }, 100)
    })

})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
startGame()