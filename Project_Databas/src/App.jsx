import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CreateProjects from './views/CreateProjects';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/rojects' element={<Projects />} />
          <Route path='/create' element={<CreateProjects />} />

          <Route path='/' element={<CreateProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
