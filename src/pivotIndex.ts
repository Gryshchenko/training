
const getSum = (nums: number[], fromIndex: number): number => {
    let rightSum: number = 0;
    while (fromIndex < nums.length) {
        rightSum += nums[fromIndex];
        fromIndex++;
    }
    return rightSum;
}

export const pivotIndex = (nums: number[]): number => {
    if (nums === null || nums === undefined || nums.length === 0) {
        return -1;
    }
    let leftSum: number = 0;
    let totalSum: number = getSum(nums, 0);
    let rightSum: number = 0;
    let i = 0;
    while (i < nums.length) {
        leftSum += nums[i];
        rightSum = totalSum - (leftSum - nums[i]);
        if (leftSum === rightSum) {
            return i;
        }
        i++;
    }
    return -1;
}
