export interface Experience {
  title: string;
  company: string;
  period: string;
  project: string;
  responsibilities: string[];
  skills: string[];
}
export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface ResumeData {
  intro: {
    name: string;
    title: string;
    summary: string;
  };
  experience: Experience[];
  education: Education[];
  contact: {
    email: string;
    linkedin: string;
  };
}

export const resumeData: ResumeData = {
  intro: {
    name: "Vineela Sridhara",
    title: "Senior Software Engineer",
    summary: "I build full stack user-friendly web and mobile applications",
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Optum",
      period: "Jan 2023 - Jan 2025",
      project: "Medicare and Retirement Acquisition",
      responsibilities: [
        "Built a responsive portal for Medicare and Retired consumers, which is a marketplace for buying health insurances.",
        "Created the frontend view and backend APIs using Angular,SpringWebflux respectively.",
      ],
      skills: [
        "Rx Programming",
        "Angular",
        "Express.js",
        "AEM",
        "Cosmos DB",
        "MySql",
        "GraphQL",
        "Azure Data Factory",
        "Kubernetes",
        "Microsoft Azure",
        "Splunk",
        "Dynatrace",
      ],
    },
    {
      title: "Software Engineer",
      company: "Optum",
      period: "July 2019 - Dec 2022",
      project: "Contract Lifecycle Management",
      responsibilities: [
        "Implemented an event-driven data pipeline using Spring Cloud Streams and Apache Kafka to automate the ingestion, validation, and processing of healthcare facility contracts.",
        "Developed a responsive, user-friendly Contract Admin dashboard in React and Next.js that provided real-time contract status monitoring.",
      ],
      skills: [
        "React",
        "Next.js",
        "Spring Boot - Modules",
        "Apache Kafka",
        "Spring Cloud Streams",
        "PostgreSQL",
        "MonogDB",
        "OpenShift",
      ],
    },
    {
      title: "Senior Java Developer",
      company: "Medica Health Plans",
      period: "June 2018 - July 2019",
      project: "Provider Onboarding Modernization",
      responsibilities: [
        "Engineered automated data integration pipelines for healthcare vendor data onboarding into CATCUS, reducing processing time by 80% and improving accuracy through stakeholder collaboration.",
        "Developed full-stack healthcare applications using Spring Boot microservices, React, and Oracle stored procedures for optimized data management.",
      ],
      skills: [
        "Spring boot REST",
        "Apache POI",
        "WebSphere",
        "React",
        "JUnit",
        "Oracle DB",
        "PL/SQL",
        "Tomcat",
        "Jenkins",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "UCare",
      period: "May 2017 — Jun 2018",
      project: "Benefits Portal",
      responsibilities: [
        "Built microservices architecture using Spring Boot REST for Benefits Portal, improving system scalability and enabling independent service updates.",
        "Developed RESTful APIs and stored procedures using Oracle PL/SQL and Spring Boot for user authentication and benefits enrollment functionalities.",
      ],
      skills: [
        "Microservices",
        "RESTful APIs",
        "Spring Boot REST",
        "Spring Security",
        "Oracle DB",
      ],
    },
    {
      title: "Java Developer",
      company: "Virgosys Software Private Limited",
      period: "Sep 2015 — May 2016",
      project: "",
      responsibilities: [
        "Led architectural design with Spring MVC, JSP, JSTL, AJAX, SOAP and JMS/Active MQ integration.",
        "Established development practices using Maven, JUnit, log4j and SVN for improved deployment and code quality.",
      ],
      skills: ["Spring", "JSP", "SOAP", "JSTL", "AJAX"],
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
      school: "Jyothismathi Institue of Technology and Sciences - JNTU ",
      year: "2011-2015",
    },
  ],
  contact: {
    email: "sridharavineela304@gmail.com",
    linkedin: "www.linkedin.com/in/vsridha",
  },
};
