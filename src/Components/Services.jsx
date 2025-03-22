import { FaServer, FaNetworkWired, FaDatabase, FaLaptopCode, FaLock, FaChartLine } from "react-icons/fa";

const services = [
    { 
        icon: <FaServer size={40} />, 
        title: "GPU Cloud Instances", 
        description: "Dedicated NVIDIA A100 and H100 GPU instances optimized for maximum performance with your AI workloads. Available on-demand with flexible pricing." 
    },
    { 
        icon: <FaNetworkWired size={40} />, 
        title: "Distributed Training", 
        description: "Seamlessly scale to multi-node training with high-bandwidth, low-latency interconnects optimized for parallel computing and model distribution." 
    },
    { 
        icon: <FaDatabase size={40} />, 
        title: "Data Pipeline Optimization", 
        description: "Specialized storage solutions and data loading optimizations to ensure your GPUs are never idle waiting for data during training runs." 
    },
    { 
        icon: <FaLaptopCode size={40} />, 
        title: "MLOps Platform", 
        description: "End-to-end infrastructure for experiment tracking, model versioning, and seamless deployment to production environments." 
    },
    { 
        icon: <FaLock size={40} />, 
        title: "Secure Multi-tenancy", 
        description: "Enterprise-grade security with isolated compute environments, encrypted data at rest and in transit, and compliance with major security standards." 
    },
    { 
        icon: <FaChartLine size={40} />, 
        title: "Performance Analytics", 
        description: "Real-time monitoring and optimization recommendations to maximize GPU utilization, reduce training time, and minimize costs." 
    }
];

export default function Services (){
    return (
        <section id="services" className="bg-white py-16">
            <div className="text-center mb-10 text-black">
                <h2 className="text-4xl font-bold relative inline-block pb-2 after:content-[''] after:absolute after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:bottom-0 after:left-0">OUR SERVICES</h2>
                <p className="mt-2 text-lg">High-performance infrastructure and services designed specifically for AI and deep learning workloads.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center text-white bg-gradient-to-br from-blue-600 to-purple-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="w-20 h-20 flex items-center justify-center bg-white bg-opacity-20 rounded-full mb-4 text-black">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-sm opacity-90">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
