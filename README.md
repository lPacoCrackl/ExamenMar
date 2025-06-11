# ExamenMar

Documentación - Tienda de Fragancias Essence
Descripción General
Essence es una aplicación web de comercio electrónico especializada en fragancias personalizadas. Permite a los usuarios explorar un catálogo de productos, personalizar sus propias fragancias, gestionar su cuenta y realizar compras.

Arquitectura del Proyecto
Estructura de Archivos
fragrance-store/
├── index.html # Página principal
├── styles.css # Estilos globales
├── app.js # Componente principal
├── components/
│ ├── Header.js # Barra de navegación
│ ├── Hero.js # Sección hero
│ ├── ProductCard.js # Tarjeta de producto
│ ├── ProductGrid.js # Grilla de productos
│ ├── FilterSidebar.js # Panel de filtros
│ ├── Cart.js # Carrito de compras
│ ├── Footer.js # Pie de página
│ ├── CustomizeTab.js # Personalización de fragancias
│ ├── AccountTab.js # Gestión de cuenta
│ └── ContactTab.js # Contacto y soporte
└── utils/
├── products.js # Datos y funciones de productos
└── store.js # Gestión de estado global

Componentes Principales
1. Header.js
Funcionalidad: Barra de navegación principal

Navegación por pestañas (Catálogo, Personalizar, Mi Cuenta, Contacto)
Contador de carrito
Menú responsive para móviles
Control de filtros en móvil
2. ProductCard.js
Funcionalidad: Tarjeta individual de producto

Muestra imagen, nombre, descripción y precio
Sistema de rating con estrellas
Botón de agregar al carrito en hover
Manejo de errores de imagen con fallback
3. FilterSidebar.js
Funcionalidad: Panel lateral de filtros

Filtros por categoría (Floral, Cítrico, Amaderado, Oriental, Fresco)
Filtros por intensidad (Ligera, Moderada, Intensa)
Filtros por ocasión (Diario, Noche, Especial, Trabajo)
Slider de rango de precios
4. Cart.js
Funcionalidad: Carrito de compras deslizable

Lista de productos agregados
Control de cantidad (+/-)
Eliminación de productos
Cálculo automático del total
Botón de proceder al pago
5. CustomizeTab.js
Funcionalidad: Personalización de fragancias

Selección de notas olfativas por categorías
Configuración de intensidad
Nombre personalizado de la fragancia
Opciones de grabado en el frasco
Selección de empaque (Estándar, Premium, Lujo)
Resumen con precio estimado
6. AccountTab.js
Funcionalidad: Gestión de cuenta de usuario

Formularios de login y registro
Vista de perfil con información personal
Historial de pedidos
Sección de fragancias favoritas
Funcionalidad de cerrar sesión
7. ContactTab.js
Funcionalidad: Contacto y soporte

Formulario de contacto con categorías
Información de contacto completa
Enlaces a redes sociales
FAQ expandible
Utilidades
store.js
Gestión de Estado Global:

cartItems: Array de productos en el carrito
filters: Objeto con filtros activos
activeTab: Pestaña activa actual
isCartOpen/isFilterOpen: Estados de modales
Funciones principales:

addToCart(): Agregar producto al carrito
updateQuantity(): Actualizar cantidad de producto
removeFromCart(): Eliminar producto del carrito
updateFilters(): Actualizar filtros de búsqueda
products.js
Gestión de Productos:

sampleProducts: Array con datos de productos
filterProducts(): Filtrar productos según criterios
getProducts(): Obtener todos los productos
getProductById(): Obtener producto específico
Características Técnicas
Tecnologías Utilizadas
React 18: Framework principal
TailwindCSS: Framework de estilos
Font Awesome: Iconografía
Google Fonts: Tipografías (Playfair Display, Inter)
Responsive Design
Diseño mobile-first
Breakpoints: sm (640px), md (768px), lg (1024px)
Menú hamburguesa en móviles
Grillas adaptativas
Animaciones y Efectos
Transiciones suaves en hover
Animaciones de fade-in y slide-in
Efectos de escala en botones
Gradientes de fondo
Funcionalidades del Usuario
Navegación
Catálogo: Explorar productos con filtros
Personalizar: Crear fragancias personalizadas
Mi Cuenta: Gestionar perfil y pedidos
Contacto: Soporte y comunicación
Carrito de Compras
Agregar productos desde las tarjetas
Modificar cantidades
Ver total en tiempo real
Proceso de checkout
Filtros de Búsqueda
Por categoría de fragancia
Por intensidad del aroma
Por ocasión de uso
Por rango de precios
Datos de Productos
Estructura de Producto
javascript
{
id: number,
name: string,
description: string,
price: number,
image: string,
category: string,
intensity: string,
occasion: string,
notes: array,
rating: number,
reviews: number
}

Categorías Disponibles
Floral: Rosa, Jazmín, Lavanda, Peonía, Lirio
Cítrico: Limón, Bergamota, Naranja, Pomelo, Lima
Amaderado: Cedro, Sándalo, Vetiver, Pino, Roble
Oriental: Ámbar, Vainilla, Oud, Canela, Cardamomo
Fresco: Agua de mar, Algas, Sal marina
Instalación y Uso
Requisitos
Navegador web moderno
Conexión a internet (para CDNs)
Ejecución
Abrir index.html en el navegador
La aplicación se carga automáticamente
No requiere instalación ni build
Personalización
Colores
El tema utiliza una paleta azul:

Primario: #3b82f6 (blue-500)
Secundario: #1e40af (blue-800)
Acentos: #60a5fa (blue-400)
Fuentes
Títulos: Playfair Display (serif elegante)
Texto: Inter (sans-serif moderna)
Consideraciones de Rendimiento
Imágenes optimizadas de Unsplash
Lazy loading implícito
Componentes React optimizados
CSS minificado via CDN
Manejo de errores de imagen
Futuras Mejoras
Backend Integration: API para productos y usuarios
Payment Gateway: Procesamiento de pagos real
User Authentication: Sistema de autenticación robusto
Order Tracking: Seguimiento de pedidos
Reviews System: Sistema de reseñas de usuarios
Wishlist: Lista de deseos
Advanced Filters: Filtros más específicos
Mobile App: Versión móvil nativa
