
export default function Gallery (){
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <section className="text-center py-12 bg-white">
      <h2 className="text-3xl font-bold text-gray-900">
        GALLERY
        <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
      </h2>
      <p className="text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus
        leonec.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </section>
  );
};

