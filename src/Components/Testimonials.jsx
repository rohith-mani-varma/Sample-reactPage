import U1 from "/users/u1.jpeg";
import U2 from "/users/u2.jpeg";
import U3 from "/users/u3.jpeg";
import U4 from "/users/u4.jpeg";
import U5 from "/users/u5.jpeg";
import U6 from "/users/u6.jpeg";

let testimonials = [
  {
    name: "Dr. Sarah Chen",
    title: "AI Research Lead, Stanford NLP Group",
    image: U4,
    text: "Training our 7B parameter language model used to take weeks on our in-house cluster. With TensorFleet, we completed the same training in just 4 days. The performance is remarkable, and the cost savings are significant."
  },
  {
    name: "Mike Johnson",
    title: "CTO, DeepLearn AI",
    image: U1,
    text: "As a startup, we couldn't afford to build our own GPU infrastructure. TensorFleet gave us access to enterprise-grade computing power at a fraction of the cost, helping us iterate faster and secure our Series A funding."
  },
  {
    name: "Priya Sharma",
    title: "ML Engineering Director, Visionary Systems",
    image: U5,
    text: "The distributed training capabilities of TensorFleet enabled us to scale our computer vision models to unprecedented sizes. Their technical support team is top-notch, helping us optimize our training pipelines for maximum efficiency."
  },
  {
    name: "David Lee",
    title: "Head of AI, MedTech Innovations",
    image: U2,
    text: "In healthcare AI, reliability and security are as important as raw performance. TensorFleet delivers on all fronts. Their isolated compute environments and compliance features helped us meet HIPAA requirements while accelerating our research."
  },
  {
    name: "Emma Rodriguez",
    title: "Computational Researcher, Quantum AI Lab",
    image: U6,
    text: "The performance analytics tools have been invaluable for optimizing our reinforcement learning models. We've reduced training costs by 42% while improving model convergence time. TensorFleet's infrastructure is simply unmatched."
  },
  {
    name: "Thomas Wright",
    title: "VP of Engineering, FinTech Solutions",
    image: U3,
    text: "Our risk assessment models require massive computing power during market hours and almost none overnight. TensorFleet's flexible scaling allowed us to match our computing resources to our actual needs, saving us thousands monthly."
  },
];

export default function Testimonials(){
return (
    <section id="testimonials" className="text-center py-12 bg-[#f5f7fa]">
        <h2 className="text-4xl font-bold text-black relative inline-block after:content-[''] after:absolute after:left-[10%] after:bottom-[-8px] after:w-[80%] after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 mb-12">
            CLIENT TESTIMONIALS
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            See what AI researchers, engineers, and companies are saying about their experience with TensorFleet's high-performance computing infrastructure.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                    <div className="flex items-center mb-4">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-blue-300"
                        />
                        <div className="ml-4 text-left">
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-blue-600">{testimonial.title}</p>
                        </div>
                    </div>
                    <p className="text-gray-700 italic text-left flex-grow">{testimonial.text}</p>
                    <div className="mt-4 flex justify-start">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
};