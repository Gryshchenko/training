export const diagonalTraverse = (matrix: Array<number[]>): number[] => {
    let isUp: boolean = true;
    const rows: number = matrix.length;
    let y: number = 0;
    let x: number = 0;
    const result: number[] = [];
    if (rows === 1) {
        return matrix[0];
    }
    for (let row = 0; row < rows * rows;) {
        if (isUp) {
            for (; y >= 0 && x < rows; x++, y--) {
                result.push(matrix[y][x]);
                row++;
            }
            if (y < 0 && x <= rows - 1) {
                y = 0;
            }
            if (x === rows) {
                y = y + 2;
                x--;
            }
        } else {
            for (; x >= 0 && y < rows; y++, x--) {
                result.push(matrix[y][x]);
                row++;
            }
            if (x < 0 && y <= rows - 1) {
                x = 0;
            }
            if (y === rows) {
                x = x + 2;
                y--;
            }
        }
        isUp = !isUp;
    }
    return result;
};
