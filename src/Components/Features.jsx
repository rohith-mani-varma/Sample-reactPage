import { FaServer, FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";

export default function Features(){
    return(
        <section id="features" className="relative w-screen bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-black text-center mb-12 relative inline-block after:content-[''] after:absolute after:left-[25%] after:bottom-[-8px] after:w-[50%] after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600">
                    KEY FEATURES
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <li className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600">
                            <FaServer size={36} />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">High-Performance GPUs</h4>
                        <p className="text-gray-600">Latest NVIDIA A100 and H100 GPUs optimized for deep learning, with high memory bandwidth and CUDA cores.</p>
                    </li>
                    <li className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600">
                            <FaChartLine size={36} />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Scalable Infrastructure</h4>
                        <p className="text-gray-600">Easily scale your workloads from single GPU instances to multi-node clusters with high-speed NVLink interconnects.</p>
                    </li>
                    <li className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600">
                            <FaShieldAlt size={36} />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Security & Reliability</h4>
                        <p className="text-gray-600">Enterprise-grade security with 99.9% uptime SLA and redundant systems to keep your training jobs running smoothly.</p>
                    </li>
                    <li className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full mb-4 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600">
                            <FaClock size={36} />
                        </div>
                        <h4 className="text-xl font-semibold mb-2">24/7 Support & Monitoring</h4>
                        <p className="text-gray-600">Round-the-clock technical support and performance monitoring to optimize your AI workloads and resolve issues instantly.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
