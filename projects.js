const projectsData = [
  {
    id: 'project1',
    title:
      'Digital Healthcare Platform | Startup Company (Canada) | Sep 2023 – Aug 2024',
    details: [
      'Designed and implemented a SaaS-based healthcare platform to streamline patient-provider interactions, reducing appointment wait times.',
      'Developed core features including user registration, appointment booking, and clinic management using Next.js, Strapi, Redux, Next-Auth, Yup, and PostgreSQL.',
      'Integrated scheduling APIs and payment gateways (Stripe), enhancing user experience and enabling an increase in platform engagement.',
      'Architected and deployed a multi-tier application using AWS services, deployed frontend on AWS Amplify and backend on EC2 and database on RDS, and uploaded files on S3, ensuring reliable performance and scalability.',
    ],
    link: 'https://main.d1b7orjfwwu8wb.amplifyapp.com/welcome',
    linkText: 'Digital Healthcare Platform',
    imageSrc: null, // Placeholder: Add image path e.g., "images/project1.jpg"
    imageAlt: 'Digital Healthcare Platform Screenshot',
    caption: 'A modern platform connecting patients and healthcare providers.',
    analyticsTag: 'digitalHealth',
  },
  {
    id: 'project2',
    title: 'E-commerce Website Development | ITCherry (Beirut) | May 2024',
    details: [
      'Developed a responsive e-commerce website for APG.',
      'Utilized Next.js and CSS frameworks to create dynamic front-end features, including product listings and contact forms.',
      'Deployed via Vercel.',
    ],
    link: 'https://www.apg-lb.com/',
    linkText: 'APG E-commerce Website',
    imageSrc: null, // Placeholder: Add image path e.g., "images/project2.jpg"
    imageAlt: 'APG E-commerce Website Screenshot',
    caption: 'Responsive e-commerce site for APG.',
    analyticsTag: 'APGWeb',
  },
  {
    id: 'project3',
    title:
      'Characteristics Curve Analysis of Small Three-Phase Generators | Academic Research | Jun 2023 – Oct 2023',
    details: [
      'Designed and fabricated a precision test mechanism (mechanical components modeled in Autodesk Inventor) for evaluating small three-phase generators, achieving 95% data accuracy through robust instrumentation.',
      'Implemented Arduino-based data acquisition with custom sensor arrays (voltage, current) and integrated torque transducer.',
      'Developed Python algorithms to automate analysis, generating industry-standard characteristic curves. Acquired synchronized real-time data via serial communication.',
    ],
    link: null,
    imageSrc: null, // Placeholder: Add image path e.g., "images/project3.png"
    imageAlt: 'Generator Test Mechanism Diagram',
    caption: 'Research project involving hardware setup and data analysis.',
    analyticsTag: 'characteristicCurve',
  },
  {
    id: 'project4',
    title:
      'Student Information System (SIS) | ESA University (Beirut) | Oct 2022 – Jul 2023',
    details: [
      'Led a team to design and deploy an online SIS platform, improving data accessibility for students.',
      'Integrated REST APIs and PostgreSQL for seamless data exchange, reducing administrative workload.',
      'Deployed on a Windows server virtual machine.',
    ],
    link: 'http://inscription.esa.edu.lb/',
    linkText: 'ESA University Website (Related)',
    imageSrc: null, // Placeholder: Add image path e.g., "images/project4.jpg"
    imageAlt: 'ESA SIS Screenshot',
    caption: 'Student Information System for ESA University.',
    analyticsTag: 'sisWeb',
  },
  {
    id: 'project5',
    title:
      'Front-end E-commerce Development | ITCherry (Beirut) | Apr 2023 – Jun 2023',
    details: [
      'Designed and implemented an e-commerce platform using Next.js and TypeScript, improving user experience.',
      'Integrated Firebase for real-time database management and Bootstrap for responsive design.',
      'Deployed via Vercel.',
    ],
    link: 'https://www.quicotech.com/',
    linkText: 'Quicotech Website',
    imageSrc: null, // Placeholder: Add image path e.g., "images/project5.jpg"
    imageAlt: 'Quicotech E-commerce Screenshot',
    caption: 'E-commerce platform built with Next.js and Firebase.',
    analyticsTag: 'quicoWeb',
  },
  {
    id: 'project6',
    title: 'Full Stack Developer Bootcamp Projects | 2021 – 2022',
    details: [
      'Led the development of a blog event platform and a MERN-based e-commerce platform, showcasing proficiency in React, Node.js, WebRTC, and MongoDB.',
      'Mentored team members, ensuring timely delivery and high-quality outputs.',
    ],
    link: null,
    imageSrc: null, // Placeholder: Add image path e.g., "images/project6.png"
    imageAlt: 'Bootcamp Project Collage',
    caption: 'Various projects demonstrating full-stack capabilities.',
    analyticsTag: 'fullStackBootcamp',
  },
  {
    id: 'project10',
    title:
      'EduLearn | Next.js + TypeScript Learning Platform | Lebanese Education System | Jun 2026',
    details: [
      'Built role-based auth and admin content builder for subjects, topics, and exercises.',
      'Developed grade-aware student learning and practice flows with localized UI and clean logout/state handling.',
      'Implemented JSON-backed data fallback for offline-style development and resilient content delivery.',
    ],
    link: 'https://edulearning-topaz.vercel.app/',
    linkText: 'Live EduLearn App',
    imageSrc: null,
    imageAlt: 'EduLearn Learning Platform',
    caption:
      'Next.js app for Lebanese education managing for evaluation the grade 9 and 10 French topics with admin tools.',
    analyticsTag: 'eduLearn',
  },
  {
    id: 'project11',
    title:
      'EduNova | E-learning Platform Proposal | Lebanese School | Next.js + TypeScript | May 2026',
    details: [
      'Proposed a scalable e-learning platform with student, teacher, parent, supervisor, and admin dashboards.',
      'Built with Next.js, TypeScript, Tailwind CSS, App Router, server-side routes, and localized pages.',
      'Implemented class schedules, lessons, assignments, announcements, messaging, notifications, auth guard, role-based access, and multi-language support.',
      'Delivered JSON-driven UI and reusable React components for a modern school learning proposal.',
    ],
    link: 'https://edunova-lyart.vercel.app/',
    linkText: 'Live EduNova Proposal',
    imageSrc: null,
    imageAlt: 'EduNova E-learning Platform Proposal',
    caption:
      'A Next.js/Tailwind school e-learning proposal focused on classroom management and student progress.',
    analyticsTag: 'eduNova',
  },
  {
    id: 'project8',
    title:
      'NexaStruct Engineering Showcase | Full-Stack Developer | April 2026',
    details: [
      'Custom CMS solution with WordPress integration capability for Nexastruct.org proposal',
      'Frontend Development: Built a responsive, animated engineering showcase website using Next.js 14, TypeScript, Tailwind CSS, and Framer Motion with dynamic pages for services, projects, team, FAQ, and contact.',
      'Custom Admin CMS: Developed a reusable admin dashboard with CRUD operations, filtering, ordering, publish/unpublish, bulk actions, confirmation modals, and user-friendly forms featuring auto-slug generation, image preview, select options, and preview links.',
      'Architecture: Implemented API routes and a content management layer for structured data, designed for deployment on Vercel with production build optimization. Capable of connecting to WordPress while maintaining independent CMS functionality.',
    ],
    link: 'https://nexastruct-nextjs.vercel.app/',
    linkText: 'NexaStruct Showcase',
    imageSrc: null,
    imageAlt: 'NexaStruct Engineering Showcase',
    caption:
      'Engineering showcase website with custom CMS and WordPress integration.',
    analyticsTag: 'nexaStruct',
  },
  {
    id: 'project7',
    title:
      'SaveMohamad Medical Fundraising Campaign | Full-Stack Developer (Solo) | March 2026',
    details: [
      'A personal fundraising initiative for urgent BMT treatment for my son',
      'Campaign Website (Next.js 14 + TypeScript): Built a multilingual medical fundraising platform supporting 9 languages (EN, AR, FR, DE, NL, TR, ES, PT, IT) with RTL support for Arabic.',
      'Real-time Features: Implemented medical progress tracking with timeline visualization, health status updates, and a multi-platform donation hub integrating international fundraising platforms (Fundahope, etc.).',
      'Analytics & Optimization: Integrated Vercel Analytics and Google Analytics for campaign performance monitoring, with location-aware donation routing and GDPR-compliant geolocation consent.',
      'Admin Dashboard: Developed a password-protected local CMS with Cloudinary-integrated media management, pre-composed social media message generator, and an Instagram Reels generator featuring canvas-based visual slide editing, text overlay, custom fonts, multi-aspect ratio support (9:16, 1:1, 4:5), and bulk export to PNG.',
      'Technical Highlights: TypeScript + Next.js App Router, JSON-based content management, Canvas API for dynamic reel rendering, and direct GitHub commit/push from dashboard.',
    ],
    link: 'https://saveachild-mohamad.vercel.app/',
    linkText: 'SaveMohamad Campaign',
    imageSrc: null,
    imageAlt: 'SaveMohamad Medical Fundraising Campaign',
    caption:
      'Multilingual medical fundraising platform with AI-powered admin dashboard.',
    analyticsTag: 'saveMohamad',
  },
  {
    id: 'project9',
    title:
      'Fractional Real Estate Investment Platform | Frontend Lead | Ongoing (November 2025 - Present)',
    details: [
      'Modern investment platform with role-based user dashboard (Backend: Laravel)',
      'Authentication System: Implemented a complete NextAuth.js solution with multiple OAuth providers (Google, Facebook, Instagram) and Credentials Provider, featuring secure session management with JWT tokens and 30-day persistence via "Remember Me" functionality.',
      'Property Management: Built responsive property listings with grid layout, animated cards, skeleton loading states, and detailed property pages featuring photo/video galleries with category switching, thumbnail navigation, full-screen modal viewer, and media counter display.',
      'Investment Dashboard: Designed a role-based user dashboard for investment tracking, including portfolio overview, investment history, transaction tracking, and performance metrics visualization.',
      'Technical Stack: Next.js 14.2.5 (App Router), TypeScript 5.2.2, Redux Toolkit for global state, Zustand for auth state, SWR for data fetching, React Hook Form with Zod validation, Mapbox/Google Maps integration, and Docker containerization with GitHub Actions CI/CD.',
    ],
    link: 'https://real-estat-project.vercel.app/',
    linkText: 'Real Estate Investment Platform',
    imageSrc: null,
    imageAlt: 'Fractional Real Estate Investment Platform',
    caption:
      'Modern investment platform with advanced authentication and role-based dashboards.',
    analyticsTag: 'realEstateInvestment',
  },
];

