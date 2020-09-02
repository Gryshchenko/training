class QuickFind {
    private nodes: number[] = [];

    public QuickFind(N: number): void {
        this.nodes = new Array(N);
        for (let i: number = 0; i < N; i++) {
            this.nodes[i] = i;
        }
    }
    public union(p, q): void {
        const pNode: number = this.nodes[p];
        const qNode: number = this.nodes[q];
        for (let i: number = 0; i < this.nodes.length; i += 1) {
            if (this.nodes[i] === qNode) {
                this.nodes[i] = pNode;
            }
        }
    }

    public connected(p: number, q: number): boolean {
        return this.nodes[p] == this.nodes[q];
    }
}
