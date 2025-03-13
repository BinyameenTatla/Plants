export const Contact = () => {
    return (
        <section className="relative bg-gray-900 text-white py-20">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url('contact-bg.jpg')` }}
            ></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Have questions or need assistance? We're here to help you with all your plant needs. Reach out to us anytime!
                    </p>
                </div>

                {/* Form */}
                <div className="bg-gray-800 p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
                    <form>
                        {/* Name Field */}
                        <div className="mb-6">
                            <label className="block text-gray-400 mb-2" htmlFor="name">
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Enter your name" 
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-6">
                            <label className="block text-gray-400 mb-2" htmlFor="email">
                                Your Email
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Enter your email" 
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                                required
                            />
                        </div>

                        {/* Message Field */}
                        <div className="mb-6">
                            <label className="block text-gray-400 mb-2" htmlFor="message">
                                Your Message
                            </label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                placeholder="Write your message..." 
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 text-white"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button 
                                type="submit" 
                                className="bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
