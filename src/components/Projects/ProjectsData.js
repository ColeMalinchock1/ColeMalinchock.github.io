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
      tags: ["SolidWorks", "Python","Kivy" ,"KiCAD"],
      links: {
        github: "https://github.com/InsightNCSU",
        live: "https://youtu.be/9lVFlevcwTU",
        cad: "https://github.com/InsightNCSU/CAD",
        pcb: "https://github.com/InsightNCSU/PCB/tree/main"
      }
    },
    {
      id: 2,
      title: "OVAL",
      shortDescription: "On-campus Vehicle Autonomous Launch",
      fullDescription: "A general service autonomous robot to be utilized for research and student support on campuses.",
      // Main image (used for card)
      image: "./images/projects/OVAL_Vehicle.png",
      // Array of all project images
      images: [
        "./images/projects/OVAL_Vehicle.png",
        "./images/projects/OVAL_Driving.png",
        "./images/projects/OVAL_Mockup.png"
      ],
      tags: ["SolidWorks", "ROS2", "Python", "C++"],
      links: {
        github: "https://github.com/yourusername/project1",
        live: "https://youtube.com/shorts/7gE9keZnb2I?feature=share",
        cad: "https://cad-link.com"
      }
    },
    {
        id: 3,
        title: "FWC sUAV",
        shortDescription: "Florida Fish & Wildlife Conservation Commission Small Unmanned Aerial Vehicle",
        fullDescription: "Undergraduate research assistant to develop the software to enable to drone to autonomously avoid obstacles as it travels between waypoints.",
        // Main image (used for card)
        image: "./images/projects/FWC.png",
        // Array of all project images
        images: [
            "./images/projects/FWC.png",
            "./images/projects/FWC.png",
            "./images/projects/FWC.png"
        ],
        tags: ["ROS2", "Python", "MuJoCo", "Reinforcement Learning"],
        links: {
            github: "https://github.com/yourusername/project1",
            live: "https://youtube.com/shorts/7gE9keZnb2I?feature=share",
            cad: "https://cad-link.com"
        }
    },
    {
        id: 4,
        title: "Autonomous Vehicle Development",
        shortDescription: "Design and develop the 1/16th scale autonomous vehicle to be used in NCSU CSC495 course.",
        fullDescription: "Developed the 1/16th scale autonomous vehicles from the base of a Traxxas RC car and developing the mounting of an NVIDIA Jetson Orin, RPlidar, Zed2i, Teensy 4.1, and Hobbywing brushless motor.",
        // Main image (used for card)
        image: "./images/projects/CSC495.png",
        // Array of all project images
        images: [
            "./images/projects/CSC495.png",
            "./images/projects/CSC495.png",
            "./images/projects/CSC495.png"
        ],
        tags: ["ROS2", "KiCAD", "Python", "C++", "SolidWorks"],
        links: {
            github: "https://github.com/yourusername/project1",
            live: "https://youtube.com/shorts/7gE9keZnb2I?feature=share",
            cad: "https://cad-link.com"
        }
    },
    {
        id: 5,
        title: "AAV",
        shortDescription: "Autonomous Aquatic Vessel.",
        fullDescription: "Personal project to develop an autonomous vessel that is capable of traversing through a body of water to record relevant data on water temperature, turbidity, temperature, and depth.",
        // Main image (used for card)
        image: "./images/projects/AAV.png",
        // Array of all project images
        images: [
            "./images/projects/AAV.png",
            "./images/projects/AAV.png",
            "./images/projects/AAV.png"
        ],
        tags: ["ROS2", "KiCAD", "Python", "C++", "SolidWorks", "Fiber Glass Laying"],
        links: {
            github: "https://github.com/yourusername/project1",
            live: "https://youtube.com/shorts/7gE9keZnb2I?feature=share",
            cad: "https://cad-link.com"
        }
    },
  ];
  
  export default projects;