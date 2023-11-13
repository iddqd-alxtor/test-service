import express from "express";
import router from "./routers/testRoute";

const app = express();
const port = 3000;

app.use('/api', router);
app.listen(port, () => console.log(`running on port ${port}`));

export default app;