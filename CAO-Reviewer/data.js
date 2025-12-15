const courseData = [
    {
        id: "dist-sys",
        title: "Distributed Systems",
        sections: [
            {
                title: "Fundamentals",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Distributed System",
                            content: [
                                "A collection of independent computers connected through a network working together as a single system.",
                                "Each computer has its own memory and processor.",
                                "Examples: Online banking, Social media, Cloud storage."
                            ]
                        },
                        children: [
                            {
                                title: "Transparency",
                                content: [
                                    "Hides complexity from users.",
                                    "System appears as single unit."
                                ]
                            },
                            {
                                title: "Reliability",
                                content: [
                                    "If one node fails, others continue.",
                                    "No single point of failure."
                                ]
                            },
                            {
                                title: "Availability",
                                content: [
                                    "Accessible despite failures.",
                                    "Replication ensures uptime."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Characteristics",
                groups: [
                    {
                        cards: [
                            {
                                title: "Resource Sharing",
                                content: [
                                    "Computers share files, storage, processing power.",
                                    "Pooling resources."
                                ]
                            },
                            {
                                title: "Concurrency",
                                content: [
                                    "Multiple operations happen simultaneously.",
                                    "Parallel execution."
                                ]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Scalability",
                            content: ["System ability to handle growth without breaking."]
                        },
                        children: [
                            {
                                title: "Horizontal Scalability",
                                content: ["Add more machines.", "Load distribution."]
                            },
                            {
                                title: "Vertical Scalability",
                                content: ["Upgrade single machine.", "More CPU/RAM."]
                            }
                        ]
                    },
                    {
                        cards: [
                            {
                                title: "Fault Tolerance",
                                content: [
                                    "System keeps working even if some parts fail.",
                                    "Redundancy protects data."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Architectures",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Architectures",
                            content: ["Structural patterns of distributed systems."]
                        },
                        children: [
                            {
                                title: "Client-Server",
                                content: ["Client requests, Server provides.", "Centralized control."]
                            },
                            {
                                title: "Peer-to-Peer (P2P)",
                                content: ["All nodes are equal peers.", "Decentralized."]
                            },
                            {
                                title: "Three-Tier",
                                content: [
                                    "<span style='color: #4ade80;'>Presentation layer (UI)</span>: This is what the user sees and interacts with. Example: a website or mobile app screen.",
                                    "<span style='color: #4ade80;'>Application layer (business logic)</span>: This is where the rules and processing happen. It decides how data is handled. Example: checking if your login password is correct.",
                                    "<span style='color: #4ade80;'>Data layer (databases and storage)</span>: This is where information is stored and retrieved. Example: a database with usernames, passwords, and user profiles."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Communication & Middleware",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Communication Context",
                            content: ["Models for inter-process communication."]
                        },
                        children: [
                            {
                                title: "Synchronous",
                                content: ["Blocking.", "Sender waits for response."]
                            },
                            {
                                title: "Asynchronous",
                                content: ["Non-blocking.", "Sender continues work."]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Middleware",
                            content: [
                                "Middleware is software that sits between the operating system and applications to help them work together.",
                                "It handles tasks like messaging, transactions, and finding services.",
                                "It makes communication between different parts of a distributed system easier and more reliable."
                            ]
                        },
                        children: [
                            {
                                title: "Middleware Examples",
                                content: ["RabbitMQ (Msgs)", "gRPC (Calls)", "CORBA (Legacy)."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Case Studies",
                groups: [
                    {
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
                                    "<span style='color: #4ade80;'>Microservices-based streaming</span>: Netflix splits its platform into small services, each handling a specific task like recommendations or playback. This makes updates faster and systems more reliable.",
                                    "<span style='color: #4ade80;'>Chaos Monkey for resilience</span>: Netflix intentionally shuts down parts of its system to test how well it handles failures. This ensures the platform stays up even if something breaks.",
                                    "<span style='color: #4ade80;'>Global CDNs</span>: Videos are stored in servers around the world, so users get fast streaming no matter where they are."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Security",
                groups: [
                    {
                        cards: [
                            {
                                title: "Encryption & Keys",
                                content: [
                                    "<span style='color: #4ade80;'>TLS/SSL</span>: Protects data while it moves between computers. It stops attackers from reading or changing information.",
                                    "<span style='color: #4ade80;'>End-to-End encryption</span>: Only the sender and receiver can read the data. Even the service provider cannot access it.",
                                    "<span style='color: #4ade80;'>Key management</span>: Securely creates, stores, and rotates encryption keys. Proper management prevents unauthorized access."
                                ]
                            },
                            {
                                title: "Authentication & Authorization",
                                content: [
                                    "<span style='color: #4ade80;'>Authentication</span>: Confirms who you are. Methods include passwords, OAuth tokens, and certificates.",
                                    "<span style='color: #4ade80;'>Authorization</span>: Controls what you can do. Uses access rules like RBAC (role-based) and ABAC (attribute-based).",
                                    "<span style='color: #4ade80;'>Principle of least privilege</span>: Give users only the access they need. This reduces risk if an account is compromised.",
                                    "This keeps distributed systems secure by verifying users and limiting what they can access."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Components",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Components",
                            content: ["Building blocks of modern systems."]
                        },
                        children: [
                            {
                                title: "Message Queues",
                                content: [
                                    "Let systems send messages without waiting for a reply. This keeps processes running smoothly.",
                                    "<span style='color: #4ade80;'>Event-driven design</span>: Systems react to events as they happen, often using pub/sub (publish/subscribe) patterns.",
                                    "Examples: RabbitMQ and Apache Kafka handle large volumes of messages reliably.",
                                    "This approach improves scalability and decouples parts of a distributed system."
                                ]
                            },
                            {
                                title: "API Gateway & Service Mesh",
                                content: [
                                    "<span style='color: #4ade80;'>API Gateway</span>: Acts as a single entry point for clients. Routes requests, handles authentication, and simplifies access to multiple services.",
                                    "<span style='color: #4ade80;'>Service Mesh</span>: Manages communication between services inside the system. Handles load balancing, security, and monitoring.",
                                    "Examples: AWS API Gateway for external access, Istio for internal service management.",
                                    "This setup makes distributed systems easier to manage, secure, and scale."
                                ]
                            },
                            {
                                title: "Containers",
                                content: ["Docker & Kubernetes.", "Portable deployment."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Future Trends in Distributed Systems",
                groups: [
                    {
                        cards: [
                            {
                                title: "Emerging Technologies",
                                content: [
                                    "<span style='color: #4ade80;'>Edge computing</span>: Moves processing closer to users, reducing delay and improving speed.",
                                    "<span style='color: #4ade80;'>Serverless (FaaS)</span>: Runs functions only when needed, saving resources and simplifying scaling.",
                                    "<span style='color: #4ade80;'>Blockchain and AI</span>: Blockchain ensures secure, decentralized data. AI processes large data sets across distributed systems."
                                ]
                            }
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
                groups: [
                    {
                        // Intro Text Card
                        cards: [
                            {
                                title: "Introduction to Advanced Architectures",
                                content: [
                                    "Modern computer system designs integrate innovative hardware structures and advanced processing technologies to achieve superior performance, flexibility, scalability, and energy efficiency, moving beyond the limits of traditional computing."
                                ]
                            }
                        ]
                    },
                    {
                        // Evolution Comparison
                        isTree: true,
                        root: {
                            title: "Evolution: Traditional to Advanced",
                            content: ["Moving from One-Size-Fits-All to Specialization."]
                        },
                        children: [
                            {
                                title: "Homogeneous Computing (Traditional)",
                                content: [
                                    "Systems using identical processor cores/units for all tasks (e.g., multi-core CPUs).",
                                    "Uniform architecture and simplified programming."
                                ]
                            },
                            {
                                title: "Limitations",
                                content: [
                                    "Inefficient for diverse, specialized workloads.",
                                    "High power consumption for specialized tasks.",
                                    "One-size-fits-all approach is inadequate for AI and real-time processing."
                                ]
                            }
                        ]
                    },
                    {
                        // Why Advanced?
                        cards: [
                            {
                                title: "Why Advanced Architectures?",
                                content: [
                                    "Modern applications like Artificial Intelligence, big data analytics, real-time processing, and IoT demand diverse and specialized computational capabilities that monolithic, homogeneous systems cannot efficiently satisfy.",
                                    "This necessity drives the push for domain-specific and heterogeneous designs."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "II. Heterogeneous Computing",
                groups: [
                    {
                        cards: [
                            {
                                title: "Heterogeneous Computing Definition",
                                content: [
                                    "Heterogeneous computing utilizes multiple processor types (CPU, GPU, FPGA) working collaboratively, with each component optimized for specific segments of the workload."
                                ]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Key Components and Functions",
                            content: ["Components working collaboratively."]
                        },
                        children: [
                            {
                                title: "CPU",
                                content: [
                                    "<span style='color: #4ade80;'>Function</span>: General-purpose, control logic, sequential processing.",
                                    "<span style='color: #4ade80;'>Role</span>: Flexibility, complex decision-making, OS management."
                                ]
                            },
                            {
                                title: "GPU",
                                content: [
                                    "<span style='color: #4ade80;'>Function</span>: Massive parallel processing, floating-point mathematical computations.",
                                    "<span style='color: #4ade80;'>Role</span>: AI/ML training, graphics rendering, thousands of simultaneous operations."
                                ]
                            },
                            {
                                title: "FPGA",
                                content: [
                                    "<span style='color: #4ade80;'>Function</span>: Reconfigurable hardware for custom acceleration.",
                                    "<span style='color: #4ade80;'>Role</span>: Protocol handling, specific function acceleration (e.g., encryption), low-latency tasks."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "III. Reconfigurable Computing",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Core Components of an FPGA",
                            content: ["Hardware adaptable after manufacturing."]
                        },
                        children: [
                            {
                                title: "Programmable Logic Blocks (CLBs)",
                                content: [
                                    "Basic building blocks containing Look-Up Tables (LUTs) for logic and Flip-Flops for sequential storage."
                                ]
                            },
                            {
                                title: "Programmable Interconnects",
                                content: [
                                    "Routing channels and switches that define the path between logic blocks, forming the custom circuit."
                                ]
                            },
                            {
                                title: "I/O Blocks",
                                content: [
                                    "Interfaces that connect the reconfigurable fabric to external signals and peripherals."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "IV. Memory-Centric Architectures",
                groups: [
                    {
                        cards: [
                            {
                                title: "The Problem",
                                content: [
                                    "<span style='color: #4ade80;'>Memory Wall</span>: The growing disparity between processor speed and memory latency/bandwidth.",
                                    "<span style='color: #4ade80;'>Power Wall</span>: High energy cost of moving data between memory and the CPU.",
                                    "Solution: Integrate computation closer to data storage to significantly reduce energy costs."
                                ]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Memory-Centric Approaches",
                            content: ["Processing closer to where data lives."]
                        },
                        children: [
                            {
                                title: "Processing Near Memory (PNM)",
                                content: ["Compute logic is placed on the same chip package or stack/die as memory.", "High bandwidth."]
                            },
                            {
                                title: "Processing Using Memory (PUM)",
                                content: ["Computation is performed inside the memory arrays/cells themselves using analog properties."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "V. 3D Integrated Circuits (3D ICs)",
                groups: [
                    {
                        cards: [
                            {
                                title: "Definition",
                                content: [
                                    "3D ICs are semiconductor devices where active component layers are stacked vertically and interconnected, acting as a single, highly integrated system.",
                                    "This technique is critical for miniaturization and performance scaling."
                                ]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Key Enabling Technologies",
                            content: ["Critical techniques for 3D stacking."]
                        },
                        children: [
                            {
                                title: "Through-Silicon Vias (TSVs)",
                                content: [
                                    "Vertical electrical connections passing through the silicon die, providing high-density, low-latency communication paths between stacked layers.",
                                    "Far superior to traditional wire-bonds."
                                ]
                            },
                            {
                                title: "Heterogeneous Integration",
                                content: [
                                    "Stacking diverse components (logic, memory, sensors) fabricated on their optimal process nodes.",
                                    "Example: High-Bandwidth Memory (HBM)."
                                ]
                            },
                            {
                                title: "Wafer Bonding Techniques",
                                content: [
                                    "Advanced processes (Wafer-on-wafer, Die-on-wafer, Hybrid bonding) used to physically join the stacked semiconductor layers with high precision."
                                ]
                            }
                        ]
                    },
                    {
                        cards: [
                            {
                                title: "Challenges in Implementation",
                                content: [
                                    "<span style='color: #4ade80;'>Thermal Management</span>: The dense vertical stacking creates 'hotspots' that are difficult to dissipate.",
                                    "Other challenges: Complex 3D-aware design tools, lower yield, testing difficulties, and higher cost."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "VI. Optical and Photonic Computing",
                groups: [
                    {
                        cards: [
                            {
                                title: "Definition",
                                content: [
                                    "This revolutionary field uses photons (light) instead of electrons for data processing, storage, and communication, promising to eliminate the electrical bottleneck entirely."
                                ]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Core Components",
                            content: ["Components of Light-Based Processing."]
                        },
                        children: [
                            {
                                title: "Lasers & Waveguides",
                                content: ["Lasers and optical waveguides to guide light across the chip."]
                            },
                            {
                                title: "Modulators & Resonators",
                                content: ["To encode data onto the light signal."]
                            },
                            {
                                title: "Optical Logic Gates",
                                content: ["All-optical gates (AND, OR, NOT) for true photon-based computation."]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Advantages",
                            content: ["Speed, Parallelism, and Efficiency."]
                        },
                        children: [
                            {
                                title: "Unprecedented Speed",
                                content: ["Data transfer occurs at the speed of light.", "Massive bandwidth via wavelength-division multiplexing (WDM)."]
                            },
                            {
                                title: "Massive Parallelism",
                                content: ["Simultaneous spatial operations, especially matrix multiplications crucial for AI."]
                            },
                            {
                                title: "Energy Efficiency",
                                content: ["Minimal heat.", "Significantly less power for data transmission than electrical counterparts."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "VII. Current Trends",
                groups: [
                    {
                        cards: [
                            {
                                title: "Current Trends in Advanced Architecture",
                                content: [
                                    "<span style='color: #4ade80;'>AI and Machine Learning Focus</span>: Development of custom accelerators like TPUs and NPUs, and the rise of neuromorphic computing.",
                                    "<span style='color: #4ade80;'>Chiplet-Based Design</span>: Modular approach using standardized interconnects (e.g., UCIe) for flexibility and cost efficiency.",
                                    "<span style='color: #4ade80;'>Near-Memory Computing (PIM)</span>: Commercialization efforts driven by industry standards like Compute Express Link (CXL) for memory pooling.",
                                    "<span style='color: #4ade80;'>Domain-Specific Architectures (DSAs)</span>: Creating application-specific accelerators (crypto, video, networking) optimized for single tasks.",
                                    "<span style='color: #4ade80;'>Advanced Packaging</span>: Utilizing 2.5D interposers and co-packaged optics (CPO) to maximize density and bandwidth.",
                                    "<span style='color: #4ade80;'>Sustainable Computing</span>: Integrating low-power design, energy harvesting, and carbon-aware operational models.",
                                    "<span style='color: #4ade80;'>Security-First Architectures</span>: Incorporating hardware-based security features, confidential computing enclaves, and post-quantum acceleration.",
                                    "<span style='color: #4ade80;'>Edge and Distributed Computing</span>: Specialized processors for Edge AI and decentralized processing frameworks."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "VIII. Comparative Summary",
                groups: [
                    {
                        cards: [
                            {
                                title: "Heterogeneous Computing",
                                content: [
                                    "Goal: Task-optimized processing.",
                                    "Key Benefit: Performance and energy efficiency across mixed workloads.",
                                    "Main Challenge: Programming complexity and scheduling across diverse processors."
                                ]
                            },
                            {
                                title: "Reconfigurable (FPGA)",
                                content: [
                                    "Goal: Hardware flexibility and customization.",
                                    "Key Benefit: Adaptability and high-throughput spatial parallelism.",
                                    "Main Challenge: Design complexity (requires HDL expertise)."
                                ]
                            },
                            {
                                title: "Memory-Centric",
                                content: [
                                    "Goal: Reduce energy-intensive data movement.",
                                    "Key Benefit: High bandwidth and significant energy reduction.",
                                    "Main Challenge: Requires a major software paradigm shift and new programming models."
                                ]
                            },
                            {
                                title: "3D ICs",
                                content: [
                                    "Goal: Vertical integration and miniaturization.",
                                    "Key Benefit: Small footprint and high performance via short interconnects.",
                                    "Main Challenge: Severe thermal management issues (hotspots)."
                                ]
                            },
                            {
                                title: "Optical/Photonic",
                                content: [
                                    "Goal: Light-based data transport and processing.",
                                    "Key Benefit: Unmatched speed, bandwidth, and energy efficiency.",
                                    "Main Challenge: Miniaturization and high fabrication costs."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "IX. Key Takeaways and Outlook",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Evolution Path of Computing",
                            content: ["From General to Domain-Specific."]
                        },
                        children: [
                            {
                                title: "1. Homogeneous",
                                content: ["Traditional multi-core CPUs."]
                            },
                            {
                                title: "2. Heterogeneous",
                                content: ["CPU + GPU + FPGA collaboration."]
                            },
                            {
                                title: "3. Specialized",
                                content: ["PIM, 3D ICs, Optical components."]
                            },
                            {
                                title: "4. Domain-Specific",
                                content: ["Custom accelerators (DSAs) optimized for specific applications (AI, video)."]
                            }
                        ]
                    },
                    {
                        cards: [
                            {
                                title: "Future Direction: Convergence and Modularity",
                                content: [
                                    "The future lies in the integration and convergence of these disparate technologies into cohesive, modular systems."
                                ]
                            },
                            {
                                title: "Key Drivers",
                                content: [
                                    "<span style='color: #4ade80;'>Composability</span>: Systems built from interchangeable chiplets, favoring modularity.",
                                    "<span style='color: #4ade80;'>Hybrid Integration</span>: Heterogeneous chiplets housed in advanced 3D packages with optical interconnects.",
                                    "<span style='color: #4ade80;'>Optimization</span>: Prioritization of energy efficiency, AI acceleration, and high memory bandwidth."
                                ]
                            }
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
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Semiconductors",
                            content: ["Materials acting as switches (Transistors)."]
                        },
                        children: [
                            {
                                title: "5nm Node",
                                content: ["FinFET.", "High efficiency."]
                            },
                            {
                                title: "3nm Node",
                                content: ["GAAFET (Gate-All-Around).", "Max control."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Workflow & Tools",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Workflow Stages",
                            content: ["Spec -> Synthesis -> Sim -> Layout."]
                        },
                        children: [
                            {
                                title: "Common EDA Tools",
                                content: ["Cadence", "Synopsys", "Vivado."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "AI-Assisted Optimization",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "AI-Assisted Architecture",
                            content: ["Using AI to design better chips.", "DSE & RL."]
                        },
                        children: [
                            {
                                title: "Importance",
                                content: ["Speed up design.", "Find better trade-offs."]
                            },
                            {
                                title: "Challenges",
                                content: ["Interpretability (Black Box).", "Overfitting."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Ethical & Security Issues",
                groups: [
                    {
                        cards: [
                            {
                                title: "Ethical and Security Issues in Hardware Design",
                                content: [
                                    "Security: Trojans, Backdoors.",
                                    "Ethical: Surveillance, Military use."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Open Hardware",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Open Hardware Initiative",
                            content: ["Transparent and accessible designs."]
                        },
                        children: [
                            {
                                title: "RISC-V",
                                content: ["Open-standard ISA.", "Free & Modular."]
                            },
                            {
                                title: "OpenCores",
                                content: ["Repository for open designs."]
                            }
                        ]
                    },
                    {
                        cards: [
                            {
                                title: "EDA (Electronic Design Automation)",
                                content: ["Software tools for chip design."]
                            }
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
                groups: [
                    {
                        // General Info
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
                                    "CPU: High core counts, large L3 caches.",
                                    "RAM: Massive capacity (1TB+) DDR5/HBM.",
                                    "NIC: 25G-400G with RDMA.",
                                    "Storage: NVMe SSDs."
                                ]
                            }
                        ]
                    },
                    {
                        // Scaling Tree
                        isTree: true,
                        root: {
                            title: "Scaling Models",
                            content: ["Strategies for increasing capacity."]
                        },
                        children: [
                            {
                                title: "Scale-Up (Vertical)",
                                content: ["Increase single server capacity.", "Pros: Simple.", "Cons: Expensive, Limits."]
                            },
                            {
                                title: "Scale-Out (Horizontal)",
                                content: ["Add more servers.", "Pros: Limitless scale.", "Cons: Complex management."]
                            }
                        ]
                    },
                    {
                        // Efficiency
                        cards: [
                            {
                                title: "PUE (Power Usage Effectiveness)",
                                content: [
                                    "Metric: Total Energy / IT Energy.",
                                    "Ideal: 1.0 (All power to compute).",
                                    "Typical: 1.2 - 1.6."
                                ]
                            }
                        ]
                    },
                    {
                        // Hyper-scale Tree
                        isTree: true,
                        root: {
                            title: "Hyper-scale Architecture",
                            content: ["Datacenters by Google/Amazon housing millions of servers."]
                        },
                        children: [
                            {
                                title: "Disaggregation",
                                content: ["Separating compute, storage, networking.", "Benefit: Dynamic allocation."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "II. Blockchain Hardware",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Blockchain Hardware Implementations",
                            content: [
                                "Specialized ICs for hashing (SHA-256).",
                                "Metric: Hash/Second per Watt."
                            ]
                        },
                        children: [
                            {
                                title: "ASIC Architecture",
                                content: [
                                    "Application-Specific ICs.",
                                    "Optimized pipelines, No OS overhead."
                                ]
                            },
                            {
                                title: "Transaction Processing",
                                content: [
                                    "Mining: Finding hash below target.",
                                    "Consensus: Proof-of-Work."
                                ]
                            }
                        ]
                    },
                    {
                        // Thermal Linked to ASIC (As a separate group or card, but logically linked)
                        // Grouping with single card for visual separation
                        cards: [
                            {
                                title: "Thermal & Power Constraints",
                                content: [
                                    "Challenge: High density = Heat.",
                                    "Solution: Liquid cooling.",
                                    "Impact: Global energy use."
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "III. Real-Time & Embedded",
                groups: [
                    {
                        isTree: true,
                        root: {
                            title: "Embedded System",
                            content: ["Specialized system for dedicated function.", "Constraints: High Reliability, Low Power."]
                        },
                        children: [
                            {
                                title: "Microcontroller (MCU)",
                                content: ["Single-chip (CPU+RAM+Peripherals).", "Low cost/power."]
                            },
                            {
                                title: "Real-Time Requirements",
                                content: ["Deadlines.", "Hard: Fatal if missed.", "Soft: Degraded qual."]
                            }
                        ]
                    },
                    {
                        cards: [
                            {
                                title: "Interrupts & Predictability",
                                content: ["Pause execution for event.", "Latency must be deterministic."]
                            }
                        ]
                    },
                    {
                        // Applications Tree
                        isTree: true,
                        root: {
                            title: "Applications",
                            content: ["Deployment Scenarios"]
                        },
                        children: [
                            {
                                title: "Automotive ECUs",
                                content: ["ASIL-D Safety.", "Dual-core lockstep."]
                            },
                            {
                                title: "Industrial Control (PLC)",
                                content: ["Manufacturing.", "EtherCAT Fieldbus."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "IV. HPC Architecture",
                groups: [
                    {
                        cards: [
                            {
                                title: "High-Performance Computing (HPC)",
                                content: ["Parallel processing on Supercomputers.", "Metric: FLOPS."]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Parallel Processing Models",
                            content: ["Execution Strategies"]
                        },
                        children: [
                            {
                                title: "SIMD",
                                content: ["Single Instruction, Multiple Data.", "Vector units."]
                            },
                            {
                                title: "MIMD",
                                content: ["Multiple Instruction, Multiple Data.", "Clusters."]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Interconnect Networks",
                            content: ["Need: Low-latency, High-bandwidth."]
                        },
                        children: [
                            {
                                title: "InfiniBand",
                                content: ["Switched fabric with Fat-Tree topology."]
                            }
                        ]
                    },
                    {
                        cards: [
                            {
                                title: "Cluster Architecture",
                                content: ["Nodes (Compute/Service).", "Scheduler (Slurm)."]
                            },
                            {
                                title: "Memory Hierarchy in HPC",
                                content: ["GPU HBM", "Shared Memory", "Distributed MPI."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "V. Virtualization & Cloud",
                groups: [
                    {
                        cards: [
                            {
                                title: "Hardware Virtualization",
                                content: ["Software representation of hardware.", "Hypervisor manages VMs."]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Hypervisor Types",
                            content: ["Categories"]
                        },
                        children: [
                            {
                                title: "Type 1 (Bare-Metal)",
                                content: ["Runs on Hardware.", "ESXi/Hyper-V.", "Datacenters."]
                            },
                            {
                                title: "Type 2 (Hosted)",
                                content: ["Runs on OS.", "VirtualBox.", "Testing."]
                            }
                        ]
                    },
                    {
                        cards: [
                            {
                                title: "CPU Virtualization",
                                content: ["Hardware-Assisted (VT-x).", "Root Mode."]
                            },
                            {
                                title: "I/O & Memory Virtualization",
                                content: ["Nested Page Tables.", "SR-IOV (Pass-Through)."]
                            },
                            {
                                title: "Cloud Infrastructure",
                                content: ["Resource Pooling (IaaS)."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "VI. IoT Architecture",
                groups: [
                    {
                        cards: [
                            {
                                title: "IoT Architecture",
                                content: ["Max battery, Min cost.", "Energy Harvesting."]
                            }
                        ]
                    },
                    {
                        isTree: true,
                        root: {
                            title: "Distributed Compute",
                            content: ["Location Strategies"]
                        },
                        children: [
                            {
                                title: "Cloud Processing",
                                content: ["Datacenter.", "High Latency."]
                            },
                            {
                                title: "Edge Processing",
                                content: ["Device/Gateway.", "Low Latency/Privacy."]
                            }
                        ]
                    },
                    {
                        cards: [
                            {
                                title: "Low-Power Cores",
                                content: ["ARM Cortex-M.", "Sleep modes & DVFS."]
                            },
                            {
                                title: "Sensor Integration",
                                content: ["ADCs & DSPs."]
                            },
                            {
                                title: "Hardware Security",
                                content: ["ARM TrustZone.", "Secure vs Normal World."]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Summary",
                cards: [
                    {
                        title: "Synthesis",
                        content: [
                            "Future: Deeply integrated heterogeneity.",
                            "Efficiency: Performance per Watt is key."
                        ]
                    },
                    {
                        title: "Module Summary",
                        content: [
                            "Datacenters: Throughput & PUE.",
                            "Blockchain: ASIC pipelines.",
                            "Embedded: Real-Time & Low Power.",
                            "HPC: Parallelism & InfiniBand.",
                            "Cloud: Virtualization.",
                            "IoT: Security & Edge."
                        ]
                    }
                ]
            }
        ]
    }
];
