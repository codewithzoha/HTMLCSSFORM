document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent actual submission
  document.getElementById("successMsg").style.display = "block";
  setTimeout(() => {
    document.getElementById("successMsg").style.display = "none";
    this.reset();
  }, 3000);
});
