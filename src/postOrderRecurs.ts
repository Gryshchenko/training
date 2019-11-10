import {Node} from "./Stack";
const maxDepth = <T extends{}>(node: Node<T>, result: Array<T>): Array<T> => {
    if (node) {
        if (node.val) {
            result.push(node.val);
        }
        if (node.left) {
            result = maxDepth(node.left, result);
        }
        if (node.right) {
            result = maxDepth(node.right, result);
        }
    }
    return result;
}
export const postOrderRecurs = <T extends{}>(node: Node<T>): Array<T> => {
    let result: Array<T> = [];
    if (node) {
        if (node.val) {
            result.push(node.val);
        }
        if (node.left) {
            result = maxDepth(node.left, result);
        }
        if (node.right) {
            result = maxDepth(node.right, result);
        }
    }
    return result;
}
