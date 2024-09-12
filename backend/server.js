const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

// Habilitar CORS para todas las peticiones desde tu frontend
app.use(
  cors({
    origin: "http://localhost:3000", // La URL del frontend
  })
);

app.use(express.json());

//Conexion con Base de Datos
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

// --- Home Page (Opcional: puedes tener lógica adicional para la Home) ---
app.get("/", (req, res) => {
  res.send({ message: "Bienvenido a la API del sitio web!" });
});

// --- Ruta para obtener productos ---
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error al obtener productos" });
  }
});

// --- Ruta para obtener información sobre la empresa ---
app.get("/api/about", (req, res) => {
  const aboutInfo = {
    companyName: "Mi Empresa",
    description:
      "Somos una empresa que se dedica a ofrecer los mejores productos tecnológicos.",
    mission: "Brindar soluciones innovadoras a nuestros clientes.",
  };
  res.json(aboutInfo);
});

// --- Ruta para obtener lista de servicios ---
app.get("/api/services", (req, res) => {
  const services = [
    {
      id: 1,
      name: "Desarrollo Web",
      description: "Creamos páginas web increíbles.",
    },
    {
      id: 2,
      name: "Consultoría Tecnológica",
      description: "Ofrecemos asesoría tecnológica.",
    },
    {
      id: 3,
      name: "Soporte Técnico",
      description: "Brindamos soporte técnico 24/7.",
    },
  ];
  res.json(services);
});

// --- Monit, Terraform, y otras integraciones ---
app.get("/api/status", (req, res) => {
  // Aquí puedes agregar lógica para verificar el estado del sistema, si estás utilizando Monit o Terraform
  const systemStatus = {
    status: "OK",
    services: ["Redis", "PostgreSQL", "Node.js"],
    uptime: "72 hours",
  };
  res.json(systemStatus);
});

// --- Manejar rutas no encontradas (404) ---
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});
