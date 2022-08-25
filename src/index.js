import './style.css';
import renderApp from './modules/htmlTemplate.js';
import populate from './modules/leaderboard.js';
import postScore from './modules/postScore.js';

renderApp();
populate();

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', populate);

const sumbitBtn = document.getElementById('submit-btn');
sumbitBtn.addEventListener('click', postScore);
