const express = require('express');
const router = express.Router();
import * as mainController from "../controller/index.js"

router.get("/greet",mainController.greetController);
//export default router;
module.exports = {router};