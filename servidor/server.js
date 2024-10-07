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

// Ruta para registrar un nuevo usuario
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );
    res.json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

// Ruta para login de usuario
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (user.rows.length === 0) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ id: user.rows[0].id }, "secret_key", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error en la autenticación" });
  }
});

// --- Manejar rutas no encontradas (404) ---
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});
