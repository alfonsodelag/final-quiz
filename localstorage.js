const container = document.getElementById("test");

const questions = [
    {
        question : "1. What does html stand for?",
        
        answers: {
            a: "1. HyperText Markup Language",
            b: "1. HyperLink Markup Language",
            c: "1. HyperTransfer Markup Language"
    },
        rightAnswer: "a"
    },
    {
        question: "1. What does html stand for?",
        
        answers: {
            a: "1. HyperText Markup Language",
            b: "1. HyperLink Markup Language",
            c: "1. HyperTransfer Markup Language"
    },
        rightAnswer: "a"
    },
    {
        question: "1. What does html stand for?",
        
        answers: {
            a: "1. HyperText Markup Language",
            b: "1. HyperLink Markup Language",
            c: "1. HyperTransfer Markup Language"
    },
        rightAnswer: "a"
    },
];

function showTest() {
    const questionsandAnswers = [];

    questions.forEach((actualQuestion, questionNumber)) function(){
    const answers = [];
    for(answerLetter in actualQuestion.answers){
        answers.push(
            `<label>
                <input type="radio" name="${questionNumber}" value="${answerLetter}">
                ${answerLetter} : ${actualQuestion.answers[answerLetter]}
            </label>
            `
            );
        }
    questionsandAnswers.push(
        `<div class="question"> ${actualQuestion.question} </div>
         <div class="answers"> ${answers.join('')} </div>        
        `
        );
    );

container.innerHTML = questionsandAnswers.join('');
}

showTest();
