let questions = [
    {
        title : "What is CSS?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "a tree",
                    "choice2" : "a dog",
                    "choice3" : "cascading stylesheet",
                    "choice4" : "a house",
                    "answer" : "cascading stylesheet" 

                },
        ]
    },
    {
        title : "What is CSS?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "a tree",
                    "choice2" : "a dog",
                    "choice3" : "cascading stylesheet",
                    "choice4" : "a house",
                    "answer" : "cascading stylesheet" 

                },
        ]
    },
    {
        title : "What is CSS?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "a tree",
                    "choice2" : "a dog",
                    "choice3" : "cascading stylesheet",
                    "choice4" : "a house",
                    "answer" : "cascading stylesheet" 

                },
        ]
    },
    {
        title : "What is CSS?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "a tree",
                    "choice2" : "a dog",
                    "choice3" : "cascading stylesheet",
                    "choice4" : "a house",
                    "answer" : "cascading stylesheet" 

                },
        ]
    },
    {
        title : "What is CSS?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "a tree",
                    "choice2" : "a dog",
                    "choice3" : "cascading stylesheet",
                    "choice4" : "a house",
                    "answer" : "cascading stylesheet" 

                },
        ]
    },
    {
        title : "What is CSS?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "a tree",
                    "choice2" : "a dog",
                    "choice3" : "cascading stylesheet",
                    "choice4" : "a house",
                    "answer" : "cascading stylesheet" 

                },
        ]
    },
    {
        title : "What is CSS?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "a tree",
                    "choice2" : "a dog",
                    "choice3" : "cascading stylesheet",
                    "choice4" : "a house",
                    "answer" : "cascading stylesheet" 

                },
        ]
    },
]

var i=0; 

var nextButton = document.getElementById( "nextButton" );
function mostrar(i){

document.getElementById("question").innerHTML = questions[i].title;
document.getElementById("choice1").innerHTML = questions[i].option[0].choice1;
document.getElementById("choice2").innerHTML = questions[i].option[0].choice2;
document.getElementById("choice3").innerHTML = questions[i].option[0].choice3;
document.getElementById("choice4").innerHTML = questions[i].option[0].choice4;



document.getElementById("choice1").checked = false; 
document.getElementById("choice2").checked = false; 
document.getElementById("choice3").checked = false; 
document.getElementById("choice4").checked = false; 

document.getElementById("0").value = questions[i].option[0].choice1;
document.getElementById("1").value = questions[i].option[0].choice2;
document.getElementById("2").value = questions[i].option[0].choice3;
document.getElementById("3").value = questions[i].option[0].choice4;

if(window.location.pathname == "/C:/Users/alfon/Desktop/final-quiz/final-quiz/html/cssquestions.html") {
    switch(i) {
        case 6:
        window.location.href="./javascriptquestions.html"
        break;
        default:
          // Well 
    }  
}

}
mostrar(i);

// function checkAnswer(){
//     const label = document.querySelectorAll(".label");
//     const radio = document.querySelectorAll(".a");
//     let count;
// //     for(i=0; i < 4; i++) {
// //         console.log(radio[i].checked)
// //     if(radio[i].checked == true) {
// //         console.log(questions[i].option[0].answer)
// //         console.log(label[i].value);
// //     if(label[i].value == questions[i].option[0].answer) {
// //         console.log(count);
// //     count++;
// //     console.log(count);
// //     }
// //     }
// //     }

// // }


// localStorage.setItem( "person", JSON.stringify ( questions ) );
var nextButton = document.getElementById( "nextButton" );
nextButton.onclick = function (){
    // checkAnswer();
    i++;
    mostrar(i);
    // checkAnswer();

var max = parseInt(meterHTML.getAttribute("max"));
var value = parseInt(meterHTML.getAttribute("value"));

    if ((value<max)) {
        value += 15;
        document.getElementById("meterHTML").value = value;
    }
}


for (let index = 0; index < 4; index++) {
    document.getElementById(index).onclick = function (){
        let inputsArray = document.querySelectorAll(".a")
            if (inputsArray[index].value == questions[index].option[0].answer ){
                console.log(inputsArray[index].value);
            }
        
    }
    
}



function saveName(){
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    // let rightanswer = document.getElementById("choice1")
}




