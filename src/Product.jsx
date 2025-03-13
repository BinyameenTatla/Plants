export const Product = () => {
    const products = [
        {
            id: 1,
            name: 'Fiddle Leaf Fig',
            description: 'A stunning indoor plant with large, glossy leaves.',
            price: '$45',
            image: 'q.jpeg'
        },
        {
            id: 2,
            name: 'Snake Plant',
            description: 'Easy to care for and improves air quality.',
            price: '$35',
            image: 'qq.avif'
        },
        {
            id: 3,
            name: 'Monstera Deliciosa',
            description: 'Tropical plant with unique, split leaves.',
            price: '$50',
            image: 'ww.jpg'
        },
        {
            id: 4,
            name: 'Peace Lily',
            description: 'Elegant white flowers that thrive indoors.',
            price: '$40',
            image: 'ee.jpg'
        },
        {
            id: 5,
            name: 'Rubber Plant',
            description: 'Attractive foliage with deep green leaves.',
            price: '$38',
            image: 'rr.jpg'
        },
        {
            id: 6,
            name: 'Bird of Paradise',
            description: 'Tall plant with tropical flair and vibrant flowers.',
            price: '$60',
            image: 'tt.jpg'
        },
        {
            id: 7,
            name: 'Pothos',
            description: 'Low-maintenance trailing plant with heart-shaped leaves.',
            price: '$28',
            image: 'yy.webp'
        },
        {
            id: 8,
            name: 'Calathea',
            description: 'Colorful patterned leaves that add a touch of elegance.',
            price: '$42',
            image: 'uu.jpg'
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-green-200 to-green-400">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Heading */}
                <h2 className="text-5xl font-extrabold text-center mb-12 text-[#000] tracking-wide">
                    🌿 Our Beautiful Plants
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            {/* Product Image */}
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-56 object-cover"
                            />

                            {/* Product Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-800 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {product.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    {/* Price */}
                                    <span className="text-green-600 font-bold text-lg">
                                        {product.price}
                                    </span>
                                    
                                    {/* Buy Now Button */}
                                    <a 
                                        href="#"
                                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 shadow-md"
                                    >
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
