import User from "../models/user.model";

export async function handleGetUserByUserName(userName){
    return await User.findOne({userName});
}
export async function createUser ( firstName, lastName, email, userName, passwordHash, streetNum, streetName, city,state, zipCode, profileImg, favGenres){
    return await User.create({ firstName, lastName, email, userName, passwordHash, streetNum, streetName, city, state, zipCode, profileImg, favGenres});
}

export function sanitizeUser(user){
    user = user.toJSON();
    delete user.passwordHash;
    delete user.role;
}

