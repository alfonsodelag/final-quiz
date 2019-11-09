
//Meter bar animation 
var meterHTML = document.getElementById("meterHTML");
var max = parseInt(meterHTML.getAttribute("max"));
var value = parseInt(meterHTML.getAttribute("value"));
var next = document.getElementById("next-button");
next.onclick = function(){
    if ((value<max)) {
        value += 10;
        document.getElementById("meterHTML").value = value;
        console.log(value);
    } 
}

window.Jsondata








// var modalPage = document.getElementById("modalPage");
// var meter = document.getElementById("meter");
// var newPage = document.getElementById("??");
// var rightAnswer = document.getElementById("chooseAnswer");
// var next = document.getElementById("next-Button")
// var score = document.getElementById("score")


// // Function for moving to the next page
// next.onclick = function (){
//     questions = []
//     questions.push =
//     }

//     else {
//     return ('Wrong answer');
//     }
// };

// //Function for meter change
// function meterChange(){
//     for(meterChange){
//         return meterChange.X += 10 
//     }
// };


// //Function for scoring
// function scoreUp {
//     if(rightAnswer = correct)
// }
//     then(score++)










// Function for the questions
// const container = document.getElementById("test");

// const questions = [
//     {
//         question : "1. What does html stand for?",
        
//         answers: {
//             a: "1. HyperText Markup Language",
//             b: "1. HyperLink Markup Language",
//             c: "1. HyperTransfer Markup Language"
//     },
//         rightAnswer: "a"
//     },
//     {
//         question: "1. What does html stand for?",
        
//         answers: {
//             a: "1. HyperText Markup Language",
//             b: "1. HyperLink Markup Language",
//             c: "1. HyperTransfer Markup Language"
//     },
//         rightAnswer: "a"
//     },
//     {
//         question: "1. What does html stand for?",
        
//         answers: {
//             a: "1. HyperText Markup Language",
//             b: "1. HyperLink Markup Language",
//             c: "1. HyperTransfer Markup Language"
//     },
//         rightAnswer: "a"
//     },
// ];

// function showTest() {
//     const questionsandAnswers = [];

//     questions.forEach((actualQuestion, questionNumber)) function(){
//     const answers = [];
//     for(answerLetter in actualQuestion.answers){
//         answers.push(
//             `<label>
//                 <input type="radio" name="${questionNumber}" value="${answerLetter}">
//                 ${answerLetter} : ${actualQuestion.answers[answerLetter]}
//             </label>
//             `
//             );
//         }
//     questionsandAnswers.push(
//         `<div class="question"> ${actualQuestion.question} </div>
//          <div class="answers"> ${answers.join('')} </div>        
//         `
//         );
//     );

// container.innerHTML = questionsandAnswers.join('');
// }

// showTest();
