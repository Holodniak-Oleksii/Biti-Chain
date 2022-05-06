import React from 'react'
import  {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hooks";
import {AuthContext} from "./context/AuthContext";


function App() {
    const {token, login, logout, userId} = useAuth()
    const AuthVisible = !!token
  const routes = useRoutes(AuthVisible)

    return (
        <AuthContext.Provider value={{token, login, logout, userId, AuthVisible }}>
              <Router>
                  {routes}
              </Router>
        </AuthContext.Provider>
  );
}

export default App;
