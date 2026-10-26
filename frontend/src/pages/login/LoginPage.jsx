import { useState } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import "./LoginPage.css";


export function LoginPage() {

    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [theme, setTheme] = useLocalStorage("theme", "light");


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-page" data-theme={theme}>
            <header className={theme === "dark" ? "dark top-bar" : "top-bar"}>
                <div className="top-bar-container">
                    <div className="brand-header-flex">
                        <div className="brand-icon-box">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                            </svg>
                        </div>
                        <div>
                            <div className="brand-title">
                                <span>Expense Tracker</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Live Controls --> */}
                    <div className="controls-group">

                        {/* Mode Toggle (Sign In / Sign Up)  */}
                        <div className="btn-group-segmented">
                            <button
                                type="button"
                                id="btn-tab-signin"
                                className="btn-segment active-brand"
                            >
                                Sign In
                            </button>
                            <button
                                type="button"
                                id="btn-tab-signup"
                                className="btn-segment"
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* <!-- Dark Mode Toggle Button --> */}
                        <button
                            type="button"
                            id="btn-dark-toggle"
                            className="icon-action-btn"
                            title="Toggle Dark/Light Mode"
                            onClick={() => { setTheme(theme === "light" ? "dark" : "light") }}
                        >
                            {
                                theme === "dark"
                                    ? (
                                        <svg
                                            id="icon-sun"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="4" />
                                            <path d="M12 2v2" />
                                            <path d="M12 20v2" />
                                            <path d="m4.93 4.93 1.41 1.41" />
                                            <path d="m17.66 17.66 1.41 1.41" />
                                            <path d="M2 12h2" />
                                            <path d="M20 12h2" />
                                            <path d="m6.34 17.66-1.41 1.41" />
                                            <path d="m19.07 4.93-1.41 1.41" />
                                        </svg>
                                    )
                                    : (
                                        <svg
                                            id="icon-moon"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                        </svg>
                                    )
                            }
                        </button>
                    </div>
                </div>
            </header>

            <div className="main-viewport">
                <div className="auth-wrapper">
                    <div className="auth-grid">

                        {/* Left Brand Showcase */}
                        <div className={theme === "dark" ? "dark auth-hero" : "auth-hero"}>
                            <div className="hero-header-brand">
                                <div className="hero-header-icon">
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                                        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                                        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                                    </svg>
                                </div>
                                <div>
                                    <h2 style={{ fontSize: "1.15rem", fontWeight: "800", letterSpacing: "-0.01em" }} >Expense Tracker</h2>
                                    <span style={{ fontSize: "0.80rem", color: "#C7D2FE", fontWeight: "500" }} >Smart Personal Finance</span>
                                </div>
                            </div>

                            <div>
                                <div className="hero-headline">
                                    Take control of every rupee you spend.
                                </div>
                                <p className="hero-subtext">
                                    Log in to monitor cash flows, categorize transactions, and reach your monthly savings targets.
                                </p>
                            </div>

                            <div className="mini-stat-card">
                                <div className="mini-stat-header">
                                    <span>Current Balance</span>
                                    <span className="mini-stat-badge">+15%</span>
                                </div>
                                <div className="mini-stat-value">₹ 7,500</div>
                                <div className="mini-stat-footer">
                                    <span>Income: <strong>₹ 12,000</strong></span>
                                    <span>Expenses: <strong>₹ 4,500</strong></span>
                                </div>
                            </div>

                            <div class="mini-quote-banner">
                                <div>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    </svg>
                                </div>
                                <span>"Keep tracking your expenses to achieve your financial goals!"</span>
                            </div>
                        </div>

                        {/* Right Form Panel */}
                        <div className="auth-form-panel">
                            <div className="form-inner-container">
                                <h2 className="form-heading-title">Welcome back</h2>
                                <p className="form-heading-desc">Enter your username or email address to access your account.</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <div className="form-label-row">
                                            <label className="form-label">Username or Email</label>
                                        </div>
                                        <div className="input-field-wrapper">
                                            <span className="input-leading-icon">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <circle cx="12" cy="12" r="4" />
                                                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                                                </svg>
                                            </span>

                                            <input
                                                type="text"
                                                className="pure-input"
                                                placeholder="Enter your username or email"
                                                value={identifier}
                                                onChange={(e) => setIdentifier(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="form-label-row">
                                            <label className="form-label">Password</label>
                                            <button type="button" className="link-action">Forgot Password?</button>
                                        </div>
                                        <div className="input-field-wrapper">
                                            <span className="input-leading-icon">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                                </svg>
                                            </span>

                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                className="pure-input"
                                                placeholder="Enter your password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                            />
                                            <button
                                                type="button"
                                                className="btn-trailing-icon"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {
                                                    showPassword
                                                        ? (
                                                            <svg
                                                                id="eye-icon-closed"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                            >
                                                                <path d="m15 18-.722-3.25" />
                                                                <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                                                                <path d="m20 15-1.726-2.05" />
                                                                <path d="m4 15 1.726-2.05" />
                                                                <path d="m9 18 .722-3.25" />
                                                            </svg>
                                                        )
                                                        : (
                                                            <svg
                                                                id="eye-icon-open"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                stroke-width="2"
                                                            >
                                                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                                <circle cx="12" cy="12" r="3" />
                                                            </svg>
                                                        )
                                                }
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-options-row">
                                        <label className="checkbox-container">
                                            <input
                                                type="checkbox"
                                                checked={remember}
                                                onChange={(e) => setRemember(e.target.checked)}
                                            />
                                            <span>Remember for 30 days</span>
                                        </label>
                                    </div>

                                    <button type="submit" className="btn-submit-primary">
                                        Log In to Dashboard
                                    </button>
                                </form>

                                <p className="auth-footer-prompt">
                                    <span id="prompt-account-text">Don't have an account?</span>
                                    <button
                                        type="button"
                                        id="btn-toggle-auth-mode"
                                        className="btn-switch-mode"
                                    >
                                        Sign up for free
                                    </button>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}