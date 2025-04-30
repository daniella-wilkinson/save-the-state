const story = {
  start: {
    text: [
      "Lorem ipsum dolor sit amet consectetur. Pulvinar sed integer arcu nisl. Arcu risus posuere amet tellus lacinia sed purus eget. Pharetra tellus ipsum arcu faucibus enim ipsum. Diam scelerisque vel viverra quis tortor neque. Sed vestibulum accumsan mauris ut vel. Malesuada nam suscipit erat leo viverra elit lectus quis enim. Massa ac odio dictum eu. Volutpat adipiscing habitant viverra quam viverra quam. Nullam velit pellentesque elementum nascetur. Posuere consectetur facilisi mattis non turpis venenatis eget. Enim purus proin dignissim aliquam tristique.",
      
      "Lorem ipsum dolor sit amet consectetur. Pulvinar sed integer arcu nisl. Arcu risus posuere amet tellus lacinia sed purus eget. Pharetra tellus ipsum arcu faucibus enim ipsum. Diam scelerisque vel viverra quis tortor neque. Sed vestibulum accumsan mauris ut vel. Malesuada nam suscipit erat leo viverra elit lectus quis enim. Massa ac odio dictum eu. Volutpat adipiscing habitant viverra quam viverra quam. Nullam velit pellentesque elementum nascetur. Posuere consectetur facilisi mattis non turpis venenatis eget. Enim purus proin dignissim aliquam tristique."
    ],
    options: [
      { text: "Option 1", next: "Option1" },
      { text: "Option 2", next: "Option2" },
      { text: "Option 3", next: "Option1" },
      { text: "Option 4", next: "Option2" }
    ]
  },
  Option1: {
    text: [
      "Lorem ipsum dolor sit amet consectetur. Pulvinar sed integer arcu nisl. Arcu risus posuere amet tellus lacinia sed purus eget. Pharetra tellus ipsum arcu faucibus enim ipsum. Diam scelerisque vel viverra quis tortor neque. Sed vestibulum accumsan mauris ut vel. Malesuada nam suscipit erat leo viverra elit lectus quis enim. Massa ac odio dictum eu. Volutpat adipiscing habitant viverra quam viverra quam. Nullam velit pellentesque elementum nascetur. Posuere consectetur facilisi mattis non turpis venenatis eget. Enim purus proin dignissim aliquam tristique.",
    ],
    options: [
      { text: "Option 1", next: "Option1" },
      { text: "Option 2", next: "Option2" },
      { text: "Option 3", next: "Option1" },
      { text: "Option 4", next: "Option2" }
    ]
  },
  Option2: {
    text: [
      "Lorem ipsum dolor sit amet consectetur. Pulvinar sed integer arcu nisl. Arcu risus posuere amet tellus lacinia sed purus eget. Pharetra tellus ipsum arcu faucibus enim ipsum. Diam scelerisque vel viverra quis tortor neque. Sed vestibulum accumsan mauris ut vel. Malesuada nam suscipit erat leo viverra elit lectus quis enim. Massa ac odio dictum eu. Volutpat adipiscing habitant viverra quam viverra quam. Nullam velit pellentesque elementum nascetur. Posuere consectetur facilisi mattis non turpis venenatis eget. Enim purus proin dignissim aliquam tristique.",
    ],
    options: [
      { text: "Option 1", next: "Option1" },
      { text: "Option 2", next: "Option2" },
      { text: "Option 3", next: "Option1" },
      { text: "Option 4", next: "Option2" }
    ]
  }
}

// =================================
// narrative function
// =================================

function showNarrative(sceneKey) {
  const scene = story[sceneKey];
  
  // Convert each piece of text into a paragraph with the utility class
  const narrativeHtml = scene.text.map(paragraph => `<p class="para">${paragraph}</p>`).join("");

  // Insert the formatted HTML into the narrative div
  document.getElementById("narrative").innerHTML = narrativeHtml;
  
  const optionsDiv = document.getElementById("narrative-button");
  optionsDiv.innerHTML = "";
  scene.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.className = "button-blue";
    button.onclick = () => showNarrative(option.next);
    optionsDiv.appendChild(button);
  });
}


// =================================

showNarrative("start");

// =================================
// report function
// =================================

let currentStep = 0;
const history = [];

const narrative = document.getElementById("narrative");
const buttons = document.getElementById("narrative-button");

function showStep(step) {
  const current = story[step];
  narrative.textContent = current.text;
  buttons.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => {
      recordChoice(`Step ${step + 1}: ${option}`);
      nextStep();
    });
    buttons.appendChild(btn);
  });
}

// =================================

function nextStep() {
  currentStep++;
  if (currentStep < story.length) {
    showStep(currentStep);
  } else {
    narrative.textContent = "The adventure ends here.";
    buttons.innerHTML = "";
  }
}

// =================================

function recordChoice(choiceText) {
  history.push(choiceText);
  updateHistoryView();
}

// =================================

function updateHistoryView() {
  const list = document.getElementById("history-list");
  list.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// =================================
// modal application
// =================================

// Modal logic
const historyButton = document.getElementById("history-button");
const historyModal = document.getElementById("history-modal");
const closeModal = document.getElementById("close-modal");

historyButton.addEventListener("click", () => {
  historyModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  historyModal.classList.add("hidden");
});

historyModal.addEventListener("click", (e) => {
  if (e.target === historyModal) {
    historyModal.classList.add("hidden");
  }
});

// =================================

// Start game
showStep(currentStep);