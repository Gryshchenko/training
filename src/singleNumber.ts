export const singleNumber = (nums: number[]) => {
    const map = {};
    for (let n of nums) {
        if (map[n] == null) {
            map[n] = 0;
        }
        map[n]++;
    }
}
