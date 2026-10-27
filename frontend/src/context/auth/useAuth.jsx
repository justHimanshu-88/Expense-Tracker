import AuthContext from "./context.js";
import { useContext } from "react";

function useAuth() {
    const context = useContext(AuthContext);
    
    if (!context) {
        throw new Error("useAuth must be consumed within an AuthProvider") 
    }

    return context;
}

export default useAuth;