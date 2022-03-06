
const quizScore = document.getElementById('quizScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 50;
quizScore.innerText = mostRecentScore;

