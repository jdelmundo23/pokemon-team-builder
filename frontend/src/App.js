import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Box from './pages/Box'
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
