function App() {
    try {
        const {
            cartItems,
            filters,
            isCartOpen,
            isFilterOpen,
            activeTab,
            cartCount,
            addToCart,
            updateQuantity,
            removeFromCart,
            updateFilters,
            setIsCartOpen,
            setIsFilterOpen,
            setActiveTab
        } = useStore();

        const products = getProducts();
        const filteredProducts = filterProducts(products, filters);

        const renderTabContent = () => {
            switch (activeTab) {
                case 'catalog':
                    return (
                        <main className="container mx-auto px-4 py-12">
                            <div className="flex gap-8">
                                <FilterSidebar 
                                    filters={filters}
                                    onFilterChange={updateFilters}
                                    isOpen={isFilterOpen}
                                    onClose={() => setIsFilterOpen(false)}
                                />
                                
                                <div className="flex-1">
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold mb-2">Nuestras Fragancias</h2>
                                        <p className="text-gray-600">
                                            Mostrando {filteredProducts.length} de {products.length} productos
                                        </p>
                                    </div>
                                    
                                    <ProductGrid 
                                        products={filteredProducts}
                                        onAddToCart={addToCart}
                                    />
                                </div>
                            </div>
                        </main>
                    );
                case 'customize':
                    return <CustomizeTab />;
                case 'account':
                    return <AccountTab />;
                case 'contact':
                    return <ContactTab />;
                default:
                    return null;
            }
        };

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen bg-gray-50">
                <Header 
                    cartCount={cartCount}
                    onCartClick={() => setIsCartOpen(true)}
                    onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />
                
                <Hero />
                
                {renderTabContent()}

                <Footer />

                <Cart 
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    cartItems={cartItems}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeFromCart}
                />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
