import { Routes, Route } from 'react-router';
import ProfileLayout from './layout/ProfileLayout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

const App = () => {
  return (
    <Routes>
      <Route element={<ProfileLayout />}>
        <Route index element={<Home />}/>
        <Route path='about-me' element={<AboutMe />}/>
        <Route path='projects' element={<Projects />} />
        <Route path='contact-me' element={<ContactMe />}/>
      </Route>
    </Routes>
  )
}

export default App
