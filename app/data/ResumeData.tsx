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
      period: "From Jan 2023 to Jan 2025",
      project: "Medicare and Retirement Acquisition",
      responsibilities: [
        "Built a comprehensive marketplace portal for Medicare and retired consumers, serving as the primary platform for health insurance purchases across 8+ employer groups.",
        "Impact: Generated $1M revenue to the business and telesales agents with Group Retiree portal's 40% performance improvement, with 95% user satisfaction.",
      ],
      skills: [
        "SpringBoot Webflux - Rx Programming",
        "Angular",
        "Express.js",
        "AEM",
        "Cosmos DB",
        "MySql",
        "GraphQL",
        "Microsoft Azure",
        "Azure Data Factory",
        "Azure APIs",
        "Kubernetes",
        "Splunk",
        "Dynatrace",
      ],
    },
    {
      title: "Software Engineer",
      company: "Optum",
      period: "From July 2019 to Dec 2022",
      project: "Contract Lifecycle Management",
      responsibilities: [
        "Implemented an event-driven data pipeline that revolutionized healthcare contract processing through automation and real-time monitoring.",
        "Impact: 60% faster issue resolution in production and fully automated pipeline for medical vendors.",
      ],
      skills: [
        "React",
        "Spring Boot REST",
        "Spring Cloud Streams",
        "Spring Boot JPA",
        "Apache Kafka",
        "PostgreSQL",
        "MonogDB",
        "OpenShift",
      ],
    },
    {
      title: "Senior Software Developer",
      company: "Medica Health Plans",
      period: "From June 2018 to July 2019",
      project: "Provider Onboarding Modernization",
      responsibilities: [
        "Engineered automated data integration pipelines that transformed healthcare vendor onboarding processes.",
        "Impact: Loaded around 200K+ records into the Medica systems with 80% reduction in processing time, significantly improved accuracy.",
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
      period: "From May 2017 to Jun 2018",
      project: "Benefits Portal",
      responsibilities: [
        "Built microservices architecture using Spring Boot REST for Benefits Portal, improving system scalability and enabling independent service updates.",
        "Impact: Increased the test driven test cases to 90%.",
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
      period: "From Sep 2015 to May 2016",
      project: "",
      responsibilities: [
        "Led architectural design with Spring MVC, JSP, JSTL, AJAX, SOAP and JMS/Active MQ integration.",
        "Impact:Established development practices using Maven, JUnit, log4j and SVN for improved deployment and code quality.",
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
