function ContactTab() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        const [selectedFAQ, setSelectedFAQ] = React.useState(null);

        const faqs = [
            {
                question: '¿Cuánto tiempo tarda en llegar mi pedido?',
                answer: 'Los pedidos estándar tardan 3-5 días hábiles. Las fragancias personalizadas pueden tardar 7-10 días hábiles.'
            },
            {
                question: '¿Puedo devolver una fragancia personalizada?',
                answer: 'Las fragancias personalizadas no pueden devolverse, pero ofrecemos garantía de satisfacción si no estás conforme.'
            },
            {
                question: '¿Cómo funciona el proceso de personalización?',
                answer: 'Seleccionas las notas, intensidad y detalles. Nuestros perfumistas crean tu fragancia única en 7-10 días.'
            }
        ];

        const handleInputChange = (e) => {
            setFormData(prev => ({
                ...prev,
                [e.target.name]: e.target.value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado! Te responderemos en 24-48 horas.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        };

        return (
            <main data-name="contact-tab" data-file="components/ContactTab.js" className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Contacto y Soporte</h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Envíanos un Mensaje</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded-lg focus:border-blue-500"
                                        required
                                    />
                                </div>

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
                                    <label className="block text-sm font-medium mb-1">Asunto</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border rounded-lg focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Selecciona un asunto</option>
                                        <option value="pedido">Consulta sobre pedido</option>
                                        <option value="producto">Información de producto</option>
                                        <option value="personalizacion">Personalización</option>
                                        <option value="devolucion">Devolución/Cambio</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Mensaje</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="4"
                                        className="w-full p-3 border rounded-lg focus:border-blue-500"
                                        placeholder="Describe tu consulta o problema..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <i className="fas fa-envelope text-blue-600 mr-3"></i>
                                        <span>info@essence.com</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-phone text-blue-600 mr-3"></i>
                                        <span>+1 (555) 123-4567</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                                        <span>123 Fragrance Ave, Perfume City, PC 12345</span>
                                    </div>
                                    <div className="flex items-center">
                                        <i className="fas fa-clock text-blue-600 mr-3"></i>
                                        <span>Lun-Vie: 9:00-18:00, Sáb: 10:00-16:00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Preguntas Frecuentes</h3>
                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border rounded-lg">
                                    <button
                                        onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                                        className="w-full p-4 text-left hover:bg-gray-50 flex justify-between items-center"
                                    >
                                        <span className="font-medium">{faq.question}</span>
                                        <i className={`fas fa-chevron-${selectedFAQ === index ? 'up' : 'down'}`}></i>
                                    </button>
                                    {selectedFAQ === index && (
                                        <div className="p-4 border-t bg-gray-50">
                                            <p className="text-gray-700">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        console.error('ContactTab component error:', error);
        reportError(error);
    }
}
