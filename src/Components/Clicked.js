import { useParams, useNavigate } from "react-router-dom";
import { items } from "./projectsData";
import "../Style/ClickedProject.css";
import "../Style/Projects.css";
import { GoArrowDownRight, GoArrowLeft, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Clicked = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentIndex = items.findIndex((item) => item.id.toString() === id);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  if (currentIndex === -1) {
    return (
      <div className="error-message">
        <div className="pn1">
          <h1 className="pnf">Project not found</h1>
          <p className="pnfm">The project you're looking for doesn't exist.</p>
        </div>
        <Link to="/work" style={{ textDecoration: "none" }}>
          <div
            className="circle-error"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `translate(${position.x * 0.1}px, ${
                position.y * 0.1
              }px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <span className="error-circle-text"></span>
          </div>
        </Link>
      </div>
    );
  }

  const project = items[currentIndex];

  const handleNextProject = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < items.length) {
      navigate(`/clicked/${items[nextIndex].id}`);
    }
  };

  const handlePrevProject = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      navigate(`/clicked/${items[prevIndex].id}`);
    }
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev < project.image.length - 1 ? prev + 1 : prev
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="project-info">
      <div className="project-web-view">
        <div className="project-info-section">
          <div className="project-heading">
            <p className="project-titles">{project.title}</p>
            <p className="project-type">
              {project.category} | {project.year}
            </p>
          </div>

          <div className="project-description-section">
            <div className="technologies-list">
              {project.technologies.filter(Boolean).map((tech, idx) => (
                <p key={idx} className="technologies">
                  {tech}
                </p>
              ))}
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
        <div className="project-images">
          <div className="image-layer">
            {project.image.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`${project.title} ${index + 1}`}
                className="project-img"
              />
            ))}
            <div
              className={`scroll-indicator ${
                !showScrollIndicator ? "hidden" : ""
              }`}
            >
              Scroll here to see more <ChevronDown className="scroll-icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="project-mobile-view">
        <div className="items">
          <p className="project-titles">{project.title}</p>
          <div className="item-desc1">
            <p className="project-type">
              {project.category} | {project.year}
            </p>
          </div>
        </div>

        <div className="image-showcase">
          <div className="showcase-container">
            <img
              src={project.image[currentImageIndex]}
              alt={`${project.title} ${currentImageIndex + 1}`}
              className="showcase-image"
            />

            {project.image.length > 1 && (
              <>
                <button
                  className={`image-nav-btn prev-btn ${
                    currentImageIndex === 0 ? "disabled" : ""
                  }`}
                  onClick={handlePrevImage}
                  disabled={currentImageIndex === 0}
                >
                  <GoArrowLeft />
                </button>
                <button
                  className={`image-nav-btn next-btn ${
                    currentImageIndex === project.image.length - 1
                      ? "disabled"
                      : ""
                  }`}
                  onClick={handleNextImage}
                  disabled={currentImageIndex === project.image.length - 1}
                >
                  <GoArrowRight />
                </button>
              </>
            )}
          </div>

          {project.image.length > 1 && (
            <div className="image-indicators">
              {project.image.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="technologies-list">
          {project.technologies.filter(Boolean).map((tech, idx) => (
            <p key={idx} className="technologies">
              {tech}
            </p>
          ))}
        </div>

        <div className="div-arrow">
          {currentIndex > 0 && (
            <GoArrowDownRight
              className="arrow-down prev-arrow"
              onClick={handlePrevProject}
            />
          )}
          {currentIndex < items.length - 1 && (
            <GoArrowDownRight
              className="arrow-down next-arrow"
              onClick={handleNextProject}
            />
          )}
        </div>

        <div className="technologies-list1">
          {project.technologies.filter(Boolean).map((tech, idx) => (
            <p key={idx} className="technologies">
              {tech}
            </p>
          ))}
        </div>

        <p className="project-description">{project.description}</p>

        <div className="div-arrow1">
          {currentIndex > 0 && (
            <GoArrowDownRight
              className="arrow-down prev-arrow"
              onClick={handlePrevProject}
            />
          )}
          {currentIndex < items.length - 1 && (
            <GoArrowDownRight
              className="arrow-down next-arrow"
              onClick={handleNextProject}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Clicked;
