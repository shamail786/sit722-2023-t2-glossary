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
  {
    id: 21,
    Term: "MongoDB",
    Description:
      "MongoDB is a prominent open-source NoSQL database management system that fits under the document-oriented database category. It is intended to manage unstructured or semi-structured data and is especially well-suited for applications that demand data model flexibility and scalability. ",
    References:
      "‘Introduction to mongodb’ (2010) The Definitive Guide to MongoDB, pp. 3–17.   ",
  },
  {
    id: 22,
    Term: "Containerization ",
    Description:
      "Packaging a programme and its dependencies into a standardised unit (container) for ease of deployment and scalability. ",
    References:
      "Containerize an application (2023) Docker Documentation. Available at: https://docs.docker.com/get-started/02_our_app/ (Accessed: 27 August 2023).   ",
  },
  {
    id: 23,
    Term: "Azure Storage ",
    Description:
      "Azure Storage is a Microsoft Azure cloud-based storage solution. It provides a scalable and secure platform for storing all forms of data, including organised and unstructured data, and allows you to access and manage your data from anywhere in the globe.  ",
    References:
      "Nemnom, C. (2021) Azure Storage Essential Training. Erscheinungsort nicht ermittelbar: LinkedIn.   ",
  },
  {
    id: 24,
    Term: "API Gateway ",
    Description:
      "A server that serves as the entry point for all client requests and provides a single interface for accessing numerous microservices. It is capable of duties like as authentication, load balancing, and request routeing. ",
    References:
      "Mishra, A. (2022) ‘Integrating with an azure storage account’, Microsoft Azure for Java Developers   ",
  },
  {
    id: 25,
    Term: "Docker Compose ",
    Description:
      "Docker Compose is a tool that allows you to define and operate multi-container Docker applications. It enables you to provide your whole application stack, including numerous services, networks, and volumes, in a single declarative file known as a docker-compose.yml file. ",
    References:
      "Jangla, K. (2018) ‘Docker compose’, Accelerating Development Velocity Using Docker.  ",
  },
  {
    id: 26,
    Term: "Declarative Container Management ",
    Description:
      "Declarative container management is the practise of utilising a declarative method to define the intended state of your containerized application and its components rather than stating explicit steps or instructions on how to attain that state. ",
    References:
      "Jangla, K. (2018a) ‘Advanced docker use cases’, Accelerating Development Velocity Using Docker.  ",
  },
  {
    id: 27,
    Term: "Orchestration ",
    Description:
      "Multiple containers and services are managed, coordinated, and scaled automatically to guarantee they function together flawlessly. Container orchestration solutions such as Kubernetes and Docker Swarm are widely used. ",
    References:
      "Jangla, K. (2018b) ‘Debugging microservices using Docker’, Accelerating Development Velocity Using Docker.  ",
  },
  {
    id: 28,
    Term: "Port Mapping ",
    Description:
      "The process of mapping a port on the host to a port on a running container, giving external access to the container's services. ",
    References:
      "Jangla, K. (2018c) ‘Docker Basics’, Accelerating Development Velocity Using Docker.  ",
  },
  {
    id: 29,
    Term: "Image Registry ",
    Description:
      "A central repository for storing and managing container images. Other notable image repositories, in addition to Docker Hub, are Google Container Registry and Amazon Elastic Container Registry. ",
    References:
      "Jangla, K. (2018d) ‘Docker images’, Accelerating Development Velocity Using Docker. ",
  },
  {
    id: 30,
    Term: "Docker Hub ",
    Description:
      "A cloud-based registry service provided by Docker that hosts Docker images, making it easy to share and distribute images. ",
    References:
      "Cook, J. (2017) ‘Docker Hub’, Docker for Data Science, pp. 103–118.   ",
  },
  {
    id: 31,
    Term: "Kubernetes ",
    Description:
      "Kubernetes is a container orchestration platform that automates the deployment, scaling, and administration of containerized applications. It was created by Google and is currently maintained by the Cloud Native Computing Foundation (CNCF), which is a branch of the Linux Foundation.  ",
    References:
      "Martin, P. (2022) ‘Kubernetes Api Introduction’, Kubernetes Programming with Go, pp. 1–16.",
  },
  {
    id: 32,
    Term: "Terraform ",
    Description:
      "HashiCorp's Terraform is an open-source infrastructure as code (IaC) tool. It allows you to specify and provide infrastructure resources like virtual machines, networks, and storage in a declarative and version-controlled way. ",
    References:
      "Salecha, R. (2022) ‘Introduction to terraform’, Practical GitOps, pp. 67–122.  ",
  },
  {
    id: 33,
    Term: "Kubectl ",
    Description:
      "The kubectl command-line tool is used to interface with Kubernetes clusters. It serves as the primary command-line interface for controlling Kubernetes resources and carrying out different activities within a Kubernetes cluster.  ",
    References:
      "Lukša, M. (2018) ‘Kubernetes Erweitern’, Kubernetes in Action, pp. 553–578. ",
  },
  {
    id: 34,
    Term: "Azure Active Directory ",
    Description:
      "Microsoft's cloud-based identity and access management service for authenticating and authorizing users and applications. ",
    References:
      "Mishra, A. (2022) ‘Provisioning resources with Azure Devops and Azure Cli’, Microsoft Azure for Java Developers, pp. 281–303.",
  },
  {
    id: 35,
    Term: "Azure CLI ",
    Description:
      "Microsoft Azure CLI is a suite of command-line tools for controlling Azure resources and services. It provides a sophisticated and scriptable interface to Azure, allowing customers to automate processes, deploy resources, and manage their Azure infrastructure directly from a terminal or command line.  ",
    References:
      "López, D.C. (2019) Azure: Powershell Esencial. Erscheinungsort nicht ermittelbar: LinkedIn.    ",
  },
  {
    id: 36,
    Term: "Azure Kubernetes ",
    Description:
      "Microsoft Azure Kubernetes Service (AKS) is a managed container orchestration platform. It makes Kubernetes deployment, maintenance, and scaling of containerized applications easier.  ",
    References:
      "Buchanan, S., Rangama, J. and Bellavance, N. (2019) ‘Deploying Azure Kubernetes Service’, Introducing Azure Kubernetes Service, pp. 63–77.  ",
  },
  {
    id: 37,
    Term: "Azure Monitor ",
    Description:
      " Azure Monitor provides monitoring and diagnostics capabilities for AKS, helping you track the performance and health of your cluster and applications. ",
    References:
      "Bleakley, K. (2017) Azure. Port Adelaide South Australia: Ginninderra Press.",
  },
  {
    id: 38,
    Term: "HCL (HashiCorp Configuration Language)",
    Description:
      "Terraform setups are written in this language. It is a declarative, human-readable language used to define infrastructure resources and their interactions.  ",
    References:
      "Riti, P. and Flynn, D. (2021) ‘Terraform hcl’, Beginning HCL Programming, pp. 79–105. ",
  },
  {
    id: 39,
    Term: "Terraform Modules Registry ",
    Description:
      "An online repository where you can find and share pre-built Terraform modules, making it easier to reuse infrastructure configurations. ",
    References:
      "Modi, R. (2021) ‘Terraform modules’, Deep-Dive Terraform on Azure, pp. 115–137.   ",
  },
  {
    id: 40,
    Term: "Remote Backends",
    Description:
      "Storage solutions, such as AWS S3 or Azure Blob Storage, where Terraform can store the state file remotely, allowing for collaboration and safer state management. ",
    References:
      "Salecha, R. (2022a) ‘Introduction to terraform’, Practical GitOps, pp. 67–122.    ",
  },
  {
    id: 41,
    Term: "Monitoring",
    Description:
      "Monitoring is typically shown in the right-side of the DevOps cycle following the deployment of the application to the production system.  Although monitoring is an essential aspect of the DevOps cycle, it is not limited to that stage of the development process.  ",
    References:
      "‘DevOps: An overview’ (2017) The DevOps Adoption Playbook, pp. 1–38.",
  },
  {
    id: 42,
    Term: "Logging",
    Description:
      "The act of preserving a record of the events and states of a running programme through time is a widespread and long-standing practise employed by computer system developers and operators. This procedure, known as logging, allows messages/data about the transitory state and status of an application, service, hardware system, or environment to be given to the user  ",
    References:
      "Hüttermann, M. (2012) ‘Introducing devops’, DevOps for Developers, pp. 15–31.    ",
  },
  {
    id: 43,
    Term: "FLUENTD",
    Description:
      " Fluentd is an open-source data collecting programme that collects, processes, and transports log data and other types of data from a variety of sources in a uniform and efficient manner.",
    References:
      "Späth, P. (2023) ‘Logging pipeline with Fluentd’, Pro Jakarta EE 10, pp. 427–436.    ",
  },
  {
    id: 44,
    Term: "Prometheus",
    Description:
      "Prometheus is a free and open-source system monitoring and alerting toolset developed by SoundCloud.  ",
    References: "Ruffell, I. (2018) ‘Prometheus’, Classics [Preprint].    ",
  },
  {
    id: 45,
    Term: "Grafana",
    Description:
      "Grafana is a free and open-source analytics and visualisation platform that connects to a variety of data sources to let users monitor and visualise their systems, applications, and services. ",
    References:
      "Grafana: The Open Observability Platform (no date) Grafana Labs. Available at: https://grafana.com/ (Accessed: 22 September 2023).    ",
  },
  {
    id: 46,
    Term: "KIBANA",
    Description:
      "Kibana is a free and open-source data visualisation and exploration tool for Elasticsearch, a distributed, RESTful search and analytics engine.  ",
    References:
      "Kibana: Explore, visualize, Discover Data (no date) Elastic. Available at: https://www.elastic.co/kibana/ (Accessed: 22 September 2023).    ",
  },
  {
    id: 47,
    Term: "Elasticsearch",
    Description:
      "Elasticsearch is a distributed, RESTful search and analytics engine for horizontally scalable, real-time data search and analysis. ",
    References:
      "Elasticsearch: The Official Distributed Search &amp; Analytics engine (no date) Elastic. Available at: https://www.elastic.co/elasticsearch/ (Accessed: 22 September 2023).    ",
  },
  {
    id: 48,
    Term: "Regression test",
    Description:
      "These tests were extremely popular in the conventional software development process. Functional and technical tests were re-run to ensure that software - code - updated throughout the development cycle still worked properly after the modification ",
    References:
      "Regression testing (2023) Wikipedia. Available at: https://en.wikipedia.org/wiki/Regression_testing (Accessed: 22 September 2023).    ",
  },
  {
    id: 49,
    Term: "End-to-end Testing",
    Description:
      "End-to-end testing is a software testing process that comprises evaluating the flow of an application from beginning to end to guarantee its behaviour and operation in a real-world setting.  ",
    References:
      "Georgian, S. (2021) What is end-to-end testing and when should you use it?, freeCodeCamp.org. Available at: https://www.freecodecamp.org/news/end-to-end-testing-tutorial/ (Accessed: 22 September 2023).  ",
  },
  {
    id: 50,
    Term: "Integration Testing",
    Description:
      "Integration testing is a software testing approach used to analyse the interactions and interfaces between an application's many components, modules, or systems.  ",
    References:
      "Carpenter, A. (2021) What is integration testing?, Codecademy Blog. Available at: https://www.codecademy.com/resources/blog/what-is-integration-testing/ (Accessed: 22 September 2023).   ",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "SIT722 DevOps Glossary", names: nameList });
});

module.exports = router;
