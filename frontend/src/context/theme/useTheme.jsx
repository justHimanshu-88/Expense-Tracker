import ThemeContext from "./context.js";
import { useContext } from "react";

function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be consumed within a ThemeProvider")
    }

    return context;
}

export default useTheme;