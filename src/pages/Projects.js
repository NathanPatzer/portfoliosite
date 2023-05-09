import React from 'react';
import Project from '../components/Project'
import IMAGES from '../images/index'
import text from '../text'

const delayvid = '3E3cZqmKDNc'
const pitchvid = 'SajIxVLGxwA'

const slides = [
  {url: IMAGES.bunny},
  {url: IMAGES.spheres},
  {url: IMAGES.mirror},
  {url: IMAGES.mirror2},
  {url: IMAGES.blinn}
]

function Projects() {
  return (
    <div>
      <ul className='project'>
        <li><Project slides = {slides} image = {slides} name='Raytracer' desc = {text.raytracerp} logo = {IMAGES.gitlogo} link = 'https://github.com/NathanPatzer/CPPRaytracer' langs = {[[IMAGES.cpplogo,'C++']]}/>
        </li>
        <li><Project image = {IMAGES.bunny} name='Audio Delay' desc = {text.delayp} logo = {IMAGES.gitlogo} link = 'https://github.com/NathanPatzer/AudioDelay' vid = {delayvid} langs = {[[IMAGES.cpplogo,'C++'],[IMAGES.jucelogo,'JUCE']]}/></li>
      </ul>
      <ul className='project'>
        <li><Project image = {IMAGES.bunny} name='Pitch Detector' desc = {text.pitchp} logo = {IMAGES.gitlogo} link = 'https://github.com/NathanPatzer/PitchDetector' vid = {pitchvid} langs = {[[IMAGES.cpplogo,'C++'],[IMAGES.jucelogo,'JUCE']]}/>
        </li>
        <li><Project image = {IMAGES.thissiteimg} name='This Website' desc = {text.thissite} logo = {IMAGES.gitlogo} link = 'https://github.com/NathanPatzer/portfoliosite' langs = {[[IMAGES.reactlogo,'React'],[IMAGES.jslogo,'JavaScript']]}/></li>
      </ul>
    </div>
  );
}

export default Projects;
  