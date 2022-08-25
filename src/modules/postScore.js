import createListELement from './listElement.js';

const postScore = async (item) => {
  item.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  if (!validateEntry(user, score)) {
    return;
  }
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
  clearForm();
};

const updateTable = (user, score) => {
  const table = document.getElementById('recent-scores').firstElementChild;
  const element = createListELement(user, score);
  console.log(element);
  table.insertAdjacentHTML('afterbegin', element.outerHTML);
  const lastEle = document.getElementById('recent-scores').firstElementChild.lastChild;
  lastEle.remove();
}

const validateEntry = (user, score) => {
  if (user.length === 0) {
    // console.log('no user');
    return false;
  } else if (Number.isNaN(parseInt(score))) {
    // console.log('Score not a number');
    return false;
  }
  return true;
}

const clearForm = () => {
  const user = document.getElementById('name');
  const score = document.getElementById('score');
  user.value = '';
  score.value = '';
}

export default postScore;
