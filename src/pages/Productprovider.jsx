import {useState,createContext} from 'react';
export const productContext= createContext()
const ProductProvider = ({children}) => {
  const [addToCartList,setAddToCartList]= useState([]);
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

export default ProductProvider;