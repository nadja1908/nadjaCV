// All of the site's content lives in this file.
// Edit text here — no need to touch the HTML or JavaScript.

window.CV = {
  person: {
    name: "Nadja Djordan",
    first: "nadja",
    last: "djordan",
    role: "Information engineer · Organizer",
    hello: "nice to meet you!",
    intro: "Information engineer from Novi Sad, now living in The Hague and doing a Master's in Management of Technology at TU Delft.",
    email: "nadjadj1908@gmail.com",
    github: "https://github.com/nadja1908",
    linkedin: "https://www.linkedin.com/in/nadja-djordan-b78253255/",
    cv: "assets/Nadja-Djordan-CV.pdf",
    portrait: "assets/portrait-full.jpg",
    portraitAlt: "Nadja Djordan in front of the Science & Technology Park in Novi Sad",
    workStatus: "EU citizen (Croatian passport)",
  },

  // Sections appear on the page in this order.
  sections: [
    {
      id: "about",
      label: "About",
      kind: "about",
      title: "about me.",
      lede: "Loyal, dedicated, and happiest when I'm working with people.",
      paragraphs: [
        "I studied Information Engineering at the Faculty of Technical Sciences in Novi Sad. Today I live in The Hague and do a Master's in Management of Technology at TU Delft, where I'm adding strategy and management to my engineering background.",
        "At the faculty I worked a lot with data: I designed SQL and NoSQL databases, built analytics over large datasets, trained machine learning models and built full-stack applications on top of all of it.",
        "I'm loyal to the people I work with and dedicated to the work itself. Once I commit to something, I see it through. I'm also a very social person. I love spending time with people and I'm at my best in a team. I think that's the Balkan spirit in me.",
      ],
      facts: [
        { value: "8.56", label: "Bachelor's GPA, Information Engineering" },
        { value: "C1", label: "Cambridge English Advanced" },
        { value: "8+", label: "software projects, from ML to microservices" },
      ],
    },

    {
      id: "experience",
      label: "Experience",
      kind: "timeline",
      title: "experience.",
      lede: "Professional roles in software development and marketing.",
      items: [
        {
          id: "comdata",
          date: "June 2025",
          role: "Software Development Intern",
          org: "ComData d.o.o.",
          text: "Built a full-stack daily planner application from scratch during a one-month internship.",
          bullets: [
            "Developed the backend in C# / .NET.",
            "Built the frontend in React.js.",
          ],
          tags: ["C#", ".NET", "React", "Full-stack"],
        },
        {
          id: "oksa",
          date: "Aug – Dec 2024",
          role: "Frontend Developer",
          org: "OKSA d.o.o.",
          text: "Developed the front-end of the company's official website.",
          bullets: [
            "Focused on responsive layout, clean UI design and user-friendly navigation using HTML/CSS.",
            "Added lightweight JavaScript for interactive elements.",
          ],
          tags: ["HTML", "CSS", "JavaScript", "Responsive design"],
          link: { label: "oksa.co.rs", url: "https://www.oksa.co.rs/" },
        },
        {
          id: "ftn-marketing",
          date: "2021 – 2024",
          place: "Novi Sad, Serbia",
          role: "Marketing Intern",
          org: "Marketing Service, Faculty of Technical Sciences",
          text: "Part of the faculty's marketing team. I represented the faculty to future students and helped them from their first questions through to enrollment.",
          bullets: [
            "Supported marketing activities and campaigns across the whole faculty.",
            "Travelled across Serbia representing the faculty: presenting it to high-school students, encouraging them to apply and answering their questions about my major.",
            "Guided prospective students through the application process.",
            "During enrollment, helped newly admitted students with their documentation, including the indeks, the paper student record book still used in Serbia. FTN admits around 2,000 new students every year.",
          ],
          tags: ["Marketing", "Public presentation", "Student support", "Administration", "Communication"],
        },
      ],
    },

    {
      id: "beyond",
      label: "Beyond class",
      kind: "timeline",
      title: "beyond the classroom.",
      lede: "Organizing, admin and helping out: the work I do outside of class and jobs.",
      items: [
        {
          id: "snp",
          date: "Concert",
          place: "Serbian National Theatre, Novi Sad",
          role: "Concert organization & music coordination",
          org: "First Class dance team · Srpsko narodno pozorište",
          text: "Part of the organizing team for a full-scale concert at the Serbian National Theatre in Novi Sad.",
          bullets: [
            "Collected the music for every choreography from each trainer, then renamed, sorted and sequenced the tracks into the show's running order.",
            "Lined up the stage presentation with the music and with the dancers performing each choreography, so the show ran in order.",
            "Prepared the documents, schedules and visuals in Word, Excel and Canva.",
          ],
          tags: ["Event organization", "Coordination", "Excel", "Canva"],
        },
        {
          id: "family",
          date: "Ongoing",
          role: "Administration & website",
          org: "OKSA d.o.o. · family business",
          text: "OKSA is my family's company. Besides building its website, I'm the first person called whenever something administrative needs solving.",
          bullets: [
            "Designed and built the company website, oksa.co.rs.",
            "Handle day-to-day administration: documents, spreadsheets and problem-solving.",
          ],
          tags: ["Web development", "Administration", "Word", "Excel"],
          link: { label: "Visit oksa.co.rs", url: "https://www.oksa.co.rs/" },
        },
        {
          id: "friend",
          date: "Always",
          role: "The friend you call",
          org: "Word · Excel · Canva · websites",
          text: "When friends need a document formatted, a spreadsheet built, a poster designed, a quick website, or just help getting organized, they call me. I enjoy this kind of work.",
          tags: ["Word", "Excel", "Canva", "Organization"],
        },
      ],
    },

    {
      id: "projects",
      label: "Projects",
      kind: "projects",
      title: "projects.",
      lede: "Projects in full-stack development, distributed systems, data and machine learning.",
      items: [
        {
          id: "vet",
          kind: "Full-stack application",
          title: "Veterinary Clinic Management",
          text: "A complete management system for a veterinary clinic.",
          bullets: [
            "Patients, appointments, medical reports, price lists and promotional packages.",
            "Sprint planning and task tracking in Jira.",
          ],
          tags: ["Spring Boot", "React", "PostgreSQL", "Jira"],
        },
        {
          id: "fis",
          kind: "Microservices · Analytics",
          title: "Faculty Information System",
          text: "Analytics on student performance and courses, built as microservices.",
          bullets: [
            "Insights like course difficulty and grading patterns across professors.",
            "Built end to end on Apache Cassandra, with data exchanged between two microservices.",
          ],
          tags: ["Microservices", "Cassandra", "NoSQL"],
        },
        {
          id: "bgg",
          kind: "Data · Query optimization",
          title: "BoardGameGeek Analytics",
          text: "Analytics over a large Kaggle dataset using MongoDB.",
          bullets: [
            "Five aggregation-based analytical queries.",
            "Optimized with indexes and efficient query patterns for high-volume data.",
          ],
          tags: ["MongoDB", "Aggregations", "Indexing"],
        },
        {
          id: "onlybuns",
          kind: "Social web app",
          title: "OnlyBuns",
          text: "A social network for rabbit lovers: share and explore rabbit photos.",
          bullets: ["Liking, commenting, following and admin account management."],
          tags: ["Vue.js", "Node.js"],
        },
        {
          id: "planner",
          kind: "Full-stack · Internship",
          title: "Daily Planner",
          text: "A full-stack planner app built during my internship at ComData.",
          tags: ["C#", ".NET", "React"],
        },
        {
          id: "booking",
          kind: "Tablet application",
          title: "Booking",
          text: "A tablet booking application: backend logic in C# and the UI/viewmodel layer in HTML.",
          tags: ["C#", "HTML"],
        },
        {
          id: "heart",
          kind: "Machine learning",
          title: "Heart Failure Prediction",
          text: "A logistic regression model predicting the likelihood of heart failure.",
          bullets: ["Preprocessing, feature selection and evaluation."],
          tags: ["Python", "pandas", "scikit-learn"],
        },
        {
          id: "diabetes",
          kind: "Machine learning",
          title: "Diabetes Prediction",
          text: "Trained and compared logistic regression, linear regression, random forest, decision tree and SVM.",
          bullets: ["Evaluated with accuracy, precision and recall, with visual analysis of results."],
          tags: ["Python", "TensorFlow", "scikit-learn", "seaborn"],
        },
      ],
    },

    {
      id: "skills",
      label: "Skills",
      kind: "skills",
      title: "skills.",
      lede: "Technical skills, plus the organizing and office skills I use just as often.",
      groups: [
        { name: "Programming languages", items: ["Java", "C#", "C++", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
        { name: "Frameworks & libraries", items: ["Spring Boot", "Spring Data JPA", "Hibernate", "React", "Vue.js", "Node.js", ".NET", "pandas", "scikit-learn", "TensorFlow"] },
        { name: "Databases", items: ["PostgreSQL", "MySQL", "Oracle Database", "MongoDB", "Cassandra"] },
        { name: "Tools", items: ["Git", "GitHub", "Docker", "Maven", "Postman", "Jira", "IntelliJ IDEA", "VS Code", "LaTeX"] },
        { name: "Practices", items: ["REST APIs", "Microservices", "OOP", "NoSQL data modeling", "ETL (Node.js)", "Responsive web design"] },
        { name: "Organization & office", items: ["Event organization", "Administration", "Documentation", "Word", "Excel", "PowerPoint", "Canva"] },
        { name: "Languages spoken", items: ["Serbian (native)", "English (C1 Advanced)"] },
      ],
    },

    {
      id: "education",
      label: "Education",
      kind: "timeline",
      title: "education.",
      lede: "A Bachelor's in Information Engineering, now a Master's in Management of Technology.",
      items: [
        {
          id: "tudelft",
          date: "Sep 2026 – present",
          place: "Delft, Netherlands",
          flag: "nl",
          role: "MSc Management of Technology",
          org: "Delft University of Technology (TU Delft)",
          text: "Building on an engineering foundation with strategy, innovation and how technology is managed inside organizations.",
          tags: ["Master's"],
        },
        {
          id: "ftn",
          date: "2021 – 2026",
          place: "Novi Sad, Serbia",
          flag: "rs",
          role: "BSc Information Engineering",
          org: "Faculty of Technical Sciences, University of Novi Sad",
          text: "GPA 8.56. Projects in software engineering, SQL & NoSQL databases, microservices and machine learning.",
          tags: ["Bachelor's", "GPA 8.56"],
        },
        {
          id: "gymnasium",
          date: "2017 – 2021",
          place: "Novi Sad, Serbia",
          flag: "rs",
          role: "Gymnasium",
          org: "Gymnasium “Svetozar Marković”",
        },
        {
          id: "cambridge",
          date: "Certification",
          role: "Cambridge English Qualification, C1 Advanced",
          org: "Cambridge Assessment English",
          tags: ["English C1"],
        },
      ],
    },

    {
      id: "hobbies",
      label: "Hobbies",
      kind: "hobbies",
      title: "off the clock.",
      lede: "Mostly dancing. Then the gym, and the mountains every winter.",
      items: [
        {
          title: "Dance",
          text: "My biggest passion, and where I spend most of my free time. I've danced with the First Class dance team, and dance has taught me discipline, rhythm and how to work as part of a group. It's also how I ended up helping organize a concert at the Serbian National Theatre.",
        },
        {
          title: "Gym",
          text: "My way to reset after a long day. Training regularly keeps me focused and full of energy, and it's taught me that steady work beats quick results.",
        },
        {
          title: "Skiing & snowboarding",
          text: "Every winter I head to the mountains. I switch between skis and a snowboard, and there's no better way for me to spend a day outside.",
        },
      ],
    },

    {
      id: "contact",
      label: "Contact",
      kind: "contact",
      title: "let's talk.",
      lede: "Open to internships, projects and conversations, in the Netherlands or remote.",
    },
  ],
};
