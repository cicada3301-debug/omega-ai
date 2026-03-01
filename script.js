async function askAI() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  output.textContent = "Thinking...";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are OMEGA AI, an advanced intelligent assistant." },
        { role: "user", content: input }
      ]
    })
  });

  const data = await response.json();
  output.textContent = data.choices[0].message.content;
}
