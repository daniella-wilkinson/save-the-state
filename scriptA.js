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
// initialize function
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
// initialize function
// =================================

showNarrative("start");
