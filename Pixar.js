

const maxIdxPosition = 10;
/*---------------------------- Variables (state) ----------------------------*/
let total = 0;
let idxpostion = 0;

/*------------------------ Cached Element References ------------------------*/

let questionEl = document.querySelector("#question");
let choiceBtnEl = document.querySelectorAll(".choice");
let answerEl = document.querySelector("#answer");
let imgUrlEl = document.querySelector("img");

choiceBtnEl.disabled = true;

const choiceBtn1El = document.querySelector("#b1");
const choiceBtn2El = document.querySelector("#b2");
const choiceBtn3El = document.querySelector("#b3");
const choiceBtn4El = document.querySelector("#b4");
const nextQBtnEl = document.querySelector("#b5");

/*-------------------------------- Functions --------------------------------*/

const checkScore = (event) => {
  if (
    event.target.innerText === pixarMusicQuestions[idxpostion].correctAnswer &&
    pixarMusicQuestions[idxpostion].hasAnswered === false
  ) {
    total = total + 1;
    console.log("Correct");
    pixarMusicQuestions[idxpostion].hasAnswered = true;
    answerEl.textContent = `You are correct. Your score is ${total} /10`;
    choiceBtnEl.forEach((choice) => {
      choice.disabled = true;
    });
  }
  if (event.target.innerText !== pixarMusicQuestions[idxpostion].correctAnswer) {
    total = total;
    console.log("incorrect");
    pixarMusicQuestions[idxpostion].hasAnswered = true;
    answerEl.textContent = `Sorry, wrong. Your score is ${total} /10`;
    choiceBtnEl.forEach((choice) => {
      choice.disabled = true;
    });
  }
};

const answerReset = () => {
  answerEl.textContent = "Will you be correct?";
};

const nextQuestion = (event) => {
  if (
    idxpostion <= maxIdxPosition &&
    pixarMusicQuestions[idxpostion].hasAnswered === true
  ) {
    idxpostion = idxpostion + 1;
  }
  updateQuestions(idxpostion);
    answerReset();
    winStatement();
};

const winStatement = () => {
  const messages = [];
  if (idxpostion === 10 && pixarMusicQuestions[idxpostion].hasAnswered === true) {
    if (total >= 7) {
      messages.push("Congradulations you won");
      imgUrlEl.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6fVU8PTOLJHrZHJRhDa-JIyuNn2DoydMSw&s";
    } else {
      messages.push("You lose Maybe next time");
      answerEl.textContent = "Game Over";
      imgUrlEl.src =
        "https://t4.ftcdn.net/jpg/01/31/41/99/360_F_131419939_Uh5AUdnNOjGiVEpFgweSWogZMXBDuGwE.jpg";
    }
    messages.push(` Your final score: ${total}/10 \n`);
    messages.push("Refresh the page to try again");
    questionEl.textContent = messages.join("\n");
  }
};

const updateQuestions = (idx) => {
  let questions = pixarMusicQuestions[idx];

  questionEl.textContent = questions.question;

  choiceBtn1El.textContent = questions.possibleAnswers[0];

  imgUrlEl.src = questions.imgUrl;

  choiceBtn2El.textContent = questions.possibleAnswers[1];

  choiceBtn3El.textContent = questions.possibleAnswers[2];

  choiceBtn4El.textContent = questions.possibleAnswers[3];

  choiceBtnEl.forEach((choice) => {
    choice.disabled = false;
  });
};
updateQuestions(0);
/*----------------------------- Event Listeners -----------------------------*/

choiceBtnEl.forEach((choice, id) => {
  choice.addEventListener("click", checkScore);
});

nextQBtnEl.addEventListener("click", nextQuestion);

/*------------------------------- Comment Graveyard------------------------------------*/

// const pixarMusicQuestions = [
//   {
//     question: "What song played during this scene?",
//     imgUrl:
//       "https://insidethemagic.net/wp-content/uploads/2017/11/Screen-Shot-2017-11-30-at-1.05.39-PM.jpg",
//     possibleAnswers: [
//       "Un Poco Loco",
//       "La Llorona",
//       "Remember Me",
//       "The World Es Mi Familia",
//     ],
//     correctAnswer: "Un Poco Loco",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl: "https://i.ytimg.com/vi/mhcTZ9ahNEQ/maxresdefault.jpg",
//     possibleAnswers: [
//       "Wall Rat",
//       "Welcome to Gusteua's",
//       "Le Festin",
//       "Special Order",
//     ],
//     correctAnswer: "Le Festin",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl: "https://i.ytimg.com/vi/NiRIp_2524M/maxresdefault.jpg",
//     possibleAnswers: [
//       "Un Poco Loco",
//       "La Llorona",
//       "Remember Me",
//       "The World Es Mi Familia",
//     ],
//     correctAnswer: "Remember Me",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl:
//       "https://www.cornel1801.com/disney/Cars-Life-Is-a-Highway/life-s-like-a-road.jpg",
//     possibleAnswers: ["Real Gone", "Life is a Highway", "Route 66", "Our Town"],
//     correctAnswer: "Life is a Highway",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl:
//       "https://i.ytimg.com/vi/ZjbSKknc2rc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgUyg_MA8=&rs=AOn4CLDK_Z6hai5kpzHD5piKqWiRwZLLzw",
//     possibleAnswers: [
//       "You've Got a Friend in Me",
//       "Strange Things",
//       "Infinity and Beyond",
//       "Hang Together",
//     ],
//     correctAnswer: "You've Got a Friend in Me",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl:
//       "https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/68f13f0b-2022-43a3-a230-c975900fd27b/lava1.jpg",
//     possibleAnswers: ["Someone to Lava", "Lava Love", "I lava You", "Lava"],
//     correctAnswer: "Lava",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl: "https://i.ytimg.com/vi/iFErzbXQUhE/maxresdefault.jpg ",
//     possibleAnswers: [
//       "Fast Car",
//       "Vanellope Van Schweetz",
//       "Shut Up And Drive",
//       "Sugar Rush",
//     ],
//     correctAnswer: "Shut Up And Drive",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl: "https://i.ytimg.com/vi/J30zOA6YTsU/mqdefault.jpg",
//     possibleAnswers: [
//       "When She  Loved Me",
//       "Talk to Jessie",
//       "Jessie's In Trouble",
//       "Love Me",
//     ],
//     correctAnswer: "When She Loved Me",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl:
//       "https://miro.medium.com/v2/resize:fit:700/1*NWGvzdANSJrfpw741O4ZYw.jpeg",
//     possibleAnswers: [
//       "Sugar Rush",
//       "Candy Land",
//       "Sweet Stuff",
//       "Sugar and Gum Drops",
//     ],
//     correctAnswer: "Sugar Rush",
//     hasAnswered: false,
//   },
//   {
//     question: "What song played during this scene?",
//     imgUrl:
//       "https://static1.squarespace.com/static/55f84e6de4b052893a393717/55fe9052e4b00edfeab594f7/582b9a48cd0f6816126bc691/1714760348547/up_ellie_carl_mailbox.jpg?format=1500w",
//     possibleAnswers: [
//       "The Ellie Badge",
//       "Love in the Air",
//       "Married Life",
//       "Good Times",
//     ],
//     correctAnswer: "Married Life",
//     hasAnswered: false,
//   },
//   {
//     question: "You answered",
//     imgUrl: "",
//     possibleAnswers: [],
//     correctAnswer: "",
//     hasAnswered: true,
//   },
// ];