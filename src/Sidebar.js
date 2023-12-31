import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContex } from './context'

const Sidebar = () => {
  const {isOpenSidebar,closeSidebar} =useGlobalContex()
  return <aside className={`${isOpenSidebar?`sidebar show-sidebar`:`sidebar`}`}>
    <div className='sidebar-header'>
      <img src={logo} alt='logo'></img>
      <button onClick={closeSidebar} className='close-btn'>
        <FaTimes/>
      </button>
      </div>
      <ul className='links'>
        {links.map((link)=>{
          const {id,url,text,icon} = link
          return <li key={id}>
            <a href={url}>{icon}{text}</a>

          </li>
        })}
      </ul>
      {/* social links */}
      <ul className='social-icons'>
        {social.map((item)=>{
          const {id,url,icon} = item
          return <li key={id}>
            <a href={url}>{icon}</a></li>
        })}
      </ul>
  </aside>
}

export default Sidebar
