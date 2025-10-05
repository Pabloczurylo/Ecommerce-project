import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auricularesBanner from '../../assets/AuricularesBanner2.png';

const BannerPrincipal = () => {
  return (
    <Container fluid className="my-5 pt-5 pb-5 px-4 px-md-5">
      <Row className="align-items-center g-0 rounded-4 overflow-hidden shadow-sm bg-white">
        
        {/* Columna Izquierda */}
        <Col 
          lg={6} 
          className="text-center text-lg-start mb-4 mb-lg-0 ps-lg-5 pe-lg-4"
        >
          <p className="text-danger fw-bold text-uppercase m-0">
            Beats Solo
          </p>
          <h1 className="display-2 fw-bolder mb-3" style={{ lineHeight: 1.1 }}>
            Auriculares <br />
            <span className="text-dark">Inalambricos</span>
          </h1>
          <p className="text-muted mb-4">
            Tenemos gran variedad de auriculares inalambricos...
          </p>

          <Button 
            as={Link} 
            to="/shop" 
            variant="danger" 
            size="lg"
            className="mt-3 text-uppercase fw-bold px-4 py-2"
          >
            Ver mas
          </Button>
        </Col>

        {/* Columna Derecha */}
        <Col lg={6} className="banner-image-container p-0 m-0 pe-lg-4">
          <Image 
            src={auricularesBanner}
            alt="Auriculares" 
            fluid 
            className="banner-image rounded-4 shadow-sm"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BannerPrincipal;
