export const Hero = () => {
    return (
        <section className="relative bg-gray-900 text-white">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-top md:bg-center opacity-40"
                style={{
                    backgroundImage: `url('zxx.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>

            {/* Content */}
            <div className="relative container mx-auto px-6 lg:px-12 h-[80vh] flex flex-col justify-center items-center text-center">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Discover the Beauty of Plants
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl max-w-2xl mb-6">
                Bring nature closer to your home. 🌿
Explore our wide range of fresh, vibrant plants to refresh your space.
Create a calming, green oasis and lift your mood effortlessly.
                </p>

                {/* CTA Button */}
                <a 
                    href="#explore"
                    className="bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 px-8 rounded-full shadow-lg"
                >
                    Explore Now
                </a>
            </div>
        </section>
    );
};
