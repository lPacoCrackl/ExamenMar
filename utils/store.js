const initialFilters = {
    categories: [],
    intensity: '',
    occasions: [],
    priceRange: [0, 500]
};

function useStore() {
    const [cartItems, setCartItems] = React.useState([]);
    const [filters, setFilters] = React.useState(initialFilters);
    const [isCartOpen, setIsCartOpen] = React.useState(false);
    const [isFilterOpen, setIsFilterOpen] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState('catalog');

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateFilters = (type, value, checked = true) => {
        setFilters(prev => {
            if (type === 'categories' || type === 'occasions') {
                const current = prev[type];
                return {
                    ...prev,
                    [type]: checked
                        ? [...current, value]
                        : current.filter(item => item !== value)
                };
            }
            return { ...prev, [type]: value };
        });
    };

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return {
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
    };
}
