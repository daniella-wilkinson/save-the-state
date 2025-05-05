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

// narrative function
// ===============================================================================

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
    button.className = "button-yellow";
    button.onclick = () => {
      const fullSceneText = scene.text.join(" ");
      recordChoice(fullSceneText, option.text);
      showNarrative(option.next);
    };    
    optionsDiv.appendChild(button);
  });
}

// =================================

showNarrative("start");

// report function
// =================================

const history = [];

const narrative = document.getElementById("narrative");
const buttons = document.getElementById("narrative-button");

// =================================

function recordChoice(sceneText, choiceText) {
  history.push({ sceneText, choiceText });
  updateHistoryView();
}

// =================================

function updateHistoryView() {
  const list = document.getElementById("history-list");
  list.innerHTML = "";

  history.forEach(entry => {
    const li = document.createElement("li");
    li.innerHTML = `<div style="padding: 1em;"><strong>Policy :</strong> ${entry.choiceText}<br><strong>Description :</strong> ${entry.sceneText}</div>`;
    list.appendChild(li);
  });
}

// modal 1 application
// =================================


window.onload = function () {
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");

  // Close modal when clicking the close (x) button
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  // Close modal when clicking outside the modal content
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

// modal 2 application
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

// copy to clipboard
// =================================

document.getElementById("copy-history").addEventListener("click", () => {
  const listItems = document.querySelectorAll("#history-list li");
  const textToCopy = Array.from(listItems)
    .map(li => li.textContent)
    .join("\n");

  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Report copied to clipboard!");
  }).catch(err => {
    console.error("Copy failed:", err);
    alert("Failed to copy Report.");
  });
});
