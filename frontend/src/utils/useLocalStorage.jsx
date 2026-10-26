import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(key)) || defaultValue;

        } catch (error) {
            console.log(error);
            return defaultValue;
        }
    });

    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(value));

    }, [key, value]);

    return [value, setValue];
};