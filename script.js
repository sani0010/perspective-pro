document.getElementById("menuToggle").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
});

document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("active");
});
      const animationDuration = 2000;
      const framesPerSecond = 60;
      const frameDuration = Math.floor(animationDuration / framesPerSecond);

      function animateCounter(targetCount, counterElementId) {
        const counterElement = document.getElementById(counterElementId);
        let currentCount = 0;
        const increment = targetCount / (animationDuration / frameDuration);

        const counterInterval = setInterval(() => {
          currentCount += increment;
          if (currentCount >= targetCount) {
            currentCount = targetCount;
            clearInterval(counterInterval);
          }
          counterElement.textContent = Math.round(currentCount);
        }, frameDuration);
      }

      animateCounter(127, "awardsCounter");
      animateCounter(1505, "coffeeCounter");
      animateCounter(109, "projectsCounter");
      animateCounter(102, "clientCounter");
