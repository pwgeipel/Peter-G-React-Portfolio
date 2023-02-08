import Container from "../components/container";
import { projects } from "../components/project"


function PortfolioPage() {
    return (
        // <Container className="mt-5">
        //     <h1>Portfolio</h1>
        //     <div className="flex-row">

        //     </div>
        // </Container>
        <>
          <Container className="mt-5">
            <div className="flex flex-wrap -m-4">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}
                  className="col-6 col-sm-12">
                  <div className="flex-row">
                  <img
                        src={require(`../assets/${project.image}`)}
                        // alt={name}
                        className="img-fluid"
                    />
                    <div className="fs-2">
                      <h2 className="fs-4">
                        {project.subtitle}
                      </h2>
                      <h1 className="fs-3">
                        {project.title}
                      </h1>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </>
    )
}

export default PortfolioPage