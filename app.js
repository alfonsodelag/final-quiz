
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
        title : "Who created html?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "The html association",
                    "choice2" : "the FBI",
                    "choice3" : "The soviets",
                    "choice4" : "Humans"
                },

        ]
    },
    {
        title : "Which of these are tags of Html?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "option A",
                    "choice2" : "option B",
                    "choice3" : "option C",
                    "choice4" : "option D"
                },

        ]
    },
    {
        title : "How do you make a numbered list in html?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "option A",
                    "choice2" : "option B",
                    "choice3" : "option C",
                    "choice4" : "option D"
                },

        ]
    },
    {
        title : "What does html stand for?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "option A",
                    "choice2" : "option B",
                    "choice3" : "option C",
                    "choice4" : "option D"
                },

        ]
    },
    {
        title : "What does html stand for?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "option A",
                    "choice2" : "option B",
                    "choice3" : "option C",
                    "choice4" : "option D"
                },

        ]
    },
    {
        title : "What does html stand for?",
        type : "radio",
        option : 
        [
                { 
                    "choice1" : "option A",
                    "choice2" : "option B",
                    "choice3" : "option C",
                    "choice4" : "option D"
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



function saveName(){
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
}


function showName(){
    document.getElementById("userNameGeneral").innerHTML = localStorage.getItem("username");
}


    



