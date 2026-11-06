// SCREEN NAVIGATION
function nextScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const next = document.getElementById(screenId);

  if (next) {
    next.classList.add("active");
    window.scrollTo(0, 0);
  }
}

// BLOW CANDLE
function blowCandle() {
  const flame = document.getElementById("flame");

  flame.style.opacity = "0";
  flame.style.transform = "scale(0)";

  createHearts();
}

// PHOTO VIEWER
function showPhoto(element) {
  const image = element.querySelector("img");

  document.getElementById("modalImage").src = image.src;
  document.getElementById("photoModal").classList.add("show");
}

function closePhoto() {
  document.getElementById("photoModal").classList.remove("show");
}

// ENVELOPE OPEN / CLOSE
function openLetter() {
  const envelope = document.getElementById("envelope");
  const hint = document.getElementById("letterHint");
  const button = document.getElementById("letterButton");

  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    hint.textContent = "A special message for you ❤️";
    button.textContent = "Close Letter 💌";
  } else {
    hint.textContent = "Tap the button to open your letter.";
    button.textContent = "Open Your Letter 💌";
  }
}

// MUSIC
function toggleMusic() {
  const music = document.getElementById("music");
  const button = document.getElementById("musicBtn");

  if (music.paused) {
    music.play().then(() => {
      button.textContent = "🔊 Music On";
    }).catch(() => {
      button.textContent = "Tap to Play 🎵";
    });
  } else {
    music.pause();
    button.textContent = "🎵 Music";
  }
}

// HEART ANIMATION
function createHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");

    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "22px";
    heart.style.zIndex = "99";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    heart.animate(
      [
        {
          transform: "translateY(0)",
          opacity: 1
        },
        {
          transform: "translateY(-100vh)",
          opacity: 0
        }
      ],
      {
        duration: 3000,
        easing: "ease-out"
      }
    );

    setTimeout(() => heart.remove(), 3000);
  }
}
