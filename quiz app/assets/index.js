const quizDB=[
    {
    question:"What is the full form of Html?",
    a:"Hello to my landescape",
    b:"Hyrper text markup language",
    c:"hyper text mega language",
    d:"how to make language",
    ans:"ans2",
    },
    {
        question:"What is the full form of css?",
        a:"cascading style sheet",
       b:" catagorical style sheet",
       c:"computer style sheet",
       d:"commerce style sheet",
       ans:"ans1",

    },
    {
        question:"what is the full form of Http?",
        a:"Hyper text transfer product",
        b:"Hypertext test protocol",
        c:"hey transfer protocol",
        d:"hyper text transfer protocol",
        ans:"ans4",
    },
    {
        question:"what is the fullform of javascript?",
        a:"javascript",
        b:"jassyscript",
        c:"jova script",
        d:"jammiescript",
        ans:"ans4",
    }
];


const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers =document.querySelectorAll('.answer');
const showScore =document.querySelector('#showscore')


let questionCount=0;
let score=0;

const loadQuestion = ()=> {
    const questionlist = quizDB[questionCount];
    question.innerText = questionlist.question;
    option1 . innerText = questionlist.a;
    option2 . innerText = questionlist.b;
    option3 . innerText = questionlist.c;
     option4 . innerText = questionlist.d;

    
}
loadQuestion();

const getCheckAnswer= ()=>{
    let answer;
    answers. forEach((curAnsElem)=>{
if(curAnsElem.checked){
    answer=curAnsElem.id;
}

    });
    return answer;
};

const deselectAll=()=>{
    answers.forEach((curAnsElem)=>curAnsElem.checked=false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount <quizDB.length){
        loadQuestion()
    }else{
        showScore.innerHTML =`                       
        <h3>your scored ${score}/${quizDB.length}<h3>
        <button class="btn" onclick="location.reload()">start Again</button>
        `;
        showScore.classList.remove('scorearea');
    }
});

























