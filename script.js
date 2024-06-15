document.addEventListener("DOMContentLoaded", function () {
  const liquid = document.querySelector(".liquid");
  setTimeout(() => {
    liquid.classList.add("animate");
  }, 500); // Delay animation start for 0.5 seconds
});
