import express from 'express';
import {QuickUnion} from "./QuickUnion";
const path = require('path');
const router = express.Router();

const app = express();
const port = 5555;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

app.listen(port, err => {
    const q = new QuickUnion(10);
    q.union(0, 2);
    q.union(2, 3);
    q.union(7, 9);
    q.union(6, 8);
    q.union(4, 6);
    q.union(8, 9);
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
