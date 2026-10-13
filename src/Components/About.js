import me from "../images/pinkme.jpg";
import { certificatesData } from "./certificatesData";

import "../Style/About.css";
import { useState, useEffect } from "react";

const schools = [
  {
    name: "Catagtaguen NHS",
    year: "2016-2020",
    label: "Junior High School",
    story: [
      "When I entered Junior High School, I wasn’t part of the top five as I was still adjusting to a new environment and meeting people from different primary schools. As a consistent honor student in primary school, I carried a competitive spirit into high school by joining clubs, extracurricular activities, and competitions, including speech, journalism, biology, and band contests, where I played the piano. I also participated in volleyball, table tennis, and badminton.",
      "Throughout Junior High School, I was nominated around ten times for president positions in different course clubs. In my final year, I was elected Mayor of the entire Junior High School, which led me to lead the school year's ball. I graduated as Class Salutatorian and received a Leadership Award, along with distinctions in Performing Arts, Communication Arts in English, Social Science, and Edukasyon sa Pagpapakatao.",
    ],
  },
  {
    name: "STI College of Laoag",
    year: "2020-2022",
    label: "Senior High School | MAWD Track",
    story: [
      "My Senior High School years took place during the pandemic, which meant adjusting to online learning despite unstable internet connections, distractions at home, and limited access to instructors. I took the Mobile App and Web Development track, which deepened my appreciation for technology. For my thesis, I developed an Android tour guide app for travelers in Ilocos Norte, which received an award for innovation.",
      "I also took on leadership roles in team activities and clubs, eventually being elected SSG President for the entire school for the 2021–2022 academic year. Working with faculty members and fellow officers to support students and organize school events was challenging, but rewarding at the same time. I was a consistent Honor Student, and graduated as the Class Salutatorian.",
    ],
  },
  {
    name: "CIIT",
    year: "2022-Present",
    label: "Bachelor of Science in Computer Science",
    story: [
      "My undergraduate journey has been a rollercoaster. As a consistent honor student, receiving a grade of 85 in my freshman year that disqualified me from graduating with Latin honors was beyond devastating. It took a toll on my mental health and led me to transfer schools for a semester before eventually returning to CIIT for its curriculum and learning environment. However, the experience taught me that there is more to life than academics.",
      "Despite the setbacks, I continued to challenge myself. I received the Gold Weave distinction for ranking in the top 1-10 and the Silver Weave distinction for ranking 11th to 20th among thousands of students. I also made the Dean’s List for eight semesters, received Best in Project awards for three courses, and won campus competitions. Now in my final year, I’m working on my thesis. Stay tuned for what comes next!",
    ],
  },
];

