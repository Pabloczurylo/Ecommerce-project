import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaUser, FaSearch, FaShoppingCart } from 'react-icons/fa'; 

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className="py-3 border-bottom" fixed="top"> 
      <Container className="d-flex justify-content-between align-items-center"> 
        {/* Usamos d-flex y justify-content-between para distribuir los elementos extremos */}
        
        {/* 1. Logo (PH LOX) - Izquierda, alineado */}
        <Navbar.Brand 
            as={NavLink} 
            to="/" 
            className="fw-bolder fs-5 text-dark" 
        >
            PH LOX
        </Navbar.Brand>
        
        {/* 2. Íconos de Utilidad y Toggle (Derecha, siempre visibles) */}
        {/* Este div debe ir antes del Navbar.Collapse para que los íconos se mantengan a la derecha del logo en desktop */}
        <div className="d-flex align-items-center ms-auto">
            
            {/* Íconos de Utilidad (Login, Search, Cart) - HORIZONTAL Y FUERA DEL MENÚ */}
            <div className="d-flex align-items-center"> 
                
                <NavLink to="/search" className="text-dark fs-5 p-2 nav-link-custom"><FaSearch /></NavLink>
                <NavLink to="/cart" className="text-dark fs-5 p-2 position-relative nav-link-custom">
                    <FaShoppingCart />
                    <span style={{ position: 'absolute', top: '0px', right: '-2px', fontSize: '0.6em', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '2px 5px', lineHeight: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>0</span>
                </NavLink>
                <NavLink to="/login" className="text-dark fs-5 p-2 nav-link-custom"><FaUser /></NavLink>
            </div>

            {/* Toggle (Botón Hamburguesa) - Solo visible en móvil, a la derecha de los íconos */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-3 d-lg-none" /> 
            
        </div>
        
        {/* 3. Links Principales - Se colapsan/ocultan en móvil (lg) */}
        {/* Debe estar después de los íconos para que los íconos se prioricen a la derecha */}
        {/* Usamos una clase personalizada para arreglar el despliegue en móvil */}
        <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse-mobile">
          <Nav className="mx-auto mb-2 mb-lg-0"> 
            <Nav.Link as={NavLink} to="/" className="text-dark px-3 fw-medium nav-link-custom">Inicio</Nav.Link>
            {/* ... el resto de tus Nav.Link ... */}
            <Nav.Link as={NavLink} to="/shop" className="text-dark px-3 fw-medium nav-link-custom">Tienda</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-dark px-3 fw-medium nav-link-custom">Acerca de</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="text-dark px-3 fw-medium nav-link-custom">Contáctanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavbarComponent;