// src/pages/Services.js
import React, { useState, useEffect } from "react";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) =>
        console.error("Error al obtener los servicios:", error)
      );
  }, []);

  return (
    <div>
      <h1>Servicios que ofrecemos</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name}: {service.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
