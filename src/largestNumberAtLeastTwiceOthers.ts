export const largestNumberAtLeastTwiceOthers = (nums: number[]): number => {
    if (nums === null || nums === undefined || nums.length === 0) {
        return -1;
    }
    let i: number = 0;
    let indexOfMaxValue: number = 0;
    while (i < nums.length) {
        if (nums[i] > nums[indexOfMaxValue]) {
            indexOfMaxValue = i;
        }
        i++;
    }
    i = 0;
    while (i < nums.length) {
        if (indexOfMaxValue !== i && (nums[i] * 2) > nums[indexOfMaxValue]) {
            return -1;
        }
        i++;
    }
    return indexOfMaxValue;
}
