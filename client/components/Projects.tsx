import { Link } from "react-router-dom"

function Projects() {
  return(
    <>
    <h1>Dev Academy Projects</h1>
    <p>Click to view the projects that were worked on during my time at Dev Academy</p>
    <Link className="nav-button" to="/da-projects">Dev Academy Projects</Link>
    <hr className="divider" />
    <h1>Personal Projects</h1>
    <p>Click to view the projects that I have worked on in my own time</p>
    <Link className="nav-button" to="/personal-projects">Personal Projects</Link>
    </>
  )
}

export default Projects