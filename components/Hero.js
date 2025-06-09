function Hero() {
    try {
        return (
            <section data-name="hero" data-file="components/Hero.js" className="gradient-bg text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 fade-in">
                        Crea Tu Fragancia Perfecta
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto fade-in">
                        Descubre el arte de la perfumería personalizada. Cada fragancia cuenta una historia única.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors hover-scale">
                            Explorar Catálogo
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors hover-scale">
                            Personalizar Fragancia
                        </button>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}
