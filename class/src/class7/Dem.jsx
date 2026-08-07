import { useState, useEffect } from 'react'

const Dem = () => {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [selectedBrand, setSelectedBrand] = useState("")
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data.products || [])
        setProducts(data.products || [])
      })
      .catch((err) => console.log('failed to load products', err))
  }, [])

  const handleSearch = async (e) => {
    const value = e.target.value
    setQuery(value)

    if (!value.trim()) {
      setProducts(allProducts)
      return
    }

    try {
      setLoading(true)
      const res = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(value)}`)
      const data = await res.json()
      setProducts(data.products || [])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const sortByPrice = () => {
    setAllProducts([...allProducts].sort((a, b) => a.price - b.price))
  }

  const sortByPriceDesc = () => {
    setAllProducts([...allProducts].sort((a, b) => b.price - a.price))
  }

  const brands = [...new Set(allProducts.map((p) => p.brand))]

  const filteredProducts = allProducts.filter((product) => {
    const brandMatch = !selectedBrand || product.brand === selectedBrand
    const minMatch = !minPrice || product.price >= Number(minPrice)
    const maxMatch = !maxPrice || product.price <= Number(maxPrice)
    return brandMatch && minMatch && maxMatch
  })

  return (
    <div>
      <input type='text' value={query} onChange={handleSearch} placeholder="Search products..." />

      <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
        <option value=''>All brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </select>

      <input
        type='number'
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder='Min price'
      />
      <input
        type='number'
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder='Max price'
      />

      <button onClick={sortByPrice}>Sort by price</button>
      <button onClick={sortByPriceDesc}>Sort by price (desc)</button>

      {loading && <p>Loading...</p>}

      {query.trim() && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}

      <ul>
        {filteredProducts.map((p) => (
          <li
            key={p.id}
            style={{
              listStyle: 'none',
              border: '1px solid #444',
              borderRadius: '12px',
              padding: '12px',
              margin: '12px 0',
              width: '220px',
              textAlign: 'center',
            }}
          >
            <img src={p.thumbnail} alt={p.title} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dem