export interface Experience {
  title: string;
  company: string;
  period: string;
  project: string;
  achievements: string[];
}
export interface About {
  my_info: string;
}
export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
}

export interface ResumeData {
  intro: {
    name: string;
    title: string;
    summary: string;
  };
  about: {
    my_info: string;
  };
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  achievements: Achievement[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
}

export const resumeData: ResumeData = {
  intro: {
    name: "Vineela Sridhara",
    title: "Senior Software Engineer",
    summary: "I build full stack user-friendly web and mobile applications",
  },
  about: {
    my_info: "",
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Optum",
      period: "Jan 2023 - Present",
      project: "Medicare and Retirement Acquisition",
      achievements: [
        "Built a responsive portal for Medicare and Retired consumers, which is a marketplace for buying health insurances.",
        "Created the frontend view and backend APIs using Angular,Springboot respectively.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Optum",
      period: "July 2019 - Dec 2022",
      project: "Contract Lifecycle Management",
      achievements: [
        "Implemented an event-driven data pipeline using Spring Cloud Streams and Apache Kafka to automate the ingestion, validation, and processing of healthcare facility contracts.",
        "Developed a responsive, user-friendly Contract Admin dashboard in React and Next.js that provided real-time contract status monitoring.",
      ],
    },
    {
      title: "Senior Java Developer",
      company: "Medica Health Plans",
      period: "June 2018 - July 2019",
      project: "Provider Onboarding Modernization",
      achievements: [
        "Engineered automated data integration pipelines for healthcare vendor data onboarding into CATCUS, reducing processing time by 80% and improving accuracy through stakeholder collaboration.",
        "Developed full-stack healthcare applications using Spring Boot microservices, React, and Oracle stored procedures for optimized data management.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "UCare",
      period: "May 2017 — Jun 2018",
      project: "Benefits Portal",
      achievements: [
        "Built microservices architecture using Spring Boot REST for Benefits Portal, improving system scalability and enabling independent service updates.",
        "Developed RESTful APIs and stored procedures using Oracle PL/SQL and Spring Boot for user authentication and benefits enrollment functionalities.",
      ],
    },
    {
      title: "Java Developer",
      company: "Virgosys Software Private Limited",
      period: "Sep 2015 — May 2016",
      project: "",
      achievements: [
        "Led architectural design with Spring MVC, JSP, JSTL, AJAX, SOAP and JMS/Active MQ integration.",
        "Established development practices using Maven, JUnit, log4j and SVN for improved deployment and code quality.",
      ],
    },
  ],
  education: [
    {
      degree: "Masters in Computer Science",
      school: "University of Illinois At Springfield",
      year: "2016-2017",
    },
    {
      degree: "Bachelors in Technology",
      school: "Jyothismathi Institue of Technology and Sciences",
      year: "2011-2015",
    },
  ],
  skills: [
    {
      name: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Python", "SQL"],
    },
  ],
  achievements: [
    {
      title: "Best Innovation Award",
      description: "Received company-wide recognition for innovative solution",
    },
  ],
  contact: {
    email: "your.email@example.com",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/yourusername",
  },
};
