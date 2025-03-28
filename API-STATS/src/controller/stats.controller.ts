import { Request, Response } from 'express';
import { CalcularEstadisticas } from '../services/stats.service';

export const procesarCalculos = async (req: Request, res: Response) => {
    try {
        const { matriz } = req.body;
        if (!matriz || typeof matriz !== 'object') {
            return res.status(400).json({ error: 'Formato de matriz invalido' });
        }

        console.log('Matriz recibida exitosamente')
        const stats = CalcularEstadisticas(matriz);
        console.log('Estadisticas calculadas exitosamente');
        res.json({ stats });
    } catch (error) {
        res.status(500).json({ error: 'Error al procesar las estadisticas' });
    }
};