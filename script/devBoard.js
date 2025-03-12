document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();

  let completedButtons = document.querySelectorAll(".completed-btn");

  let taskAssignedElement = document.getElementById("taskAssigned");
  let navbarCountElement = document.getElementById("navbarCount");

  let activityLog = document.getElementById("activityLog");
  let clearHistoryButton = document.getElementById("clearHistory");
  let discoverButton = document.getElementById("discoverButton");
  let totalTasks = completedButtons.length;
  let colorChangeBtn = document.getElementById("colorChangeBtn");

  let colors = [
    "#F0F8FF",
    "#FAEBD7",
    "#FFD700",
    "#ADD8E6",
    "#90EE90",
    "#FFB6C1",
    "#D3D3D3",
  ];
  let colorIndex = 0;

  completedButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Board Updated Successfully");

      let taskAssigned = parseInt(taskAssignedElement.textContent);
      let navbarCount = parseInt(navbarCountElement.textContent);

      if (taskAssigned > 0) {
        taskAssignedElement.textContent = taskAssigned - 1;
        navbarCountElement.textContent = navbarCount + 1;

        button.disabled = true;
        button.textContent = "Completed";
        button.style.backgroundColor = "#ccc";

        let currentTime = new Date().toLocaleTimeString();

        let logEntry = document.createElement("p");
        logEntry.textContent = `You have completed the at ${currentTime}`;
        activityLog.appendChild(logEntry);
        let remainingTasks = parseInt(taskAssignedElement.textContent);
        if (remainingTasks === 0) {
          setTimeout(() => {
            alert(
              " Congratulations! You have completed all the current tasks! "
            );
          }, 500);
        }
      }
    });
  });

  clearHistoryButton.addEventListener("click", function () {
    activityLog.innerHTML = "";
  });

  discoverButton.addEventListener("click", function () {
    window.location.href = "blog.html";
  });

  colorChangeBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  });
});
