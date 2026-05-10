import { Routes, Route } from 'react-router';
import ProfileLayout from './layout/ProfileLayout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <Routes>
      <Route element={<ProfileLayout />}>
        <Route index element={<Home />}/>
        <Route path='about-me' element={<AboutMe />}/>
      </Route>
    </Routes>
  )
}

export default App
