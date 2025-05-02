document.getElementById('projects').innerHTML = `
  <section class="projects">
    <h2 class="fade-in">Projects</h2>
    <ul>
      <li class="slide-in project-item" onclick="toggleDetails('project1'); trackProjectClick('digitalHealth')">
        <strong>Digital Healthcare Platform | Startup Company (Canada) | Sep 2023 – Aug 2024</strong>
        <div id="project1" class="project-details">
          <p>- Designed and implemented a SaaS-based healthcare platform to streamline patient-provider interactions, reducing appointment wait times.</p>
          <p>- Developed core features including user registration, appointment booking, and clinic management using Next.js, Strapi, Redux, Next-Auth, Yup, and PostgreSQL.</p>
          <p>- Integrated scheduling APIs and payment gateways (Stripe), enhancing user experience and enabling an increase in platform engagement.</p>
          <p>- Architected and deployed a multi-tier application using AWS services, deployed frontend on AWS Amplify and backend on EC2 and database on RDS, and uploaded files on S3, ensuring reliable performance and scalability.</p>
          <p onclick="trackProjectWebClick('digitalHealth')">
           <a href="https://main.d1b7orjfwwu8wb.amplifyapp.com/welcome" target="_blank" rel="noopener noreferrer">
          Digital Healthcare Platform
        </a></p>
        </div>
      </li>
      <li class="slide-in project-item" onclick="toggleDetails('project2'); trackProjectClick('APGWeb')">
        <strong>E-commerce Website Development | ITCherry (Beirut) | May 2024</strong>
        <div id="project2" class="project-details">
          <p>- Developed a responsive e-commerce website for APG.</p>
          <p>- Utilized Next.js and CSS frameworks to create dynamic front-end features, including product listings and contact forms.</p>
          <p>- Deployed via Vercel.</p>
          <p onclick="trackProjectWebClick('APGWeb')">
          <a href="https://www.apg-lb.com/" target="_blank" rel="noopener noreferrer">
          APG E-commerce Website</a></p>
          </div>
      </li>
      <li class="slide-in project-item" onclick="toggleDetails('project3'); trackProjectClick('characteristicCurve')">
        <strong>Characteristics Curve Analysis of Small Three-Phase Generators | Academic Research | Jun 2023 – Oct 2023</strong>
        <div id="project3" class="project-details">
          <p>- Designed and fabricated a precision test mechanism (mechanical components modeled in Autodesk Inventor) for evaluating small three-phase generators, achieving 95% data accuracy through robust instrumentation.</p>
          <p>- Implemented Arduino-based data acquisition with:</p>
          <ul>
            <li>Custom sensor arrays to capture real-time voltage, current.</li>
            <li>Integrated torque transducer for mechanical load characterization.</li>
          </ul>
          <p>- Developed Python algorithms to automate analysis, generating industry-standard characteristic curves for 5+ generator models. Acquired synchronized real-time data via serial communication from both Arduino and the torque transducer.</p>
        </div>
      </li>
      <li class="slide-in project-item" onclick="toggleDetails('project4'); trackProjectClick('sisWeb')">
        <strong>Student Information System (SIS) | ESA University (Beirut) | Oct 2022 – Jul 2023</strong>
        <div id="project4" class="project-details">
          <p>- Led a team to design and deploy an online SIS platform, improving data accessibility for students.</p>
          <p>- Integrated REST APIs and PostgreSQL for seamless data exchange, reducing administrative workload.</p>
          <p>- Deployed on a Windows server virtual machine.</p>
          <p onclick="trackProjectWebClick('sisWeb')"> <a href="http://inscription.esa.edu.lb/" target="_blank" rel="noopener noreferrer">
         ESA University Website</a></p>
        </div>
      </li>
      <li class="slide-in project-item" onclick="toggleDetails('project5'); trackProjectClick('quicoWeb')">
        <strong>Front-end E-commerce Development | ITCherry (Beirut) | Apr 2023 – Jun 2023</strong>
        <div id="project5" class="project-details">
          <p>- Designed and implemented an e-commerce platform using Next.js and TypeScript, improving user experience.</p>
          <p>- Integrated Firebase for real-time database management and Bootstrap for responsive design.</p>
          <p>- Deployed via Vercel.</p>
          <p onclick="trackProjectWebClick('quicoWeb')"> <a href="https://www.quicotech.com/" target="_blank" rel="noopener noreferrer">
          Quicotech Website</a></p>
        </div>
      </li>
      <li class="slide-in project-item" onclick="toggleDetails('project6'); trackProjectClick('fullStackBootcamp')">
        <strong>Full Stack Developer Bootcamp Projects | 2021 – 2022</strong>
        <div id="project6" class="project-details">
          <p>- Led the development of a blog event platform and a MERN-based e-commerce platform, showcasing proficiency in React, Node.js, WebRTC, and MongoDB.</p>
          <p>- Mentored team members, ensuring timely delivery and high-quality outputs.</p>
        </div>
      </li>
    </ul>
  </section>
`;

// Function to toggle project details
function toggleDetails(projectId) {
  const details = document.getElementById(projectId);
  if (details.style.display === 'block') {
    details.style.display = 'none';
  } else {
    details.style.display = 'block';
  }
}

// Function to track project clicks
function trackProjectClick(projectName) {
  if (typeof gtag === 'function') {
    // Send event to Google Analytics
    if (skillName === 'digitalHealth') {
      gtag('event', 'digital_Health', {
        event_category: 'digitalHealth',
        event_label: projectName,
      });
    } else if (skillName === 'APGWeb') {
      gtag('event', 'APG_Web', {
        event_category: 'APGWeb',
        event_label: projectName,
      });
    } else if (skillName === 'characteristicCurve') {
      gtag('event', 'characteristic_Curve', {
        event_category: 'characteristicCurve',
        event_label: projectName,
      });
    } else if (skillName === 'sisWeb') {
      gtag('event', 'SIS_Web', {
        event_category: 'sisWeb',
        event_label: projectName,
      });
    } else if (skillName === 'quicoWeb') {
      gtag('event', 'Quico_Web', {
        event_category: 'quicoWeb',
        event_label: projectName,
      });
    } else if (skillName === 'fullStackBootcamp') {
      gtag('event', 'Full_Stack_Bootcamp', {
        event_category: 'fullStackBootcamp',
        event_label: projectName,
      });
    } else if (skillName === 'fullStackBootcamp') {
      gtag('event', 'Full_Stack_Bootcamp', {
        event_category: 'fullStackBootcamp',
        event_label: projectName,
      });
    }
  }
}

// Function to track project website clicks
function trackProjectWebClick(projectName) {
  if (typeof gtag === 'function') {
    // Send event to Google Analytics
    if (projectName === 'digitalHealth') {
      gtag('event', 'digital_Health_Website', {
        event_category: 'digitalHealth',
        event_label: projectName,
      });
    } else if (projectName === 'APGWeb') {
      gtag('event', 'APG_Web_Website', {
        event_category: 'APGWeb',
        event_label: projectName,
      });
    } else if (projectName === 'sisWeb') {
      gtag('event', 'SIS_Web_Website', {
        event_category: 'sisWeb',
        event_label: projectName,
      });
    } else if (projectName === 'quicoWeb') {
      gtag('event', 'Quico_Web_Website', {
        event_category: 'quicoWeb',
        event_label: projectName,
      });
    }
  }
}
