import ThemeContext from "./context.js";
import { useLocalStorage } from "../../utils/useLocalStorage.jsx";

function ThemeProvider({ children }) {

    const [theme, setTheme] = useLocalStorage("theme", "light");

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;