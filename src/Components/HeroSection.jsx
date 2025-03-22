import DataCenterImg from "../../public/istockphoto-1350722246-1024x1024.jpg";
export default function HeroSection(){
    return(
        <>
        <div className="relative">
            <img src={DataCenterImg} alt="datacenterimg" className="w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-6">
                <h1 className="text-7xl font-bold text-white drop-shadow-lg">Leading AI compute provider</h1>
                <p className="text-sm text-white mt-4 max-w-2xl text-center drop-shadow-md opacity-90">
                    Delivering cutting-edge infrastructure solutions with high-performance computing capabilities for AI workloads. Our state-of-the-art data centers ensure reliability, scalability, and efficiency for your most demanding applications.
                </p>
                <div className="learn-more bg-pink-500 rounded-3xl mt-6 px-4 py-2">
                    <a href="#" className="uppercase">Learn more</a>
                </div>
            </div>
        </div>
        </>
    );
}