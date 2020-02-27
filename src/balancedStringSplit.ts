export const balancedStringSplit = (n: string): number => {
    if (!n) {
        return 0;
    }
    let count: number = 0;
    let result: number = 0;
    for(let i = 0; i < n.length; i++) {
        n[i] === "L" ? count++ : count--;
        count === 0 && result++;
    }
    return result;
};
