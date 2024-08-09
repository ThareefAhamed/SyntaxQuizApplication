import express from 'express';
const router = express.Router();

router.post("/login", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>User Login</h1>`);
});

export default router;