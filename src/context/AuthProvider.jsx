import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const userInfo = {
    email: "karmokarantor@GiMailShirt.com",
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
