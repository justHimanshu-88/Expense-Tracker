import ArrowDownIcon from "../../assets/icons/arrow-down.png";
import ArrowTopIcon from "../../assets/icons/arrow-top.png";
import TotalBalanceIcon from "../../assets/icons/total-balance.png";
import "./FinancialSummary.css";


function FinancialSummary() {

    return (
        <div className='financial-summary-cards'>

            <div className='card'>

                <div className='left-section'>
                    <div className='income-card-icon'>
                        <img
                            src={ArrowDownIcon}
                            alt="icon"
                            className='arrow-down-icon'
                        />
                    </div>
                </div>
                <div className='right-section'>
                    <p>Total Income</p>
                    <div className='total-income'>₹ 12,000</div>
                </div>

            </div>

            <div className='card'>

                <div className='left-section'>
                    <div className='expense-card-icon'>
                        <img
                            src={ArrowTopIcon}
                            alt="icon"
                            className='arrow-top-icon'
                        />
                    </div>
                </div>
                <div className='right-section'>
                    <p>Total Expenses</p>
                    <div className='total-expense'>₹ 4,500</div>
                </div>

            </div>

            <div className='card'>

                <div className='left-section'>
                    <div className='balance-card-icon'>
                        <img
                            src={TotalBalanceIcon}
                            alt="icon"
                            className='balance-wallet-icon'
                        />
                    </div>
                </div>
                <div className='right-section'>
                    <p>Total Balance</p>
                    <div className='total-balance'>₹ 7,500</div>
                </div>

            </div>

        </div>
    );
}

export default FinancialSummary;