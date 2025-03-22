import img from "/Aboutimg.jpeg";
export default function AboutUs(){

    return (
        <section id="about">
            <div className="container h-auto p-10 bg-white">
                <h2 className="font-bold text-4xl text-black relative inline-block after:content-[''] after:absolute after:left-[10%] after:bottom-[-8px] after:w-[80%] after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 mb-12">About Us</h2>
                <div className="flex flex-col md:flex-row gap-8 mt-6">
                    <div className="md:w-1/2">
                        <img src={img} alt="About us" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
                        <p className="text-black mb-4">
                            Founded in 2021 by a team of AI researchers and cloud infrastructure experts, TensorFleet was born from a simple frustration: existing compute solutions weren't optimized for the demands of modern AI training workloads.
                        </p>
                        <p className="text-black mb-4">
                            We built the infrastructure we wished existed - high-performance GPU clusters with optimized networking, storage, and software stacks specifically designed for training large language models and deep learning systems.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-4">Why Choose Us?</h3>
                        <ul className="space-y-3 text-black">
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-1 mr-3">
                                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>Purpose-built infrastructure designed specifically for AI model training</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-1 mr-3">
                                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>Technical expertise from a team with backgrounds at NVIDIA, Google, and OpenAI</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 p-1 mr-3">
                                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>Transparent pricing with no hidden fees and cost optimization tools</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}