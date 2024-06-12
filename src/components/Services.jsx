import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: ".Net",
      desc: "Desenvolvimento de APIs com .NET: implementação de endpoints RESTful usando ASP.NET Core, acesso a dados com Entity Framework e Dapper, autenticação e validação de dados robustas.",
      icon: "fa-brands fa-microsoft",
    },
    {
      name: "Laravel",
      desc: "Desenvolvimento de APIs com Laravel: criação de endpoints RESTful, gerenciamento de dados com Eloquent ORM, autenticação e validação de dados robustas para garantir segurança e integridade.",
      icon: "fa-brands fa-laravel",
    },
    {
      name: "Angular",
      desc: "Desenvolvimento front-end com Angular: criação de aplicações web dinâmicas, integração com APIs RESTful, gerenciamento de estado com NgRx, e implementação de autenticação e validação de formulários.",
      icon: "fa-brands fa-angular",
    },
    {
      name: "JQuery",
      desc: "Desenvolvimento front-end com jQuery: criação de interfaces web interativas, manipulação dinâmica do DOM, integração com APIs RESTful e validação de formulários.",
      icon: "fa-brands fa-js",
    },

    {
      name: "HTML",
      desc: "Desenvolvimento web com HTML: criação de estruturas semânticas de páginas, implementação de interfaces de usuário acessíveis e integração com CSS e JavaScript para sites interativos.",
      icon: "fa-brands fa-html5",
    },
    {
      name: "CSS",
      desc: "Desenvolvimento web com CSS: estilização de páginas HTML, criação de layouts responsivos, e implementação de designs visuais consistentes e acessíveis.",
      icon: "fa-brands fa-css3",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Serviços
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            O que eu faço ?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
