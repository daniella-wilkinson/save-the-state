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
     "You recognize that development has come at the cost of the delta's most effective flood buffers—wetlands and mangroves. You initiate a large-scale restoration campaign, identifying key sites for ecological rehabilitation.",

      "Some residents have concerns about residential relocation initiatives aimed at developing ecological buffers. However, you reassure them that residential areas will remain unchanged.",
      
     "You work with local scientists and landowners to reestablish native vegetation and water flow. In time, these restored ecosystems absorb excess water naturally, reducing floods and improving biodiversity. Communities also begin to see the wetlands not as swamps but as life-saving systems worth protecting."
    ], 
  },

  OptionA2: {
    text: [
     "You partner with local governments to mandate that new developments and significant renovations incorporate green infrastructure, such as green roofs, permeable pavement, and bioswales. You also educate developers and offer financial incentives to help offset initial costs. Over time, these practices allow stormwater to seep into the ground rather than accumulate in streets and low-lying areas. This approach is not just about controlling floods; it's about redesigning urban life to work with water rather than against it."
    ], 
  },

  OptionA3: {
    text: [
     "To address the delta's sprawling urbanization, you propose a rezoning plan that establishes an ecological buffer around the most flood-prone areas. This plan restricts new development while encouraging landowners to transition vulnerable plots into green spaces. The buffer zone becomes a dual-purpose asset, reducing disaster risk and offering recreation, limited tourism, and educational opportunities tied to the delta's unique ecosystems."
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
      "You recognize the warning signs. The unchecked expansion into Region D's fragile delta is creating a potential disaster—more homes and buildings in areas prone to flooding. You make the tough decision to stop future development, prioritizing compact, elevated, and carefully zoned growth instead. This decision goes beyond halting expansion; it aims to reshape the region's development.",

      "You introduce planning reforms, enforce new building codes, and offer relocation options for the most vulnerable residents. This approach necessitates difficult political decisions, such as imposing limits on land use, suspending risky construction, and encouraging developers to build vertically rather than horizontally to curb urban sprawl.",

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
     "You draft a new set of planning rules and regulations focused on environmentally-conscious urban planning to mitigate urban sprawl, concentrating development in existing urban centers, and preserving underdeveloped land near the delta.",

     "You form planning councils that include scientists, architects, and citizen representatives. Though it meets initial resistance from some developers, your approach helps prevent reckless expansion into fragile flood zones and lays the foundation for safer, more sustainable urban growth and development."
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
    "You commission a region-wide overhaul of drainage infrastructure. Instead of patchwork fixes, you integrate predictive flood modeling and green engineering principles into the upgrade. Outlets are widened, pumps are replaced, and stormwater tunnels are expanded.",

    "You also install overflow alert systems so communities can act quickly when risks are high. Within a few years, the system handles storms that would've previously caused disaster."
    ], 
  },

  OptionC2: {
    text: [
    "You develop an extensive, forward-thinking strategy to raise critical transit routes and evacuation corridors well above anticipated flood levels. Although the project requires significant investment, the potential long-term savings in safeguarding lives and protecting property are beyond dispute. Your focus is on elevating routes adjacent to essential services such as hospitals, educational institutions, and densely populated neighborhoods, ensuring easy access for emergency response teams and residents alike.",

    "As the next catastrophic flood event strikes, these meticulously elevated pathways are life-saving, facilitating swift evacuations and ensuring that vital supply chains remain operational. This initiative demonstrates a proactive approach to urban planning and stands as a compelling testament to the impact of strategic foresight in disaster preparedness. It ultimately preserves hundreds of lives and enhances community resilience in the face of natural disasters."
    ], 
  },

  OptionC3: {
    text: [
    "You assemble engineers, university researchers, and local government officials to establish Green Innovation Labs, where they collaborate to develop innovative, low-cost, nature-inspired solutions for public infrastructure challenges. These labs focus on prototyping systems such as advanced stormwater harvesting systems that efficiently collect and reuse rainfall, environmentally friendly floating walkways that enhance waterfront access while minimizing ecological impact, and flood-resistant building materials designed to withstand extreme weather conditions.",

    "In addition to fostering creative problem-solving, these labs play a crucial role in training the next generation of technicians, equipping them with hands-on skills and knowledge necessary for sustainable practices. They also create clear career pathways, ensuring that young professionals are prepared to adapt and modernize outdated systems in response to the evolving environmental landscape."
    ], 
  },

  OptionC4: {
    text: [
      "You initiate an extensive audit throughout the region to assess the effectiveness of existing flood defenses, pinpointing which neighborhoods receive adequate protection and remain highly vulnerable to flooding. Throughout this thorough examination, you discover alarming and persistent disparities: low-income and marginalized communities are disproportionately at risk, facing heightened exposure to flooding due to inadequate infrastructure and resources.",

      "Armed with these critical insights, you strategically redistribute infrastructure funding. This strategic reallocation aims to provide equitable support across all neighborhoods, ensuring that no community is left to bear the brunt of environmental challenges due to their geographic location or historical political neglect. By prioritizing investments in the most at-risk areas, your approach addresses immediate vulnerabilities and fosters long-term social equity and environmental resilience, building a stronger foundation for all residents to thrive, regardless of their socioeconomic status."
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
      "You play a crucial role in establishing neighborhood flood response teams specially trained in various aspects of emergency preparedness. These teams undergo focused training in sandbagging techniques to mitigate floodwaters effectively, conduct water testing to ensure local water safety, and implement community alert systems to keep residents informed during flood events.",

      "Operating similarly to volunteer fire brigades, these local teams are explicitly equipped to respond to flood emergencies. They are often the first responders to arrive on the scene when heavy rainfall triggers potential flooding, offering immediate assistance to those affected long before federal agencies can mobilize.",

      "Having these trained teams within the community fosters trust among residents, creating a sense of security and solidarity. Their prompt action not only alleviates the immediate impact of floods but also enhances the overall efficiency of the response efforts, ensuring that help arrives quickly and effectively."
    ], 
  },


  OptionD2: {
    text: [
      "You realize that community awareness is as critical as infrastAwareness within the community is just as vital as the sturdy infrastructure that supports it. Recognizing this, you orchestrate a comprehensive campaign to enlighten residents about the intricacies of flood zones, the nuances of insurance options, essential evacuation procedures, and the importance of household preparedness. The educational materials are crafted to be multilingual and user-friendly, ensuring that no one is left in the dark.",

      "To further extend your reach, you form dynamic partnerships with local schools and faith organizations, weaving a support network throughout the community. Gradually, the community shifts from a stance of reaction to one of proactive engagement, as residents become equipped with the knowledge and tools they need to prepare for floods. This transformation fosters a sense of empowerment, unity, and resilience, turning uncertainty into confidence and transforming their approach to flood challenges."
    ], 
  },


  OptionD3: {
    text: [
      "You empower local communities by establishing citizen review boards that meticulously assess new urban development proposals, particularly in flood-prone areas. These boards act as a vital link between residents and decision-makers, ensuring that the community's voices resonate loud and clear regarding building placement and design. Through this collaborative approach, residents gain the authority to challenge and reshape projects that threaten to exacerbate flood risks, transforming their concerns into actionable insights.",

      "Consequently, developers recognize the importance of community input, adjusting their plans thoughtfully to incorporate flood mitigation strategies. This ultimately leads to more resilient and harmonious urban landscapes. Over time, this convergence of civic engagement and urban planning fosters a culture where the community's and the environment's needs are prioritized and respected."
    ], 
  },


  OptionD4: {
    text: [
      "You dedicate a significant portion of the annual flood management budget to a vibrant participatory budgeting process, inviting residents to actively shape your community's future. This dynamic initiative allows locals to propose and vote on innovative solutions tailored to their needs, empowering them to choose from an array of options that include raised sidewalks designed to keep their feet dry during heavy rains, efficient water pumps to aid in quick drainage, and sturdy community storage units to safeguard their belongings against unpredictable weather.",

      "While you establish specific parameters to guide the process, the true power rests firmly in the hands of the community. They delve into discussions, weighing the benefits of each proposal with great care, and take great pride in making thoughtful decisions. This sense of ownership fosters a deep commitment to safeguarding the projects they have championed, as they understand the value of their collective voice and effort in the decision-making journey. Through this collaborative approach, they build structures to protect their homes and weave a stronger bond within their community, united in their quest for resilience against the forces of nature."
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
