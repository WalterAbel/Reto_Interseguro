import express from 'express';
import { procesarMatriz } from '../controller/qr.controller';

const router = express.Router();
router.post('/qr', procesarMatriz);
export default router;