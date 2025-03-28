"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qrFactorizacion = void 0;
const ml_matrix_1 = require("ml-matrix");
const qrFactorizacion = (matriz) => {
    try {
        console.log('Factorizando matriz');
        const A = new ml_matrix_1.Matrix(matriz);
        const qr = new ml_matrix_1.QrDecomposition(A);
        return {
            Q: qr.orthogonalMatrix.to2DArray(),
            R: qr.upperTriangularMatrix.to2DArray()
        };
    }
    catch (error) {
        throw new Error('Error al factorizar');
    }
};
exports.qrFactorizacion = qrFactorizacion;
