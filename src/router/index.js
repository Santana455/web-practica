import { Router } from "express";
import { TraerWeb } from "../services/conexion.js";
import { TraerEmpleados } from "../services/conexion.js";
import { TraerAlmacen } from '../services/conexion.js';
import { TraerCarro } from '../services/conexion.js';
import { TraerProductos } from '../services/conexion.js';

const router = Router();

router.get('/', (req, res) =>res.render('index', {title: 'Proyecto JN'}));
router.get('/about', (req, res) =>res.render('about', {title: 'Sobre Nosotros'}));
router.get('/contact', (req, res) =>res.render('contact', {title: 'Contacto'}));

router.get('/api/get-web', async(req, res)=>{
    const web= await TraerWeb()
    res.status(200).json(web)
});

router.get('/api/get-empleados', async (req, res) => {
    try {
      const empleados = await TraerEmpleados();
      res.status(200).json(empleados);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los empleados" });
    }
  });

router.get('/api/get-almacen', async (req, res) => {
  try {
    const almacen = await TraerAlmacen();
    res.status(200).json(almacen);
  }catch (error) {
    res.status(500).json({ error: "Error al obtener los almacen"});
  }
});

router.get('/api/get-carro', async (req, res) => {
  try {
    const carro = await TraerCarro();
    res.status(200).json(carro);
  }catch (error) {
    res.status(500).json({ error: "Error al obtener los carros"});
  }
});

router.get('/api/get-productos', async (req, res) => {
  try {
    const productos = await TraerProductos();
    res.status(200).json(productos);
  }catch (error) {
    res.status(500).json({ error: "Error al obtener los productos"});
  }
})

export default router;

