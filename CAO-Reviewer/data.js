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
                            "Fits more transistors compared to older nodes.",
                            "Uses FinFET transistors."
                        ]
                    },
                    {
                        title: "3nm Node",
                        content: [
                            "Uses Gate-All-Around (GAA) transistors.",
                            "Better current control and reduced leakage."
                        ]
                    }
                ]
            },
            {
                title: "Open Hardware & EDA",
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
                    },
                    {
                        title: "Design Space Exploration (DSE)",
                        content: [
                            "AI evaluates thousands of design permutations to find optimal configurations."
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
                title: "Definitions",
                cards: [
                    {
                        title: "Specialized Architecture",
                        content: [
                            "Designing processor optimized for a specific, narrow set of tasks."
                        ]
                    },
                    {
                        title: "Applied Architecture",
                        content: [
                            "Deployment/optimization of hardware within real-world operational environments."
                        ]
                    }
                ]
            },
            {
                title: "Datacenter",
                cards: [
                    {
                        title: "Datacenter Architecture",
                        content: [
                            "Design to handle massive, concurrent workloads.",
                            "Goal: Maximize throughput and minimize latency."
                        ]
                    },
                    {
                        title: "Scale-Up (Vertical)",
                        content: [
                            "Increasing capacity of a single server."
                        ]
                    },
                    {
                        title: "Scale-Out (Horizontal)",
                        content: [
                            "Adding more servers to distribute load."
                        ]
                    },
                    {
                        title: "PUE (Power Usage Effectiveness)",
                        content: [
                            "Metric measuring datacenter energy efficiency.",
                            "PUE = Total Facility Energy / IT Equipment Energy.",
                            "Ideal PUE: 1.0."
                        ]
                    }
                ]
            },
            {
                title: "Hardware",
                cards: [
                    {
                        title: "ASIC",
                        content: [
                            "Application-Specific ICs.",
                            "Highly optimized hardware pipelines designed only to perform required hash function.",
                            "No overhead."
                        ]
                    },
                    {
                        title: "Embedded System",
                        content: [
                            "Specialized computer system designed to perform one or a few dedicated functions.",
                            "Constraints: High reliability, low power, predictability."
                        ]
                    },
                    {
                        title: "Microcontroller (MCU)",
                        content: [
                            "Single-chip solution integrating CPU, memory, and peripherals."
                        ]
                    },
                    {
                        title: "Interrupts",
                        content: [
                            "Mechanisms that cause CPU to pause execution and service urgent external event."
                        ]
                    },
                    {
                        title: "Latency (Real-Time)",
                        content: [
                            "Time between event occurrence and start of ISR.",
                            "Must be deterministic."
                        ]
                    }
                ]
            },
            {
                title: "HPC",
                cards: [
                    {
                        title: "High-Performance Computing (HPC)",
                        content: [
                            "Use of parallel processing to solve complex problems quickly."
                        ]
                    },
                    {
                        title: "FLOPS",
                        content: [
                            "Floating-point Operations Per Second.",
                            "Measures speed of calculations."
                        ]
                    },
                    {
                        title: "SIMD",
                        content: [
                            "Single Instruction, Multiple Data.",
                        ]
                    },
                    {
                        title: "MIMD",
                        content: [
                            "Multiple Instruction, Multiple Data.",
                        ]
                    }
                ]
            },
            {
                title: "Virtualization & IoT",
                cards: [
                    {
                        title: "Virtualization",
                        content: [
                            "Creating software-based representation of underlying hardware.",
                        ]
                    },
                    {
                        title: "Hypervisor",
                        content: [
                            "Layer of software that manages and isolates virtual machines."
                        ]
                    },
                    {
                        title: "Type 1 Hypervisor",
                        content: [
                            "Bare-Metal. Runs directly on host hardware."
                        ]
                    },
                    {
                        title: "Type 2 Hypervisor",
                        content: [
                            "Hosted. Runs as an application within an OS."
                        ]
                    },
                    {
                        title: "IoT Architecture",
                        content: [
                            "Focused on maximizing battery life and minimizing cost."
                        ]
                    },
                    {
                        title: "Edge Processing",
                        content: [
                            "Computation is done on the device or nearby gateway (not Cloud)."
                        ]
                    },
                    {
                        title: "TrustZone",
                        content: [
                            "Hardware feature creating two execution environments (Secure vs Normal)."
                        ]
                    }
                ]
            }
        ]
    }
];
