// SCREEN NAVIGATION
function nextScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// START
function startSurprise() {
  nextScreen("gift");
  createHearts();
}

// GIFT OPENING
let giftOpened = false;

function openGift() {
  if (giftOpened) return;

  giftOpened = true;

  document.getElementById("giftBox").classList.add("opened");

  document.getElementById("giftHint").innerText =
    "Your surprise is waiting! 💗";

  setTimeout(() => {
    nextScreen("birthday");
  }, 1500);
}

// BLOW CANDLE
let candleBlown = false;

function blowCandle() {
  const flame = document.getElementById("flame");
  const message = document.getElementById("wishMessage");
  const button = document.querySelector("#birthday .main-btn");

  if (!candleBlown) {
    flame.classList.add("out");

    message.innerText =
      "Your wish is on its way to the stars! 🌟";

    candleBlown = true;

    celebrate();

    button.innerText = "See Your Memories 📸";
  } else {
    nextScreen("memories");
  }
}

// PHOTO GALLERY
function showPhoto(element) {
  const img = element.querySelector("img");

  document.getElementById("largePhoto").src = img.src;
  document.getElementById("photoModal").classList.add("show");
}

function closePhoto() {
  document.getElementById("photoModal").classList.remove("show");
}

// SECRET LETTER
let letterOpened = false;


function openLetter() {
  const envelope = document.getElementById("envelope");

  if (envelope.classList.contains("open")) return;

  envelope.classList.add("open");

  document.getElementById("letterHint").innerText =
    "A little message, just for you. ❤️";
}



// MUSIC PLAYER
let musicPlaying = false;

function toggleMusic() {
  const music = document.getElementById("music");
  const btn = document.getElementById("musicBtn");

  if (!musicPlaying) {
    music.play().then(() => {
      musicPlaying = true;
      btn.innerText = "♫ Playing";
    }).catch(() => {
      btn.innerText = "Tap to Play ♫";
    });
  } else {
    music.pause();
    musicPlaying = false;
    btn.innerText = "♫ Music";
  }
}

// FLOATING HEARTS
function createHearts() {
  const container = document.getElementById("hearts");

  setInterval(() => {
    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = ["❤️", "💗", "💕", "💖", "✨"];

    heart.innerText =
      symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";

    const duration = 4 + Math.random() * 5;

    heart.style.animationDuration = duration + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);

  }, 450);
}

// CONFETTI CELEBRATION
function celebrate() {
  const symbols = ["🎉", "💗", "✨", "🎊", "💕"];

  for (let i = 0; i < 55; i++) {
    const item = document.createElement("div");

    item.innerText =
      symbols[Math.floor(Math.random() * symbols.length)];

    item.style.position = "fixed";
    item.style.left = Math.random() * 100 + "vw";
    item.style.top = "-30px";
    item.style.fontSize = "22px";
    item.style.pointerEvents = "none";
    item.style.zIndex = "100";

    document.body.appendChild(item);

    const duration = 2000 + Math.random() * 2000;

    item.animate([
      {
        transform: "translateY(0) rotate(0deg)",
        opacity: 1
      },
      {
        transform:
          `translateY(110vh) rotate(${Math.random() * 720}deg)`,
        opacity: 0
      }
    ], {
      duration: duration,
      easing: "ease-in"
    });

    setTimeout(() => item.remove(), duration);
  }
}

// ESCAPE KEY CLOSES PHOTO
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closePhoto();
  }
});

// START FLOATING HEARTS
createHearts();
