import express from 'express';
import {QuickUnion} from "./QuickUnion";
import {binary_search} from "./binary_search";
import {selectionSort} from "./selectionSort";
import {quickSort} from "./QuickSort";
const path = require('path');
const router = express.Router();

const app = express();
const port = 5555;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

app.listen(port, err => {
    console.log(quickSort([9,8,7,6,5,4,3,2,1]));
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
