import first_img from "/first.jpg";
import high_performance_img from "/second.jpg";
import security_img from "/third.jpg";
import updates_img from "/fourth.jpeg";

export default function Features(){
    return(
            <>
                    <div className="container h-auto py-12 bg-white flex flex-col items-center">
                            <div className="content h-full w-full bg-[#e1e1e1] flex flex-col items-center pt-8 pb-10">
                                    <h2 className="text-4xl font-bold text-black relative inline-block after:content-[''] after:absolute after:left-[10%] after:bottom-[-8px] after:w-[80%] after:h-1 after:bg-gradient-to-r after:from-sky-400 after:to-blue-600 mb-12">FEATURES</h2>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
                                            <li className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                                                    <img src={first_img} alt="Responsive Design" className="w-32 h-32 mb-3 object-contain" />
                                                    <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
                                                    <p className="text-gray-600">Fully responsive layouts that work on any device, from phones to desktops.</p>
                                            </li>
                                            <li className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                                                    <img src={high_performance_img} alt="High Performance" className="w-32 h-32 mb-3 object-contain" />
                                                    <h4 className="text-xl font-semibold mb-2">High Performance</h4>
                                                    <p className="text-gray-600">Optimized for speed with minimal load times and smooth interactions.</p>
                                            </li>
                                            <li className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                                                    <img src={security_img} alt="Advanced Security" className="w-32 h-32 mb-3 object-contain" />
                                                    <h4 className="text-xl font-semibold mb-2">Advanced Security</h4>
                                                    <p className="text-gray-600">Built-in protection against common threats and vulnerabilities.</p>
                                            </li>
                                            <li className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
                                                    <img src={updates_img} alt="Regular Updates" className="w-32 h-32 mb-3 object-contain" />
                                                    <h4 className="text-xl font-semibold mb-2">Regular Updates</h4>
                                                    <p className="text-gray-600">Continuous improvement with regular feature updates and bug fixes.</p>
                                            </li>
                                    </ul>
                            </div>
                    </div>
            </>
    );
}
