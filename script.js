const quiz = [

{
question:"What does HTML stand for?",
answers:[
"Hyper Text Markup Language",
"Home Tool Markup Language",
"Hyperlinks Text Markup Language",
"Hyper Transfer Markup Language"
],
correct:0
},

{
question:"Which language is used for styling web pages?",
answers:[
"HTML",
"Python",
"CSS",
"Java"
],
correct:2
},

{
question:"Which keyword is used to declare a variable in JavaScript?",
answers:[
"int",
"var",
"string",
"float"
],
correct:1
},

{
question:"Which company developed JavaScript?",
answers:[
"Google",
"Microsoft",
"Netscape",
"Apple"
],
correct:2
},

{
question:"Which symbol is used for comments in JavaScript?",
answers:[
"//",
"<!-- -->",
"#",
"**"
],
correct:0
}

];

// Shuffle Questions
quiz.sort(() => Math.random() - 0.5);

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreText = document.getElementById("score");

function loadQuestion(){

    answers.innerHTML = "";

    let q = quiz[currentQuestion];

    question.innerHTML = q.question;

    q.answers.forEach((answer,index)=>{

        let button = document.createElement("button");

        button.innerHTML = answer;

        button.className = "option";

        button.onclick = function(){

            let allButtons = answers.querySelectorAll(".option");

            allButtons.forEach(btn => btn.disabled = true);

            if(index === q.correct){

                score++;

                button.style.background = "green";
                button.style.color = "white";

            }
            else{

                button.style.background = "red";
                button.style.color = "white";

                allButtons[q.correct].style.background = "green";
                allButtons[q.correct].style.color = "white";
            }

            nextBtn.style.display = "block";

        };

        answers.appendChild(button);

    });

    nextBtn.style.display = "none";

}

nextBtn.onclick = function(){

    currentQuestion++;

    if(currentQuestion < quiz.length){

        loadQuestion();

    }
    else{

        question.innerHTML = "🎉 Quiz Completed!";

        answers.innerHTML = "";

        nextBtn.style.display = "none";

        scoreText.innerHTML =
        "Your Score : " + score + " / " + quiz.length;

    }

};

loadQuestion();