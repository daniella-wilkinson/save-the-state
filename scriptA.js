const story = {
  start: {
    text: [
      "Region A is an unincorporated territory in the Caribbean Sea, comprising a group of distinctive low-lying islands within a sprawling archipelago. Each island faces particular environmental challenges, including rising sea levels, coastal erosion, flooding, and increasingly severe hurricanes—all exacerbated by climate change. Region A maintains regional self-governance but relies on federal governance to conduct international affairs. It uniquely depends on the federal administration to secure aid and assistance during natural disasters.",

      "Decades of infrastructure deterioration have left Region A's population in a precarious state, highly vulnerable to environmental threats. The federal government's consistent failure to prioritize infrastructure investments exposes its citizens to environmental hazards and natural disasters. The public infrastructure, ill-equipped to withstand the region's extreme weather events, is a ticking time bomb. For instance, the water and energy infrastructure is insufficient and outdated, often leading to statewide power outages, mainline breaks, and water contamination.",

      "Moreover, the aftermath of previous disasters has left a lasting impact on the region. Many vulnerable individuals are displaced, and ongoing government neglect continues to displace them. The lack of proper infrastructure means that evacuation routes and refuges are equally incapable of withstanding disaster. These issues create a dire situation, with the potential for the complete decimation of infrastructure. The people of Region A lack the most essential fail-safes and are defenseless against storms.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Build Green Infrastructure", next: "OptionA" },
      { text: "Relocate High-Risk Residents", next: "OptionB" },
      { text: "Pursue Foreign Investment", next: "OptionC" },
      { text: "Establish Climate Equity Council", next: "OptionD" }
    ]
  },

// OPTION A
// ===============================================================================

  OptionA: {
    text: [
      "You propose a multi-year, job-creating federal initiative to rebuild water, energy, and transportation systems using climate-resilient, renewable technologies like solar microgrids, permeable road surfaces, and stormwater capture systems. This policy aims to bolster community resilience to environmental threats by modernizing local infrastructure to withstand storms and flooding and expanding employment in construction, renewable energy, and maintenance sectors to increase economic viability and provide opportunities for citizens with low educational attainment. Within five years, several islands witness a significant drop in power outages and storm-related infrastructure failures. Communities near upgraded seawalls and elevated roads report fewer evacuations and less flood damage, painting a promising picture of the future.",

      "National lawmakers resist the high costs associated with modernizing infrastructure and allocating resources to Region A, leading to political opposition across party lines. Some federal government members argue that the plan is too expensive and unfairly benefits Region A. As a result, a budget dispute halts additional phases of the project. This discourse derails progress. Additionally, bureaucracy and logistical challenges contribute to implementation delays, slowing initial efforts to assess the green program's short-term benefits and long-term returns.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Conduct a Congressional Caucus", next: "OptionA1" },
      { text: "Conduct Regional Job-Training", next: "OptionA2" },
      { text: "Launch Corporate Tax Credits and Debits", next: "OptionA3" },
      { text: "Introduce Climate Equity Tax", next: "OptionA4" }
    ]
  },

  OptionA1: {
    text: [
      "You initiate a Congressional Caucus focused on climate-resilient infrastructure for vulnerable mainland regions, with Region A at the forefront. You know that policy change at the federal level requires strategic coalition-building, so you bring together representatives from other coastal and disaster-prone districts who face similar challenges. The goal is to form a united front to push for targeted legislation, appropriations, and oversight that center on infrastructure modernization in frontline climate zones.",

      "As you navigate the political landscape, you quickly realize that bipartisan support hinges on framing the issue as both environmental, economic, and national security imperatives. You collaborate with climate scientists, urban planners, and military readiness experts to testify before Congress. Their data helps reinforce the urgency: failing to invest now could lead to catastrophic costs later.",

      "You did it! The caucus successfully drafted a federal infrastructure resiliency bill to commit substantial funds for coastal and island communities. While the legislative path remains bumpy, your leadership secures Region A a seat at the national policy table. It elevates its visibility in the eyes of decision-makers and media alike."
    ], 
  },

  OptionA2: {
    text: [
      "You launch a regional workforce development initiative, understanding that building climate-resilient infrastructure isn't just about roads and seawalls—it's about people. You begin by partnering with local colleges, trade unions, and vocational schools to design job-training programs focused on green construction, sustainable materials, renewable energy systems, and disaster response logistics.",

      "As you navigate the political landscape, you quickly realize that bipartisan support hinges on framing the issue as both environmental, economic, and national security imperatives. You collaborate with climate scientists, urban planners, and military readiness experts to testify before Congress. Their data helps reinforce the urgency: failing to invest now could lead to catastrophic costs later.",

      "As the first cohorts graduate, momentum builds. Local contractors hire from these new talent pools, reducing reliance on off-island labor. Communities feel a renewed sense of ownership over the rebuilding process, and trust in local government begins to mend. The program also helps create a culture of climate literacy, where workers and residents better understand the long-term environmental risks they face."
    ], 
  },

  OptionA3: {
    text: [
      "You push for a bold package of green tax credits to incentivize climate-smart investment across Region A. Your proposal includes credits for installing rooftop solar panels, upgrading homes with storm-resistant features, purchasing electric vehicles, and investing in rainwater harvesting and greywater recycling systems. Businesses that retrofit their buildings for energy efficiency or invest in resilient supply chains are also eligible.",

      "You know that tax credits must be accessible to low-income residents, not just property owners and corporations, for them to work equitably. So, you design the credits to be refundable and pair them with outreach campaigns and free consultation services. You also partner with local lenders to offer microloans and grants for upfront costs, ensuring the poorest communities aren't left behind.",

      "Soon, the policy starts to yield results. Local hardware stores report spikes in sales of sustainable building materials. Energy bills drop across participating households. Over time, these tax incentives begin transforming Region A's infrastructure from the bottom up—house by house, business by business—making it more resilient while sparking grassroots economic growth."
    ], 
  },

  OptionA4: {
    text: [
      "Facing the reality that long-term infrastructure resilience requires sustained public funding, you propose a phased tax increase strategy. Rather than a steep hike, your plan raises taxes incrementally over a decade, targeting luxury goods, large-scale tourism development, and carbon-intensive industries operating in Region A. A portion of the revenue also comes from modest increases in federal transfers secured through your congressional lobbying.",

      "You take care to communicate transparently with the public. You hold town halls and launch an online dashboard to show how tax revenues will be used—such as funding storm-resistant schools, underground power lines, and elevated emergency shelters. You also propose accountability measures, including citizen oversight boards and third-party audits.",

      "The transition isn't without friction. Some wealthier stakeholders threaten to pull out or relocate their business operations. But your message resonates with the broader population: this is about survival, sovereignty, and security. Public support grows over time as the infrastructure visibly improves and withstands seasonal storms. Residents begin to see taxes not as burdens but as investments in their future."
    ], 
  },

