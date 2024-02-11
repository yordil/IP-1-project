function calculateScore() {
  const correctAnswers = {
    q1: "D",
    q2: "B",
    q3: "C",
    q4: "A",
    q5: "B",
    q6: "C",
    q7: "A",
    q8: "C",
    q9: "B",
    q10: "D",
    q11: "A",
    q12: "C",
    q13: "D",
    q14: "B",
    q15: "D",
  };

  let score = 0;

  // Loop through each question
  for (let i = 1; i <= 15; i++) {
    const questionId = "q" + i;
    const selectedAnswer = document.querySelector(
      `input[name=${questionId}]:checked`
    );
    if (selectedAnswer && selectedAnswer.value === correctAnswers[questionId]) {
      score++; // Increment the score if the answer is correct
    }
  }
  // Display the score
  const Score = document.querySelector(".score");
  Score.textContent = `Your score is: ${score}/15`;
  // alert(`Your score is: ${score}/15`);
  const answerDiv = document.getElementById("answer");
  if (answerDiv.style.display === "none") {
    answerDiv.style.display = "block";
  } else {
    answerDiv.style.display = "none";
  }
}
