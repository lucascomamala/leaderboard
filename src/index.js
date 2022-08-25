import './style.css';
import renderApp from './modules/htmlTemplate.js';
import { populate } from './modules/leaderboard';

renderApp();
populate();

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', () => {
  populate();
});
