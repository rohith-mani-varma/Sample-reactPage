import DataCenterImg from "/AdobeStock_87909563_Preview.jpeg";

export default function HeroSection(){
    return(
        <>
        <div className="relative">
            <img src={DataCenterImg} alt="datacenterimg" className="w-full h-screen object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 lg:px-8 xl:px-16 bg-opacity-50">
                <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white drop-shadow-lg text-center mb-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">TensorFleet</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white drop-shadow-lg text-center">
                    Supercharge Your AI Model Training
                </h2>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-white mt-4 max-w-2xl text-center drop-shadow-xl opacity-100 font-medium tracking-wide shadow-white text-shadow-lg glow">
                    High-performance computing infrastructure optimized for AI and LLM model training. Our enterprise-grade GPU clusters deliver unmatched performance, scalability, and reliability for your most demanding deep learning workloads.
                </p>
                <div className="mt-6">
                    <a href="#" className="uppercase text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors duration-300 rounded-3xl px-6 py-3 lg:px-8 lg:py-4 xl:px-10 xl:py-5 font-medium">Get Started</a>
                </div>
            </div>
        </div>
        </>
    );
}