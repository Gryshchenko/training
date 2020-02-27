export const containsDuplicate = (numbers: number[]): boolean => {
    if (numbers === undefined || numbers === null || numbers.length === 0) {
        return false;
    }
    const checkedNumbers = new Map();
    let i: number = 0;
    while (i < numbers.length) {
        if (!checkedNumbers.has(numbers[i])) {
            checkedNumbers.set(numbers[i], numbers[i]);
        } else {
            return true;
        }
        i++;
    }
    return false;
}
