import express from "express";

const router = express.Router();

router.get("/should-be-logged-in", (req, res) => {
    console.log("router works");
});
router.post("/should-be-admin", (req, res) => {
    console.log("router works");
});


export default router;
