const story = {
  start: {
    text: [
      "Region B is a West African nation near the Atlantic Ocean. Its land includes verdant forests, rivers, lakes, and wetlands. It is particularly susceptible to rising temperatures, heat waves, and wildfires, which erode historic wildlife habitats and disturb rural villages. In response, rural populations rapidly migrate from rural to urban areas to escape severe floods, droughts, and wildfires exacerbated by climate change.",
      
      "Local governments in urban centers are alarmed by an emerging issue— public health degradation. The rural migrant population is increasing at a rate that outpaces infrastructure investment in affordable housing. Urban areas that receive an influx of migrants struggle to provide adequate, affordable housing, which forces vulnerable migrant populations to erect slums. Urban centers lack the necessary investment to propagate affordable housing to satisfy demand without defunding crucial public services to balance the budget. Inadequate housing settlements are a public health issue. Makeshift plumbing, garbage disposal, and tightly knit living quarters breed the necessary conditions for disease outbreaks.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Launch a Climate-Resilient Rural Development Program", next: "OptionA" },
      { text: "Support Affordable Housing", next: "OptionB" },
      { text: "Erect Climate Migration Strategy", next: "OptionC" },
      { text: "Decentralize Urban Governance", next: "OptionD" }
    ],
  },

// OPTION A
// ===============================================================================

  OptionA: {
    text: [
      "To slow rural-to-urban migration, you introduce a climate-resilient rural development initiative. You aim to strengthen the viability of staying in rural areas by restoring degraded ecosystems, funding wildfire prevention efforts, and providing access to renewable energy and clean water infrastructure. By making rural living safer and more sustainable, you begin to stem the migration flow at its source. You incorporate training and tools for sustainable farming practices, early warning systems for natural hazards, and local cooperatives to share resources. Investing in climate resilience creates long-term social stability while reducing pressure on overcrowded cities.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Support Local Agroforestry", next: "OptionA1" },
      { text: "Implement Solar Microgrids in Isolated Villages", next: "OptionA2" },
      { text: "Provide Job-Training in Eco-Restoration Employment", next: "OptionA3" },
      { text: "Implement Firebreak Zoning", next: "OptionA4"}
    ]
  },

  OptionA1: {
    text: [
      "You invest in tree-crop integration systems that promote food security and ecological stability. Agroforestry enhances food production and creates microclimates that help combat heat waves. This approach empowers rural families by providing them with diversified income sources, reducing migration pressure. As the trees mature, the community's resilience also grows. Soil quality improves, the risk of wildfires decreases, and villages become more self-sufficient. Rural residents start to view climate adaptation as a form of empowerment rather than a retreat.",

      "Agroforestry proves to be a sufficient solution to slow the pace of rural-urban migration. More farmers remain in rural centers and maintain the local economy and agricultural labor sector."
    ], 
  },

  OptionA2: {
    text: [
      "We invest in developing solar-powered microgrids, which provide a dependable source of electricity to remote villages that are not connected to the national power grid. This access to reliable electricity significantly enhances educational opportunities, making schools more effective learning environments. By powering local businesses, we help to create sustainable economic growth, allowing entrepreneurs to expand their offerings and reach more customers. Furthermore, health clinics benefit from reliable energy, enabling them to operate essential medical equipment and maintain proper storage for medicines, thus providing better healthcare services to the community.",

      "With a consistent electricity supply, villagers experience a newfound sense of connectivity to the modern world, fostering a spirit of innovation and progress. This energy access transformation revitalizes local economies and contributes to reducing migration to urban areas, as improved living conditions encourage families to remain in their rural communities. Ultimately, by bringing electricity to these villages, we are not just providing a utility but unlocking a world of opportunities for a brighter future."

    ], 
  },

  OptionA3: {
    text: [
      "You initiate a comprehensive training program to empower young professionals beginning their professional careers. This program focuses on critical environmental tasks such as restoring wetlands, preventing soil erosion, and managing areas at high risk of wildfires. By engaging these young workers in hands-on projects, you provide them with valuable income and equip them with essential skills that will serve them well in their future careers without necessitating a move to urban centers.",

      "Participants experience a renewed sense of purpose and self-worth as they contribute to meaningful work that benefits their communities and the environment. Your initiative effectively reframes the narrative around conservation efforts, showcasing them as viable job opportunities rather than financial burdens. As a result, residents in rural areas are gaining a fresh perspective on their potential futures, recognizing that they can remain in their hometowns and flourish personally and professionally. This transformative approach fosters a sustainable local economy, allowing communities to thrive while preserving their natural resources for future generations."
    ], 
  },

  OptionA4: {
    text: [
      "You collaborate closely with local villagers to establish effective natural firebreaks and comprehensive wildfire watch plans. By integrating traditional knowledge with modern training methods, the community gains valuable skills to manage and protect fire-prone landscapes. This hands-on approach empowers residents to take charge of their own safety and preserve their homes.",

      "These proactive defenses significantly minimize the risk of loss of life and property. Rather than remaining passive and reactive in the face of potential disasters, these communities spearhead their own resilience strategies, thereby deepening their connection to the land and fostering a sense of stewardship that benefits them and enhances the overall health of the environment."
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
      { text: "Construct Modular Temp. Housing Using Local Materials", next: "OptionB2" },
      { text: "Expand Municipal Waste & Sewage Systems to New Settlements", next: "OptionB3" },
      { text: "Designate Health Clinics in New Housing Blocks", next: "OptionB4" }
    ]
  },

  OptionB1: {
    text: [
      "Imagine implementing a rent-to-own program designed specifically to empower families on their journey toward home ownership. This innovative initiative replaces the cycle of permanent slums with a structured path to stability—one that includes subsidized payments tailored to each family's financial situation and housing linked to essential services like education and healthcare.",

      "In this program, families are not just tenants but motivated homeowners who gradually build home equity. As they invest financially and emotionally in their living spaces, they develop a more profound sense of responsibility and commitment to maintaining their properties. This results in well-kept homes and neighborhoods, which helps combat urban blight and deterioration.",

      "The positive ripple effects of this ownership model extend beyond physical improvements. Their connection to the community strengthens, fostering agency and engagement. Additionally, better living conditions contribute to improved public health outcomes, as families in stable environments experience lower stress levels and enhanced quality of life. Your program transforms individual lives and revitalizes entire neighborhoods, creating a healthier, more vibrant urban landscape."
    ], 
  },

  OptionB2: {
    text: [
      "You envision a transformative approach to urban living, where communities flourish thanks to the rapid deployment of state-of-the-art modular homes designed with care for both safety and sustainability. These homes are constructed using locally sourced, fire-resistant materials, ensuring that the suburban landscape is attractive and resilient to the elements.",

      "Your model enables cities to expand their housing capacity swiftly and efficiently, bypassing the pitfalls of relying on expensive imports. Each modular unit is designed for easy assembly, allowing it to be erected in days rather than months, which is crucial in times of housing shortages.",

      "Beyond providing shelter, these homes create a ripple effect of job opportunities in the local building sector. Skilled workers, from carpenters to electricians, find meaningful employment, stimulating the economy and strengthening community ties. As the neighborhoods fill with these thoughtfully designed homes, cities gain a newfound independence from external donor funding, positioning themselves to foster a self-sufficient and sustainable housing delivery system.",

      "Your efforts in urban areas enhance residents' living conditions and cultivate a culture of resilience and self-reliance."
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
      { text: "Map Climate Migration Trends", next: "OptionC1" },
      { text: "Develop a National Registry for Climate Migrants", next: "OptionC2" },
      { text: "Create Inter-City Agreements on Housing Burden-Sharing", next: "OptionC3" },
      { text: "Establish Migrant Rights Campaign", next: "OptionC4" }
    ]
  },

  OptionC1: {
    text: [
      "You commission detailed studies to map where people are moving, why, and in what numbers. This helps cities anticipate growth and rural regions anticipate loss. With accurate data, you avoid guesswork. Policies become targeted and proactive. You're no longer reacting to chaos—you're managing change."
    ], 
  },

  OptionC2: {
    text: [
      "You build a secure national registry that helps track displaced individuals while protecting their identities. This registry aids in service delivery, housing allocation, and health outreach. Migrants gain visibility, which allows them to dismantle stigma. With documentation, they can access services and be counted in planning decisions."
    ], 
  },

  OptionC3: {
    text: [
      "You work to establish formal agreements among major metropolitan areas to collaboratively manage the influx of migrants. These comprehensive compacts delineate each city's specific financial contributions and clearly defined development targets that aim to enhance local infrastructure and services.",

      "This burden-sharing strategy ensures that no single city becomes overburdened by the challenges associated with accommodating new residents. It fosters a sense of solidarity among cities while enabling smaller communities to develop sustainably through organized growth and expansion efforts. By working together, the cities can create a more equitable and supportive environment for all migrants, ultimately enriching each locale's cultural and economic fabric."
    ], 
  },

  OptionC4: {
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
      { text: "Create a Participatory Budget in Emerging Urban Sectors", next: "OptionD1" },
      { text: "Fund Bond Initatives to Supprot Affordable Housing", next: "OptionD2" },
      { text: "Train Local Sanitation Officers to Monitor Disease Hotspots", next: "OptionD3" },
      { text: "Erect Housing Mediation Boards", next: "OptionD4" }
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
      "You establish local boards to mediate disputes between housing, rent, and informal agreements. These prevent eviction and promote peace in overcrowded areas. Mediation reduces conflict and creates more secure housing arrangements. Migrants trust local institutions when they see fairness upheld.",

      "Conflicts are addressed proactively through structured mediation processes, leading to more secure and reliable housing arrangements for residents. When migrants observe that these local institutions consistently uphold fairness and justice, their trust and confidence in the system grow, encouraging a more cohesive community. This approach mitigates tension and enhances the overall well-being of individuals living in overcrowded areas."
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

  history.forEach((entry, index) => {
    const li = document.createElement("li");

    // If it's the last entry, include sceneText (description)
    if (index === history.length - 1) {
      li.innerHTML = `<div style="padding: 1em;"><strong>Policy :</strong> ${entry.choiceText}<br><strong>Description :</strong> ${entry.sceneText}</div>`;
    } else {
      // For earlier entries, show only the policy choice
      li.innerHTML = `<div style="padding: 1em;"><strong>Policy :</strong> ${entry.choiceText}</div>`;
    }

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
