import { Router } from "express";
import db from "../db/conn.mjs";

const router = Router();

export default router.get("/getProducts", async (req, res) => {
    let collection = await db.collection("Product");
    let result = await collection.find({}).limit(10).toArray();
    res.send(result).status(200);
})