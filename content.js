// EDIT THIS FILE to update the website. Keep quotes and commas intact.
// photo: use a path such as assets/images/portrait.jpg after uploading your image.
window.PORTFOLIO = {
  "name": "Mohd Abdullah Abrar",
  "initials": "MA",
  "headline": "Engineering ideas.\nBuilding understanding.",
  "intro": "I’m an Electrical & Electronic Engineering graduate from IUT. My work spans photonics, circuit design, embedded systems, and applied machine learning—with an interest in teaching and practical engineering.",
  "email": "abdullah.abrar16077@gmail.com",
  "github": "https://github.com/abdullahabrar21",
  "linkedin": "https://www.linkedin.com/in/abdullahabrar/",
  "photo": "",
  "about": "I graduated from the Islamic University of Technology with a B.Sc. in Electrical and Electronic Engineering, majoring in Electronics. Through team projects, research, and industrial exposure, I have worked across simulation, digital hardware, data analysis, and technical problem-solving. I am exploring lecturer positions, engineering and corporate roles, and further research opportunities.",
  "education": "B.Sc. in Electrical & Electronic Engineering",
  "university": "Islamic University of Technology",
  "years": "2022–2026",
  "cgpa": "3.85 / 4.00",
  "rank": "22 / 164",
  "projects": [
    {
      "id": "phase",
      "category": "Electronics",
      "title": "Voltage-controlled analog phase shifter",
      "tools": "Cadence Virtuoso · GPDK090 · Analog IC design",
      "summary": "An OTA-C all-pass circuit exploring voltage-controlled phase adjustment across a 1–100 kHz operating band.",
      "role": "Team project",
      "details": "The team used a tunable transconductance stage and an all-pass architecture to study phase response under a 0–1 V control input. The presentation documents circuit schematics, bias calibration, AC response, and transient verification.",
      "scope": "Simulation-based circuit design; no fabricated IC is claimed.",
      "caption": "OTA-C phase-shifter schematic from the team presentation."
    },
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
      "id": "cmos",
      "category": "Electronics",
      "title": "Low-power CMOS biosensor alert circuit",
      "tools": "PSpice · Microwind · Transistor-level CMOS",
      "summary": "A six-transistor OR-gate decision circuit for combining two binary abnormality flags in a proposed wearable application.",
      "role": "My contribution: PSpice simulation & Microwind layout",
      "details": "I performed circuit simulation in PSpice and developed the layout in Microwind. The team used a NOR-plus-inverter architecture to combine assumed fever and dehydration flags. The wearable substrate and sensing front ends are application concepts rather than a demonstrated complete sensor.",
      "scope": "Simulated rule-based logic circuit and layout; not a trained AI model or medical device.",
      "caption": "Physical layout from the CMOS biosensor report."
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
    }
  ],
  "experience": [
    [
      "Engineering training",
      "BPDB · Ghorashal Power Plant",
      "Exposure to power generation, load distribution, equipment operation, and system balancing."
    ],
    [
      "Engineering training",
      "Bangladesh Atomic Energy Commission",
      "Exposure to instrumentation, engineering procedures, and safety-critical operational environments."
    ],
    [
      "Industrial visits",
      "Walton Hi-Tech Industries & Robi Axiata",
      "Observed manufacturing processes, quality inspection, material flow, and telecommunications infrastructure."
    ],
    [
      "Logistics & coordination",
      "IUT Career & Business Society",
      "Co-led logistics for Career Fest and Biznation, coordinating vendors, stall allocation, venue operations, participant flow, and cross-team execution."
    ]
  ],
  "skills": [
    [
      "Simulation & design",
      "COMSOL Multiphysics, Ansys Lumerical, Cadence Virtuoso, Proteus, PSpice, Microwind"
    ],
    [
      "Programming & analysis",
      "Python, C, Assembly, Verilog, MATLAB, Excel, basic Power BI"
    ],
    [
      "Engineering foundations",
      "Electronics, digital logic, embedded systems, photonics, control systems, signal processing"
    ],
    [
      "Working with people",
      "Teamwork, technical communication, event logistics, coordination, project execution"
    ]
  ],
  "certificates": [
    "Supply Chain Management Specialization — Rutgers University / Coursera",
    "Basics of Microsoft Power BI — Cambridge International Qualifications / UniAthena"
  ]
};
