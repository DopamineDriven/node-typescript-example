import * as dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";

const mount = (app: Application) => {

    const users = ["user1", "user2", "user3"];
    app.use(express.json());

    app.get("/users", (_req, res) => {
        return res.json(users)
    });

    app.listen(process.env.PORT);
    console.log(`[app]: http://localhost:${process.env.PORT}/users`);
};

mount(express());