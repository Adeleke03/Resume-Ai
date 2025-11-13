import React from 'react'
import ProfileNav from '../layouts/ProfileNav'
import ProfileContent from '../features/ProfileContent'

const Profile = ({user, setUser}) => {
  return (
    <>
    <header>

      <ProfileNav/>
    </header>
    <main className="pt-[60px] lg:pt-[120px] bg-[#F5F5F5] h-screen w-full">
    <ProfileContent user={user} setUser={setUser}/>
    </main>


      </>
  )
}

export default Profile