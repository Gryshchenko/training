import {Node} from "./Stack";
export const maxDepth = <T extends{}>(node: Node<T>): number => {
    let r: number = null;
    const max = <T extends{}>(node: Node<T>, result: number) => {
        if (node) {
            if (!node.left && !node.right) {
                if (result > r) {
                    r = result;
                }
            }
        }
        if (node.right) {
            max(node.right, result + 1);
        }
        if (node.left) {
            max(node.left, result + 1);
        }
    };
    let result: number = 0;
    if (node) {
        max(node, result + 1);
    }
    return r;
}
