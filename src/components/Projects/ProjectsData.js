// projectsData.js
// Updated to include multiple images per project

const projects = [
    {
      id: 1,
      title: "INSIGHT",
      shortDescription: "Intelligent, Safe, In-home Gravity Halo Traction",
      fullDescription: "INSIGHT is a joint project between NC State Mechanical and Aerospace Engineering Department and UNC Children's Hospital.",
      // Main image (used for card)
      image: "/images/projects/Walker_CAD.png", 
      // Array of all project images
      images: [
        "/images/projects/Walker_CAD.png",
        "/images/projects/Wheelchair_CAD.png",
        "/images/projects/Walker_And_Wheelchair.png"
      ],
      tags: ["SolidWorks", "Python", "KiCAD"],
      links: {
        github: "https://github.com/InsightNCSU",
        live: "https://drive.google.com/file/d/1EN9imIc2E_8eF6kK3yJAMlcxjQkyRCB7/view?usp=sharing",
        cad: "https://cad-link.com",
        pcb: "https://pcb-design-link.com"
      }
    },
    {
      id: 2,
      title: "Project Name 1",
      shortDescription: "Brief description of the project",
      fullDescription: "Detailed description of the project and its features. Include technical details, challenges overcome, and outcomes achieved.",
      // Main image (used for card)
      image: "./images/Project1_Main.png",
      // Array of all project images
      images: [
        "./images/Project1_Main.png",
        "./images/Project1_Detail.png",
        "./images/Project1_Diagram.png"
      ],
      tags: ["React", "Node.js", "MongoDB"],
      links: {
        github: "https://github.com/yourusername/project1",
        live: "https://project-demo.com",
        cad: "https://cad-link.com",
        pcb: "https://pcb-design-link.com"
      }
    },
    // Add more projects here
  ];
  
  export default projects;