import express from 'express';
const router = express.Router();

router.get("/getquestion/:id", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>GetQuestion By Id Login</h1>`);
});

router.get("/getquestions", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Get All Question</h1>`);
});

router.post("/addquestion", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Add Question</h1>`);
});

router.delete("/deletequestion/:id", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Delete Question By Id</h1>`);
});

router.delete("/deletequestion", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Delete All Question</h1>`);
});

export default router;