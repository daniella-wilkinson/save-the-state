const story = {
  start: {
    text: [
      "Region B is a West African nation near the Atlantic Ocean. Its land includes verdant forests, rivers, lakes, and wetlands. It is particularly susceptible to rising temperatures, heat waves, and wildfires, which erode historic wildlife habitats and disturb rural villages. In response, rural populations rapidly migrate from rural to urban areas to escape severe floods, droughts, and wildfires exacerbated by climate change.",
      
      "Local governments in urban centers are alarmed by an emerging issue— public health degradation. The rural migrant population is increasing at a rate that outpaces infrastructure investment in affordable housing. Urban areas that receive an influx of migrants struggle to provide adequate, affordable housing, which forces vulnerable migrant populations to erect slums. Urban centers lack the necessary investment to propagate affordable housing to satisfy demand without defunding crucial public services to balance the budget. Inadequate housing settlements are a public health issue. Makeshift plumbing, garbage disposal, and tightly knit living quarters breed the necessary conditions for disease outbreaks.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Launch a Climate-Resilient Rural Development Program", next: "Option1" },
      { text: "Institute an Urban Affordable Housing & Infrastructure Authority", next: "Option2" },
      { text: " Form a Climate Migration Strategy Team", next: "Option1" },
      { text: " Expand Decentralized Urban Governance and Fiscal Autonomy", next: "Option2" }
    ]
  },

// OPTION A
// ===============================================================================

  OptionA: {
    text: [
      "To slow rural-to-urban migration, you introduce a climate-resilient rural development initiative. You aim to strengthen the viability of staying in rural areas by restoring degraded ecosystems, funding wildfire prevention efforts, and providing access to renewable energy and clean water infrastructure. By making rural living safer and more sustainable, you begin to stem the migration flow at its source. You incorporate training and tools for sustainable farming practices, early warning systems for natural hazards, and local cooperatives for shared resources. Investing in climate resilience creates long-term social stability while reducing pressure on overcrowded cities.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Subsidize Local Agroforestry Initiatives", next: "OptionA1" },
      { text: "Fund Solar Microgrids in Isolated Villages", next: "OptionA2" },
      { text: "Train Rural Youth in Eco-Restoration Employment", next: "OptionA3" },
      { text: "Implement Firebreak Zoning & Community Watch Plans", next: "OptionA4" }
    ],
  },

  OptionA1: {
    text: [
      "You invest in tree-crop integration systems that promote food security and ecological stability. Agroforestry enhances food production and creates microclimates that help combat heat waves. This approach empowers rural families by providing them with diversified income sources, reducing migration pressure. As the trees mature, the community's resilience also grows. Soil quality improves, the risk of wildfires decreases, and villages become more self-sufficient. Rural residents start to view climate adaptation as a form of empowerment rather than a retreat."
    ], 
  },

  OptionA2: {
    text: [
      "You fund solar-powered microgrids to bring stable electricity to villages far from the national grid. Access to power makes schools more effective, businesses more viable, and health clinics more reliable. With electricity comes opportunity. Villagers no longer feel disconnected from progress. Energy access helps stop migration by transforming rural life from surviving to thriving."
    ], 
  },

  OptionA3: {
    text: [
      "You launch a training program that employs youth to restore wetlands, prevent soil erosion, and manage fire-prone areas. This puts money in pockets and skills in hands without requiring migration to cities. Participants gain dignity through meaningful work. Your program reframes conservation as a job creator, not a cost center. Rural youth now see a future where they can stay and succeed."
    ], 
  },

  OptionA4: {
    text: [
      "You partner with villagers to develop natural firebreaks and wildfire watch plans. Locals learn to manage fire-prone areas with indigenous knowledge enhanced by new training. These proactive defenses reduce loss of life and property. Instead of waiting for disaster, communities lead their resilience strategy, reinforcing their stake in the land."
    ], 
  },

// OPTION B
// ===============================================================================

  OptionB: {
    text: [
      "To manage the influx of climate migrants, you establish an Urban Affordable Housing & Infrastructure Authority. This body coordinates housing development across cities, links it to health and sanitation infrastructure, and protects funding for vital public services. By centralizing oversight, you avoid duplication and get more value from every budgeted dollar. You commit to building vertically and sustainably. New housing is integrated with sanitation, clinics, and green corridors. Rather than viewing migrants as a burden, you treat them as an integral part of the city’s growth strategy. The authority becomes a model for proactive, equity-centered urban planning.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Implement Rent-to-Own Housing Schemes for Migrant Families", next: "OptionB1" },
      { text: "Construct Modular Housing Using Local Materials", next: "OptionB2" },
      { text: "Expand Municipal Waste & Sewage Systems to New Settlements", next: "OptionB3" },
      { text: "Require Health Clinics in Every New Housing Block", next: "OptionB4" }
    ]
  },

  OptionB1: {
    text: [
      "You create a rent-to-own program where families gradually earn home ownership. Instead of permanent slums, you offer a path to stability through subsidized payments and service-linked housing. Families are motivated to care for their homes, and urban blight declines. This sense of ownership improves mental health, community pride, and public health outcomes."
    ], 
  },

  OptionB2: {
    text: [
      "You invest in fast-deploying modular homes built with locally sourced, fire-resistant materials. This allows cities to expand capacity quickly without importing expensive goods. These homes provide safe shelter while creating jobs in the local building sector. Cities become less dependent on donor funding and more self-sufficient in housing delivery."
    ], 
  },

  OptionB3: {
    text: [
      "Rather than waiting for outbreaks, you extend municipal waste and sewage services to informal settlements and prioritize sanitation upgrades in disease-prone zones. This dramatically reduces outbreaks, builds trust in public systems, and helps migrants feel included in the civic fabric. Healthy settlements mean fewer crises and lower long-term healthcare costs."
    ], 
  },

  OptionB4: {
    text: [
      "You mandate that all new housing developments include an on-site primary care health clinic and fund them by pooling city, national, and private resources. Residents now have access to care before emergencies arise. These micro-clinics also act as community hubs and early-warning sites for potential disease outbreaks."
    ], 
  },

