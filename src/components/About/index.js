import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  })

  return (
    <>
      {' '}
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            A highly motivated Full Stack Developer certified by 𝐈𝐈𝐓 - 𝐑𝐨𝐨𝐫𝐤𝐞𝐞.
            I'm excited to apply my learnt skills in developing responsive and
            intuitive interfaces using SPA (Single Page Application) and React
            JS.
          </p>
          <p>
            I love building responsive and user-friendly web applications using
            𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 𝐬𝐮𝐜𝐡 𝐚𝐬 : HTML, CSS, JavaScript, React JS
          </p>
          <p>
            𝐜𝐨𝐮𝐩𝐥𝐞𝐝 𝐰𝐢𝐭𝐡 𝐁𝐚𝐜𝐤𝐞𝐧𝐝 𝐭𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬 𝐬𝐮𝐜𝐡 𝐚𝐬 : Spring, Hibernate, JPA,
            Bootstrap, and MySQL.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
