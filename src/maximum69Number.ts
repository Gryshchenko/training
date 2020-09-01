import {Stack, Node} from "./Stack";

export const maximum69Number = (num: number): number => {
    const numString: string[] = num.toString().split("");
    for (let i = 0; i < numString.length; i++) {
        if (numString[i] !== '9') {
            numString[i] = '9';
            return Number(numString.join(""));
        }
    }
    return num;
};
