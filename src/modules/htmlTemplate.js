const app = document.getElementById('my-app');

const content =
  `<h1>Leaderboard</h1>
    <div class="main-content">
      <div class="scores">
        <div class="scores-header">
          <h2>Recent Scores</h2>
          <button id="refresh-btn" type="button">Refresh</button>
        </div>
        <table id="recent-scores">
          <tr>
            <td>Name: 100</td>
          </tr>
          <tr>
            <td>Name: 99</td>
          </tr>
          <tr>
            <td>Name: 98</td>
          </tr>
        </table>
      </div>
      <div class="add-score">
        <h2>Add your score</h2>
        <form id="add-score-form" action="index.html" method="post">
          <input type="text" name="name" id="name" placeholder="Your Name"><br>
          <input type="number" name="score" id="score" placeholder="Your Score"><br>
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>`;

const renderApp = () => {
  app.insertAdjacentHTML('beforeend', content);
};

export default renderApp;
