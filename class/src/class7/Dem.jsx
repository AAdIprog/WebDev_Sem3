import { useEffect, useState } from 'react'

const Dem = () => {
  const [query, setQuery] = useState('')
  const [allProducts, setAllProducts] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        const items = data.products || []
        setAllProducts(items)
        setProducts(items)
      } catch (err) {
        console.error('Failed to fetch products', err)
      }
    }

    fetchProducts()
  }, [])

  const handleChange = async (event) => {
    const value = event.target.value
    setQuery(value)

    if (value.trim().length < 2) {
      setProducts(allProducts)
      return
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(value)}`
      )
      const data = await response.json()
      setProducts(data.products || [])
    } catch (err) {
      console.error('Failed to search products', err)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products"
      />

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dem