function generateProjectHTML(project) {
  // Added check for imageSrc before rendering img tag
  const imageHTML = project.imageSrc
    ? `<img src="${project.imageSrc}" alt="${project.imageAlt || 'Project image'}" style="max-width: 100%; height: auto; margin-bottom: 1rem; border-radius: 4px;">`
    : '<!-- No image provided -->';

  const captionHTML = project.caption
    ? `<p class="caption"><em>${project.caption}</em></p>`
    : '';

  const detailsHTML = project.details
    .map(
      (detail) =>
        `<li>${detail.startsWith('- ') ? detail.substring(2) : detail}</li>`,
    )
    .join('');

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

  allDetails.forEach((detail) => {
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
    gtag('event', 'project_toggle', {
      // Changed event name for clarity
      event_category: 'Projects',
      event_label: projectName,
    });
  } else {
    console.warn(
      'gtag function not found for tracking project click:',
      projectName,
    );
  }
}

// Function to track project website clicks (ensure gtag is defined)
function trackProjectWebClick(projectName) {
  if (typeof gtag === 'function') {
    gtag('event', 'project_link_click', {
      // Changed event name for clarity
      event_category: 'Projects',
      event_label: projectName,
    });
  } else {
    console.warn(
      'gtag function not found for tracking project web click:',
      projectName,
    );
  }
}

// Add simple styles for the caption and active state (can be moved to CSS)
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
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
