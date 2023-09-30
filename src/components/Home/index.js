import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import final from "../../assets/images/final.gif";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["D", "h", "a", "n", "a", "n", "j", "a", "y"];
  const jobArray = [
    "o",
    "f",
    "t",
    "w",
    "a",
    "r",
    "e",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span> &nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={18}
            />
          </h1>
          <h2> Fullstack Developer / Frontend Developer</h2>
          <Link to="/portfolio" className="flat-button">
            MY WORK
          </Link>
        </div>
        <img className="gif" src={final} alt="gif" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
