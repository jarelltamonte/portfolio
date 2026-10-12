import me from "../images/pinkme.jpg";
// import { SiMicrosoftexcel, SiGooglecolab, SiPowerbi } from "react-icons/si";

import "../Style/About.css";
import { useState, useEffect } from "react";

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [educPosition, setEducPosition] = useState({ x: 0, y: 0 });
  const [c1Position, setC1Position] = useState({ x: 0, y: 0 });
  const [c2Position, setC2Position] = useState({ x: 0, y: 0 });
  const [c3Position, setC3Position] = useState({ x: 0, y: 0 });
  const [s1Position, setS1Position] = useState({ x: 0, y: 0 });
  const [s2Position, setS2Position] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, setPosition) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x, y });
  };

  const handleMouseLeave = (setPosition) => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    document.title = "About - Jarell Tamonte";
  }, []);

  return (
    <>
      <div className="about-first-section">
        <div className="square"></div>
        <div className="container">
          <div className="about-app">
            <div className="about-me-photo">
              <img
                src={me}
                alt="Jarell"
                className="about-profile-pic"
                onMouseMove={(e) => handleMouseMove(e, setPosition)}
                onMouseLeave={() => handleMouseLeave(setPosition)}
                style={{
                  transform: `translate(${position.x * 0.1}px, ${
                    position.y * 0.1
                  }px)`,
                  transition: "transform 0.1s ease-out",
                }}
              />
            </div>
            <div className="about-me-info">
              <p className="about-text">More of me...</p>
              <div className="line"></div>
              <p className="about-me-detail">
                I have been fascinated by the ever-evolving world of technology
                since childhood, even though{" "}
                <span className="highlight">
                  Computer Science wasn't my initial choice for a college major
                </span>
                . For a long time, I was drawn to Psychology. But throughout
                high school, as I witnessed the exponential growth of tech
                innovation, my priorities shifted. I became captivated by how
                technology shapes human behavior, driving me to pivot and pursue
                a career in Computer Science.
                <div></div>
                One of my key strengths is my ability to learn quickly and adapt
                to new technologies. I am{" "}
                <span className="highlight">
                  constantly seeking opportunities to expand my knowledge and
                  skills
                </span>
                , whether it's through online courses, personal projects, or
                collaborating with others in the tech community. My
                certifications reflect my commitment to continuous learning and
                staying up-to-date with the latest advancements in the field.
                <div></div>
                Outside of my academic pursuits, I am an{" "}
                <span className="highlight">
                  avid reader of self-help and novel books
                </span>
                , which have helped me develop a growth mindset and a deeper
                understanding of human behavior. Exploring new technologies and
                experimenting with different programming languages and
                frameworks is something I do enjoy too. I love traveling and
                immersing myself in different cultures, and I have a cat named
                "Mattia."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-second-section">
        <div className="about-outer">
          <p
            className="education"
            onMouseMove={(e) => handleMouseMove(e, setEducPosition)}
            onMouseLeave={() => handleMouseLeave(setEducPosition)}
            style={{
              transform: `translate(${educPosition.x * 0.1}px, ${
                educPosition.y * 0.1
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            Education
          </p>
          <div className="card-line line-block"></div>
          <div className="card-layer">
            <div
              className="card block"
              onMouseMove={(e) => handleMouseMove(e, setC1Position)}
              onMouseLeave={() => handleMouseLeave(setC1Position)}
              style={{
                transform: `translate(${c1Position.x * 0.1}px, ${
                  c1Position.y * 0.1
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="card-heading">
                <p className="school">Catagtaguen NHS</p>
                <p className="school-year">2016-2020</p>
              </div>
              <p className="school-label">Junior High School</p>

              <div className="school-line"></div>

              <div className="awards">
                <p className="awards-sub-title">Notable Awards:</p>
                <p className="award"><span className="number-highlight">(1)</span> Class Salutatorian</p>
                <p className="award"><span className="number-highlight">(2)</span> Best in Performing Arts, English, and Social Science</p>
                <p className="award"><span className="number-highlight">(3)</span> Junior High School President (2019-2020)</p>
              
              </div>
            </div>
            <div
              className="card block"
              onMouseMove={(e) => handleMouseMove(e, setC2Position)}
              onMouseLeave={() => handleMouseLeave(setC2Position)}
              style={{
                transform: `translate(${c2Position.x * 0.1}px, ${
                  c2Position.y * 0.1
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="card-heading">
                <p className="school">STI College of Laoag</p>
                <p className="school-year">2020-2022</p>
              </div>
              <p className="school-label">Senior High School | MAWD Track</p>

              <div className="school-line"></div>

              <div className="awards">
                <p className="awards-sub-title">Notable Awards:</p>
                <p className="award"><span className="number-highlight">(1)</span> Class Salutatorian</p>
                <p className="award"><span className="number-highlight">(2)</span> Best in Innovation for STI Expo Awardee (2022)</p>
                <p className="award"><span className="number-highlight">(3)</span> SSG President (2020-2022)</p>
              
              </div>
            </div>

            <div
              className="card block"
              onMouseMove={(e) => handleMouseMove(e, setC3Position)}
              onMouseLeave={() => handleMouseLeave(setC3Position)}
              style={{
                transform: `translate(${c3Position.x * 0.1}px, ${
                  c3Position.y * 0.1
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <div className="card-heading">
                <p className="school">CIIT</p>
                <p className="school-year">2022-Present</p>
              </div>
              <p className="school-label">Bachelor of Science in Computer Science</p>

              <div className="school-line"></div>

              <div className="awards">
                <p className="awards-sub-title">Notable Awards:</p>
                <p className="award"><span className="number-highlight">(1)</span> Gold and Silver Weave Awardee</p>
                <p className="award"><span className="number-highlight">(2)</span> Dean's List, 8 Semesters</p>
                <p className="award"><span className="number-highlight">(3)</span> Best in Project for Machine Learning, Data Mining, and Algorithms and Complexity</p>
              
              </div>
            </div>
          </div>
          <div className="educ-extra">
            <div className="educ-extra-line"></div>
            <p className="educ-extra-info">
              Driven by eagerness to learn, I’ve also taken initiative to earn
              certifications from various academic institutions.
            </p>
          </div>
        </div>
      </div>
      <div className="about-third-section">
        <div className="skills-overview">
          <p className="text-overview">Skills Overview</p>
          <div className="the-skills">
            <div className="soft-skill">
              <p
                className="sub-title"
                onMouseMove={(e) => handleMouseMove(e, setS1Position)}
                onMouseLeave={() => handleMouseLeave(setS1Position)}
                style={{
                  transform: `translate(${s1Position.x * 0.1}px, ${
                    s1Position.y * 0.1
                  }px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                Soft Skills
              </p>
              <div className="word-cloud">
                <span className="word size-xl-l">Critical-Thinking</span>
                <span className="word size-lg">Leadership</span>
                <span className="word size-md">Active Listening</span>
                <span className="word size-sm-l">Team Management</span>
                <span className="word size-xl">Problem-Solving</span>
                <span className="word size-sm">Attention to Detail</span>
                <span className="word size-lg-g">Collaboration</span>
              </div>
            </div>
            <div className="technical-skill">
              <p
                className="sub-title tech-skill"
                onMouseMove={(e) => handleMouseMove(e, setS2Position)}
                onMouseLeave={() => handleMouseLeave(setS2Position)}
                style={{
                  transform: `translate(${s2Position.x * 0.1}px, ${
                    s2Position.y * 0.1
                  }px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                Technical Skills
              </p>
              <div className="tech-icons">
                <div className="icon-wrapper">
                  <i className="devicon-java-plain colored icon-small"></i>
                  <span className="tooltip">Java</span>
                </div>
                <div className="icon-wrapper">
                  <i className="devicon-python-plain colored icon-big"></i>
                  <span className="tooltip">Python</span>
                </div>
                <div className="icon-wrapper">
                  <i className="devicon-mysql-plain colored icon-small"></i>
                  <span className="tooltip">MySQL</span>
                </div>
                <div className="icon-wrapper">
                  <i className="devicon-html5-plain colored icon-medium"></i>
                  <span className="tooltip">HTML5</span>
                </div>
                <div className="icon-wrapper">
                  <i className="devicon-css3-plain colored icon-big"></i>
                  <span className="tooltip">CSS3</span>
                </div>
                <div className="icon-wrapper">
                  <i className="devicon-react-original colored icon-small"></i>
                  <span className="tooltip">ReactJS</span>
                </div>
                <div className="icon-wrapper">
                  <i className="devicon-mongodb-plain colored"></i>
                  <span className="tooltip">MongoDB</span>
                </div>
                <div className="icon-wrapper">
                  <i className="devicon-csharp-plain colored icon-small"></i>
                  <span className="tooltip">C#</span>
                </div>
                <div className="icon-wrapper">
                  <i className="devicon-cplusplus-plain colored"></i>
                  <span className="tooltip">C++</span>
                </div>
                {/* <div className="icon-wrapper">
                  <SiMicrosoftexcel className="icon-colored excel icon-big" />
                  <span className="tooltip">Excel</span>
                </div> */}

                {/* <div className="icon-wrapper">
                  <SiGooglecolab className="icon-colored colab" />
                  <span className="tooltip">Google Colab</span>
                </div> */}

                {/* <div className="icon-wrapper">
                  <SiPowerbi className="icon-colored powerbi icon-medium" />
                  <span className="tooltip">Power BI</span>
                </div> */}

                {/* <div className="icon-wrapper">
                  <img src={powerbi} alt="Power BI" className="custom-icon" />
                  <span className="tooltip">Power BI</span>
                </div>
                <div className="icon-wrapper">
                  <img src={excel} alt="Excel" className="custom-icon" />
                  <span className="tooltip">Excel</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
