

const quiz1Key = []
const maxIdxPosition = 10


let total = 0
let idxpostion = 0



let questionEl = document.querySelector("#question")
let choiceBtnEl = document.querySelectorAll(".choice")
let answerEl = document.querySelector("#answer")
let imgUrlEl = document.querySelector("img")

choiceBtnEl.disabled = true

const choiceBtn1El = document.querySelector("#b1");
const choiceBtn2El = document.querySelector("#b2");
const choiceBtn3El = document.querySelector("#b3");
const choiceBtn4El = document.querySelector("#b4");
const nextQBtnEl = document.querySelector("#b5");



const checkScore = (event) => {
    if (event.target.innerText === kpopBoyGroupQuestions[idxpostion].correctAnswer && kpopBoyGroupQuestions[idxpostion].hasAnswered === false ) {
        total = total + 1;
        kpopBoyGroupQuestions[idxpostion].hasAnswered = true;
        answerEl.textContent = `You are correct. Your score is ${total} /10`; 
        choiceBtnEl.forEach(choice => {
            choice.disabled = true;
        })
    }  
    if (event.target.innerText !== kpopBoyGroupQuestions[idxpostion].correctAnswer) {
        total = total;
        kpopBoyGroupQuestions[idxpostion].hasAnswered = true;
        answerEl.textContent = `Sorry, wrong. Your score is ${total} /10`;
        choiceBtnEl.forEach((choice) => {
            choice.disabled = true;
        });
    } 
    }



const answerReset = () => {
    answerEl.textContent = "Will you be correct?"
}


const nextQuestion = (event) => {
    if (
        idxpostion <= maxIdxPosition && kpopBoyGroupQuestions[idxpostion].hasAnswered === true) {
        idxpostion = idxpostion + 1;
    } 
    updateQuestions(idxpostion)
    answerReset()
    winStatement()
}
const winStatement = () => {
    const messages = [];
    if (idxpostion === 10 && kpopBoyGroupQuestions[idxpostion].hasAnswered === true) {
        if (total >= 7) {
        messages.push("Congradulations you won");
        imgUrlEl.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6fVU8PTOLJHrZHJRhDa-JIyuNn2DoydMSw&s";
    } else {
        messages.push("You lose Maybe next time")
        answerEl.textContent = "Game Over";
        imgUrlEl.src =
        "https://t4.ftcdn.net/jpg/01/31/41/99/360_F_131419939_Uh5AUdnNOjGiVEpFgweSWogZMXBDuGwE.jpg";
    } messages.push(` Your final score: ${total}/10 \n`);
    messages.push("Refresh the page to try again");
    questionEl.textContent = messages.join("\n")
    }
}


const updateQuestions = (idx) => {
    let questions = kpopBoyGroupQuestions[idx];

    questionEl.textContent = questions.question;
    
    choiceBtn1El.textContent = questions.possibleAnswers[0];
    
    imgUrlEl.src = questions.imgUrl;

    choiceBtn2El.textContent = questions.possibleAnswers[1];

    choiceBtn3El.textContent = questions.possibleAnswers[2];

    choiceBtn4El.textContent = questions.possibleAnswers[3];

    choiceBtnEl.forEach((choice) => {
        choice.disabled = false;
    });
}
updateQuestions(0);




choiceBtnEl.forEach((choice, id) => {
    choice.addEventListener("click", checkScore)
})

nextQBtnEl.addEventListener("click", nextQuestion)