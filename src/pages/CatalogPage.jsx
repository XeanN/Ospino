    import React, { useState, useEffect } from 'react';
    import { useParams, useLocation, Link } from 'react-router-dom';
    import { allProducts, categoriesConfig, getCategoryName } from '../data/products';
    import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
    import './ProductCategory.css'; 

    const CatalogPage = () => {
    const { categorySlug, brandSlug } = useParams(); 
    
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search');

    const [productsToShow, setProductsToShow] = useState([]);
    const [sidebarFilters, setSidebarFilters] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);

    // Estado inicial inteligente (Cerrado en celular, Abierto en PC)
    const [isFilterOpen, setIsFilterOpen] = useState(window.innerWidth > 768);

    const [pageInfo, setPageInfo] = useState({
        title: "Catálogo",
        bannerColor: "linear-gradient(135deg, #E31C23 0%, #b71c1c 100%)"
    });

    // --- NUEVA FUNCIÓN: CIERRA EL MENÚ AUTOMÁTICAMENTE EN MÓVIL ---
    const handleFilterSelect = (filter) => {
        setActiveFilter(filter);
        
        // Si la pantalla es pequeña (celular), cerramos el menú tras el clic
        if (window.innerWidth <= 768) {
        setIsFilterOpen(false);
        }
        
        // Hacemos scroll suave hacia arriba para ver los resultados
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // -------------------------------------------------------------

    useEffect(() => {
        let data = allProducts;
        let filters = [];
        let newTitle = "Todos los Productos";
        let newColor = "linear-gradient(135deg, #E31C23 0%, #b71c1c 100%)";

        // A: Categoría
        if (categorySlug) {
        newTitle = getCategoryName(categorySlug);
        if (categorySlug === 'dulces') newColor = "linear-gradient(135deg, #FF9800 0%, #F57C00 100%)";
        if (categorySlug === 'chocolateria') newColor = "linear-gradient(135deg, #5D4037 0%, #3E2723 100%)";
        if (categorySlug === 'bebidas') newColor = "linear-gradient(135deg, #43A047 0%, #2E7D32 100%)";
        if (categorySlug === 'cuidado-de-hogar') newColor = "linear-gradient(135deg, #0288D1 0%, #01579B 100%)";

        data = allProducts.filter(p => p.category === categorySlug);
        filters = [...new Set(data.map(p => p.subcategory))].map(sub => ({
            name: sub, type: 'subcategory', value: sub
        }));
        } 
        // B: Marca
        else if (brandSlug) {
        const cleanSlug = (str) => {
            if (!str) return '';
            return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, '');      
        };
        data = allProducts.filter(p => cleanSlug(p.brand) === cleanSlug(brandSlug));
        newTitle = data.length > 0 ? data[0].brand : brandSlug.toUpperCase();
        newColor = "linear-gradient(135deg, #003B71 0%, #002a52 100%)"; 
        filters = [...new Set(data.map(p => p.category))].map(catSlug => ({
            name: getCategoryName(catSlug), type: 'category', value: catSlug
        }));
        }
        // C: Buscador
        else if (searchQuery) {
        newTitle = `Resultados para: "${searchQuery}"`;
        newColor = "linear-gradient(135deg, #003B71 0%, #002a52 100%)"; 
        const q = searchQuery.toLowerCase();
        data = allProducts.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.brand.toLowerCase().includes(q) ||
            p.subcategory.toLowerCase().includes(q)
        );
        filters = [...new Set(data.map(p => p.category))].map(catSlug => ({
            name: getCategoryName(catSlug), type: 'category', value: catSlug
        }));
        }
        // D: Todo
        else {
        filters = categoriesConfig.map(c => ({
            name: c.name, type: 'category_link', value: c.slug
        }));
        }

        if (activeFilter) {
        if (activeFilter.type === 'subcategory') {
            data = data.filter(p => p.subcategory === activeFilter.value);
        } else if (activeFilter.type === 'category') {
            data = data.filter(p => p.category === activeFilter.value);
        }
        }

        setProductsToShow(data);
        setSidebarFilters(filters);
        setPageInfo({ title: newTitle, bannerColor: newColor });

    }, [categorySlug, brandSlug, searchQuery, activeFilter]);

    // Reset al cambiar de página principal (Ruta)
    useEffect(() => {
        setActiveFilter(null);
        window.scrollTo(0,0);
        // Si cambiamos de ruta entera (ej: de Dulces a Bebidas), también cerramos el menú en móvil
        if (window.innerWidth <= 768) {
            setIsFilterOpen(false);
        }
    }, [categorySlug, brandSlug, searchQuery]);


    return (
        <div className="category-page">
        <div className="category-banner" style={{ background: pageInfo.bannerColor }}>
            <div className="banner-bg-shapes"></div>
            <div className="container banner-content">
            <h1>{pageInfo.title}</h1>
            <p>{productsToShow.length} productos encontrados</p>
            </div>
        </div>

        <div className="container breadcrumbs">
            <Link to="/">Inicio</Link> <FaChevronRight className="icon" />
            <Link to="/productos">Catálogo</Link> 
            {(categorySlug || brandSlug) && (
                <> <FaChevronRight className="icon" /> <span className="current">{pageInfo.title}</span> </>
            )}
        </div>

        <div className="container category-layout">
            
            <aside className="sidebar-filters">
            <div className="filter-group">
                <div className="filter-header" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <h3>Filtrar Productos</h3>
                <FaChevronDown className={`arrow ${isFilterOpen ? 'open' : ''}`} />
                </div>

                {isFilterOpen && (
                <ul className="filter-list">
                    
                    {/* Opción VER TODO: Ahora usa la nueva función */}
                    <li onClick={() => handleFilterSelect(null)}>
                    <span className={!activeFilter ? 'active-filter' : ''}>Ver todo</span>
                    </li>

                    {sidebarFilters.map((filter, idx) => (
                    <li key={idx}>
                        {filter.type === 'category_link' ? (
                        // Link directo (Cambia de página, el useEffect se encarga de cerrar)
                        <Link to={`/productos/${filter.value}`}>{filter.name}</Link>
                        ) : (
                        // Filtro interno: AQUÍ USAMOS LA NUEVA LÓGICA
                        <span 
                            className={activeFilter?.value === filter.value ? 'active-filter' : ''}
                            onClick={() => handleFilterSelect(filter)}
                        >
                            {filter.name}
                        </span>
                        )}
                    </li>
                    ))}
                </ul>
                )}
            </div>
            </aside>

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
                {/* Botón Reset también usa la función */}
                <button className="btn-reset" onClick={() => handleFilterSelect(null)}>
                    Limpiar filtros
                </button>
                </div>
            )}
            </main>
        </div>
        </div>
    );
    };

    export default CatalogPage;