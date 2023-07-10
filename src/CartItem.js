import { useState } from "react";
//UseState hook is used to store data 

function CartItem(props){

    //useState method returns 2 items
    //It returns a value for the itemName variable
    //It also returns a function to modify that data called setItemName

    //const [itemName, setItemName] = useState("Hat");
    //const [itemQuantity, setItemQuantity] = useState(2);

    return(
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    <input type="text" className='form-control' value={props.name} onChange={(evt) => props.onNameChange(evt)} />
                </div>
                <div className='col-md-3'>
                    <span className="text-center">{props.quantity}</span>
                </div>
                <div className='col-md-3'>
                    {/* <button className="btn btn-primary" onClick={(evt) => props.setItemQuantity(props.quantity+1)} >
                        <span>Add</span>
                    </button> */}
                </div>
                <div className='col-md-3'>
                    {/* <button className="btn btn-secondary" onClick={(evt) => props.setItemQuantity(props.quantity-1)}>
                        <span>Remove</span>
                     </button> */}
                </div>
            </div>
        </div>
    );
}

export default CartItem;