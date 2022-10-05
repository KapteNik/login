import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  //just for auto-completion
  onLogout: () => {},
});

export default AuthContext;
