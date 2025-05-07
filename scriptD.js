const story = {
  start: {
    text: [
      "Region D is a delta characterized by its rich and diverse ecology, which includes a variety of freshwater and saltwater aquatic species. However, the region is grappling with significant challenges stemming from urban development, which threatens to disturb human settlements and local wildlife and is prone to frequent flooding in this delta region. The land's inability to absorb excess water due to built-up land cover contributes to the accumulation of standing water, further exacerbating the flooding issues in the area.",
      
      "The legacy of colonial resource extraction has resulted in significant changes to land cover along the delta, contributing to urbanization in areas not well-suited for infrastructure development. Populations are densely settled along the riverbanks and taper off considerably as one moves further inland. Given the high population density in the region's most vulnerable areas, inward migration is often proposed as a solution. However, further urbanization presents challenges, and the economic costs associated with relocating large populations are not always feasible.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Reinforce Natural Flood Barrier Systems and Frameworks", next: "OptionA"},
      { text: "Address Unsustainable Urban Center(s) Expansion", next: "OptionB" },
      { text: "Build a Resilient Public Infrastructure Network", next: "OptionC" },
      { text: "Leverage Local Communities' Grassroots Engagement", next: "OptionD" }
    ]
  },

// OPTION A
// ===============================================================================

  OptionA: {
    text: [
      "Region D cannot act as a barrier to water; instead, it should facilitate the natural flow, absorption, and release of water. Unfortunately, years of paving over wetlands, redirecting rivers, and unchecked construction have stripped the delta of its natural defenses. At this point, you decide to adopt a different approach that works with nature rather than against it. You begin planning a system of nature-based solutions that includes wetland restoration, green infrastructure, and changes in land use to help the landscape recover. By investing in ecological resilience, your goal is to transform the delta from a flood liability into a model for climate adaptation.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Restore Wetlands and Mangroves", next: "OptionA1" },
      { text: "Introduce Flood-Resilient Infrastructure Ordinance", next: "OptionA2" },
      { text: "Develop Urban Ecological Flood Buffers and Barriers", next: "OptionA3" },
      { text: "Initiate a Community Rain Garden Installation Program", next: "OptionA4" }
    ]
  },

  OptionA1: {
    text: [
     "You recognize that development has come at the cost of the delta's most effective flood buffers—wetlands and mangroves. You initiate a large-scale restoration campaign, identifying key sites for ecological rehabilitation. This means working with local scientists and landowners to reestablish native vegetation and water flow. In time, these restored ecosystems absorb excess water naturally, reducing flood peaks and improving biodiversity. Communities also begin to see the wetlands not as swamps but as life-saving systems worth protecting."
    ], 
  },

  OptionA2: {
    text: [
     "You encourage local governments to mandate that new developments and significant renovations incorporate green infrastructure, such as green roofs, permeable pavement, and bioswales. You also educate developers and offer financial incentives to help offset initial costs. Over time, these practices allow stormwater to seep into the ground rather than accumulate in streets and low-lying areas. This approach is not just about controlling floods; it's about redesigning urban life to work with water rather than against it."
    ], 
  },

  OptionA3: {
    text: [
     "To address the delta's sprawling urbanization, you propose a rezoning plan that establishes an ecological buffer around the most flood-prone areas. This plan restricts new development while encouraging landowners to transition vulnerable plots into green spaces. The buffer zone becomes a dual-purpose asset, reducing disaster risk and offering recreation, tourism, and educational opportunities tied to the delta's unique ecosystems."
    ], 
  },

  OptionA4: {
    text: [
     "You know not all solutions need to come from above. You fund a grassroots program for installing rain gardens in neighborhoods, schools, and public spaces. You provide toolkits, workshops, and small grants to empower residents to help manage stormwater right in their yards. These gardens become symbols of pride, environmental education, and flood prevention. As more are planted, localized flooding begins to decline."
    ], 
  },

// OPTION B
// ===============================================================================


  OptionB: {
    text: [
      "You recognize the warning signs. The unchecked expansion into Region D's fragile delta is creating a potential disaster—more homes and buildings in areas prone to flooding. You make the tough decision to stop future development, prioritizing compact, elevated, and carefully zoned growth instead. This decision goes beyond halting expansion; it aims to reshape the region's development. You introduce planning reforms, enforce new building codes, and offer relocation options for the most vulnerable residents. This approach necessitates difficult political decisions, such as imposing limits on land use, suspending risky construction, and encouraging developers to build vertically rather than horizontally to curb urban sprawl.",

      "Your policy decision gradually transforms the region's physical and social landscape. Fewer people live in hazardous areas, fewer homes are constructed on unstable ground, and more land is preserved for its intended purpose: absorbing excess water instead of supporting buildings. However, tensions remain concerning land use restrictions for commercial and residential development to support a dynamic and growing population.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Enact Environmentally-Conscious Urban Planning Policies", next: "OptionB1" },
      { text: "Promote High-Density Housing to Mitigate Urban Sprawl", next: "OptionB2" },
      { text: "Impose a Suspension on New Development in High-Risk Zones", next: "OptionB3" },
      { text: "Institute a Residential Relocation and Compensation Program", next: "OptionB4" }
    ]
  },

  OptionB1: {
    text: [
     "You draft a new set of planning rules and regulations focused on environmentally-conscious urban planning to mitigate urban sprawl, concentrating development in existing urban centers, and preserving underdeveloped land near the delta. You form planning councils that include scientists, architects, and citizen representatives. Though it meets initial resistance from some developers, your approach helps prevent reckless expansion into fragile flood zones and lays the foundation for safer, more sustainable urban density."
    ], 
  },

  OptionB2: {
    text: [
     "You use zoning and tax tools to steer construction toward high-density housing developments on elevated land rather than low-lying floodplains. This means reforming building codes and incentivizing vertical construction. It also means partnering with private developers willing to adopt climate-resilient practices. Over time, fewer people live in the delta's most vulnerable spots, decreasing flood exposure and emergency costs."
    ], 
  },

  OptionB3: {
    text: [
     "You temporarily halt all new construction in designated flood hazard zones. During this period, a scientific task force reevaluates development guidelines using current climate data and future projections. Although politically contentious, the moratorium earns public support after the next major flood event, demonstrating what could have been avoided. The data you gather leads to long-term protections for the most at-risk lands."
    ], 
  },

  OptionB4: {
    text: [
     "You develop a voluntary relocation program that offers fair buyouts to property owners in high-risk flood zones and land swaps in safer locations. This reduces the human and financial cost of repeat flooding events. The vacated properties are then restored to wetlands or floodable parks. It's a long-term strategy that prioritizes people over property lines and builds collective safety."
    ], 
  },

