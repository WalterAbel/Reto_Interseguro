import express from 'express';
import qrRoutes from './routes/qr.routes';

const app = express();
app.use(express.json());
app.use('/api', qrRoutes);

export default app;