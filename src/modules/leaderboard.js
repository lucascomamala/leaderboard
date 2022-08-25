const LIST_SIZE = 15;

const populate = async () => {
  const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0ly6jTi9zvHL9a3FJYQo/scores/';
  const request = new Request(requestURL);
  const response = await fetch(request);
  const scoresText = await response.text();
  const result = JSON.parse(scoresText);
  const scores = result.result;

  buildList(scores);
}

const buildList = (scores) => {
  const table = document.getElementById('recent-scores').firstElementChild;
  table.innerHTML = '';
  for (let i = 0; i < LIST_SIZE; i++) {
    const randomScore = getRandomScore(scores);
    const element = createListELement(randomScore.user, randomScore.score);
    table.appendChild(element)
  }
}

const getRandomScore = (scores) => {
  let randomScore = {};
  const randomIndex = Math.floor(Math.random() * scores.length);
  randomScore = scores[randomIndex];
  return randomScore;
}

const createListELement = (user, score) => {
  const element = document.createElement('tr');
  element.innerHTML = `<td>${user}: ${score}</td>`;
  return element;
}

export { populate }
