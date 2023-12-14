import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Box from './pages/Box'
import Hatch from './pages/Hatch'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-zinc-800 w-screen h-screen text-white'>
      <BrowserRouter>
        <Navbar />
        <div className='pt-20 lg:pt-40 w-full h-full'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/box'
              element={<Box />}
            />
            <Route
              path='/hatch'
              element={<Hatch />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
