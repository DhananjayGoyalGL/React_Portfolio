import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });

  const handleDownloadResume = () => {
    // Use the relative path to the PDF file in the public folder
    const pdfPath = process.env.PUBLIC_URL + "/DhananjayFullStack.pdf";

    // Create a link element
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "DhananjayFullStack.pdf";
    link.click();
  };

  return (
    <>
      {" "}
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <p className="para">
            👋 Hey there! <br></br>Hope you are doing well... My name is Dhananjay
            Goyal currently working as a Full Stack Software Developer Intern at
            Linsible Technologies, where I'm passionate about crafting digital
            experiences that make a real impact. 🚀 🌟{" "}
          </p>
          <p className="para">
            🎓 I've honed my software development skills through a comprehensive
            program at Great Learning, IIT Roorkee. 📚 Currently, I'm further
            sharpening my expertise through Delta and Alpha courses in the MERN
            stack and Data Structures and Algorithms (DSA) at Apna College. I
            firmly believe that continuous learning is the key to staying at the
            forefront of this dynamic field.{" "}
          </p>
          <p className="para">
            💬 Feel free to
            connect with me to discuss opportunities, share insights, or simply
            chat about tech and innovation. You can reach me at:
            <p>
              📧 Email: 1406dhananjay@gmail.com <br></br>🌐 More about me:
              https://linktr.ee/Dhananjay_Goyal
            </p>
          </p>
          <button className="download-button" onClick={handleDownloadResume}>
            Download Resume
          </button>
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
  );
};

export default About;
