const card = document.getElementById("card");
const buttonsWrap = card.querySelector(".buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const yayScreen = document.getElementById("yayScreen");
const againBtn = document.getElementById("againBtn");

// Optional: change the displayed name
// document.getElementById("name").textContent = "YOUR_NAME";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function moveNoButton() {
  // bounds: inside the buttons area
  const wrapRect = buttonsWrap.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  // padding so it never touches edges
  const pad = 10;

  const maxX = wrapRect.width - btnRect.width - pad;
  const maxY = wrapRect.height - btnRect.height - pad;

  // random position
  const x = Math.random() * maxX + pad;
  const y = Math.random() * maxY + pad;

  noBtn.style.left = `${clamp(x, pad, maxX)}px`;
  noBtn.style.top = `${clamp(y, pad, maxY)}px`;
}

// Make "No" dodge when you try to hover/tap it
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault(); // stop accidental click on mobile
  moveNoButton();
}, { passive: false });

// If they somehow click No, still move it
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
  yayScreen.hidden = false;
});

againBtn.addEventListener("click", () => {
  yayScreen.hidden = true;
  // reset No position a bit
  noBtn.style.left = "";
  noBtn.style.top = "";
});