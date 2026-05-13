import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaRegUser, FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa';
import { getAssetUrl } from '../utils/assets'; 
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState(""); 
    const navigate = useNavigate();
    
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);
    const [desktopMenuOpen, setDesktopMenuOpen] = useState(null);
    const menuRef = useRef(null);

    const createSlug = (text) => {
        return text
        .toLowerCase()
        .normalize("NFD") 
        .replace(/[\u0300-\u036f]/g, "") 
        .replace(/ñ/g, "n") 
        .replace(/ /g, "-"); 
    };

    const handleSearch = (e) => {
        e.preventDefault(); 
        if (searchTerm.trim()) {
            navigate(`/productos?search=${encodeURIComponent(searchTerm)}`);
            setIsMobileMenuOpen(false); 
            setSearchTerm(""); 
            setDesktopMenuOpen(null);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveSubmenu(null);
        setActiveNestedSubmenu(null);
    };

    // FIX 1 ▸ cierra el dropdown de desktop al navegar a otro link
    const handleDesktopNav = () => {
        setDesktopMenuOpen(null);
    };

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDesktopMenuOpen(null);
            }
        };
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleSubmenu = (menuName) => {
        if (activeSubmenu === menuName) { setActiveSubmenu(null); setActiveNestedSubmenu(null); } 
        else { setActiveSubmenu(menuName); setActiveNestedSubmenu(null); }
    };

    const toggleNestedSubmenu = (groupName) => setActiveNestedSubmenu(activeNestedSubmenu === groupName ? null : groupName);

    const toggleDesktopMenu = (e, menuName) => {
        e.preventDefault();
        if (desktopMenuOpen === menuName) setDesktopMenuOpen(null);
        else setDesktopMenuOpen(menuName);
    };

    const menuStructure = {
        productos: {
            groups: [
                {
                    name: "Categorías",
                    basePath: "/productos",
                    items: [
                        "Dulces",
                        "Chocolatería",
                        "Galletas",
                        "Snacks",
                        "Bebidas",
                        "Abarrotes",
                    ]
                },
                {
                    name: "Marcas",
                    basePath: "/marca",
                    items: [
                        "Ambrosoli",
                        "Benoti",
                        "Bogie",
                        "Bon O Bon",
                        "Casino",
                        "Chips Ahoy",
                        "Costa",
                        "Ferrero Rocher",
                        "Field",
                        "Globo Pop",
                        "Grano de Oro",
                        "Halls",
                        "Inka Chips",
                        "Monfer",
                        "Oreo",
                        "Orquídea",
                        "Ospino",
                        "Picaras",
                        "Ritz",
                        "San Jorge",
                    ]
                }
            ]
        },
        // nosotros ya no se usa en móvil como submenú, pero lo mantenemos por si se necesita en desktop
        nosotros: { 
            items: ["Quiénes Somos", "Historia", "Nuestro equipo"] 
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} ref={menuRef}>
        <div className="container header-grid">
            <div className="header-logo">
                <Link to="/"><img src={getAssetUrl('logo_sinfondo_ospino.png')} alt="Ospino" /></Link>
            </div>

            <div className="header-content">
                {/* Top Bar Desktop */}
                <div className="header-top-row desktop-only">
                    <form className="search-bar" onSubmit={handleSearch}>
                        <input type="text" placeholder="Buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                        <button type="submit"><FaSearch/></button>
                    </form>
                    <div className="secondary-links">
                        {/*<Link to="/proveedores">Proveedores</Link>*/}
                        <Link to="/clientes">Clientes</Link>
                    </div>
                </div>

                {/* Nav Desktop */}
                <nav className="header-bottom-row desktop-only">
                    <ul className="main-menu">
                        {/* FIX 1 ▸ onClick={handleDesktopNav} en todos los links estáticos */}
                        <li>
                            <Link to="/" onClick={handleDesktopNav}>Inicio</Link>
                        </li>
                        <li className="menu-item-has-children static-parent">
                            <a href="#" onClick={(e) => toggleDesktopMenu(e, 'productos')} className={desktopMenuOpen === 'productos' ? 'active-link' : ''}>
                                Productos {desktopMenuOpen === 'productos' ? <FaChevronUp className="menu-arrow" /> : <FaChevronDown className="menu-arrow" />}
                            </a>
                            
                            {desktopMenuOpen === 'productos' && (
                                <div className="desktop-dropdown mega-menu">
                                    <div className="container">
                                        <div className="mega-menu-grid">
                                            {menuStructure.productos.groups.map((group, i) => (
                                                <div key={i} className="mega-col">
                                                    <h4 className="mega-title">{group.name}</h4>
                                                    <ul>
                                                        {group.items.map((item, j) => (
                                                            <li key={j}>
                                                                <Link 
                                                                    to={`${group.basePath}/${createSlug(item)}`} 
                                                                    onClick={() => setDesktopMenuOpen(null)}
                                                                >
                                                                    {item}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>  
                                            ))}
                                            <div className="mega-banners">
                                                <div className="menu-banner cyan">
                                                    <span>Conoce todas las</span>
                                                    <h3>Promociones</h3>
                                                    <button onClick={() => { navigate('/promociones'); setDesktopMenuOpen(null); }}>Ver promociones</button>
                                                </div>
                                                <div className="menu-banner yellow">
                                                    <span>Conoce los Productos</span>
                                                    <h3>Ospino</h3>
                                                    <button onClick={() => { navigate('/marca/ospino'); setDesktopMenuOpen(null); }}>Ver productos</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>

                        <li><Link to="/nosotros" onClick={handleDesktopNav}>Nosotros</Link></li>
                        <li><Link to="/blogs" onClick={handleDesktopNav}>Blogs</Link></li>
                        <li><Link to="/trabaja" onClick={handleDesktopNav}>Trabaja con Nosotros</Link></li>
                        <li><Link to="/contacto" className="contact-link" onClick={handleDesktopNav}>Contáctanos</Link></li>
                    </ul>
                </nav>

                <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}><FaBars /></div>
            </div>
        </div>

        {/* --- DRAWER MÓVIL --- */}
        <div className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="drawer-header">
                <div className="close-btn" onClick={closeMobileMenu}><FaTimes /></div>
                <img src={getAssetUrl('logo_sinfondo_ospino.png')} alt="Ospino" className="drawer-logo" />
                <div className="drawer-options-icon"><span>&#8942;</span></div>
            </div>

            <form className="drawer-search" onSubmit={handleSearch}>
                <input type="text" placeholder="Buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <FaSearch className="search-icon" onClick={handleSearch} />
            </form>

            <div className="drawer-content">
                <ul className="drawer-menu">

                    {/* --- INICIO MÓVIL --- */}
                    <li className="drawer-menu-item">
                        <Link to="/" className="menu-link-normal" onClick={closeMobileMenu}>Inicio</Link>
                    </li>

                    {/* FIX 3 ▸ separador */}
                    <li className="drawer-separator" aria-hidden="true"></li>
                    
                    {/* --- PRODUCTOS MÓVIL --- */}
                    <li className={`drawer-menu-item has-submenu ${activeSubmenu === 'productos' ? 'active' : ''}`}>
                        <div className="menu-label bold-label" onClick={() => toggleSubmenu('productos')}>
                            <span>Productos</span>
                            {activeSubmenu === 'productos' ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        <div className="submenu-container" style={{ maxHeight: activeSubmenu === 'productos' ? '2000px' : '0' }}>
                            {menuStructure.productos.groups.map((group, i) => (
                                <div key={i} className="nested-group">
                                    <div className="nested-label" onClick={() => toggleNestedSubmenu(group.name)}>
                                        <span>{group.name}</span>
                                        {activeNestedSubmenu === group.name ? <FaChevronUp className="icon-sm"/> : <FaChevronDown className="icon-sm"/>}
                                    </div>
                                    <div className="nested-list" style={{ maxHeight: activeNestedSubmenu === group.name ? '1000px' : '0' }}>
                                        <ul>
                                            {group.items.map((item, j) => (
                                                <li key={j}>
                                                    <Link 
                                                        to={`${group.basePath}/${createSlug(item)}`} 
                                                        onClick={closeMobileMenu}
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                            <div className="nested-label single-link">
                                <Link to="/promociones" onClick={closeMobileMenu}>Promociones</Link>
                            </div>
                        </div>
                    </li>

                    {/* FIX 3 ▸ separador */}
                    <li className="drawer-separator" aria-hidden="true"></li>
                    
                    {/* FIX 2 ▸ Nosotros como link simple, sin submenú */}
                    <li className="drawer-menu-item">
                        <Link to="/nosotros" className="menu-link-normal" onClick={closeMobileMenu}>Nosotros</Link>
                    </li>

                    {/* FIX 3 ▸ separador */}
                    <li className="drawer-separator" aria-hidden="true"></li>

                    <li className="drawer-menu-item">
                        <Link to="/blogs" className="menu-link-normal" onClick={closeMobileMenu}>Blogs</Link>
                    </li>

                    {/* FIX 3 ▸ separador */}
                    <li className="drawer-separator" aria-hidden="true"></li>

                    <li className="drawer-menu-item">
                        <Link to="/trabaja" className="menu-link-normal" onClick={closeMobileMenu}>Trabaja con Nosotros</Link>
                    </li>

                    {/* FIX 3 ▸ separador */}
                    <li className="drawer-separator" aria-hidden="true"></li>

                    <li className="drawer-menu-item">
                        <Link to="/contacto" className="menu-link-normal" onClick={closeMobileMenu}>Contáctanos</Link>
                    </li>
                </ul>

                <div className="drawer-divider"></div>

                {/* Links secundarios (igual que el top bar del desktop) */}
                <ul className="drawer-secondary-menu">
                    {/*<li><Link to="/proveedores" onClick={closeMobileMenu}>Proveedores</Link></li>*/}
                    <li><Link to="/clientes" onClick={closeMobileMenu}>Clientes</Link></li>
                </ul>
            </div>
        </div>
        </header>
    );
};

export default Header;