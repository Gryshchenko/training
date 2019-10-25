import {Stack, Node} from "./Stack";

export const preOrder = <T extends {}>(root: Node<T>): Array<T> => {
    const stack: Stack<T> = new Stack<T>([root]);
    const result: Array<T> = [];
    if (stack.isEmpty()) {
        return null;
    }
    let item: Node<T> = null;
    while (!stack.isEmpty()) {
        item = stack.pop();
        if (item) {
            if (item.right) {
                result.push(item.val);
                stack.push(item.right);
            }
            if (item.left) {
                result.push(item.val);
                stack.push(item.left);
            }
        }
    }
    return result;
};
