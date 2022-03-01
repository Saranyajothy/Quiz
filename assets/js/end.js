// let user_score = sessionStorage.getItem("score");
 
// document.querySelector("span.score").innerHTML = user_score;

 console.log('hello');

const result_box = document.querySelector(".result_box");
const scoreText= document.querySelector('.scoreText');
const MAX_HIGH_SCORES = 50

let score = 0

function showResult(){
    const scoreText = result_box.querySelector(".scoreText");
if (score > 30) { 
    let scoreTag = '<span>Congrats! , Your score <p>'+ score +'</p> out of <p>'+ question.length +'</p> </span>';
    scoreText.innerHTML = scoreTag;
    }
else if(score > 10) {
    let scoreTag = '<span>Nice , Your score <p>'+ score +'</p> out of <p>'+ question.length +'</p> </span>';
    scoreText.innerHTML = scoreTag;
    }
else{
    let scoreTag = '<span>Sorry , Your score <p>'+ score +'</p> out of <p>'+ question.length +'</p> </span>';
    scoreText.innerHTML = scoreTag;
    }
return showResult 
}

// const highScoresList = document.getElementById("highScoresList");
// const quizScore = JSON.parse(localStorage.getItem("quizScore")) || [];

// highScoresList.innerHTML = quizScore
//   .map(score => {
//     return `<li class="high-score">${score.name} - ${score.score}</li>`;
//   })
//   .join();