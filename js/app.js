
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
                    "choice4" : "HyperTextual Markup Languages"
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
                    "choice4" : "numbered list"
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
                    "choice4" : "section"
                },

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
                    "choice4" : "title"
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
                    "choice4" : "list"
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
                    "choice4" : "break"
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
                    "choice4" : "paint"
                },

        ]
    },
]

var i=0; 
function mostrar(index){

document.getElementById("question").innerHTML = questions[index].title;
document.getElementById("choice1").innerHTML = questions[index].option[0].choice1;
document.getElementById("choice2").innerHTML = questions[index].option[0].choice2;
document.getElementById("choice3").innerHTML = questions[index].option[0].choice3;
document.getElementById("choice4").innerHTML = questions[index].option[0].choice4;

}

mostrar(i);

// localStorage.setItem( "person", JSON.stringify ( questions ) );
var nextButton = document.getElementById( "nextButton" );
nextButton.onclick = function(){
    i++;
    console.log(i);
    mostrar(i);
}

// var meterHTML = document.getElementById("meterHTML");
// var max = parseInt(meterHTML.getAttribute("max"));
// var value = parseInt(meterHTML.getAttribute("value"));
// var next = document.getElementById("nextButton");
// next.onclick = function(){
//     if ((value<max)) {
//         value += 10;
//         document.getElementById("meterHTML").value = value;
//         console.log(value);
//     } 
// }


// function checked(){
//     for (let index = 0; index < arrayInput.length; index++) {
//         if (arrayInput[index].checked == true){
//             console.log(arrayInput[index].value);
//         }
//     }
// }

// checked();


function saveName(){
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    // let rightanswer = document.getElementById("choice1")
}


function showName(){
    document.getElementById("userNameGeneral").innerHTML = localStorage.getItem("username");
}

function checkAnswer(){
    // let rightanswer = document.getElementById("choice1");
}




