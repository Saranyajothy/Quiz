
const quizScore = document.getElementById('quizScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 50;

quizScore.innerText = mostRecentScore;

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value;
// });

// saveHighScore = (e) => {
//     e.preventDefault();

//     const score = {
//         score: mostRecentScore,
//     };
//     highScores.push(score);
//     highScores.sort((a, b) => b.score - a.score);
//     highScores.splice(50);

//     localStorage.setItem('highScores', JSON.stringify(highScores));
//     window.location.assign('/');
// };





// const username = document.getElementsByClassName('username');
// const userScore = localStorage.getItem('mostRecentScore');

// const userScore = JSON.parse(localStorage.getItem('userScore')) || [];

// const MAX_HIGH_SCORES = 50;

// userScore.innerText = mostRecentScore;
 
// document.querySelector("span.score").innerHTML = userScore;

// saveuserScore = (e) => {
//     e.preventDefault();

// const score = {
//     score: mostRecentScore,
// };
// userScore.push(score);
// userScore.sort((a, b) => b.score - a.score);
// userScore.splice(50);

// localStorage.setItem('userScore', JSON.stringify(userScore));
// window.location.assign('/');
// };



// // const result_box = document.querySelector(".result_box");
// // const scoreText= document.querySelector('.scoreText');
// // const MAX_HIGH_SCORES = 50

// // let score = 0

// // function resultBox(){
// //     const scoreText = result_box.querySelector(".scoreText");
// // if (score > 30) { 
// //     let scoreTag = '<span>Congrats! , Your score <p>'+ score +'</p> out of <p>'+ question.length +'</p> </span>';
// //     scoreText.innerHTML = scoreTag;
// //     }
// // else if(score > 10) {
// //     let scoreTag = '<span>Nice , Your score <p>'+ score +'</p> out of <p>'+ question.length +'</p> </span>';
// //     scoreText.innerHTML = scoreTag;
// //     }
// // else{
// //     let scoreTag = '<span>Sorry , Your score <p>'+ score +'</p> out of <p>'+ question.length +'</p> </span>';
// //     scoreText.innerHTML = scoreTag;
// //     }

// // }
