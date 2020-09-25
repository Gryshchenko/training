
type R = number | string;
export class Graph {
    protected adjacencyList: Record<R, R[]>;
    public constructor() {
        this.adjacencyList = {};
    }
    public addVertex(vertex: R) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    public addEdge(source: R, destination: R) {
        if (!this.adjacencyList[source]) {
            this.addVertex(source);
        }
        if (!this.adjacencyList[destination]) {
            this.addVertex(destination)
        }
        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source);
    }
    public removeEdge(source: R, destination: R) {
        if (this.adjacencyList[source]) {
            this.adjacencyList[source] = this.adjacencyList[source].filter((vertex) => vertex !== destination);
        }
        if (this.adjacencyList[destination]) {
            this.adjacencyList[destination] = this.adjacencyList[destination].filter((vertex) => vertex !== source);
        }
    }
    public removeVertex(vertex: R) {
        while (this.adjacencyList[vertex]) {
            const adjacentVertex: R = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    public breadthFirstSearch(start: R, search: R): R {
        const quote: R[] = [start];
        const visited: Record<R, boolean> = {};
        while (quote.length) {
            const adjacentVertex = quote.shift();
            const neighbors = this.adjacencyList[adjacentVertex];
            for (const neighbor of neighbors) {
                if (!visited[neighbor]) {
                    if (neighbor === search) {
                        return neighbor;
                    }
                    visited[neighbor] = true;
                    quote.push(neighbor);

                }
            }
        }
        return null;
    }
}
