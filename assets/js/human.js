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
