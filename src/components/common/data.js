export const openApplyModal = () => {
  const modal = new bootstrap.Modal(document.getElementById("ApplyModal"));
  modal.show();
};

export const closeApplyModal = () => {
  const modal = document.getElementById("ApplyModal");
  if (modal) {
    const modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
  }
};

export const openJobModal = () => {
  const modal = new bootstrap.Modal(document.getElementById("jobModel"));
  modal.show();
};

export const closeJobModal = () => {
  const modal = document.getElementById("jobModel");
  if (modal) {
    const modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
  }
};

export const openAppointmentModal = () => {
  const modal = new bootstrap.Modal(document.getElementById("Appointment"));
  modal.show();
};

export const closeAppointmentModal = () => {
  const modal = document.getElementById("Appointment");
  if (modal) {
    const modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
    }
  }
};

//service redirect
export const handleServices = (router, num) => {
  switch (num) {
    case 1:
      router.push("/services/web_development");
      break;
    case 2:
      router.push("/services/mobileapp_development");
      break;
    case 3:
      router.push("/services/backend_development");
      break;
    case 4:
      router.push("/services/ui_ux_design");
      break;
    case 5:
      router.push("/services/software_testing");
      break;
    case 6:
      router.push("/services/staff_agumentation");
      break;
    case 7:
      router.push("/services/staff_agumentation");
      break;
    case 8:
      router.push("/services/digital_transformation");
      break;
    default:
      router.push("/services/web_development");
      break;
  }
};

export const jobListings = [
  {
    title: "Web developer",
    location: "Pune, India",
    description:
      "Work with design teams to convert wireframes into responsive web pages.",
    skillsRequired: [
      "HTML",
      "CSS",
      "JS",
      "Collaborate with design teams to translate wireframes and mockups into functional web pages",
    ],
    experienceRequired: "2+ years, including freelance experience",
  },
  {
    title: "Java Software Engineer",
    location: "Pune, India",
    description:
      "Assist in the development and maintenance of websites, collaborating with senior developers.",
    skillsRequired: [
      "Java",
      "Spring",
      "microservices",
      "strong problem-solving",
      "teamwork skills",
      "agile technologies",
      "CS degree required.",
    ],
    experienceRequired: "1-3 years, including internships",
  },
  {
    title: "Sales Executive",
    location: "Pune, India",
    description:
      "Develop dynamic user interfaces with React.js, working closely with UX/UI designers.",
    skillsRequired: [
      "Sales expertise",
      "excellent communication",
      "strong negotiation",
      "customer engagement",
      "relationship building",
      "target-driven mindset.",
    ],
    experienceRequired: "2+ years, including open-source contributions",
  },
  {
    title: "Shopify Developer",
    location: "Pune, India",
    description:
      "Handle both frontend and backend tasks, ensuring seamless integration of web applications.",
    skillsRequired: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "VueJS",
      "GraphQL",
      "REST",
      "Node.js",
      "Should have experience Experience with Shopify themes and plugins.",
    ],
    experienceRequired: "3+ years, including project work",
  },
  {
    title: "Angular Js Developer",
    location: "Pune, India",
    description:
      "Collaborate with design and development teams to create intuitive and visually appealing user interfaces.",
    skillsRequired: [
      "Angular",
      "TypeScript",
      "Ionic 3",
      "Bootstrap",
      "HTML",
      "responsive design",
      "Agile/Scrum",
    ],
    experienceRequired: "4+ years, with a strong portfolio",
  },
  {
    title: "Flutter  developer",
    location: "Pune, India",
    description:
      "Develop and optimize web applications using Angular, collaborating with backend teams.",
    skillsRequired: [
      "Flutter",
      "Android development",
      "Agile",
      "design patterns(MVVM, MVC)",
      "offline storage",
      "threading",
      "performance tuning.",
    ],
    experienceRequired: "4+ years, with experience in RESTful services",
  },
];
