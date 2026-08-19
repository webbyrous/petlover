import './index.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar'
import FormDog from './components/FormDog'
import AnimalDetail from './components/AnimalDetail'
import Search from './pages/Search'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<FormDog />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/animal/:id' element={<AnimalDetail />}/>
      </Routes>
    </>
  )
}

export default App
