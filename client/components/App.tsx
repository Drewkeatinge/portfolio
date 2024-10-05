import { Link, Outlet } from "react-router-dom"

function App() {
  return (
    <div className="homepage">
      <div className="main-container">
      <h1 className="title">Andrew Keatinge</h1>
      <div className="nav">
        <Link className="nav-button" to="/about">About</Link>
        <Link className="nav-button" to="/projects">Projects</Link>
        <Link className="nav-button" to="/experience">Experience</Link>
        <Link className="nav-button" to="/contact">Contact</Link>
      </div>
      <div className="tech-stack">
        <img src="/images/React-icon.png" alt="react icon" className="tech-icon"/>
        <img src="/images/HTML icon.png" alt="react icon" className="tech-icon"/>
        <img src="/images/CSS icon.png" alt="react icon" className="tech-icon"/>
        <img src="/images/Javscript icon.png" alt="react icon" className="tech-icon"/>
        <img src="/images/typescript icon.png" alt="react icon" className="tech-icon"/>
        <img src="/images/node icon.png" alt="react icon" className="tech-icon"/>
        <img src="/images/knex icon.png" alt="react icon" className="tech-icon"/>
        <img src="/images/python icon.png" alt="react icon" className="tech-icon"/>

      </div>
      <Outlet />
      </div>
    </div>
  )
}

export default App
