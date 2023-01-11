import React from 'react'
import {useState,useEffect,useContext} from 'react';
import { productContext } from './Productprovider';
const Home = (props) => {
  const {addToCart,addToCartList,setAddToCartList} = useContext(productContext)
  const [product,setProduct]= useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              setProduct(json)
            })})
  return (
    <>
      <div className="row" style={{backgroundColor:"#f8f5f2"}}>        
      {product.map((products,key=products.id)=>{
          return(
            <div className="card d-flex flex-column mt-5 ms-5 me-1 mx-auto shadow-lg rounded-3" style={{width: "16rem"}}>
              <img className="card-img-top mx-auto rounded-3 p-3" style={{width:"180px",height:"200px"}} src={products.image} alt="product"/>
              <div className="card-body">
                <h6 className="card-title">{products.title.substring(0,20)+"..."}</h6>
                <p>{products.category}</p>
                <div className="d-flex flex-row justify-content-between mx-auto mt-2">
                  <h4 className="text-sm-start" style={{color:"#ff8906"}}>${products.price}</h4>
                  <button className="btn d-flex text-white rounded-3" onClick={()=>addToCart(products)} style={{backgroundColor:"#078080"}}>Add to Card</button>
                </div>
              </div>
            </div>
          )
      })}
      </div>
    </>
  )
}
export default Home;