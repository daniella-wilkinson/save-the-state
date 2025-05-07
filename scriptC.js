const story = {
  start: {
    text: [
      "Region B is a West African nation near the Atlantic Ocean. Its land includes verdant forests, rivers, lakes, and wetlands. It is particularly susceptible to rising temperatures and heat waves, which erode historic wildlife habitats and disturb rural villages. In response, rural populations rapidly migrate from rural to urban areas to escape severe floods, droughts, and heatwaves exacerbated by climate change. ",
      
      "Local governments are increasingly concerned about population decline in rural villages caused by climate-induced migration. Many individuals are leaving rural communities, where rising temperatures impact their livelihoods, searching for better social and economic opportunities in urban areas. Rural communities, primarily agricultural, play a vital role in providing food for themselves and urban centers. Therefore, it is particularly alarming that farmers are abandoning their farms for non-agricultural work in cities due to the challenges posed by climate change, which are making farming increasingly challenging.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Option 1", next: "Option1" },
      { text: "Option 2", next: "Option2" },
      { text: "Option 3", next: "Option1" },
      { text: "Option 4", next: "Option2" }
    ]
  },

// OPTION A
// ===============================================================================

  OptionA: {
    text: [
      "To address rural population exodus and the decline in agricultural productivity, we are initiating a comprehensive Climate-Resilient Agriculture Initiative. This program aims to equip farmers with the tools and knowledge to adapt to changing climatic conditions, ensuring sustainable food production and livelihoods. The initiative seeks to enhance resilience against droughts, floods, and heatwaves by integrating traditional farming practices with modern climate-smart techniques.",

      "Central to this initiative is promoting climate-smart agriculture, which includes practices such as agroforestry, conservation agriculture, and drought-resistant crop varieties. We are establishing training programs to educate farmers on these methods, emphasizing the importance of soil health, water conservation, and diversified cropping systems. Additionally, the initiative supports the development of local seed banks and disseminates early warning systems for extreme weather events.",

      "This initiative aims to revitalize rural agriculture through climate adaptation and make farming a viable and attractive livelihood. This effort curbs rural-to-urban migration and ensures food security for rural and urban populations. Moreover, empowering farmers with adaptive strategies contributes to the broader goal of building resilient communities in the face of climate change."
    ],
    options: [
      { text: "Option 1", next: "OptionA1" },
      { text: "Option 2", next: "OptionA2" },
      { text: "Option 3", next: "OptionA3" },
      { text: "Option 4", next: "OptionA4" }
    ]
  },

 // OPTION B
// ===============================================================================
  
  OptionB: {
    text: [
      "Recognizing that agriculture alone may not sustain rural economies in changing climatic conditions, we implement programs to diversify rural livelihoods. These initiatives strive to create alternative income-generating opportunities, reduce reliance on climate-sensitive agriculture, and enhance community resilience. By broadening the economic base, rural areas become more appealing to residents, helping to limit migration to urban centers.",

      "The programs emphasize skill development, entrepreneurship, and the promotion of small and medium-sized enterprises in agro-processing, handicrafts, and renewable energy sectors. We establish training centers to equip individuals with essential skills, while providing access to microcredit and business development services to support the establishment and growth of SMEs. Special attention is given to empowering women and youth, as their potential is vital for driving economic transformation.",

      "These programs foster diversified and resilient rural economies, offering alternative livelihoods and stimulating local markets and services. This comprehensive approach contributes to the overall well-being of rural communities, making them more self-reliant and less vulnerable to the negative impacts of climate change."
    ],
    options: [
      { text: "Establish Climate-Smart Agriculture Training Centers", next: "OptionB1" },
      { text: "Provide Access to Drought-Resistant Seed Varieties", next: "OptionB2" },
      { text: "Implement Community-Based Water Harvesting Systems", next: "OptionB3" },
      { text: "Launch Agricultural Microfinance Programs", next: "OptionB4" }
    ],
  },

// OPTION C
// ===============================================================================
  
  OptionC: {
    text: [
      "Lorem ipsum dolor sit amet consectetur. Pulvinar sed integer arcu nisl. Arcu risus posuere amet tellus lacinia sed purus eget. Pharetra tellus ipsum arcu faucibus enim ipsum. Diam scelerisque vel viverra quis tortor neque. Sed vestibulum accumsan mauris ut vel. Malesuada nam suscipit erat leo viverra elit lectus quis enim. Massa ac odio dictum eu. Volutpat adipiscing habitant viverra quam viverra quam. Nullam velit pellentesque elementum nascetur. Posuere consectetur facilisi mattis non turpis venenatis eget. Enim purus proin dignissim aliquam tristique.",
    ],
    options: [
      { text: "Option 1", next: "OptionC1" },
      { text: "Option 2", next: "OptionC2" },
      { text: "Option 3", next: "OptionC3" },
      { text: "Option 4", next: "OptionC4" }
    ]
  },

// OPTION D
// ===============================================================================
  
OptionD: {
  text: [
    "Lorem ipsum dolor sit amet consectetur. Pulvinar sed integer arcu nisl. Arcu risus posuere amet tellus lacinia sed purus eget. Pharetra tellus ipsum arcu faucibus enim ipsum. Diam scelerisque vel viverra quis tortor neque. Sed vestibulum accumsan mauris ut vel. Malesuada nam suscipit erat leo viverra elit lectus quis enim. Massa ac odio dictum eu. Volutpat adipiscing habitant viverra quam viverra quam. Nullam velit pellentesque elementum nascetur. Posuere consectetur facilisi mattis non turpis venenatis eget. Enim purus proin dignissim aliquam tristique.",
  ],
  options: [
    { text: "Option 1", next: "OptionD1" },
    { text: "Option 2", next: "OptionD2" },
    { text: "Option 3", next: "OptionD3" },
    { text: "Option 4", next: "OptionD4" }
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
