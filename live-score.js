function updateScore() {
  // TEMP sample mock scoreboard while we connect CricHeroes:
  const html = `
  <div class="status-live">🟩 LIVE — Power Hitters XI vs Marvels XI</div>
  <div class="score-line">PH XI 45/2 (5.4 ov) • Target 120</div>
  <div class="details">Striker: 21*(14) • Bowler: 1/12 (2.0)</div>
  <div class="refresh-time">Updated: ${new Date().toLocaleTimeString()}</div>
  `;
  document.getElementById("score-container").innerHTML = html;
}

// Refresh every 5 seconds (you chose ball-by-ball)
setInterval(updateScore, 5000);

// Initial load
updateScore();
