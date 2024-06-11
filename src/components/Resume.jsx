import React from "react";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2001 - 2024",
      title: "Universidade Cidade De São Paulo",
      place: "engenharia de Software",
      desc: "Curso focado 60% em projetos praticos, normalmente JQuery e .Net .",
    },
    {
      yearRange: "2022 - 2023",
      title: "Trybe",
      place: "Desenvolvedor Web",
      desc: "Curso focado 100% em projetos praticos, tanto Frontend com React JS, quanto no Backend .Net .",
    },
    {
      yearRange: "2021 - 2024",
      title: "Desenvolvimento Web",
      place: "Alura",
      desc: "Uso a plataforma para me aperfeiçoar em diversas tanto em Laravel quanto em .Net .",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2019 - Atual",
      title: "Desenvolvedor Web",
      place: "Freelancer",
      desc: "Desenvolvimento de projetos como este site focado em HTML, CSS e JS, quanto em projetos em PHP.",
    },
    // {
    //   yearRange: "2014 - 2016",
    //   title: "Jr. Product Designer",
    //   place: "Dribbble",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
    // {
    //   yearRange: "2017 - 2019",
    //   title: "Product Designer",
    //   place: "Adobe",
    //   desc: "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    // },
  ];

  const skills = [
    {
      name: "JQuery",
      percent: 65,
    },
    {
      name: "HTML/CSS/JS",
      percent: 80,
    },
    {
      name: ".Net",
      percent: 70,
    },
    {
      name: "Laravel",
      percent: 90,
    },
    {
      name: "Angular Js",
      percent: 60,
    },
    {
      name: "Bootstrap",
      percent: 80,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Sumário
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resumo
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Cursos
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Experiência
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Hard Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href=""
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
