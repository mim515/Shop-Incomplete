const scriptURL =
  "https://script.google.com/macros/s/AKfycbzXpTQ16jpDEjIB64Jywi2higU06Drau1GmSjbs_eKgF5qU4KQvZvBu6CHk_jaWFKUvgg/exec";
const form = document.forms["submit-to-google-sheet"];
let trust = document.getElementById("trust");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  trust.innerHTML = "Submitting...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      trust.innerHTML = "Thanks for your trust!";
      setTimeout(function () {
        trust.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
