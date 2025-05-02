document.getElementById('skills').innerHTML = `
  <section class="skills">
    <h2>Key Skills</h2>
    <ul>
      <li onclick="toggleDetails('mechanicalSkills'); trackSkillClick('Mechanical Engineering Expertise')">
        <strong>Mechanical Engineering Expertise</strong>
        
        <div id="mechanicalSkills" class="skill-details" style="display: none;">
          <ul>
            <li><strong>Mechanical Systems:</strong> Gas turbines, steam turbines, hydraulic/pneumatic systems, HVAC, heat pumps, pumps, valves, and firefighting systems.</li>
            <li><strong>Boilers & Steam Production:</strong> Operation, maintenance, and troubleshooting of industrial boilers, centrifugal/positive displacement pumps, control valves, safety valves, and pressure relief systems. Expertise in steam production via heat recovery processes in combined cycle power plants.</li>
            <li><strong>Electro-Mechanical Systems:</strong> Electrical motors, transformers, protection/control panels, instrumentation devices (calibration, troubleshooting). Good understanding of instrumentation working principles, troubleshooting, and maintenance.</li>
            <li><strong>Automation & Control:</strong> Distributed Control Systems (DCS), PLC programming (CODESYS), process automation, and system optimization.</li>
            <li><strong>Maintenance:</strong> Corrective, preventive, and predictive maintenance, troubleshooting, and system optimization.</li>
            <li><strong>Quality Management:</strong> ISO standards, internal audits, KPI monitoring, safety compliance.</li>
            <li><strong>CAD & Simulation:</strong> Autodesk Inventor, AutoCAD, MATLAB, ANSYS.</li>
          </ul>
        </div>
      </li>
      <li onclick="toggleDetails('softwareSkills'); trackSkillClick('Software Development & IT Expertise')">
        <strong>Software Development & IT Expertise</strong> 
        <div id="softwareSkills" class="skill-details" style="display: none;">
          <ul>
            <li><strong>Programming Languages:</strong> JavaScript, TypeScript, Python, PHP, VBA.</li>
            <li><strong>Web Development:</strong> HTML, CSS, React, Next.js, Node.js, Express, Tailwind, Bootstrap.</li>
            <li><strong>Database Management:</strong> MySQL, PostgreSQL, MongoDB, AWS RDS.</li>
            <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, RDS, Amplify), Vercel, Docker.</li>
            <li><strong>Tools & Frameworks:</strong> Git, Redux, Strapi, Flutter, WebRTC.</li>
          </ul>
        </div>
      </li>
      <li onclick="toggleDetails('softSkills'); trackSkillClick('Soft Skills')">
        <strong>Soft Skills</strong> 
        <div id="softSkills" class="skill-details" style="display: none;">
          <ul>
            <li>Leadership</li>
            <li>Problem-solving</li>
            <li>Cross-cultural collaboration</li>
            <li>Mentoring</li>
            <li>Project management</li>
          </ul>
        </div>
      </li>
    </ul>
    
  </section>
`;

document.querySelectorAll('.skill-category').forEach((element) => {
  element.addEventListener('click', () => {
    const skillId = element.getAttribute('data-skill-id');
    toggleDetails(skillId);
  });
});
// Function to toggle skill details
function toggleDetails(skillId) {
  console.log('Toggling details for:', skillId); // Debugging log
  const details = document.getElementById(skillId);
  const parentLi = details.parentElement;
  const arrow = parentLi.querySelector('.arrow');

  // Toggle the display of the details and update the arrow
  if (details.style.display === 'block') {
    details.style.display = 'none'; // Collapse the details
    arrow.textContent = '▼'; // Set to down arrow
    arrow.style.transform = 'rotate(0deg)'; // Reset animation
  } else {
    details.style.display = 'block'; // Expand the details
    arrow.textContent = '▲'; // Set to up arrow
    arrow.style.transform = 'rotate(180deg)'; // Add animation
  }
}

// Function to track skill clicks
function trackSkillClick(skillName) {
  if (typeof gtag === 'function') {
    gtag('event', 'skill_click', {
      event_category: 'Skills',
      event_label: skillName,
    });
  } else {
    console.warn('Google Analytics is not initialized.');
  }
}
