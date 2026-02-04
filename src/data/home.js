import { BarChart3, FlaskConical, Globe2, Layers, Leaf, Zap } from "lucide-react";

export const homeContent = {
    hero: {
        headline: "Innovating Nanomaterials to Transform Industrial Efficiency and Reduce Carbon Emissions",
        subheadline: "Grafillium is a deeptech innovation company focused on breakthrough nanomaterial additives that significantly enhance efficiency across industrial systems. Our proprietary solutions improve combustion and performance in fuels such as coal, diesel, petrol, and engine oil, elevate coatings and paints, enable smarter bitumen performance, and support industrial water recycling — all while lowering carbon emissions and environmental impact.",
        badges: [
            "10-15% Coal Savings",
            "Double-Digit Efficiency",
            "Zero Infrastructure Changes"
        ],
        ctas: [
            { label: "Start a Pilot Trial", primary: true, link: "/contact" },
            { label: "Our Innovation Portfolio", primary: false, link: "/products" }
        ],
        metrics: [
            { label: "Coal Savings", value: "15.4M", suffix: "tons", sub: "National Scale Impact" },
            { label: "CO₂ Reduction", value: "49M+", suffix: "tons", sub: "Annual Avoidance" },
            { label: "Economic Value", value: "₹67k", suffix: "crore", sub: "Forex Savings" },
            { label: "Efficiency", value: "15%", suffix: "Gain", sub: "Optimized Operations" }
        ]
    },
    portfolio: [
        {
            id: "thermal",
            title: "Thermal Power Plant Optimization",
            tag: "Active Deployment",
            description: "Enhancing efficiency and cutting emissions in thermal plants. 3-8% average savings (up to ~15% optimized).",
            link: "/industries/thermal-power",
            icon: Zap,
            metrics: [
                { value: "40M", label: "Tonnes/yr", sub: "Annual Savings" },
                { value: "100M+", label: "Tonnes", sub: "CO₂ Avoided" },
                { value: "Significant", label: "Impact", sub: "Forex Savings" }
            ],
            outcomes: [
                "Coal Savings: 3-8% (typical) | 10-15% (optimized)",
                "CO₂ Reduction: Proportional to fuel saved",
                "PM/Soot Reduction: 20-35%"
            ]
        },
        {
            id: "transport",
            title: "Transport & Logistics",
            tag: "Active Deployment",
            description: "Enabling cleaner fuel use and fleet efficiency improvements, with ~20% fuel economy gains and cutting emissions without hardware changes.",
            link: "/industries/transport-logistics",
            icon: FlaskConical,
            metrics: [
                { value: "₹1.6L", label: "Crore", sub: "Annual Savings" },
                { value: "49M", label: "Tonnes", sub: "CO₂ Avoided" },
                { value: "$9B", label: "Billion", sub: "Forex Impact" }
            ],
            outcomes: [
                "Fuel Economy: 15-25% combined savings",
                "Wear Reduction: 40% extended engine life",
                "Emission Reductions: 40-50% PM"
            ]
        },
        {
            id: "industrial",
            title: "Industrial & Heavy Industry",
            tag: "Active Deployment",
            description: "Optimize energy-intensive operations across cement, steel, manufacturing, and heavy industry.",
            link: "/industries/industrial-heavy",
            icon: Layers,
            metrics: [
                { value: "15-25%", label: "Savings", sub: "Annual Energy" },
                { value: "Significant", label: "Reduction", sub: "CO₂ Avoided" },
                { value: "High", label: "Value", sub: "Forex Impact" }
            ],
            outcomes: [
                "Energy Cost Reduction: 5-15%",
                "Genset Fuel Savings: 15-25%",
                "Emission Compliance: PM, NOₓ, SO₂ reduction"
            ]
        }
    ],
    vision: "To deliver double-digit efficiency improvements in legacy fuel and industrial systems, while reducing the global carbon footprint by 10-15% in optimized deployments, thereby bridging the gap between today's infrastructure and tomorrow's clean economy.",
    strategicImperative: {
        title: "What We Do",
        subtitle: "Breakthrough nanomaterial additives for industrial transformation",
        intro: "We innovate and deliver nanomaterial additives that enhance fuel efficiency for coal, diesel, petrol, and engine oil systems, boost performance of protective and industrial coatings, improve process efficiency in bitumen applications, and enable advanced industrial water treatment and recycling.",
        points: [
            {
                title: "Energy & Combustion",
                description: "Deep expertise in nanotechnology and materials science applied to fuel additives for coal, diesel, petrol, and engine oils, improving energy conversion and reducing friction."
            },
            {
                title: "Industrial Fluids & Bitumen",
                description: "Enhancing the performance of industrial fluids, coatings, and construction materials like bitumen to drive economic and environmental value simultaneously."
            },
            {
                title: "Resource Recovery",
                description: "Enabling advanced industrial water recycling and treatment systems that support reuse and recovery, reducing the overall environmental footprint."
            }
        ]
    },
    updates: [
        { date: "Jan 2026", text: "Coalorix: Field trials scheduled with partner thermal plants." },
        { date: "Jan 2026", text: "Ignitron D: Pilot results confirm 18-22% fuel economy gains." },
        { date: "Jan 2026", text: "Lubritron: Expansion to heavy commercial vehicle fleets." }
    ],
    challenges: [
        {
            id: 1,
            title: "Coal Consumption",
            stat: "1.3BMT",
            desc: "Burned annually in India",
            icon: "Flame"
        },
        {
            id: 2,
            title: "Diesel Import Bill",
            stat: "$132B",
            desc: "Annual expenditure",
            icon: "DollarSign"
        },
        {
            id: 3,
            title: "Friction Loss",
            stat: "10-12%",
            desc: "Fuel energy wasted",
            icon: "Activity"
        },
        {
            id: 4,
            title: "Water Waste",
            stat: "Billions",
            desc: "Liters lost to evaporation",
            icon: "Droplets"
        },
        {
            id: 5,
            title: "Road Lifespan",
            stat: "-50%",
            desc: "Due to poor bitumen",
            icon: "AlertTriangle"
        },
        {
            id: 6,
            title: "Carbon Emissions",
            stat: "Rising",
            desc: "Industrial footprint",
            icon: "CloudFog"
        }
    ]
};
