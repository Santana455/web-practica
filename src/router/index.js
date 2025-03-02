import { Router } from "express";
import { TraerWeb } from "../services/conexion.js";
const router = Router();

router.get('/', (req, res) =>res.render('index', {title: 'Proyecto JN'}));
router.get('/about', (req, res) =>res.render('about', {title: 'Sobre Nosotros'}));
router.get('/contact', (req, res) =>res.render('contact', {title: 'Contacto'}));

router.get('/api/get-web', async(req, res)=>{
    const web= await TraerWeb()
    res.status(200).json(web)
})

export default router;
