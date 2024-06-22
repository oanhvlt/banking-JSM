import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
    const loggedIn = { firstName: 'Alice' };
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
                </header>
                <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={12350.35} />
            </div>
        </section>
    )
}

export default Home;