import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { items } from "./projectsData";
import { useNavigate } from "react-router-dom";
import "../Style/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [filPosition, setFilPosition] = useState({ x: 0, y: 0 });
  const [sortBy, setSortBy] = useState("default");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);
  const navigate = useNavigate();

  const filters = ["Website", "Web App", "Mobile App", "Machine Learning"];

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "az", label: "Title: A → Z" },
    { value: "za", label: "Title: Z → A" },
    { value: "newest", label: "Date: Newest first" },
    { value: "oldest", label: "Date: Oldest first" },
  ];

  const filterItems = useCallback(() => {
    if (selectedFilters.length > 0) {
      const tempItems = selectedFilters
        .map((selectedCategory) =>
          items.filter((item) => item.category === selectedCategory)
        )
        .flat();
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...items]);
    }
  }, [selectedFilters]);

  useEffect(() => {
    filterItems();
  }, [filterItems]);

  useEffect(() => {
    document.title = "Works - Jarell Tamonte";
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortedItems = useMemo(() => {
    const list = [...filteredItems];
    switch (sortBy) {
      case "az":
        return list.sort((a, b) => a.title.localeCompare(b.title));
      case "za":
        return list.sort((a, b) => b.title.localeCompare(a.title));
      case "newest":
        return list.sort((a, b) => Number(b.year) - Number(a.year));
      case "oldest":
        return list.sort((a, b) => Number(a.year) - Number(b.year));
      default:
        return list;
    }
  }, [filteredItems, sortBy]);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      setSelectedFilters(
        selectedFilters.filter((el) => el !== selectedCategory)
      );
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const handleMouseMove = (event, item) => {
    const { clientX, clientY } = event;
    setPosition({ x: clientX, y: clientY });
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleCardClick = (id) => {
    navigate(`/clicked/${id}`);
  };

  return (
    <div className="project-app">
      <div className="first-project">
        <div className="project-title-container">
          <p className="project-title">Works and Case Studies</p>
          <p className="project-descri">The following highlights some of my completed projects</p>
        </div>
        <FontAwesomeIcon icon={faGlobe} className="faShape" />
      </div>

      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            key={idx}
            onClick={() => handleFilterButtonClick(category)}
            onMouseMove={(e) => {
              const rect = e.target.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              setFilPosition({ x, y });
            }}
            onMouseLeave={() => setFilPosition({ x: 0, y: 0 })}
            style={{
              transform: `translate(${filPosition.x * 0.1}px, ${
                filPosition.y * 0.1
              }px)`,
            }}
            className={`button-work ${
              selectedFilters.includes(category) ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="sort-container" ref={sortRef}>
        <button
          className="sort-button"
          onClick={() => setSortOpen((prev) => !prev)}
        >
          Sort by: {sortOptions.find((o) => o.value === sortBy).label}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`sort-chevron ${sortOpen ? "open" : ""}`}
          />
        </button>

        {sortOpen && (
          <ul className="sort-menu">
            {sortOptions.map((option) => (
              <li
                key={option.value}
                className={`sort-option ${
                  sortBy === option.value ? "sort-option-active" : ""
                }`}
                onClick={() => {
                  setSortBy(option.value);
                  setSortOpen(false);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="items-container">
        {sortedItems.map((item, idx) => (
          <div
            key={item.id ?? idx}
            className="item"
            onMouseMove={(e) => handleMouseMove(e, item)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCardClick(item.id)}
          >
            <p className="item-name">{item.title}</p>
            <div className="item-desc">
              <p className="category">{item.category}</p>
              <p className="year">{item.year}</p>
            </div>
          </div>
        ))}
      </div>

      {hoveredItem && hoveredItem.image?.length > 0 && (
        <div
          className="hovered-image"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            backgroundImage: `url(${hoveredItem.image[0]})`,
          }}
        >
          <div className="view-circle">View</div>
        </div>
      )}
    </div>
  );
};

export default Projects;