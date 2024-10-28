import HeaderBox from "@/components/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"

 

const Home = () => {
  const loggedIn = { firstName: 'Afandy'}
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
          ></TotalBalanceBox>
        </header>
      </div>
    </section>
  )
}

export default Home