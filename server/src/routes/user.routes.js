import { Router } from "express";
import { createUser } from "../services/user.service";

//Router URL: /api/users
const userRoutes = Router();

userRoutes
    .route("/")
        //Post /api/users - Creates a new user in the DB
        .post(async (req, res) => {
            try {
                const {name, email, userName, password, address, profileImg, favGenres} = req.body;
                const newUser = await createUser(name, email, userName, password, address, profileImg, favGenres);
                res.status(201).send(newUser);
            } catch (err) {
                console.log(err.err)
                return res.status(500).send(err.err)
            }
        })

export default userRoutes;
