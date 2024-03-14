import User from "../models/user.model";
import  Jwt  from "jsonwebtoken";


// export async function handleSignIn(req, res){
//     const { userName, password } = req.body
    
//     if (!userName || !password) {
//         return res.status(422).json({ error: 'missing username or password' })
//     }

//     const user = await User.findOne({ username: userName })
    
//     const passwordCorrect =
//         user === null ? false : await bcrypt.compare(password, user.passwordHash)


//         if (!(user && passwordCorrect)) {
//         return res.status(401).json({
//         error: 'invalid username or password',
//     })}

//     const userForToken = {
//         userName: user.userName,
//         id: user._id,
//     }

//     const token = jwt.sign(userForToken, keys.jwt.secret)
//     res
//         .status(200)
//         .send({ token, userName, uid: user.id, profileimg })
// }