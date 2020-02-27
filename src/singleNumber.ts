export const singleNumber = (nums: number[]) => {
    let result = 0;
    let i = 0;
    while (i < nums.length) {
        result ^= nums[i];
        i++;
    }
    return result;
}
