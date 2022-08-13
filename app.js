var questions = [
  {
      question : "date today?",
      options: [
          "08" ,"09" , "31"
      ],
      correctAnswer:
      "09"
  },
  {
      question : "I am A ?",
      options: ["Person" , "human " , "muslim"],
      correctAnswer:  "muslim"
  
  },
  {
      question : "I am studying ?",
      options: ["software" , "Engineering" , "Programming"],
      correctAnswer: "Programming"
  
  },
  {
      question : "Why I'm Studying this",
      options: ["for fun", "i like coding" , "i love coding"],
      correctAnswer: "i like coding"
  
  },
  {
      question :"no question :) ", 
      options: ["good" , "great" ,"okay"],
      correctAnswer: "okay"
  
  },{
      question : " After all the wrong answers , Are you",
      options: ["Sad" , "upset"],
      correctAnswer: "upset"
  
  },
  ]
var question = document.getElementById("question");
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestions = document.getElementById("totalQuestions");
var answerParent = document.getElementById("answerParent");
var indexNumber = 0;
var score = 0;

function startQuiz() {
  question.innerHTML = questions[indexNumber].question;
  answerParent.innerHTML = "";
  for (var i = 0; i < questions[indexNumber].options.length; i++) {
    answerParent.innerHTML += `<div class="col-md-6 py-2">
    <button onClick = "checkQuestion('${questions[indexNumber].options[i]}',
   '${questions[indexNumber].correctAnswer}')" class="btn w-100 btn-info">
    ${questions[indexNumber].options[i]}</button>
    </div>`;
  }
  totalQuestions.innerHTML = questions.length;
  currentQuestion.innerHTML = indexNumber + 1;
}
startQuiz();

function nextQuestion() {
  if (indexNumber == questions.length - 1) {
    alert("quiz complete");
  } else {
    indexNumber = indexNumber + 1;
    startQuiz();
  }
}

function checkQuestion(elem, correctOption) {
  console.log(elem, correctOption, elem == correctOption)

  if (elem == correctOption) {
    score = score + 1;
  }


  console.log(score);

  var allOptionBtns = answerParent.getElementsByTagName("button");
  for (let i = 0; i < allOptionBtns.length; i++) {
    console.log(allOptionBtns[i].innerText == correctOption, `===>Correct`)
    allOptionBtns[i].disabled = true;
    if (allOptionBtns[i].innerText == correctOption) {
      allOptionBtns[i].className += " bg-success text-light";
    } else {
      allOptionBtns[i].className += " bg-danger text-light";
    }
  }
}