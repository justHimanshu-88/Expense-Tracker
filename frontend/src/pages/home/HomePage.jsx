import Navbar from '../../components/Navbar';
import Header from './Header';
import FinancialSummary from './FinancialSummary';
import AddNewTransaction from './AddNewTransaction';
import RecentTransactions from './RecentTransactions';
import './HomePage.css';


export function HomePage() {

    return (
        <>
            <title>Expense Tracker</title>
            <link rel="icon" type="image/svg+xml" href={null} />

            <div className='home-page'>

                <Navbar />

                <div className='main'>

                    <Header /> 

                    <FinancialSummary />

                    <section className="content">
                        <AddNewTransaction />

                        <RecentTransactions />
                    </section>

                </div>
            </div>
        </>
    );
}