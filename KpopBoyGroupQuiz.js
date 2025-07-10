/*-------------------------------- Constants --------------------------------*/
const quiz1Questions = [
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://thebiaslist.com/wp-content/uploads/2025/06/stray-kids-hollow.jpg",
    possibleAnswers: ["SF9", "Stray Kids", "Ateez", "BTS"],
    correctAnswer: "Stray Kids",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgE4nqeaO3VhdOVG0AuxHfRlS4ZS6GNsERz9xzy3USDqO_EJaJLGHAapp1PyZ9r6HhIHYUe_C5tx6N7ZH4jzEQ48pnfXykkDSTXBBNnUDCBIF840DdE8DUll05Xj4274o3YwbQ-mhdElMoH/s640/shinee.jpg",
    possibleAnswers: ["BTOB", "IKON", "NCT", "SHINee"],
    correctAnswer: "SHINee",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://dailynexus.s3.us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2022/09/22150717/kpop-draft-1.jpg",
    possibleAnswers: ["TXT", "Stray Kids", "Seventeen", "Ateez"],
    correctAnswer: "Seventeen",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://kpopreviewed.com/wp-content/uploads/2017/03/btobfeelem.jpg",
    possibleAnswers: ["BTOB", "SHINee", "SF9", "MonstaX"],
    correctAnswer: "BTOB",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://images.squarespace-cdn.com/content/v1/56eb012f27d4bd29de975fae/1632602667384-6BGZ7CZ4CSHGH4KWBRX2/HIST_ATEEZ_Header.jpg?format=1500w",
    possibleAnswers: ["Ateez", "IKON", "SF9", "MonstaX"],
    correctAnswer: "Ateez",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl: "https://i.scdn.co/image/ab67616d0000b273af097df559ed0fa3819705d5",
    possibleAnswers: ["BTS", "MonstaX", "SF9", "Stray Kids"],
    correctAnswer: "SF9",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/bts.png",
    possibleAnswers: ["Ateez", "SHINee", "EXO", "BTS"],
    correctAnswer: "BTS",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://i0.wp.com/ulzza.com/wp-content/uploads/2019/07/iKONs-First-Public-Appearance-As-A-6-Member-Group.jpg?w=700&ssl=1",
    possibleAnswers: ["SF9", "IKON", "Seventeen", "MonsterX"],
    correctAnswer: "IKON",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://pm1.aminoapps.com/7048/67445bd683e0f134c2e5f3e48b947f86f5cc94e3r1-720-400v2_hq.jpg",
    possibleAnswers: ["Enhypen", "SHINee", "SF9", "NCT"],
    correctAnswer: "NCT",
    hasAnswered: false,
  },
  {
    question: "What is the name of this group?",
    imgUrl:
      "https://c.ndtvimg.com/2024-11/iq7ctal8_txt_625x300_18_November_24.jpg?downsize=773:435",
    possibleAnswers: ["BTOB", "SHINee", "TXT", "The Boyz"],
    correctAnswer: "TXT",
    hasAnswered: false,
  },
  {
    question: "You answered",
    imgUrl:"",
    possibleAnswers: [],
    correctAnswer: "",
    hasAnswered: true,
  },
];

const quiz1Key = []
const maxIdxPosition = 10
/*---------------------------- Variables (state) ----------------------------*/
let total = 0
let idxpostion = 0

/*------------------------ Cached Element References ------------------------*/

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

/*-------------------------------- Functions --------------------------------*/


const checkScore = (event) => {
    if (event.target.innerText === quiz1Questions[idxpostion].correctAnswer && quiz1Questions[idxpostion].hasAnswered === false ) {
        total = total + 1;
        console.log("Correct")
        quiz1Questions[idxpostion].hasAnswered = true;
        answerEl.textContent = `You are correct. Your score is ${total} /10`; 
        choiceBtnEl.forEach(choice => {
            choice.disabled = true;
        })
    }  
    if (event.target.innerText !== quiz1Questions[idxpostion].correctAnswer) {
        total = total;
        console.log("incorrect")
        quiz1Questions[idxpostion].hasAnswered = true;
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
        idxpostion <= maxIdxPosition && quiz1Questions[idxpostion].hasAnswered === true) {
        idxpostion = idxpostion + 1;
    } 
    updateQuestions(idxpostion)
  answerReset()
  winStatement()
}
const winStatement = () => {
  const messages = [];
  if (idxpostion === 10 && quiz1Questions[idxpostion].hasAnswered === true) {
    if (total >= 7) {
      messages.push("Congradulations you won");
      imgUrlEl.scr =
        "https://t3.ftcdn.net/jpg/03/12/81/58/360_F_312815843_CdVm05kiBenU3YmChP1KRIzcblRgTQFV.jpg";
      answerEl.textContent = "Game Over";
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
    let questions = quiz1Questions[idx];

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


/*----------------------------- Event Listeners -----------------------------*/

choiceBtnEl.forEach((choice, id) => {
    choice.addEventListener("click", checkScore)
})

nextQBtnEl.addEventListener("click", nextQuestion)


/*----------------------------- Comment Graveyard -----------------------------*/


// const answerReset = () => {
//   if (idxpostion === maxIdxPosition) {
//       answerEl.textContent = "Will you be correct?"
//   } else if (idxpostion > maxIdxPosition) {
//     answerEl.textContent = "Game Over";
//   } else {
//     answerEl.textContent = "Error";
//   }
//   }

// render shows the final score. Seperate page or within the quiz page???
// init/ chose the quiz button

// total >= 7
// //   ) {
//     imgUrlEl.textContent =
//       "https://t3.ftcdn.net/jpg/03/12/81/58/360_F_312815843_CdVm05kiBenU3YmChP1KRIzcblRgTQFV.jpg";
// //   } else {
//     imgUrlEl.textContent =
//       "https://t4.ftcdn.net/jpg/01/31/41/99/360_F_131419939_Uh5AUdnNOjGiVEpFgweSWogZMXBDuGwE.jpg";
// //   }

    // const winStatement = () => {
    //   if (idxpostion === 10 && hasAnswered === true && total >= 7) {
    //     questionEl.textContent = "Congradulations. You win!";
    //   } else (idxpostion === 10 && hasAnswered === true && total < 7) {
    //     questionEl.textContent = "You lose! Maybe next time";
    //   } winStatement()
    // };

//if statement with boolean value: answer if // if (quiz1Questions[idxpostion].hasAnswered === false) {

// console.log(quiz1Questions[idxpostion].hasAnswered)
// quiz1Questions[idxpostion].hasAnswered = true
// console.log(quiz1Questions[idxpostion].hasAnswered);

// Needs for homepage, quiz button, init function?, HTML???

//if possible answer === correct answer then total = total + 1

// console.log(quiz1Questions[0].correctAnswer)