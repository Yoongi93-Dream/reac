import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pr from './Pr.jsx';
import AS from './acor.jsx';
import Carrusel from './Carrusel.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pr 
      Carrusel={Carrusel} 
      AS={AS} 
    />
  </StrictMode>
);
