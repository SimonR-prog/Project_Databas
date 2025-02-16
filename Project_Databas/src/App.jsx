import './App.css'
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Projects from './views/projects';
import CreateProjects from './views/CreateProjects';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='wrapper'>
          <Header/>
          <main>
            <Routes>
              <Route path="/projectsheheheheheeh" element={<Projects />} />
              <Route path="/create" element={<CreateProjects />} />
              <Route path="/" element={<CreateProjects />} />
            </Routes>
          </main>
          <Footer/>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
