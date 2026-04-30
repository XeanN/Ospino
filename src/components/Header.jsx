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

    // --- FUNCIÓN PARA CREAR ENLACES LIMPIOS (SLUGS) ---
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
        else { setActiveSubmenu(menuName); }
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
            items: ["Dulces", "Chocolatería", "Bebidas", "Cuidado de hogar", "Enlatados", "Productos de campaña"]
            },
            {
            name: "Marcas",
            basePath: "/marca",
            items: ["Deyelli", "D'loe", "Monfer", "Huracán", "Angelitos", "Guandy", "Tayas", "Crash", "King cookies"]
            }
        ]
        },
        nosotros: { 
            items: ["Quiénes Somos", "Historia", "Nuestro equipo"] 
        }
        // NOTA: Ya no necesitamos la estructura de "sostenibilidad" aquí porque ahora es un link directo.
    };

    const getNosotrosLink = (item) => {
        const slug = createSlug(item);
        return `/nosotros/${slug}`; 
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
                {/*<Link to="/inversionistas">Inversionistas</Link>*/}<Link to="/proveedores">Proveedores</Link><Link to="/clientes">Clientes</Link>
                {/*<a href="http://38.187.16.97:9090/Delycorp" className="btn-facturacion" target="_blank" rel="noopener noreferrer">
                    Facturación Electrónica
                </a>*/}
                </div>
            </div>

            <nav className="header-bottom-row desktop-only">
                <ul className="main-menu">
                
                {/* --- PRODUCTOS (Con Dropdown) --- */}
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
                            <div className="menu-banner cyan"><span>Conoce todas las</span><h3>Promociones</h3><button>Ver promociones</button></div>
                            <div className="menu-banner yellow"><span>Conoce los Productos</span><h3>Ospino</h3><button>Ver productos</button></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                </li>

                {/* --- NOSOTROS (Con Dropdown) --- */}
                <li className="menu-item-has-children relative-parent">
                    <a href="#" onClick={(e) => toggleDesktopMenu(e, 'nosotros')} className={desktopMenuOpen === 'nosotros' ? 'active-link' : ''}>
                    Nosotros {desktopMenuOpen === 'nosotros' ? <FaChevronUp className="menu-arrow" /> : <FaChevronDown className="menu-arrow" />}
                    </a>
                    {desktopMenuOpen === 'nosotros' && (
                    <div className="desktop-dropdown simple-menu">
                        <ul>
                        {menuStructure.nosotros.items.map((item, i) => (
                            <li key={i}>
                                <Link to={getNosotrosLink(item)} onClick={() => setDesktopMenuOpen(null)}>{item}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}
                </li>

                {/* --- SOSTENIBILIDAD (AHORA ES UN LINK DIRECTO) --- */}
                <li>
                    <Link to="/sostenibilidad">Sostenibilidad</Link>
                </li>

                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/trabaja">Trabaja con Nosotros</Link></li>
                <li><Link to="/contacto" className="contact-link">Contáctanos</Link></li>
                </ul>
            </nav>
            <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}><FaBars /></div>
            </div>
        </div>

        {/* --- DRAWER MÓVIL --- */}
        <div className={`mobile-drawer-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className="drawer-header">
            <div className="close-btn" onClick={() => setIsMobileMenuOpen(false)}><FaTimes /></div>
            <img src="/logo.png" alt="Ospino" className="drawer-logo" />
            <div className="drawer-options-icon"><span>&#8942;</span></div>
            </div>
            <form className="drawer-search" onSubmit={handleSearch}>
            <input type="text" placeholder="Buscar" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <FaSearch className="search-icon" onClick={handleSearch} />
            </form>
            <div className="drawer-content">
            <ul className="drawer-menu">
                
                {/* --- PRODUCTOS MÓVIL --- */}
                <li className={`has-submenu ${activeSubmenu === 'productos' ? 'active' : ''}`}>
                <div className="menu-label bold-label" onClick={() => toggleSubmenu('productos')}><span>Productos</span>{activeSubmenu === 'productos' ? <FaChevronUp /> : <FaChevronDown />}</div>
                <div className="submenu-container" style={{ maxHeight: activeSubmenu === 'productos' ? '2000px' : '0' }}>
                    {menuStructure.productos.groups.map((group, i) => (
                    <div key={i} className="nested-group">
                        <div className="nested-label" onClick={() => toggleNestedSubmenu(group.name)}><span>{group.name}</span>{activeNestedSubmenu === group.name ? <FaChevronUp className="icon-sm"/> : <FaChevronDown className="icon-sm"/>}</div>
                        <div className="nested-list" style={{ maxHeight: activeNestedSubmenu === group.name ? '1000px' : '0' }}>
                        <ul>{group.items.map((item, j) => (<li key={j}><Link 
                            to={`${group.basePath}/${createSlug(item)}`} 
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link></li>))}</ul>
                        </div>
                    </div>
                    ))}
                    <div className="nested-label single-link"><Link to="/promociones" onClick={() => setIsMobileMenuOpen(false)}>Promociones</Link></div>
                </div>
                </li>
                
                {/* --- NOSOTROS MÓVIL --- */}
                <li className={`has-submenu ${activeSubmenu === 'nosotros' ? 'active' : ''}`}>
                    <div className="menu-label bold-label" onClick={() => toggleSubmenu('nosotros')}><span>Nosotros</span>{activeSubmenu === 'nosotros' ? <FaChevronUp /> : <FaChevronDown />}</div>
                    <div className="submenu-container" style={{ maxHeight: activeSubmenu === 'nosotros' ? '500px' : '0' }}>
                        <ul>
                            {menuStructure.nosotros.items.map((item, i) => (
                                <li key={i}>
                                    <Link to={getNosotrosLink(item)} className="simple-link" onClick={() => setIsMobileMenuOpen(false)}>{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>

                {/* --- SOSTENIBILIDAD MÓVIL (AHORA ES UN LINK DIRECTO) --- */}
                <li>
                    <Link to="/sostenibilidad" className="menu-link-normal" onClick={() => setIsMobileMenuOpen(false)}>
                        Sostenibilidad
                    </Link>
                </li>

                <li><Link to="/novedades" className="menu-link-normal" onClick={() => setIsMobileMenuOpen(false)}>Novedades</Link></li>
                <li><Link to="/trabaja" className="menu-link-normal" onClick={() => setIsMobileMenuOpen(false)}>Trabaja con Nosotros</Link></li>
                <li><Link to="/contacto" className="menu-link-normal" onClick={() => setIsMobileMenuOpen(false)}>Contáctanos</Link></li>
            </ul>
            <div className="drawer-divider"></div>
            <ul className="drawer-secondary-menu">
                <li><Link to="/inversionistas" onClick={() => setIsMobileMenuOpen(false)}>Inversionistas</Link></li>
                <li><Link to="/proveedores" onClick={() => setIsMobileMenuOpen(false)}>Proveedores</Link></li>
                <li><Link to="/clientes" onClick={() => setIsMobileMenuOpen(false)}>Clientes</Link></li>
                {/*<a href="http://200.1.181.153:9090/DelyCorp/" className="btn-facturacion" target="_blank" rel="noopener noreferrer">
                Facturación Electrónica
                </a>*/}
            </ul>
            </div>
        </div>
        </header>
    );
};

export default Header;