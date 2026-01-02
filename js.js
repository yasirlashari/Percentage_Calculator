document
  .getElementById("percentageForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const total = Number(document.getElementById("totalMarks").value);
    const obtained = Number(document.getElementById("obtainedMarks").value);

    if (total <= 0 || obtained < 0 || obtained > total) {
      alert("Please enter valid marks");
      return;
    }

    const percentage = ((obtained / total) * 100).toFixed(2);
    const percentageEl = document.getElementById("percentage");
    const gradeEl = document.getElementById("grade");

    percentageEl.innerText = percentage + "%";
    gradeEl.className = "";

    if (percentage >= 80) {
      gradeEl.innerText = "A1";
      gradeEl.classList.add("pass");
    } else if (percentage >= 60) {
      gradeEl.innerText = "A";
      gradeEl.classList.add("pass");
    } else if (percentage >= 40) {
      gradeEl.innerText = "B";
      gradeEl.classList.add("pass");
    } else {
      gradeEl.innerText = "FAIL";
      gradeEl.classList.add("fail");
    }
  });
