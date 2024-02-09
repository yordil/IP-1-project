document.addEventListener("DOMContentLoaded", function () {
  const questionForm = document.getElementById("questionForm");
  const questionInput = document.getElementById("questionInput");
  const questionsContainer = document.getElementById("questions");

  // Add submit event listener to the form
  questionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const question = questionInput.value.trim();
    if (question !== "") {
      addQuestion(question);
      questionInput.value = "";
    }
  });

  // Function to add a question to the questions container
  function addQuestion(question) {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `<strong>Q:</strong> ${question}`;

    const answerInput = document.createElement("input");
    answerInput.type = "text";
    answerInput.placeholder = "Type your answer";

    const answerButton = document.createElement("button");
    answerButton.textContent = "Answer";
    answerButton.onclick = function () {
      const answer = answerInput.value.trim();
      if (answer !== "") {
        addAnswer(questionElement, answer);
        answerInput.value = "";
      }
    };

    // Add event listener to answer input for handling Enter key press
    answerInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        answerButton.click(); // Manually trigger click event on the answer button
      }
    });

    questionElement.appendChild(answerInput);
    questionElement.appendChild(answerButton);

    questionsContainer.appendChild(questionElement);
  }

  // Function to add an answer to a question
  function addAnswer(questionElement, answer) {
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.innerHTML = `<strong>A:</strong> ${answer}`;
    questionElement.appendChild(answerElement);
  }

  // Add event listener to submit the form when Enter key is pressed
  questionInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      questionForm.dispatchEvent(new Event("submit"));
    }
  });
});
