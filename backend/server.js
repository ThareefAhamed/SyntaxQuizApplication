import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connectToMongoDB.js';
import userRoutes from './routes/user.route.js'
import questionRoutes from './routes/question.route.js'
import adminRoutes from './routes/admin.route.js'


const PORT = process.env.PORT || 3500;

dotenv.config();

const app = express();

app.use("/api/auth", userRoutes)

app.use("/api/questions",questionRoutes)


app.use("/api/admin", adminRoutes)

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>Welcome</h1>`);
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectToMongoDB();
});