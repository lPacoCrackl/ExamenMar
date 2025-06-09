function Footer() {
    try {
        const [email, setEmail] = React.useState('');

        const handleSubscribe = (e) => {
            e.preventDefault();
            alert('¡Gracias por suscribirte a nuestro boletín!');
            setEmail('');
        };

        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <i className="fas fa-spray-can text-2xl text-blue-400"></i>
                                <span className="font-playfair text-2xl font-bold">Essence</span>
                            </div>
                            <p className="text-gray-400 mb-4">
                                Creamos fragancias únicas que reflejan tu personalidad y estilo.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-blue-400">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Productos</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Fragancias Florales</a></li>
                                <li><a href="#" className="hover:text-white">Fragancias Cítricas</a></li>
                                <li><a href="#" className="hover:text-white">Fragancias Amaderadas</a></li>
                                <li><a href="#" className="hover:text-white">Personalización</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Servicio</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Mi Cuenta</a></li>
                                <li><a href="#" className="hover:text-white">Seguimiento</a></li>
                                <li><a href="#" className="hover:text-white">Contacto</a></li>
                                <li><a href="#" className="hover:text-white">FAQ</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Boletín</h3>
                            <p className="text-gray-400 mb-4">Recibe noticias y ofertas especiales</p>
                            <form onSubmit={handleSubscribe} className="space-y-2">
                                <input 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Tu email"
                                    className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-blue-400"
                                    required
                                />
                                <button 
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                                >
                                    Suscribirse
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Essence. Todos los derechos reservados.</p>
                        <div className="mt-2 space-x-4">
                            <a href="#" className="hover:text-white">Términos</a>
                            <a href="#" className="hover:text-white">Privacidad</a>
                            <a href="#" className="hover:text-white">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
