const testimonials = [
  {
    name: "John Doe",
    image: "/images/user1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasds commodo nibh ante facilisis bibendum dolor feugiat at."
  },
  {
    name: "Johnathan Doe",
    image: "/images/user2.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasds commodo nibh ante facilisis bibendum dolor feugiat at."
  },
  {
    name: "John Doe",
    image: "/images/user3.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasds commodo nibh ante facilisis bibendum dolor feugiat at."
  },
  {
    name: "Johnathan Doe",
    image: "/images/user4.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasds commodo nibh ante facilisis bibendum dolor feugiat at."
  },
  {
    name: "John Doe",
    image: "/images/user5.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasds commodo nibh ante facilisis bibendum dolor feugiat at."
  },
  {
    name: "Johnathan Doe",
    image: "/images/user6.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasds commodo nibh ante facilisis bibendum dolor feugiat at."
  },
];

const Testimonials = () => {
return (
    <section className="text-center py-12 bg-white">
        <h2 className="text-3xl font-bold text-gray-900">
            WHAT OUR CLIENTS SAY
            <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="flex items-start space-x-4 text-left">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-black italic">"{testimonial.text}"</p>
                        <p className="font-bold mt-2 text-black">- {testimonial.name}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
};

export default Testimonials;
