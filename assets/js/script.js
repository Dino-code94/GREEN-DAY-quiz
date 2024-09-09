const questions = [
    {
        question: "What is the longest Green Day song?",
        answers: [
            { text: "Homecoming", correct: true },
            { text: "Sassafras Roots", correct: false },
            { text: "Wake Me Up When September Ends", correct: false },
            { text: "21st Century Breakdown", correct: false },
        ]
    },
    {
        question: "What other name does the song Time Of Your Life go by?",
        answers: [
            { text: "Tight Wad Hill", correct: false },
            { text: "St. Jimmy", correct: false },
            { text: "Good Riddance", correct: true },
            { text: "Boulevard Of Broken Dreams", correct: false },
        ]
    },
    {
        question: "which of these 4 songs is not Green Day song?",
        answers: [
            { text: "Letterbomb", correct: false },
            { text: "A Little Boy Named Train", correct: false },
            { text: "American Eulogy: Mass Hysteria", correct: false },
            { text: "I Believe In A Thing Called Love", correct: true },
        ]
    },
    {
        question: "The song Rusty James is found on what album?",
        answers: [
            { text: "Shenanigans", correct: false },
            { text: "Nimrod", correct: false },
            { text: "¡Uno!", correct: true },
            { text: "Kerplunk", correct: false },
        ]
    },
    {
        question: "Which one of these songs did Mike Dirnt solely write?",
        answers: [
            { text: "Emenius Sleepus", correct: true },
            { text: "Graffitia", correct: false },
            { text: "Junkies On A High", correct: false },
            { text: "Wow! That's Loud", correct: false },
        ]
    },
    {
        question: "Name this song: Get my television fix sitting on my crucifix?",
        answers: [
            { text: "Holiday", correct: false },
            { text: "When I Come Around", correct: false },
            { text: "Church on Sunday", correct: false },
            { text: "Jesus Of Suburbia", correct: true },
        ]
    },
    {
        question: "What are Green Day fans called?",
        answers: [
            { text: "The Idiot Club", correct: false },
            { text: "Cast of American Idiot", correct: false },
            { text: "Idiot Nation", correct: true },
            { text: "Dickies", correct: false },
        ]
    },
    {
        question: "Who was Green Day's original drummer?",
        answers: [
            { text: "Tre Cool", correct: false },
            { text: "Jason Freese", correct: false },
            { text: "Jason White", correct: false },
            { text: "John Kiffmeyer", correct: true },
        ]
    },
    {
        question: "What is Green Day's first hit?",
        answers: [
            { text: "Who Wrote Holden Caulfield", correct: false },
            { text: "Longview", correct: true },
            { text: "Basket Case", correct: false },
            { text: "21 Guns", correct: false },
        ]
    },
    {
        question: "Which album was Green Day's first?",
        answers: [
            { text: "1,039/Smoothed Out Slappy Hours", correct: true },
            { text: "Saviours", correct: false },
            { text: "Warning", correct: false },
            { text: "Cigarettes and Valentines", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    
}
    
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    lenght}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.lenght) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.lenght) {
        handleNextButton();
    } else {
        startQuiz();
    }
});


startQuiz();







