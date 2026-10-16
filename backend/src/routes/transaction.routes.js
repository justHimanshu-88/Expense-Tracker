import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    createTransaction,
    updateTransaction,
    deleteTransaction
} from "../controllers/transaction.controller.js";

const router = Router();

router.route("/create").post(verifyJWT, createTransaction);
router.route("/update/:id").patch(verifyJWT, updateTransaction);
router.route("/delete/:id").delete(verifyJWT, deleteTransaction);


export default router;