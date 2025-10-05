import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auricularesBanner from '../../assets/AuricularesBanner2.png';
import './BannerPrincipal.css';

const BannerPrincipal = () => {
  return (
    <Container 
      fluid 
      className="banner-principal-container mt-5 pt-5 pb-5 px-3 px-md-5"
    >
      <Row className="align-items-center g-4 g-lg-0 rounded-4 overflow-hidden shadow-sm bg-white">
        
        {/* Columna Izquierda (Texto) */}
        <Col 
          lg={6} 
          className="text-center text-lg-start ps-lg-5 pe-lg-4 order-2 order-lg-1"
        >
          <p className="text-danger fw-bold text-uppercase m-0">
            Beats Solo
          </p>
          <h1 className="display-4 fw-bolder mb-3" style={{ lineHeight: 1.1 }}>
            Auriculares <br />
            <span className="text-dark">Inalámbricos</span>
          </h1>
          <p className="text-muted mb-4 px-2 px-lg-0">
            Disfrutá de un sonido nítido y la máxima comodidad — diseñados para quienes aman el audio potente y profundo.
          </p>

          <Button 
            as={Link} 
            to="/shop" 
            variant="danger" 
            size="lg"
            className="mt-2 text-uppercase fw-bold px-4 py-2"
          >
            Ver más
          </Button>
        </Col>

        {/* Columna Derecha (Imagen) */}
        <Col 
          lg={6} 
          className="banner-principal-image-container order-1 order-lg-2"
        >
          <Image 
            src={auricularesBanner}
            alt="Auriculares" 
            fluid 
            className="banner-principal-image shadow-sm"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BannerPrincipal;
