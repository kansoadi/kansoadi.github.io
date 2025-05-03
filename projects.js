const projectsData = [
  {
    id: 'project1',
    title: 'Digital Healthcare Platform | Startup Company (Canada) | Sep 2023 – Aug 2024',
    details: [
      'Designed and implemented a SaaS-based healthcare platform to streamline patient-provider interactions, reducing appointment wait times.',
      'Developed core features including user registration, appointment booking, and clinic management using Next.js, Strapi, Redux, Next-Auth, Yup, and PostgreSQL.',
      'Integrated scheduling APIs and payment gateways (Stripe), enhancing user experience and enabling an increase in platform engagement.',
      'Architected and deployed a multi-tier application using AWS services, deployed frontend on AWS Amplify and backend on EC2 and database on RDS, and uploaded files on S3, ensuring reliable performance and scalability.'
    ],
    link: 'https://main.d1b7orjfwwu8wb.amplifyapp.com/welcome',
    linkText: 'Digital Healthcare Platform',
    imageSrc: null, // Placeholder: Add image path e.g., "images/project1.jpg"
    imageAlt: 'Digital Healthcare Platform Screenshot',
    caption: 'A modern platform connecting patients and healthcare providers.',
    analyticsTag: 'digitalHealth'
  },
  {
    id: 'project2',
    title: 'E-commerce Website Development | ITCherry (Beirut) | May 2024',
    details: [
      'Developed a responsive e-commerce website for APG.',
      'Utilized Next.js and CSS frameworks to create dynamic front-end features, including product listings and contact forms.',
      'Deployed via Vercel.'
    ],
    link: 'https://www.apg-lb.com/',
    linkText: 'APG E-commerce Website',
    imageSrc: null, // Placeholder: Add image path e.g., "images/project2.jpg"
    imageAlt: 'APG E-commerce Website Screenshot',
    caption: 'Responsive e-commerce site for APG.',
    analyticsTag: 'APGWeb'
  },
  {
    id: 'project3',
    title: 'Characteristics Curve Analysis of Small Three-Phase Generators | Academic Research | Jun 2023 – Oct 2023',
    details: [
      'Designed and fabricated a precision test mechanism (mechanical components modeled in Autodesk Inventor) for evaluating small three-phase generators, achieving 95% data accuracy through robust instrumentation.',
      'Implemented Arduino-based data acquisition with custom sensor arrays (voltage, current) and integrated torque transducer.',
      'Developed Python algorithms to automate analysis, generating industry-standard characteristic curves. Acquired synchronized real-time data via serial communication.'
    ],
    link: null,
    imageSrc: null, // Placeholder: Add image path e.g., "images/project3.png"
    imageAlt: 'Generator Test Mechanism Diagram',
    caption: 'Research project involving hardware setup and data analysis.',
    analyticsTag: 'characteristicCurve'
  },
  {
    id: 'project4',
    title: 'Student Information System (SIS) | ESA University (Beirut) | Oct 2022 – Jul 2023',
    details: [
      'Led a team to design and deploy an online SIS platform, improving data accessibility for students.',
      'Integrated REST APIs and PostgreSQL for seamless data exchange, reducing administrative workload.',
      'Deployed on a Windows server virtual machine.'
    ],
    link: 'http://inscription.esa.edu.lb/',
    linkText: 'ESA University Website (Related)',
    imageSrc: null, // Placeholder: Add image path e.g., "images/project4.jpg"
    imageAlt: 'ESA SIS Screenshot',
    caption: 'Student Information System for ESA University.',
    analyticsTag: 'sisWeb'
  },
  {
    id: 'project5',
    title: 'Front-end E-commerce Development | ITCherry (Beirut) | Apr 2023 – Jun 2023',
    details: [
      'Designed and implemented an e-commerce platform using Next.js and TypeScript, improving user experience.',
      'Integrated Firebase for real-time database management and Bootstrap for responsive design.',
      'Deployed via Vercel.'
    ],
    link: 'https://www.quicotech.com/',
    linkText: 'Quicotech Website',
    imageSrc: null, // Placeholder: Add image path e.g., "images/project5.jpg"
    imageAlt: 'Quicotech E-commerce Screenshot',
    caption: 'E-commerce platform built with Next.js and Firebase.',
    analyticsTag: 'quicoWeb'
  },
  {
    id: 'project6',
    title: 'Full Stack Developer Bootcamp Projects | 2021 – 2022',
    details: [
      'Led the development of a blog event platform and a MERN-based e-commerce platform, showcasing proficiency in React, Node.js, WebRTC, and MongoDB.',
      'Mentored team members, ensuring timely delivery and high-quality outputs.'
    ],
    link: null,
    imageSrc: null, // Placeholder: Add image path e.g., "images/project6.png"
    imageAlt: 'Bootcamp Project Collage',
    caption: 'Various projects demonstrating full-stack capabilities.',
    analyticsTag: 'fullStackBootcamp'
  }
];

