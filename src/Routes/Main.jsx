import React from "react";
import { Routes, Route } from "react-router-dom";

// Vistas

// Componentes
import Example from "../Components/Example.jsx";


function Main() {
  return (
    <>
      <div id="Background">
        <Routes>
          {/* Ruta para la vista inicial "Start" */}
          <Route path="/" element={<Example />}>
            <Route path="Hola" element={<Example />} />
          </Route>
          
        </Routes>
      </div>
    </>
  );
}

export default Main;