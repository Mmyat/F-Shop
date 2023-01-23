import React, {useContext,useState} from 'react';
import {useStateContext} from './Productprovider';
const Cart = (props) => {
    const {addToCartList} = useStateContext()

    const [counter, setCounter] = useState(1);
    const plus = () => {
        setCounter(count => count + 1)
    }
    const minus = () => {
        setCounter(count => count - 1)
    }
    return (
        <div className="container-fluid d-flex flex-column">
            {
                addToCartList.map((addedList)=>{
                    return(
                        <div className="card d-flex flex-row mt-3">
                            <img className="card-img-top p-2 rounded-2" src={addedList.image} style={{width:"180px",height:"200px"}} alt="cardImage"/>
                            <div className="card-body">
                                <h4 className="card-title">{addedList.title}</h4>
                                <p>{addedList.category}</p>
                                <p>{addedList.description}</p>
                                <div className="d-flex flex-row justify-content-around mx-auto mt-2">
                                    <h5 className="text-sm-start" style={{color:"#ff8906"}}>${addedList.price}</h5>
                                    <div className="d-flex flex-row mx-auto">
                                        <button className="btn d-flex text-white rounded-3" onClick={()=>plus()} style={{backgroundColor:"#078080"}}>+</button>
                                        <h5>{counter}</h5>
                                        <button className="btn d-flex text-white rounded-3" onClick={()=>minus()} style={{backgroundColor:"#078080"}}>-</button>
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