function generateProjectHTML(project) {
  // Added check for imageSrc before rendering img tag
  const imageHTML = project.imageSrc 
    ? `<img src="${project.imageSrc}" alt="${project.imageAlt || 'Project image'}" style="max-width: 100%; height: auto; margin-bottom: 1rem; border-radius: 4px;">` 
    : '<!-- No image provided -->';
  
  const captionHTML = project.caption ? `<p class="caption"><em>${project.caption}</em></p>` : '';
  
  const detailsHTML = project.details.map(detail => `<li>${detail.startsWith('- ') ? detail.substring(2) : detail}</li>`).join('');
  
  const linkHTML = project.link 
    ? `<p><a href="${project.link}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation(); trackProjectWebClick('${project.analyticsTag}')">${project.linkText || 'View Project'}</a></p>` 
    : '';

  return `
    <li class="project-item fade-in-on-scroll" onclick="toggleProjectDetails('${project.id}'); trackProjectClick('${project.analyticsTag}')">
      <strong>${project.title}</strong>
      <div id="${project.id}" class="project-details">
        ${imageHTML}
        ${captionHTML}
        <ul>
          ${detailsHTML}
        </ul>
        ${linkHTML}
      </div>
    </li>
  `;
}

document.getElementById('projects').innerHTML = `
  <section class="projects">
    <h2>Projects</h2>
    <ul>
      ${projectsData.map(generateProjectHTML).join('')}
    </ul>
  </section>
`;

// Function to toggle project details
function toggleProjectDetails(projectId) {
  const details = document.getElementById(projectId);
  if (!details) return;

  const allDetails = document.querySelectorAll('.project-details');
  const parentLi = details.closest('.project-item');

  // Close other project details if opening a new one
  const isOpening = details.style.display !== 'block';
  
  allDetails.forEach(detail => {
      if (detail.id !== projectId) {
          detail.style.display = 'none';
          detail.closest('.project-item')?.classList.remove('active');
      }
  });

  // Toggle current project details
  if (isOpening) {
    details.style.display = 'block';
    parentLi?.classList.add('active');
  } else {
    details.style.display = 'none';
    parentLi?.classList.remove('active');
  }
}


// Function to track project clicks (ensure gtag is defined)
function trackProjectClick(projectName) {
  if (typeof gtag === 'function') {
    gtag('event', 'project_toggle', { // Changed event name for clarity
      'event_category': 'Projects',
      'event_label': projectName
    });
  } else {
    console.warn('gtag function not found for tracking project click:', projectName);
  }
}

// Function to track project website clicks (ensure gtag is defined)
function trackProjectWebClick(projectName) {
  if (typeof gtag === 'function') {
    gtag('event', 'project_link_click', { // Changed event name for clarity
      'event_category': 'Projects',
      'event_label': projectName
    });
  } else {
    console.warn('gtag function not found for tracking project web click:', projectName);
  }
}

// Add simple styles for the caption and active state (can be moved to CSS)
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
.project-details .caption {
  font-size: 0.9em;
  color: #666;
  margin-top: 0.5rem; /* Adjusted margin */
  margin-bottom: 1rem;
}
.project-item.active {
  /* Optional: Add style for active/expanded project */
  /* background-color: #eef5ff; */
}
`;
document.head.appendChild(styleSheet);