// OPTION C
// ===============================================================================


OptionC: {
  text: [
    "Instead of waiting for disasters to reveal further vulnerabilities, you take proactive measures by auditing public infrastructure with a focus on climate equity. You prioritize upgrades in historically neglected communities, ensuring that resilience is not just a privilege for the wealthy but a right for everyone. As this work progresses, people recognize that the government is not just reacting but actively preparing. In doing so, you build infrastructure and foster public trust and long-term security.",

    "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"    
  ],
  options: [
    { text: "Retrofit Drainage Systems with Climate-Resilient Standards", next: "OptionC1" },
    { text: "Construct Elevated Transit and Evacuation Corridors", next: "OptionC2" },
    { text: "Establish Public Works Green Innovation Labs", next: "OptionC3" },
    { text: "Create a Eco-Conscious Infrastructure Equity Audit", next: "OptionC4" }
  ]
},

  OptionC1: {
    text: [
    "You commission a region-wide overhaul of drainage infrastructure. Instead of patchwork fixes, you integrate predictive flood modeling and green engineering principles into the upgrade. Outlets are widened, pumps are replaced, and stormwater tunnels are expanded. You also install overflow alert systems so communities can act quickly when risks are high. Within a few years, the system handles storms that would've previously caused disaster."
    ], 
  },

  OptionC2: {
    text: [
    "You design an ambitious plan to elevate key transit routes and evacuation corridors above projected flood levels. Though expensive, the long-term savings in life and property protection are undeniable. You prioritize routes near hospitals, schools, and dense neighborhoods. When the next flood hits, these elevated paths save hundreds of lives and keep supply lines open. It's a powerful testament to planning."
    ], 
  },

  OptionC3: {
    text: [
    "You bring together engineers, university researchers, and local officials to create Green Innovation Labs that prototype low-cost, nature-based solutions for public infrastructure. These include stormwater harvesting systems, floating walkways, and flood-resistant building materials. These labs train young technicians and provide career pathways while adapting old systems for a changing environment."
    ], 
  },

  OptionC4: {
    text: [
    "You lead a region-wide audit to assess whose neighborhoods benefit most from flood defenses and which are left vulnerable. The audit reveals longstanding disparities—poor and marginalized communities are most at risk. You use the findings to redirect infrastructure spending equitably, ensuring no one is sacrificed to geography or political neglect. This creates both social and environmental resilience."
    ], 
  },

// OPTION D
// ===============================================================================

  OptionD: {
    text: [
      "You understand policies are ineffective without community involvement; grassroots community engagement drives effective policy decisions. Region D residents know their land, the patterns of flooding, and the vulnerable areas better than any far-removed political actors and agents. Therefore, you decide to engage with them. You create local planning boards, support citizen-led emergency response teams, and empower communities to have a genuine say in public budgets.",

      "You believe that the people closest to a problem are also the ones who have the best solutions. Residents of Region D have faced numerous storms and developed coping strategies. However, they have rarely been allowed to influence official policies. You change this by empowering local voices in flood planning and response.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Launch Community-Based Flood Response & Recovery Teams", next: "OptionD1" },
      { text: "Develop Flood-Risk Education Campaigns & Courses", next: "OptionD2" },
      { text: "Erect Resident Review Boards for Planning Proposals", next: "OptionD3" },
      { text: "Launch Participatory Flood Budget", next: "OptionD4" }
    ]
  },

  OptionD1: {
    text: [
      "You help set up neighborhood flood response teams trained in emergency preparedness, sandbagging, water testing, and community alerts. These teams operate like citizen fire brigades but are trained for flood-specific events. These local teams are first on the ground when heavy rain falls, providing aid before federal agencies arrive. Their presence builds trust and speeds up response."
    ], 
  },


  OptionD2: {
    text: [
      "You realize that community awareness is as critical as infrastructure. You develop a campaign to educate residents about flood zones, insurance options, evacuation procedures, and household preparedness. Materials are multilingual and accessible. You partner with local schools and faith organizations. In time, people learn to prepare for and respond to floods proactively rather than reactively."
    ], 
  },


  OptionD3: {
    text: [
      "You institutionalize local power by creating citizen review boards that evaluate new urban development proposals, especially those affecting flood-prone areas. These boards ensure communities have a say in where and how buildings go up. Residents gain the power to halt or reshape projects that increase flood risks. Over time, developers begin to anticipate public resistance and incorporate flood mitigation."
    ], 
  },


  OptionD4: {
    text: [
      "You allocate a portion of the annual flood management budget through participatory budgeting. Residents propose and vote on how to use these funds: raised sidewalks? water pumps? community storage units? You set limits but leave the rest in the community's hands. Not only do they choose wisely, but they also protect what they built because they chose it."
    ], 
  },
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
    button.className = "button-green";
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
