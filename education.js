// Education & Certifications Data
const educationData = [
  {
    degree: 'Master’s Degree in Fluid Dynamics and Transfer Simulation',
    institution: 'Université Paris XI, France',
    // icon: 'fa-solid fa-building-columns', // Generic university icon
    icon: 'UPS.jpg',
    years: '1999 – 2000',
  },
  {
    degree: 'High Diploma in Mechanical Engineering',
    institution: 'Lebanese University – Faculty of Engineering',
    // icon: 'fa-solid fa-university', // Another university icon
    icon: 'LU.jpg',
    years: '1992 – 1997',
  },
];

const certificationsData = [
  {
    name: 'Full Stack Web Developer',
    institution: 'ESIEE-IT',
    // icon: 'fa-solid fa-laptop-code', // Icon for coding/tech
    icon: 'ESIEE.jpg',
    year: 2022,
  },
  {
    name: 'Full Stack Web Developer',
    institution: 'ESA Coding Lab',
    // icon: 'fa-solid fa-laptop-code', // Icon for coding/tech
    icon: 'ESA.jpg',
    year: 2022,
  },
  {
    name: 'AI for Everyone',
    institution: 'Coursera',
    // icon: 'fa-brands fa-coursera', // Coursera brand icon
    icon: 'coursera.png',
    year: 2020,
  },
  {
    name: 'Programming for Everybody (Python)',
    institution: 'Coursera',
    // icon: 'fa-brands fa-coursera', // Coursera brand icon
    icon: 'coursera.png',
    year: 2020,
  },
];

// function generateEducationHTML(education) {
//   return `
//     <li>
//       <div class="education-item">
//         <img src="${education.icon}" alt="${education.institution}" class="education-icon">
//         <div>
//           <h4>${education.degree}</h4>
//           <p>${education.institution}</p>
//           <span>${education.years}</span>
//         </div>
//       </div>
//     </li>
//   `;
// }

function generateEducationHTML(item) {
  return `
    <li style="display: flex; align-items: center; margin-bottom: 8px;">
      <img src="${item.icon}" alt="${item.institution}" style="width: 40px; height: 40px; margin-right: 8px;" class="education-icon">
      <div>
        <strong>${item.degree}</strong> | ${item.institution} | ${item.years}
      </div>
    </li>
  `;
}

function generateCertificationHTML(item) {
  return `
    <li style="display: flex; align-items: center; margin-bottom: 8px;">
      <img src="${item.icon}" alt="${item.institution}" style="width: 40px; height: 40px; margin-right: 8px;" class="education-icon">
      <div>
        ${item.name} (${item.institution}, ${item.year})
      </div>
    </li>
  `;
}

const educationSectionHTML = `
  <section class="education">
    <h2>Education & Certifications</h2>
    <h3>Education</h3>
    <ul>
      ${educationData.map(generateEducationHTML).join('')}
    </ul>
    <h3>Certifications</h3>
    <ul>
      ${certificationsData.map(generateCertificationHTML).join('')}
    </ul>
  </section>
`;

// Append the education section to the correct div
document.getElementById('education').innerHTML = educationSectionHTML;
