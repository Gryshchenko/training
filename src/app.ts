import express from 'express';
import {plusOne} from "./plusOne";
import {diagonalTraverse} from "./diagonalTraverse";
import {numberOfSteps} from "./numberOfSteps";
import {subtractProductAndSum} from "./subtractProductAndSum";
import {defangIPaddr} from "./defangIPaddr";
import {findNumbers} from "./findNumbers";
import {balancedStringSplit} from "./balancedStringSplit";
import {countNegatives} from "./countNegatives";
const path = require('path');
const router = express.Router();

const app = express();
const port = 5555;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

app.listen(port, err => {
    // console.log(numberOfSteps(123));
    // console.log(numberOfSteps(14));
    // console.log(numberOfSteps(8));
    console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]));
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
