import AuthContext from "./context.js";
import { useState } from "react";

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                isLoading,
                setUser,
                setIsAuthenticated,
                setIsLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;