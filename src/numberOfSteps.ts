export const numberOfSteps = (num: number, count: number = 0): number => {
    if (num === 0) {
        return count;
    }
    if (num % 2 === 0) {
        return numberOfSteps(num / 2, count + 1)
    } else {
        return numberOfSteps(num - 1, count + 1);
    }
};
