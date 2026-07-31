
import { useParams } from 'react-router-dom';

const ProductsD = () => {
  let {id}=useParams();

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
let data=products.find((a)=>{
    console.log("this needs to be found")
    return a.id==id
})
console.log(data)
return (
    <div>
        <h1>{data.name}</h1>
    </div>
  )
}

export default ProductsD