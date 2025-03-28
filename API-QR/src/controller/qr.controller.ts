import { Request, Response } from 'express';
import { qrFactorizacion } from '../services/qr.service';
import axios from 'axios';

export const procesarMatriz = async (req: Request, res: Response) => {
    try {
        const { matriz } = req.body;
        if (!matriz || !Array.isArray(matriz)) {
            return res.status(400).json({ error: 'Formato invalido de matriz' });
        }
        console.log("Matriz recibida:", matriz);

        const qrResult = qrFactorizacion(matriz);
        console.log("Factorización QR exitosa");

        const statsResponse = await axios.post('http://api-stats:3001/api/stats', { matriz: qrResult });

        console.log("Respuesta de API de estadísticas:", statsResponse.data);
        res.json({ qrResult, stats: statsResponse.data });

    } catch (error) {
        res.status(500).json({ error: 'Error procesando matriz' });
    }
};