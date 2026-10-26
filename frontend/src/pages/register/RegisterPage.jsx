import { useState, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import "./RegisterPage.css";


export function RegisterPage() {

    const [theme, setTheme] = useLocalStorage("theme", "light");

    // Form input states
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [avatarFile, setAvatarFile] = useState(null);
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // File input ref for the avatar trigger
    const fileInputRef = useRef(null);

    // Handle image upload and local preview URL
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file);
            const previewUrl = URL.createObjectURL(file);
            setAvatarPreview(previewUrl);
        }
    };

    const handleAvatarClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="register-page-wrapper" data-theme={theme}>
            {/* Top Navigation Header */}
            <header className={`reg-top-bar ${theme === "dark" ? "dark" : ""}`}>
                <div className="reg-top-bar-content">
                    {/* Logo & App Title */}
                    <div className="reg-brand-cluster">
                        <div className="reg-brand-icon">
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
                        <span className="reg-brand-title">Expense Tracker</span>
                    </div>

                    {/* Right Header Actions */}
                    <div className="reg-header-actions">
                        {/* Sign In / Sign Up Switcher */}
                        <div className="reg-auth-toggle-group">
                            <button
                                type="button"
                                className="reg-auth-toggle-btn"
                                onClick={() => { }}
                            >
                                Sign In
                            </button>
                            <button
                                type="button"
                                className="reg-auth-toggle-btn active"
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Dark / Light Theme Toggle */}
                        <button
                            type="button"
                            className="reg-theme-toggle-btn"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            aria-label="Toggle Theme"
                            title="Toggle Dark / Light Theme"
                        >
                            {
                                theme === "dark"
                                    ? (
                                        <svg
                                            width="18"
                                            height="18"
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
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                                        </svg>
                                    )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Viewport */}
            <main className="reg-viewport">
                {/* Register Card */}
                <div className="reg-card">

                    {/* Circular Profile Avatar Upload Element */}
                    <div className="reg-avatar-wrapper">
                        <div
                            className="reg-avatar-circle"
                            onClick={handleAvatarClick}
                            role="button"
                            tabIndex="0"
                            title="Upload profile picture"
                        >
                            {avatarPreview ? (
                                <img
                                    src={avatarPreview}
                                    alt="Profile Preview"
                                    className="reg-avatar-img"
                                />
                            ) : (
                                <div className="reg-avatar-placeholder">
                                    <svg
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                            )}

                            {/* Bottom-right edit/pen badge */}
                            <button
                                type="button"
                                className="reg-avatar-edit-badge"
                                aria-label="Edit Profile Picture"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAvatarClick();
                                }}
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    <path d="m15 5 4 4" />
                                </svg>
                            </button>
                        </div>

                        {/* Hidden actual file input */}
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleAvatarChange}
                            accept="image/*"
                            className="reg-hidden-file-input"
                        />
                    </div>

                    {/* Form Header */}
                    <div className="reg-card-header">
                        <h1 className="reg-card-title">Create Account</h1>
                        <p className="reg-card-subtitle">
                            Join Expense Tracker to organize your finances
                        </p>
                    </div>

                    {/* Registration Form */}
                    <form className="reg-form">
                        {/* Full Name */}
                        <div className="reg-field-group">
                            <label className="reg-field-label" htmlFor="fullName">
                                Full Name
                            </label>
                            <div className="reg-input-wrapper">
                                <span className="reg-input-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="Enter your full name"
                                    className="reg-input"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Username */}
                        <div className="reg-field-group">
                            <label className="reg-field-label" htmlFor="username">
                                Username
                            </label>
                            <div className="reg-input-wrapper">
                                <span className="reg-input-icon">
                                    <svg
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
                                        <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    className="reg-input"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="reg-field-group">
                            <label className="reg-field-label" htmlFor="email">
                                Email Address
                            </label>
                            <div className="reg-input-wrapper">
                                <span className="reg-input-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    className="reg-input"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="reg-field-group">
                            <label className="reg-field-label" htmlFor="password">
                                Password
                            </label>
                            <div className="reg-input-wrapper">
                                <span className="reg-input-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="reg-input"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="reg-trailing-btn"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="m15 18-.722-3.25" />
                                            <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                                            <path d="m20 15-1.726-2.05" />
                                            <path d="m4 15 1.726-2.05" />
                                            <path d="m9 18 .722-3.25" />
                                        </svg>
                                    ) : (
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="reg-submit-btn">
                            Create Account
                        </button>
                    </form>

                    {/* Simple Link to Sign In */}
                    <div className="reg-card-footer">
                        <span>Already have an account?</span>
                        <button
                            type="button"
                            className="reg-link-inline"
                            onClick={() => { }}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}