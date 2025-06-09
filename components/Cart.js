function Cart({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
    try {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        return (
            <div data-name="cart" data-file="components/Cart.js" 
                 className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
                
                <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg slide-in">
                    <div className="p-6 border-b">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">Carrito de Compras</h2>
                            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6">
                        {cartItems.length === 0 ? (
                            <div className="text-center py-8">
                                <i className="fas fa-shopping-bag text-4xl text-gray-300 mb-4"></i>
                                <p className="text-gray-500">Tu carrito está vacío</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        <div className="flex-1">
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-blue-600">${item.price}</p>
                                            <div className="flex items-center space-x-2 mt-2">
                                                <button 
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                                                >
                                                    <i className="fas fa-minus text-xs"></i>
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button 
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
                                                >
                                                    <i className="fas fa-plus text-xs"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <button 
                                            onClick={() => onRemoveItem(item.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {cartItems.length > 0 && (
                        <div className="border-t p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-lg font-semibold">Total:</span>
                                <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
                            </div>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Proceder al Pago
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
    }
}
