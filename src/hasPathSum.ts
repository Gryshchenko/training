import {Node} from "./Stack";

export const hasPathSum = <T extends {}>(root: Node<number>, number: number): boolean => {
    if (root === null) {
        return false;
    }
    let value: number = number - root.val;
    if (value === 0 && root.left === null && root.right === null) {
        return true;
    }
    const left: boolean = hasPathSum(root.left, value);
    const right: boolean = hasPathSum(root.right, value);
    return left || right;
}
