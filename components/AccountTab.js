function AccountTab() {
    try {
        const [isLogin, setIsLogin] = React.useState(true);
        const [isLoggedIn, setIsLoggedIn] = React.useState(false);
        const [formData, setFormData] = React.useState({
            email: '',
            password: '',
            name: '',
            confirmPassword: ''
        });

        const handleInputChange = (e) => {
            setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if (isLogin) {
                setIsLoggedIn(true);
                alert('¡Bienvenido de vuelta!');
            } else {
                if (formData.password !== formData.confirmPassword) {
                    alert('Las contraseñas no coinciden');
                    return;
                }
                setIsLoggedIn(true);
                alert('¡Cuenta creada exitosamente!');
            }
        };

        const handleLogout = () => {
            setIsLoggedIn(false);
            setFormData({ email: '', password: '', name: '', confirmPassword: '' });
        };

        if (isLoggedIn) {
            return (
                <main data-name="account-tab" data-file="components/AccountTab.js" className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold">Mi Cuenta</h2>
                            <button
                                onClick={handleLogout}
                                className="text-blue-600 hover:text-blue-800"
                            >
                                Cerrar Sesión
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Información Personal</h3>
                                <div className="space-y-3">
                                    <p><strong>Nombre:</strong> {formData.name || 'Usuario'}</p>
                                    <p><strong>Email:</strong> {formData.email}</p>
                                    <p><strong>Miembro desde:</strong> Enero 2024</p>
                                </div>
                                <button className="mt-4 text-blue-600 hover:text-blue-800">
                                    Editar Perfil
                                </button>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Mis Pedidos</h3>
                                <div className="space-y-3">
                                    <div className="border-b pb-2">
                                        <p className="font-medium">Pedido #001</p>
                                        <p className="text-sm text-gray-600">Rosa Elegante - $89.99</p>
                                        <p className="text-sm text-green-600">Entregado</p>
                                    </div>
                                    <div className="border-b pb-2">
                                        <p className="font-medium">Pedido #002</p>
                                        <p className="text-sm text-gray-600">Mi Fragancia Personalizada - $135.00</p>
                                        <p className="text-sm text-blue-600">En proceso</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Fragancias Favoritas</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <i className="fas fa-heart text-blue-600"></i>
                                    </div>
                                    <p className="text-sm">Rosa Elegante</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <i className="fas fa-heart text-blue-600"></i>
                                    </div>
                                    <p className="text-sm">Ámbar Nocturno</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                        <i className="fas fa-heart text-blue-600"></i>
                                    </div>
                                    <p className="text-sm">Mi Fragancia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            );
        }

        return (
            <main data-name="account-tab" data-file="components/AccountTab.js" className="container mx-auto px-4 py-12">
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold">{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
                        <p className="text-gray-600 mt-2">
                            {isLogin ? 'Accede a tu cuenta' : 'Únete a nuestra comunidad'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border rounded-lg focus:border-blue-500"
                                    required
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg focus:border-blue-500"
                                required
                            />
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium mb-1">Confirmar Contraseña</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border rounded-lg focus:border-blue-500"
                                    required
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-600 hover:text-blue-800"
                        >
                            {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                        </button>
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        console.error('AccountTab component error:', error);
        reportError(error);
    }
}
