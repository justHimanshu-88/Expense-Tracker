import SearchIcon from "../../assets/icons/search.png";
import DeleteIcon from "../../assets/icons/delete.png";
import "./RecentTransactions.css";

function RecentTransactions() {

    return (
        <div className='recent-transactions-container'>

            <h2>
                Recent Transactions
            </h2>

            <div className="input-group">

                <select>
                    <option value="All">All</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
                <div>
                    <input type="text" placeholder='Search transactions...' />
                    <img src={SearchIcon} />
                </div>

            </div>

            <div className="transaction-list">

                <div className="transaction">
                    <div className="transaction-left-section">
                        <div className="icon income-icon"></div>
                        <div>
                            <h4>Salary</h4>
                            <p>27 Apr 2024</p>
                        </div>
                    </div>
                    <div className="transaction-right-section">
                        <span className="amount income-text">
                            + ₹ 15,000
                        </span>
                        <button className="delete-button">
                            <img src={DeleteIcon} />
                        </button>
                    </div>
                </div>

                <div className="transaction">
                    <div className="transaction-left-section">
                        <div className="icon expense-icon"></div>
                        <div>
                            <h4>Groceries</h4>
                            <p>28 Apr 2024</p>
                        </div>
                    </div>
                    <div className="transaction-right-section">
                        <span className="amount expense-text">
                            - ₹ 850
                        </span>
                        <button className="delete-button">
                            <img src={DeleteIcon} />
                        </button>
                    </div>
                </div>

                <div className="transaction">
                    <div className="transaction-left-section">
                        <div className="icon income-icon"></div>
                        <div>
                            <h4>Salary</h4>
                            <p>27 Apr 2024</p>
                        </div>
                    </div>
                    <div className="transaction-right-section">
                        <span className="amount income-text">
                            + ₹ 15,000
                        </span>
                        <button className="delete-button">
                            <img src={DeleteIcon} />
                        </button>
                    </div>
                </div>

                <div className="transaction">
                    <div className="transaction-left-section">
                        <div className="icon expense-icon"></div>
                        <div>
                            <h4>Groceries</h4>
                            <p>28 Apr 2024</p>
                        </div>
                    </div>
                    <div className="transaction-right-section">
                        <span className="amount expense-text">
                            - ₹ 850
                        </span>
                        <button className="delete-button">
                            <img src={DeleteIcon} />
                        </button>
                    </div>
                </div>

                <div className="transaction">
                    <div className="transaction-left-section">
                        <div className="icon income-icon"></div>
                        <div>
                            <h4>Salary</h4>
                            <p>27 Apr 2024</p>
                        </div>
                    </div>
                    <div className="transaction-right-section">
                        <span className="amount income-text">
                            + ₹ 15,000
                        </span>
                        <button className="delete-button">
                            <img src={DeleteIcon} />
                        </button>
                    </div>
                </div>

            </div>

            <div className="view-all-transactions-button">
                View All Transactions
            </div>

        </div>
    );
};

export default RecentTransactions;