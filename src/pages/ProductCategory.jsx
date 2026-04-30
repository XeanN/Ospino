    import React, { useState, useEffect } from 'react';
    import { useParams, useSearchParams, Link } from 'react-router-dom';
    import { 
    allProducts, 
    categoriesConfig, 
    getSubcategories, 
    getCategoryName 
    } from '../data/products';
    import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
    import './ProductCategory.css';

    const ProductCategory = () => {
    const { category } = useParams(); // Detecta: "dulces", "chocolateria", etc.
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    const [productsToShow, setProductsToShow] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(true);
    const [activeSubFilter, setActiveSubFilter] = useState(null);

    // --- LÓGICA DE TÍTULO Y COLOR DINÁMICO ---
    // Usamos un estado para asegurar que el título se repinte cuando cambia la categoría
    const [pageInfo, setPageInfo] = useState({
        title: "Catálogo",
        bannerColor: "linear-gradient(135deg, #E31C23 0%, #b71c1c 100%)" // Rojo por defecto
    });

    useEffect(() => {
        // 1. Definir Título y Color
        let newTitle = "Catálogo Completo";
        let newColor = "linear-gradient(135deg, #E31C23 0%, #b71c1c 100%)"; // Rojo Delycorp

        if (searchQuery) {
            newTitle = `Resultados para: "${searchQuery}"`;
            newColor = "linear-gradient(135deg, #003B71 0%, #002a52 100%)"; // Azul
        } else if (category) {
            newTitle = getCategoryName(category);
            
            // Cambiar color según categoría (Opcional, para que se vea más bonito)
            if (category === 'dulces') newColor = "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)"; // Naranja
            if (category === 'chocolateria') newColor = "linear-gradient(135deg, #5D4037 0%, #3E2723 100%)"; // Marrón
            if (category === 'bebidas') newColor = "linear-gradient(135deg, #43A047 0%, #2E7D32 100%)"; // Verde
            if (category === 'cuidado-de-hogar') newColor = "linear-gradient(135deg, #0288D1 0%, #01579B 100%)"; // Azul Claro
        }

        setPageInfo({ title: newTitle, bannerColor: newColor });

        // 2. Filtrar Productos
        let filtered = allProducts;

        if (category) {
            filtered = filtered.filter(p => p.category === category);
        }

        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.brand.toLowerCase().includes(query) ||
                p.subcategory.toLowerCase().includes(query)
            );
        }

        if (activeSubFilter) {
            filtered = filtered.filter(p => p.subcategory === activeSubFilter);
        }

        setProductsToShow(filtered);
        
        // Debug: Mira tu consola (F12) para ver si esto cambia al navegar
        console.log("Categoría detectada:", category, "| Título:", newTitle);

    }, [category, searchQuery, activeSubFilter]);

    // Sidebar items logic
    const sidebarItems = category 
        ? getSubcategories(category) 
        : categoriesConfig;

    return (
        <div className="category-page">
        
        {/* BANNER DINÁMICO */}
        <div className="category-banner" style={{ background: pageInfo.bannerColor }}>
            <div className="banner-bg-shapes"></div>
            <div className="container banner-content">
            <h1>{pageInfo.title}</h1>
            <p>{productsToShow.length} productos encontrados</p>
            </div>
        </div>

        {/* BREADCRUMBS */}
        <div className="container breadcrumbs">
            <Link to="/">Inicio</Link> <FaChevronRight className="icon" /> 
            <Link to="/productos">Catálogo</Link> 
            {category && (
            <> 
                <FaChevronRight className="icon" /> 
                <span className="current">{pageInfo.title}</span> 
            </>
            )}
        </div>

        <div className="container category-layout">
            
            {/* SIDEBAR */}
            <aside className="sidebar-filters">
            <div className="filter-group">
                <div className="filter-header" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <h3>{category ? "Filtrar por Tipo" : "Nuestras Categorías"}</h3>
                <FaChevronDown className={`arrow ${isFilterOpen ? 'open' : ''}`} />
                </div>
                
                {isFilterOpen && (
                <ul className="filter-list">
                    <li onClick={() => setActiveSubFilter(null)}>
                    <span className={!activeSubFilter ? 'active-filter' : ''}>
                        {category ? "Ver todo en " + pageInfo.title : "Todas las categorías"}
                    </span>
                    </li>
                    
                    {category ? (
                    sidebarItems.map((subItem, index) => (
                        <li key={index} onClick={() => setActiveSubFilter(subItem)}>
                        <span className={activeSubFilter === subItem ? 'active-filter' : ''}>
                            {subItem}
                        </span>
                        </li>
                    ))
                    ) : (
                    sidebarItems.map((catItem, index) => (
                        <li key={index}>
                        <Link to={`/productos/${catItem.slug}`}>
                            {catItem.name}
                        </Link>
                        </li>
                    ))
                    )}
                </ul>
                )}
            </div>
            </aside>

            {/* GRID PRODUCTOS */}
            <main className="products-grid-container">
            {productsToShow.length > 0 ? (
                <div className="products-grid">
                {productsToShow.map((product) => (
                    <Link to={`/producto/${product.id}`} key={product.id} className="product-card">
                    <div className="product-image">
                        <img src={product.img_primary} alt={product.name} />
                    </div>
                    <div className="product-info">
                        <span className="product-brand">{product.brand}</span>
                        <h4>{product.name}</h4>
                        <span className="product-sub">{product.subcategory}</span>
                        <span className="btn-details">Ver Detalle</span>
                    </div>
                    </Link>
                ))}
                </div>
            ) : (
                <div className="no-products">
                <h3>No se encontraron productos</h3>
                <Link to="/productos" className="btn-reset">Volver al catálogo</Link>
                </div>
            )}
            </main>
        </div>
        </div>
    );
    };

    export default ProductCategory;