// Edit project overview, method, outcome, and contribution separately below. Preserve quotes and commas.
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
      "details": "This team project built a simplified 6-bit computer around the SAP-1 architecture to demonstrate how individual digital circuits cooperate to execute instructions. It brings together program storage, data transfer, arithmetic, sequencing, and binary output in one system.",
      "scope": "Design and simulation documented in the submitted phase reports.",
      "caption": "ALU circuitry from the SAPiens phase report.",
      "method": "A shared 6-bit bus connects an 8 × 6-bit RAM, program counter, memory address register, instruction register, accumulator, B register, ALU, control sequencer, and output unit. The ALU performs addition and subtraction; automatic and manual clock modes support execution and step-by-step inspection.",
      "outcome": "The phase reports document circuit schematics, PCB layouts, and integration debugging. The design demonstrates the relationship between the datapath and control signals in a small computer.",
      "contribution": "I designed the arithmetic logic unit for 6-bit addition and subtraction, including its arithmetic circuitry and controlled connection to the shared bus."
    },
    {
      "id": "tennis",
      "category": "Machine learning",
      "title": "Tennis ball tracking & speed analysis",
      "tools": "YOLOv8 · ResNet50 · Computer vision",
      "summary": "A team project analyzing tennis footage to track players and the ball and estimate motion using court geometry.",
      "details": "This team project analyzes tennis video to track players and the ball and describe motion in court coordinates. It connects computer-vision detections with geometric mapping to extract information about play.",
      "scope": "Project summary based on the updated CV. The linked repository is a team reference supplied in that CV.",
      "caption": "",
      "image": false,
      "repository": "https://github.com/taufiktrf/Tennis-Tracker",
      "method": "The pipeline uses YOLOv8 and ResNet50, court-coordinate mapping, and pixel-to-meter conversion. The project covers player velocity and acceleration, ball trajectories, racket impacts, and bounces.",
      "outcome": "The project is documented in my updated CV, which links the team repository below. No quantitative tracking-accuracy or speed-error results are asserted here.",
      "contribution": "Completed as a team project; my specific responsibilities have not yet been detailed here."
    },
    {
      "id": "ml",
      "category": "Machine learning",
      "title": "Explainable diabetic foot ulcer detection",
      "tools": "Python · MobileNetV2 · TensorFlow Lite · Grad-CAM",
      "summary": "A team-developed image classification workflow with visual explanations, confidence estimation, and mobile deployment work.",
      "details": "The team developed an image-classification prototype to distinguish diabetic foot ulcer images from non-ulcer images. The project combines classification with visual explanations and confidence estimation, making the model’s predictions easier to inspect.",
      "scope": "Academic classification prototype; not a clinically validated diagnostic system.",
      "caption": "MobileNetV2 confusion matrix from the team report.",
      "method": "The workflow covers data collection and preparation, transfer learning, and comparison of MobileNetV2 and EfficientNet-B0. Grad-CAM highlights image regions influencing a prediction, Monte Carlo dropout estimates uncertainty, and TensorFlow Lite supports the mobile deployment workflow.",
      "outcome": "The report compares the models using evaluation plots and confusion matrices and identifies MobileNetV2 as the preferred model in the study. The result is an academic prototype, not a clinically validated diagnostic system.",
      "contribution": "I contributed to project conceptualization, data collection, and determining the end-to-end workflow, from the problem definition through the planned modeling and evaluation stages."
    },
    {
      "id": "fan",
      "category": "Embedded systems",
      "title": "Temperature-controlled DC fan",
      "tools": "AT89C51 · LM35 · ADC0804 · Proteus",
      "summary": "An 8051-based fan controller with temperature thresholds, PWM speed control, and manual and protection modes.",
      "details": "This team project developed a temperature-controlled DC fan system around an AT89C51 microcontroller. It combines automatic cooling, a user interface, and protective operating modes in an embedded control application.",
      "scope": "The portfolio presents the documented Proteus simulation. Physical assembly and testing are not asserted.",
      "caption": "Fan-control circuit running in Proteus.",
      "method": "An LM35 senses temperature, an ADC0804 digitizes the signal, and the microcontroller adjusts the motor through a driver using PWM. A keypad and LCD provide user interaction. Binary and gradual speed modes are complemented by low-temperature sleep, manual control, and an overheat response.",
      "outcome": "The report documents the integrated Proteus simulation, control routines, and debugging of sensing and motor-control connections. The image shown is the simulated circuit; it does not represent a measured hardware performance result.",
      "contribution": "I contributed to building the fan hardware."
    },
    {
      "id": "game",
      "category": "Embedded systems",
      "title": "Tic-Tac-Toe on an 8051",
      "tools": "8051 Assembly · Proteus · Keypad & LED interfacing",
      "summary": "An embedded game combining a keypad, LED board, and LCD with two-player and rule-based opponent modes.",
      "details": "The team implemented Tic-Tac-Toe on an AT89C51 microcontroller as an exercise in embedded programming and peripheral interfacing. The system supports both two-player gameplay and a rule-based computer opponent.",
      "scope": "Proteus-simulated embedded system.",
      "caption": "Player-vs-player board state from the project report.",
      "demo": "https://youtu.be/tZn1pr14aLA",
      "method": "Players enter moves using a keypad, while an LED board displays the game state and an LCD provides interaction feedback. Assembly routines handle turn changes, invalid moves, win and draw detection, and opponent decisions. Shift registers support the LED display interface.",
      "outcome": "The report documents the Proteus implementation and gameplay demonstration. The opponent uses programmed rules rather than a trained machine-learning model.",
      "contribution": "The project report credits me with keypad scanning, core game logic—including turn management, invalid-move handling, and win/draw detection—testing and debugging, and the video demonstration."
    },
    {
      "id": "phase",
      "category": "Electronics",
      "title": "Voltage-controlled analog phase shifter",
      "tools": "Cadence Virtuoso · GPDK090 · Analog IC design",
      "summary": "OTA-C circuit design and transient analysis, with a simulated phase shift of approximately 89.71° at 100 kHz.",
      "details": "The team designed a voltage-controlled analog phase shifter to vary a signal’s phase through an electrical control input. The project investigates an OTA-C all-pass architecture using transistor-level analog circuit simulation.",
      "scope": "Simulation-based circuit design; no fabricated IC is claimed.",
      "caption": "OTA-C phase-shifter schematic from the team presentation.",
      "method": "A tunable transconductance stage changes the circuit response under a 0–1 V control input. The design workflow in Cadence Virtuoso with GPDK090 includes circuit schematics, bias calibration, AC analysis, and transient verification of the phase relationship between input and output.",
      "outcome": "Transient analysis reports an approximately 89.71° phase shift at 100 kHz. These are simulation results; fabrication, process-corner analysis, mismatch testing, and post-layout verification remain further work.",
      "contribution": "Completed as a team project; my specific responsibilities have not yet been detailed here."
    },
    {
      "id": "cmos",
      "category": "Electronics",
      "title": "Low-power CMOS biosensor alert circuit",
      "tools": "PSpice · Microwind · Transistor-level CMOS",
      "summary": "A six-transistor OR-gate decision circuit for combining two binary abnormality flags in a proposed wearable application.",
      "details": "The team designed a low-power CMOS decision circuit for a proposed wearable biosensing application. Its purpose is to combine two binary abnormality indicators—fever and dehydration—into a single alert signal.",
      "scope": "Simulated rule-based logic circuit and layout; not a trained AI model or medical device.",
      "caption": "Physical layout from the CMOS biosensor report.",
      "method": "A six-transistor NOR-plus-inverter circuit implements an OR function: either abnormality flag activates the output. The work includes transistor-level circuit simulation and physical layout, linking logic behavior to a CMOS implementation.",
      "outcome": "The report estimates dynamic switching power at 162 nW using an activity factor of 0.5, a 10 fF load, a 1.8 V supply, and a 10 MHz switching frequency. This is a calculated operating-point estimate. The sensing front ends and wearable substrate remain application concepts; the demonstrated work concerns the logic circuit and layout.",
      "contribution": "I performed circuit simulation in PSpice and developed the physical layout in Microwind."
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
