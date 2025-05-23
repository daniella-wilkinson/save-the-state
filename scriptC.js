const story = {
  start: {
    text: [
      "Region B is a West African nation near the Atlantic Ocean. Its land includes verdant forests, rivers, lakes, and wetlands. It is particularly susceptible to rising temperatures and heat waves, which erode historic wildlife habitats and disturb rural villages. In response, rural populations rapidly migrate from rural to urban areas to escape severe floods, droughts, and heatwaves exacerbated by climate change. ",
      
      "Local governments are increasingly concerned about population decline in rural villages caused by climate-induced migration. Many individuals are leaving rural communities, where rising temperatures impact their livelihoods, searching for better social and economic opportunities in urban areas. Rural communities, primarily agricultural, play a vital role in providing food for themselves and urban centers. Therefore, it is particularly alarming that farmers are abandoning their farms for non-agricultural work in cities due to the challenges posed by climate change, which are making farming increasingly challenging.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Support Climate-Resilient Agriculture", next: "OptionA" },
      { text: "Develop Rural Livelihood Diversification Programs", next: "OptionB" },
      { text: "Strengthen Urban Planning for Climate Migrants", next: "OptionC" },
      { text: "Erect a National Public Health Adaptation Program", next: "OptionD" }
    ]
  },

// OPTION A
// ===============================================================================

  OptionA: {
    text: [
      "To address rural population exodus and the decline in agricultural productivity, you initiate a comprehensive Climate-Resilient Agriculture Initiative. Your program aims to equip farmers with the tools and knowledge to adapt to changing climatic conditions, ensuring sustainable food production and livelihoods. Your initiative seeks to enhance resilience against droughts, floods, and heatwaves by integrating traditional farming practices with modern climate-conscious techniques.",

      "Central to your initiative is promoting climate-conscious agriculture, which includes practices such as agroforestry, conservation agriculture, and drought-resistant crop varieties. You establish training programs to educate farmers on these methods, emphasizing the importance of soil health, water conservation, and diversified cropping systems. Additionally, your initiative supports the development of local seed banks and disseminates early warning systems for extreme weather events.",

      "Your initiative revitalizes rural agriculture through climate adaptation and make farming a viable and attractive livelihood. This effort curbs rural-to-urban migration and ensures food security for rural and urban populations.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Establish Climate-Smart Agriculture Training Centers", next: "OptionA1" },
      { text: "Provide Access to Drought-Resistant Seed Varieties", next: "OptionA2" },
      { text: "Implement Community-Based Water Harvesting Systems", next: "OptionA3" },
      { text: "Launch Agricultural Microfinance Programs", next: "OptionA4" }
    ]
  },

  OptionA1: {
    text: [
      "You establish regional training centers that educate farmers about climate-smart agricultural practices. These centers act as hubs for knowledge exchange, demonstrations, and capacity building, specifically designed to address each area's unique climatic and ecological conditions. Collaborating with agricultural universities and research institutions ensures the training is based on the latest scientific research.",

      "The curriculum includes topics such as soil conservation, water-efficient irrigation techniques, pest management, and the cultivation of climate-resilient crops. Special emphasis is placed on engaging women and youth, acknowledging their vital roles in agriculture and community development.",

      "These centers significantly contribute to the transformation of agricultural practices by equipping farmers with knowledge and practical skills. As farmers adopt these methods, they experience improved yields, reduced vulnerability to climate change, and improved livelihoods."
    ], 
  },

  OptionA2: {
    text: [
      "Recognizing the challenges of erratic rainfall and prolonged dry spells, you prioritize distributing drought-resistant seed varieties to farmers. In collaboration with agricultural research institutions, you identify and multiply resilient crop varieties resilient to drought. You establish seed distribution networks to ensure timely and equitable access for farmers region-wide. You cultivate governmental aid programs to guide farmers on ideal planting times, soil cultivation, and crop management practices tailored to these new crop varieties.",

     "Your effort enhances food security and reduces the risk of crop failure by facilitating the adoption of drought-resistant crops. Farmers gain a buffer against climatic uncertainties, leading to more stable incomes and reducing the incentives to migrate to urban centers in search of alternative livelihoods."  
    ], 
  },

  OptionA3: {
    text: [
      "You promote establishing community-based water collection systems to tackle water scarcity worsened by climate change. These systems, which include rainwater collection tanks, dams, and dikes, are designed to capture and store rainwater for agricultural use during dry periods. Involving the community in the planning and construction of these systems fosters local ownership and sustainability.",

      "You conduct training programs to educate communities on maintaining and efficiently utilizing these water resources. You develop guidelines to manage water distribution reasonably, preventing conflicts and ensuring that all community members benefit. Monitoring mechanisms are also established to assess these systems' effectiveness and identify areas for improvement.",

      "By enhancing water availability for agriculture, these systems help mitigate the impacts of drought and reduce crop failures. Your efforts boost food production and also strengthen the resilience of rural communities, making them less vulnerable to the climate threats that drive migration to urban centers."
    ], 
  },

  OptionA4: {
    text: [
      "Access to financial resources is essential for farmers looking to invest in climate-resilient practices. You are launching microfinance programs specifically designed to meet the needs of smallholder farmers. These programs will offer low-interest loans and flexible repayment terms, enabling farmers to purchase essential inputs such as improved seeds, fertilizers, and irrigation equipment.",

      "To ensure the success of these initiatives,youwill provide financial literacy training to equip farmers with the skills needed to manage their loans effectively and make informed investment decisions. You will also establish partnerships with local banks and cooperatives to facilitate the loan disbursement and repayment processes. Additionally,youwill introduce risk mitigation measures, such as crop insurance schemes, to protect farmers against potential losses.",

      "These microfinance programs aim to stimulate agricultural productivity and foster economic growth in rural areas by financially empowering farmers. As farming becomes more profitable and sustainable, the appeal of urban migration decreases, contributing to more balanced regional development."
    ], 
  },

 // OPTION B
