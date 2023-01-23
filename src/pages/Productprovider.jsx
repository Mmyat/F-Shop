import {useState, createContext, useEffect, useContext,useReducer} from 'react';
import {getData} from "../Api";
const productContext= createContext()
const ProductProvider = ({children}) => {
  const [addToCartList,setAddToCartList]= useState([]);
  //const [search,setSearch]=useState("")
  //const [count,setCount]=useState(0)
  /*useEffect(()=>{
    dispatch({type:"GetProduct",payload: product});
    const filterList=product.filter(pd=>pd.title.toLowerCase().include);
    dispatch({type:"GetProduct",payload: filterList});
  },[product,search])*/
  return (
    <productContext.Provider value={{addToCartList,setAddToCartList,
    addToCart:(products)=>{
      //console.log(products.title);
      setAddToCartList([...addToCartList,products])
    }}}>
      {children}
    </productContext.Provider>
  )
}
export const useStateContext=()=>useContext(productContext);
export default ProductProvider;