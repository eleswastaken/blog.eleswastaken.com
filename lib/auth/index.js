import User from "@/models/User";
import dbConnect from "@/utils/mongoConfig";
import { verifyPassword } from "./passwordUtils";

// Given some login params (email and password) 
// return the user if the password is valid
// or null if it's not.
export async function userExistsAndVerified(params) {
  await dbConnect()
  const user = await User.findOne({email: params.email});

  console.log('userExistsAndVerified', params)
  console.log(user)

  if (!user) return null;

  if (await verifyPassword(user.password, params.password)) {
    // Make sure all our lib methods obfuscate the password
    user.password = "";

    return user;
  }

  return null;
}