// ===============================================================================
  
  OptionB: {
    text: [
      "Recognizing that agriculture alone may not sustain rural economies in changing climate conditions, you implement programs to diversify rural livelihoods. These initiatives strive to create alternative income-generating opportunities, reduce reliance on climate-sensitive agriculture, and enhance community resilience. By broadening the local economy, rural areas become more appealing to residents, helping to limit migration to urban centers.",

      "You develop a skill development and entrepreneurship initiative, to promote small and medium-sized businesses in textiles, commercial pottery, handicrafts, and renewable energy sectors. You establish training centers to equip individuals with essential skills. You must aim special attention to empowering women and young people, as their inclusion in the labor market is vital for driving economic transformation.",

      "These programs foster diversified and resilient rural economies, offering economically-viable livelihoods that stimulate local markets and services. Your comprehensive approach contributes to the overall well-being of rural communities, making them more self-reliant and less vulnerable to the negative impacts of climate change that erode economic stability. Notably, instability remain in the agricultural sector, the primary contributor to rural economies.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Establish Climate-Smart Agriculture Training Centers", next: "OptionB1" },
      { text: "Provide Access to Drought-Resistant Seed Varieties", next: "OptionB2" },
      { text: "Implement Community-Based Water Harvesting Systems", next: "OptionB3" },
      { text: "Launch Agricultural Microfinance Programs", next: "OptionB4" }
    ],
  },

  OptionB1: {
    text: [
      "You institute vocational training in rural areas to equip residents with skills that align with emerging economic opportunities. The courses include carpentry, tailoring, solar panel installation, and agro-processing techniques. These institutes are fitted with modern facilities and staffed by qualified instructors to ensure high-quality training.",

      "Collaborations with industry partners and NGOs (non-governmental organizations) facilitate internships and job placements for graduates, effectively bridging the gap between training and employment. Additionally, entrepreneurship modules are included in the curriculum to foster self-employment and encourage business creation. Outreach programs are conducted to raise awareness and promote enrollment, especially among marginalized groups.",

      "By enhancing the skill sets of rural populations, these institutes expand employment opportunities beyond traditional agriculture. This diversification of livelihoods contributes to economic resilience and reduces the need for migration to urban areas in search of work."
    ], 
  },

  OptionB2: {
    text: [
      "Community-based ecotourism is promoted as an alternative source of livelihood by leveraging rural areas' natural and cultural assets. This initiative involves developing eco-friendly tourism infrastructure, such as nature trails, cultural centers, and homestays, all managed by local communities. Training is provided in hospitality, tour guiding, and environmental conservation to ensure high-quality services and sustainable practices.",

      "Marketing strategies are created to attract domestic and international tourists, emphasizing unique experiences and the authenticity of rural life. Revenue generated from tourism is reinvested into community development projects, such as education and healthcare, fostering a sense of ownership and pride among residents. Environmental conservation efforts are also enhanced to preserve the attractions that draw visitors.",

      "Rural communities can diversify their economies and reduce reliance on agriculture by creating employment and income opportunities through ecotourism. This approach strengthens resilience to climate impacts, preserves cultural heritage, and promotes environmental stewardship."
    ], 
  },

  OptionB3: {
    text: [
      "Recognizing the potential of renewable energy in rural development, you support establishing community-based renewable energy initiatives. These initiatives focus on installing and maintaining solar panels and micro-hydropower systems, providing clean energy solutions for households and businesses.",

      "Additionally, training programs are conducted to build local expertise in renewable energy technologies. Subsidies and low-interest loans offer financial incentives to encourage this growth further.",

      "Local and state governments raise concerns over installation and maintenance costs to outfit rural communities with green energy infrastructure, often in communities without substantial modern infrastructure. The upfront costs associated with renewable energy and sustainable infrastructure are undeniable; however, you reassure naysayers arguing the importance of improving rural livelihoods to maintain the agricultural labor market and curb unsustainable rural-to-urban migration."

    ], 
  },
  
  OptionB4: {
    text: [
      "You propose a series of microloan programs to assist local farmers by subsidizing their maintenance costs. These loans will support farmers transitioning to drought-resilient crop varieties and adopting more sustainable technologies for harvesting and distributing their produce. Your microloans are highly flexible, providing farmers with the necessary funds to stay afloat during this transition to new methods and practices that enhance climate resilience, moving away from previous unsustainable practices increasingly jeopardized by climate change.",

      "Your microloan program aims to promote financial inclusion and help alleviate the economic struggles of farmers who require substantial government subsidies to remain viable."
    ], 
  },

