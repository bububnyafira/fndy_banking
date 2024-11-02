import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"


const Home = () => {
  const loggedIn = { firstName: 'Afandy', lastName: 'Baban', email: 'avhandy946@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          >
          </TotalBalanceBox>
        </header>

          <RightSidebar 
            user={loggedIn}
            transactions={[]}
            banks={[{}, {}]}
          />
      </div>
    </section>
  )
}

export default Home