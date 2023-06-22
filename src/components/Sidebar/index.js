import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faClose,
  faBars,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);


return (
  <div className="nav-bar">
    <Link className="logo" to="/" onClick={() => setShowNav(false)}>
      <img src={LogoS} alt="logo" />
      <div className="sde">
        D <br />E
      </div>
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink
        exact="true"
        activeclassname="active"
        to="/"
        onClick={() => setShowNav(false)}
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
        onClick={() => setShowNav(false)}
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
        onClick={() => setShowNav(false)}
      >
        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
      </NavLink>

      <NavLink
        onClick={() => setShowNav(false)}
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
      <FontAwesomeIcon
        onClick={() => setShowNav(false)}
        icon={faClose}
        color="#ffd700"
        size="3x"
        className="close-icon"
      />
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/dhananjaygoyal/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/DhananjayGoyalGL"
        >
          <FontAwesomeIcon
            icon={faGithub}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://eportfolio.mygreatlearning.com/dhananjay-goyal"
        >
          <FontAwesomeIcon
            icon={faGoogle}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://leetcode.com/coder_dhananjay/"
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            color="#4d4d4e"
            className="anchor-icon"
          />
        </a>
      </li>
    </ul>
    <FontAwesomeIcon
      onClick={() => setShowNav(true)}
      icon={faBars}
      color="#ffd700"
      size="3x"
      className="hamburger-icon"
    />
  </div>
)
}
export default Sidebar
