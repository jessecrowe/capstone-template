import User from "../models/user.model";

export async function createUser(
  name,
  email,
  userName,
  passwordHash,
  address,
  profileImg,
  favGenres
) {
  const newUser = await User.create({
    name,
    email,
    userName,
    passwordHash,
    address,
    profileImg,
    favGenres
  });
  return newUser;
}
