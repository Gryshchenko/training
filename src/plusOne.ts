export const plusOne = (digits: number[]): number[] => {
    if (!digits || digits.length === 0) {
        return [];
    }
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    const result = new Array(digits.length + 1).fill(0);
    result[0] = 1;
    return result;
};
