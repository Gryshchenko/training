export const intersection = (nums1: number[], nums2: number[]) => {
    if (nums1 === undefined || nums1 === null || nums2 === undefined || nums2 === null) {
        return null;
    }
    let j = nums1.length;
    let i = nums2.length;
    const result: number[] = []
    if (i > j) {
        for (let a = 0; a < i; a++) {
            if (nums1.includes(nums2[a]) && !result.includes(nums2[a])){
                result.push(nums2[a]);
            }
        }
    } else {
        for (let a = 0; a < j; a++) {
            if (nums2.includes(nums1[a]) && !result.includes(nums1[a])){
                result.push(nums1[a]);
            }
        }
    }
    return result;
}
