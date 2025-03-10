import { createBrowserRouter } from 'react-router-dom'
import { Hero } from './pages/hero/hero'
import { Blog } from './pages/blog/blog'
import { Projects } from './pages/projects/projects'
import { Abooks } from './pages/abooks/abooks'
import { Resume } from './pages/resume/resume'


export const router = createBrowserRouter([
    {path: '/', element: <Hero />},
    {path: '/resume', element: <Resume />},
    {path: '/projects', element: <Projects />},
    {path: '/blog', element: <Blog />},
    {path: '/abooks', element: <Abooks />},
])