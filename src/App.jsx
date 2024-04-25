import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx"
import GamePage from './pages/GamePage.jsx';

function App() {
  console.log(import.meta.env.VITE_API_KEY) // "123"
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/game/:id' element={<GamePage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
