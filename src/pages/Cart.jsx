import {useContext,useState} from 'react';
import { productContext } from './Productprovider';
export const Price=(price)=>{
  return(<h4 className="text-sm-start" style={{color:"#ff8906"}}>{price}</h4>)
}
const Cart = (props) => {
  const {addToCartList}= useContext(productContext)
  const {itemPrice,setItemPrice}=useState([addToCartList.price])
  const [counter, setCounter] = useState(1);
  const plus = () => {
      setCounter(count => count + 1)
      setItemPrice([...itemPrice,price=>price*counter])
  };
  const minus = () => {
    if (counter > 1){
      setCounter(count => count - 1);
      setItemPrice([...itemPrice,price=>price/counter]);}
  };
  return (
    <div>
      {
        addToCartList.map((products)=>{
          return(
            <div className="card d-flex flex-row mt-5 ms-3 mx-auto me-3 shadow-lg rounded-3">
              <img className="card-img-top mx-auto rounded-3 p-3" style={{width:"180px",height:"200px"}} src={products.image} alt="product"/>
              <div className="card-body">
                <h5 className="card-title">{products.title}</h5>
                <p>{products.category}</p>
                <p>{products.description}</p>
                <div className="d-flex flex-row justify-content-between mx-auto mt-2">
                  <Price price={itemPrice}/>
                  <div className="d-flex flex-row ms-auto mx-auto ">
                    <button className="btn" onClick={()=>plus()}  style={{backgroundColor:"#078080"}}>+</button>
                    <p key={products.id}>{counter}</p>
                    <button className="btn" onClick={()=>minus()} style={{backgroundColor:"#078080"}}>-</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Cart;
