import MoonIcon from "../../assets/icons/moon.png";
import "./Header.css";

function Header() {

    return (
        <div className='home-page-header'>
            <h1>Dashboard</h1>
            <div className='header-right-section'>
                <img
                    src={MoonIcon}
                />
                <div className='user-profile-container'>
                    <div className='user-profile'>A</div>
                    <p>Aman</p>
                </div>
            </div>
        </div>
    );
};

export default Header;