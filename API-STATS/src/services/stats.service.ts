export const CalcularEstadisticas = (matriz: { Q: number[][]; R: number[][] }) => {
    const allValues = [...matriz.Q.flat(), ...matriz.R.flat()];
    const max = Math.max(...allValues);
    const min = Math.min(...allValues);
    const sum = allValues.reduce((acc, val) => acc + val, 0);
    const avg = sum / allValues.length;

    const isDiagonal = (mat: number[][]) => {
        return mat.every((row, i) => row.every((val, j) => (i !== j ? val === 0 : true)));
    };

    return {
        max,
        min,
        avg,
        sum,
        isDiagonalQ: isDiagonal(matriz.Q),
        isDiagonalR: isDiagonal(matriz.R)
    };
};