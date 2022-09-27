import  express  from "express";
import * as mainController from "../controller/index.js"
import * as loginController from "../controller/loginController.js"

const router = express.Router();

router.get("/greet",mainController.greetController);

router.post("/signUp",loginController.signUp);

router.post("/login",loginController.login);







export default router;


