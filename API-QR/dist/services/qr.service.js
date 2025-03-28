"use strict";
// import { Matrix, QrDecomposition } from 'ml-matrix';
Object.defineProperty(exports, "__esModule", { value: true });
exports.qrFactorizacion = void 0;
// export const qrFactorizacion = (matriz: number[][]) => {
//     try {
//         console.log('Factorizando matriz');
//         const A = new Matrix(matriz);
//         const qr = new QrDecomposition(A);
//         return {
//             Q: qr.orthogonalMatrix.to2DArray(),
//             R: qr.upperTriangularMatrix.to2DArray()
//         };
//     } catch (error) {
//         throw new Error('Error al factorizar');
//     }
// };
const ml_matrix_1 = require("ml-matrix");
const qrFactorizacion = (matrix) => {
    var _a, _b;
    try {
        console.log("🧮 Recibida la matriz:", matrix);
        const A = new ml_matrix_1.Matrix(matrix);
        const qr = new ml_matrix_1.QrDecomposition(A);
        console.log("🔍 qr:", qr);
        console.log("🔍 Q:", (_a = qr.orthogonalMatrix) === null || _a === void 0 ? void 0 : _a.to2DArray());
        console.log("🔍 R:", (_b = qr.upperTriangularMatrix) === null || _b === void 0 ? void 0 : _b.to2DArray());
        return {
            Q: qr.orthogonalMatrix.to2DArray(),
            R: qr.upperTriangularMatrix.to2DArray()
        };
    }
    catch (error) {
        console.error("❌ Error en la factorización QR:", error);
        throw new Error("No se pudo calcular la factorización QR");
    }
};
exports.qrFactorizacion = qrFactorizacion;
