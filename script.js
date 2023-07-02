document.addEventListener('DOMContentLoaded', function() {
  var paragraph = document.querySelector('p');
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet','pink','lemon'];
  var currentColorIndex = 0;

  paragraph.addEventListener('click', function() {
    paragraph.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  });
});
// Add click event listener to the play button
playButton.addEventListener('click', function() {
  // Go to the target page when the button is clicked
  window.location.href = 'file:///C:/Users/diell/OneDrive/Desktop/Nyan-Neko-main/game.html';
});