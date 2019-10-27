import express from 'express';
import {Node} from "./Stack";
import {preOrder} from "./preOrder";
import {inOrder} from './inOrder';
import {postOrder} from './postOrder';
import {treeNode1} from "./data";
import {levelOrder} from "./levelOrder";

const app = express();
const port = 5556;
app.get('/', (req, res) => {
    res.send('The sedulous hyena ate the antelope!');
});



app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.log(levelOrder<number>(treeNode1));
    return console.log(`server is listening on ${port}`);
});