// OPTION B 
// ===============================================================================

  OptionB: {
    text: [
      "You implement a controversial plan to relocate residents from the most flood-prone coastal areas to safer inland zones, offering compensation, housing support, and community relocation aid. This proactive step preserves lives and property and significantly reduces exposure to storm surges and sea-level rise. Families previously living in high-risk flood zones resettle into safer, climate-adapted housing, and mental health support services expand to assist those adjusting to new communities.",

      "Yet, newly developed inland towns experience growing pains, such as strained water supplies, crowded schools, and pressure on sanitation services. The government is under pressure to ensure services keep pace with migration. Additionally, some communities resist relocation due to their deeply rooted historical and cultural connections to their land, leading to a painful sense of cultural displacement.",

      "Conversely, coastal tourism and fishing industries are declining, while the costs associated with disaster recovery and rebuilding are decreasing over time. The once-vibrant coastal tourism community and flourishing fishing industries are beginning to falter as population shifts contribute to this economic downturn.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],

    options: [
      { text: "Establish Cultural Heritage Relocation Program", next: "OptionB1" },
      { text: "Establish a Coastal Economic Transition Fund", next: "OptionB2" },
      { text: "Launch Relocation Committees", next: "OptionB3" },
      { text: "Zone Vacated Areas for Restoration", next: "OptionB4" }
    ]
  },

  OptionB1: {
    text: [
      "You recognize that relocation isn't just about moving people and preserving identity. To address this, you establish a Cultural Heritage Relocation Program that works with communities to document, safeguard, and move cultural landmarks, local archives, and historical structures that risk being lost to rising seas and intensified storms.",

      "You start by partnering with local historians, artists, elders, and anthropologists to identify high-priority sites. Oral histories are recorded, artifacts cataloged, and key buildings are structurally reinforced or carefully relocated. You allocate funding for cultural centers in safer inland areas where traditions can continue—spaces for festivals, storytelling, and craft-making.",

      "You also ensure communities are not erased in the process. Your program respects the deep ties between place and identity and avoids treating relocation as cultural abandonment. Residents feel their legacy matters. While the physical locations may change, the spirit and history of Region A's people remain intact, rooted in memory and practice rather than threatened shorelines."
    ],
  },

  OptionB2: {
    text: [
      "As economic centers along the coast become increasingly vulnerable, you know a transition must happen—and quickly. You create a Coastal Economic Transition Fund to support local economies shifting away from high-risk, high-impact industries (like beachfront tourism or overfishing) toward more sustainable inland alternatives.",

      "Your fund offers seed capital for green businesses, inland tourism cooperatives, aquaponics ventures, and renewable energy startups. Small business owners can apply for technical assistance and interest-free loans. You also establish retraining support for workers transitioning out of climate-vulnerable sectors.",

      "You accompany this policy with careful messaging: this isn't abandonment—it's evolution. Communities are reassured that their livelihoods will not disappear but adapt. Over time, the fund helps re-anchor economic activity on safer ground, preventing economic collapse in the wake of environmental change and strengthening resilience from the inside out."
    ],
  },

  OptionB3: {
    text: [
      "You know that forced top-down relocation would breed resentment and trauma, so you empower residents to lead their future through Relocation Committees. Each committee comprises local leaders, urban planners, environmental scientists, and neighborhood representatives who work together to design and oversee community-driven relocation plans.",

      "These committees are granted authority to select sites, set timelines, and coordinate logistics, such as land transfers, transportation, and housing construction. You ensure meetings are open and multilingual, reflecting the diversity of the islands. Committees also receive funds to hold workshops and engage in scenario-planning exercises with their constituents.",

      "This participatory process transforms relocation from an act of loss into one of collective decision-making. People feel heard. Community bonds are preserved even when geography changes. Critically, relocation becomes not a last resort but a proactive step toward safety, dignity, and long-term survival."
    ],
  },

  OptionB4: {
    text: [
      "As communities move inland, you propose an ambitious plan to rezone vacated coastal areas for environmental restoration. Instead of selling the land to developers or leaving it unregulated, you convert it into nature reserves, mangrove reforestation zones, and storm buffer ecosystems. You coordinate with ecologists, coastal engineers, and indigenous land stewards to develop restoration strategies that increase biodiversity and enhance climate resilience. Wetlands are rehabilitated to absorb floodwaters, while mangrove forests are replanted to reduce wave impacts. You pass legislation to protect these zones from future development or commercial exploitation.",

      "This zoning plan sends a strong signal: Region A is not retreating in defeat but repositioning with foresight. Over time, these restored coastal ecosystems act as natural shields, protecting inland settlements and contributing to carbon sequestration goals. Residents take pride in the idea that what was once lost can now become a source of life, protection, and regeneration."
    ],
  },

// OPTION  C 
// ===============================================================================
  
  OptionC: {
    text: [
      "You propose legislation granting Region A greater autonomy in securing international aid, loans, and partnerships with organizations such as NGOs or neighboring countries for infrastructure development. This approach enables critical rebuilding efforts to start sooner by utilizing foreign or non-federal support, thus bypassing federal inaction. However, the central government retaliates and reduces other forms of funding in response. Implementing innovative practices and successful strategies from abroad leads to improved outcomes. However, some financing agreements impose long-term repayment challenges on the region.",

      "Moreover, you advocate for national legislation acknowledging Region A's historical exclusion from equitable development. This legislation would allocate funds for reparative justice through investments in environmental, economic, and healthcare initiatives. However, securing equitable representation for Region A remains challenging due to rising tensions.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],

    options: [
      { text: "Negotiate a Regional-Federal Infrastructure Compact", next: "OptionC1" },
      { text: "Create a Debt Transparency & Accountability Office", next: "OptionC2" },
      { text: "Initiate a Regional Climate Coalition", next: "OptionC3" },
      { text: "Setup Global Engagements for Infrastructure Projects", next: "OptionC4" }
    ]
  },

  OptionC1: {
    text: [
      "Region A cannot rebuild its deteriorating infrastructure independently; federal neglect has persisted for too long, and the stakes are high. Therefore, you begin negotiations to establish a legally binding Infrastructure Compact between Region A and the federal government. This compact will outline specific funding benchmarks, project timelines, and mutual responsibilities related to resilience-building efforts.",

      "You request funding and guarantees, including a system for overseeing disbursements linked to performance and public reporting requirements. In exchange, you agree to improve project readiness and ensure compliance with national building codes. This agreement compels the federal government to view Region A not as a peripheral dependency but as an equal partner with shared interests in climate adaptation.",

      "The process is challenging; political friction and bureaucratic resistance hinder progress. However, public pressure, media coverage, and the increasing impact of natural disasters create momentum for change. When the agreement is finally signed, it serves as a model for other vulnerable regions. You have gained more than just funding; you have restored political legitimacy and the authority to shape the future of your area."
    ],
  },

  OptionC2: {
    text: [
      "You recognize that corruption, inefficiency, and opaque financial practices have historically undermined public trust and wasted valuable resources. To address this issue, you establish a Debt Transparency and Accountability Office (DTAO)—an independent body responsible for auditing all existing infrastructure debt, overseeing new contracts, and tracking every dollar spent.",

      "You staff the office with independent economists, legal experts, civil society leaders, and digital transparency specialists. Every infrastructure loan, contract, and spending decision is published online through user-friendly dashboards. This initiative is not just internal bureaucracy but a way to restore public confidence.", 

      "By exposing past and present spending, you weaken the influence of corruption and create opportunities for international investment. The DTAO also helps identify redundant or abusive debt structures and renegotiate terms where possible. Over time, this office becomes a vigorous watchdog and sends a clear message to the world that Region A is committed to clean, equitable, and climate-smart governance."
    ],
  },

  OptionC3: {
    text: [
      "Region A is not alone in its struggles; other island nations face similar challenges, including severe weather, neglect, and existential threats. To address these issues, you have established a Regional Climate Coalition that includes neighboring island governments, indigenous leaders, and environmental NGOs. This coalition believes that a united voice can provide more significant leverage.",

      "The coalition begins with a shared charter that outlines common climate priorities, such as funding for resilient infrastructure, shared disaster response systems, and the ability to negotiate for international aid collectively. You also advocate for a rotating leadership model and create a youth advisory council to ensure diverse and sustained engagement.",

      "Through this coalition, you pool technical resources, share policy models, and attract international attention as a unified bloc. You are no longer isolated; your island's needs are amplified through coordinated action. As the coalition gains momentum, international donors and climate advocates start noticing. You have strengthened your region by fostering collaboration."
    ],
  },

  OptionC4: {
    text: [
      "You realize that relying solely on national or regional funds is insufficient—Region A needs global partners. Through formal international engagements, you lead an initiative to attract multilateral development banks, foreign governments, and private international infrastructure firms. You present Region A as a testing ground for innovative, climate-smart infrastructure solutions.",

      "To facilitate this, you host an international summit, inviting investors, engineers, climate finance leaders, and resilience experts. Your pitch emphasizes transparency, community participation, and environmental justice. You also highlight the need for sustainable development, including roads and bridges, solar grids, water reclamation systems, and storm-resilient transit hubs.",

      "Although you remain cautious, these efforts successfully bring in new capital and technical expertise. You implement legal safeguards to prevent land grabs and exploitative contracts. With international backing, your infrastructure projects progress more rapidly and effectively. You've secured funding and positioned Region A as a global leader in climate-resilient development."
    ],
  },

// OPTION D 
// ===============================================================================

  OptionD: {
    text: [
      "You erect a decentralized governing body composed of residents, climate scientists, urban planners, and Indigenous leaders to collaboratively design infrastructure and disaster response plans. This council receives public funding and has decision-making authority. Region A aims to reduce its reliance on mainland energy systems by creating a state-run utility that will invest in solar, wind, and tidal energy, positioning itself as a leader in sustainable power.",

      "Residents feel empowered and more engaged in long-term solutions that reflect their community's experiences and cultural values. However, decision-making is slower due to diverse viewpoints and priorities, and national officials challenge the council's authority and withhold funding. Following the initial investments, the region generates 50% of its electricity from renewable sources. Blackouts become infrequent, energy prices stabilize, and quality of life and business continuity improve.",

      "Opposition arises from mainland fossil fuel providers and utility corporations, which lobby against this transition, threatening legal action and withholding infrastructure support. Meanwhile, remote or economically disadvantaged islands face logistical challenges in accessing these green energy benefits.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices will increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],

    options: [
      { text: "Enact Rotating Representation and Term Limits", next: "OptionD1" },
      { text: "Form a Federal Advisory Liasion Office", next: "OptionD2" },
      { text: "Secure independent funding sources", next: "OptionD3" },
      { text: "Adopt Participatory Budgeting Tools", next: "OptionD4" }
    ]
  },

  OptionD1: {
    text: [
      "You recognize that decades of political stagnation and corruption have led to public disillusionment with leadership. To restore faith in local governance, you advocate for legislation implementing rotating representation and strict term limits for regional offices. No individual or party should be allowed to concentrate power indefinitely, particularly during times of crisis.",

      "Collaboration with civil society organizations helps you design a fair electoral rotation system that ensures all significantly smaller and often marginalized islands receive equal opportunities to hold leadership roles. Implementing term limits reduces patronage networks and paves the way for new voices, including younger leaders, women, and historically excluded groups.",

      "While long-standing political figures may resist these changes, the public overwhelmingly supports the reform. Over time, a new culture of civic engagement emerges—leadership is no longer viewed as a permanent entitlement but rather as a temporary stewardship. Communities feel more represented and invested in the democratic process because they understand their turn is coming."
    ],
  },

  OptionD2: {
    text: [
      "You recognize that much of Region A's suffering arises from a lack of formal, consistent communication with the federal government. You establish a Federal Advisory Liaison Office (FALO) to address this issue. This permanent office is dedicated to directly advocating Region A's needs in the capital.",

      "The liaison office serves as your policy anchor in federal spaces. It collects data from across the region, translates it into concrete recommendations, and lobbies for resources, regulatory waivers, and policy reforms. Staffed by local experts and community advocates, the office ensures that your region's voice is always present, even as national priorities shift",

      "This initiative professionalizes advocacy and creates a permanent channel of influence. It also protects Region A from being used as a political bargaining chip or neglected after news cycles fade. The office has become a symbol of self-respect—an informed presence that demands dignity rather than sympathy for disaster."
    ],
  },

  OptionD3: {
    text: [
      "Absolute autonomy cannot exist if Region A completely depends on inconsistent federal transfers. To shift the balance of power, you start working to secure independent funding sources for regional projects. This involves exploring new revenue streams such as green bonds, carbon offset markets, diaspora investment programs, and strategic public-private partnerships.",

      "You establish a sovereign development fund managed transparently and audited annually, allowing Region A to respond quickly in times of crisis—without waiting for federal approval or facing bureaucratic delays. Additionally, you introduce a voluntary diaspora tax and propose investment bonds to islanders living abroad, giving them a tangible way to contribute to the island's future",

      "These new funding sources are not just about finances; they represent self-determination. Communities feel a greater sense of ownership over locally funded projects, reducing their perception as victims of distant indifference. Over time, you use these funds to complete water resilience systems and community shelters, demonstrating that Region A can be self-sufficient and stand independently."
    ],
  },

  OptionD4: {
    text: [
      "You believe rebuilding trust requires more than mere promises; it demands putting absolute power into people's hands. To achieve this, you implement participatory budgeting tools across municipalities, giving residents a direct say in allocating public funds. The initiative begins with pilot programs in storm-prone districts and eventually expands to all major budget lines.",

      "You train local officials and organize community workshops to explain the process. Residents are encouraged to propose and vote on small-scale projects such as solar panel installations, storm drains, school air filters, and emergency shelters. To improve accessibility, you integrate digital tools and make a concerted effort to prioritize marginalized voices, particularly those from rural or low-income areas.",

      "The results are significant. When residents see the projects they voted for becoming a reality, skepticism diminishes. They no longer feel alienated from politics; instead, they recognize the tangible results of their input. Participatory budgeting transforms abstract governance into a concrete and democratic experience. Over time, trust begins to grow—not because you told people to believe, but because you gave them a reason to."
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
    button.className = "button-blue";
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
