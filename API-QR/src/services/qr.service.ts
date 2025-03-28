import { Matrix, QrDecomposition } from 'ml-matrix';
export const qrFactorizacion = (matriz: number[][]) => {
    try {
        console.log('Factorizando matriz');
        const A = new Matrix(matriz);
        const qr = new QrDecomposition(A);
        return {
            Q: qr.orthogonalMatrix.to2DArray(),
            R: qr.upperTriangularMatrix.to2DArray()
        };
    } catch (error) {
        throw new Error('Error al factorizar');
    }
};
