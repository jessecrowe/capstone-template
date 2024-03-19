import User from "../models/user.model";

export async function handleGetUserByUserName(userName) {
  return await User.findOne({ userName });
}
export async function createUser(
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
  favGenres
) {
  console.log("hi");
  let user = await User.create({
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
  });
  console.log(user);
  return user
}

export function sanitizeUser(user) {
  console.log(user);
  user = user.toJSON();
  delete user.passwordHash;
};