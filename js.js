const startButton = document.querySelector(".start-btn");

const nextButton = document.querySelector(".next-btn");


const questionContainer = document.querySelector(".hide");

const questionElement = document.querySelector(".questions");

const answerButtonsElement = document.querySelector(".btn-grid");

const tittle = document.querySelector(".quiz");

let shuffledQuestions, currentQuestionIndex ;

tittle.classList.add("naslov")

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    
    currentQuestionIndex ++
    setNextQuestion()
    
})

function startGame() {
    
    console.log("Started")
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide")
    shuffledQuestions = questions.sort(() => Math.random - .5 )
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
}

function showQuestion(question) {
    
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        
    const button = document.createElement("button") 
    button.innerText = answer.text
    button.classList.add("btn")
    
        if (answer.correct){
            
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    
    clearStatusClass(document.body)
    
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        
    }
}

function selectAnswer(e) {
    
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        
            nextButton.classList.remove("hide")

    }
    else {
        
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    }

    

function setStatusClass (element, correct) {
    
    clearStatusClass(element)
    
    if (correct) {
        
        element.classList.add("correct")
    }
    else {
        
        element.classList.add("wrong")
    }
}

function clearStatusClass (element) {
    
            element.classList.remove("correct")
            element.classList.remove("wrong")
}    

   const questions = [

    {
        question: "What is 60 + 3",
        answers: [
        {text: "63", correct: true},
        {text: "52", correct: false}
         
        ]
         
    },
       {
        question: "What is 7 * 9",
        answers: [
        {text: "49", correct: false},
        {text: "63", correct: true}
         
        ]
         
    },
       {
        question: "What is 250 / 10",
        answers: [
        {text: "25", correct: true},
        {text: "10", correct: false}
         
        ]
         
    },
       {
        question: "What is 999 - 666",
        answers: [
        {text: "333", correct: true},
        {text: "369", correct: false}
         
        ]
         
    },

]

    


