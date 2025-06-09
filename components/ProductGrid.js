function ProductGrid({ products, onAddToCart }) {
    try {
        return (
            <div data-name="product-grid" data-file="components/ProductGrid.js" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map(product => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        );
    } catch (error) {
        console.error('ProductGrid component error:', error);
        reportError(error);
    }
}
