import express from 'express';
import {QuickUnion} from "./QuickUnion";
import {binary_search} from "./binary_search";
import {selectionSort} from "./selectionSort";
import {quickSort} from "./QuickSort";
import {Graph} from "./graph";
const path = require('path');
const router = express.Router();

const app = express();
const port = 5555;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

app.listen(port, err => {
    const graph = new Graph();
    graph.addVertex('you');
    graph.addVertex('bob');
    graph.addVertex('claire');
    graph.addVertex('anuj');
    graph.addVertex('peggy');
    graph.addVertex('thom');
    graph.addVertex('jonny');
    graph.addEdge('you', 'alice');
    graph.addEdge('you', 'bob');
    graph.addEdge('you', 'claire');
    graph.addEdge('alice', 'peggy');
    graph.addEdge('bob', 'anuj');
    graph.addEdge('claire', 'thom');
    graph.addEdge('claire', 'jonny');
    console.log(graph.breadthFirstSearch('you', 'claire'));
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
