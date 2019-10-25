import {Stack, Node} from "./Stack";

export const inOrder = <T extends {}>(root: Node<T>): Array<T> => {
    const stack: Stack<T> = new Stack<T>([root]);
    const result: Array<T> = [];
    let current: Node<T> = root;
    let item: Node<T> = null;
    while (current !== null || !stack.isEmpty()) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        if (current) {
            result.push(current.val);
            current = current.right;
        }
    }
    return result;
};
