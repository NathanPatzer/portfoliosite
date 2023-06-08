import React from 'react'
import imgs from '../images/index'
import Slider from '../components/Slider'
import text from '../text'
import { useMediaQuery } from 'react-responsive';
import Project from '../components/Project';
const pics = [
  {url: imgs.headshot},
  {url: imgs.linkedin},
  {url: imgs.grad},
]
const specialist = ["Maintained and managed multiple databases using SQL, optimizing performance and ensuring data integrity",
"Wrote and executed complex SQL queries to extract and analyze data as well as implementing and enforcing security measures to protect sensitive data",
"Monitored and maintained automation scripts, troubleshooting and resolving issues as needed"];

const intern = ["Responded to customer support tickets, resolving technical issues and addressing customer concerns in a timely and professional manner",
"Developed and maintained VBA scripts to automate data processing and analysis in Excel",
"Worked with senior members on upgrading software"
]

const duluth = ["Majored in Computer Science with a minor in Mathetmatics.",
                "Alumni of the Upsilon Gamma chapter of Tau Kappa Epsilon at UMD; a fraternity focused on fundraising for the St. Jude Children's Research Hospital and various other charities."]

const skills = ["Experienced with GIT, SSMS, Linux, AWS",
                "Knowledge of agile methologies and Scrum",
                "Comftorable with Object Oriented Design",
                "Proficient in SSMS SQL and MongoDB"]

const interests = ["I like to write and produce music! Many of my development projects have to do with music production and I plan on learning more about audio development as I become more experienced.",
                   "Watching movies! Some of my favorite movies include Get Out, Shutter Island, Arrival, and The Truman Show",
                   "Spending time outdoors with friends and family."]

const contactinfo = [<a href = "mailto:nate.patzer@gmail.com">nate.patzer@gmail.com</a>, "Cell: (952)-451-5664"]

const mobiledims = {
  width: '95vw',
  height: '50vh'
}

const desktopdims = {
  width: '390px',
  height: '390px'
}

const Me = () => {
  const isMobile = useMediaQuery({query: '(max-width: 700px)'})
  return (
    <>
      <div className="container">
        <div className="leftpane">
          <h1>Who Am I</h1>
          {text.whoami}
        </div>
        <div className="middlepane">
          <Slider slides = {pics} dims = {isMobile ? (mobiledims) : (desktopdims)} radius = '250px'/>
        </div>
        <div className="rightpane">
          <h1>Favorite Languages</h1>
          <div className="grid-container">
          <div className="grid-item"><img title = 'C++' src={imgs.cpplogo} alt="Logo 1"/></div>
          <div className="grid-item"><img title = 'Java' src={imgs.javalogo} alt="Logo 3"/></div>
          <div className="grid-item"><img title = 'Python' src={imgs.pylogo} alt="Logo 3"/></div>
          <div className="grid-item"><img title = 'C' src={imgs.clogo} alt="Logo 2"/></div>
          <div className="grid-item"><img title = 'R' src={imgs.rustlogo} alt="Logo 2"/></div>
          <div className="grid-item"><img title = 'JavaScript' src={imgs.jslogo} alt="Logo 3"/></div>
        </div>
          </div>
        </div>
      <div>
      <div className='experience'><h1>Experience</h1></div>
      <ul className='project sizing'>
        <li><Project name='CBRE - Financial Systems Specialist' desc = {specialist} date = "Jan 22 - Present"/>
        </li>
        <li><Project name='CBRE - Financial Systems Intern' desc = {intern} date = "May 21 - Aug 21"/></li>
      </ul>
      <div className='experience'><h1>Education/Skills</h1></div>
      <ul className='project sizing'>
        <li><Project name='University of Minnesota Duluth' desc = {duluth} date = "Graduated May 22"/></li>
        <li><Project name='Skills' desc = {skills}/></li>
      </ul>

      <div className='experience'><h1>Interests/Contact Info</h1></div>
      <ul className='project sizing'>
        <li><Project name='Interests' desc = {interests}/></li>
        <li><Project name='Contact Info' desc = {contactinfo}/></li>
      </ul>
      </div>
    </>
  )
}

export default Me
