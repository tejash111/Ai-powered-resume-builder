

export default  {
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Full Stack Developer",
    phone: "+1 (123) 456-7890",
    email: "john.doe@example.com",
    github:"github.com/abc",
    linkedin:"linkedin.com/abc",
    themeColor: "#1E3A8A", // Dark blue theme
    summary: "Passionate Full Stack Developer with 5+ years of experience in building scalable web applications.",

    skills: [
      {languages : [
      { id: 1, name: "JavaScript", rating: 80 },
  { id: 2, name: "React", rating: 70 },
  { id: 3, name: "Node.js", rating: 30},
  { id: 4, name: "MongoDB", rating: 60 },
  { id: 5, name: "Tailwind CSS", rating: 90 } ]
      },
    {techologiesAndTools: "AWS,EC2,DynamoDB,lambda,SQS,spark,Kubernetes"  }

],


  projects: [
    {
      name: "Movie Finder App",
      description: "A web application that allows users to search for movies, view details, and save favorites.",
      tech_stack: ["React", "TMDb API", "Tailwind CSS", "Axios"],
      features: [
        "Fetches movie details from the TMDb API",
        "Search functionality with real-time suggestions",
        "Responsive UI using Tailwind CSS"
      ],
      github_link: "https://github.com/yourusername/movie-finder-app",
      live_demo: "https://yourprojectdemo.com"
    },
    {
      name: "To-Do List App",
      description: "A simple to-do list application to add, edit, and delete tasks with local storage support.",
      tech_stack: ["React", "LocalStorage", "Tailwind CSS"],
      features: [
        "Add, edit, and delete tasks",
        "Stores tasks in local storage",
        "Dark mode support"
      ],
      github_link: "https://github.com/yourusername/todo-app",
      live_demo: "https://yourprojectdemo.com"
    }
  ],
  
    experience: [
      {
        id: 1,
        title: "Software Engineer",
        companyName: "Tech Innovators Inc.",
        place: "San Francisco ,CA",
        startDate: "2020-06-01",
        endDate: "2023-08-01",
        currentlyWorking: false,
        workSummary: "Developed and maintained full-stack applications, optimized database queries, and collaborated with cross-functional teams."
      },
      {
        id: 2,
        title: "Frontend Developer",
        companyName: "Creative Solutions Ltd.",
        place: "New York ,NY",
        
        startDate: "2018-04-01",
        endDate: "2020-05-30",
        currentlyWorking: false,
        workSummary: "Designed and implemented interactive UI components, improving user experience and application performance."
      }
    ],
  
    education: [
      {
        id: 1,
        universityName: "Stanford University",
        startDate: "2014-08-01",
        endDate: "2018-06-01",
        degree: "Bachelor's",
        major: "Computer Science",
        description: "Focused on software development, algorithms, and machine learning."
      }
    ],
    
    certifications: [
      {
        name: "MongoDB Basics",
        platform: "MongoDB University",
        completionDate: "2025-02-10",
        certificateLink: "https://example.com/mongodb-certificate"
      },
      {
        name: "React Fundamentals",
        platform: "Udemy",
        completionDate: "2025-03-05",
        certificateLink: "https://example.com/react-certificate"
      }
    ],
    achievements: [
      {
        title: "1st Prize in Inter-School Science Exhibition",
        description: "Won first place for developing an AI-powered waste segregation system.",
        year: 2022
      },
      {
        title: "Completed 100+ LeetCode Problems",
        description: "Solved 100+ DSA problems on LeetCode in C++ and Java.",
        year: 2025
      }
    ]
  
    };
  

  