// OPTION C
// ===============================================================================
  
  OptionC: {
    text: [
      "To address the growing influx of rural-to-urban migrants and the resulting pressure on city infrastructure, you develop a national program to enhance urban resilience and accommodate displaced populations. This initiative focuses on inclusive urban planning that anticipates migration patterns, ensures access to housing, and integrates migrants into cities' social and economic fabric. The program mitigates the risks of informal settlements, urban poverty, and social tensions by proactively strengthening urban systems.",

    "Key components include zoning reforms, investment in public utilities, expansion of affordable housing, and the integration of climate-resilient infrastructure such as flood-resistant roads and green drainage systems. The program involves multi-level coordination among municipal authorities, planners, and climate experts to develop city plans that are both adaptive and inclusive. Emphasis is placed on participatory planning processes to include migrant voices in decision-making.",

    "By creating urban environments that can sustainably absorb population growth, the initiative reduces the adverse effects of migration and improves the quality of life for both existing residents and new arrivals. Urban areas become engines of development rather than sites of vulnerability, reinforcing national climate adaptation and development goals.",

      "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
    ],
    options: [
      { text: "Expand Affordable and Climate-Resilient Housing Projects", next: "OptionC1" },
      { text: "Upgrade Urban Sanitation, Water, and Waste Systems", next: "OptionC2" },
      { text: "Create Urban Employment Hubs for Climate Migrants", next: "OptionC3" },
      { text: "Strengthen Migrant Social Integration Services", next: "OptionC4" }
    ]
  },

  OptionC1: {
    text: [
      "You invest in affordable housing developments for low-income migrants and individuals displaced by climate change. These housing units are built using cost-effective, climate-resilient materials and techniques, including raised foundations, reflective roofs, and water-efficient sanitation systems. Locations are selected based on their proximity to public services, employment centers, and transit routes.",

      "Local communities are involved throughout the planning and construction phases to ensure that the housing solutions reflect cultural preferences and promote social cohesion. Housing cooperatives and rent-to-own models are introduced to encourage ownership and foster financial inclusion. Urban land banks and public-private partnerships help reduce costs and scale construction efforts.",

      "This policy aims to curb the growth of informal settlements and improve public health outcomes by increasing migrants' access to safe and dignified housing. Additionally, it reduces environmental risks such as flood vulnerability and supports sustainable urban growth."
    ], 
  },

  OptionC2: {
    text: [
      "Urban areas experiencing rapid population growth often encounter challenges with overstretched sanitation, water, and waste management systems. This approach focuses on investing in the expansion and upgrading of essential infrastructure, prioritizing climate resilience and equitable access for migrant communities. The new systems are designed to withstand floods and heat waves, ensuring reliable service delivery.",

      "Community-led initiatives are supported to maintain cleanliness in high-density neighborhoods, and decentralized sanitation options (such as composting toilets or mobile water tanks) are introduced where traditional systems are infeasible. Recycling cooperatives and youth employment programs are also encouraged to manage solid waste.",

      "Improved water and sanitation services improve health outcomes and reduce disease outbreaks, particularly in informal settlements. They also enhance the living conditions of migrants and foster positive integration into urban environments."
    ], 
  },

  OptionC3: {
    text: [
      "To assist rural migrants in their economic transition, you establish urban employment hubs in areas with growing residential populations. These centers will provide training, job-matching services, and entrepreneurship support designed for newcomers from rural regions. They will function as 'one-stop shops' that connect migrants with formal sector employment, cooperatives, and small business opportunities.",

      "Specialized programs will focus on former farmers and displaced workers, equipping them with skills in construction, food services, digital work, and green infrastructure maintenance. Employers will be encouraged to hire through these hubs by offering tax breaks and wage subsidies.",

      "This initiative aims to transform climate migration from a crisis into an opportunity, promoting upward mobility and social integration. Additionally, it will reduce competition for informal sector jobs and support the development of inclusive urban economies."
    ], 
  },

  OptionC4: {
    text: [
      "Recognizing the potential of renewable energy in rural development,yousupport establishing community-based renewable energy enterprises. These enterprises focus on installing and maintaining solar panels, biogas digesters, and micro-hydropower systems, providing clean energy solutions for households and businesses. Additionally, training programs are conducted to build local expertise in renewable energy technologies. ",

      "Financial incentives such as subsidies and low-interest loans are offered to encourage this growth further."
    ], 
  },

