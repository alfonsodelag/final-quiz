let questions = [
    {
        title : "What does html stand for?",
        type : "radio",
        option : 
        [
            { 
                    "choice1" : "HyperText Markup Language", 
                    "choice2" : "HyperLink Markup Language",
                    "choice3" : "HyperTransfer Markup Language",
                    "choice4" : "HyperTextual Markup Languages",
                    "answer" : "HyperText Markup Language"                  
            }, 
        ]
    },
    {
        title : "What tag do you use to create a numbered list?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "ul",
                    "choice2" : "ol",
                    "choice3" : "list",
                    "choice4" : "numbered list",
                    "answer" : "ol"  
                },

        ]
    },
    {
        title : "Which of these is a real tag of Html?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "b",
                    "choice2" : "create",
                    "choice3" : "simplify",
                    "choice4" : "section",
                    "answer" : "section" 
                }
        ]
    },
    {
        title : "Which tag defines the title of a document?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "head",
                    "choice2" : "meta",
                    "choice3" : "h1",
                    "choice4" : "title",
                    "answer" : "title" 
                },

        ]
    },
    {
        title : "What tag do you use to create a bulleted list in Html??",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "ol",
                    "choice2" : "ul",
                    "choice3" : "bullet",
                    "choice4" : "list",
                    "answer" : "ul" 
                },

        ]
    },
    {
        title : "What is the correct html tag for inserting a line break",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "br",
                    "choice2" : "rr",
                    "choice3" : "lb",
                    "choice4" : "break",
                    "answer" : "br" 


                },

        ]
    },
    {
        title : "What is the correct tag to insert an image?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "img",
                    "choice2" : "image",
                    "choice3" : "insert",
                    "choice4" : "paint",
                    "answer" : "img" 

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

if(window.location.pathname == "/C:/Users/alfon/Desktop/final-quiz/final-quiz/html/javascriptquestions.html") {
    switch(i) {
        case 5:
        window.location.href="./ranking.html"
        break;
        default:
          // Well 
    }
    console.log(mostrar);  
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




