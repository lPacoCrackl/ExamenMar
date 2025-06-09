function CustomizeTab() {
    try {
        const [selectedNotes, setSelectedNotes] = React.useState([]);
        const [intensity, setIntensity] = React.useState('Moderada');
        const [fraganceName, setFraganceName] = React.useState('');
        const [engraving, setEngraving] = React.useState('');
        const [packaging, setPackaging] = React.useState('Estándar');

        const notes = {
            'Florales': ['Rosa', 'Jazmín', 'Lavanda', 'Peonía', 'Lirio'],
            'Cítricas': ['Limón', 'Bergamota', 'Naranja', 'Pomelo', 'Lima'],
            'Amaderadas': ['Cedro', 'Sándalo', 'Vetiver', 'Pino', 'Roble'],
            'Orientales': ['Ámbar', 'Vainilla', 'Oud', 'Canela', 'Cardamomo']
        };

        const toggleNote = (note) => {
            setSelectedNotes(prev => 
                prev.includes(note) 
                    ? prev.filter(n => n !== note)
                    : [...prev, note]
            );
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            alert(`Fragancia personalizada creada: ${fraganceName || 'Mi Fragancia'}`);
        };

        return (
            <main data-name="customize-tab" data-file="components/CustomizeTab.js" className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Personaliza tu Fragancia</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">Selecciona Notas Olfativas</h3>
                                {Object.entries(notes).map(([category, categoryNotes]) => (
                                    <div key={category} className="mb-4">
                                        <h4 className="font-medium text-blue-600 mb-2">{category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {categoryNotes.map(note => (
                                                <button
                                                    key={note}
                                                    type="button"
                                                    onClick={() => toggleNote(note)}
                                                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                                                        selectedNotes.includes(note)
                                                            ? 'bg-blue-600 text-white'
                                                            : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                                                    }`}
                                                >
                                                    {note}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Nombre de la Fragancia</label>
                                    <input
                                        type="text"
                                        value={fraganceName}
                                        onChange={(e) => setFraganceName(e.target.value)}
                                        className="w-full p-2 border rounded-lg focus:border-blue-500"
                                        placeholder="Mi Fragancia Única"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Intensidad</label>
                                    <select
                                        value={intensity}
                                        onChange={(e) => setIntensity(e.target.value)}
                                        className="w-full p-2 border rounded-lg focus:border-blue-500"
                                    >
                                        <option value="Ligera">Ligera</option>
                                        <option value="Moderada">Moderada</option>
                                        <option value="Intensa">Intensa</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Grabado en el Frasco</label>
                                    <input
                                        type="text"
                                        value={engraving}
                                        onChange={(e) => setEngraving(e.target.value)}
                                        className="w-full p-2 border rounded-lg focus:border-blue-500"
                                        placeholder="Texto personalizado (opcional)"
                                        maxLength="20"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">Empaque</label>
                                    <select
                                        value={packaging}
                                        onChange={(e) => setPackaging(e.target.value)}
                                        className="w-full p-2 border rounded-lg focus:border-blue-500"
                                    >
                                        <option value="Estándar">Estándar</option>
                                        <option value="Premium">Premium (+$15)</option>
                                        <option value="Lujo">Lujo (+$30)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="font-semibold mb-2">Resumen de tu Fragancia</h3>
                            <p><strong>Notas:</strong> {selectedNotes.join(', ') || 'Ninguna seleccionada'}</p>
                            <p><strong>Intensidad:</strong> {intensity}</p>
                            <p><strong>Precio estimado:</strong> $120.00 {packaging !== 'Estándar' && `+ ${packaging === 'Premium' ? '$15' : '$30'}`}</p>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Crear Mi Fragancia
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        );
    } catch (error) {
        console.error('CustomizeTab component error:', error);
        reportError(error);
    }
}
