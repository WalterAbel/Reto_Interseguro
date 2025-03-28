import app from './app';

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Stats API corriendo en puerto ${PORT}`);
});