// OPTION C
// ===============================================================================

  OptionC: {
    text: [
      "Recognizing that migration is inevitable under worsening climate conditions, you form a national task force to develop a coordinated response. This group includes urban planners, public health officials, environmental scientists, and community representatives. Their job is to anticipate migration patterns and prepare accordingly before cities buckle under strain. Your strategy connects urban and rural policy, blends short-term crisis response with long-term climate forecasting, and ensures human rights protections for displaced populations. The task force functions as the country’s climate migration brain, designing safe, dignified movement pathways.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Map Climate Migration Trends Using Satellite and Census Data", next: "OptionC1" },
      { text: "Develop a National Registry for Climate Migrants", next: "OptionC2" },
      { text: "Create Inter-City Agreements on Housing Burden-Sharing", next: "OptionC3" },
      { text: "Launch a Migrant Rights Education Campaign", next: "OptionC4" }
    ]
  },

  OptionB1: {
    text: [
      "You commission detailed studies to map where people are moving, why, and in what numbers. This helps cities anticipate growth and rural regions anticipate loss. With accurate data, you avoid guesswork. Policies become targeted and proactive. You're no longer reacting to chaos—you're managing change."
    ], 
  },

  OptionB2: {
    text: [
      "You build a secure national registry that helps track displaced individuals while protecting their identities. This registry aids in service delivery, housing allocation, and health outreach. Migrants gain visibility, which allows them to dismantle stigma. With documentation, they can access services and be counted in planning decisions."
    ], 
  },

  OptionB3: {
    text: [
      "You facilitate agreements among significant cities to share the responsibility of hosting migrants. These compacts outline budget contributions and development targets. Burden-sharing prevents one city from being overwhelmed. It encourages solidarity and helps smaller cities grow through planned expansion."
    ], 
  },

  OptionB4: {
    text: [
      "You fund a national campaign to educate migrants and the public on migrant rights, housing access, and local resources. This reduces exploitation and misinformation. Migrants feel less alone and more empowered. City residents are less likely to treat newcomers as threats. Education becomes the glue of peaceful co-existence."
    ], 
  },

// OPTION D
// ===============================================================================

  OptionD: {
    text: [
      "To respond quickly and fairly to growing urban populations, you decentralize governance. Municipalities receive greater authority and fiscal autonomy to manage local housing, sanitation, and public health. Local leaders, not distant bureaucrats, make decisions, and local knowledge leads to better outcomes. You link this decentralization with performance incentives. Cities that expand services without defunding core systems receive additional funding and technical support. This encourages innovation and transparency. Local governments grow in capacity, and urban resilience becomes a grassroots-driven project.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Institute Participatory Budgeting in Growing Urban Wards", next: "OptionD1" },
      { text: "Allow Municipal Bonds for Affordable Housing Projects", next: "OptionD2" },
      { text: "Train Local Sanitation Officers to Monitor Disease Hotspots", next: "OptionD3" },
      { text: "Establish Housing Mediation Boards for Migrant Disputes", next: "OptionD4" }
    ]
  },

  OptionD1: {
    text: [
      "You implement participatory budgeting in districts with heavy migration. Residents propose and vote on how to allocate a portion of public funds. This builds civic ownership and helps ensure new policies meet actual needs. People who once felt invisible now help decide how their community grows."
    ], 
  },

  OptionD2: {
    text: [
      "You legalize and support city-level bond issuance for affordable housing. Local governments can now raise their own capital to meet urgent needs. This reduces reliance on slow national funding cycles. Cities move quickly, compete for investment, and prove they can lead."
    ], 
  },

  OptionD3: {
    text: [
      "You train and deploy local sanitation officers to monitor, report, and resolve public health risks. Each officer is linked to a mobile app for data sharing. Fast detection leads to fast intervention. Health risks are stopped before they spread, and the city builds a protective net for its most vulnerable."
    ], 
  },

  OptionD4: {
    text: [
      "You establish local boards to mediate disputes between housing, rent, and informal agreements. These prevent eviction and promote peace in overcrowded areas. Mediation reduces conflict and creates more secure housing arrangements. Migrants trust local institutions when they see fairness upheld."
    ], 
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
    button.className = "button-red";
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
