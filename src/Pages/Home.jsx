import React from 'react';
import BannerPrincipal from '../components/Home/BannerPrincipal';
function Home() {
  return (
    // Asegúrate de que esta clase 'content-offset' tenga el padding-top necesario 
    // para que el contenido no quede oculto detrás del Navbar fijo.
    <div className="content-offset"> 
      
      <BannerPrincipal /> 
      
      {/* Aquí irá el resto del contenido de tu Home Page (ej: PromotionsGrid) */}
    </div>
  );
}

export default Home;