// src/app/resume/resumeData.ts

export interface IResumeData {
  name: string;
  title: string;
  contacts: {
    label: string;
    value: string;
  }[];
  location: string;
  skills: {
    sectionTitle: string;
    items: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    duration: string;
    gpa: number;
  };
  volunteering: {
    organization: string;
    role: string;
    duration: string;
    description: string;
  };
  experience: {
    company: string;
    role: string;
    duration: string;
    location: string;
    points: string[];
  }[];
  achievements: string[];
}

export const resumeData: IResumeData = {
  name: "DEVANSHI GARG",
  title: "CREATIVE FRONTEND ENGINEER",
  contacts: [
    { label: "Phone", value: "+91-9878361530" },
    { label: "Email", value: "devanshigarg08@gmail.com" },
    { label: "Link", value: "devanshigarg.me" },
  ],
  location: "Bengaluru / Remote",
  skills: [
    {
      sectionTitle: "Languages & Frameworks",
      items: [
        "Dart",
        "Flutter",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    {
      sectionTitle: "Tools & Platforms",
      items: [
        "VSCode",
        "Cursor AI",
        "Git",
        "GitHub",
        "Jira",
        "Gitlab",
        "Figma",
        "Firebase",
        "Google Analytics",
        "Strapi",
        "Postman",
      ],
    },
    {
      sectionTitle: "Databases & APIs",
      items: ["MySQL", "GraphQL", "PostgreSQL", "MongoDB", "REST APIs"],
    },
    {
      sectionTitle: "Development Methodologies",
      items: ["Agile", "Scrum"],
    },
  ],
  education: {
    institution: "Chitkara University, Punjab",
    degree: "B.E in Computer Science",
    duration: "Aug 2017 - Jul 2021",
    gpa: 9.4,
  },
  volunteering: {
    organization: "Manorihaa",
    role: "Mental Health Service",
    duration: "2019 - Present",
    description:
      "A mental health initiative against its taboos. Helps spread awareness and deal with mental health among all individuals.",
  },
  experience: [
    {
      company: "GeekyAnts India Pvt Ltd",
      role: "Senior Software Engineer",
      duration: "Jul, 2023 - Present",
      location: "Bengaluru, India",
      points: [
        'Led the development of <a href="https://flutter.gluestack.io/docs/overview/introduction" target="_blank" class="text-blue-500 font-semiBold">Flutter Gluestack</a>, optimizing UI rendering speed by **156%** (**97.82ms vs. 250.66ms**), enhancing performance & scalability.',
        "Designed and implemented an **offline logout system** for an **inspection platform**, resolving **critical payroll issues** for daily users.",
        "Engineered **optimized package upgrades** and **restructured core architecture**, reducing app load time by **40%** via performance profiling.",
        "Redesigned key user interfaces to improve UX and led sprint planning using JIRA for faster task allocation and delivery.",
      ],
    },
    {
      company: "GeekyAnts India Pvt Ltd",
      role: "Software Engineer",
      duration: "Jul, 2021 - June, 2023",
      location: "Bengaluru, India",
      points: [
        'Built <a href="https://flutter-starter.geekyants.com/" target="_blank" class="text-blue-500 font-semiBold">Flutter Starter</a>, an **open-source boilerplate** with **460+ GitHub stars**.',
        "Engineered a React & Web3-powered multiplayer soccer management game, enabling **3,350+ players**, **1,480+ active users**, and **5.4M+ blockchain transactions**, improving user engagement & scalability.",
        "Spearheaded front-end development for a high-profile dating app, leading a 5-member team and ensuring timely releases.",
        "Integrated **Strapi CMS** for a job-search platform, enabling dynamic content updates.",
        "Mentored junior developers by creating training materials and providing hands-on guidance.",
      ],
    },
    {
      company: "GeekyAnts India Pvt Ltd",
      role: "Trainee Software Engineer",
      duration: "Sep, 2020 - June, 2021",
      location: "Bengaluru, India",
      points: [
        "Developed a **mutual fund mobile app** with **user authentication**, **fund comparison**, and **investment tracking**.",
        "Built UI components for a doctor-patient telemedicine app, enabling secure messaging and appointment scheduling.",
        "Maintained a crypto payment app, **enhancing transaction speed** & user experience.",
      ],
    },
  ],

  achievements: [
    "Won 1st place in a 12-hour hackathon by GeekyAnts for building a full-stack application from scratch.",
    "Secured runner-up position in a 24-hour AI hackathon focused on innovative use of generative AI.",
    "Represented in an international-level Web3 hackathon, building a blockchain-based utility app.",
  ],
};