const About = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [educPosition, setEducPosition] = useState({ x: 0, y: 0 });
  const [c1Position, setC1Position] = useState({ x: 0, y: 0 });
  const [c2Position, setC2Position] = useState({ x: 0, y: 0 });
  const [c3Position, setC3Position] = useState({ x: 0, y: 0 });
  const [s1Position, setS1Position] = useState({ x: 0, y: 0 });
  const [s2Position, setS2Position] = useState({ x: 0, y: 0 });
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleMouseMove = (e, setPosition) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x, y });
  };

  const handleMouseLeave = (setPosition) => {
    setPosition({ x: 0, y: 0 });
  };

  const handleCardKeyDown = (e, school) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedSchool(school);
    }
  };

  const handleCertKeyDown = (e, cert) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedCert(cert);
    }
  };

  useEffect(() => {
    document.title = "About - Jarell Tamonte";
  }, []);

  useEffect(() => {
    if (!selectedSchool && !selectedCert) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedSchool(null);
        setSelectedCert(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSchool, selectedCert]);

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
                I have always been fascinated by the ever-evolving world of
                technology since childhood, even though{" "}
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
                'Mattia,' which means "Gift of God" in Italian.
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
              role="button"
              tabIndex={0}
              onClick={() => setSelectedSchool(schools[0])}
              onKeyDown={(e) => handleCardKeyDown(e, schools[0])}
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
                <p className="award">
                  <span className="number-highlight">(1)</span> Class
                  Salutatorian
                </p>
                <p className="award">
                  <span className="number-highlight">(2)</span> Best in
                  Performing Arts, English, and Social Science
                </p>
                <p className="award">
                  <span className="number-highlight">(3)</span> Junior High
                  School President (2019-2020)
                </p>
              </div>
            </div>
            <div
              className="card block"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedSchool(schools[1])}
              onKeyDown={(e) => handleCardKeyDown(e, schools[1])}
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
                <p className="award">
                  <span className="number-highlight">(1)</span> Class
                  Salutatorian
                </p>
                <p className="award">
                  <span className="number-highlight">(2)</span> Best in
                  Innovation for STI Expo Awardee (2022)
                </p>
                <p className="award">
                  <span className="number-highlight">(3)</span> SSG President
                  (2020-2022)
                </p>
              </div>
            </div>

            <div
              className="card block"
              role="button"
              tabIndex={0}
              onClick={() => setSelectedSchool(schools[2])}
              onKeyDown={(e) => handleCardKeyDown(e, schools[2])}
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
              <p className="school-label">
                Bachelor of Science in Computer Science
              </p>

              <div className="school-line"></div>

              <div className="awards">
                <p className="award">
                  <span className="number-highlight">(1)</span> Gold and Silver
                  Weave Awardee
                </p>
                <p className="award">
                  <span className="number-highlight">(2)</span> Dean's List, 8
                  Semesters
                </p>
                <p className="award">
                  <span className="number-highlight">(3)</span> Best in Project
                  for Machine Learning, Data Mining, and Algorithms and
                  Complexity
                </p>
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
          <div className="cert-grid">
            {certificatesData.map((cert) => (
              <div
                className="card block cert-card"
                key={cert.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => handleCertKeyDown(e, cert)}
              >
                <div className="cert-preview">
                  <iframe
                    className="cert-frame"
                    style={{ aspectRatio: cert.ratio || "1.74 / 1" }}
                    src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title={cert.title}
                    tabIndex={-1}
                    loading="lazy"
                  />
                </div>
                <div className="card-heading cert-meta">
                  <p className="school">{cert.title}</p>
                  <p className="school-year">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedSchool && (
        <div className="modal-overlay" onClick={() => setSelectedSchool(null)}>
          <div
            className="modal-card"
            role="dialog"
            aria-modal="true"
            aria-label={selectedSchool.name}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={() => setSelectedSchool(null)}
            >
              ×
            </button>
            <div className="card-heading">
              <p className="school">{selectedSchool.name}</p>
              <p className="school-year">{selectedSchool.year}</p>
            </div>
            <p className="school-label">{selectedSchool.label}</p>

            <div className="school-line"></div>

            <div className="modal-story">
              {selectedSchool.story.map((paragraph, index) => (
                <p className="modal-story-text" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedCert && (
        <div className="modal-overlay" onClick={() => setSelectedCert(null)}>
          <div
            className="modal-card cert-modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={() => setSelectedCert(null)}
            >
              ×
            </button>
            <div className="card-heading">
              <p className="school">{selectedCert.title}</p>
              <p className="school-year">{selectedCert.year}</p>
            </div>
            <p className="school-label">{selectedCert.institution}</p>

            <div className="school-line"></div>

            <div className="cert-skills">
              {selectedCert.skills.map((skill) => (
                <span className="cert-skill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <object
              className="cert-pdf"
              style={{ aspectRatio: selectedCert.ratio || "1.74 / 1" }}
              data={`${selectedCert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
              type="application/pdf"
              aria-label={selectedCert.title}
            >
              <a href={selectedCert.pdf} target="_blank" rel="noreferrer">
                Open certificate
              </a>
            </object>
          </div>
        </div>
      )}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
