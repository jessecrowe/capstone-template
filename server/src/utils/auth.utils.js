import bcrypt from "bcryptjs"

export function hash (password){
    console.log(hello)
    return bcrypt.hashSync(password, 12)
};

export function comparPassword(enteredPassword, usersPassword){
    return bcrypt.compareSync(enteredPassword, usersPassword)
}
