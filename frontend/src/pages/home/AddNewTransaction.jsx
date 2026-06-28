import ArrowDown from "../../assets/icons/arrow-down.png";
import ArrowTop from "../../assets/icons/arrow-top.png";
import "./AddNewTransaction.css";


function AddNewTransaction() {

    return (
        <div className="transaction-card">

            <h2>
                Add New Transaction
            </h2>

            <div className="row">
                <div className="input-group">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="e.g. Grocery Shopping"
                        className="transaction-title-input"
                    />
                </div>

                <div className="input-group">
                    <label>Amount</label>
                    <input
                        type="text"
                        placeholder="e.g. 500"
                        className="transaction-amount-input"
                    />
                </div>
            </div>

            <div className="type-section">
                <div className="input-group">
                    <label>Type</label>
                    <div className="type-buttons">
                        <button className="income-btn">
                            <img src={ArrowDown} />
                            Income
                        </button>
                        <button className="expense-btn">
                            <img src={ArrowTop} />
                            Expense
                        </button>
                    </div>
                </div>

                <div className="input-group">
                    <label>Category</label>
                    <select className="transaction-category-input">
                        <option value="Food & Dining">Food & Dining</option>
                        <option value="Transport">Transport</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
            </div>

            <div className="input-group">
                <label>Date</label>
                <div className="date-input"> 
                    <input type="date" />
                </div>
            </div>

            <button className="add-btn">
                Add Transaction
            </button>

        </div>
    );
};

export default AddNewTransaction;