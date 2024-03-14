import { hash } from "bcryptjs";
import {
    handleGetUserByUserName,
    createUser,
    sanitizeUser,
} from "../services/auth.services";
import { comparPassword } from "../utils/auth.utils";


export async function handleSignUp(req, res) {
    const {
        firstName,
        lastName,
        email,
        userName,
        password,
        confirmPassword,
        streetNum,
        streetName,
        city,
        state,
        zipCode,
        profileImg,
        favGenres,
    } = req.body;

    let user = await handleGetUserByUserName(userName);
    if (user) {
        return res.status(422).json({ userName: "Username taken" });
    }

    const passwordHash = hash(password);

    user = await createUser(
        firstName,
        lastName,
        email,
        userName,
        passwordHash,
        streetNum,
        streetName,
        city,
        state,
        zipCode,
        profileImg,
        favGenres,
        role
    );
    user = sanitizeUser(user);

    res.status(201).json(user);
}

export async function handleSignIn(req, res) {
    const { userName, password } = req.body;

    let user = await handleGetUserByUserName(userName);

    if (!user || !comparPassword(password, user.passwordHash)) {
        return res.status(422).json({ error: "Invalid Username/password" });
    }
    user = sanitizeUser(user);

    const accessToken = "";

    res.status;(200).json({user, accessToken})
}
