import React, { useEffect, useState } from 'react'
import { add } from '../Store/CartSlice';
import { useDispatch } from 'react-redux';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log("=========>>>>>>>>>>>Data", data);
        setProducts(data);
      } catch {
        console.error("Error fetching products:", error);
      }
    }
    
    fetchedProducts();
  }, [])
  // console.log("=========>>>>>>>>>>Product", products)
  const handelAddProduct = (product) => {
    //product store in Redux Store
    dispatch(add(product));
  }
  return (
  <div className='productsWrapper'>
    {
      products.map((product) => (
        <div className='cart' key={product.id}>

          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handelAddProduct(product)} className='btn'>Add to Cart</button>

        </div>
      ))
    }
  </div>
  )
}

export default Products;