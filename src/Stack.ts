export interface Node<T extends {}> {
    left: Node<T>;
    right: Node<T>;
    val: T;
}

class Stack<T extends {}> {
    protected items: Array<Node<T>> = null;
    constructor(item: Array<Node<T>>) {
        this.items = item;
    }
    public push(item: Node<T>): void {
        this.items.push(item)
    }
    public pop(): Node<T> {
        if (this.items.length === 0) {
            return null;
        } else {
            return this.items.pop();
        }
    }
    public peek(): Node<T> {
        return this.items[this.items.length - 1];
    }
    public isEmpty(): boolean {
        return this.items.length === 0;
    }
    public printStack(): void {
        this.items.forEach((item) => {
            console.log(item);
        });
    }
}

export {
    Stack
};
