import DataCenterImg from "/istockphoto-1350722246-1024x1024.jpg";
export default function HeroSection(){
    return(
        <>
        <div className="relative">
            <img src={DataCenterImg} alt="datacenterimg" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white drop-shadow-lg text-center">Leading AI compute provider</h1>
                <p className="text-sm md:text-base text-white mt-4 max-w-2xl text-center drop-shadow-md opacity-90">
                    Delivering cutting-edge infrastructure solutions with high-performance computing capabilities for AI workloads. Our state-of-the-art data centers ensure reliability, scalability, and efficiency for your most demanding applications.
                </p>
                <div className="mt-6">
                    <a href="#" className="uppercase text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-colors duration-300 rounded-3xl px-6 py-3 font-medium">Learn more</a>
                </div>
            </div>
        </div>
        </>
    );
}