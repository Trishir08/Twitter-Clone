import express from "express"
import { createTweet, deleteTweet, likeOrDislike } from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";
import { bookmark } from "../controllers/userController.js";

const router = express.Router() ; 

router.route("/create").post(isAuthenticated, createTweet) ;
router.route("/delete/:id").delete(isAuthenticated , deleteTweet) ;
router.route("/like/:id").put(isAuthenticated , likeOrDislike) ; 
router.route("/bookmark/:id").put(isAuthenticated , bookmark) ;
export default router ;