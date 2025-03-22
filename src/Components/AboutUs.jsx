import img from "/Aboutimg.jpeg";
export default function AboutUs(){

    return (
        <>
            <div className="container h-auto p-10 bg-white">
                <h2 className="font-bold text-4xl text-black relative inline-block after:content-[''] after:absolute after:left-[10%] after:bottom-[-8px] after:w-[80%] after:h-1 after:bg-gradient-to-r after:from-sky-400 after:to-blue-600 mb-12">About US</h2>
                <div className="flex flex-col md:flex-row gap-8 mt-6">
                    <div className="md:w-1/2">
                        <img src={img} alt="About us" className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
                        <p className="text-black mb-4">
                            This is text about our company. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl 
                            nisl sit amet nisl.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-4">Why Choose Us?</h3>
                        <ul className="space-y-3 text-black">
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-1 mr-3">
                                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>Experienced team with over 10 years in the industry</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-1 mr-3">
                                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>Customer satisfaction is our top priority</span>
                            </li>
                            <li className="flex items-start">
                                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 p-1 mr-3">
                                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>Innovative solutions tailored to your needs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}