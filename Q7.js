const prizes = [
    "7 CRORE", "1 CRORE", "₹50,00,000", "₹25,00,000", "₹12,50,000",
    "₹6,40,000", "₹3,20,000", "₹1,60,000", "₹80,000", "₹40,000",
    "₹20,000", "₹10,000", "₹5,000", "₹3,000", "₹2,000", "₹1,000"
];

// Correct answers for each question
const questions = [
    { question: "Which is the longest river in the world?", correct: "B", nextPage: "Q8.html" },];

let currentQuestion = prizes.length - 7; // Start at ₹1,000 (last index)
let currentQuestionIndex = 0; // Tracks current question in the questions array
let countdown = 60; // Timer in seconds
let timerInterval;

updatePrizeList();
startCountdown();

function selectOption(option, chosenAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (confirm("Lock kar diya jaye?")) {
        clearInterval(timerInterval); 
        if (chosenAnswer === correctAnswer) {
            increasePrizeLevel();
            window.location.href = questions[currentQuestionIndex].nextPage;
        } else {
            window.location.href = "gameover.html";
        }
    }
}

function increasePrizeLevel() {
    if (currentQuestion > 0) {
        currentQuestion--; 
    }
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++; 
    }
    updatePrizeList();
}

function updatePrizeList() {
    const prizeList = document.getElementById("prizeList");
    prizeList.innerHTML = "";

    let start = Math.max(0, currentQuestion - 2);
    let end = Math.min(prizes.length - 1, currentQuestion + 2);

    for (let i = start; i <= end; i++) {
        let li = document.createElement("li");
        li.textContent = prizes[i];

        if (i === currentQuestion) {
            li.classList.add("active");
        }

        prizeList.appendChild(li);
    }
}

// Timer countdown function
function startCountdown() {
    const timerElement = document.createElement("div");
    timerElement.id = "countdownTimer";
    timerElement.classList.add("timer-box");

    // Append timer to the quiz-container
    document.querySelector(".quiz-container").appendChild(timerElement);

    timerInterval = setInterval(() => {
        timerElement.textContent = `${countdown}`;
        countdown--;

        if (countdown < 0) {
            clearInterval(timerInterval);
            window.location.href = "gameover.html";
        }
    }, 1000);
}

$(document).ready(function() {
    $("#hintButton").click(function() {
        let correctOption = $(".option.correct");
        
        correctOption.addClass("highlight");

        setTimeout(function() {
            correctOption.removeClass("highlight");
        }, 500);

        $(this).remove();
    });
});

function quitGame() {
    window.location.href = "Quit.html"; // Redirects to Quit.html
}