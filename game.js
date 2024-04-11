document.addEventListener("DOMContentLoaded", function() {
  var readyImage = document.getElementById("ready");
  var steadyImage = document.getElementById("steady");
  var goImage = document.getElementById("go");

  // Show "Ready" image for 1 second
  setTimeout(function() {
    readyImage.style.display = "inline";
    setTimeout(function() {
      readyImage.style.display = "none";

      // Show "Steady" image for 1 second
      setTimeout(function() {
        steadyImage.style.display = "inline";
        setTimeout(function() {
          steadyImage.style.display = "none";

          // Show "Go" image for 1 second
          setTimeout(function() {
            goImage.style.display = "inline";
            setTimeout(function() {
              goImage.style.display = "none";
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});

var achievementTimeout;

setInterval(function() {
  var treats = document.querySelectorAll('.treat');

  for (var i = 0; i < treats.length; i++) {
    var treat = treats[i];
    var treatRect = treat.getBoundingClientRect();
    var playerRect = player.getBoundingClientRect();

    if (
      playerRect.left < treatRect.right &&
      playerRect.right > treatRect.left &&
      playerRect.top < treatRect.bottom &&
      playerRect.bottom > treatRect.top
    ) {
      treat.parentNode.removeChild(treat); // Remove the touched treat
      score += 5;
      scoreElement.textContent = 'Score: ' + score;

      spawnTreat(); // Spawn a new treat
    }
  }

  // Check if the score passes a multiple of 100
  if (score % 100 === 0 && score !== 0 && !achievementTimeout) {
    var achievement = document.getElementById('achievement');
    achievement.style.display = 'block';

    // Set a timeout to hide the achievement after 1.5 seconds
    achievementTimeout = setTimeout(function() {
      achievement.style.display = 'none';
      achievementTimeout = null;
    }, 1500);
  }
}, 10);


if (score % 100 === 0 && score !== 0 && !achievementTimeout) {
  var achievement = document.getElementById('achievement');
  var achievementImage = document.getElementById('achievement-image');
  achievement.style.display = 'flex';
  achievement.style.backgroundImage = 'url("https://files.catbox.moe/vni54i.gif")';

  // Set a timeout to hide the achievement after 1.5 seconds
  achievementTimeout = setTimeout(function() {
    achievement.style.display = 'none';
    achievement.style.backgroundImage = 'none';
    achievementTimeout = null;
  }, 1500);
}


var pauseMenu = document.getElementById('pauseMenu');
var pauseMusic = document.createElement('audio');
pauseMusic.src = 'https://files.catbox.moe/h23wet.mp3';
var isPaused = false;

document.getElementById('pauseButton').addEventListener('click', function() {
  if (!isPaused) {
    pauseMenu.style.display = 'flex';
    pauseMusic.play();
    isPaused = true;
  } else {
    pauseMenu.style.display = 'none';
    pauseMusic.pause();
    isPaused = false;
  }
});


