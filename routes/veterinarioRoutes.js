import express from 'express';
const router = express.Router();
import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword, actualizarPerfil, actualizarPassword } from "../controllers/veterinarioController.js";
import chekAuth from "../middleware/authMiddleware.js"

//area publica
router.post("/", registrar);
router.get("/confirmar/:token", confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword)
router.get('/olvide-password/:token', comprobarToken)
router.post('/olvide-password/:token', nuevoPassword)

//simplificar
//router.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

//area privada
router.get("/perfil",chekAuth, perfil);
router.put("/perfil/:id", chekAuth, actualizarPerfil)
router.put("/actualizar-password", chekAuth, actualizarPassword)

export default router;