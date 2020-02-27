export const countNegatives = (n: Array<number[]>): number => {
    let i = 0;
    n.forEach((v: number[]) => v.forEach((v: number) => v < 0 ? i++ : null));
    return i;
};