// OPTION D
// ===============================================================================
  
OptionD: {
  text: [
    "In response to health risks related to climate change, you launch a National Public Health Adaptation Program aimed at building climate-resilient health systems. This program addresses the increasing incidence of vector-borne diseases, heat-related illnesses, malnutrition, and mental health stressors affecting both rural and urban populations. It prioritizes vulnerable groups, including children, the elderly, and rural-to-urban migrants.",

    "The program focuses on strengthening health infrastructure, improving disease surveillance, expanding mobile health services, and training healthcare workers in climate-sensitive care. It also promotes public awareness campaigns that highlight the links between climate and health, prevention strategies, and emergency response preparedness.",

    "Collaboration with global health and climate agencies will ensure access to technology and best practices. This initiative aims to enhance national well-being, increase productivity, and prevent future humanitarian crises by connecting climate resilience with health outcomes. It complements broader climate adaptation efforts while fulfilling international commitments.",

    "As a staff member, you must make policy decisions to address the issues in your community. The effectiveness of your choices may increase or decrease your community's resilience to environmental threats. How will you proceed?"
  ],
  options: [
    { text: "Deploy Mobile Clinics to Underserved Areas", next: "OptionD1" },
    { text: "Launch Early Warning Systems for Climate-Related Disease Outbreaks", next: "OptionD2" },
    { text: "Train Climate-Health Community Workers", next: "OptionD3" },
    { text: "Introduce Climate-Responsive Nutrition Programs", next: "OptionD4" }
  ]
},

OptionD1: {
  text: [
    "You deploy solar-powered mobile clinics to rural and peri-urban areas that lack sufficient health services. These clinics offer vaccinations, maternal healthcare, treatment for climate-related diseases, and health education. They are equipped with telemedicine tools and can be quickly dispatched during climate disasters.",

    "Staffed by trained nurses and community health workers, the mobile units also collect health data for national surveillance systems. They coordinate with local leaders to determine service schedules and assess community health needs.",

    "By extending the reach of healthcare systems, these clinics improve health outcomes and prevent the spread of diseases exacerbated by climate shocks and migration. Additionally, they help build trust in public health systems and enhance preparedness for climate risks."
  ], 
},

OptionD2: {
  text: [
    "You implement early warning systems that utilize meteorological data, mobile phone alerts, and community reporting to anticipate outbreaks of diseases such as malaria, dengue, and cholera. Public alerts and community response protocols are activated when risk thresholds are exceeded. Outbreak containment kits and medical teams are dispatched to high-risk areas before cases escalate.",

    "This system significantly reduces morbidity and mortality associated with climate-sensitive diseases in densely populated urban centers. It also strengthens institutional coordination between health and climate agencies while building community resilience."
  ], 
},

OptionD3: {
  text: [
    "You train a group of community health workers to understand the connections between climate and health, emphasizing prevention, adaptation, and mobilization within the community.",

    "These workers educate households on practices for clean water, preventing heat-related illnesses, and maintaining nutrition during crop failures. They also monitor vulnerable individuals, such as the elderly and disabled, during heat waves or floods, connecting them to medical assistance when needed.",

    "In rural areas, they act as first responders to public health crises. By investing in local human resources, you cultivate culturally competent and trusted health advocates who help reduce the burden on health systems and enhance community resilience to climate impacts."
  ], 
},

OptionD4: {
  text: [
    "Recognizing the increasing malnutrition resulting from agricultural decline, we are implementing targeted nutrition programs that tackle food insecurity through local sourcing and climate-adapted meal planning. These initiatives include school feeding programs, food vouchers, and community gardens that use drought-tolerant crops.",

    "Health centers will distribute climate-smart nutrition supplements to pregnant women, infants, and the elderly, continuously monitoring growth and dietary health. Public campaigns will promote awareness of nutrient-rich Indigenous foods and food preservation techniques.",

    "Addressing climate-induced malnutrition supports long-term health and cognitive development, particularly for youth. Additionally, it creates a connection between public health and climate-resilient agricultural policy."
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
