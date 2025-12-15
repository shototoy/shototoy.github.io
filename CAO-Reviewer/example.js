const strategyData = {
    // Distributed Systems
    "dist-sys": {
        "Distributed System": {
            type: "Definition",
            text: "Imagine a RAID array but for compute nodes. Independent physical resources acting as one logical unit."
        },
        "Transparency": {
            type: "Concept",
            text: "Abstraction. The user shouldn't know or care that it's complicated underneath."
        },
        "Reliability": {
            type: "Analogy",
            text: "Redundancy. Like having a spare tire. The car keeps moving even if one tire fails."
        },
        "Availability": {
            type: "Metric",
            text: "Uptime. The shop is open 24/7 because there are shift workers (servers) taking turns."
        },
        "Resource Sharing": {
            type: "Concept",
            text: "Pooling. Everyone puts their resources in the middle of the table."
        },
        "Concurrency": {
            type: "Distinction",
            text: "Parallelism. Things happening literally at the same time, physically separate."
        },
        "Horizontal Scalability": {
            type: "Rule",
            text: "Scale Out. Add more cheap machines. Like hiring more junior developers."
        },
        "Vertical Scalability": {
            type: "Rule",
            text: "Scale Up. Buy a bigger, faster machine. Like cloning your senior dev."
        },
        "Client-Server Architecture": {
            type: "Pattern",
            text: "Centralized. One Boss (Server), many workers (Clients)."
        },
        "Peer-to-Peer (P2P)": {
            type: "Pattern",
            text: "Decentralized. Everyone is equal. No single point of failure."
        },
        "Three-Tier Architecture": {
            type: "Architecture",
            text: "Separation of Concerns. UI, Logic, and Data don't touch each other's private parts."
        },
        "Synchronous": {
            type: "Mechanism",
            text: "Blocking. You are on hold on the phone. You can't do anything else."
        },
        "Asynchronous": {
            type: "Mechanism",
            text: "Non-Blocking. You sent an email. You can go do other work while waiting for a reply."
        },
        "Middleware Examples": {
            type: "Toolbox",
            text: "Standard tools everyone uses. Kafka = Pipe for data. gRPC = High speed phone line."
        },
        "Communication Context": {
            type: "Concept",
            text: "Talking requires rules. How do we send messages without chaos?"
        },
        "Google": {
            type: "Strategy",
            text: "MapReduce / GFS. Break big data into chunks (Sharding), process in parallel (Map), aggregate results (Reduce)."
        },
        "Netflix": {
            type: "Engineering",
            text: "Resilience. Systems designed to fail safely (degrade quality) rather than stop working."
        },
        "Encryption": {
            type: "Security",
            text: "Scrambling data so only the intended receiver can read it. Like a sealed envelope."
        },
        "Authentication & Authorization": {
            type: "Security",
            text: "AuthN: 'Who are you?' (ID Card). AuthZ: 'What can you do?' (Access Key)."
        },
        "Message Queues": {
            type: "Pattern",
            text: "Decoupling. Producer puts work in a box. Consumer takes it out when ready. They don't need to meet."
        },
        "API Gateway": {
            type: "Pattern",
            text: "The Receptionist. One point of entry for all visitors (requests)."
        },
        "Containers & Orchestration": {
            type: "DevOps",
            text: "Shipping Containers. Standard box for code (Docker) moved by a crane (Kubernetes)."
        }
    },
    // Advanced Architecture
    "adv-arch": {
        "Homogeneous Computing": {
            type: "Definition",
            text: "Same-Same. All cores are identical. Good for general work, bad for specific heavy lifting."
        },
        "Why Advanced Architectures?": {
            type: "Context",
            text: "General tools (Hammer) can't fix everything. Sometimes you need a laser cutter (AI/Big Data)."
        },
        "Heterogeneous Computing": {
            type: "Goal",
            text: "The Avengers. Bring together different heroes (CPU, GPU, FPGA) to save the world."
        },
        "CPU": {
            type: "Role",
            text: "The Manager. Handles logic, OS, and decision making. Sequential."
        },
        "GPU": {
            type: "Role",
            text: "The Factory Workers. Thousands of tiny hands working together. Parallel."
        },
        "FPGA": {
            type: "Role",
            text: "The Shapeshifter. Hardware that can rewire itself to be whatever tool you need."
        },
        "Reconfigurable Computing": {
            type: "Definition",
            text: "Hardware as Software. Logic gates (LUTs) are reprogrammable."
        },
        "Core Components of FPGA": {
            type: "Anatomy",
            text: "CLBs = Logic. Interconnects = Wires. I/O = Ports."
        },
        "Objective": {
            type: "Goal",
            text: "Break the Memory Wall. Stop wasting time and energy driving data back and forth."
        },
        "Processing Near Memory (PnM)": {
            type: "Strategy",
            text: "Move the kitchen (Compute) next to the fridge (Memory)."
        },
        "Processing Using Memory (PuM)": {
            type: "Strategy",
            text: "Cook inside the fridge. Use memory cells to do math."
        },
        "3D ICs": {
            type: "Visual",
            text: "Skyscrapers. Build UP to save space and reduce travel time."
        },
        "Key Enabling Technologies": {
            type: "Tech",
            text: "TSVs = Elevators in the skyscraper. Wafer Bonding = Glue."
        },
        "Challenges": {
            type: "Problem",
            text: "Heat. Stacking electronics is like stacking blankets. It gets hot inside."
        },
        "Optical Computing": {
            type: "Physics",
            text: "Light Speed. Photons generate less heat and move faster than electrons."
        },
        "Core Components": {
            type: "Part",
            text: "Lasers = Source. Waveguides = Wires. Modulators = Switches."
        },
        "Key Areas of Development": {
            type: "Trend",
            text: "AI needs speed. We are building specialized racetracks for it."
        },
        "Security-First": {
            type: "Concept",
            text: "Hardware reliability. TrustZone and Enclaves."
        },
        "Heterogeneous Computing": {
            type: "Summary",
            text: "Best for mixed workloads. Hard to code."
        },
        "Reconfigurable (FPGA)": {
            type: "Summary",
            text: "Best for adaptability. Hard to design."
        },
        "Memory-Centric": {
            type: "Summary",
            text: "Best for bandwidth. Requires new software."
        },
        "Evolution Stages": {
            type: "Timeline",
            text: "Multi-core -> Heterogeneous -> Specialized -> Domain Specific."
        },
        "Future Direction": {
            type: "Forecast",
            text: "Legos (Chiplets). Assemble chips from pre-made blocks."
        }
    },
    "emerging": {
        "5nm Node": {
            type: "Trend",
            text: "Smaller = Better. Reduced gate length means faster switching and less power required."
        },
        "3nm Node": {
            type: "Trend",
            text: "GAAFET. The Gate wraps 'All Around' the channel like a fist holding a straw. Maximum control."
        },
        "Workflow Stages": {
            type: "Process",
            text: "The Recipe. 1. Plan (Spec) -> 2. Cook (Synthesis) -> 3. Taste (Sim/Verif) -> 4. Plate (Layout)."
        },
        "Common EDA Tools": {
            type: "Toolbox",
            text: "Architect's Toolkit. Like AutoCAD but for microchips. Synopsys & Cadence are the big players."
        },
        "AI-Assisted Architecture Optimization": {
            type: "Evolution",
            text: "Machine designing Machine. AI finds the best layout faster than humans can."
        },
        "Challenges of AI Optimization": {
            type: "Problem",
            text: "Black Box. If AI designs it, we might not understand WHY it works (Intepretability)."
        },
        "Importance of AI-Assisted": {
            type: "Benefit",
            text: "Efficiency. Exploring billions of options in seconds to save money and power."
        },
        "Ethical and Security Issues in Hardware Design": {
            type: "Warning",
            text: "The Dark Side. Hidden backdoors in chips could leak secrets or disable weapons."
        },
        "RISC-V": {
            type: "Licensing",
            text: "Open Source. No royalty fees. The Linux of hardware."
        }
    },
    "specialized": {
        "Datacenter Architecture": {
            type: "Metric",
            text: "Maximize Throughput. How many requests can we handle per second?"
        },
        "PUE (Power Usage Effectiveness)": {
            type: "Formula",
            text: "PUE. Lower is better. 1.0 means 100% of power goes to computing, 0% to cooling."
        },
        "ASIC": {
            type: "Evolution",
            text: "General -> Specific. ASIC is the finish line for efficiency but lacks flexibility."
        },
        "Microcontroller (MCU)": {
            type: "Constraint",
            text: "SWaP (Size, Weight, Power). All-in-one chip."
        }
    }
};
