(function () {
  var canvas = document.getElementById('char-bg');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var cellSize = 25;
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var maxOpacity = 0.12;
  var cols, rows, drops, grid;
  var lastTime = 0;
  var resizeTimer;

  function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)];
  }

  function setup() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.5;
    cols = Math.ceil(canvas.width / cellSize);
    rows = Math.ceil(canvas.height / cellSize);

    grid = [];
    for (var col = 0; col < cols; col++) {
      grid[col] = [];
      for (var row = 0; row < rows; row++) {
        grid[col][row] = randomChar();
      }
    }

    drops = [];
    for (var c = 0; c < cols; c++) {
      drops.push({
        y: Math.floor(Math.random() * rows),
        prevHead: -1,
        speed: 0.3 + Math.random() * 0.7,
        opacity: Math.random() * maxOpacity
      });
    }
  }

  function draw(timestamp) {
    if (!lastTime) lastTime = timestamp;
    var delta = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (delta > 0.1) delta = 0.1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = cellSize + 'px "Space Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    for (var col = 0; col < cols; col++) {
      var drop = drops[col];
      var headRow = Math.floor(drop.y);

      if (headRow !== drop.prevHead && headRow < rows) {
        grid[col][headRow] = randomChar();
        drop.prevHead = headRow;
      }

      var fadeLength = rows;

      for (var i = 0; i < fadeLength; i++) {
        var row = headRow - i;
        if (row < 0) row += rows;
        if (row >= rows) continue;

        var opacity = drop.opacity * (1 - i / fadeLength);
        if (opacity <= 0) break;

        if (Math.random() < 0.03) {
          grid[col][row] = randomChar();
        }

        var x = col * cellSize + cellSize / 2;
        var y = row * cellSize + cellSize / 2;
        ctx.fillStyle = 'rgba(255, 255, 255, ' + opacity + ')';
        ctx.fillText(grid[col][row], x, y);
      }

      drop.y += drop.speed * delta;
      if (drop.y >= rows * 2) {
        drop.y = 0;
        drop.prevHead = -1;
        drop.opacity = Math.random() * maxOpacity;
        drop.speed = 0.3 + Math.random() * 0.7;
      }
    }

    requestAnimationFrame(draw);
  }

  setup();
  requestAnimationFrame(draw);

  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setup, 200);
  });
})();
