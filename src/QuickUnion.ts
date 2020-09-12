export class QuickUnion {
    private nodes: number[] = [];
    private sz: number[] = [];
    public constructor(N: number) {
        this.nodes = new Array(N);
        this.sz = new Array(N);
        for (let i: number = 0; i < N; i++) {
            this.nodes[i] = i;
            this.sz[i] = 1;
        }
    }
    public union(p, q): void {
        const pRoot: number = this.root(p);
        const qRoot: number = this.root(q);
        if (qRoot === pRoot) {
            return ;
        }

        if (this.sz[pRoot] < this.sz[qRoot]) {
            this.nodes[pRoot] = qRoot;
            this.sz[qRoot] += this.sz[pRoot];
        } else {
            this.nodes[qRoot] = pRoot;
            this.sz[pRoot] += this.sz[qRoot];
        }
    }
    private root(p: number): number {
        while (p !== this.nodes[p]) {
            p = this.nodes[p];
        }
        return p;
    }
    public connected(p: number, q: number): boolean {
        return this.root(p) == this.root(q);
    }
}
