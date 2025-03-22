export default function Contact(){
    return (
        <section id="contact" className="bg-[#f5f7fa] text-black py-12">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-black relative inline-block after:content-[''] after:absolute after:left-[10%] after:bottom-[-8px] after:w-[80%] after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 mb-12 text-center">
                    GET IN TOUCH
                </h2>
                <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
                    Have questions about our GPU infrastructure or want to discuss your AI training needs? 
                    Fill out the form below and our team of ML infrastructure experts will contact you within 24 hours.
                </p>

                <div className="mt-8 flex flex-col lg:flex-row gap-8">
                    
                    <div className="flex-1">
                        <form className="bg-white p-6 rounded-lg shadow-md">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                                />
                            </div>
                            <select className="mt-4 p-3 border border-gray-300 rounded-md w-full text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition">
                                <option value="">Select your interest</option>
                                <option value="gpu">GPU Cloud Instances</option>
                                <option value="distributed">Distributed Training</option>
                                <option value="mlops">MLOps Platform</option>
                                <option value="custom">Custom Solution</option>
                            </select>
                            <textarea
                                placeholder="Tell us about your AI infrastructure needs"
                                className="mt-4 p-3 border border-gray-300 rounded-md w-full text-gray-900 h-32 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                            ></textarea>
                            <button
                                type="submit"
                                className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition shadow-md"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                    <div className="flex-1">
                        <div className="bg-white p-6 rounded-lg shadow-md h-full">
                            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
                            <div className="mt-8 space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-full mr-4">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Office Location</h4>
                                        <p className="text-gray-600 mt-1">123 AI Campus, Palo Alto, CA 94301</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-full mr-4">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone Number</h4>
                                        <p className="text-gray-600 mt-1">+1 (650) 555-0123</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-full mr-4">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email Address</h4>
                                        <p className="text-gray-600 mt-1">contact@tensorfleet.ai</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <h4 className="font-medium text-gray-900">Operating Hours</h4>
                                <p className="text-gray-600 mt-1">Monday - Friday: 9AM - 6PM PST</p>
                                <p className="text-gray-600">24/7 Technical Support for Enterprise Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center gap-6">
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition shadow-md">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition shadow-md">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition shadow-md">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                    {/* <a href="#" className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition shadow-md">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" clipRule="evenodd" />
                        </svg>
                    </a> */}
                </div>
            </div>
        </section>
    );
};
