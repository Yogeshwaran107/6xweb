
const questions=[
  
    {
        question: "In what country was Elon Musk born ?",
        answers:[
            {text:"India" ,correct:false},
            {text:"South Africa",correct:true},
            {text:"usa",correct:false},
            {text:"canada",correct:false},

            
        ]
    },
    {
        question: "What planet is closest to the sun ?",
        answers:[
            {text:"Mercury" ,correct:true},
            {text:"Saturn",correct:false},
            {text:"Mars",correct:false},
            {text:"Earth",correct:false},

            
        ]
    },
    {
        question: "What does FIFA stand for in English ?",
        answers:[
            {text:"International Federation of Associate Football" ,correct:false},
            {text:"World Federation of Association Football",correct:false},
            {text:"International Federation of  Football club",correct:false},
            {text:"International Federation of Association Football",correct:true},

            
        ]
    },
    {
        question: "In ipl mumbai, chennai and rcb trophy count?",
        answers:[
            {text:"5,5,0" ,correct:true},
            {text:"5,5,5",correct:false},
            {text:"6,5,0",correct:false},
            {text:"5,6,5",correct:false},

            
        ]
    },
    {
        question: "what is price range of apple vision pro in india and usa?",
        answers:[
            {text:"300000-400000" ,correct:false},
            {text:"300000-800000",correct:false},
            {text:"200000-300000",correct:false},
            {text:"300000-500000",correct:true},

            
        ]
    }


]

const questionelement =document.getElementById("question")
const answerbutton=document.getElementById("answer-buttons")
const nextbutton=document.getElementById("next-btn")


let currentquestionindex=0;
let score=0;

function startquiz()
{
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}
function showquestion()
{
    reset();
    nextbutton.style.display="none"
    let currentquestion=questions[currentquestionindex];
    let  questionno=currentquestionindex+1;
    questionelement.innerHTML=questionno+". "+currentquestion.question;
    console.log( questionelement)
    
    currentquestion.answers.forEach((answer) =>{
     const button=document.createElement("button");
     button.innerHTML=answer.text;
     button.classList.add('btn');
     answerbutton.appendChild(button);
     button.dataset.correct=answer.correct;
     button.addEventListener("click",selectanswer)
    })

}

function reset()
{
    while(answerbutton.firstChild)
    {
        answerbutton.firstChild.remove();
    }
}

function selectanswer(event)
{
    const selectedbut=event.target;
    console.log(selectedbut.textContent)
    const iscorrect=selectedbut.dataset.correct==="true";
    console.log(selectedbut.dataset.correct);

    if(iscorrect)
    {
        selectedbut.classList.add("correct");
        score=score+10;
       
    }
    else{
        selectedbut.classList.add("wrong");
       
    }
    
        Array.from(answerbutton.children).forEach(button => {
            if(button.dataset.correct==="true")
            {
                button.classList.add("correct");
            }
            button.disabled=true;
            
        });

    
    nextbutton.style.display="block";
    


}
function handlenextbutton()
{
    currentquestionindex++;
    if(currentquestionindex<questions.length)
    {
        showquestion();
    }
    else
    {
        showscore();
    }
    
}
function showscore()
{
   reset();
   questionelement.innerHTML=`you scored ${score} out of ${questions.length*10}`
   nextbutton.innerHTML="Play Again";

}


nextbutton.addEventListener("click",()=>{
    if(currentquestionindex<questions.length)
    {
        handlenextbutton();
    }
    else{
        startquiz();
    }
})
startquiz();
