import { Router } from "express";
const router = Router();

router.get('/', (req, res) =>res.render('index', {title: 'Proyecto JN'}));
router.get('/about', (req, res) =>res.render('about', {title: 'Sobre Nosotros'}));
router.get('/contact', (req, res) =>res.render('contact', {title: 'Contacto'}));

export default router;
