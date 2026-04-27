import { motion } from 'framer-motion';

const portfolioProjects = [
  {
    title: "ROS Multi-Robot Control",
    tech: "ROS, Python, Linux, OptiTrack",
    desc: "Centralized server system for coordinating multiple robotic units.",
    videoUrl: "/videos/conlab-demo.mp4",
    technicalDetails: "The ROS Multi-Robot Control system is a centralized server architecture designed to coordinate multiple ROS-based robotic units. The system is essentially a Websocket-based solution that consists of a central server that manages the overall state of the robotic units, while individual robots connect to and communicate with the server to receive commands and share sensor data. The broad design of the system allows for scalability and integration with various types of robots and existing ROS applications. While the above video only shows a single robot because of limited hardware availability at the time of recording, it does demonstrate that a robot can connect to the centralized server and a user can send commands to the robot by connecting to the same server."
  },
  {
    title: "Overgrown",
    tech: "Unity, C#, VR, Photon Fusion 2, Google Cardboard",
    desc: "VR gardening simulator with cooperative gameplay and physics-based interactions.",
    videoUrl: "/videos/overgrown-demo.mp4",
    gitUrl: "https://github.com/FunAdityaSun/Overgrown_vr",
    technicalDetails: "Overgrown is built using the Unity game engine, with C# as the primary programming language. The game is designed for VR platforms and utilizes Google Cardboard for an accessible VR experience. The cooperative multiplayer functionality is implemented using Photon Fusion 2, allowing players to connect and play together in the same virtual nursery. The game features intelligent NPCs that act as customers, asking for specific plants, and uses pathfinding algorithms to navigate the nursery. The physics-based interactions enable players to water plants, move pots, and interact with the environment in a realistic way."
  },
  {
    title: "ClarityAI",
    tech: "Python, AWS, NLP, Node.js, Flask, Pinecone",
    desc: "AI-powered interactive learning assistant for students, to turn documents/notes to quizzes and provide real-time feedback.",
    videoUrl: "/videos/clarityai-demo.mp4",
    gitUrl: "https://github.com/mithunb9/ClarityAI",
    technicalDetails: "ClarityAI is an AI-powered interactive learning assistant designed to help students enhance their understanding of various subjects. The system utilizes natural language processing (NLP) techniques to analyze documents and notes, transforming them into engaging quizzes that test the user's knowledge. Built with Python and Node.js, ClarityAI leverages AWS for scalable cloud computing and Flask for the backend API. The integration with Pinecone allows for efficient vector search capabilities, enabling the assistant to provide real-time feedback and personalized learning experiences based on the user's performance."
  },
  {
    title: "Cup stacking robot",
    tech: "Python, OpenCV",
    desc: "Computer vision system to control a robotic arm for cup stacking tasks.",
    videoUrl: "/videos/cupstack-demo.mp4",
    gitUrl: "https://github.com/aksharaganapathi/so101-cup-stacking",
    technicalDetails: "The Cup Stacking Robot is a computer vision system developed using Python and OpenCV, designed to control a robotic arm for performing cup stacking tasks. The system uses a camera to capture the workspace, processing the images to identify the position and orientation of the cups. By analyzing the visual data, the system generates commands for the robotic arm to use inverse kinematics to pick up and stack the cups in a specific configuration."
  },
  {
    title: "CHIP-8 Emulator",
    tech: "C++, SDL",
    desc: "Virtual CPU simulation with a fully functional graphics subsystem.",
    imageURL: "/images/chip8-img.png",
    gitUrl: "https://github.com/FunAdityaSun/Chip-8-Emulator",
    technicalDetails: "The CHIP-8 Emulator is a virtual CPU simulation built in C++ using the SDL library for graphics rendering. The emulator faithfully replicates the functionality of the original CHIP-8 system, allowing users to run classic CHIP-8 games and applications. It features a fully functional graphics subsystem that renders the 64x32 pixel display, as well as support for input handling. The above image showcase the emulator running a classic CHIP-8 game, Pong."
  },
  {
    title: "Cotes",
    tech: "React, TypeScript, Next.js, NextAuth, MongoDB",
    desc: "Modular note-taking app with markdown support and customizable code blocks.",
    videoUrl: "/videos/cotes-demo.mp4",
    gitUrl: "https://github.com/mithunb9/cotes",
    technicalDetails: "Cotes is a modular note-taking application built with React and Next.js, designed to provide a flexible and efficient way to organize and manage notes. The app supports markdown formatting and customizable code blocks, making it an ideal tool for developers and students who need to include code snippets in their notes. It supports user authentication through NextAuth, allowing users to securely log in and access their notes from any device. The backend is powered by MongoDB for storing user data and notes. In-note coding is implemented with CodeMirror, for now only supporting JavaScript execution. Code execution is remote through Piston API. Axios is used for handling API requests."
  },
  {
    title: "Drowsy Driver System",
    tech: "Computer Vision, Python, Raspberry Pi",
    desc: "Real-time CV application built to monitor driver drowsiness by detecting eye closure.",
    technicalDetails: "The Drowsy Driver System is a real-time computer vision application developed using Python and deployed on a Raspberry Pi. The system utilizes a camera to monitor the driver's face, specifically tracking the eye aspect ratio (EAR) to detect signs of drowsiness. By analyzing the EAR, the system can determine if the driver's eyes are closing for extended periods, which is a common indicator of fatigue. If drowsiness is detected, the system can trigger alerts to warn the driver, helping to prevent accidents caused by falling asleep at the wheel. The raspberry pi is connected to a camera, an LED light, and a speaker, which are used to monitor the driver and provide visual and auditory alerts when drowsiness is detected."
  },
  {
    title: "Portfolio Website",
    tech: "React, Node.js,Tailwind CSS",
    desc: "Responsive portfolio website showcasing projects and skills.",
    fallbackText: "This website!",
    gitUrl: "https://github.com/FunAdityaSun/Portfolio-Website",
    technicalDetails: "The Portfolio Websiteis a responsive website built using React and styled with Tailwind CSS. It serves as a platform to showcase my projects, skills, and experience in a user friendly manner. The portfolio has sections dedicated to project descriptions, technologies used, and multimedia demonstrations."
  },
  {
    title: "Spellterra",
    tech: "Unity, C#, Unity VCS",
    desc: "3D horror escape game featuring procedurally generated dungeons.",
    videoUrl: "/videos/spellterra-demo.mp4",
    technicalDetails: "Spellterra is a 3D horror escape game developed in Unity, where players find themselves trapped in a mysterious and eerie world. The game features procedurally generated dungeons, ensuring that each playthrough offers a unique experience. Players must navigate through dark corridors, fight scary creatures and escape the maze. The game also features a boss fight with custom animations and intelligent enemy behavior."
  }
];

export default function Projects({ onProjectSel }) {
  return (
    <div className="mx-auto">

      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <p className="text-xl text-slate-400 mb-8">Click on the projects to view demo and details. Scroll to view more projects.</p>

      <div className="grid grid-cols-1 gap-6">
        {portfolioProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}

            onClick={() => onProjectSel(project)}

            className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-colors"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <span className="text-emerald-400 text-sm font-mono block mb-4">{project.tech}</span>
            <p className="text-slate-300 leading-relaxed">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}