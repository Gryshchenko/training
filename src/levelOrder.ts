import {Stack, Node} from "./Stack";

export const levelOrder = <T extends {}>(node: Node<T>): Array<Array<T>> => {
    const stack: Stack<T> = new Stack<T>([node]);
    if (stack.isEmpty()) {
        return null;
    }
    const result: Array<Array<T>> = [];
    while (!stack.isEmpty()) {
        let stackSize: number = stack.size();
        const currentLevel: Array<T>  = [];
        while (stackSize > 0) {
            const node: Node<T> = stack.shift();
            if (node) {
                if (node.val !== null && node.val !== undefined) {
                    currentLevel.push(node.val);
                }
                if (node.left) {
                    stack.push(node.left);
                }
                if (node.right) {
                    stack.push(node.right);
                }
            }
            stackSize--;
        }
        if (currentLevel.length > 0) {
            result.push(currentLevel);
        }
    }
    return result;
}
