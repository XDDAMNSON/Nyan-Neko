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