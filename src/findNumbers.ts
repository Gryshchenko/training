const count = (num: number): boolean => {
    let n: number = num;
    let l: number = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        l++;
    }
    return l % 2 === 0;
}

export const findNumbers = (n: number[]): number => {
    if (!n) {
        return 0;
    }
    let i: number = 0;
    n.forEach((v: number) => {
        if (count(v)) {
            i++;
        }
    })
    return i;
};
