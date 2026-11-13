// Edit profile, projects, education, coursework, and skills here. Preserve quotes and commas.
window.PORTFOLIO = {
  "name": "Mohd Abdullah Abrar",
  "initials": "MA",
  "headline": "Engineering ideas.\nBuilding understanding.",
  "intro": "I’m an Electrical & Electronic Engineering graduate from IUT. My experience spans electronics, digital and embedded systems, signal processing, communications, power systems, photonics, and computational applications.",
  "email": "abdullahabrar21@iut-dhaka.edu",
  "github": "https://github.com/abdullahabrar21",
  "linkedin": "https://www.linkedin.com/in/mohd-abdullah-abrar/",
  "photo": "",
  "about": "I graduated from the Islamic University of Technology with a B.Sc. in Electrical and Electronic Engineering and a CGPA of 3.85/4.00, ranking 22 out of 164. My foundation comes from coursework, team projects, research, and industrial training. I am interested in applying engineering knowledge to practical challenges in technology, research, and teaching.",
  "education": "B.Sc. in Electrical & Electronic Engineering",
  "university": "Islamic University of Technology",
  "years": "2022–2026",
  "cgpa": "3.85 / 4.00",
  "rank": "22 / 164",
  "projects": [
    {
      "id": "sap",
      "category": "Digital systems",
      "title": "A 6-bit computer, built from logic",
      "tools": "Proteus · Digital logic · SAP-1 architecture",
      "summary": "A SAP-1-based computer combining registers, memory, a control sequencer, and an arithmetic logic unit.",
      "role": "My contribution: ALU design",
      "details": "The team developed a common 6-bit bus architecture and integrated the functional blocks needed for arithmetic operations. My documented responsibility was designing the arithmetic logic unit. The reports include schematics, PCB layouts, and integration debugging.",
      "scope": "Design and simulation documented in the submitted phase reports.",
      "caption": "ALU circuitry from the SAPiens phase report."
    },
    {
      "id": "tennis",
      "category": "Machine learning",
      "title": "Tennis ball tracking & speed analysis",
      "tools": "YOLOv8 · ResNet50 · Computer vision",
      "summary": "A team project analyzing tennis footage to track players and the ball and estimate motion using court geometry.",
      "role": "Team project",
      "details": "The CV describes a computer-vision pipeline using YOLOv8 and ResNet50, court-coordinate mapping, and pixel-to-meter conversion to analyze player velocity, acceleration, ball trajectories, racket impacts, and bounces.",
      "scope": "Project summary based on the updated CV. The linked repository is a team reference supplied in that CV.",
      "caption": "",
      "image": false,
      "repository": "https://github.com/taufiktrf/Tennis-Tracker"
    },
    {
      "id": "ml",
      "category": "Machine learning",
      "title": "Explainable diabetic foot ulcer detection",
      "tools": "Python · MobileNetV2 · TensorFlow Lite · Grad-CAM",
      "summary": "A team-developed image classification workflow with visual explanations, confidence estimation, and mobile deployment work.",
      "role": "My contribution: conceptualization, data collection & workflow",
      "details": "I contributed to defining the problem, collecting data, and determining the workflow. The team report documents MobileNetV2 and EfficientNet-B0 comparisons, Grad-CAM explanations, Monte Carlo dropout, and a TensorFlow Lite deployment path.",
      "scope": "Academic classification prototype; not a clinically validated diagnostic system.",
      "caption": "MobileNetV2 confusion matrix from the team report."
    },
    {
      "id": "fan",
      "category": "Embedded systems",
      "title": "Temperature-controlled DC fan",
      "tools": "AT89C51 · LM35 · ADC0804 · Proteus",
      "summary": "An 8051-based fan controller with temperature thresholds, PWM speed control, and manual and protection modes.",
      "role": "Team project",
      "details": "The system combines temperature sensing, analog-to-digital conversion, motor driving, and a keypad/LCD interface. The report documents binary and gradual speed modes, low-temperature sleep, manual control, and an overheat response.",
      "scope": "The portfolio presents the documented Proteus simulation. Physical assembly and testing are not asserted.",
      "caption": "Fan-control circuit running in Proteus."
    },
    {
      "id": "game",
      "category": "Embedded systems",
      "title": "Tic-Tac-Toe on an 8051",
      "tools": "8051 Assembly · Proteus · Keypad & LED interfacing",
      "summary": "An embedded game combining a keypad, LED board, and LCD with two-player and rule-based opponent modes.",
      "role": "Team project",
      "details": "The team implemented move validation, turn handling, win/draw detection, and a lightweight rule-based opponent within the constraints of the AT89C51. Shift-register interfacing supports the LED game board.",
      "scope": "Proteus-simulated embedded system.",
      "caption": "Player-vs-player board state from the project report.",
      "demo": "https://youtu.be/tZn1pr14aLA"
    },
    {
      "id": "phase",
      "category": "Electronics",
      "title": "Voltage-controlled analog phase shifter",
      "tools": "Cadence Virtuoso · GPDK090 · Analog IC design",
      "summary": "OTA-C circuit design and transient analysis, with a simulated phase shift of approximately 89.71° at 100 kHz.",
      "role": "Team project",
      "details": "The team used a tunable transconductance stage and an all-pass architecture to study phase response under a 0–1 V control input. The presentation documents circuit schematics, bias calibration, AC response, and transient verification.",
      "scope": "Simulation-based circuit design; no fabricated IC is claimed.",
      "caption": "OTA-C phase-shifter schematic from the team presentation."
    },
    {
      "id": "cmos",
      "category": "Electronics",
      "title": "Low-power CMOS biosensor alert circuit",
      "tools": "PSpice · Microwind · Transistor-level CMOS",
      "summary": "A six-transistor OR-gate decision circuit for combining two binary abnormality flags in a proposed wearable application.",
      "role": "My contribution: PSpice simulation & Microwind layout",
      "details": "I performed circuit simulation in PSpice and developed the layout in Microwind. The team used a NOR-plus-inverter architecture to combine assumed fever and dehydration flags. The wearable substrate and sensing front ends are application concepts rather than a demonstrated complete sensor. The updated CV reports an estimated dynamic switching power of 162 nW under specified operating conditions.",
      "scope": "Simulated rule-based logic circuit and layout; not a trained AI model or medical device.",
      "caption": "Physical layout from the CMOS biosensor report."
    }
  ],
  "experience": [
    [
      "Engineering trainee · October 2025",
      "BPDB · Ghorashal Power Plant",
      "Observed steam-turbine and combined-cycle generation, and gained exposure to the SPPA-T3000 distributed control system, grid synchronization, and power dispatch."
    ],
    [
      "Trainee · October 2025",
      "Robi Axiata PLC",
      "Gained insight into telecommunications coordination and network architecture, with exposure to maintenance, monitoring, and optimization practices supporting service continuity."
    ],
    [
      "Engineering trainee · September 2025",
      "Bangladesh Atomic Energy Commission",
      "Studied reactor fundamentals and safety protocols; observed cleanroom practices, VLSI and PV solar-cell laboratories, and PCB fabrication demonstrations."
    ],
    [
      "Industrial visit · September 2025",
      "Walton Hi-Tech Industries PLC",
      "Observed manufacturing, assembly, final testing, and quality-control checkpoints, with exposure to supply-chain logistics, inventory management, and workforce coordination."
    ]
  ],
  "skills": [
    [
      "Photonics simulation",
      "COMSOL Multiphysics, Ansys Lumerical MODE Solver and FDTD"
    ],
    [
      "Programming & modeling",
      "Python, C, Assembly, MATLAB, mathematical modeling, data analysis"
    ],
    [
      "Digital & IC design",
      "Verilog HDL, digital logic design, transistor-level CMOS design, Microwind layout"
    ],
    [
      "Circuit simulation",
      "Proteus, PSpice A/D, Cadence Virtuoso"
    ]
  ],
  "coursework": [
    [
      "Electronics",
      "Electronics I & II, Digital Electronics, Semiconductor Physics, Power Electronics, VLSI I & II, Analog Integrated Electronics, Microcontroller-Based System Design"
    ],
    [
      "Power systems",
      "Power Systems I, II & III; Power Generation"
    ],
    [
      "Communication & signal processing",
      "Communication Engineering I & II, Wireless Communication, Signals & Systems, Digital Signal Processing, Random Signals & Processes"
    ],
    [
      "Computing, photonics & materials",
      "Artificial Intelligence & Machine Learning, Computational Methods, Photonics & Plasmonics, Electromagnetic Fields & Waves, Medical Electronics, Engineering Materials"
    ]
  ],
  "educationHistory": [
    [
      "2022–2026",
      "Islamic University of Technology",
      "B.Sc. in Electrical & Electronic Engineering · CGPA 3.85/4.00 · Class rank 22/164"
    ],
    [
      "July 2019–December 2022",
      "Notre Dame College, Dhaka",
      "Higher Secondary Certificate (Science) · GPA 5.00/5.00"
    ],
    [
      "2019",
      "Rajuk Uttara Model College, Dhaka",
      "Secondary School Certificate (Science) · GPA 5.00/5.00"
    ]
  ],
  "gre": "GRE General Test: 314/340 · Quantitative 161/170 · Verbal 153/170 · Analytical Writing 3.5/6 · May 2026"
};
