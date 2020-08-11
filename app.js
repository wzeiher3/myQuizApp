/**
 * Example store structure
 */
 let counter = 0;
 let qNum = 1;
 let correct = 0;
 let incorrect = 0;
 const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'The sky is blue',
      answers: [
       'yes', 
       'no'
      ],
      correctAnswer: 'true'
    },
    {
      question: 'Javascript is super easy',
      answers: [
        'yes', 
        'no'
      ],
      correctAnswer: 'false'
    }, 
    {
      question: 'Thinkful is cool',
      answers: [
        'yes', 
        'no'
      ],
      correctAnswer: 'true'
    }

  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * https://github.com/musicMan1337/myQuizApp.git
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function renderQuestion(){
  if(store.quizStarted)  
    $('.question').html(store.questions[counter].question);
    //console.log(store.questions[0].question);
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function submitAnswer(){
    $('main').on('click', '#submit', function(event){
      event.preventDefault();
      let answer = 'default';
      if(document.getElementById('true').checked)
          answer = document.getElementById('true').value;
      else if(document.getElementById('false').checked)
          answer = document.getElementById('false').value;
      else  
          answer = 'still default';
      console.log(answer);
      if(store.questions[counter].correctAnswer == answer)
      {
        correct++;
        alert("You are right!");
      }
      else{
        incorrect++;
        alert("You are wrong!");
      }
      
      counter++;
      store.questionNumber++;
      $('.question-number').html(`<h2 class="question-number">Question: ${store.questionNumber}</h2>`);
      $('.correct-counter').html(`<h3 class="correct-counter">Correct: ${correct}</h3>`);
      $('.wrong-counter').html(`<h3 class="wrong-counter">Incorrect: ${incorrect}</h3>`);
      renderQuestion();
    })
}

function startQuiz(){
  $('#start-button-div').on('click', '#start-button', function(event){
    event.preventDefault();
    store.questionNumber++;
    store.quizStarted = true;
    renderQuestion();
  });
}

function handleQuestions() {
  startQuiz();
  renderQuestion();
  submitAnswer();
}

$(handleQuestions);
