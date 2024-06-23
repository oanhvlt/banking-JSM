import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = { firstName: 'Alice', lastName: 'Vu', email: 'test@dev.com' };
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type='greeting'
                        title='Welcome'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext='Access and manage your acc and transactions efficiently'
                    />
                    <TotalBalanceBox accounts={[]} totalBanks={1}
                        totalCurrentBalance={12350.35} />
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar user={loggedIn} transactions={[]}
                banks={[{ currentBalance: 1233 }, { currentBalance: 52353 }]} />
        </section>
    )
}

export default Home;