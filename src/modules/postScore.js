import createListELement from './listElement.js';

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
  updateTable(user, score);
};

const updateTable = (user, score) => {
  const table = document.getElementById('recent-scores').firstElementChild;
  const element = createListELement(user, score);
  console.log(element);
  table.insertAdjacentHTML('afterbegin', element.outerHTML);
  const lastEle = document.getElementById('recent-scores').firstElementChild.lastChild;
  lastEle.remove();
}

export default postScore;
