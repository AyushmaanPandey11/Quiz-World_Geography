
const Questions = [{
	q: "What is Name of the Strait between India and Sri Lanka?",
	a: [{ text: "Palk Strait", isCorrect: true },
	{ text: "Macca Strait", isCorrect: false },
	{ text: "Hormuz Strait", isCorrect: false },
	{ text: "Strain of Malacca", isCorrect: false }
	]

},
{
	q: "What is the capital of Thailand?",
	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "Where is APJ Abdul Kalam Island",
	a: [{ text: "Bihar", isCorrect: false },
	{ text: "UP", isCorrect: false },
	{ text: "Odisha", isCorrect: true },
	{ text: "Kerala", isCorrect: false }
	]

}
,
{
    q: "What is the capital of France?",
    a: [
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
      { text: "Rome", isCorrect: false },
      { text: "Paris", isCorrect: true }
    ]
  },
  {
    q: "Which continent is home to the Amazon Rainforest?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "South America", isCorrect: true },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Great Victoria Lake?",
    a: [
      { text: "Africa", isCorrect: true },
      { text: "Asia", isCorrect: false },
      { text: "South America", isCorrect: false },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which Strait is between Spain and Morocco?",
    a: [{ text: "Palk Strait", isCorrect: false },
	{ text: "Macca Strait", isCorrect: false },
	{ text: "Hormuz Strait", isCorrect: false },
	{ text: "Strain of Gibraltar", isCorrect: true }
	]
  },
  {
    q: "Which continent is home to the Grand Canyon?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "North America", isCorrect: true },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is near to the Tanzania?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "South America", isCorrect: true },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Sunderban Delta?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: true },
      { text: "South America", isCorrect: false },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Panama Canal?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "South America", isCorrect: true },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Great wall of China?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: true },
      { text: "South America", isCorrect: false },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Mediterranean Sea?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "Europe", isCorrect: true },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Mount Khilimanjaro?",
    a: [
      { text: "Africa", isCorrect: true },
      { text: "Asia", isCorrect: false },
      { text: "South America", isCorrect: false },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Scandavanians?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "Europe", isCorrect: true },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the River of Moskva?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: true },
      { text: "America", isCorrect: false },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Rive of Nile?",
    a: [
      { text: "Africa", isCorrect: true },
      { text: "Asia", isCorrect: false },
      { text: "South America", isCorrect: false },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is Southermost in Earth?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "Antartica", isCorrect: true },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Colliesum?",
    a: [
      { text: "Africa", isCorrect: false },
      { text: "Asia", isCorrect: false },
      { text: "Europe", isCorrect: true },
      { text: "Australia", isCorrect: false }
    ]
  },
  {
    q: "Which continent is home to the Sahara Dessert?",
    a: [
      { text: "Africa", isCorrect: true },
      { text: "Asia", isCorrect: false },
      { text: "South America", isCorrect: false },
      { text: "Australia", isCorrect: false }
    ]
  },

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
