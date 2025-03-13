export const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Plant Delivery',
            description: 'Our plant delivery service ensures that you receive fresh and vibrant plants right at your doorstep. Carefully packed and delivered with care, we make sure your plants arrive in perfect condition, ready to brighten up your space.',
            icon: '🚚'
        },
        {
            id: 2,
            title: 'Plant Care Tips',
            description: 'We provide expert guidance to help you care for your plants. From watering schedules to sunlight needs, our detailed tips ensure that your plants remain healthy and thriving throughout the year.',
            icon: '🌱'
        },
        {
            id: 3,
            title: 'Custom Planters',
            description: 'Create a unique and personalized touch for your plants with our custom planter designs. Choose from a variety of materials, colors, and sizes to match your interior and style preferences.',
            icon: '🪴'
        },
        {
            id: 4,
            title: 'Garden Setup',
            description: 'Transform your outdoor space into a green paradise with our professional garden setup services. From selecting the right plants to designing the layout, we handle every detail to create a peaceful and refreshing garden.',
            icon: '🏡'
        },
        {
            id: 5,
            title: 'Plant Health Check',
            description: 'Our plant health experts provide thorough check-ups to diagnose and treat common plant issues like pests, yellowing leaves, and root rot. We help your plants recover and flourish.',
            icon: '🩺'
        },
        {
            id: 6,
            title: 'Indoor Plant Styling',
            description: 'Enhance the beauty of your indoor spaces with our plant styling services. We help you select the right plants and arrange them to create a harmonious and calming environment.',
            icon: '🌸'
        },
        {
            id: 7,
            title: 'Eco-Friendly Gardening',
            description: 'We use sustainable practices and eco-friendly products to help you build a green and eco-conscious garden. Our solutions are safe for the environment and your family.',
            icon: '🌍'
        },
        {
            id: 8,
            title: 'Seasonal Plant Rotation',
            description: 'Keep your garden fresh and colorful all year round with our seasonal plant rotation service. We help you choose the right plants for each season to maintain a vibrant and lively garden.',
            icon: '🍃'
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Title */}
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    🌿 Our Premium Plant Services 🌿
                </h2>

                {/* Description */}
                <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-14">
                    We are passionate about bringing nature closer to you. Our expert services are designed to make your plant journey easier and more enjoyable. From professional care to custom designs, we handle it all so you can enjoy the beauty of plants without the hassle.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div 
                            key={service.id}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transition-transform transition-colors duration-300 animate-fadeIn"
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-6">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
