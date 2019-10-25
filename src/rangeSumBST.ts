export const rangeSumBST = (root: {val: number, left: any, right: any}, L: number, R: number): number => {
    let result = 0;
    if (root === null) {
        return 0;
    }
    if (root.val < L) {
        return rangeSumBST(root.right, L, R);
    }
    if (root.val > R) {
        return rangeSumBST(root.left, L, R);
    }
    result += root.val;
    result += rangeSumBST(root.left, L, R)
    result += rangeSumBST(root.right, L, R)
    return result;
};
