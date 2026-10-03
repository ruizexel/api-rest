const express = require('express');
const router = express.Router();

router.post('/estudiantes', (req, res) => {
   res.json({msj: 'Ingreso de estudiantes'}); 
});

router.put('/estudiantes', (req, res) => {
   res.json({msj: 'Actualización de estudiantes'}); 
});


router.delete('/estudiantes', (req, res) => {
   res.json({msj: 'Boorado de estudiantes'}); 
});



