import React, {useReducer} from 'react'
import {useState,useEffect,useContext} from 'react';
import { useStateContext } from './Productprovider';
import {getData} from "../Api";
const Home = (props) => {
  const {addToCart} = useStateContext()
    const [product,setProduct]= useState([]);
    const initialState={
        product:[],
    }
    const reducer=(state,action)=>{
        switch (action.type){
            case "GetProduct":
                return {...state,product:action.payload};
            default:
                return state;
        }
    }
    const [state,dispatch]=useReducer(reducer,initialState);
    const getProducts=async ()=>{
        const data=await  getData('/products')
        console.log(data)
        setProduct(data)
    }
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <>
      <div className="row">
        {/*product.map((products,key=products.id)=>{
          return(
            <div className="card d-flex flex-column justify-content-center align-items-center mt-5 ms-auto me-1 mx-auto shadow-lg rounded-3" style={{width: "16rem"}}>
              <img className="card-img-top mx-auto rounded-3 p-3" style={{width:"180px",height:"200px"}} src={products.image} alt="product"/>
              <div className="card-body">
                <h6 className="card-title">{products.title.substring(0,20)+"..."}</h6>
                <p>{products.category}</p>
                <div className="d-flex flex-row justify-content-around mx-auto mt-2">
                  <h4 className="text-sm-start" style={{color:"#ff8906"}}>${products.price}</h4>
                  <button className="btn d-flex text-white rounded-3" onClick={()=>addToCart(products)} style={{backgroundColor:"#078080"}}>Add to Card</button>
                </div>
              </div>
            </div>
          )})}*/}
      </div>
    </>
  )
}
export default Home;