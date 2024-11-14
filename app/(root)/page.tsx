import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import { getLoggedInUser } from "@/lib/actions/user.actions"

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          >
          </TotalBalanceBox>
        </header>

      </div>
      <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 123.50 }, { currentBalance: 135.50 }]}
          />
    </section>
  )
}

export default Home