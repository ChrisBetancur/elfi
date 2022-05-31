import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/home/Home';
import Info from './pages/info/Info';
import About from './pages/about/About';
import Courses from './pages/courses/Courses';

import './App.css';

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Routes>

          <Route path={"/"} element={<Home />} />

          <Route path={"/info"} element={<Info />} />

          <Route path={"/about"} element={<About />} />

          <Route path={"/courses"} element={<Courses />} /> 

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
