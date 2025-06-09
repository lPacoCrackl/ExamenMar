function Header({ cartCount, onCartClick, onFilterToggle, activeTab, onTabChange }) {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        const tabs = [
            { id: 'catalog', label: 'Catálogo' },
            { id: 'customize', label: 'Personalizar' },
            { id: 'account', label: 'Mi Cuenta' },
            { id: 'contact', label: 'Contacto' }
        ];

        return (
            <header data-name="header" data-file="components/Header.js" className="bg-white shadow-lg sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-spray-can text-2xl text-blue-600"></i>
                            <span className="font-playfair text-2xl font-bold text-gray-800">Essence</span>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => onTabChange(tab.id)}
                                    className={`text-gray-700 hover:text-blue-600 transition-colors pb-1 ${
                                        activeTab === tab.id ? 'tab-active' : ''
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={onFilterToggle}
                                className="md:hidden text-gray-700 hover:text-blue-600"
                            >
                                <i className="fas fa-filter"></i>
                            </button>
                            <button 
                                onClick={onCartClick}
                                className="relative text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                <i className="fas fa-shopping-bag text-xl"></i>
                                {cartCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden text-gray-700"
                            >
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t py-4">
                            <nav className="flex flex-col space-y-2">
                                {tabs.map(tab => (
                                    <button
                                        key={tab.id}
                                        onClick={() => {
                                            onTabChange(tab.id);
                                            setIsMenuOpen(false);
                                        }}
                                        className={`text-left text-gray-700 hover:text-blue-600 px-4 py-2 ${
                                            activeTab === tab.id ? 'text-blue-600 font-semibold' : ''
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
