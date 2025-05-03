// Experience Data
const experienceData = [
  {
    id: "edlExperience",
    title: "Quality Manager & Mechanical Engineer",
    company: "Electricité Du Liban (EDL) – Zahrani Power Plant",
    icon: "fa-solid fa-industry", // Icon for industry/power plant
    years: "2014 – 2024",
    details: [
      "<strong>Gas & Steam Turbines:</strong> Oversaw operation and maintenance, ensuring optimal performance. Expertise in steam production via heat recovery.",
      "<strong>Electro-Mechanical Systems:</strong> Supervised maintenance of motors, transformers, control panels, and instrumentation.",
      "<strong>Hydraulic & Pneumatic Systems:</strong> Ensured reliability of pumps and compressors.",
      "<strong>HVAC & Heat Pumps:</strong> Followed up on operation and maintenance.",
      "<strong>Firefighting Systems:</strong> Inspected and maintained for compliance.",
      "<strong>Automation & Control:</strong> DCS, PLC programming (CODESYS), process automation.",
      "<strong>Maintenance Process:</strong> Corrective, preventive, predictive maintenance, troubleshooting.",
      "<strong>Quality Management:</strong> Implemented 100+ procedures (ISO standards), improving compliance by 25%. Internal audits, KPI monitoring.",
      "<strong>Designed KPI Monitoring Application:</strong> Created VBA/Excel tool for 12+ KPIs, automating analysis for 7,500+ AutoCAD maps.",
      "<strong>Soft Skills:</strong> Leadership, problem-solving, cross-cultural collaboration, mentoring."
    ],
    analyticsTag: "qualityManagerAndMechanicalEngineer"
  },
  {
    id: "meesExperience",
    title: "Mechanical Engineer",
    company: "MEES Int. – Beirut, Lebanon",
    icon: "fa-solid fa-cogs", // Icon for engineering/mechanics
    years: "2001 – 2014",
    details: [
      "<strong>Project Management:</strong> Led planning and execution of 10+ engineering projects (on-time, budget adherence).",
      "<strong>System Design & Implementation:</strong> Supervised mechanical system design, achieving >90% client satisfaction.",
      "<strong>Electro-Mechanical Systems:</strong> Designed and maintained electrical/mechanical systems.",
      "<strong>Maintenance & Troubleshooting:</strong> Conducted corrective/preventive maintenance.",
      "<strong>Team Leadership:</strong> Mentored junior engineers, improving team productivity by 20%."
    ],
    analyticsTag: "meesExperience"
  },
  {
    id: "instructorExperience",
    title: "Instructor",
    company: "CNAM & Lebanese University",
    icon: "fa-solid fa-chalkboard-teacher", // Icon for teaching/instructor
    years: "2012 – 2014",
    details: [
      "<strong>Course Delivery:</strong> Taught building physics and numerical simulation.",
      "<strong>MATLAB Simulation Models:</strong> Assisted in developing MATLAB models, improving course relevance by 30%."
    ],
    analyticsTag: "instructorExperience"
  }
];

function generateExperienceHTML(item) {
  return `
    <li class="experience-item fade-in-on-scroll" onclick="toggleExperienceDetails(\'${item.id}\'); trackExperienceClick(\'${item.analyticsTag}\')">
      <i class="${item.icon} fa-fw" style="margin-right: 8px; color: #4364F7;"></i>
      <strong>${item.title}</strong>
      <span>${item.company} | ${item.years}</span>
      <span class="arrow">▼</span> <!-- Initial arrow state -->
      <div id="${item.id}" class="experience-details">
        <ul>
          ${item.details.map(detail => `<li>${detail}</li>`).join("\n")}
        </ul>
      </div>
    </li>
  `;
}

document.getElementById("experience").innerHTML = `
  <section class="experience">
    <h2>Professional Experience</h2>
    <ul>
      ${experienceData.map(generateExperienceHTML).join("\n")}
    </ul>
  </section>
`;

// Function to toggle experience details and arrow
function toggleExperienceDetails(experienceId) {
  const details = document.getElementById(experienceId);
  if (!details) return;

  const parentLi = details.closest(".experience-item");
  const arrow = parentLi?.querySelector(".arrow");
  const allDetails = document.querySelectorAll(".experience-details");

  // Close other details if opening a new one
  if (details.style.display !== "block") {
      allDetails.forEach(detail => {
          if (detail.id !== experienceId) {
              detail.style.display = "none";
              const otherLi = detail.closest(".experience-item");
              const otherArrow = otherLi?.querySelector(".arrow");
              if (otherArrow) {
                  otherArrow.textContent = "▼";
                  otherArrow.classList.remove("open");
              }
              otherLi?.classList.remove("active");
          }
      });
  }

  // Toggle current details and arrow
  if (details.style.display === "block") {
    details.style.display = "none";
    if (arrow) {
        arrow.textContent = "▼";
        arrow.classList.remove("open");
    }
    parentLi?.classList.remove("active");
  } else {
    details.style.display = "block";
    if (arrow) {
        arrow.textContent = "▲"; // Changed to up arrow when open
        arrow.classList.add("open");
    }
    parentLi?.classList.add("active");
  }
}

// Function to track experience clicks (ensure gtag is defined)
function trackExperienceClick(experienceName) {
  if (typeof gtag === "function") {
    gtag("event", "experience_toggle", { // Changed event name for clarity
      "event_category": "Experience",
      "event_label": experienceName,
    });
  } else {
    console.warn("gtag function not found for tracking experience click:", experienceName);
  }
}

// Add styles for active state and arrow positioning (can be moved to CSS)
const expStyleSheet = document.createElement("style");
expStyleSheet.type = "text/css";
expStyleSheet.innerText = `
.experience-item {
    position: relative; /* Needed for absolute positioning of arrow */
}
.experience-item .arrow {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem; /* Adjust as needed */
    font-size: 1rem;
    transition: transform 0.3s ease;
    cursor: pointer; /* Add cursor pointer to arrow */
}
.experience-item .arrow.open {
    transform: rotate(180deg);
}
.experience-item.active {
    /* Optional: Style for active/expanded item */
    /* background-color: #eef5ff; */
}
`;
document.head.appendChild(expStyleSheet);

