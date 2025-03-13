export const About = () => {
    return (
        <section className="relative bg-gray-900 text-white py-20">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url('about-bg.jpg')` }}
            ></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                    About Us
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl max-w-3xl mb-8 leading-relaxed text-gray-300">
                    Welcome to our green sanctuary! We believe in the power of plants to transform any space into a calming and vibrant oasis. Our mission is to make nature accessible to everyone by providing high-quality plants and expert care advice.  
                    <br /><br />
                    From lush indoor plants to elegant outdoor greenery, we handpick every plant with love and care. Whether you’re a seasoned plant parent or just starting your plant journey, we are here to support you with everything you need.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {/* Highlight 1 */}
                    <div className="flex flex-col items-center">
                        <div className="text-5xl text-green-400 mb-4">🌿</div>
                        <h3 className="text-2xl font-semibold mb-2">
                            100+ Plant Varieties
                        </h3>
                        <p className="text-gray-400 text-center">
                            Discover a diverse range of plants suited for any home or office space.
                        </p>
                    </div>

                    {/* Highlight 2 */}
                    <div className="flex flex-col items-center">
                        <div className="text-5xl text-green-400 mb-4">🌍</div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Eco-Friendly Practices
                        </h3>
                        <p className="text-gray-400 text-center">
                            We use sustainable methods to minimize environmental impact.
                        </p>
                    </div>

                    {/* Highlight 3 */}
                    <div className="flex flex-col items-center">
                        <div className="text-5xl text-green-400 mb-4">🪴</div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Expert Care Tips
                        </h3>
                        <p className="text-gray-400 text-center">
                            Get professional advice to keep your plants healthy and thriving.
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <a 
                    href="#shop"
                    className="mt-12 bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg"
                >
                    Explore Our Collection
                </a>
            </div>
        </section>
    );
};
