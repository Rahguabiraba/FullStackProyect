// src/pages/About.js
import React, { useState, useEffect } from "react";

function About() {
  const [aboutInfo, setAboutInfo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/about")
      .then((response) => response.json())
      .then((data) => setAboutInfo(data))
      .catch((error) =>
        console.error("Error al obtener la información sobre nosotros:", error)
      );
  }, []);

  return (
    <div>
      <h1>Sobre Nosotros</h1>
      {aboutInfo ? (
        <div>
          <h2>{aboutInfo.companyName}</h2>
          <p>{aboutInfo.description}</p>
          <p>Misión: {aboutInfo.mission}</p>
        </div>
      ) : (
        <p>Cargando información...</p>
      )}
    </div>
  );
}

export default About;
