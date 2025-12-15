const courseData = [
    {
        id: "dist-sys",
        title: "Distributed Systems",
        sections: [
            {
                title: "Fundamentals",
                cards: [
                    {
                        title: "Distributed System",
                        content: [
                            "A collection of independent computers connected through a network working together as a single system.",
                            "Each computer has its own memory and processor.",
                            "Examples: Online banking, Social media, Cloud storage."
                        ]
                    },
                    {
                        title: "Transparency",
                        content: [
                            "Transparency means the system hides its complexity from users.",
                            "You do not see how many computers, servers, or processes are behind the service.",
                            "You only see a simple, unified system."
                        ]
                    },
                    {
                        title: "Reliability",
                        content: [
                            "If one computer fails, others keep running.",
                            "The system does not stop completely."
                        ]
                    },
                    {
                        title: "Availability",
                        content: [
                            "Because tasks are spread across different machines, the system stays accessible most of the time.",
                            "Example: If one server goes down, another server delivers content."
                        ]
                    }
                ]
            },
            {
                title: "Characteristics",
                cards: [
                    {
                        title: "Resource Sharing",
                        content: [
                            "Computers share their resources (files, storage, processing power) with each other.",
                            "Instead of each computer working alone, they pool what they have."
                        ]
                    },
                    {
                        title: "Concurrency",
                        content: [
                            "Multiple operations happen at the same time on different computers.",
                            "Example: Payment check + Stock update occur in parallel."
                        ]
                    },
                    {
                        title: "Scalability",
                        content: [
                            "The system can handle growth without breaking."
                        ]
                    },
                    {
                        title: "Horizontal Scalability",
                        content: [
                            "Add more machines to share the load. (e.g. More Servers)."
                        ]
                    },
                    {
                        title: "Vertical Scalability",
                        content: [
                            "Upgrade a single machine with more CPU, memory, or storage."
                        ]
                    },
                    {
                        title: "Fault Tolerance",
                        content: [
                            "The system keeps working even if some parts fail.",
                            "Example: If storage server fails, files are safe on other servers."
                        ]
                    }
                ]
            },
            {
                title: "Architectures",
                cards: [
                    {
                        title: "Client-Server Architecture",
                        content: [
                            "Client: The user's device or app. Sends requests.",
                            "Server: Powerful computer that provides services or resources.",
                            "Example: Phone sending login request to server."
                        ]
                    },
                    {
                        title: "Peer-to-Peer (P2P)",
                        content: [
                            "Every computer, <span style='color: #4ade80;'>called a peer</span>, acts as both a client and a server.",
                            "Peers share resources directly with each other instead of depending on a central server.",
                            "No central server."
                        ]
                    },
                    {
                        title: "Three-Tier Architecture",
                        content: [
                            "Presentation layer (UI): What the user sees.",
                            "Application layer (Business Logic): Rules and processing.",
                            "Data layer: Databases and storage."
                        ]
                    }
                ]
            },
            {
                title: "Communication & Middleware",
                cards: [
                    {
                        title: "Communication Context",
                        content: [
                            "In distributed systems, computers need to communicate. There are two main communication models:"
                        ]
                    },
                    {
                        title: "Synchronous",
                        content: [
                            "The sender waits for a response before moving on.",
                            "It is blocking."
                        ]
                    },
                    {
                        title: "Asynchronous",
                        content: [
                            "The sender does not wait for a response.",
                            "It is non-blocking."
                        ]
                    },
                    {
                        title: "Middleware",
                        content: [
                            "Software that sits between the OS and applications to help them work together.",
                            "It handles tasks like <span style='color: #4ade80;'>messaging</span>, <span style='color: #4ade80;'>transactions</span>, and <span style='color: #4ade80;'>finding services</span>.",
                            "Makes communication easier and more reliable."
                        ]
                    },
                    {
                        title: "Middleware Examples",
                        content: [
                            "RabbitMQ and Kafka manage messages between services.",
                            "gRPC allows services to call each other efficiently.",
                            "CORBA helps programs on different machines and languages work together."
                        ]
                    }
                ]
            },
            {
                title: "Case Studies",
                cards: [
                    {
                        title: "Google",
                        content: [
                            "Search infrastructure: Many computers share the work.",
                            "Web crawling: Multiple crawlers scan the web.",
                            "Replication: Data copies in different data centers prevent failures."
                        ]
                    },
                    {
                        title: "Netflix",
                        content: [
                            "Microservices: Splits platform into small services (recommendations, playback).",
                            "Chaos Monkey: Intentionally shuts down parts of system to test resilience.",
                            "Global CDNs: Videos stored in servers around the world for fast streaming."
                        ]
                    }
                ]
            },
            {
                title: "Security & Components",
                cards: [
                    {
                        title: "Encryption",
                        content: [
                            "TLS/SSL: Protects data while it moves between computers.",
                            "End-to-End Encryption: Only sender and receiver can read data."
                        ]
                    },
                    {
                        title: "Authentication & Authorization",
                        content: [
                            "Authentication: Confirms who you are (Passwords, OAuth).",
                            "Authorization: Controls what you can do (RBAC).",
                            "Principle of Least Privilege: Give users only the access they need."
                        ]
                    },
                    {
                        title: "Message Queues",
                        content: [
                            "Let systems send messages without waiting for a reply.",
                            "Event-driven design: React to events as they happen (Pub/Sub)."
                        ]
                    },
                    {
                        title: "API Gateway",
                        content: [
                            "Acts as a single entry point for clients.",
                            "Routes requests, handles authentication."
                        ]
                    },
                    {
                        title: "Containers & Orchestration",
                        content: [
                            "Containers (Docker): Package apps with dependencies.",
                            "Orchestration (Kubernetes): Manages scaling, updates, and recovery."
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "adv-arch",
        title: "Advanced Architecture",
        sections: [
            {
                title: "I. Introduction & Homogeneous",
                cards: [
                    {
                        title: "Homogeneous Computing",
                        content: [
                            "(Traditional) Systems using identical processor cores/units for all tasks (e.g., multi-core CPUs).",
                            "Uniform architecture and simplified programming."
                        ]
                    },
                    {
                        title: "Limitations of Homogeneous",
                        content: [
                            "Inefficient for diverse, specialized workloads.",
                            "High power consumption for specialized tasks.",
                            "One-size-fits-all approach is inadequate for AI and real-time processing."
                        ]
                    },
                    {
                        title: "Why Advanced Architectures?",
                        content: [
                            "Modern applications like AI, Big Data, and IoT demand capabilities that monolithic, homogeneous systems cannot satisfy.",
                            "Push for domain-specific and heterogeneous designs."
                        ]
                    }
                ]
            },
            {
                title: "II. Heterogeneous Computing",
                cards: [
                    {
                        title: "Heterogeneous Computing",
                        content: [
                            "Utilizes multiple processor types (CPU, GPU, FPGA) working collaboratively.",
                            "Optimized for specific segments of the workload."
                        ]
                    },
                    {
                        title: "Key Components",
                        content: [
                            "CPU: General-purpose, control logic.",
                            "GPU: Massive parallel processing.",
                            "FPGA: Reconfigurable hardware."
                        ]
                    },
                    {
                        title: "Advantages",
                        content: [
                            "Improved performance through optimized workload distribution.",
                            "Superior power efficiency.",
                            "Flexibility for diverse applications (HPC, AI)."
                        ]
                    },
                    {
                        title: "Challenges",
                        content: [
                            "Increased programming complexity.",
                            "Complex task scheduling and workload optimization.",
                            "High communication overhead."
                        ]
                    }
                ]
            },
            {
                title: "III. Reconfigurable Computing",
                cards: [
                    {
                        title: "Reconfigurable Computing",
                        content: [
                            "Uses Field-Programmable Gate Arrays (FPGAs) that can be reprogrammed after manufacturing.",
                            "Hardware structure dynamically optimized for different algorithms."
                        ]
                    },
                    {
                        title: "Core Components of FPGA",
                        content: [
                            "Programmable Logic Blocks (CLBs): Basic building blocks containing LUTs and Flip-Flops.",
                            "Programmable Interconnects: Routing channels and switches.",
                            "I/O Blocks: Interfaces to external signals."
                        ]
                    }
                ]
            },
            {
                title: "IV. Memory-Centric Architectures",
                cards: [
                    {
                        title: "Objective",
                        content: [
                            "Overcome the 'Memory Wall' (latency/bandwidth mismatch) and 'Power Wall'.",
                            "Integrate computation closer to data storage."
                        ]
                    },
                    {
                        title: "Processing Near Memory (PnM)",
                        content: [
                            "Integrates processing units very close to or on the same chip package as memory.",
                            "Examples: High bandwidth, low-latency access."
                        ]
                    },
                    {
                        title: "Processing Using Memory (PuM)",
                        content: [
                            "Exploits analog physical properties of memory cells (DRAM/RRAM) to perform logic directly within memory arrays."
                        ]
                    }
                ]
            },
            {
                title: "V. 3D Integrated Circuits (3D ICs)",
                cards: [
                    {
                        title: "3D ICs",
                        content: [
                            "Semiconductor devices where active component layers are stacked vertically and interconnected.",
                            "Critical for miniaturization and performance scaling."
                        ]
                    },
                    {
                        title: "Key Enabling Technologies",
                        content: [
                            "<span style='color: #4ade80;'>Through-Silicon Vias (TSVs)</span>: Vertical electrical connections through silicon.",
                            "Heterogeneous Integration: Stacking diverse components.",
                            "Wafer Bonding Techniques: Physically joining stacked layers."
                        ]
                    },
                    {
                        title: "Implementation Challenges",
                        content: [
                            "Primary Hurdle: <span style='color: #4ade80;'>Thermal Management</span> (Hotspots).",
                            "Complex 3D-aware design tools.",
                            "Manufacturing yield and testing difficulties."
                        ]
                    }
                ]
            },
            {
                title: "VI. Optical and Photonic Computing",
                cards: [
                    {
                        title: "Optical Computing",
                        content: [
                            "Uses photons (light) instead of electrons for data processing.",
                            "Promises to eliminate electrical bottlenecks."
                        ]
                    },
                    {
                        title: "Core Components",
                        content: [
                            "Lasers and optical waveguides.",
                            "Modulators and resonators.",
                            "All-optical logic gates (AND, OR, NOT)."
                        ]
                    },
                    {
                        title: "Advantages",
                        content: [
                            "Unprecedented Speed (Speed of light).",
                            "Massive Parallelism (WDM).",
                            "Energy Efficiency (Minimal heat)."
                        ]
                    }
                ]
            },
            {
                title: "VII. Current Trends",
                cards: [
                    {
                        title: "Key Areas of Development",
                        content: [
                            "AI and Machine Learning (TPUs, NPUs).",
                            "Chiplet-Based Design (Modular, UCIe).",
                            "Near-Memory Computing (PIM, CXL).",
                            "Domain-Specific Architectures (DSAs).",
                            "Advanced Packaging (2.5D, CPO).",
                            "Sustainable Computing.",
                            "Security-First Architectures."
                        ]
                    }
                ]
            },
            {
                title: "VIII. Comparative Summary",
                cards: [
                    {
                        title: "Heterogeneous Computing",
                        content: [
                            "Goal: Task-optimized processing.",
                            "Benefit: Performance and energy efficiency.",
                            "Challenge: Programming complexity."
                        ]
                    },
                    {
                        title: "Reconfigurable (FPGA)",
                        content: [
                            "Goal: Hardware flexibility.",
                            "Benefit: Adaptability, spatial parallelism.",
                            "Challenge: Design complexity."
                        ]
                    },
                    {
                        title: "Memory-Centric",
                        content: [
                            "Goal: Reduce data movement.",
                            "Benefit: High bandwidth, energy reduction.",
                            "Challenge: Software paradigm shift."
                        ]
                    },
                    {
                        title: "3D ICs",
                        content: [
                            "Goal: Vertical integration.",
                            "Benefit: Small footprint, short interconnects.",
                            "Challenge: Thermal management."
                        ]
                    },
                    {
                        title: "Optical/Photonic",
                        content: [
                            "Goal: Light-based transport.",
                            "Benefit: Unmatched speed, bandwidth.",
                            "Challenge: Miniaturization costs."
                        ]
                    }
                ]
            },
            {
                title: "IX. Evolution Path",
                cards: [
                    {
                        title: "Evolution Path",
                        content: [
                            "1. Homogeneous (Traditional multi-core CPUs).",
                            "2. Heterogeneous (CPU + GPU + FPGA collaboration).",
                            "3. Specialized (PIM, 3D ICs, Optical components).",
                            "4. Domain-Specific (Custom accelerators / DSAs)."
                        ]
                    },
                    {
                        title: "Future Direction",
                        content: [
                            "Convergence and Modularity.",
                            "Composability (Interchangeable chiplets).",
                            "Hybrid Integration (3D packages)."
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "emerging",
        title: "Emerging Trends",
        sections: [
            {
                title: "Semiconductors",
                cards: [
                    {
                        title: "Semiconductors",
                        content: [
                            "Materials with electrical conductivity between conductors and insulators.",
                            "Doping allows them to function as switches (transistors)."
                        ]
                    },
                    {
                        title: "5nm Node",
                        content: [
                            "Manufacturing process that fits more transistors in the same chip area compared to older nodes.",
                            "Uses <span style='color: #4ade80;'>FinFET</span> transistors.",
                            "Special: Higher availability & efficiency (Low power sans sacrificing speed)."
                        ]
                    },
                    {
                        title: "3nm Node",
                        content: [
                            "Uses <span style='color: #4ade80;'>Gate-All-Around (GAA)</span> transistors.",
                            "Better current control and reduced leakage.",
                            "Special: Further improves performance, lowers power consumption compared to 5nm."
                        ]
                    }
                ]
            },
            {
                title: "Workflow & Tools",
                cards: [
                    {
                        title: "Workflow Stages",
                        content: [
                            "Specification: Defining system requirements.",
                            "Synthesis: Translating high-level descriptions into gate-level.",
                            "Simulation: Testing functional correctness.",
                            "Verification: Ensuring design meets specs.",
                            "Layout: Physical placement and routing."
                        ]
                    },
                    {
                        title: "Common EDA Tools",
                        content: [
                            "Cadence Design Systems",
                            "Synopsys Design Compiler",
                            "Xilinx Vivado",
                            "Mentor Graphics",
                            "KiCad (Open-source)"
                        ]
                    }
                ]
            },
            {
                title: "AI-Assisted Optimization",
                cards: [
                    {
                        title: "AI-Assisted Architecture Optimization",
                        content: [
                            "Techniques: Design Space Exploration (DSE), Reinforcement Learning, Predictive Modeling.",
                            "Applications: Processor design, FPGA optimization, Memory hierarchy tuning."
                        ]
                    },
                    {
                        title: "Challenges of AI Optimization",
                        content: [
                            "Interpretability of AI decisions.",
                            "Risk of overfitting to training data.",
                            "Integration with traditional workflows."
                        ]
                    },
                    {
                        title: "Importance of AI-Assisted",
                        content: [
                            "Finds better trade-offs between speed, power, and cost.",
                            "Speeds up design cycles.",
                            "Helps create specialized chips (like Google's TPU)."
                        ]
                    }
                ]
            },
            {
                title: "Ethical & Security Issues",
                cards: [
                    {
                        title: "Ethical and Security Issues in Hardware Design",
                        content: [
                            "Security Threats: Hardware Trojans, Backdoors, Supply Chain Vulnerabilities.",
                            "Ethical: Surveillance, Data collection, Military applications."
                        ]
                    }
                ]
            },
            {
                title: "Open Hardware",
                cards: [
                    {
                        title: "Open Hardware Initiative",
                        content: [
                            "Promotes hardware designs that are open, transparent, and freely accessible."
                        ]
                    },
                    {
                        title: "RISC-V",
                        content: [
                            "An open-standard Instruction Set Architecture (ISA).",
                            "Free and modular."
                        ]
                    },
                    {
                        title: "OpenCores",
                        content: [
                            "Online repository hosting open-source digital hardware designs (IP cores)."
                        ]
                    },
                    {
                        title: "EDA (Electronic Design Automation)",
                        content: [
                            "Software tools that assist engineers in designing, simulating, and verifying electronic systems."
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "specialized",
        title: "Specialized & Applied",
        sections: [
            {
                title: "I. Server & Datacenter",
                cards: [
                    {
                        title: "Datacenter Architecture",
                        content: [
                            "Design to handle massive, concurrent workloads.",
                            "Goal: Maximize throughput and minimize latency."
                        ]
                    },
                    {
                        title: "Key Server Components",
                        content: [
                            "CPU: High core counts, large L3 caches (Max throughput per watt).",
                            "RAM: Massive capacity (1TB+) using DDR5/HBM.",
                            "NIC: High-speed (25G-400G) with RDMA.",
                            "Storage: Low-latency NVMe SSDs."
                        ]
                    },
                    {
                        title: "Scale-Up vs Scale-Out",
                        content: [
                            "Scale-Up (Vertical): Increase capacity of single server. Simpler but expensive.",
                            "Scale-Out (Horizontal): Add more servers. Limitless scalability but complex management."
                        ]
                    },
                    {
                        title: "PUE (Power Usage Effectiveness)",
                        content: [
                            "Metric measuring datacenter energy efficiency.",
                            "PUE = Total Facility Energy / IT Equipment Energy (Ideal: 1.0)."
                        ]
                    },
                    {
                        title: "Hyper-scale Architecture",
                        content: [
                            "Hyper-scale: Datacenters by major providers (Google, Amazon) housing millions of servers.",
                            "Disaggregation: Separating compute, storage, and networking into independent pools.",
                            "Benefit: Dynamic allocation and upgrade cycles."
                        ]
                    }
                ]
            },
            {
                title: "II. Blockchain Hardware",
                cards: [
                    {
                        title: "Blockchain Hardware Implementations",
                        content: [
                            "Specialized ICs designed to efficiently execute cryptographic hashing algorithms (SHA-256).",
                            "Efficiency Metric: Hash/Second per Watt (H/s/W)."
                        ]
                    },
                    {
                        title: "ASIC Architecture",
                        content: [
                            "ASIC: Application-Specific ICs.",
                            "<span style='color: #4ade80;'>Pipeline Optimization</span>: ASICs contain thousands of highly optimized hardware pipelines.",
                            "<span style='color: #4ade80;'>No Overhead</span>: Eliminates non-essential features (floating-point, OS).",
                            "Result: Orders of magnitude greater speed and efficiency."
                        ]
                    },
                    {
                        title: "Thermal & Power Constraints",
                        content: [
                            "Challenge: High density leads to extreme heat generation.",
                            "Solution: Industrial-scale cooling (Liquid cooling).",
                            "Energy Consumption: Efficient per hash, but massive global consumption."
                        ]
                    },
                    {
                        title: "Transaction Processing",
                        content: [
                            "Mining: Process of finding a valid hash below target difficulty.",
                            "Role: Key component enforcing consensus mechanism (Proof-of-Work)."
                        ]
                    }
                ]
            },
            {
                title: "III. Real-Time & Embedded",
                cards: [
                    {
                        title: "Embedded System",
                        content: [
                            "Specialized computer system designed to perform dedicated functions.",
                            "Constraints: High reliability, low power, predictable timing (real-time)."
                        ]
                    },
                    {
                        title: "Microcontroller (MCU)",
                        content: [
                            "Use Case: Simple control loops, sensor reading.",
                            "Architecture: Single-chip solution (CPU + RAM + Peripherals).",
                            "Focus: Low power, low cost, dedicated I/O."
                        ]
                    },
                    {
                        title: "Interrupts & Predictability",
                        content: [
                            "Interrupts: Mechanisms that pause CPU for urgent events.",
                            "Latency: Time between event and start of ISR. Must be deterministic.",
                            "Architecture: RTOS and hardware handlers guarantee low latency."
                        ]
                    },
                    {
                        title: "Automotive & Industrial",
                        content: [
                            "Automotive ECUs: Highly resilient, dual-core lockstep CPUs (ASIL-D).",
                            "Industrial (PLC): Ultra-high reliability. Uses deterministic fieldbus protocols (EtherCAT)."
                        ]
                    }
                ]
            },
            {
                title: "IV. HPC Architecture",
                cards: [
                    {
                        title: "High-Performance Computing (HPC)",
                        content: [
                            "Parallel processing across tightly coupled resources (supercomputers).",
                            "Key Metric: FLOPS (Floating-point Operations Per Second)."
                        ]
                    },
                    {
                        title: "Parallel Processing Models",
                        content: [
                            "SIMD: Single Instruction, Multiple Data (Vector units).",
                            "MIMD: Multiple Instruction, Multiple Data (Clusters)."
                        ]
                    },
                    {
                        title: "Interconnect Networks",
                        content: [
                            "Need: Low-latency, high-bandwidth.",
                            "Solution: <span style='color: #4ade80;'>InfiniBand</span> (dedicated switched fabric).",
                            "Topology: Fat-Tree."
                        ]
                    },
                    {
                        title: "Cluster Architecture",
                        content: [
                            "Nodes: Independent servers.",
                            "Compute Partition: Running code.",
                            "Service Partition: Files/Scheduling.",
                            "Scheduler: Manages job placement (e.g., Slurm)."
                        ]
                    },
                    {
                        title: "Memory Hierarchy in HPC",
                        content: [
                            "GPU Memory (HBM): High-bandwidth.",
                            "Shared Memory: Within single node.",
                            "Distributed Memory: Via Message Passing (MPI)."
                        ]
                    },
                    {
                        title: "Applications",
                        content: [
                            "Large-Scale Modeling: Weather, Nuclear, Fluid dynamics.",
                            "Requires solving massive matrices simultaneously."
                        ]
                    }
                ]
            },
            {
                title: "V. Virtualization & Cloud",
                cards: [
                    {
                        title: "Hardware Virtualization",
                        content: [
                            "Creating software-based representation of underlying hardware.",
                            "Hypervisor: Software managing and isolating VMs."
                        ]
                    },
                    {
                        title: "Hypervisor Types",
                        content: [
                            "Type 1 (Bare-Metal): Runs on host hardware (ESXi, Hyper-V). Used in Datacenters.",
                            "Type 2 (Hosted): Runs within OS (VirtualBox). Used for testing."
                        ]
                    },
                    {
                        title: "CPU Virtualization",
                        content: [
                            "Hardware-Assisted (VT-x/AMD-V).",
                            "Adds Root Mode so Hypervisor can manage privileged instructions with minimal overhead."
                        ]
                    },
                    {
                        title: "I/O & Memory Virtualization",
                        content: [
                            "Memory: Nested Page Tables.",
                            "I/O: SR-IOV (Pass-Through) allows direct access to NIC/GPU."
                        ]
                    },
                    {
                        title: "Cloud Infrastructure",
                        content: [
                            "Resource Pooling: Virtualization enables pooling of Compute, Storage, and Network.",
                            "Basis of IaaS."
                        ]
                    }
                ]
            },
            {
                title: "VI. IoT Architecture",
                cards: [
                    {
                        title: "IoT Architecture",
                        content: [
                            "Design focused on maximizing battery life and minimizing cost.",
                            "Key Constraint: Energy Harvesting and Ultra-Low Power."
                        ]
                    },
                    {
                        title: "Edge vs Cloud Processing",
                        content: [
                            "Cloud: Data sent to datacenter (High latency).",
                            "Edge: Computation done on device/gateway (Low latency, Privacy)."
                        ]
                    },
                    {
                        title: "Low-Power Cores",
                        content: [
                            "Example: ARM Cortex-M.",
                            "Features: Deep sleep modes, quick wake-up.",
                            "Voltage Scaling: DVFS (Dynamic Voltage and Frequency Scaling)."
                        ]
                    },
                    {
                        title: "Sensor Integration",
                        content: [
                            "ADCs: Read real-world data (Temp, light).",
                            "DSPs: Handle signal processing before CPU."
                        ]
                    },
                    {
                        title: "Hardware Security",
                        content: [
                            "Challenge: Physical accessibility.",
                            "Solution: <span style='color: #4ade80;'>ARM TrustZone</span> (Secure World vs Normal World)."
                        ]
                    },
                    {
                        title: "Synthesis",
                        content: [
                            "Future: Deeply integrated, heterogeneous architectures.",
                            "Pervasiveness: From PetaFLOP supercomputers to milliwatt sensors.",
                            "Efficiency: Max performance per Watt."
                        ]
                    }
                ]
            }
        ]
    }
];
