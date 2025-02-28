import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProjectView from './views/CreateProjectView';
import ShowAllProjectsView from './views/ShowAllProjectsView';
import UpdateProjectView from './views/UpdateProjectView';
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
              <Route path="/" element={<ShowAllProjectsView />} />
              <Route path="/Projects" element={<ShowAllProjectsView />} />
              <Route path="/Projects/create" element={<CreateProjectView />} />
              <Route path="/Projects/:id" element={<UpdateProjectView />} />
            </Routes>
          </main>
          <Footer/>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
