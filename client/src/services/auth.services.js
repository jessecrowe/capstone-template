import api from "../utils/api.utils";


export const  signIn= (username, password) =>  {
  api.post("/auth/signin", { username, password})
}

export const signUp = (username, password, confirmPassword,
  firstName, lastName, email,
  streetName, streetNum, city, state, zipCode, favGenres  ) => 
  api.post("/auth/signup", {username: username, password:password,
      confirmPassword:confirmPassword, firstName: firstName, lastName: lastName,
      email: email,
  streetName: streetName, streetNum: streetNum, city: city, state: state, zipCode: zipCode, favGenres:favGenres })