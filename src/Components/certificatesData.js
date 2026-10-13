import sql from "../certs/sql.pdf";
import python from "../certs/python.pdf";
import powerbi from "../certs/powerbi.pdf";
import datascience from "../certs/datascience.pdf";
import dataanalyst from "../certs/dataanalyst.pdf";
import java from "../certs/java.pdf";
import ibm_cybersecuirty from "../certs/cyber.pdf";
import cisco_cybersecuity from "../certs/cisco-cyber.pdf";
import ui from "../certs/ui.pdf";
import html from "../certs/html.pdf";
import css from "../certs/css.pdf";

export const certificatesData = [
  {
    id: 1,
    title: "Data Science",
    skills: ["Hypothesis Testing", "Machine Learning", "Statistical Modeling", "Supervised Learning", "Unsupervised Learning"],
    institution: "DataCamp",
    pdf: datascience,
    year: 2025,
    ratio: "1.74 / 1"
  },
  {
    id: 2,
    title: "Associate Data Analyst",
    skills: ["Data Analysis", "Exploratory Data Analysis", "Data Manipulation", "Data Cleaning", "Statistics"],
    institution: "DataCamp",
    pdf: dataanalyst,
    year: 2026,
    ratio: "1.74 / 1"
  },
  {
    id: 3,
    title: "Python Data Associate",
    skills: ["Data Analysis", "Exploratory Data Analysis", "Data Manipulation", "Data Cleaning"],
    institution: "DataCamp",
    pdf: python,
    year: 2026,
    ratio: "1.74 / 1"
  },
  {
    id: 4,
    title: "SQL Associate",
    skills: ["Window Functions", "Joins", "Common Table Expressions (CTEs), Subquery"],
    institution: "DataCamp",
    pdf: sql,
    year: 2026,
    ratio: "1.74 / 1"
  },
  {
    id: 5,
    title: "Power BI",
    skills: ["Data Visualization", "Business Intelligence", "Data Analysis"],
    institution: "DataCamp",
    pdf: powerbi,
    year: 2026,
    ratio: "1.74 / 1"
  },
  {
    id: 6,
    title: "Cybersecurity Fundamentals",
    skills: ["Network Security", "Cryptography", "Incident Response", , "Threat & Vulnerability Management"],
    institution: "IBM",
    pdf: ibm_cybersecuirty,
    year: 2026,
    ratio: "11 / 8.5"
  },
  {
    id: 7,
    title: "Introduction to Cybersecurity",
    skills: ["Privacy Protection", "Firewalls", "Cyber Defense"],
    institution: "Cisco",
    pdf: cisco_cybersecuity,
    year: 2026,
    ratio: "11 / 8.5"
  },
  {
    id: 8,
    title: "User Experience Design Fundamentals",
    skills: ["User-centered Design", "User Interface Design", "UX Research", "User Research"],
    institution: "IBM",
    pdf: ui,
    year: 2026,
    ratio: "11 / 8.5"
  },
  {
    id: 9,
    title: "Java Fundamentals",
    skills: ["Object-Oriented Programming", "Data Structures", "Algorithms"],
    institution: "DataCamp",
    pdf: java,
    year: 2022,
    ratio: "11 / 8.5"
  },
  {
    id: 10,
    title: "Introduction to CSS",
    skills: ["Web Design", "Styles"],
    institution: "Sololearn",
    pdf: css,
    year: 2022,
    ratio: "11 / 8.5"
  },
  {
    id: 11,
    title: "HTML Fundamentals",
    skills: ["Web Development", "HTML5", "Web Application"],
    institution: "Sololearn",
    pdf: html,
    year: 2022,
    ratio: "11 / 8.5"
  },
];
