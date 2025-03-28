import express from 'express';
import { procesarCalculos } from '../controller/stats.controller';

const router = express.Router();
router.post('/stats', procesarCalculos);
export default router;