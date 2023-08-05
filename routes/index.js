var express = require("express");
var router = express.Router();

const nameList = [
  {
    id: 1,
    Term: "Software Engineering",
    Description:
      "The design, development, testing, and maintenance of software systems are the focus of the computer science subject known as software engineering. It involves applying engineering principles, methodologies, and practices to the entire software development lifecycle. ",
    References:
      "Bergin J, Naps T, Bland C, Hartley S, Holliday M, Lawhead P, Lewis J, McNally M, Nevison C, Ng C, Pothering G and Teräsvirta T. (1998). Java resources for computer science instruction. ACM SIGCUE Outlook. 26:4. (14-34). Online publication date: 1-Oct-1998.",
  },
  {
    id: 2,
    Term: "Cyber Security",
    Description:
      "Cybersecurity is the process of preventing unauthorised access, theft, damage, and interruption to computer systems, networks, devices, and data. To protect data and guarantee the privacy, integrity, and accessibility of digital assets, a variety of technologies, methods, and practises are used.",
    References:
      "Mack N, Womack K, Huff Jr. E, Cummings R, Dowling N and Gosha K From Midshipmen to Cyber Pros Proceedings of the 50th ACM Technical Symposium on Computer Science Education, (726-730)",
  },
  {
    id: 3,
    Term: "Networking",
    Description:
      "Networking refers to the practice of connecting multiple devices together to share resources, exchange data, and enable communication between them.",
    References:
      "Bill Hancock, Issues and Problems in Computer Networking.American Management Assoc., Inc.135 W. 50 St. New York, NYUnited States. April 1990 ",
  },
  {
    id: 4,
    Term: "DevOps",
    Description:
      "The goal of DevOps is to close the gap between software development (Dev) and IT operations (Ops) through a set of cultural concepts and practises. It encourages teamwork, communication, and integration between the operations teams in charge of managing and deploying the software in real-world settings and the development teams in charge of producing it.",
    References:
      "Leonardo Leite, Carla Rocha, Fabio Kon, Dejam Milojicic, Paul0 Meirelles.A Survey of DevOps Concepts and Challenges. ACM Computing SurveysVolume 52Issue 614 November 2019Article No.: 127pp 1,35 ",
  },
  {
    id: 5,
    Term: "Developer",
    Description:
      "A developer is a person who develops, designs, and produces software applications, programmes, websites, or other digital solutions. Developers employ their proficiency in a variety of programming languages to transform concepts and specifications into useful and practical software.",
    References:
      "Mark D. Hawker. 2010. Developer's Guide to Social Programming: Building Social Context Using Facebook, Google Friend Connect, and the Twitter API, The (1st. ed.). Addison-Wesley Professional.",
  },
  {
    id: 6,
    Term: "Cloud Engineering",
    Description:
      "Cloud engineering refers to the practice of designing, building, and managing cloud-based infrastructure and services. Cloud engineers are responsible for implementing and maintaining cloud solutions that enable organizations to store, process, and manage data and applications in remote data centers, accessible over the internet.",
    References:
      "Ian Foster and Dennis B. Gannon. 2017. Cloud Computing for Science and Engineering (1st. ed.). The MIT Press.",
  },
  {
    id: 7,
    Term: "Business Analyst",
    Description:
      "A business analyst is an expert who bridges the gap between the solutions offered by information technology and the demands of the business. Their main duty is to examine, comprehend, and record the needs of a company or organisation before translating those needs into functional specifications for IT initiatives or software creation.",
    References:
      "Conrad Carlberg. 2010. Business Analysis: Microsoft Excel 2010 (4th. ed.). Que Publishing Company. ",
  },
  {
    id: 8,
    Term: "SQL Developer",
    Description:
      "A software expert with expertise in creating, testing, and optimising SQL (Structured Query Language) queries to communicate with and control relational databases is known as a SQL developer. ",
    References: "A2006. MySQL Developer's Guide. MySQL Press.   ",
  },
  {
    id: 9,
    Term: "Data Scientist",
    Description:
      "A data scientist is a specialist who mines vast amounts of data for information and insights using scientific techniques, algorithms, and tools. They are essential in the analysis of large, complicated data sets, in finding patterns, trends, and linkages, and in generating data-driven decisions that address issues in the real world and guide corporate plans.",
    References:
      "Wickham, H. and Wickham, H., 2016. Data analysis (pp. 189-201). Springer International Publishing. ",
  },
  {
    id: 10,
    Term: "Data Analyst",
    Description:
      "A data analyst is a professional who is in charge of reviewing and analysing data in order to provide insightful conclusions and guide decision-making.",
    References:
      "Jianhao Cao, Tamara Munzner, Rachel Pottinger,Visualizing a Tabular Data Repository to Facilitate Descriptive Tag Augmentation for New Tables. HILDA '23: Proceedings of the Workshop on Human-In-the-Loop Data AnalyticsJune 2023Article No.: 10Pages 1,3. ",
  },
  {
    id: 11,
    Term: "Minimum Viable Product",
    Description:
      "The notion of a Minimum Viable Product (MVP) is used in product development, notably in the context of agile and lean approaches. It refers to the most basic version of a product that may be produced and distributed in order to address the primary demands of early adopters or target consumers.",
    References:
      "Keogh, C. (2022) ‘Minimum viable product (MVP)’, Definitions,10th March 2022 ",
  },
  {
    id: 12,
    Term: "Continuous Integration",
    Description:
      "Continuous Integration (CI) is a software development practice that involves integrating code changes from multiple developers into a shared repository frequently, typically several times a day.",
    References:
      "Henning, A. (2016) ‘Physical continuous integration — CI on real robots!’, ROSCon Seoul 2016 [Preprint].",
  },
  {
    id: 13,
    Term: "GitOps",
    Description:
      "All infrastructure and application modifications are managed using version-controlled Git repositories.",
    References:
      "Bowersox, K. (2021) Gitops Foundations. Erscheinungsort nicht ermittelbar: LinkedIn.  ",
  },
  {
    id: 14,
    Term: "Microservices",
    Description:
      "A design strategy in which big applications are divided into smaller, loosely linked services that may be created, deployed, and scaled separately.",
    References:
      "Christudas, B. (2019) ‘Introducing microservices’, Practical Microservices Architectural Patterns, pp. 21–34.",
  },
  {
    id: 15,
    Term: "Docker",
    Description:
      "Docker is an open-source platform that allows developers to use containerization to automate the deployment, scaling, and administration of applications. It provides a platform for developers to bundle their programmes and dependencies into standardised containers. Containers enable programmes to execute consistently and reliably across several environments, making software development, testing, and deployment easier.",
    References:
      "Jangla, K. (2018) ‘Docker Basics’, Accelerating Development Velocity Using Docker, pp. 27–53. ",
  },
  {
    id: 16,
    Term: "Continuous Deployment",
    Description:
      "Continuous Deployment (CD) is an extension of Continuous Integration (CI) and an important DevOps practise. It refers to the automated process of frequently and reliably delivering code changes from development to production environments. ",
    References:
      "‘DevOps: An overview’ (2017) The DevOps Adoption Playbook, pp. 1–38. ",
  },
  {
    id: 17,
    Term: "Versioning",
    Description:
      "The process of assigning unique identifiers (version numbers or tags) to code, documents, or artifacts to track changes and ensure consistency.",
    References:
      "Bowersox, K. (2021) Gitops Foundations. Erscheinungsort nicht ermittelbar: LinkedIn. ",
  },
  {
    id: 18,
    Term: "Behaviour Driven Design",
    Description:
      "Behavior-Driven Design (BDD) is a software development process that builds on the ideas of Test-Driven Development (TDD) by concentrating on the product's behaviour and consequences from the perspective of business stakeholders. ",
    References:
      "DevOps: From newbie to Professiona: Fast and simple guide to devops (2016). CreateSpace Independent Publishing Platform.  ",
  },
  {
    id: 19,
    Term: "Test Driven Development",
    Description:
      "Test-Driven Development is a software development approach that emphasises developing tests before producing code. The procedure entails generating automated tests iteratively to specify the expected behaviour of the programme and then writing code to pass those tests. ",
    References:
      "DevOps: From newbie to Professiona: Fast and simple guide to devops (2016). CreateSpace Independent Publishing Platform. ",
  },
  {
    id: 20,
    Term: "Cross-functional autonomous teams ",
    Description:
      "The notion of cross-functional autonomous teams is central to DevOps and Agile techniques. These teams are made up of people with a variety of skills and expertise who work together to develop software products or services. ",
    References:
      "Meyer, B. (2014) Agile!: The good, the hype and the ugly. Zurich: Springer International Publishing.  ",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "SIT722 DevOps Glossary", names: nameList });
});

module.exports = router;