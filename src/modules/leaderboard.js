import createListELement from './listElement.js';

const LIST_SIZE = 15;
let listElements = [];

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
  listElements = [];
  const table = document.getElementById('recent-scores').firstElementChild;
  table.innerHTML = '';
  for (let i = 0; i < LIST_SIZE; i++) {
    const randomScore = getRandomScore(scores);
    const element = createListELement(randomScore.user, randomScore.score);
    if (!listElements.includes(element.innerHTML)) {
      table.appendChild(element)
    } else {
      i--;
    }
    listElements.push(element.innerHTML);
  }
}

const getRandomScore = (scores) => {
  let randomScore = {};
  const randomIndex = Math.floor(Math.random() * scores.length);
  randomScore = scores[randomIndex];
  return randomScore;
}

export default populate;
