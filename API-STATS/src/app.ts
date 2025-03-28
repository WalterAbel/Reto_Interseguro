import express from 'express';
import statsRoutes from './routes/stats.routes';

const app = express();
app.use(express.json());
app.use('/api', statsRoutes);

export default app;