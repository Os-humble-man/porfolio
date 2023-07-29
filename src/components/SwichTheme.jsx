import React from 'react'
import { useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";

export default function SwichTheme() {
    const [theme, setTheme] = useState([]);
    return (
        <div
            className="dark-mode-toggle"
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
        >
            {theme === "dark" ? (
                <FiSun className="icon" />
            ) : (
                <FiMoon className="icon" />
            )}
        </div>
    )
}
