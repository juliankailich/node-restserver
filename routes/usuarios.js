
import { Router } from 'express';
import { usuariosDelete, 
        usuariosGet, 
        usuariosPost, 
        usuariosPut } from '../controllers/usuarios.js';

export const router = Router();

router.get('/', usuariosGet);

// este :id es para obtener este valor por ej.. localhost:8000/usuarios/y el id que envien en la url
router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

