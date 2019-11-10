import express from 'express';
import {Node} from "./Stack";
import {preOrder} from "./preOrder";
import {inOrder} from './inOrder';
import {postOrder} from './postOrder';
import {treeNode1, treeNode2, treeNode3, treeNode4, treeNode5, treeNode6} from "./data";
import {levelOrder} from "./levelOrder";
import {postOrderRecurs} from "./postOrderRecurs";
import {maxDepth} from "./maxDepth";
import {isSymmetric} from "./isSymmetric";
import {hasPathSum} from "./hasPathSum";

const app = express();
const port = 5555;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});



app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(hasPathSum<number>(treeNode6, 23));
    return console.log(`server is listening on ${port}`);
});
