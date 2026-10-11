import "../Style/CScratch.css";
import { items } from "../Data/Items";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const CScratch = () => {
  const { id } = useParams();
  const project = items[1];
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

  if (!project) {
    return (
      <div className="c-scratch">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <div className="desktop-clicked-div">
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
            </div>https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.storyblocks.com%2Fvideo%2Fsearch%2Flonely&psig=AOvVaw183etbwXJdI2cAXXAoWh_C&ust=1760866583325000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKjIn6y5rZADFQAAAAAdAAAAABAE
            <p className="project-description">{project.description}</p>
          </div>
        </div>

        <div className="project-images">
          {project.image.map((item, index) =>
            item.type === "video" ? (
              <video
                key={index}
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="project-img"
              />
            ) : (
              <img
                key={index}
                src={item.src}
                alt={`${project.title} ${index + 1}`}
                className="project-img"
              />
            )
          )}
          <div
            className={`scroll-indicator ${
              !showScrollIndicator ? "hidden" : ""
            }`}
          >
            Scroll here to see more <ChevronDown className="scroll-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CScratch;
