import WalletIcon from "../assets/icons/wallet.png";
import HomeIcon from "../assets/icons/home.png";
import TransactionsIcon from "../assets/icons/transaction-history.png";
import CategoriesIcon from "../assets/icons/category.png";
import ReportsIcon from "../assets/icons/report.png";
import SettingsIcon from "../assets/icons/setting.png";
import "./Navbar.css";


function Navbar() {

    return (
        <div className="navbar">

            <div className="navbar-top-section">
                <div>
                    <img
                        src={WalletIcon}
                    />
                </div>
                <h1>Expense Tracker</h1>
            </div>

            <div className="navbar-middle-section">

                <div className="navbar-tab active" >
                    <img
                        src={HomeIcon}
                        alt="icon"
                        className="navbar-tab-icon active"
                    />
                    <p>Dashboard</p>
                </div>
                <div className="navbar-tab" >
                    <img
                        src={TransactionsIcon}
                        alt="icon"
                        className="navbar-tab-icon"
                    />
                    <p>Transactions</p>
                </div>
                <div className="navbar-tab" >
                    <img
                        src={CategoriesIcon}
                        alt="icon"
                        className="navbar-tab-icon"
                    />
                    <p>Categories</p>
                </div>
                <div className="navbar-tab" >
                    <img
                        src={ReportsIcon}
                        alt="icon"
                        className="navbar-tab-icon"
                    />
                    <p>Reports</p>
                </div>
                <div className="navbar-tab" >
                    <img
                        src={SettingsIcon}
                        alt="icon"
                        className="navbar-tab-icon"
                    />
                    <p>Settings</p>
                </div>

            </div>

        </div>
    );
};

export default Navbar;