function ProductCard({ product, onAddToCart }) {
    try {
        const [isHovered, setIsHovered] = React.useState(false);
        const [imageError, setImageError] = React.useState(false);

        const handleImageError = () => {
            setImageError(true);
        };

        return (
            <div 
                data-name="product-card" 
                data-file="components/ProductCard.js"
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative">
                    {!imageError ? (
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover"
                            onError={handleImageError}
                        />
                    ) : (
                        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                            <i className="fas fa-spray-can text-4xl text-gray-400"></i>
                        </div>
                    )}
                    <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                            {product.intensity}
                        </span>
                    </div>
                    {isHovered && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <button 
                                onClick={() => onAddToCart(product)}
                                className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Añadir al Carrito
                            </button>
                        </div>
                    )}
                </div>
                
                <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                        {product.notes.slice(0, 3).map((note, index) => (
                            <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {note}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                        <div className="flex items-center">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`fas fa-star ${i < product.rating ? '' : 'text-gray-300'}`}></i>
                                ))}
                            </div>
                            <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
    }
}
