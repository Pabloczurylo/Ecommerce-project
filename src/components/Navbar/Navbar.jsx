import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa'; 

// Componente para los iconos de utilidad (Login, Búsqueda, Carrito)
// Esto evita duplicar el JSX de los iconos
const UtilityIcons = () => (
    <div className="d-flex align-items-center">
        <NavLink to="/search" className="text-dark fs-5 p-2 nav-link-custom"><FaSearch /></NavLink>
        <NavLink to="/cart" className="text-dark fs-5 p-2 position-relative nav-link-custom">
            <FaShoppingCart />
            <span style={{ position: 'absolute', top: '0px', right: '-2px', fontSize: '0.6em', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '2px 5px', lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>0</span>
        </NavLink>
        <NavLink to="/login" className="text-dark fs-5 p-2 nav-link-custom"><FaUser /></NavLink>
    </div>
);

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg" className="py-3 border-bottom" fixed="top"> 
            <Container>
                
                {/* 1. Logo (PH LOX) */}
                <Navbar.Brand 
                    as={NavLink} 
                    to="/" 
                    className="fw-bolder fs-5 text-dark me-5" 
                >
                    PH LOX
                </Navbar.Brand>

                
                {/* 2. Íconos de Utilidad y Toggle para MÓVIL (Versión Pequeña) */}
                {/* Este bloque es el que mantiene los íconos y el toggle visibles en móvil (d-flex) */}
                <div className="d-flex align-items-center d-lg-none">
                    
                    <UtilityIcons /> {/* Íconos siempre visibles en móvil */}
                    
                    {/* Toggle (Botón Hamburguesa) - Oculto en desktop (d-lg-none) */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-3 d-lg-none" /> 
                    
                </div>
                
                
                {/* 3. Links Principales y Íconos de Utilidad para DESKTOP (Versión Grande) */}
                {/* El Navbar.Collapse se usa para el layout de Desktop */}
                <Navbar.Collapse id="basic-navbar-nav">
                    
                    {/* Links Principales - Usamos 'me-auto' para empujar los iconos a la derecha en DESKTOP */}
                    <Nav className="me-auto mb-2 mb-lg-0"> 
                        <Nav.Link as={NavLink} to="/" className="text-dark px-3 fw-medium nav-link-custom">Inicio</Nav.Link>
                        <Nav.Link as={NavLink} to="/shop" className="text-dark px-3 fw-medium nav-link-custom">Tienda</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="text-dark px-3 fw-medium nav-link-custom">Sobre Nosotros</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" className="text-dark px-3 fw-medium nav-link-custom">Blog</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="text-dark px-3 fw-medium nav-link-custom">Contáctanos</Nav.Link>
                    </Nav>

                    {/* Íconos de Utilidad para DESKTOP - Oculto en móvil (d-none) */}
                    {/* ¡El Nav que contiene los íconos de Login/Search/Cart en desktop está aquí! */}
                    <Nav className="d-none d-lg-flex align-items-center">
                        <UtilityIcons />
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default NavbarComponent;