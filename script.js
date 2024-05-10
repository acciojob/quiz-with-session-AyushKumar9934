//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
// const questions = [
//   {
//     question: "What is the capital of France?",
//     choices: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Paris",
//   },
//   {
//     question: "What is the highest mountain in the world?",
//     choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
//     answer: "Everest",
//   },
//   {
//     question: "What is the largest country by area?",
//     choices: ["Russia", "China", "Canada", "United States"],
//     answer: "Russia",
//   },
//   {
//     question: "Which is the largest planet in our solar system?",
//     choices: ["Earth", "Jupiter", "Mars"],
//     answer: "Jupiter",
//   },
//   {
//     question: "What is the capital of Canada?",
//     choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
//     answer: "Ottawa",
//   },
// ];

// // Display the quiz questions and choices
// function renderQuestions() {
//   for (let i = 0; i < questions.length; i++) {
//     const question = questions[i];
//     const questionElement = document.createElement("div");
//     const questionText = document.createTextNode(question.question);
//     questionElement.appendChild(questionText);
//     for (let j = 0; j < question.choices.length; j++) {
//       const choice = question.choices[j];
//       const choiceElement = document.createElement("input");
//       choiceElement.setAttribute("type", "radio");
//       choiceElement.setAttribute("name", `question-${i}`);
//       choiceElement.setAttribute("value", choice);
//       if (userAnswers[i] === choice) {
//         choiceElement.setAttribute("checked", true);
//       }
//       const choiceText = document.createTextNode(choice);
//       questionElement.appendChild(choiceElement);
//       questionElement.appendChild(choiceText);
//     }
//     questionsElement.appendChild(questionElement);
//   }
// }
// renderQuestions();


const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "What is the highest mountain in the world?",
      choices: ["Everest", "Kilimanjaro", "Denali", "Matterhorn"],
      answer: "Everest",
    },
    {
      question: "What is the largest country by area?",
      choices: ["Russia", "China", "Canada", "United States"],
      answer: "Russia",
    },
    {
      question: "Which is the largest planet in our solar system?",
      choices: ["Earth", "Jupiter", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "What is the capital of Canada?",
      choices: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
      answer: "Ottawa",
    },
  ];
  
  // Display the quiz questions and choices
  let userAnswer=[];
  let saveProgress=sessionStorage.getItem("progress");
  if(saveProgress){
    userAnswer=JSON.parse(saveProgress);

  }
  
  function renderQuestions() {
    console.log("we are inside the renderquestion")
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i]; 
      const questionElement = document.createElement("div");
      const questionText = document.createTextNode(question.question);
      questionElement.appendChild(questionText);
      for (let j = 0; j < question.choices.length; j++) {
        const choice = question.choices[j];
        const choiceElement = document.createElement("input");
        choiceElement.setAttribute("type", "radio");
        choiceElement.setAttribute("name", `question-${i}`);
        choiceElement.setAttribute("value", choice);
        if (userAnswer[i] === choice) {
          choiceElement.setAttribute("checked", true);
        }
        const choiceText = document.createTextNode(choice);
        
        questionElement.appendChild(choiceElement);
        
        questionElement.appendChild(choiceText);
        choiceElement.addEventListener('click',function(){
          userAnswer[i]=choice;
          sessionStorage.setItem("progress",JSON.stringify(userAnswer));
      })
      }
     
      document.getElementById("questions").appendChild(questionElement);
    }
  }
  
  document.getElementById("submit").addEventListener('click',calScore);
  let scoreElement=document.createElement('div');
  document.body.appendChild(scoreElement);
  function calScore(){
    let score=0;
    for(let i=0;i<questions.length;i++){
      if(questions[i].answer==userAnswer[i])
        score++;
    }
    localStorage.setItem("score",score);
    
    scoreElement.textContent=`Your score is ${score} out of 5.`
    
  }
  
  renderQuestions();
 