<script>
let noClickCount = 0;

function handleNo() {
  noClickCount++;

  if (noClickCount >= 4) {
    document.getElementById('warning-text').style.display = 'block';
  }
}

function nextQuestion() {
  // Hide the warning if it was visible
  document.getElementById('warning-text').style.display = 'none';

  // Update the question
  document.getElementById('question-text').innerText = 'What would you like to do next?';

  // Replace the buttons with 4 new options
  const buttonsContainer = document.getElementById('buttons-container');
  buttonsContainer.innerHTML = `
    <button class="option">Go on a walk</button>
    <button class="option">Listen to music</button>
    <button class="option">Watch anime</button>
    <button class="option">Just relax</button>
  `;
} 
</script> 