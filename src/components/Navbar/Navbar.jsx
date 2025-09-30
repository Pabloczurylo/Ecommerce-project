import React from 'react';
// Importamos los componentes de React Bootstrap
import { Navbar, Nav, Container } from 'react-bootstrap';
// Importamos Link para la navegación interna (es crucial usarlo con Nav.Link)
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    // Navbar principal: fondo claro (bg-light), expande en lg (escritorio)
    <Navbar bg="light" expand="lg" className="py-3 border-bottom" fixed='top'> 
      <Container>
        {/* 1. Logo (PH LOX) */}
        {/* Usamos 'as={Link} to="/"' para que el logo dirija al inicio y mantenga el estilo de React-Router */}
        <Navbar.Brand 
          as={Link} 
          to="/" 
          className="fw-bolder fs-5 text-dark me-5" // fw-bolder para negrita, fs-5 para tamaño, me-5 para separar
        >
          PH LOX
        </Navbar.Brand>

        {/* Botón para dispositivos móviles (el menú hamburguesa) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          
          {/* 2. Links Principales */}
          {/* Usamos 'me-auto' para que esta sección de enlaces ocupe el espacio disponible y empuje los iconos a la derecha */}
          <Nav className="me-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" className="text-dark px-3 fw-medium">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" className="text-dark px-3 fw-medium">Shop</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark px-3 fw-medium">About Us</Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-dark px-3 fw-medium">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-dark px-3 fw-medium">Contact Us</Nav.Link>
          </Nav>

          {/* 3. Iconos de Utilidad (login y búsqueda/carrito) */}
          <Nav className="d-flex align-items-center">
            
            {/* Login Link (El texto 'login' es visible en el diseño) */}
            <Nav.Link as={Link} to="/login" className="text-dark fw-medium me-3">
                login
            </Nav.Link>

            {/* Icono de Búsqueda (Q) */}
            <Nav.Link as={Link} to="/search" className="text-dark fs-5 me-2">
                {/* Aquí deberías integrar un ícono real (ej: <FaSearch /> de react-icons). */}
                <span role="img" aria-label="Buscar">🔍</span>
            </Nav.Link>

            {/* Icono de Carrito (Asumido, ya que es una tienda online) */}
            <Nav.Link as={Link} to="/cart" className="text-dark fs-5">
                {/* Aquí deberías integrar un ícono real (ej: <FaShoppingCart /> de react-icons). */}
                <span role="img" aria-label="Carrito">🛒</span>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;