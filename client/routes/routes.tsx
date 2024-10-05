import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from '../components/About'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import App from '../components/App'

const routes = createRoutesFromElements(
<Route key='home' path="/" element={<App/>}>
  <Route key='about' path="/about" element={<About />} />,
  <Route key='projects' path="/projects" element={<Projects />} />,
  <Route key='experience' path="/experience" element={<Experience />} />,
  <Route key='contact' path="/contact" element={<Contact />} />,
</Route>
)

export const router = createBrowserRouter(routes)