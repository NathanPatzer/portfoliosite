import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'
import resume from '../images/Nathan Patzers Resume.pdf'


const Navbar = () => {
    const [currPage,setCurrPage] = useState(sessionStorage.getItem('Portfolio_Page') !== null ? (sessionStorage.getItem('Portfolio_Page')) : "About");

    const handleLinkClick = (page) => {
        setCurrPage(page);
    }
    const openResume = () => {
        window.open(resume);
      }

    useEffect(() => {
        const highLightedPage = window.sessionStorage.getItem('Portfolio_Page')
        console.log(highLightedPage)
        if (highLightedPage !== null) setCurrPage(highLightedPage)
    },[])
    useEffect(() => {
        window.sessionStorage.setItem('Portfolio_Page',currPage)
    },[currPage])
  return (
    <>
        <nav>
            <ul>
                <li className={currPage === 'About' ? 'active' : ''}>
                    <Link onClick = {() => handleLinkClick('About')} to = "/">About Me</Link>
                </li>
                <li className={currPage === 'Projects' ? 'active' : ''}>
                    <Link onClick = {() => handleLinkClick('Projects')} to = "Projects">Projects</Link>
                </li>
                <li>
                    <a title = 'Download Resume' href = '.' onClick={openResume}>⇩Resume</a>
                </li> 

            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar
 