<form id="openai-form">
  <input type="text" id="openai-question" placeholder="Enter your question">
  <button type="submit">Ask OpenAI</button>
</form>

<div id="openai-response"></div>

<script>
  const openaiForm = document.getElementById('openai-form');
  const openaiQuestion = document.getElementById('openai-question');
  const openaiResponse = document.getElementById('openai-response');

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
      console.log("response:", data)
      openaiResponse.textContent = data.text;
    })
    .catch(error => {
      console.error(error);
    });
  });
</script>
