// Getting ahold of different elements in the HTML file.
const clcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const promptSection = document.getElementById("prompt-section");
const imageContainer = document.getElementById("img-container");
const resultSection = document.getElementById("result-section");

/**
 * JS does something called Hoisting. Basically it runs all declarations before they are used under the hood. 
 * That's why you can use functions,values,etc before you declare/initialize them in the code file itself.
 */

/*
 * Functions in JS can be stored in variables, passed as arguments, etc.
 * clcBtn.onclick = calcWakeUpTimes is equivalent to the line below.
 */
clcBtn.addEventListener("click", calcWakeUpTimes); // First argument is the event to be listened to, second is the function to run when the event occurs.
refreshBtn.addEventListener("click", calcWakeUpTimes);

/*
 This is the same idea, but the function being passed in has no name.
 For chunks of code that you dont really need to reuse, you can just include th chunk of code right there. Like a closure.
*/
returnBtn.addEventListener("click", () => {
  promptSection.classList.remove("hidden"); // Showing the prompt section by removing hidden class tag
  imageContainer.classList.remove("hidden"); // Showing the prompt section by removing hidden class tag
  resultSection.classList.add("hidden"); // Hiding the result section by adding hidden class tag
});


function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  wakeUpHoursDiv.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    const cycleDiv = document.createElement("div");
    cycleDiv.classList.add("cycle");
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.textContent = wakeUpTimeString;
    wakeUpHoursDiv.appendChild(cycleDiv);
  }


  promptSection.classList.add("hidden"); // Hiding the prompt section by adding hidden class tag
  imageContainer.classList.add("hidden"); // Hiding the image container by adding hidden class tag
  resultSection.classList.remove("hidden"); // Showing the result section by removing the hidden class tag
}
