export const subtractProductAndSum = (n: string): number => {
    if (!n) {
        return 0;
    }
    const arr: string[] = n.toString().split("");
    let r1: number = Number(arr[0]);
    let r2: number = r1;
    for (let i = 1; i < arr.length; i++) {
        r1 = Number(arr[i]) * r1;
        r2 = Number(arr[i]) + r2;
    }
    return r1 - r2;
};
