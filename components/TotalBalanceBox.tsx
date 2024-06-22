'use client';

import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

function TotalBalanceBox(props: TotalBalanceBoxProps) {
    const { accounts = [], totalBanks, totalCurrentBalance } = props;

    return (
        <section className='total-balance '>
            <div className="total-balance-chart">
                <DoughnutChart accounts={accounts} />
            </div>
            <div className="flex flex-col gap-6">
                <h2 className='header-2'>
                    Bank Accounts: {totalBanks}
                </h2>
                <div className="flex flex-col gap-2">
                    <div className="total-balance-label">
                        Total current balance
                    </div>
                    <div className="total-balance-amount flex-center gap-2">
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TotalBalanceBox