const sampleProducts = [
    {
        id: 1,
        name: "Rosa Elegante",
        description: "Una fragancia floral sofisticada con notas de rosa búlgara",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
        category: "Floral",
        intensity: "Moderada",
        occasion: "Especial",
        notes: ["Rosa", "Jazmín", "Sándalo"],
        rating: 4.8,
        reviews: 124
    },
    {
        id: 2,
        name: "Cítrico Fresco",
        description: "Energizante mezcla de cítricos mediterráneos",
        price: 65.99,
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400",
        category: "Cítrico",
        intensity: "Ligera",
        occasion: "Diario",
        notes: ["Limón", "Bergamota", "Menta"],
        rating: 4.6,
        reviews: 89
    },
    {
        id: 3,
        name: "Ámbar Nocturno",
        description: "Fragancia oriental intensa para momentos especiales",
        price: 125.99,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
        category: "Oriental",
        intensity: "Intensa",
        occasion: "Noche",
        notes: ["Ámbar", "Vainilla", "Oud"],
        rating: 4.9,
        reviews: 156
    },
    {
        id: 4,
        name: "Bosque Sereno",
        description: "Esencia amaderada con toques de cedro y musgo",
        price: 95.99,
        image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400",
        category: "Amaderado",
        intensity: "Moderada",
        occasion: "Trabajo",
        notes: ["Cedro", "Musgo", "Vetiver"],
        rating: 4.7,
        reviews: 98
    },
    {
        id: 5,
        name: "Brisa Marina",
        description: "Fragancia fresca inspirada en la brisa del océano",
        price: 72.99,
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
        category: "Fresco",
        intensity: "Ligera",
        occasion: "Diario",
        notes: ["Agua de mar", "Algas", "Sal marina"],
        rating: 4.5,
        reviews: 67
    },
    {
        id: 6,
        name: "Jardín Secreto",
        description: "Delicada combinación de flores de primavera",
        price: 78.99,
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
        category: "Floral",
        intensity: "Ligera",
        occasion: "Diario",
        notes: ["Peonía", "Lirio", "Freesia"],
        rating: 4.6,
        reviews: 112
    }
];

function filterProducts(products, filters) {
    return products.filter(product => {
        const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
        const intensityMatch = !filters.intensity || product.intensity === filters.intensity;
        const occasionMatch = filters.occasions.length === 0 || filters.occasions.includes(product.occasion);
        const priceMatch = product.price <= filters.priceRange[1];
        
        return categoryMatch && intensityMatch && occasionMatch && priceMatch;
    });
}

function getProducts() {
    return sampleProducts;
}

function getProductById(id) {
    return sampleProducts.find(product => product.id === parseInt(id));
}
