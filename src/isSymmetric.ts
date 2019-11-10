import {Node} from "./Stack";

const isMirror = <T extends{}>(node: Node<T>, node1: Node<T>): boolean => {
    if (node1 === null&& node === null) {
        return true
    }
    if (node && node1 && node.val === node1.val) {
        return isMirror(node.left, node1.right) && isMirror(node.right, node1.left);
    }
    return false;
}

export const isSymmetric  = <T extends{}>(node: Node<T>): boolean =>  {
    return isMirror(node, node);
}
