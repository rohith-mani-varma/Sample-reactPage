import G1 from "/G1.jpg";
import G2 from "/G2.jpg";
import G3 from "/G3.jpg";
import G4 from "/G4.jpg";
import G5 from "/G5.jpg";
import G6 from "/G6.jpeg";

export default function Gallery() {
  const images = [
    G1,
    G2,
    G3,
    G4,
    G5,
    G6
  ];

  return (
    <section id="gallery" className="text-center py-12 bg-white">
      <h2 className="text-4xl font-bold text-black relative inline-block after:content-[''] after:absolute after:left-[10%] after:bottom-[-8px] after:w-[80%] after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 mb-12">
        OUR INFRASTRUCTURE
      </h2>
      <p className="text-gray-700 mt-2 max-w-3xl mx-auto">
        Explore our state-of-the-art data centers and GPU clusters powering the world's most advanced AI models. TensorFleet's infrastructure is designed for maximum performance, reliability, and scalability.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md group">
            <img
              src={src}
              alt={`TensorFleet Infrastructure ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

