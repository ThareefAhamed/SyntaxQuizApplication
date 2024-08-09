import express from 'express';
const router = express.Router();

router.get("/login", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Admin Login</h1>`);
});

export default router;