import React, { useEffect } from 'react'
import Data from './products'
import Cart from './cart'

const pro = [...Data];


function Showproducts() {
    
    const [cartItems,setCartItems] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    
    const add_to_cart = (item)=>{
        //console.log({item})
        const temp = [...cartItems, item];
        setCartItems(temp);
    }
     const remove_item = (idx)=> {
        console.log("index",idx);
       const temp_2 = cartItems.filter(val=>{
            return val!==idx
        })
        // console.log("temp_2",temp_2,"idx",idx,"cartItems",cartItems);
        setCartItems(temp_2);
        console.log("2-->",cartItems);
    };
    
    // useEffect(() => {
    //         const temp = total + price;
    //         console.log(temp,total,price);
    //         setTotal(temp);
    // }, [cartItems])

    return (
        <div>
            <hr></hr>
                    <h1 className="text-center">All Products</h1>
                    <hr></hr>
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {pro.map((item,index)=>{
               return (
                    <div className="col">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.product}</h5>
                                <h5 className="card-title">₹{item.price}</h5>
                                <button className="btn btn-primary" onClick={()=>add_to_cart(index)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
               )
                })};
            </div>
         <Cart cartItems={cartItems} remove_item={remove_item}  total={total} />
        </div>
    )
}

export default Showproducts
