export const siteConfig = {
  name: "Pamela Yung",
  title: "Making it happen with data.",
  description: "Portfolio website of Pamela Yung",
  accentColor: "#1d4ed8",
  social: {
    email: "ppyung@ucsd.edu",
    linkedin: "https://www.linkedin.com/in/pamela-yung124/",
    github: "https://github.com/pamelayung",
  },
  aboutMe:
    "Hi, I’m Pamela Yung. I’m a recent Cognitive Science graduate at UC San Diego who specialized in Machine Learning and Neural Computation. I enjoy building projects that connect data, modeling, and real-world systems, whether that means training machine learning models, analyzing behavioral time-series data, or leading interdisciplinary teams through Triton Robotics",
  projects: [
    {
    name: "Propel Benefits & Grocery Planning Redesign",
    description:
      "Designed a high-fidelity mobile case study for Propel that extends the app beyond EBT balance tracking into grocery planning, inventory reminders, and budgeting support.",
    link: "/projects/propel",
    skills: ["Figma", "UX Research", "Product Design", "User Flows"],
    },
    {
      name: "Retail Theft Workflow Support",
      description:
        "Supported feature and workflow design for organized retail theft detection efforts connected to the Sherlock patrol-support platform. Conducted interviews with agencies, translated operational needs into scalable feature ideas, and supported testing for production deployments.",
      link: "", // 
      skills: ["Figma", "User Research", "Product Thinking", "UAT"],
    },
    {
      name: "Behavioral Sequence Prediction",
      description:
        "Built an LSTM model in PyTorch to classify behavioral burst patterns from timestamped datasets. Created a preprocessing pipeline that converted raw event logs into model-ready sequences, then visualized predictions and evaluated model performance to better understand early behavioral signals.",
      link: "",
      skills: ["Python", "PyTorch", "LSTM", "Time Series"],
    },
    {
      name: "TinyImageNet Image Classifier",
      description:
        "Implemented convolutional neural network models to classify 200 image categories from the TinyImageNet dataset. Improved validation performance through data augmentation, hyperparameter tuning, and model evaluation using accuracy metrics and confusion matrices.",
      link: "",
      skills: ["Python", "PyTorch", "CNNs", "Computer Vision"],
    },
    {
      name: "Behavioral State Modeling with HMMs",
      description:
        "Applied Hidden Markov Models to large behavioral time-series data to analyze state transitions and identify meaningful behavioral patterns. Built preprocessing workflows and used probabilistic modeling to better understand how behavioral signals change over time.",
      link: "", 
      skills: ["Python", "hmmlearn", "Time Series", "Probabilistic Modeling"],
    },
  ],
  experience: [
    {
      company: "San Mateo County Sheriff’s Office (with C3 AI)",
      title: "Technical Services Unit Intern",
      dateRange: "Jun 2025 - Present",
      bullets: [
        "Worked on the Sherlock patrol-support platform used by 5,000+ law enforcement personnel.",
        "Talked directly with 16 agencies to understand real-world workflows and translate them into product features.",
        "Helped test new features before release by identifying bugs and validating fixes.",
        "Designed workflows and feature mockups in Figma for organized retail theft detection.",
      ],
    },
    {
      company: "Ernst & Young (EY)",
      title: "Technology Risk Assurance Intern",
      dateRange: "June 2026 - August 2026",
      bullets: [
        "Supported client IT risk engagements through process documentation, evidence review, walkthroughs, and ITGC/ITAC testing.",
        "Designed innovative presentation materials that improve how technology risk findings and recommendations are communicated to clients.",
        "Helped test new features before release by identifying bugs and validating fixes.",
        "Evaluated technology risks, documenting key controls, and supporting SOX and financial statement audit procedures for fintech and robotics clients.",
      ],
    },
    {
      company: "UC San Diego Health — Center for Bleeding and Clotting Disorders",
      title: "Finance and Research Administrative Assistant",
      dateRange: "April 2024 - June 2026",
      bullets: [
        "Managed over $10M in grant and clinical trial budgets using Oracle systems.",
        "Built Excel dashboards to track spending and forecast costs, helping reduce expenses by about 30%.",
        "Cleaned and reconciled financial data to keep records accurate and audit-ready.",
        "Supported both finance and research teams by making budget data easier to understand and use.",
      ],
    },
    {
      company: "UCSD Skaggs School of Pharmacy and Pharmaceutical Sciences",
      title: "Data Science Research Intern",
      dateRange: "Dec 2024 - Feb 2026",
      bullets: [
        "Analyzed 50K+ behavioral time-series records using Python, R, and SQL for predictive modeling.",
        "Built preprocessing pipelines to turn raw behavioral data into model-ready inputs.",
        "Used Fourier transforms and spectral analysis to extract meaningful signal patterns.",
        "Applied Hidden Markov Models to understand behavioral state transitions over time.",
        "Shared results and insights with interdisciplinary research teams.",
      ],
    },
  ],
  education: [
    {
      school: "University of California - San Diego",
      degree: "Bachelor of Science in Cognitive Science with Specialization in Machine Learning and Neural Computation",
      dateRange: "Sept 2023 - June 2026",
      achievements: [
        "3.81 GPA",
        'President of <a href="https://tritonrobotics.org" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:underline">Triton Robotics</a>',
      ],
    },
  ],
};
