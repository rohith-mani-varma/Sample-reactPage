export default function Contact(){
    return (
        <section className="bg-white text-black py-12">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl font-bold text-center">GET IN TOUCH</h2>
                <div className="w-12 h-1 bg-blue-500 mx-auto mt-2"></div>
                <p className="text-center text-gray-600 mt-4">
                    Please fill out the form below to send us an email and we will get
                    back to you as soon as possible.
                </p>

                <div className="mt-8 flex flex-col lg:flex-row gap-8">
                    {/* Contact Form */}
                    <div className="flex-1">
                        <form className="bg-gray-50 p-6 rounded-lg shadow-lg">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="p-3 border border-gray-300 rounded-md w-full text-gray-900"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="p-3 border border-gray-300 rounded-md w-full text-gray-900"
                                />
                            </div>
                            <textarea
                                placeholder="Message"
                                className="mt-4 p-3 border border-gray-300 rounded-md w-full text-gray-900 h-32"
                            ></textarea>
                            <button
                                type="submit"
                                className="mt-4 border-2 border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition"
                            >
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex-1">
                        <div className="text-gray-700">
                            <h3 className="text-xl font-semibold">Contact Info</h3>
                            <p className="mt-4">
                                📍 Address <br />
                                4321 California St, San Francisco, CA 12345
                            </p>
                            <p className="mt-4">📞 Phone <br /> +1 123 456 1234</p>
                            <p className="mt-4">✉️ Email <br /> info@company.com</p>
                        </div>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="mt-12 flex justify-center gap-6">
                    <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                        F
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                        T
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
                        YT
                    </a>
                </div>
            </div>
        </section>
    );
};
