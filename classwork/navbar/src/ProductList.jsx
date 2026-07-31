
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    let nav= useNavigate()
    const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    inStock: true,
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 1899,
    inStock: true,
  },
  {
    id: 3,
    name: "Coffee Mug",
    category: "Kitchen",
    price: 299,
    inStock: false,
  },
  {
    id: 4,
    name: "Backpack",
    category: "Accessories",
    price: 1599,
    inStock: true,
  },
];
function fun1(id){
    console.log(id)
    nav(`/product/${id}`)
}
  return (
    <div>
        {
            products.map((a)=>{
                return(<>
                <li onClick={()=>fun1(a.id)}>{a.name}</li>
                </>)
            })
        }
    </div>
  )
}

export default ProductList