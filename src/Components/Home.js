import "../Style/Home.css";
import me from "../images/Jarell Tamonte.jpg";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { items } from "./projectsData";

const Home = () => {
  const visibleItems = items.slice(0, 6);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [resumePosition, setResumePosition] = useState({ x: 0, y: 0 });
  const [aboutPosition, setAboutPosition] = useState({ x: 0, y: 0 });
  const [workPosition, setWorkPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, setPosition) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x, y });
  };

  const handleMouseLeave = (setPosition) => {
    setPosition({ x: 0, y: 0 });
  };

  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryFixed, setGalleryFixed] = useState(false);
  const [galleryProgress, setGalleryProgress] = useState(0);

  const thirdSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const showcaseRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY =
            window.pageYOffset || document.documentElement.scrollTop;
          setScrollY(currentScrollY);

          if (thirdSectionRef.current) {
            const containerElement = thirdSectionRef.current.parentElement;
            const containerRect = containerElement.getBoundingClientRect();
            const thirdSectionRect =
              thirdSectionRef.current.getBoundingClientRect();

            const windowHeight =
              window.innerHeight || document.documentElement.clientHeight;

            const containerTop = containerRect.top;
            const containerBottom = containerRect.bottom;
            const containerHeight = containerRect.height;

            const shouldBeFixed =
              containerTop <= 0 && containerBottom > windowHeight;

            if (shouldBeFixed) {
              if (!galleryFixed) {
                setGalleryFixed(true);
              }

              const scrolledIntoContainer = Math.abs(containerTop);
              const maxScrollDistance = containerHeight - windowHeight;

              const progress =
                maxScrollDistance > 0
                  ? Math.max(
                      0,
                      Math.min(1, scrolledIntoContainer / maxScrollDistance),
                    )
                  : 0;

              setGalleryProgress(progress);

              const totalImages = visibleItems.length;
              if (totalImages > 0) {
                const imageIndex = Math.floor(progress * totalImages);
                const clampedIndex = Math.max(
                  0,
                  Math.min(imageIndex, totalImages - 1),
                );
                setCurrentImageIndex(clampedIndex);
              }
            } else {
              if (galleryFixed) {
                setGalleryFixed(false);
                setGalleryProgress(0);

                if (containerTop > 0) {
                  setCurrentImageIndex(0);
                } else {
                  setCurrentImageIndex(visibleItems.length - 1);
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      setTimeout(handleScroll, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [visibleItems.length, galleryFixed]);

  const skillRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(skillRef.current, {
      strings: ["Data Science", "Machine Learning", "Data Analysis"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="first-section">
        <div
          className="circle"
          style={{
            transform: `translateY(${scrollY * -0.2}px) scale(${
              1 - scrollY * 0.001
            })`,
          }}
        ></div>
        <div className="container">
          <div className="app">
            <div className="row">
              <div className="left-side">
                <img src={me} alt="Jarell" className="small-pic" />
                <span className="gen-skill" ref={skillRef}></span>
                <p className="hi">
                  Greetings! <span className="iam">I am</span>
                </p>
                <p
                  className="jarell"
                  onMouseMove={(e) => handleMouseMove(e, setPosition)}
                  onMouseLeave={() => handleMouseLeave(setPosition)}
                  style={{
                    transform: `translate(${position.x * 0.1}px, ${
                      position.y * 0.1
                    }px)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  Jarell Tamonté
                </p>
                <p className="brief-info">
                  I'm an aspring <span className="b-text">Data Scientist</span>{" "}
                  and Software Developer with a passion for creating innovative
                  solutions. I specialize in turning raw data into models and
                  findings that answer practical questions. My goal is to
                  leverage technology to solve real-world problems and make a
                  positive impact on society.
                </p>
                <button
                  type="button"
                  className="downloadButton"
                  onMouseMove={(e) => handleMouseMove(e, setResumePosition)}
                  onMouseLeave={() => handleMouseLeave(setResumePosition)}
                  onClick={() => {
                    document.title = "Viewing Resumé...";
                    window.open(
                      require("../cv/TAMONTE_Jarell_Resume.pdf"),
                      "_blank",
                    );
                    setTimeout(() => {
                      document.title = "Jarell Tamonte · Portfolio";
                    }, 2000);
                  }}
                  style={{
                    transform: `translate(${resumePosition.x * 0.1}px, ${
                      resumePosition.y * 0.1
                    }px)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  Resumé <BsBoxArrowUpRight style={{ marginLeft: "6px" }} />
                </button>
              </div>

              <div className="right-side" id="right-side">
                <div className="profile-pic-container">
                  <img src={me} alt="Jarell" className="profile-pic" />
                  <span className="skill-text skill-4" ref={skillRef}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-section">
        <div className="about-content">
          <Link
            to="/about"
            onMouseMove={(e) => handleMouseMove(e, setAboutPosition)}
            onMouseLeave={() => handleMouseLeave(setAboutPosition)}
            style={{
              transform: `translate(${aboutPosition.x * 0.1}px, ${
                aboutPosition.y * 0.1
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="circle-about show-cont">
              <span className="about-circle-text"></span>
            </div>
          </Link>
          <div className="vertical-line show-cont"></div>
          <div className="about-text">
            <p className="home-text-about show-cont">
              I'm currently pursuing a Bachelor's degree in{" "}
              <span className="a-text">Computer Science</span> at CIIT and I am
              expected to graduate in 2027. My academic journey has equipped me
              with a strong foundation in programming, algorithms, and data
              structures, which I leverage in my projects and research. I am
              passionate about applying my knowledge to real-world problems and
              continuously expanding my skill set in the ever-evolving field of
              technology.
            </p>
          </div>
        </div>
      </div>

      <div
        className="scroll-trigger-container"
        style={{ height: `${visibleItems.length * 50}vh` }}
      >
        <div className="third-section" ref={thirdSectionRef}>
          <div
            className={`gallery-section ${galleryFixed ? "gallery-fixed" : ""}`}
            ref={gallerySectionRef}
          >
            <p className="gallery">Projects Gallery</p>
            <p className="gallery-text">These are some of my projects</p>
            {galleryFixed && (
              <>
                <div
                  className="progress-indicator"
                  style={{
                    width: "200px",
                    height: "4px",
                    backgroundColor: "rgba(236, 229, 211, 0.3)",
                    borderRadius: "2px",
                    margin: "20px auto",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${galleryProgress * 100}%`,
                      height: "100%",
                      backgroundColor: "#ece5d3",
                      borderRadius: "2px",
                      transition: "width 0.1s ease-out",
                    }}
                  ></div>
                </div>

                <p
                  style={{
                    textAlign: "center",
                    color: "#ece5d3",
                    fontSize: "14px",
                    margin: "10px 0",
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: "200",
                  }}
                >
                  {currentImageIndex + 1} / {visibleItems.length}
                </p>
                <Link to="/work" className="more-work">
                  <button
                    type="button"
                    className="workButton"
                    onMouseMove={(e) => handleMouseMove(e, setWorkPosition)}
                    onMouseLeave={() => handleMouseLeave(setWorkPosition)}
                    style={{
                      transform: `translate(${workPosition.x * 0.1}px, ${
                        workPosition.y * 0.1
                      }px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  >
                    More work{" "}
                    <BsBoxArrowUpRight style={{ marginLeft: "6px" }} />
                  </button>
                </Link>
              </>
            )}
          </div>

          <div
            className={`showcase ${galleryFixed ? "showcase-fixed" : ""}`}
            ref={showcaseRef}
          >
            {items[currentImageIndex] && (
              <img
                src={items[currentImageIndex].image[0]}
                alt={`Project ${currentImageIndex + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.3s ease-in-out",
                }}
              />
            )}
          </div>
          <Link to="/work" className="more-work1">
            <button
              type="button"
              className="workButton"
              onMouseMove={(e) => handleMouseMove(e, setWorkPosition)}
              onMouseLeave={() => handleMouseLeave(setWorkPosition)}
              style={{
                transform: `translate(${workPosition.x * 0.1}px, ${
                  workPosition.y * 0.1
                }px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              More work <BsBoxArrowUpRight style={{ marginLeft: "6px" }} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
