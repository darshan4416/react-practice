import React, {useEffect} from 'react'
import Data from './products'


function Cart({cartItems,remove_item, total}) {
    
    const uniqueIds = [...new Set(cartItems)];

    return (
        <>
            {uniqueIds.length?(
                <div>
                    <hr></hr>
                    <h1 className="text-center">Cart({uniqueIds.length})  Total(₹{total})</h1>
                    <hr></hr>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                   {uniqueIds.map((item)=>{
                      return (
                           <div className="col">
                               <div className="card">
                                   <img src={Data[item].image} className="card-img-top" alt="..."></img>
                                   <div className="card-body">
                                       <h5 className="card-title">{Data[item].product}</h5>
                                       <h5 className="card-title">₹{Data[item].price}</h5>
                                       <button className="btn btn-danger" onClick={()=>remove_item(item)}>Remove</button>
                                   </div>
                               </div>
                           </div>
                      )
                       })};
                   </div>
                </div>
              
            ):(
                <h1 className="text-center"> Cart is empty Total(0)</h1>
            )}
           
        </>
    )
}

export default Cart
