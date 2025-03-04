import express from 'express';
import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './router/index.js';
import { Conectar } from './services/conexion.js';

const app = express();

// Configura CORS antes de definir las rutas
app.use(cors({
  origin: 'https://web-practica-1.onrender.com' // O utiliza '*' para permitir todos los orígenes (solo en desarrollo)
}));

// Obtenemos el directorio actual
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuración de la carpeta de vistas
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(join(__dirname, 'public')));

// Usar las rutas definidas en el router principal
app.use('/', indexRouter);

Conectar();

app.listen(3000, () => {
  console.log("El servidor está corriendo en el puerto: 3000");
});
