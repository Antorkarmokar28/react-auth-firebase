import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const AuthProvider = ({ children }) => {
  // create user utilies function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user utilies function
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user info
  const userInfo = {
    createUser,
    signInUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
