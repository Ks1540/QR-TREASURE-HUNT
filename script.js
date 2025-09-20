function getClue() {
  const group = document.getElementById("groupNum").value;
  const clue = document.getElementById("clueNum").value;
  const passkey = document.getElementById("passkey").value.trim().toLowerCase();

  const clues = {
    1: [
      { text: "Clue 1: Look beneath the library stairs.", key: "lib123" },
      { text: "Clue 2: The notice board hides secrets.", key: "board456" },
      { text: "Clue 3: Seek the red bench near the canteen.", key: "bench789" },
    ],
    2: [
      { text: "Clue 1: Behind the auditorium curtain.", key: "curtain321" },
      { text: "Clue 2: Under the tree with yellow leaves.", key: "tree654" },
      { text: "Clue 3: Check the lost-and-found shelf.", key: "lost987" },
    ],
  };

  const groupClues = clues[group];
  const clueObj = groupClues && groupClues[clue - 1];

  if (clueObj && clueObj.key === passkey) {
    document.querySelector(".input-section").style.display = "none";
    const clueBox = document.getElementById("clue");
    clueBox.style.display = "block";
    clueBox.classList.add("revealed");

    // Show loading animation
   clueBox.innerHTML = `
  <div class="treasure-loader"></div>
  <p style="margin-top: 20px; font-size: 22px;">🗺️ Searching for your clue...</p>
`;

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      clueBox.innerHTML = `
        <h2>🧩 Your Clue</h2>
        <p><strong>GROUP ${group}</strong></p>
        <p><strong>${clueObj.text}</strong></p>
      `;
    }, 1200);
  } else {
    alert("❌ Incorrect passkey or invalid input. Try again!");
  }
}
