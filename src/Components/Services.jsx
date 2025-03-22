import { FaWordpress, FaShoppingCart, FaCloudDownloadAlt, FaLanguage, FaPlane, FaChartPie } from "react-icons/fa";

const services = [
    { icon: <FaWordpress size={40} />, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at." },
    { icon: <FaShoppingCart size={40} />, title: "Consectetur adipiscing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at." },
    { icon: <FaCloudDownloadAlt size={40} />, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at." },
    { icon: <FaLanguage size={40} />, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at." },
    { icon: <FaPlane size={40} />, title: "Consectetur adipiscing", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at." },
    { icon: <FaChartPie size={40} />, title: "Lorem ipsum dolor", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at." }
];

export default function Services (){
    return (
        <section className="bg-white py-16">
            <div className="text-center mb-10 text-black">
                <h2 className="text-4xl font-bold relative inline-block pb-2 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:bottom-0 after:left-0">OUR SERVICES</h2>
                <p className="mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col items-center text-center text-black bg-blue-500 p-6 rounded-2xl shadow-lg">
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
