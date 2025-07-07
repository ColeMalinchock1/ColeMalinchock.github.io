// projectsData.js
// Updated to include multiple images per project

const projects = [
    {
      id: 1,
      title: "Q-Loc",
      shortDescription: "Q-Loc: Visual Cue-Based Ground Vehicle Localization Using Long Short-Term Memory",
      authors: "Cole Malinchock, Jimin Yu, Pratik Thapa, Dhruva Ungrupulithaya, Man-Ki Yoon",
      abstract: `Mobile autonomous systems are increasingly being
                deployed in controlled environments worldwide, with large
                fleets of ground robots performing tasks such as delivery
                and surveillance. These systems require reliable localization
                to navigate through such environments. While the Global
                Positioning System (GPS) is commonly implemented in these
                systems, urban environments can introduce inaccuracies due
                to signal blockages caused by large buildings and structures,
                or even complete signal loss. This paper proposes a rapid and
                cost-effective localization method using a sensor ubiquitous in
                autonomous systems: cameras. We introduce a system that uses
                vision-based machine learning techniques to detect common
                landmarks in camera streams and subsequently predict location. The system employs advanced object detection models
                for landmark identification and recurrent neural networks
                for vehicle localization based on the detected landmarks. We
                prototype these techniques on a small-scale autonomous vehicle
                platform to demonstrate the system’s capabilities and evaluate
                its accuracy and execution efficiency in real-world scenarios.
                `,
      date: "March, 2025",
      partners: [
        "Yoon Lab"
      ],
      results: [
        "2025 NC Department of Transportation Symposium",
        "IEEE Intelligent Vehicles Symposium 2025"
      ],
      // Main image (used for card)
      image: "/images/publications/QLoc/Diagram.jpg", 
      // Array of all project images
      images: [
        {
          src: "/images/publications/QLoc/Diagram.jpg",
          description: "Diagram of Q-Loc Estimation"
        },
        {
          src: "/images/publications/QLoc/NCDOT.jpg",
          description: "Presentation at NCDOT Symposium"
        }
      ],
      tags: [],
      links: {
        github: "",
        paper: "/documents/publications/QLoc/QLoc_IV.pdf"
      }
    },
  ];
  
  export default projects;