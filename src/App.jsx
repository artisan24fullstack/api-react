import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx"
import GamePage from './pages/GamePage.jsx';
import SearchResultsPage from './pages/SearchPage.jsx';
import TestPage from './pages/TestPage.jsx';

function App() {
  //console.log(import.meta.env.VITE_API_KEY) // "123"
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchResultsPage />} />
          <Route path='/game/:id' element={<GamePage />} />
          <Route path='/*' element={<TestPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
