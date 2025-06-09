function FilterSidebar({ filters, onFilterChange, isOpen, onClose }) {
    try {
        const categories = ['Floral', 'Cítrico', 'Amaderado', 'Oriental', 'Fresco'];
        const intensities = ['Ligera', 'Moderada', 'Intensa'];
        const occasions = ['Diario', 'Noche', 'Especial', 'Trabajo'];

        return (
            <div data-name="filter-sidebar" data-file="components/FilterSidebar.js" 
                 className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
                
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Filtros</h2>
                        <button onClick={onClose} className="lg:hidden text-gray-500 hover:text-gray-700">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <h3 className="font-semibold mb-3">Categoría</h3>
                        {categories.map(category => (
                            <label key={category} className="flex items-center mb-2">
                                <input 
                                    type="checkbox"
                                    checked={filters.categories.includes(category)}
                                    onChange={(e) => onFilterChange('categories', category, e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm">{category}</span>
                            </label>
                        ))}
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Intensidad</h3>
                        {intensities.map(intensity => (
                            <label key={intensity} className="flex items-center mb-2">
                                <input 
                                    type="radio"
                                    name="intensity"
                                    checked={filters.intensity === intensity}
                                    onChange={() => onFilterChange('intensity', intensity)}
                                    className="mr-2"
                                />
                                <span className="text-sm">{intensity}</span>
                            </label>
                        ))}
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Ocasión</h3>
                        {occasions.map(occasion => (
                            <label key={occasion} className="flex items-center mb-2">
                                <input 
                                    type="checkbox"
                                    checked={filters.occasions.includes(occasion)}
                                    onChange={(e) => onFilterChange('occasions', occasion, e.target.checked)}
                                    className="mr-2"
                                />
                                <span className="text-sm">{occasion}</span>
                            </label>
                        ))}
                    </div>

                    <div>
                        <h3 className="font-semibold mb-3">Rango de Precio</h3>
                        <div className="space-y-2">
                            <input 
                                type="range"
                                min="0"
                                max="500"
                                value={filters.priceRange[1]}
                                onChange={(e) => onFilterChange('priceRange', [0, parseInt(e.target.value)])}
                                className="w-full"
                            />
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>$0</span>
                                <span>${filters.priceRange[1]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('FilterSidebar component error:', error);
        reportError(error);
    }
}
