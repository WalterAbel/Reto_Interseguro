import app from './app';

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`QR API corriendo en puerto: ${PORT}`);
});