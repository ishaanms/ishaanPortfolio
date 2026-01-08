export const projects = [
  {
    id: 1,
    category: "Strategic Analysis",
    title: "M&A Strategic Fit Analyzer",
    image: "/project-images/MA_Screen.png",
    featuredImage: "/featured-image/MA_Screen.png",
    subtitle: "AI-Powered Acquisition Target Screening",
    challenge: "Management consulting firms spend 2-3 days manually researching acquisition targets, analyzing strategic fit across multiple dimensions, and preparing investment committee memos. This time-intensive process delays deal evaluation and increases analyst costs by $5,000+ per deal.",
    approach: "Built AI-powered strategic fit analyzer using Google Gemini 1.5 Flash and Python agents. The system automates data collection through web scraping, applies a weighted scoring framework across 5 strategic dimensions (Technology Synergy 30%, Market Overlap 25%, Product Complementarity 20%, Cultural Alignment 15%, Financial Health 10%), and generates investment committee-ready recommendations with interactive Plotly visualizations. Supports E-commerce, FinTech, and SaaS industries with pre-configured deal examples (Shopify→Deliverr, Stripe→Plaid, Salesforce→Slack).",
    impact: [
      "Achieved 95% time savings by reducing analysis time from 2 days to 45 seconds",
      "Delivered standardized strategic fit assessments saving $5,000 in analyst costs per deal",
      "Built modular architecture supporting Fast Mode (45 sec) and Deep Mode (2 min) with visual dashboards"
    ],
    skills: ["Python", "AI/LLM Integration", "Streamlit", "Web Scraping", "M&A Strategy", "Plotly", "Google Gemini API"],
    link: "https://ma0screening0agent.streamlit.app", 
    githubLink: "https://github.com/ishaanms/MA_screening_analyser", 
    featured: true, // Change to true if you want it on homepage
    year: "2024"
  },
  {
    id: 2,
    category: "Strategic Analysis",
    title: "Luminous Lab-Grown Diamonds (Case Study)",
    image: "/project-images/luminous.jpg",
    featuredImage: "/featured-image/luminous.png",
    subtitle: "Go-to-Market Strategy",
    challenge: "Emerging luxury brand needed to navigate consumer skepticism, position against natural diamonds, and determine optimal distribution strategy in a rapidly growing $75B market (14% CAGR).",
    approach: "Conducted market analysis of lab-grown diamond industry, evaluated positioning strategies (premium fashion-tech vs. affordable ethical), and designed omnichannel go-to-market model combining D2C e-commerce with strategic legacy retail partnerships.",
    impact: [
      "Addressed $22.79B market opportunity growing to $74.45B by 2032",
      "Designed strategy to capture youth demographic (70% of U.S. market)",
      "Created framework balancing credibility (physical retail) with scalability (digital)"
    ],
    skills: ["Market Analysis", "Strategic Planning", "Consumer Research", "Financial Modeling", "Go-to-Market Strategy"],
    link: "https://drive.google.com/file/d/1CUdTM84W7qsfAopnLhVCtr2YV4-Lz95H/view?usp=share_link", // You'll add case study PDF link later
    featured: true,
    year: "2024"
  },
  {
    id: 3,
    category: "Healthcare & Life Sciences",
    title: "Clinical Decision Support System",
    image: "/project-images/CDSS.png",
    featuredImage: "/featured-image/CDSS.png",
    subtitle: "Breast Cancer Prediction",
    challenge: "Healthcare providers need faster, more accurate diagnostic tools to improve patient outcomes and reduce costs in breast cancer screening.",
    approach: "Developed neural network-based prediction system achieving 93% accuracy using Keras, with robust preprocessing pipelines to ensure clinical reliability and prevent overfitting.",
    impact: [
      "Supports early intervention strategies that improve 5-year survival rates",
      "Potential to reduce diagnostic time by 40%, enabling higher patient throughput",
      "Demonstrates AI integration into clinical workflows without compromising accuracy"
    ],
    skills: ["Python", "Neural Networks", "Keras", "Healthcare Data Analysis", "ML Pipeline Development"],
    link: "https://github.com/ishaanms/Breast_cancer_Prediction_using_NN",
    featured: true,
    year: "2024"
  },
  {
    id: 4,
    category: "Healthcare & Life Sciences",
    title: "Drug Development Analytics",
    image: "/project-images/luminous.png",
    featuredImage: "/featured-image/DDA.png",
    subtitle: "Medicinal Compound Prediction",
    challenge: "Pharmaceutical R&D teams need predictive models to accelerate drug discovery and reduce costly clinical trial failures by identifying promising compounds earlier in the development pipeline.",
    approach: "Built ensemble ML system (Logistic Regression, XGBoost, Random Forest) to predict drug-DNA binding characteristics across 79 cell specimens, analyzing chemical features to identify viable medicinal compounds.",
    impact: [
      "Supports go/no-go decisions in early-stage drug development, saving millions in R&D costs",
      "Reduces time-to-market by identifying promising compounds before expensive clinical trials",
      "Demonstrates understanding of pharmaceutical research process and chemistry context"
    ],
    skills: ["Ensemble Methods", "XGBoost", "Random Forest", "Feature Engineering", "Pharmaceutical Research Analytics"],
    link: "https://github.com/ishaanms/Drug_presence_prediction",
    featured: true,
    year: "2024"
  },
  {
    id: 5,
    category: "Healthcare & Life Sciences",
    title: "Healthcare Workforce Analytics Dashboard",
    image: "/project-images/luminous.png",
    featuredImage: "/featured-image/HWA.png",
    subtitle: "HR Optimization for Hospital Research Wing",
    challenge: "Hospital research wing needed data-driven insights to optimize HR allocation and improve operational efficiency, requiring both executive-level summaries and granular patient-record analysis.",
    approach: "Designed interactive Tableau dashboard providing real-time visibility into workforce metrics, enabling strategic staffing decisions and resource planning for hospital management.",
    impact: [
      "Enabled data-driven staffing decisions, improving resource allocation efficiency",
      "Provided executive-level visibility into HR KPIs previously buried in spreadsheets",
      "Reduced time-to-insight from weeks to minutes for workforce planning decisions"
    ],
    skills: ["Tableau", "Data Visualization", "Healthcare Operations", "Executive Communication", "Dashboard Design"],
    link: "https://public.tableau.com/views/PatientDashboard-Project/PatientSummary?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    featured: true,
    year: "2024"
  },
  {
    id: 6,
    category: "Technology & Digital",
    title: "Digital Platform Development",
    image: "/project-images/luminous.png",
    featuredImage: "/featured-images/luminous.jpg",
    subtitle: "Full-Stack Social Applications",
    challenge: "Demonstrate ability to build modern web applications and understand digital transformation at technical level.",
    approach: "Built two full-stack web applications: social discussion platform (Threads clone) and photo-sharing app (Pinterest clone) using Next.js, React, MongoDB, TypeScript, Node.js, Sanity CMS, and Tailwind CSS.",
    impact: [
      "Understand digital transformation at technical level - can evaluate build vs. buy decisions",
      "Bridge communication between business stakeholders and technical teams",
      "Assess feasibility and cost of digital initiatives for clients"
    ],
    skills: ["Next.js", "React", "MongoDB", "TypeScript", "Full-Stack Development", "Cloud Deployment"],
    link: "https://shareme-clone-ism.netlify.app",
    featured: false,
    year: "2024"
  },
  {
    id: 7,
    category: "Technology & Digital",
    title: "Scientific Computing & Modeling",
    image: "/project-images/luminous.png",
    featuredImage: "/featured-images/luminous.jpg",
    subtitle: "Differential Equation Simulator",
    challenge: "Create interactive visualization tool for complex mathematical systems to make non-linear differential equations accessible for analysis and education.",
    approach: "Built web-based simulator using React and Chart.js to visualize oscillatory and non-linear differential equation behavior in real-time, enabling rapid testing of different parameters.",
    impact: [
      "Demonstrates mathematical rigor and ability to handle complex analytical problems",
      "Shows capability to make complex technical concepts accessible (critical for consulting)",
      "Relevant for operations research, supply chain optimization, financial modeling work"
    ],
    skills: ["React", "Chart.js", "Differential Equations", "Scientific Computing", "Mathematical Modeling"],
    link: "https://nonlineardiffeqnsim.netlify.app",
    featured: false,
    year: "2024"
  }
];