const strategyData = {
    // Distributed Systems
    "dist-sys": {
        "Distributed System": {
            type: "Definition",
            text: "Imagine a RAID array but for compute nodes. Independent physical resources acting as one logical unit."
        },
        "Transparency": {
            type: "Concept",
            text: "Magic Trick. The user sees one rabbit, but there are 50 assistants behind the curtain."
        },
        "Reliability": {
            type: "Analogy",
            text: "Spare Tire. The car keeps moving even if one part fails."
        },
        "Availability": {
            type: "Metric",
            text: "The Shop is Open. 24/7 service because employees work mainly in shifts."
        },
        "Resource Sharing": {
            type: "Concept",
            text: "Potluck Dinner. Everyone brings a dish (resources) to the table."
        },
        "Concurrency": {
            type: "Distinction",
            text: "Multitasking. Eating and breathing at the same time."
        },
        "Scalability": {
            type: "Goal",
            text: "Elastic Waistband. Expands comfortably as you grow."
        },
        "Horizontal Scalability": {
            type: "Rule",
            text: "Clone Army. Add more identical troopers."
        },
        "Vertical Scalability": {
            type: "Rule",
            text: "Iron Man Suit. Upgrade the single hero with better tech."
        },
        "Fault Tolerance": {
            type: "Safety",
            text: "Cushion. If you fall, you land on a mattress, not concrete."
        },
        "Architectures": {
            type: "Blueprint",
            text: "Floor Plans. Different ways to organize the house."
        },
        "Client-Server": {
            type: "Pattern",
            text: "Restaurant. Customer (Client) orders, Chef (Server) cooks."
        },
        "Peer-to-Peer (P2P)": {
            type: "Pattern",
            text: "Study Group. Everyone teaches each other. No teacher."
        },
        "Three-Tier": {
            type: "Architecture",
            text: "Layer Cake. Icing (UI), Sponge (Logic), Cream (Data)."
        },
        "Communication Context": {
            type: "Concept",
            text: "The Language. How parts say 'Hello' and 'Goodbye'."
        },
        "Synchronous": {
            type: "Mechanism",
            text: "Phone Call. You have to wait for them to answer."
        },
        "Asynchronous": {
            type: "Mechanism",
            text: "Text Message. Send it and go do something else."
        },
        "Middleware": {
            type: "Toolbox",
            text: "Translator. Helps French and English speakers talk."
        },
        "Middleware Examples": {
            type: "Tools",
            text: "Kafka = Postal Service. gRPC = Hotline."
        },
        "Google": {
            type: "Strategy",
            text: "MapReduce. Divide the library books among 100 students to count words instantly."
        },
        "Netflix": {
            type: "Engineering",
            text: "Chaos Monkey. Break things on purpose to learn how to fix them."
        },
        "Security": {
            type: "Shield",
            text: "The Bouncer. Checks ID (AuthN) and List (AuthZ)."
        },
        "Components": {
            type: "Lego Set",
            text: "Standard Bricks. Use these to build any castle."
        },
        "Message Queues": {
            type: "Pattern",
            text: "Voicemail. Leave a message, they'll listen when free."
        },
        "API Gateway": {
            type: "Pattern",
            text: "Reception Desk. One person directs all visitors."
        },
        "Containers": {
            type: "DevOps",
            text: "Lunchbox. Your food (code) is packed and ready to eat anywhere."
        }
    },
    // Advanced Architecture
    "adv-arch": {
        "Homogeneous Computing": {
            type: "Tradition",
            text: "Clones. All workers are exactly the same."
        },
        "Limitations": {
            type: "Problem",
            text: "Jack of All Trades. Master of none."
        },
        "Why Advanced?": {
            type: "Driver",
            text: "Need for Speed. Normal cars can't race in F1."
        },
        "Heterogeneous Computing": {
            type: "Team",
            text: "The Avengers. Hulk (GPU), Iron Man (CPU), Vision (FPGA)."
        },
        "Components": {
            type: "Roster",
            text: "The Team Members."
        },
        "Trade-offs": {
            type: "Balance",
            text: "Power vs. Complexity. A Ferrari is hard to fix."
        },
        "Reconfigurable Computing": {
            type: "Tech",
            text: "Transformer. A robot that turns into a car."
        },
        "Core Components": {
            type: "Parts",
            text: "LUTs = Logic choices. Interconnects = Wires."
        },
        "Memory-Centric": {
            type: "Strategy",
            text: "Move the Gym to the House. Stop commuting."
        },
        "Processing Near Memory": {
            type: "Tactic",
            text: "Next Door. Compute lives on the same street."
        },
        "Processing Using Memory": {
            type: "Tactic",
            text: "In-House. Compute lives in the spare bedroom."
        },
        "3D ICs": {
            type: "Innovation",
            text: "Skyscrapers. Build up, not out."
        },
        "Enabling Tech": {
            type: "Glue",
            text: "TSV = Elevator shaft."
        },
        "Challenges": {
            type: "Hurdle",
            text: "Heat. High floors get hot."
        },
        "Optical Computing": {
            type: "Physics",
            text: "Fiber Optics. Data moves at light speed."
        },
        "Advantages": {
            type: "Benefit",
            text: "Cool & Fast. No resistance = No heat."
        },
        "Key Areas of Development": {
            type: "Focus",
            text: "AI & Green Tech."
        },
        "Heterogeneous": {
            type: "Review",
            text: "Specialized Team."
        },
        "FPGA": {
            type: "Review",
            text: "Chameleon."
        },
        "Optical": {
            type: "Review",
            text: "Photonics."
        },
        "Evolution Path": {
            type: "Timeline",
            text: "From General CPU to Custom ASIC."
        },
        "Stages": {
            type: "Steps",
            text: "1. Same -> 2. Mixed -> 3. Dedicated."
        },
        "Future": {
            type: "Forecast",
            text: "Chiplets. Buying parts to build a PC, but for chips."
        }
    },
    // Emerging Trends
    "emerging": {
        "Semiconductors": {
            type: "Material",
            text: "Silicon Valley. The foundation of modern life."
        },
        "5nm Node": {
            type: "Tech",
            text: "Tiny Switch. 5 billionths of a meter."
        },
        "3nm Node": {
            type: "Tech",
            text: "Even Tinier. Better control (GAA) like a stronger faucet valve."
        },
        "Workflow Stages": {
            type: "Process",
            text: "Blueprint to Building. Plan, Design, Test, Build."
        },
        "Common EDA Tools": {
            type: "Software",
            text: "CAD for Chips. Tools to draw the microscopic city."
        },
        "AI-Assisted Architecture": {
            type: "Innovation",
            text: "AI designing AI. Computers building better computers."
        },
        "Importance": {
            type: "Benefit",
            text: "Speed. Humans are too slow to place billions of transistors."
        },
        "Ethical and Security Issues in Hardware Design": {
            type: "Warning",
            text: "Trojan Horse. A virus hidden in the physical chip."
        },
        "Open Hardware Initiative": {
            type: "Movement",
            text: "Open Source. Hardware designs anyone can use."
        },
        "RISC-V": {
            type: "Standard",
            text: "Hardware Linux. Free instruction set."
        },
        "OpenCores": {
            type: "Library",
            text: "GitHub for Hardware."
        },
        "EDA (Electronic Design Automation)": {
            type: "Definition",
            text: "Chip Architects. The software used to design hardware."
        }
    },
    // Specialized & Applied
    "specialized": {
        "Datacenter Architecture": {
            type: "Goal",
            text: "The Warehouse. Storing and processing massive amounts of goods (data)."
        },
        "Key Server Components": {
            type: "Anatomy",
            text: "The Muscle. CPU is the brain, but RAM and Storage are the muscles."
        },
        "Scaling Models": {
            type: "Strategy",
            text: "Growth. How do we handle more customers?"
        },
        "Scale-Up (Vertical)": {
            type: "Tactic",
            text: "Steroids. Make the single worker stronger (More RAM/CPU)."
        },
        "Scale-Out (Horizontal)": {
            type: "Tactic",
            text: "Cloning. Hire more workers. Easier to manage redundancy."
        },
        "PUE (Power Usage Effectiveness)": {
            type: "Formula",
            text: "The Scorecard. 1.0 is perfect. Anything higher is waste."
        },
        "Hyper-scale Architecture": {
            type: "Analogy",
            text: "Costco. Buying in bulk is cheaper. Millions of servers."
        },
        "Disaggregation": {
            type: "Concept",
            text: "LEGOs. Compute, Storage, and Network are separate bins."
        },
        "Blockchain Hardware Implementations": {
            type: "Definition",
            text: "Pickaxes. Specialized tools for mining digital gold."
        },
        "ASIC Architecture": {
            type: "Evolution",
            text: "The Specialist. A tool built to do ONE thing perfectly."
        },
        "Transaction Processing": {
            type: "Process",
            text: "The Lottery. Computing hashes tickets."
        },
        "Thermal & Power Constraints": {
            type: "Problem",
            text: "Meltdown. 1000 chips = 1000 heaters."
        },
        "Embedded System": {
            type: "Definition",
            text: "Hidden Helper. The computer inside your microwave."
        },
        "Microcontroller (MCU)": {
            type: "Device",
            text: "All-in-One. CPU, RAM, and Storage on a single chip."
        },
        "Real-Time Requirements": {
            type: "Constraint",
            text: "Deadlines. Late answer = Wrong answer."
        },
        "Interrupts & Predictability": {
            type: "Mechanism",
            text: "The Doorbell. Stop and answer immediately."
        },
        "Applications": {
            type: "Usage",
            text: "Where do we use this?"
        },
        "Automotive ECUs": {
            type: "Safety",
            text: "Pilot. Cars fly on code."
        },
        "Industrial Control (PLC)": {
            type: "Reliability",
            text: "Factory Foreman. Rugged and reliable."
        },
        "High-Performance Computing (HPC)": {
            type: "Definition",
            text: "Supercomputers. Solving big math."
        },
        "Parallel Processing Models": {
            type: "Theory",
            text: "Teamwork Styles."
        },
        "SIMD": {
            type: "Mode",
            text: "Army Drill. 'Jump!' -> Everyone jumps."
        },
        "MIMD": {
            type: "Mode",
            text: "Construction Site. Plumber puts pipes, Electrician puts wires."
        },
        "Interconnect Networks": {
            type: "Infrastructure",
            text: "Highways. Fast lanes for data."
        },
        "InfiniBand": {
            type: "Tech",
            text: "Autobahn. No speed limit for supercomputers."
        },
        "Cluster Architecture": {
            type: "Organization",
            text: "The Hive. Bees working for the Queen."
        },
        "Memory Hierarchy in HPC": {
            type: "Structure",
            text: "Shared vs Distributed."
        },
        "Hardware Virtualization": {
            type: "Concept",
            text: "Inception. A computer inside a computer."
        },
        "Hypervisor Types": {
            type: "Category",
            text: "The Managers."
        },
        "Type 1 (Bare-Metal)": {
            type: "Tech",
            text: "Direct Boss. No OS in between."
        },
        "Type 2 (Hosted)": {
            type: "Tech",
            text: "Middle Manager. Runs inside an OS."
        },
        "CPU Virtualization": {
            type: "Tech",
            text: "Time Slicing. Pretending to be many CPUs."
        },
        "I/O & Memory Virtualization": {
            type: "Tech",
            text: "Shared Access. Virtual addresses mapped to real."
        },
        "Cloud Infrastructure": {
            type: "Business",
            text: "Rental. Don't buy, just rent the time."
        },
        "IoT Architecture": {
            type: "Design",
            text: "Marathon Runner. Built for endurance (battery)."
        },
        "Distributed Compute": {
            type: "Strategy",
            text: "Edge vs Cloud."
        },
        "Cloud Processing": {
            type: "Location",
            text: "HQ. Smart but far away."
        },
        "Edge Processing": {
            type: "Location",
            text: "Field Agent. Fast response on site."
        },
        "Low-Power Cores": {
            type: "Tech",
            text: "Sipping Energy. Cortex-M."
        },
        "Sensor Integration": {
            type: "Input",
            text: "Eyes and Ears."
        },
        "Hardware Security": {
            type: "Vault",
            text: "TrustZone. Secure area for secrets."
        },
        "Synthesis": {
            type: "Summary",
            text: "Putting it together."
        },
        "Module Summary": {
            type: "Recap",
            text: "The Big Picture."
        }
    }
};
