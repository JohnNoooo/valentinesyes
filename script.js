// Set the target date for Valentine's Day
// Test with 10 seconds from now
const valentinesDay = new Date(
  `February 14, ${new Date().getFullYear()} 00:00:00`
).getTime();
// Test with 10 seconds from now
//const valentinesDay = new Date(
//new Date().getTime() + 10000 // 10 seconds
//).getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = valentinesDay - now;

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display countdown
  document.getElementById(
    "timer"
  ).innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;

  // Show the reveal button when countdown reaches 0
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "It's Time!!!";
    document.getElementById("revealButton").style.display = "block"; // Show the button
  }
}

// Function to reveal the love letter when the button is clicked
function revealLoveLetter() {
  document.getElementById("loveLetter").classList.remove("locked");
  document.getElementById("loveLetter").classList.add("unlocked");
  document.getElementById("lockedMessage").classList.add("hidden");
  document.getElementById("revealButton").style.display = "none"; // Hide the button
}

// Add event listener to the reveal button
document
  .getElementById("revealButton")
  .addEventListener("click", revealLoveLetter);

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Run the function immediately so there's no delay
updateCountdown();
