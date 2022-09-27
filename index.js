
import express from "express";
import router from "./route/index.js";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/v1" ,router);


















app.listen(port, 
 console.log('Example app listening on port 3000!'),
);

