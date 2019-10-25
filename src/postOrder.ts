import {Stack, Node} from "./Stack";

export const postOrder = <T extends{}>(node: Node<T>): Array<T> => {
    const stack1: Stack<T> = new Stack<T>([node]);
    const stack2: Stack<T> = new Stack([]);
    const result: Array<T> = [];
    let item: Node<T> = null;
    while (!stack1.isEmpty()) {
        item  = stack1.pop();
        if (item) {
            stack2.push(item);
            if (item.left) {
                stack1.push(item.left);
            }
            if (item.right) {
                stack1.push(item.right);
            }
        }
    }
    while (!stack2.isEmpty()) {
        const item: Node<T> = stack2.pop();
        if (item) {
            result.push(item.val);
        }
    }
    return result;
};
