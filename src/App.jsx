import { Routes, Route } from "react-router-dom";
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import Toggle from './pages/Toggle';
import ProductCount from './pages/ProductCount';
import ToDo from './pages/ToDo'
import EyeToggle from './pages/EyeToggle';
import './App.css'
import Recipes from './components/Recipes';
import RecipeDesc from './components/RecipeDesc';

function App() {
  return (
    <>
    {/* <UseState/> */}
    {/* <UseEffect/> */}
    {/* <Toggle/> */}
    {/* <ProductCount/> */}
    {/* <ToDo/> */}
    {/* <EyeToggle/> */}
    {/* <Recipes/> */}

    <Routes>
      <Route path="/" element={<Recipes />} />
      <Route path="/recipe/:id" element={<RecipeDesc />} />
    </Routes>
    </>
    
  )
}

export default App
