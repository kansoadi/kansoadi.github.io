// This script dynamically generates the professional experience section of a resume or CV.

document.getElementById('experience').innerHTML = `
  <section class="skills">
    <h2>Professional Experience</h2>
    <ul>
       <li id="edlExperienceItem" onclick="toggleDetails('qualityManagerAndMechanicalEngineer') ; trackExperienceClick('qualityManagerAndMechanicalEngineer')">
        <strong>Quality Manager & Mechanical Engineer</strong> 
        <span>Electricité Du Liban (EDL) – Zahrani Power Plant | 2014 – 2024</span>
         <div id="edlExperience" class="experience-details" style="display: none;">
          <ul>
            <li><strong>Gas & Steam Turbines:</strong> Oversaw the operation and maintenance of gas and steam turbines, ensuring optimal performance and reliability. Expertise in steam production through heat recovery processes in combined cycle power plants.</li>
            <li><strong>Electro-Mechanical Systems:</strong> Supervised the maintenance and troubleshooting of electrical motors, transformers, protection and control panels, and instrumentation devices, including their working principles and calibration.</li>
            <li><strong>Hydraulic & Pneumatic Systems:</strong> Ensured the reliability of hydraulic and pneumatic systems, including pumps and compressors.</li>
            <li><strong>HVAC & Heat Pumps:</strong> Followed up on the operation and maintenance of HVAC systems and heat pumps.</li>
            <li><strong>Firefighting Systems:</strong> Regularly inspected and maintained to ensure compliance and functionality.</li>
            <li><strong>Automation & Control Systems:</strong> Distributed Control Systems (DCS), PLC programming (CODESYS), process automation, and system optimization.</li>
            <li><strong>Maintenance Process:</strong> Corrective, preventive, and predictive maintenance, troubleshooting, and system optimization.</li>
            <li><strong>Quality Management:</strong> Developed and implemented 100+ operational procedures, improving compliance with safety and quality standards by 25%, ISO standards, internal audits, KPI monitoring, and safety compliance.</li>
            <li><strong>Designed KPI Monitoring Application:</strong> Created a VBA and Excel-based application for 12+ KPIs, automating data analysis and reporting for 7,500+ AutoCAD maps.</li>
            <li><strong>Soft Skills:</strong> Leadership, problem-solving, cross-cultural collaboration, and team mentoring.</li>
          </ul>
        </div>
      </li>
      <li onclick="toggleDetails('meesExperience') ; trackExperienceClick('meesExperience')">
        <strong>Mechanical Engineer</strong> 
        <span>MEES Int. – Beirut, Lebanon | 2001 – 2014</span>
        <div id="meesExperience" class="experience-details">
          <ul>
            <li><strong>Project Management:</strong> Led the planning and execution of 10+ engineering projects, ensuring on-time delivery and adherence to budget constraints.</li>
            <li><strong>System Design & Implementation:</strong> Supervised the design and implementation of mechanical systems, achieving over 90% client satisfaction.</li>
            <li><strong>Electro-Mechanical Systems:</strong> Designed and maintained electrical and mechanical systems, including motors and control panels.</li>
            <li><strong>Maintenance & Troubleshooting:</strong> Conducted corrective and preventive maintenance on mechanical and electrical systems.</li>
            <li><strong>Team Leadership:</strong> Mentored junior engineers, improving team productivity by 20%.</li>
          </ul>
        </div>
      </li>
      <li onclick="toggleDetails('instructorExperience') ; trackExperienceClick('instructorExperience')">
        <strong>Instructor</strong> 
        <span>CNAM & Lebanese University | 2012 – 2014</span>
        <div id="instructorExperience" class="experience-details">
          <ul>
            <li><strong>Course Delivery:</strong> Delivered courses on building physics and numerical simulation, enhancing student understanding of engineering principles.</li>
            <li><strong>MATLAB Simulation Models:</strong> Assisted in developing MATLAB-based simulation models, improving course material relevance by 30%.</li>
          </ul>
        </div>
      </li>
    </ul>
  </section>
`;

//  Attach event listeners after the DOM has been updated
document
  .getElementById('edlExperienceItem')
  .addEventListener('click', () => toggleDetails('edlExperience'));

// Function to toggle experience details
function toggleDetails(experienceId) {
  console.log('Toggling details for:', experienceId); // Debugging log
  const details = document.getElementById(experienceId);
  const parentLi = details.parentElement;
  let arrow = parentLi.querySelector('.arrow');

  // If the arrow span doesn't exist, create it dynamically
  if (!arrow) {
    arrow = document.createElement('span');
    arrow.className = 'arrow';
    parentLi.insertBefore(arrow, details); // Insert the arrow before the details div
  }

  // Toggle the display of the details and update the arrow
  if (details.style.display === 'block') {
    details.style.display = 'none'; // Collapse the details
    arrow.textContent = '▼'; // Set to down arrow
  } else {
    details.style.display = 'block'; // Expand the details
    arrow.textContent = '▲'; // Set to up arrow
  }
}

function trackExperienceClick(experienceName) {
  if (typeof gtag === 'function') {
    // Send event to Google Analytics
    if (experienceName === 'qualityManagerAndMechanicalEngineer') {
      gtag('event', 'quality_manager_and_mechanical_engineer', {
        event_category: 'Experience',
        event_label: 'Quality Manager & Mechanical Engineer',
      });
    } else if (experienceName === 'meesExperience') {
      gtag('event', 'mees_experience', {
        event_category: 'Experience',
        event_label: 'Mechanical Engineer at MEES Int.',
      });
    } else if (experienceName === 'instructorExperience') {
      gtag('event', 'instructor_experience', {
        event_category: 'Experience',
        event_label: 'Instructor at CNAM & Lebanese University',
      });
    }
  }
}
