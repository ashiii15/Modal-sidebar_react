import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContex, useGlobalContex  } from './context'

const Home = () => {
  const {openSidebar,openModal} = useGlobalContex()
  return <main>
    <div>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars/>
      </button>
      <button onClick={openModal} className='btn'>modal</button>
    </div>
  </main>
}

export default Home
