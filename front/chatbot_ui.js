<form id="openai-form">
  <input type="text" id="openai-question" placeholder="Enter your question">
  <button type="submit">Ask OpenAI</button>
</form>

<script>
  const openaiForm = document.getElementById('openai-form');
  const openaiQuestion = document.getElementById('openai-question');

  openaiForm.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch('http://localhost:40002/prompt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: openaiQuestion.value
      })
    })
    .then(response => response.json())
    .then(data => {
      // Display the answer in a new element
      const answerElement = document.createElement('div');
      answerElement.textContent = data.answer;
      document.body.appendChild(answerElement);
    })
    .catch(error => {
      console.error(error);
    });
  });
</script>
