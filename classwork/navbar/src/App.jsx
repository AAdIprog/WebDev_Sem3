import NavBar from './NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './home.jsx'
import About from './about.jsx'
import ProductsD from './ProductsD.jsx'
import ProductList from './ProductList.jsx'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductsD />} />
      </Routes>
    </div>
  )
}

export default App