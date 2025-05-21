// projectsData.js
// Updated to include multiple images per project

const projects = [
    {
      id: 1,
      title: "INSIGHT",
      shortDescription: "Intelligent, Safe, In-home Gravity Halo Traction",
      overview: `Intelligent, Safe, In-home Gravity Halo Traction (INSIGHT) is a joint project between the NC State Mechanical and Aerospace Engineering Department\
                 and UNC Children's Hospital to develop an improved version of the Halo Gravity Traction system used pre-operation on children diagnosed with severe\
                 scoliosis. Currently, there is a walker and a wheelchair system that have been developed and thoroughly tested with numerous safety features and\
                 are prepared for clinical trials at UNC Children's Hospital. This project seeks to modernize their halo-gravity traction treatment by incorporating\
                 motorized control and a load cell sensor to precisely measure the tension applied to a patient’s head. The goal is to improve both the effectiveness\
                 and usability of the system for medical professionals and families while ensuring patient safety.`,
      contributions: `I am leading a team of 3 other undergraduates in the development of the new systems. To support this, I designed and implemented a graphical user\
                      interface (GUI) on a Raspberry Pi, streamlining the control and monitoring of the tensioning system, which is demoed below. Additionally, I engineered\
                      a structure that integrates the control system onto a wheelchair and walker, enabling greater mobility for patients. Ensuring safety was paramount;\
                      I conducted a Finite Element Analysis (FEA) on the structure to verify its ability to withstand expected loads, incorporating a predetermined\
                      factor of safety. Recognizing the need for seamless integration of electronic components, I designed a custom printed circuit board (PCB) to house\
                      the system’s electronics, including a LiFePo battery for reliable power delivery. In my leadership role, I ensure the other undergraduates are\
                      structured and organized in their work, setting weekly goals and coordinating progress to meet our targets.`,
      startDate: "May, 2023",
      endDate: "Present",
      partners: [
        "UNC Chapel Hill Innovation Pilots Award",
        "The Oak Foundation"
      ],
      results: ["No public results at this time"],
      // Main image (used for card)
      image: "/images/projects/INSIGHT/WalkerCombined.jpg", 
      // Array of all project images
      images: [
        {
          src: "/images/projects/INSIGHT/WalkerCombined.jpg",
          description: "Walker system"
        },
        {
          src: "/images/projects/INSIGHT/WheelchairCombined.jpg",
          description: "Wheelchair system"
        },
        {
          src: "/images/projects/INSIGHT/PCB.jpg",
          description: "KiCAD PCB Schematic"
        },
        {
          src: "/images/projects/INSIGHT/FEA.jpg",
          description: "SolidWorks FEA"
        }
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
      overview: `A general service autonomous robot to be utilized for research and student support on campuses. Equipped with a Velodyne VLP-16 LiDAR,\
                 ZED2i, NVIDIA Jetson Orin, and a SwiftNav GPS-RTK system, the robot is intended to be used as a platform for open-source autonomous work\
                 at a University Campus. Currently, the system is manually driven, but future development will be done to include package transportation\
                 features and autonomous driving between waypoints on a campus setting. The system currently uses ROS2 Foxy.`,
      contributions: `My role on this project is to manage the design and development of the platform, leading the development between teams of software\
                      development, mechanical design, and electrical functionalities. Additionally, I worked closely with the design and manufacturing of\
                      the vehicle and ensured that the electrical system was consistent and capable of being driven manually.`,
      startDate: "September, 2024",
      endDate: "Present",
      partners: [
        "None"
      ],
      results: [
        "2025 NCDOT Symposium Demonstration and Poster"
      ],
      // Main image (used for card)
      image: "./images/projects/OVAL/Vehicle.jpg",
      // Array of all project images
      images: [
        {
          src: "./images/projects/OVAL/Vehicle.jpg",
          description: "The OVAL Vehicle"
        },
        {
          src: "./images/projects/OVAL/Driving.jpg",
          description: "The OVAL Vehicle Collecting Data"
        },
        {
          src: "./images/projects/OVAL/Mockup.jpg",
          description: "Future Mockup of Vehicle"
        },
        {
          src: "./images/projects/OVAL/GroupPhoto.jpg",
          description: "The Man-Ki Yoon Lab"
        },
        {
          src: "./images/projects/OVAL/NCDOT.jpg",
          description: "The 2025 NCDOT Symposium"
        }
      ],
      tags: ["SolidWorks", "ROS2", "Python", "C++", "3D Printing"],
      links: {
        github: "https://github.com/ncsu-yoon-lab/project-oval",
        live: "https://youtube.com/shorts/P89XuPpUuFY",
        cad: "https://drive.google.com/file/d/1Qy-uowouNupgF_nzo_sLBQ_WKx289h_J/view?usp=sharing"
      }
    },
    {
        id: 3,
        title: "FWC sUAV",
        shortDescription: "Florida Fish & Wildlife Conservation Commission Small Unmanned Aerial Vehicle",
        overview: `Drone to autonomously avoid obstacles as it travels between waypoints and uses a trained model to detect invasive plant species as it travels.\
                   The UAV is equipped with a ZED2i, NVIDIA Jetson Orin Nano, Pixhawk, and RPLiDAR to travel effectively through a forested area, avoiding trees and other obstacles.`,
        contributions: `My role on the project is to develop the software so the NVIDIA Jetson is capable of communicating efficiently with the Pixhawk and reacting\
                        properly from real-time sensor readings. In order to complete this, I have developed a ROS2 architecture that uses Python to coordinate\
                        between all the sensors and communicate with the Pixhawk effectively. Additionally, I am responsible for developing the obstacle avoidance\
                        algorithm, which is still currently in development. I have also used MuJoCo to attempt to utilize reinforcement learning to train obstacle avoidance\
                        but the results were unfavorable and will need further work to improve.`,
        startDate: "May, 2024",
        endDate: "Present",
        partners: [
          "Florida Fish and Wildlife Conservation Commission"
        ],
        results: [
          "No public results at this time"
        ],
        // Main image (used for card)
        image: "./images/projects/FWC/Vehicle.jpg",
        // Array of all project images
        images: [
            {
              src: "./images/projects/FWC/Vehicle.jpg",
              description: "The FWC Vehicle"
            },
            {
              src: "./images/projects/FWC/Flying.jpg",
              description: "The FWC Vehicle Flying"
            },
            {
              src: "./images/projects/FWC/MuJoCo.jpg",
              description: "MuJoCo Simulator of sUAV"
            }
        ],
        tags: ["ROS2", "Python", "MuJoCo", "Reinforcement Learning"],
        links: {
            github: "https://github.com/ColeMalinchock1/sUAV",
            live: "https://youtube.com/shorts/ynsS7J2i6o8"
        }
    },
    {
        id: 4,
        title: "Autonomous Vehicle Development",
        shortDescription: "Design and develop the 1/16th scale autonomous vehicle to be used in NCSU CSC495 course.",
        overview: "Developed the 1/16th scale autonomous vehicles from the base of a Traxxas RC car and developing the mounting of an NVIDIA Jetson Orin, RPlidar, Zed2i, Teensy 4.1, and Hobbywing brushless motor.",
        contributions: `My responsibilities were to design, manufacture, and assemble the mounts for all the devices and the electrical system that powers and manages\
                        signal passing in the car. My designs went through 4 different iterations until the final result shown above. Additionally, I was responsible for\
                        developing the code to use computer vision to autonomously drive the vehicle around the track. This required working with ROS2 and Arduino IDE to\
                        get real-time imaging and communicate from the Jetson to the Teensy to control motor actuation. Future work is being done to develop a cover for\
                        the system, but I am no longer assisting in the development.`,
        startDate: "September, 2022",
        endDate: "January, 2024",
        partners: [
          "North Carolina State University Computer Science Department"
        ],
        results: [
          "2025 NCDOT Symposium Demonstration"
        ],
        // Main image (used for card)
        image: "./images/projects/AutoCar/Car.jpg",
        // Array of all project images
        images: [
            {
              src: "./images/projects/AutoCar/Car.jpg",
              description: "The 1/16th scale car"
            },
            {
              src: "./images/projects/AutoCar/Driving.jpg",
              description: "The car on the lab track"
            },
            {
              src: "./images/projects/AutoCar/PCB.jpg",
              description: "KiCAD PCB Design"
            },
            {
              src: "./images/projects/AutoCar/PhysicalPCB.jpg",
              description: "Physical PCB"
            },
            {
              src: "./images/projects/AutoCar/Me.jpg",
              description: "Presenting car at 2025 NCDOT Symposium"
            },
            {
              src: "./images/projects/AutoCar/GroupPhoto.jpg",
              description: "The Man-Ki Yoon Lab"
            }
        ],
        tags: ["ROS2", "KiCAD", "Python", "C++", "SolidWorks"],
        links: {
            live: "https://youtu.be/sN5DCKEnFOg"
        }
    },
    {
        id: 5,
        title: "AAV",
        shortDescription: "Autonomous Aquatic Vessel.",
        overview: `Personal project to develop an autonomous vessel that is capable of traversing through a body of water to record relevant data on water\
                   temperature, turbidity, temperature, and depth. The frame is from corrugated plastic and fiberglass is laid to form the hull. It is equipped\
                   with an NVIDIA Jetson Orin Nano and a Ping Depth Sensor. Currently, the project is halted due to leakage in the hull.`,
        contributions: `This is a personal project, so all progress is my own work.`,
        startDate: "December, 2023",
        endDate: "Present",
        partners: [
          "NC State Park Enrichment Grant"
        ],
        results: [
          "None"
        ],
        // Main image (used for card)
        image: "./images/projects/AAV/Vessel.jpg",
        // Array of all project images
        images: [
          {
            src: "./images/projects/AAV/Vessel.jpg",
            description: "AAV Vessel"
          },
          {
            src: "./images/projects/AAV/CAD.jpg",
            description: "AAV CAD"
          }
        ],
        tags: ["ROS2", "KiCAD", "Python", "C++", "SolidWorks", "Fiber Glass Laying"],
        links: {
            github: "https://github.com/ColeMalinchock1/AAV-Project",
            cad: "https://drive.google.com/file/d/1JFDvAgC38u1ju6vs8ssmwUWPZ65kIHcX/view?usp=sharing"
        }
    },
  ];
  
  export default projects;