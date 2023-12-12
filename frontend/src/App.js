import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-zinc-800 w-screen h-screen text-white'>
      <BrowserRouter>
        <Navbar />
        <div className='pt-40'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
