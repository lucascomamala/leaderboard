const postScore = async (item) => {
  item.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const gameAddress = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ly6jTi9zvHL9a3FJYQo/scores/';
  const result = await fetch(`${gameAddress}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: `${user}`,
      score: `${score}`,
    }),
  });
  const data = await result.json();
  return data;
};

export default postScore;
