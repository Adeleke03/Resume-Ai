import React from 'react'
import PrivateHero from '../features/PrivateHero'
import PrivateQuickActions from '../features/PrivateQuickActions'
import RecentActivity from '../features/RecentActivity'

const Dashboard = ({user, setUser}) => {
  return (
    <><section className='wrapper bg-[#F5F5F5] '>

      <PrivateHero/>
      <PrivateQuickActions/>
      <RecentActivity/>
    </section>
    </>
  )
}

export default Dashboard